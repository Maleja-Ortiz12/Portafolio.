"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: t.nav.home, href: "#hero" },
        { title: t.nav.about, href: "#about" },
        { title: t.nav.services, href: "#services" },
        { title: t.nav.projects, href: "#projects" },
        { title: t.nav.skills, href: "#skills" },
        { title: t.nav.experience, href: "#experience" },
        { title: t.nav.contact, href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white tracking-widest">
                    PORTAFOLIO<span className="text-purple-500">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Social / Contact Icons (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-2 py-1 bg-slate-800 rounded text-slate-300 hover:text-white transition-colors text-sm font-bold border border-slate-700 hover:border-purple-500/50"
                    >
                        <Globe size={16} />
                        {language.toUpperCase()}
                    </button>
                    <div className="w-px h-6 bg-slate-700 mx-1" />
                    <a href="https://github.com/Maleja-Ortiz12" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mar%C3%ADa-alejandra-ortiz-526209396/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-2 py-1 bg-slate-800 rounded text-slate-300 hover:text-white transition-colors text-sm font-bold"
                    >
                        {language.toUpperCase()}
                    </button>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-xl"
                    >
                        <div className="flex flex-col items-center py-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-slate-300 hover:text-purple-400 text-lg font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="flex space-x-6 mt-4">
                                <a href="https://github.com/Maleja-Ortiz12" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/mar%C3%ADa-alejandra-ortiz-526209396/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
