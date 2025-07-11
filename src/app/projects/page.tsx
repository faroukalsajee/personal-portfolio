"use client";

import React, { useEffect, useState } from 'react';

interface Repo {
    id: string;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    topics: string[];
}

export default function ProjectsPage() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('/api/github-pinned');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <div className="animate-pulse text-2xl font-light mb-4">Loading projects...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-light mb-4">Error Loading Projects</h2>
                    <p className="text-black/60 mb-8">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-primary"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                        Projects
                    </h1>
                    <p className="text-xl font-light text-black/70 max-w-3xl mx-auto leading-relaxed">
                        A collection of my recent work, showcasing full-stack development,
                        cloud architecture, and innovative solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map((repo, index) => (
                        <div
                            key={repo.id}
                            className="group animate-fade-in-up hover-lift"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="border border-black/10 p-8 h-full flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-xl font-normal mb-4 group-hover:opacity-70 transition-opacity">
                                        {repo.name}
                                    </h3>
                                    <p className="text-black/60 font-light mb-6 leading-relaxed flex-1">
                                        {repo.description || 'No description available'}
                                    </p>

                                    {repo.topics && repo.topics.length > 0 && (
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {repo.topics.slice(0, 4).map((topic) => (
                                                    <span
                                                        key={topic}
                                                        className="text-xs font-light px-3 py-1 border border-black/20 text-black/60"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-black/10">
                                    <div className="flex items-center space-x-4 text-sm text-black/50">
                                        {repo.language && (
                                            <span className="font-light">{repo.language}</span>
                                        )}
                                        {repo.stargazers_count > 0 && (
                                            <span className="font-light">★ {repo.stargazers_count}</span>
                                        )}
                                    </div>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-light hover:opacity-70 transition-opacity"
                                    >
                                        View →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20 animate-fade-in-up">
                    <p className="text-lg font-light text-black/70 mb-8">
                        Interested in seeing more of my work or collaborating on a project?
                    </p>
                    <a
                        href="https://github.com/faroukalsajee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary hover-lift"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
} 