"use client";
import React, { useState } from "react";
import Link from "next/link";

const NAME = "Farouk Alsajee";
const letters = NAME.split("");

export default function AnimatedHeader() {
    const [hovered, setHovered] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    // On click/tap, reveal then auto-hide
    const handleClick = (e: React.MouseEvent) => {
        setHovered(true);
        setHasAnimated(true);
        setTimeout(() => setHovered(false), 2000 + (letters.length - 2) * 80);
        // Always navigate to home
        // Let Link handle navigation
    };

    // On desktop, allow hover as well
    const handleMouseEnter = () => {
        if (hasAnimated) setHovered(true);
    };
    const handleMouseLeave = () => {
        if (hasAnimated) setHovered(false);
    };

    return (
        <Link
            href="/"
            className="text-lg font-light tracking-wide relative group"
            onClick={handleClick}
        >
            <span
                className="relative cursor-pointer inline-block align-middle font-light text-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="inline-block font-light text-lg">F</span>
                <span className="absolute top-0 left-full flex whitespace-nowrap pointer-events-none">
                    {letters.slice(1).map((char, i) => (
                        <span
                            key={i}
                            className={`inline-block transition-all duration-300 font-light text-lg${char === "A" ? " ml-2" : ""}`}
                            style={{
                                transitionDelay: hovered
                                    ? `${i * 80}ms`
                                    : `${(letters.length - 2 - i) * 80}ms`,
                                opacity: hovered ? 1 : 0,
                                transform: hovered ? "translateY(0)" : "translateY(10px)",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </span>
            </span>
        </Link>
    );
} 