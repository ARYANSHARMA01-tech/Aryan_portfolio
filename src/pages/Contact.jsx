import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const contactDetails = [
        {
            icon: Mail,
            label: 'Email',
            value: 'sharmaaryan1603@gmail.com',
            action: 'mailto:sharmaaryan1603@gmail.com'
        },

        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/sharmaaryan1603',
            action: 'https://github.com/ARYANSHARMA01-tech'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/aryan-sharma',
            action: 'https://www.linkedin.com/in/aryan-sharma1603/'
        },
    ];

    return (
        <div className="py-10 max-w-4xl mx-auto items-center justify-center flex flex-col min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full"
            >
                <h2 className="text-4xl font-bold font-heading text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Let's Connect
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
                    Currently open for Machine Learning Engineer roles and internship opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactDetails.map((item) => (
                        <div key={item.label} className="glass p-6 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors text-white group-hover:text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{item.label}</p>
                                    <a href={item.action} className="text-lg font-medium text-white hover:text-accent transition-colors">
                                        {item.value.replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCopy(item.value, item.label)}
                                className="p-2 text-gray-500 hover:text-white transition-colors"
                                title="Copy to clipboard"
                            >
                                {copied === item.label ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
