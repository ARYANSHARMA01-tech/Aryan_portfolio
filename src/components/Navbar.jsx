import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    House,
    User,
    Code,
    Briefcase,
    Cpu,
    Award,
    Mail,
    Github,
    Linkedin,
    Menu,
    X
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: House },
        { name: 'About', path: '/about', icon: User },
        { name: 'Projects', path: '/projects', icon: Code },
        { name: 'Experience', path: '/experience', icon: Briefcase },
        { name: 'Skills', path: '/skills', icon: Cpu },
        { name: 'Certifications', path: '/certifications', icon: Award },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/sharmaaryan1603', icon: Github }, // Assuming GitHub URL based on email/context if available, otherwise generic
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-primary/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0 cursor-pointer group">
                        <span className="text-xl font-bold font-heading tracking-tight group-hover:text-primary transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            ARYAN<span className="text-primary">.</span>AI
                        </span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group relative ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <link.icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* Social Icons separator */}
                        <div className="h-6 w-px bg-white/10 mx-2" />

                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/5 rounded-full group"
                                aria-label={link.name}
                            >
                                <link.icon className="w-5 h-5 group-hover:text-accent transition-colors duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive ? 'bg-primary/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`
                                    }
                                >
                                    <link.icon className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                            <div className="flex space-x-4 pt-4 px-3 border-t border-white/10 mt-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        <link.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
