import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, School } from 'lucide-react';

const About = () => {
    return (
        <div className="space-y-12 py-10">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center space-y-6"
            >
                <h2 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I am a Computer Engineering student specializing in AI and ML, skilled in Python, TensorFlow, and scikit-learn.
                    With hands-on experience in NLP, recommendation systems, and reinforcement learning, I am passionate about
                    developing intelligent agents and scalable AI solutions that solve complex real-world problems.
                </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
                <h3 className="col-span-full text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Education
                </h3>

                {/* Education Card 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 border-l-4 border-l-primary"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="text-xl font-bold text-white">B.Tech Computer Engineering</h4>
                            <p className="text-primary font-medium">Bharati Vidyapeeth (DU) College of Engineering</p>
                        </div>
                        <School className="w-8 h-8 text-primary/50" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 mt-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>2022 – 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Pune, Maharashtra</span>
                        </div>
                        <div className="mt-2 text-white font-semibold">
                            CGPA: 9.0 / 10
                        </div>
                    </div>
                </motion.div>

                {/* Education Card 2 */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 border-l-4 border-l-secondary"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="text-xl font-bold text-white">Intermediate (XII) & High School (X)</h4>
                            <p className="text-secondary font-medium">St. Antony Inter College</p>
                        </div>
                        <School className="w-8 h-8 text-secondary/50" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 mt-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Completed 2022</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Lucknow, Uttar Pradesh</span>
                        </div>
                        <div className="mt-2 text-white font-semibold space-y-1">
                            <p>Class XII: 80%</p>
                            <p>Class X: 81%</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
