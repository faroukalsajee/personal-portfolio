import Header from '../../components/Header'
import TechnicalSummary from '../../components/TechnicalSummary'
import TechnicalSkills from '../../components/TechnicalSkills'
import ProfessionalExperience from '../../components/ProfessionalExperience'
import TechnicalProjects from '../../components/TechnicalProjects'
import Education from '../../components/Education'
import AdditionalInfo from '../../components/AdditionalInfo'

export default function ResumePage() {
    return (
        <div className="min-h-screen py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-black dark:text-white">
                        FAROUK ALSAJEE
                    </h1>
                    <p className="text-xl font-light text-black/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Software Engineer | Business Strategist
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-black/60 dark:text-gray-400">
                        <a href="mailto:faroukalsajee@gmail.com" className="hover:opacity-70 transition-opacity">
                            faroukalsajee@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/faroukalsajee/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                            LinkedIn
                        </a>
                        <a href="https://github.com/faroukalsajee" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Resume Content */}
                <div className="space-y-16">
                    <section className="animate-fade-in-up">
                        <h2 className="text-3xl font-light mb-8 tracking-tight text-black dark:text-white">Technical Summary</h2>
                        <p className="text-lg font-light leading-relaxed text-black/70 dark:text-gray-300">
                            Software Engineer | Business Strategist with 5+ years of experience bridging technology and business goals. Proven track record of building scalable web applications and enterprise solutions, driving product innovation, and aligning technical execution with business strategy. Expert in React, TypeScript, Node.js, and cloud technologies, with hands-on leadership in modern development practices, automated testing, CI/CD, and mentoring cross-functional teams.
                        </p>
                    </section>

                    <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-3xl font-light mb-8 tracking-tight text-black dark:text-white">Technical Skills</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Languages & Frameworks</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Frontend</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">React, Next.js, Tailwind CSS, Chakra UI, Responsive Design</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Backend & Database</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">Node.js, Express.js, MongoDB, PostgreSQL, RESTful APIs</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Testing & QA</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">Playwright, Jest, Mocha, TDD, Automated Testing</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">DevOps & Tools</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">GitHub Actions, Docker, CI/CD, VS Code, Cursor, Git</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Methodologies</h3>
                                <p className="text-black/60 dark:text-gray-400 font-light">Agile/Scrum, Code Review, Pair Programming, Technical Documentation</p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl font-light mb-8 tracking-tight text-black dark:text-white">Professional Experience</h2>
                        <div className="space-y-12">
                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Software Developer - Integration Solutions Services Inc</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-4">Oct 2022 - Dec 2024 | Full Time</p>
                                <div className="mb-6">
                                    <h4 className="text-lg font-normal mb-3 text-black dark:text-white">Technical Achievements:</h4>
                                    <ul className="space-y-2 font-light text-black/70 dark:text-gray-300">
                                        <li>• Built responsive frontend applications using React, TypeScript, and Tailwind CSS, resulting in 20% increase in Net Promoter Score (NPS)</li>
                                        <li>• Implemented automated CI/CD pipelines using GitHub Actions and Playwright, reducing release time by 30% and improving deployment reliability</li>
                                        <li>• Led code quality initiatives by reviewing 50+ pull requests and mentoring junior engineers, improving team velocity and code maintainability</li>
                                        <li>• Developed automated QA feedback loops across multiple projects, reducing bug rate by 25% and improving overall software quality</li>
                                        <li>• Collaborated with cross-functional teams to prioritize and deliver features for 3+ enterprise applications, ensuring technical requirements aligned with business needs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-normal mb-3 text-black dark:text-white">Technical Projects:</h4>
                                    <ul className="space-y-2 font-light text-black/70 dark:text-gray-300">
                                        <li>• Architected and developed RESTful APIs using Node.js and Express.js</li>
                                        <li>• Implemented comprehensive testing strategies using Playwright for end-to-end testing</li>
                                        <li>• Optimized database queries and improved application performance</li>
                                        <li>• Integrated third-party services and APIs for enhanced functionality</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Software Developer - PeaceGeeks</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-4">Oct 2021 - Dec 2022 | Internship</p>
                                <div className="mb-6">
                                    <h4 className="text-lg font-normal mb-3 text-black dark:text-white">Technical Achievements:</h4>
                                    <ul className="space-y-2 font-light text-black/70 dark:text-gray-300">
                                        <li>• Contributed to full-stack development in an agile environment using React Native and TypeScript</li>
                                        <li>• Enhanced MongoDB data handling and refactored legacy code to improve performance and maintainability</li>
                                        <li>• Implemented comprehensive testing using TDD principles and supported deployment to staging and production environments</li>
                                        <li>• Fixed critical UX, content, and functional bugs to improve overall user experience and application stability</li>
                                        <li>• Actively participated in technical processes including sprint planning, code reviews, and QA processes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-normal mb-3 text-black dark:text-white">Technical Projects:</h4>
                                    <ul className="space-y-2 font-light text-black/70 dark:text-gray-300">
                                        <li>• Developed React Native mobile application with TypeScript</li>
                                        <li>• Implemented data processing workflows using MongoDB</li>
                                        <li>• Created automated testing suites using modern testing frameworks</li>
                                        <li>• Contributed to deployment automation and monitoring</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Strategic Advisor - Rhythmi.ai</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-4">April 2025 - Present | Contract, Part Time</p>
                                <div>
                                    <h4 className="text-lg font-normal mb-3 text-black dark:text-white">Technical Leadership:</h4>
                                    <ul className="space-y-2 font-light text-black/70 dark:text-gray-300">
                                        <li>• Guided technical strategy for AI-powered Arabic sound platform, advising on technology stack and architecture decisions</li>
                                        <li>• Led product development initiatives by coordinating technical and go-to-market strategies across development teams</li>
                                        <li>• Provided technical consultation for market entry into Arabic-speaking regions, focusing on localization and UX optimization</li>
                                        <li>• Built strategic technical partnerships with regional and global technology partners to enhance platform capabilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h2 className="text-3xl font-light mb-8 tracking-tight text-black dark:text-white">Education & Certifications</h2>
                        <div className="space-y-8">
                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Diploma in Web Development</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-2">Lighthouse Labs, 2021</p>
                            </div>
                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Computer Programming with Python</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-2">BCIT, 2020</p>
                            </div>
                            <div className="border-l-4 border-black dark:border-white pl-8">
                                <h3 className="text-xl font-normal mb-2 text-black dark:text-white">Bachelor of Arts in English Literature</h3>
                                <p className="text-sm text-black/50 dark:text-gray-400 mb-2">Damascus University, 2011-2015</p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-3xl font-light mb-8 tracking-tight text-black dark:text-white">Additional Information</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-black/10 dark:border-white/20 p-6">
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Languages</h3>
                                <p className="text-black/70 dark:text-gray-300 font-light">English (Native), Arabic (Native)</p>
                            </div>
                            <div className="border border-black/10 dark:border-white/20 p-6">
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Technical Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">AI/ML Integration</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Cloud Architecture</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Performance Optimization</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Open Source Contribution</span>
                                </div>
                            </div>
                            <div className="border border-black/10 dark:border-white/20 p-6">
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Professional Development</h3>
                                <p className="text-black/70 dark:text-gray-300 font-light">Active participation in tech communities, continuous learning in emerging technologies</p>
                            </div>
                            <div className="border border-black/10 dark:border-white/20 p-6">
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Awards</h3>
                                <p className="text-black/70 dark:text-gray-300 font-light">Community Ambassador, Burnaby Festival of Learning, SFU</p>
                            </div>
                            <div className="border border-black/10 dark:border-white/20 p-6">
                                <h3 className="text-xl font-normal mb-4 text-black dark:text-white">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Music</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Sports</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Travel</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Coffee</span>
                                    <span className="text-xs font-light px-3 py-1 border border-black/20 dark:border-white/20 text-black/60 dark:text-gray-400">Documentaries</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20 animate-fade-in-up">
                    <p className="text-lg font-light text-black/70 dark:text-gray-300 mb-8">
                        Interested in working together? Let's discuss how I can contribute to your project.
                    </p>
                    <a href="/contact" className="btn btn-primary hover-lift">
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    )
} 