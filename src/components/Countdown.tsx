"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-07T09:00:00+05:30").getTime();

interface TimeUnit {
    value: number;
    label: string;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

    useEffect(() => {
        const calc = () => {
            const now = Date.now();
            const diff = Math.max(0, TARGET - now);
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);
            setTimeLeft([
                { value: d, label: "Days" },
                { value: h, label: "Hours" },
                { value: m, label: "Minutes" },
                { value: s, label: "Seconds" },
            ]);
        };
        calc();
        const interval = setInterval(calc, 1000);
        return () => clearInterval(interval);
    }, []);

    if (timeLeft.length === 0) return null;

    return (
        <div className="flex gap-4 md:gap-6">
            {timeLeft.map((unit) => (
                <div key={unit.label} className="text-center">
                    <div className="glass rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
                        <span suppressHydrationWarning className="text-2xl md:text-4xl font-bold text-neon tabular-nums">
                            {String(unit.value).padStart(2, "0")}
                        </span>
                    </div>
                    <span className="text-text-secondary text-xs mt-2 block uppercase tracking-wider">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
