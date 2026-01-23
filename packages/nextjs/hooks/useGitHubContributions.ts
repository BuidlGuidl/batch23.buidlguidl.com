import { useEffect, useState } from "react";

const CACHE_KEY = "github_contributions_cache";
const CACHE_DURATION = 5 * 60 * 1000;

const REPO_OWNER = "BuidlGuidl";
const REPO_NAME = "batch23.buidlguidl.com";
const REPO_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
const PULLS_URL = `${REPO_URL}/pulls?state=closed&sort=updated&direction=desc&per_page=100`;

export interface Contribution {
  number: number;
  title: string;
  author: string;
  mergedAt: string;
  createdAt: string;
  url: string;
  avatarUrl: string;
  type?: "pr" | "genesis";
}

interface CacheData {
  timestamp: number;
  data: Contribution[];
}

export const useGitHubContributions = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      const cachedString = localStorage.getItem(CACHE_KEY);
      if (cachedString) {
        try {
          const cached: CacheData = JSON.parse(cachedString);
          if (
            Date.now() - cached.timestamp < CACHE_DURATION &&
            cached.data.length > 0 &&
            "createdAt" in cached.data[0]
          ) {
            setContributions(cached.data);
            setIsLoading(false);
            return;
          }
        } catch (e) {
          console.error("Error parsing contributions cache", e);
        }
      }

      try {
        const [pullsRes, repoRes] = await Promise.all([fetch(PULLS_URL), fetch(REPO_URL)]);

        if (pullsRes.ok && repoRes.ok) {
          const rawPulls = await pullsRes.json();
          const repoData = await repoRes.json();

          if (Array.isArray(rawPulls)) {
            const mergedPRs: Contribution[] = rawPulls
              .filter((pr: any) => pr.merged_at)
              .map((pr: any) => ({
                number: pr.number,
                title: pr.title,
                author: pr.user.login,
                mergedAt: pr.merged_at,
                createdAt: pr.created_at,
                url: pr.html_url,
                avatarUrl: pr.user.avatar_url,
                type: "pr",
              }));

            const genesisEvent: Contribution = {
              number: 0,
              title: "Repository Created",
              author: repoData.owner?.login || REPO_OWNER,
              mergedAt: repoData.created_at,
              createdAt: repoData.created_at,
              url: repoData.html_url,
              avatarUrl: repoData.owner?.avatar_url,
              type: "genesis",
            };

            const allEvents = [...mergedPRs, genesisEvent].sort(
              (a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime(),
            );

            const newCache: CacheData = {
              timestamp: Date.now(),
              data: allEvents,
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
            setContributions(allEvents);
          }
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return { contributions, isLoading };
};
