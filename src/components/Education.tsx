import React from 'react'

const Education: React.FC = () => {
    const education = [
        {
            degree: "Diploma in Web Development",
            institution: "Lighthouse Labs",
            year: "2021"
        },
        {
            degree: "Computer Programming with Python",
            institution: "BCIT",
            year: "2020"
        },
        {
            degree: "Bachelor of Arts in English Literature",
            institution: "Damascus University",
            year: "2011-2015"
        }
    ]

    return (
        <section className="mb-12">
            <h2 className="section-title">Education & Certifications</h2>
            <div className="grid md:grid-cols-1 gap-4">
                {education.map((edu, index) => (
                    <div key={index} className="card">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.institution}</p>
                            </div>
                            <p className="text-gray-500 font-medium">{edu.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education 