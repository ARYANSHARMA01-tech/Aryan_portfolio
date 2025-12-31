import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white font-sans">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20 px-4 max-w-7xl mx-auto w-full">
                    <Outlet />
                </main>

                {/* Simple Footer */}
                <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 mt-auto">
                    <p>&copy; {new Date().getFullYear()} Aryan Sharma. Built for the Future.</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
