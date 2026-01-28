"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterText } from "@/components/TypewriterText";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16 pb-40"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Avatar */}
                    <div className="mb-8 relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-[20px] opacity-50 animate-pulse" />
                        <img
                            src="/images/avatar.png"
                            alt="Avatar"
                            className="relative w-full h-full object-cover rounded-full border-2 border-slate-700 shadow-2xl"
                        />
                    </div>

                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-purple-300 text-sm font-medium mb-6">
                        {t.hero.available}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        Maria Alejandra <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Ortiz Paez
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-semibold min-h-[3rem]">
                        <TypewriterText text={t.hero.role} />
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-base hover:bg-slate-100 transition-all flex items-center gap-2 hover:shadow-[0_10px_20px_-5px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
                        >
                            {t.hero.projects} <ArrowRight size={20} className="text-purple-600" />
                        </a>

                        <a
                            href={t.hero.cvFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-full bg-slate-800 text-white font-medium text-base border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                            {t.hero.cv} <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
