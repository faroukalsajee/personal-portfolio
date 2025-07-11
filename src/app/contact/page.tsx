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
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                        Contact
                    </h1>
                    <p className="text-xl font-light text-black/70 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss your project, collaboration opportunities, or just say hello.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-3xl font-light mb-8 tracking-tight">Get In Touch</h2>
                        <p className="text-lg font-light leading-relaxed text-black/70 mb-12">
                            I'm always interested in hearing about new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 border border-black/20 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-light text-black/70">Email</p>
                                    <a href="mailto:faroukalsajee@gmail.com" className="text-black hover:opacity-70 transition-opacity">
                                        faroukalsajee@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 border border-black/20 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-light text-black/70">Location</p>
                                    <p className="text-black">Vancouver, BC</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 border border-black/20 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-light text-black/70">Social</p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="https://github.com/faroukalsajee" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                                            GitHub
                                        </a>
                                        <a href="https://linkedin.com/in/faroukalsajee" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-light mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-black/20 focus:border-black transition-colors font-light"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-black/20 focus:border-black transition-colors font-light"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-light mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-black/20 focus:border-black transition-colors font-light"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-light mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-black/20 focus:border-black transition-colors font-light resize-none"
                                    placeholder="Tell me about your project or inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary hover-lift w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-center p-4 border border-green-200 bg-green-50">
                                    <p className="text-green-800 font-light">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="text-center p-4 border border-red-200 bg-red-50">
                                    <p className="text-red-800 font-light">Sorry, there was an error sending your message. Please try again.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 