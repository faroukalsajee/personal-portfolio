import React from 'react'

const AdditionalInfo: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="section-title">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
                    <p className="text-gray-700">English (Native), Arabic (Native)</p>
                </div>

                <div className="card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Interests</h3>
                    <div className="flex flex-wrap">
                        <span className="skill-tag">AI/ML Integration</span>
                        <span className="skill-tag">Cloud Architecture</span>
                        <span className="skill-tag">Performance Optimization</span>
                        <span className="skill-tag">Open Source Contribution</span>
                    </div>
                </div>

                <div className="card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Development</h3>
                    <p className="text-gray-700">Active participation in tech communities, continuous learning in emerging technologies</p>
                </div>

                <div className="card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Awards</h3>
                    <p className="text-gray-700">Community Ambassador, Burnaby Festival of Learning, SFU</p>
                </div>

                <div className="card">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Interests</h3>
                    <div className="flex flex-wrap">
                        <span className="skill-tag">Music</span>
                        <span className="skill-tag">Sports</span>
                        <span className="skill-tag">Travel</span>
                        <span className="skill-tag">Coffee</span>
                        <span className="skill-tag">Documentaries</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdditionalInfo 