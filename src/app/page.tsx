"use client";

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 leading-none text-black dark:text-white">
              Farouk<br />
              Alsajee
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-12 text-black/70 dark:text-gray-300 max-w-3xl mx-auto">
              Software Engineer | Business Strategist
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl font-light mb-16 text-black/60 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals.
              Proven track record of building scalable web applications and enterprise solutions, driving product innovation,
              and aligning technical execution with business strategy.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/resume" className="btn hover-lift">
                View Resume
              </Link>
              <Link href="/projects" className="btn btn-primary hover-lift">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-black/5 dark:bg-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight text-black dark:text-white">
                About
              </h2>
              <p className="text-lg font-light leading-relaxed text-black/70 dark:text-gray-300 mb-6">
                Expert in React, TypeScript, Node.js, and cloud technologies, with hands-on leadership in modern development practices,
                automated testing, CI/CD, and mentoring cross-functional teams.
              </p>
              <p className="text-lg font-light leading-relaxed text-black/70 dark:text-gray-300">
                My approach combines technical expertise with strategic thinking, enabling me to
                deliver solutions that not only meet technical requirements but also drive business value.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="border-l-4 border-black dark:border-white pl-6">
                  <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Full-Stack Development</h3>
                  <p className="text-black/60 dark:text-gray-400 font-light">React, TypeScript, Node.js, Python, MongoDB, PostgreSQL</p>
                </div>
                <div className="border-l-4 border-black dark:border-white pl-6">
                  <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Testing & DevOps</h3>
                  <p className="text-black/60 dark:text-gray-400 font-light">Playwright, Jest, GitHub Actions, CI/CD, Docker</p>
                </div>
                <div className="border-l-4 border-black dark:border-white pl-6">
                  <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Business Strategy</h3>
                  <p className="text-black/60 dark:text-gray-400 font-light">Product Development, Technical Leadership, Team Mentoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight text-black dark:text-white">
              Let's Connect
            </h2>
            <p className="text-xl font-light mb-12 text-black/70 dark:text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating on a project or discussing opportunities?
              I&apos;d love to hear from you.
            </p>
            <a href="mailto:faroukalsajee@gmail.com" className="btn btn-primary hover-lift">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
