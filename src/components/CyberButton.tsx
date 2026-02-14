"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface CyberButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "glitch";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function CyberButton({
    children,
    href,
    onClick,
    className = "",
    variant = "primary",
    disabled = false,
    type = "button",
}: CyberButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center px-8 py-3 font-bold uppercase tracking-widest transition-all duration-200 clip-path-polygon group disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-neon text-bg-primary hover:bg-neon-dim hover:shadow-[0_0_20px_rgba(0,255,102,0.6)]",
        secondary: "bg-transparent text-neon border border-neon/50 hover:bg-neon/10 hover:border-neon",
        glitch: "bg-bg-card text-neon border border-neon hover:animate-glitch",
    };

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === "primary" && !disabled && (
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            )}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            whileTap={!disabled ? { scale: 0.95 } : undefined}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </motion.button>
    );
}
