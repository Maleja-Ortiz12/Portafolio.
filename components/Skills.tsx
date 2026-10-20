"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, GraduationCap, Award, ShieldCheck, Workflow } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { TechnologyBadge } from "@/components/TechnologyBadge";

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        { icon: Code2, items: ["JavaScript", "TypeScript", "PHP", "Python", "C++", "C#", "Dart"] },
        { icon: Layout, items: ["React", "HTML", "CSS", "NestJS", "Laravel", "Node.js"] },
        { icon: Server, items: ["Flutter", "Unity (C#)"] },
        { icon: Database, items: ["MySQL", "PostgreSQL", "Git / GitHub", "Docker", "Linux"] },
        { icon: Workflow, items: ["Excel", "Power Automate", "n8n"] },
        { icon: ShieldCheck, items: ["SIEM", "WAF", "Cortex", "N-central", "Mantis", "NIST", "ISO 27001"] },
    ];

    const education = t.skills.eduItems;

    return (
        <section id="skills" className="skills-3d py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.skills.title} <span className="text-purple-500">{t.skills.education}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Skills Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
                            <Code2 className="text-purple-500" /> {t.skills.techSkills}
                        </h3>

                        <div className="grid gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="skill-panel relative p-6 rounded-2xl border border-slate-700"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-slate-900 rounded-lg"><skill.icon className="text-indigo-300" size={28} aria-hidden="true" /></div>
                                        <h4 className="text-xl font-bold text-slate-200">{t.skills.groups[index]}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {skill.items.map(item => <TechnologyBadge key={item} name={item} />)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
                            <GraduationCap className="text-blue-500" /> {t.skills.eduCert}
                        </h3>

                        <div className="relative border-l-2 border-slate-700 ml-3 space-y-8 pb-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="ml-8 relative"
                                >
                                    {/* Dot on timeline */}
                                    <span className="absolute -left-[43px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500" />

                                    <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all">
                                        <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded mb-2">
                                            {edu.year}
                                        </span>
                                        <h4 className="text-xl font-bold text-white mb-1">
                                            {edu.title}
                                        </h4>
                                        <p className="text-slate-400 font-medium mb-3">{edu.institution}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                            {edu.description}
                                        </p>

                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Certifications Badge Area */}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <Award className="text-yellow-500" size={32} />
                                <div>
                                    <h4 className="text-white font-bold">{t.skills.continuousLearning}</h4>
                                    <p className="text-slate-400 text-sm">{t.skills.continuousLearningDesc}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
