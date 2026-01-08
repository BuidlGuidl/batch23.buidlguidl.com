import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const ShivamPage: NextPage = () => {
    return (
        <div className="flex items-center flex-col flex-grow pt-10 px-4">
            <div className="max-w-4xl w-full bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-300">
                {/* Banner with modern gradient */}
                <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                    <div className="absolute -bottom-16 left-8 p-1 bg-base-100 rounded-full shadow-lg">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-base-100 bg-base-300">
                            <Image
                                src="https://unavatar.io/github/phipsae"
                                alt="Shivam"
                                width={128}
                                height={128}
                                className="object-cover w-full h-full"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-20 pb-12 px-8 flex flex-col md:flex-row gap-8">
                    {/* Left Details */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">Shivam</h1>
                                <p className="text-xl text-primary font-medium mb-4 flex items-center gap-2">
                                    Full-Stack & Blockchain Developer
                                    <span className="badge badge-neutral bg-base-300 text-base-content border-base-300 font-normal">
                                        Web3 & AI/ML
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex flex-col bg-base-200 px-4 py-2 rounded-xl border border-base-300">
                                <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Address</span>
                                <Address address="0x7adfC0d7E2df25998f5978e029D310b7CEfc8F4A" />
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-base-content/80 mb-8 max-w-2xl">
                            Shivam is a passionate full-stack blockchain developer from India 🇮🇳, specializing in Web3 development,
                            AI/ML integration, and NFT analytics. He builds scalable decentralized applications using modern
                            technologies and is always exploring the latest tech trends with a strong cup of coffee ☕.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/phipsae"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-ghost border border-base-300 hover:bg-base-300"
                                title="GitHub"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/phipsae"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-ghost border border-base-300 hover:bg-base-300"
                                title="Twitter"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-ghost border border-base-300 hover:bg-base-300"
                                title="Portfolio"
                            >
                                <GlobeAltIcon className="w-6 h-6 text-emerald-500" />
                            </a>
                        </div>
                    </div>

                    {/* Right Stats/Experience Card (Creative Element) */}
                    <div className="md:w-72">
                        <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
                            <h3 className="text-lg font-bold mb-4 border-b border-base-300 pb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Java",
                                    "TypeScript",
                                    "Solidity",
                                    "Next.js",
                                    "Blockchain",
                                    "NFTs",
                                    "Web3",
                                    "Hardhat",
                                    "Foundry",
                                    "Tailwind",
                                ].map(tech => (
                                    <span
                                        key={tech}
                                        className="bg-base-100 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm border border-base-300 bg-opacity-50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4 border-b border-base-300 pb-2">Current Focus</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Web3 Development</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>AI/ML Integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>NFT Analytics</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4 border-b border-base-300 pb-2">Philosophy</h3>
                                <p className="text-sm italic opacity-70">
                                    &quot;Building innovative solutions, one commit at a time 💡&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShivamPage;
