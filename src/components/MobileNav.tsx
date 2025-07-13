"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="md:hidden relative">
            <button
                className="text-black dark:text-white focus:outline-none transition-colors transition-none"
                onClick={() => setOpen((v) => !v)}
                aria-label="Open navigation menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Sliding dropdown */}
            <div
                className={`fixed top-20 right-0 w-3/4 max-w-xs z-50 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} bg-white dark:bg-black rounded-l-lg shadow-lg py-6 px-6 flex flex-col space-y-6 text-lg tracking-wide border-l border-black/10 dark:border-white/10 transition-colors transition-none`}
                style={{ pointerEvents: open ? 'auto' : 'none' }}
            >
                <Link href="/" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/projects" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Projects</Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Resume</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Contact</Link>
            </div>
        </div>
    );
} 