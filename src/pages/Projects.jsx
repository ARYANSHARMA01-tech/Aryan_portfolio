import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI Medical Assistant with Skin Disease Detector',
            description: 'Integrated NLP and Computer Vision system for real-time medical insights and skin disease detection. Powered by fine-tuned transformers and Dinov2.',
            tech: ['FastAPI', 'React.js', 'Python', 'Dinov2', 'NLP', 'Groq API', 'PostgreSQL'],
            highlights: [
                'Unified web app for symptom chat and skin image analysis.',
                'Used Dinov2 Vision Transformer for high-accuracy disease detection.',
                'Integrated Groq API for medically accurate responses in 3 languages.',
                'Scalable architecture with FastAPI and React.js.'
            ],
            links: { github: 'https://github.com/ARYANSHARMA01-tech/Medical-Assistant-Frontend-', demo: 'https://lnkd.in/gYt6PPjw' }
        },
        {
            title: 'MovieMate – Personalized Movie Recommender',
            description: 'A sleek web application that uses content-based filtering to provide instant, personalized movie recommendations based on user favorites.',
            tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'TMDB API'],
            highlights: [
                'Content-based filtering using genre, cast, and plot similarity.',
                'Fetches rich movie details (posters, cast) via TMDB API.',
                'Instant recommendations with interactive Streamlit UI.',
                'Deployed on Streamlit Community Cloud.'
            ],
            links: { github: 'https://github.com/ARYANSHARMA01-tech/Movie_Recommendation_System', demo: 'https://movierecommendationsystem01.streamlit.app/' }
        },
        {
            title: 'Trippy – AI-Powered Travel Planning Assistant',
            description: 'An intelligent travel planner managed by a CrewAI task-planning agent (VacAIgent). It orchestrates multiple sub-agents to generate personalized itineraries.',
            tech: ['FastAPI', 'Agentic AI', 'CrewAI', 'Streamlit', 'Python'],
            highlights: [
                'Implemented multi-agent orchestration for itinerary generation.',
                'Seamless integration of LLMs for personalized travel suggestions.',
                'Real-time data fetching and processing.'
            ],
            links: { github: 'https://github.com/ARYANSHARMA01-tech', demo: 'https://trippy-trip-planner.streamlit.app/' }
        },
        {
            title: 'Automated Book Publication Workflow',
            description: 'A reinforcement learning-based pipeline that automates the book publication process with human-in-the-loop validation.',
            tech: ['Reinforcement Learning', 'ChromaDB', 'Gemini API', 'Playwright', 'Streamlit'],
            highlights: [
                'Used Q-learning rewards to optimize the publication path.',
                'Integrated ChromaDB for semantic metadata storage and retrieval.',
                'Automated web interactions using Playwright.'
            ],
            links: { github: 'https://github.com/ARYANSHARMA01-tech', demo: '#' }
        },
        {
            title: 'Book Recommendation System',
            description: 'A content-based recommendation engine utilizing cosine similarity to suggest books based on user reading history and preferences.',
            tech: ['Python', 'Flask', 'scikit-learn', 'Machine Learning', 'Pandas'],
            highlights: [
                'Achieved 35% improvement in relevance accuracy.',
                'Optimized vector similarity calculations for low latency.',
                'Deployed as a lightweight Flask API.'
            ],
            links: { github: 'https://github.com/ARYANSHARMA01-tech', demo: 'https://book-recommendation-system-9vxu.onrender.com/' }
        }
    ];

    return (
        <div className="py-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                    Featured Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Showcasing my work in Agentic AI, Reinforcement Learning, and scalable ML systems.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`glass p-8 rounded-2xl group border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'lg:col-span-2 lg:w-2/3 lg:mx-auto' : ''}`}
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-white/5 text-accent group-hover:text-white group-hover:bg-accent transition-all duration-300">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="mb-6 space-y-2">
                                {project.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
