"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Terminal, Activity } from "lucide-react";
import CyberButton from "./CyberButton";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        const updateTime = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-bg-primary/90 backdrop-blur-xl border-neon/20 shadow-[0_0_20px_rgba(0,255,102,0.1)]"
                : "bg-transparent border-transparent"
                }`}
        >
            {/* Top System Bar */}
            <div className="hidden md:flex justify-between items-center px-6 py-1 bg-black/40 border-b border-white/5 text-[10px] text-neon/60 font-mono-cyber uppercase tracking-widest">
                <div className="flex gap-4">
                    <span>SYS.VER.1.0.4</span>
                    <span className="flex items-center gap-1">
                        <Activity size={10} className="animate-pulse" /> ONLINE
                    </span>
                </div>
                <div suppressHydrationWarning>{time || "00:00:00"} UTC+0530</div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="relative">
                        <div className="absolute inset-0 bg-neon/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image src="/logo.webp" alt="NOVUS Logo" width={40} height={40} className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <div>
                        <span className="font-bold text-lg md:text-xl tracking-tighter text-white">NOVUS</span>
                        <span className="text-[10px] md:text-xs text-neon block -mt-1 font-mono-cyber tracking-widest group-hover:text-white transition-colors">OS_v1.0.4</span>
                    </div>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-all relative group ${pathname === link.href ? "text-neon" : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            <span className="relative z-10">{link.label}</span>
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon shadow-[0_0_10px_rgba(0,255,102,0.8)]"
                                />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon/50 transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                    <CyberButton href="/register" variant="glitch" className="px-6 py-2 text-xs">
                        Register
                    </CyberButton>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-neon"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Terminal size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-neon/20 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4 font-mono-cyber">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-sm py-2 border-l-2 pl-4 transition-all ${pathname === link.href
                                        ? "border-neon text-neon bg-neon/5"
                                        : "border-transparent text-text-secondary"
                                        }`}
                                >
                                    {`> ${link.label}`}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <CyberButton href="/register" onClick={() => setMobileOpen(false)} className="w-full">
                                    Register Now
                                </CyberButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
