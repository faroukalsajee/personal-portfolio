"use client";
import React, { useState } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedHeader from '../components/AnimatedHeader';

export const metadata: Metadata = {
  title: 'Farouk Alsajee',
  description: 'Software Engineer & Business Strategist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white text-black font-light antialiased dark:bg-black dark:text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10 dark:bg-black/95 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="dark:text-white">
                <AnimatedHeader />
              </div>
              <div className="hidden md:flex space-x-12 text-lg tracking-wide">
                <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
                <Link href="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity">Resume</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
              </div>
              <div className="flex items-center">
                {/* ThemeToggle moved to floating position */}
              </div>
              <div className="md:hidden">
                <button
                  className="text-black dark:text-white focus:outline-none"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-label="Open navigation menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 bg-white dark:bg-black rounded shadow-lg py-4 px-6 flex flex-col space-y-4 text-lg tracking-wide border border-black/10 dark:border-white/10">
                <Link href="/" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/projects" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>
            )}
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  )
}
