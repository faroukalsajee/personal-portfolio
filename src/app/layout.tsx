import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Farouk Alsajee',
  description: 'Software Engineer & Business Strategist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-light antialiased dark:bg-black dark:text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10 dark:bg-black/95 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-light tracking-wide hover:opacity-70 transition-opacity relative group">
                <span className="relative cursor-pointer inline-block align-middle">
                  <span className="inline-block">F</span>
                  <span className="absolute top-0 left-full flex whitespace-nowrap pointer-events-none">
                    {"arouk Alsajee".split("").map((char, i, arr) => (
                      <span
                        key={i}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity${char === 'A' ? ' ml-2' : ''}`}
                        style={{ transitionDelay: `${i * 0.07}s, ${(arr.length - 1 - i) * 0.07}s` }}
                      >
                        {char === ' ' ? '' : char}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
              <div className="hidden md:flex space-x-12 text-sm tracking-wide">
                <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
                <Link href="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity">Resume</Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
              </div>
              <div className="flex items-center">
                <ThemeToggle />
              </div>
              <div className="md:hidden">
                <button className="text-black">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
