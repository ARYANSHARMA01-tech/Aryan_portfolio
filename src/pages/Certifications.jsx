import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'Getting Started with AI',
            issuer: 'IBM',
            date: 'Jul 2025',
            id: 'Credential ID: XXXXX',
        },
        {
            title: 'Journey to Cloud',
            issuer: 'IBM',
            date: 'Jul 2025',
            id: 'Credential ID: XXXXX',
        },
        {
            title: 'Generative AI with Large Language Models',
            issuer: 'Coursera (DeepLearning.AI)',
            date: 'Apr 2025',
            id: 'Credential ID: XXXXX',
        },
        {
            title: 'Software Engineering',
            issuer: 'IIT Kharagpur (NPTEL)',
            date: '2024',
            id: 'Elite Certification',
        },
    ];

    return (
        <div className="py-10 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold font-heading text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            >
                Certifications & Credentials
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-all duration-300 group"
                    >
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-secondary font-medium mt-1">{cert.issuer}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                <span>Issued: {cert.date}</span>
                            </div>
                            {cert.id && (
                                <div className="flex items-center gap-1 mt-2 text-xs text-muted">
                                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                                    <span>{cert.id}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
