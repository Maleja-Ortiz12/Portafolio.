"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
    const { t } = useLanguage();
    const experiences = t.experience.items;

    return (
        <section id="experience" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.experience.title} <span className="text-purple-500">{t.experience.learning}</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Hidden on mobile mostly, simplified) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 transform -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Content Box */}
                                <div className="md:w-[45%] mb-4 md:mb-0">
                                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all shadow-lg">
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-purple-400 font-medium mb-4 flex items-center gap-2">
                                            <Briefcase size={16} /> {exp.company}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-purple-500 rounded-full flex items-center justify-center transform -translate-x-[9px] md:-translate-x-1/2 z-10">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>

                                {/* Date Area */}
                                <div className={`md:w-[45%] flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                    <div className="bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 flex items-center gap-2 text-slate-300 text-sm font-medium ml-8 md:ml-0">
                                        <Calendar size={16} className="text-purple-500" />
                                        {exp.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
