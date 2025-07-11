import React from 'react'

const skillCategories = [
    {
        title: "Languages & Frameworks",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "Responsive Design"]
    },
    {
        title: "Backend & Database",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
    },
    {
        title: "Testing & QA",
        skills: ["Playwright", "Jest", "Mocha", "TDD", "Automated Testing"]
    },
    {
        title: "DevOps & Tools",
        skills: ["GitHub Actions", "Docker", "CI/CD", "VS Code", "Cursor", "Git"]
    },
    {
        title: "Methodologies",
        skills: ["Agile/Scrum", "Code Review", "Pair Programming", "Technical Documentation"]
    }
]

const TechnicalSkills: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="section-title">Technical Skills</h2>
            <div className="card">
                <div className="space-y-2">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="text-gray-800">
                            <span className="font-semibold">{category.title}:</span> {category.skills.join(', ')}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnicalSkills 