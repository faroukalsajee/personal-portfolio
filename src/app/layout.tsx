import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedHeader from '../components/AnimatedHeader';
import MobileNav from '../components/MobileNav';

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
        <meta property="og:image" content="https://www.faroukalsajee.com/og-image.png" />
        <meta name="description" content="Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy." />
        <meta property="og:description" content="Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy." />
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
              <MobileNav />
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
