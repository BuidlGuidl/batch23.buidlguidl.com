import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

/**
 * Shivam's Personal Builder Page
 * Built for Batch 23 - BuidlGuidl
 */
const ShivamPage: NextPage = () => {
    const shivam = {
        name: "Shivam",
        address: "0x7adfC0d7E2df25998f5978e029D310b7CEfc8F4A",
        location: "India 🇮🇳",
        currentFocus: ["Web3 Development", "AI/ML Integration", "NFT Analytics"],
        learning: ["Smart Contracts", "Scalable Architectures", "Advanced Web3 Protocols"],
        collaboration: "Open to collaborating on blockchain & decentralized applications",
        askMeAbout: ["Java", "Full Stack", "Blockchain", "NFTs", "Web3"],
        funFact: "I code best with strong coffee ☕ and love exploring tech trends daily!",
        motto: "Building innovative solutions, one commit at a time 💡",
    };

    return (
        <div className="flex items-center flex-col grow pt-10 px-5 mb-20">
            <div className="bg-base-100 shadow-2xl rounded-[3rem] p-8 md:p-12 max-w-4xl w-full border border-primary/10 relative overflow-hidden">
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                    <div className="relative group">
                        <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-base-200 shadow-2xl transition-transform duration-500 relative aspect-square">
                            <Image
                                src="/avatars/shivam.jpg"
                                alt="Shivam Avatar"
                                fill
                                priority
                                quality={100}
                                className="object-cover object-[center_40%]"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-base-100 p-2 rounded-2xl shadow-lg border border-base-300">
                            <span className="text-2xl">{shivam.location.split(" ")[1]}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start grow text-center md:text-left">
                        <h1 className="text-5xl font-black mb-1 tracking-tight">
                            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                {shivam.name}
                            </span>
                        </h1>
                        <p className="text-xl font-medium opacity-60 mb-4 italic">&quot;{shivam.motto}&quot;</p>

                        <div className="mb-6 p-1 bg-base-200 rounded-2xl inline-block shadow-inner">
                            <Address address={shivam.address} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {shivam.askMeAbout.map(tag => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-secondary/10 text-secondary-content rounded-full text-sm font-bold border border-secondary/20 transition-all hover:bg-secondary/20 cursor-default"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 relative z-10">
                    {/* Current Focus Section */}
                    <div className="bg-base-200/50 backdrop-blur-sm rounded-[2rem] p-8 border border-base-300">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <span className="p-2 bg-primary/20 rounded-xl text-primary text-base">🎯</span>
                            Current Focus
                        </h3>
                        <ul className="space-y-4">
                            {shivam.currentFocus.map(item => (
                                <li key={item} className="flex items-center gap-3 font-medium opacity-80">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--p),0.5)]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Section */}
                    <div className="bg-base-200/50 backdrop-blur-sm rounded-[2rem] p-8 border border-base-300">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <span className="p-2 bg-secondary/20 rounded-xl text-secondary text-base">📚</span>
                            Deep Diving
                        </h3>
                        <ul className="space-y-4">
                            {shivam.learning.map(item => (
                                <li key={item} className="flex items-center gap-3 font-medium opacity-80">
                                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(var(--s),0.5)]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fun Fact & Collaboration */}
                    <div className="md:col-span-2 bg-gradient-to-br from-base-200 to-base-300 rounded-[2rem] p-8 border border-base-300 shadow-inner">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="flex-1">
                                <h4 className="text-lg font-bold mb-2 flex items-center gap-2 opacity-70 uppercase tracking-widest">
                                    Fun Fact
                                </h4>
                                <p className="text-xl font-medium leading-relaxed italic text-primary">{shivam.funFact}</p>
                            </div>
                            <div className="w-px h-16 bg-base-content/10 hidden md:block"></div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold mb-2 flex items-center gap-2 opacity-70 uppercase tracking-widest">
                                    Collaboration
                                </h4>
                                <p className="text-lg font-bold opacity-90">{shivam.collaboration}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-base-content/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 font-medium">
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/phipsae"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors flex items-center gap-2 underline decoration-primary/30 underline-offset-4"
                        >
                            GitHub
                        </a>
                        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                            Twitter
                        </a>
                    </div>
                    <p className="text-sm">Batch 23 • {shivam.location}</p>
                </div>
            </div>
        </div>
    );
};

export default ShivamPage;
