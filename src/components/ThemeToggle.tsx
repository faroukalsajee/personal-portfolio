"use client";
import React, { useEffect, useState } from "react";
import { MdLightbulbOutline, MdLightbulb } from 'react-icons/md';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        // On mount, check localStorage or <html> class
        const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
        if (stored === 'dark' || (!stored && document.documentElement.classList.contains('dark'))) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (!theme) return;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    if (!theme) return null;

    return (
        <button
            aria-label="Toggle Dark Mode"
            className={`ml-4 w-12 h-7 flex items-center rounded-full border border-black/20 dark:border-white/30 bg-white dark:bg-black transition-colors duration-500 relative focus:outline-none`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            <span
                className={`absolute left-1 top-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 shadow-md
                    ${theme === 'dark' ? 'translate-x-5 bg-neutral-900' : 'translate-x-0 bg-yellow-400'}`}
            >
                {theme === 'dark' ? (
                    <MdLightbulb className="w-4 h-4 text-yellow-300" />
                ) : (
                    <MdLightbulbOutline className="w-4 h-4 text-yellow-500" />
                )}
            </span>
        </button>
    );
} 