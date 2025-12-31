import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'SDE Intern',
            company: 'Bluestock Fintech',
            period: 'Jul 2025 – Sep 2025',
            description: [
                'Reduced data latency by ~25% through optimized query structures.',
                'Improved recommendation accuracy by ~40% implementing collaborative filtering.',
                'Built REST APIs & microservices using Flask and PostgreSQL.',
                'Implemented CI/CD pipelines and managed cloud deployment on AWS.'
            ],
            tech: ['Python', 'Flask', 'PostgreSQL', 'AWS', 'Git']
        },
        {
            role: 'AI & Cloud Intern',
            company: 'IBM SkillsBuild',
            period: 'Jul 2025 – Aug 2025',
            description: [
                'Developed AI chatbots & ML pipelines using IBM Watsonx & AutoAI.',
                'Automated data processing workflows improving efficiency by 75%.',
                'Performed Data Analytics & EDA on large datasets.',
                'Gained hands-on experience with cloud-native AI services.'
            ],
            tech: ['IBM Watsonx', 'AutoAI', 'Python', 'Data Analytics']
        }
    ];

    return (
        <div className="py-10 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold font-heading text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            >
                Professional Experience
            </motion.h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute top-0 left-0 md:left-1/2 -ml-[5px] md:-ml-[9px] w-5 h-5 rounded-full border-4 border-background bg-gradient-to-r from-primary to-secondary z-10 box-content shadow-[0_0_10px_rgba(124,58,237,0.5)] group-hover:scale-125 transition-transform duration-300" />

                        {/* Content Card */}
                        <div className="ml-10 md:ml-0 md:w-[45%] p-6 glass rounded-xl border-l-[3px] border-l-primary/50 hover:border-l-accent transition-colors duration-300 group-hover:bg-white/5">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                <span className="text-xs text-muted font-mono flex items-center gap-1 mt-1 sm:mt-0 px-2 py-1 rounded bg-white/5">
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-secondary font-medium">
                                <Building className="w-4 h-4" />
                                <span>{exp.company}</span>
                            </div>

                            <ul className="space-y-2 mb-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
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

export default Experience;
