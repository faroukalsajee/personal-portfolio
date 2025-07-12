import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const NAME = 'Farouk Alsajee';
const letters = NAME.split('');

const Header: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <>
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 relative group">
                    <span
                        className="cursor-pointer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        F
                        <span
                            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 rounded bg-black text-white text-sm z-10 whitespace-nowrap flex transition-opacity duration-300 ${hovered ? 'opacity-100 reveal-ltr' : 'opacity-0 hide-rtl'}`}
                            style={{ pointerEvents: 'none' }}
                        >
                            {letters.slice(1).map((char, i) => (
                                <span
                                    key={i}
                                    className="inline-block transition-all duration-300"
                                    style={{
                                        transitionDelay: hovered
                                            ? `${i * 40}ms` // left-to-right on hover
                                            : `${((letters.length - 2) - i) * 40}ms`, // right-to-left on unhover
                                        opacity: hovered ? 1 : 0,
                                        transform: hovered ? 'translateY(0)' : 'translateY(10px)'
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
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
            <style jsx global>{`
          .reveal-ltr span {
            transition-property: opacity, transform;
          }
          .hide-rtl span {
            transition-property: opacity, transform;
          }
        `}</style>
        </>
    )
}

export default Header 