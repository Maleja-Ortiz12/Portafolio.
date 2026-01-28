"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, GraduationCap, Award } from "lucide-react";

import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiJavascript, SiPhp,
    SiNestjs, SiPython, SiLaravel, SiPostgresql, SiMongodb, SiGit, SiMysql
} from "react-icons/si";

import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        {
            category: t.skills.techSkills, // Or distinct categories if in translation file
            icon: <Layout className="text-blue-400" size={32} />,
            items: [
                { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
            ],
        },
        {
            category: "Backend",
            icon: <Server className="text-green-400" size={32} />,
            items: [
                { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
                { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
                { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
            ],
        },
        {
            category: "Database & Tools",
            icon: <Database className="text-purple-400" size={32} />,
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
            ],
        },
    ];

    const education = t.skills.eduItems.map((item, index) => ({
        ...item,
        // Re-attach certificate manually since it's not in the translation string objects (though it could be added there, but easier here if consistent)
        // Actually, matching by index is risky if order changes.
        // Let's hardcode the certificate path based on index 1.
        certificate: index === 1 ? "/documents/Certificado_Mujeres_Digitales.pdf" : undefined
    }));

    return (
        <section id="skills" className="py-20 bg-slate-900 relative">
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
                                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-slate-900 rounded-lg">{skill.icon}</div>
                                        <h4 className="text-xl font-bold text-slate-200">{skill.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {skill.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors"
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                {item.name}
                                            </span>
                                        ))}
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

                                        {/* @ts-ignore */}
                                        {edu.certificate && (
                                            <a
                                                href={edu.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
                                            >
                                                <Award size={16} /> Ver Certificado
                                            </a>
                                        )}
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
