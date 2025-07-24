import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedHeader from '../components/AnimatedHeader';
import MobileNav from '../components/MobileNav';

export const metadata: Metadata = {
  title: 'Farouk Alsajee - Software Engineer & Business Strategist',
  description: 'Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy.',
  keywords: ['Software Engineer', 'Business Strategist', 'React', 'TypeScript', 'Node.js', 'Web Development', 'Enterprise Solutions'],
  authors: [{ name: 'Farouk Alsajee' }],
  creator: 'Farouk Alsajee',
  publisher: 'Farouk Alsajee',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.faroukalsajee.com',
    siteName: 'Farouk Alsajee',
    title: 'Farouk Alsajee - Software Engineer & Business Strategist',
    description: 'Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy.',
    images: [
      {
        url: 'https://www.faroukalsajee.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Farouk Alsajee - Software Engineer & Business Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farouk Alsajee - Software Engineer & Business Strategist',
    description: 'Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy.',
    images: ['https://www.faroukalsajee.com/og-image.png'],
    creator: '@faroukalsajee',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.ico',
  },
  manifest: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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
