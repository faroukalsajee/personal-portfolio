import React from 'react'

const TechnicalProjects: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="section-title">Technical Projects</h2>
            <div className="experience-item">
                <div className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                <strong>Maysoon Media  Rhythmi.ai Transition</strong>
                            </h3>
                            <p className="text-gray-600 italic">Founder & Technical Lead | 2018 - 2025</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">Technical Achievements:</h4>
                        <ul className="space-y-2">
                            <li className="achievement-item">
                                <div className="achievement-bullet"></div>
                                <span className="text-gray-700">Architected digital platform for Arabic sound and media distribution</span>
                            </li>
                            <li className="achievement-item">
                                <div className="achievement-bullet"></div>
                                <span className="text-gray-700">Developed scalable content management system to handle multi-market operations</span>
                            </li>
                            <li className="achievement-item">
                                <div className="achievement-bullet"></div>
                                <span className="text-gray-700">Implemented AI integration for automated content processing and recommendation systems</span>
                            </li>
                            <li className="achievement-item">
                                <div className="achievement-bullet"></div>
                                <span className="text-gray-700">Built strategic technology partnerships to enhance platform capabilities and market reach</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicalProjects 