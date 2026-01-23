"use client";

import Image from "next/image";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { Contribution } from "~~/hooks/useGitHubContributions";

type ContributionItemProps = {
  contribution: Contribution;
  index: number;
};

const GenesisItem = ({ contribution }: { contribution: Contribution }) => {
  const Avatar = () => (
    <div className="avatar">
      <div className={`rounded-full ${contribution ? "w-6" : "w-4"}`}>
        <Image src={contribution.avatarUrl} alt={contribution.author} width={24} height={24} />
      </div>
    </div>
  );

  return (
    <li className="mb-12">
      <div className="timeline-middle relative">
        <div className="w-6 h-6 bg-accent rounded-full text-accent-content z-10 flex items-center justify-center">
          <StarIcon className="w-4 h-4" />
        </div>
        <div className="absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 w-max max-w-[80vw] md:max-w-xs z-20">
          <div className="text-lg font-black text-left md:text-center">
            <span>{contribution.title}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 justify-start md:justify-center md:flex-row-reverse">
            <Avatar />
            <div className="flex flex-col items-start md:items-center">
              <span className="text-sm opacity-80">Initialized by {contribution.author}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const PRItem = ({ contribution, index }: { contribution: Contribution; index: number }) => {
  const isRightAligned = index % 2 === 0;

  const durationMs = new Date(contribution.mergedAt).getTime() - new Date(contribution.createdAt).getTime();
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const displayDuration = days > 0 ? `${days}d ${hours % 24}h` : `${hours}h`;

  const mergeTitle = `
        Created: ${new Date(contribution.createdAt).toLocaleString()}
        | Merged: ${new Date(contribution.mergedAt).toLocaleString()}
    `;

  const dateStr = new Date(contribution.mergedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li>
      {index > 0 && <hr className="bg-primary" />}
      <div className="timeline-middle">
        <CheckCircleIcon className="w-5 h-5 text-primary" />
      </div>
      <div
        className={`timeline-${isRightAligned ? "start" : "end"} ${isRightAligned ? "md:text-end" : "md:text-start"} mb-10`}
      >
        <time className="font-mono italic text-xs opacity-70 px-1">{dateStr}</time>
        <div className={`text-lg font-black mt-1 text-left ${isRightAligned ? "md:text-right" : "md:text-left"}`}>
          <a
            href={contribution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary transition-colors block truncate max-w-[85vw] md:max-w-[14rem] lg:max-w-[20rem] xl:max-w-[28rem]"
          >
            <span className="text-sm font-normal opacity-70 mx-1">#{contribution.number}</span>
            {contribution.title}
          </a>
        </div>
        <div className={`flex items-center gap-2 mt-2 justify-start ${isRightAligned ? "md:flex-row-reverse" : ""}`}>
          <div className="avatar">
            <div className="w-6 rounded-full">
              <Image src={contribution.avatarUrl} alt={contribution.author} width={24} height={24} />
            </div>
          </div>
          <div className={`flex flex-col gap-1 items-start ${isRightAligned ? "md:items-end" : "md:items-start"}`}>
            <span className="text-sm opacity-80">by {contribution.author}</span>
          </div>
        </div>
        <span className="ml-2 text-xs opacity-50 block mt-1" title={mergeTitle}>
          merged in {displayDuration}
        </span>
      </div>
      <hr className="bg-primary" />
    </li>
  );
};

export const ContributionItem = ({ contribution, index }: ContributionItemProps) => {
  if (contribution.type === "genesis") {
    return <GenesisItem contribution={contribution} />;
  }
  return <PRItem contribution={contribution} index={index} />;
};
