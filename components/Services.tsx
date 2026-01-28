"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Database, Layout, ShieldCheck, CheckCircle2 } from "lucide-react";

const Services = () => {
    const { t } = useLanguage();

    const icons = [
        <Layout key="web" size={40} className="text-purple-400" />,
        <Database key="db" size={40} className="text-blue-400" />,
        <Code2 key="code" size={40} className="text-pink-400" />,
        <ShieldCheck key="qa" size={40} className="text-emerald-400" />,
    ];

    return (
        <section id="services" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t.services.title} <span className="text-purple-500">{t.services.subtitle}</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t.services.intro}
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {t.services.items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-1 group"
                        >
                            <div className="mb-6 bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                {icons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Roles and Soft Skills Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Key Roles */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                            {t.services.keyRoles.title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {t.services.keyRoles.items.map((role: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0" />
                                    <span className="font-medium">{role}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                            {t.services.softSkills.title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {t.services.softSkills.items.map((skill: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
