import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 relative group">
                <span className="cursor-pointer">F
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 rounded bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                        Farouk Alsajee
                    </span>
                </span>
            </h1>
            <h2 className="text-xl font-semibold text-primary-600 mb-6">
                Software Engineer | Business Strategist
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 mb-6">
                <a
                    href="mailto:faroukalsajee@gmail.com"
                    className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                >
                    <FaEnvelope />
                    <span>faroukalsajee@gmail.com</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/faroukalsajee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/faroukalsajee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>
            </div>
        </header>
    )
}

export default Header 