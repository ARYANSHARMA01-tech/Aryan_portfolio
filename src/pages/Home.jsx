import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl"
            >
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium tracking-wide">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    OPEN TO WORK
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Aryan Sharma</span>
                </h1>

                {/* Role & Tagline */}
                <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                        Machine Learning Engineer | AI Developer | Agentic Systems Builder
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted text-lg">
                        Building intelligent systems that bridge the gap between theoretical AI and real-world impact.
                        Specializing in NLP, Reinforcement Learning, and Agentic Workflows.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        to="/projects"
                        className="group relative px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-primary/25 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10">View Projects</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <a
                        href="resume/resume.pdf" // Placeholder for resume
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Download My Resume</span>
                    </a>

                    <div className="flex items-center gap-2 ml-2">
                        <a href="https://github.com/sharmaaryan1603" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Hero visual elements (subtle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        </div>
    );
};

export default Home;
