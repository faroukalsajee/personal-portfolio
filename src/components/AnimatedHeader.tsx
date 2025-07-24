"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAME = "Farouk Alsajee";
const letters = NAME.split("");

export default function AnimatedHeader() {
    const [hovered, setHovered] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHovered(false);
        setHovered(true);
        const hideTimeout = setTimeout(() => {
            setHovered(false);
            setHasAnimated(true);
        }, (letters.length - 2) * 50 * 2);
        return () => clearTimeout(hideTimeout);
    }, []);

    const handleMouseEnter = () => hasAnimated && setHovered(true);
    const handleMouseLeave = () => hasAnimated && setHovered(false);

    return (
        <Link
            href="/"
            className="text-lg font-light tracking-wide relative group"
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
                                    ? `${i * 50}ms`
                                    : `${(letters.length - 2 - i) * 50}ms`,
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