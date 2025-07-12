"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="md:hidden">
            <button
                className="text-black dark:text-white focus:outline-none"
                onClick={() => setOpen((v) => !v)}
                aria-label="Open navigation menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {open && (
                <div className="mt-4 bg-white dark:bg-black rounded shadow-lg py-4 px-6 flex flex-col space-y-4 text-lg tracking-wide border border-black/10 dark:border-white/10 absolute right-0 z-50 transition-colors duration-500">
                    <Link href="/" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/projects" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Projects</Link>
                    <Link href="/resume" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Resume</Link>
                    <Link href="/contact" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
} 