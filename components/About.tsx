"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Lightbulb, Users, Target, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    const qualities = [
        {
            icon: <ShieldCheck className="text-emerald-400" size={28} />,
            title: t.about.qualities.ethics,
            description: t.about.qualities.ethicsDesc,
        },
        {
            icon: <Users className="text-blue-400" size={28} />,
            title: t.about.qualities.team,
            description: t.about.qualities.teamDesc,
        },
        {
            icon: <Lightbulb className="text-yellow-400" size={28} />,
            title: t.about.qualities.innovation,
            description: t.about.qualities.innovationDesc,
        },
        {
            icon: <Target className="text-red-400" size={28} />,
            title: t.about.qualities.results,
            description: t.about.qualities.resultsDesc,
        },
    ];

    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <span className="inline-block p-2 bg-purple-500/10 rounded-full mb-4">
                            <User className="text-purple-400" size={24} />
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t.about.title} <span className="text-purple-500">{t.about.me}</span>
                        </h2>
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl mb-12">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            {t.about.p1}
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {t.about.p2}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {qualities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/50"
                            >
                                <div className="mt-1">{item.icon}</div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
