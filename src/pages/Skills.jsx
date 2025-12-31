import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Server, Terminal, Bot } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: Code2,
            skills: ['Python', 'Java', 'SQL', 'JavaScript', 'React'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'ML & AI',
            icon: Brain,
            skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'CrewAI', 'LangGraph', 'NLP', 'Reinforcement Learning'],
            color: 'from-purple-500 to-violet-500'
        },
        {
            title: 'Backend & Cloud',
            icon: Server,
            skills: ['Flask', 'Streamlit', 'Firebase', 'REST APIs', 'IBM Cloud'],
            color: 'from-emerald-500 to-green-500'
        },
        {
            title: 'Databases & Vector DB',
            icon: Database,
            skills: ['PostgreSQL', 'ChromaDB', 'FAISS', 'Qdrant'],
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Tools & DevOps',
            icon: Terminal,
            skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Render', 'Vercel', 'Hugging Face Spaces'],
            color: 'from-gray-500 to-slate-500'
        },
        {
            title: 'LLMs & GenAI',
            icon: Bot,
            skills: ['LLaMA 2', 'Mistral', 'OpenAI', 'Gemini Pro', 'DeepSeek', 'Groq'],
            color: 'from-pink-500 to-rose-500'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="py-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                    Technical Arsenal
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and tools I leverage to build intelligent systems.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-2.5 mb-4 shadow-lg`}>
                            <category.icon className="w-full h-full text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-primary/30 group-hover:text-white transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
