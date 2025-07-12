import React from 'react'
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
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
              <AnimatedHeader />
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
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  )
}
