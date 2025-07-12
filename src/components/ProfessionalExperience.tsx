import React from 'react'

const ProfessionalExperience: React.FC = () => {
    const experiences = [
        {
            title: "Software Developer",
            company: "Integration Solutions Services Inc",
            period: "Oct 2022 - Dec 2024",
            type: "Full Time",
            technicalAchievements: [
                "Built responsive frontend applications using React, TypeScript, and Tailwind CSS, resulting in 20% increase in Net Promoter Score (NPS)",
                "Implemented automated CI/CD pipelines using GitHub Actions and Playwright, reducing release time by 30% and improving deployment reliability",
                "Led code quality initiatives by reviewing 50+ pull requests and mentoring junior engineers, improving team velocity and code maintainability",
                "Developed automated QA feedback loops across multiple projects, reducing bug rate by 25% and improving overall software quality",
                "Collaborated with cross-functional teams to prioritize and deliver features for 3+ enterprise applications, ensuring technical requirements aligned with business needs"
            ],
            technicalProjects: [
                "Architected and developed RESTful APIs using Node.js and Express.js",
                "Implemented comprehensive testing strategies using Playwright for end-to-end testing",
                "Optimized database queries and improved application performance",
                "Integrated third-party services and APIs for enhanced functionality"
            ]
        },
        {
            title: "Software Developer",
            company: "PeaceGeeks",
            period: "Oct 2021 - Dec 2022",
            type: "Internship",
            technicalAchievements: [
                "Contributed to full-stack development in an agile environment using React Native and TypeScript",
                "Enhanced MongoDB data handling and refactored legacy code to improve performance and maintainability",
                "Implemented comprehensive testing using TDD principles and supported deployment to staging and production environments",
                "Fixed critical UX, content, and functional bugs to improve overall user experience and application stability",
                "Actively participated in technical processes including sprint planning, code reviews, and QA processes"
            ],
            technicalProjects: [
                "Developed React Native mobile application with TypeScript",
                "Implemented data processing workflows using MongoDB",
                "Created automated testing suites using modern testing frameworks",
                "Contributed to deployment automation and monitoring"
            ]
        },
        {
            title: "Strategic Advisor",
            company: "Rhythmi.ai",
            period: "April 2025 - Present",
            type: "Contract, Part Time",
            technicalLeadership: [
                "Guided technical strategy for AI-powered Arabic sound platform, advising on technology stack and architecture decisions",
                "Led product development initiatives by coordinating technical and go-to-market strategies across development teams",
                "Provided technical consultation for market entry into Arabic-speaking regions, focusing on localization and UX optimization",
                "Built strategic technical partnerships with regional and global technology partners to enhance platform capabilities"
            ]
        }
    ]

    return (
        <section className="mb-12">
            <h2 className="section-title text-black dark:text-white">Professional Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="card bg-white dark:bg-neutral-900">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        <strong>{exp.title}</strong> | {exp.company}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 italic">{exp.period} | {exp.type}</p>
                                </div>
                            </div>

                            {exp.technicalAchievements && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Technical Achievements:</h4>
                                    <ul className="space-y-2 list-none">
                                        {exp.technicalAchievements.map((achievement, idx) => (
                                            <li key={idx} className="achievement-item">
                                                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {exp.technicalProjects && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Technical Projects:</h4>
                                    <ul className="space-y-2 list-none">
                                        {exp.technicalProjects.map((project, idx) => (
                                            <li key={idx} className="achievement-item">
                                                <span className="text-gray-700 dark:text-gray-300">{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {exp.technicalLeadership && (
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Technical Leadership:</h4>
                                    <ul className="space-y-2 list-none">
                                        {exp.technicalLeadership.map((leadership, idx) => (
                                            <li key={idx} className="achievement-item">
                                                <span className="text-gray-700 dark:text-gray-300">{leadership}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProfessionalExperience 