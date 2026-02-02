import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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

interface GitHubPR {
  number: number;
  title: string;
  merged_at: string | null;
  created_at: string;
  html_url: string;
  user: { login: string; avatar_url: string };
}

const getCachedData = (): CacheData | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached: CacheData = JSON.parse(raw);
    if (cached.data.length > 0 && "createdAt" in cached.data[0]) {
      return cached;
    }
  } catch (e) {
    console.error("Error parsing contributions cache", e);
  }
  return null;
};

const fetchContributions = async (): Promise<Contribution[]> => {
  const [pullsRes, repoRes] = await Promise.all([fetch(PULLS_URL), fetch(REPO_URL)]);

  if (!pullsRes.ok || !repoRes.ok) {
    throw new Error("Failed to fetch contributions");
  }

  const rawPulls = await pullsRes.json();
  const repoData = await repoRes.json();

  if (!Array.isArray(rawPulls)) {
    throw new Error("Failed to fetch contributions");
  }

  const mergedPRs: Contribution[] = rawPulls
    .filter((pr: GitHubPR) => pr.merged_at)
    .map((pr: GitHubPR) => ({
      number: pr.number,
      title: pr.title,
      author: pr.user.login,
      mergedAt: pr.merged_at as string,
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

  return [...mergedPRs, genesisEvent].sort((a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime());
};

export const useGitHubContributions = () => {
  const {
    data: contributions,
    isLoading,
    isFetched,
    error,
    refetch,
  } = useQuery({
    queryKey: ["github-contributions"],
    queryFn: fetchContributions,
    staleTime: CACHE_DURATION,
    initialData: () => getCachedData()?.data,
    initialDataUpdatedAt: () => getCachedData()?.timestamp,
  });

  useEffect(() => {
    if (isFetched && contributions) {
      try {
        const newCache: CacheData = {
          timestamp: Date.now(),
          data: contributions,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
      } catch (e) {
        console.error("Failed to save contributions to local storage", e);
      }
    }
  }, [contributions, isFetched]);

  return { contributions: contributions || [], isLoading, error, refetch };
};
