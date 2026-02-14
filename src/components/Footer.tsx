"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, Radio, Power, Shield } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-primary border-t border-neon/10 relative overflow-hidden">
            {/* Scan line effect */}
            <div className="absolute inset-0 scan-lines opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
                            <div className="relative">
                                <div className="absolute inset-0 bg-neon/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Image src="/logo.webp" alt="NOVUS Logo" width={32} height={32} className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                            <span className="font-bold text-xl tracking-tighter text-white/50 group-hover:text-white transition-colors">
                                NOVUS<span className="text-neon/50 group-hover:text-neon">.OS</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-mono-cyber">
                            Unlock your potential. The ultimate 24-hour hackathon experience.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-neon/60 font-mono-cyber uppercase border border-neon/20 px-3 py-1 rounded inline-block">
                            <Radio size={12} className="animate-pulse" /> Signal Strong
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <span className="w-1 h-4 bg-neon" /> Navigation
                        </h4>
                        <ul className="space-y-3 text-sm text-text-secondary font-mono-cyber">
                            {['Schedule', 'FAQ', 'Contact', 'Register'].map((item, i) => {
                                const hrefs = ['/schedule', '/faq', '/contact', '/register'];
                                return (
                                    <li key={item}>
                                        <Link href={hrefs[i]} className="hover:text-neon transition-colors flex items-center gap-2 group">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neon">{">"}</span>
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <span className="w-1 h-4 bg-neon" /> System
                        </h4>
                        <ul className="space-y-3 text-sm text-text-secondary font-mono-cyber">
                            {['Code of Conduct', 'Privacy Protocol', 'Terms of Service', 'Sponsors'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-neon transition-colors flex items-center gap-2 group">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neon">{">"}</span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <span className="w-1 h-4 bg-neon" /> Connection
                        </h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">@</span>
                                <span>hello@novushack.io</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon mt-1">#</span>
                                <span>Malla Reddy (MR)<br />Deemed to be University,<br />Hyderabad, IN</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-text-secondary hover:text-neon hover:scale-110 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary font-mono-cyber">
                    <p>© 2026 NOVUS SYSTEMS. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Power size={12} className="text-neon" /> SYSTEM ONLINE
                        </span>
                        <span className="flex items-center gap-2">
                            <Shield size={12} className="text-neon" /> SECURE CONNECTION
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
