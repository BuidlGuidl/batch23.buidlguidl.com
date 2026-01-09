"use client";

import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "../../../components/magicui/particles";
import { BorderBeam } from "../../../components/magicui/border-beam";
import ShimmerButton from "../../../components/magicui/shimmer-button";

const ShivamPage: NextPage = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "$ whoami";
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    // Theme-aware colors
    const isDark = mounted && theme === "dark";
    const bgGradient = isDark
        ? "from-slate-950 via-purple-950 to-slate-950"
        : "from-blue-50 via-purple-50 to-pink-50";
    const cardBg = isDark
        ? "rgba(15, 23, 42, 0.8)"
        : "rgba(255, 255, 255, 0.9)";
    const textPrimary = isDark ? "text-slate-100" : "text-slate-900";
    const textSecondary = isDark ? "text-slate-300" : "text-slate-700";
    const borderColor = isDark
        ? "rgba(139, 92, 246, 0.3)"
        : "rgba(139, 92, 246, 0.2)";

    return (
        <div className={`relative min-h-screen bg-gradient-to-br ${bgGradient} py-12 px-4 overflow-hidden transition-colors duration-500`}>
            {/* Animated Particles Background */}
            {mounted && (
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={isDark ? 100 : 60}
                    ease={80}
                    color={isDark ? "#8b5cf6" : "#a78bfa"}
                    refresh={false}
                />
            )}

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(6, 182, 212, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.4); }
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                .glass-card {
                    background: ${cardBg};
                    backdrop-filter: blur(20px);
                    border: 1px solid ${borderColor};
                }
                .terminal-text {
                    font-family: 'Courier New', monospace;
                }
                .gradient-text {
                    background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                    background-size: 1000px 100%;
                }
            `}</style>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Terminal Header */}
                <div className="glass-card rounded-t-3xl p-5 border-b border-purple-500/30 relative overflow-hidden shadow-2xl">
                    <BorderBeam size={250} duration={12} delay={9} />
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-all cursor-pointer hover:scale-110 shadow-lg"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-all cursor-pointer hover:scale-110 shadow-lg"></div>
                            <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-all cursor-pointer hover:scale-110 shadow-lg"></div>
                        </div>
                        <span className={`ml-4 text-cyan-400 terminal-text text-sm font-medium`}>
                            {typedText}<span className="animate-pulse">_</span>
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="glass-card rounded-b-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl" style={{ animation: 'glow 4s ease-in-out infinite' }}>
                    <BorderBeam size={300} duration={15} delay={0} />

                    {/* Decorative gradient orbs */}
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full blur-3xl"></div>

                    {/* Hero Section */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 mb-12" style={{ animation: 'scaleIn 0.6s ease-out' }}>
                        {/* Profile Photo - Now Clearly Visible! */}
                        <div className="relative group" style={{ animation: 'float 6s ease-in-out infinite' }}>
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>

                            {/* Main photo container */}
                            <div className="relative w-48 h-48 rounded-3xl overflow-hidden ring-4 ring-purple-500/50 ring-offset-4 ring-offset-transparent shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20"></div>
                                <Image
                                    src="https://image2url.com/r2/bucket2/images/1767906593644-456cf5a9-4751-4d19-bee4-b80c9268fa08.jpeg"
                                    alt="Shivam Soni"
                                    width={192}
                                    height={192}
                                    className="object-cover w-full h-full relative z-10"
                                    priority
                                    unoptimized
                                />
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Online status indicator */}
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 animate-pulse shadow-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div className="flex-1 text-center md:text-left">
                            <div className={`terminal-text text-cyan-400 text-sm mb-3 opacity-80 font-semibold tracking-wider`}>
                                // DEVELOPER PROFILE
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black gradient-text mb-5 hover:scale-105 transition-transform duration-300 leading-tight">
                                Shivam Soni
                            </h1>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                                <span className="group px-6 py-2.5 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border-2 border-cyan-500/50 rounded-full text-cyan-400 text-sm terminal-text font-bold hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 cursor-default shadow-lg hover:shadow-cyan-500/50">
                                    <span className="group-hover:animate-pulse">&lt;Full-Stack Dev /&gt;</span>
                                </span>
                                <span className="group px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-2 border-purple-500/50 rounded-full text-purple-400 text-sm terminal-text font-bold hover:from-purple-500/30 hover:to-purple-600/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 cursor-default shadow-lg hover:shadow-purple-500/50">
                                    <span className="group-hover:animate-pulse">{"{Blockchain}"}</span>
                                </span>
                                <span className="group px-6 py-2.5 bg-gradient-to-r from-pink-500/20 to-pink-600/20 border-2 border-pink-500/50 rounded-full text-pink-400 text-sm terminal-text font-bold hover:from-pink-500/30 hover:to-pink-600/30 hover:border-pink-400 transition-all duration-300 hover:scale-110 cursor-default shadow-lg hover:shadow-pink-500/50">
                                    <span className="group-hover:animate-pulse">[AI/ML]</span>
                                </span>
                            </div>

                            {/* Address */}
                            <div className="inline-block glass-card px-6 py-4 rounded-2xl border-2 border-cyan-500/40 mb-4 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/30">
                                <div className="text-cyan-400 text-xs terminal-text mb-2 opacity-70 font-bold tracking-widest">0x ADDRESS:</div>
                                <Address address="0x7adfC0d7E2df25998f5978e029D310b7CEfc8F4A" />
                            </div>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="glass-card rounded-2xl p-8 mb-8 border-2 border-purple-500/30 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300 shadow-xl" style={{ animation: 'slideIn 0.8s ease-out' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="terminal-text text-green-400 text-base mb-4 flex items-center gap-2 font-bold">
                                <span className="text-2xl">{">"}</span>
                                <span className="bg-green-400/10 px-3 py-1 rounded">cat bio.txt</span>
                            </div>
                            <p className={`${textSecondary} leading-relaxed text-lg font-medium`}>
                                Passionate full-stack blockchain developer from India 🇮🇳, crafting the future of Web3.
                                I specialize in building scalable decentralized applications, integrating AI/ML solutions,
                                and diving deep into NFT analytics. When I&apos;m not pushing commits, you&apos;ll find me exploring
                                cutting-edge tech with a strong cup of coffee ☕ and contributing to the open-source community.
                            </p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Tech Stack */}
                        <div className="glass-card rounded-2xl p-8 border-2 border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="terminal-text text-cyan-400 mb-6 flex items-center gap-2 text-lg font-bold">
                                    <span className="text-green-400 text-2xl">{">"}</span>
                                    <span className="bg-cyan-400/10 px-3 py-1 rounded">ls tech_stack/</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: "Solidity", level: 90, color: "bg-purple-500", glow: "shadow-purple-500/50" },
                                        { name: "TypeScript", level: 85, color: "bg-cyan-500", glow: "shadow-cyan-500/50" },
                                        { name: "Next.js", level: 88, color: "bg-pink-500", glow: "shadow-pink-500/50" },
                                        { name: "Java", level: 80, color: "bg-orange-500", glow: "shadow-orange-500/50" },
                                        { name: "Web3/Hardhat", level: 92, color: "bg-green-500", glow: "shadow-green-500/50" },
                                    ].map((skill, idx) => (
                                        <div key={skill.name} style={{ animation: `slideIn ${0.3 + idx * 0.1}s ease-out` }}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className={`${textPrimary} terminal-text font-bold`}>{skill.name}</span>
                                                <span className={`${textSecondary} terminal-text font-semibold`}>{skill.level}%</span>
                                            </div>
                                            <div className="h-3 bg-slate-800 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 hover:brightness-125 shadow-lg ${skill.glow} relative overflow-hidden`}
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Current Focus */}
                        <div className="glass-card rounded-2xl p-8 border-2 border-purple-500/30 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="terminal-text text-purple-400 mb-6 flex items-center gap-2 text-lg font-bold">
                                    <span className="text-green-400 text-2xl">{">"}</span>
                                    <span className="bg-purple-400/10 px-3 py-1 rounded">cat current_focus.json</span>
                                </div>
                                <div className="space-y-5 terminal-text text-sm">
                                    {[
                                        { icon: "▹", color: "text-cyan-400", title: "Web3 Development", desc: "Building dApps & Smart Contracts", bg: "bg-cyan-400/10" },
                                        { icon: "▹", color: "text-purple-400", title: "AI/ML Integration", desc: "Merging AI with Blockchain", bg: "bg-purple-400/10" },
                                        { icon: "▹", color: "text-pink-400", title: "NFT Analytics", desc: "Data-driven NFT insights", bg: "bg-pink-400/10" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 group/item hover:translate-x-3 transition-all duration-300 p-3 rounded-lg hover:bg-white/5">
                                            <span className={`${item.color} mt-1 text-2xl group-hover/item:scale-125 transition-transform`}>{item.icon}</span>
                                            <div className="flex-1">
                                                <div className={`${textPrimary} font-bold text-base mb-1`}>{item.title}</div>
                                                <div className={`${textSecondary} text-xs`}>{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy & Social */}
                    <div className="glass-card rounded-2xl p-8 border-2 border-green-500/30 mb-8 relative overflow-hidden group hover:border-green-400/50 transition-all duration-300 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="terminal-text text-green-400 mb-5 flex items-center gap-2 font-bold text-lg">
                                <span className="text-2xl">{">"}</span>
                                <span className="bg-green-400/10 px-3 py-1 rounded">echo $PHILOSOPHY</span>
                            </div>
                            <blockquote className={`${textPrimary} italic border-l-4 border-cyan-500 pl-6 mb-10 text-xl leading-relaxed font-medium bg-gradient-to-r from-cyan-500/5 to-transparent py-4 rounded-r-lg`}>
                                &quot;Building innovative solutions, one commit at a time. Code is poetry, blockchain is the future,
                                and coffee is the fuel that makes it all possible.&quot; 💡☕
                            </blockquote>

                            <div className="terminal-text text-green-400 mb-6 flex items-center gap-2 font-bold text-lg">
                                <span className="text-2xl">{">"}</span>
                                <span className="bg-green-400/10 px-3 py-1 rounded">./connect.sh</span>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <ShimmerButton
                                    onClick={() => window.open("https://github.com/ShivamSoni20", "_blank")}
                                    className="flex items-center gap-3 px-8 py-4 text-base"
                                    shimmerColor="#06b6d4"
                                    background="rgba(6, 182, 212, 0.15)"
                                    shimmerSize="0.15em"
                                >
                                    <svg className="w-6 h-6 fill-cyan-400" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="text-cyan-400 terminal-text font-bold">GitHub</span>
                                </ShimmerButton>

                                <ShimmerButton
                                    onClick={() => window.open("https://x.com/shivam_soni18", "_blank")}
                                    className="flex items-center gap-3 px-8 py-4 text-base"
                                    shimmerColor="#8b5cf6"
                                    background="rgba(139, 92, 246, 0.15)"
                                    shimmerSize="0.15em"
                                >
                                    <svg className="w-6 h-6 fill-purple-400" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    <span className="text-purple-400 terminal-text font-bold">Twitter</span>
                                </ShimmerButton>

                                <ShimmerButton
                                    onClick={() => window.open("https://shivamsoni-gray.vercel.app/", "_blank")}
                                    className="flex items-center gap-3 px-8 py-4 text-base"
                                    shimmerColor="#ec4899"
                                    background="rgba(236, 72, 153, 0.15)"
                                    shimmerSize="0.15em"
                                >
                                    <svg className="w-6 h-6 stroke-pink-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <span className="text-pink-400 terminal-text font-bold">Portfolio</span>
                                </ShimmerButton>
                            </div>
                        </div>
                    </div>

                    {/* Footer Terminal Line */}
                    <div className={`terminal-text ${textSecondary} text-sm text-center pt-6 border-t-2 border-slate-700/50 dark:border-slate-600/50 font-medium`}>
                        <span className="text-green-400 font-bold">shivam@web3</span>
                        <span className="text-cyan-400">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-purple-400">$</span>
                        <span className="animate-pulse ml-1">_</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShivamPage;
