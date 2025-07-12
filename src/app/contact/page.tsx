"use client";

import React, { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
    };

    return (
        <div className="min-h-screen py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-black dark:text-white">
                        Contact
                    </h1>
                </div>

                <div className="flex justify-center">
                    <div className="animate-fade-in-up text-center" style={{ animationDelay: '0.1s', maxWidth: '400px', width: '100%' }}>
                        <p className="text-lg font-light leading-relaxed text-black/70 dark:text-gray-300 mb-12">
                            I'm always interested in hearing about new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 border border-black/20 dark:border-white/30 flex items-center justify-center mb-2">
                                    <svg className="w-4 h-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="font-light text-black/70 dark:text-gray-300">Email</p>
                                <a href="mailto:faroukalsajee@gmail.com" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                                    faroukalsajee@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 border border-black/20 dark:border-white/30 flex items-center justify-center mb-2">
                                    <svg className="w-4 h-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                </div>
                                <p className="font-light text-black/70 dark:text-gray-300">Social</p>
                                <div className="flex space-x-4 mt-2">
                                    <a href="https://github.com/faroukalsajee" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                                        GitHub
                                    </a>
                                    <a href="https://linkedin.com/in/faroukalsajee" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 