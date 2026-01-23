"use client";

import { ContributionItem } from "../../components/ContributionItem";
import { NextPage } from "next";
import { useGitHubContributions } from "~~/hooks/useGitHubContributions";

const ContributionsPage: NextPage = () => {
  const { contributions, isLoading } = useGitHubContributions();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-10 text-primary">Batch Contributions</h1>

      {contributions.length === 0 ? (
        <p className="text-xl opacity-50">No merged contributions found yet.</p>
      ) : (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {contributions.map((pr, index) => (
            <ContributionItem key={pr.number} contribution={pr} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContributionsPage;
