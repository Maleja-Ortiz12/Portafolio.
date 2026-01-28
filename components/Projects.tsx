"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

// Placeholder data - user mentioned grouped by language/tech
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("Todos");

    const categories = [
        t.projects.categories.all,
        t.projects.categories.gamedev,
        t.projects.categories.frontend,
        t.projects.categories.fullstack
        // Backend not used in current set? "Full Stack" is used.
    ];

    // Static data that doesn't change with language
    const projectsStaticData = [
        {
            id: 1,
            tech: ["Unity 3D", "C#", "Game Design"],
            category: t.projects.categories.gamedev, // Use translated category to match filter
            image: "/documents/imagenjuego.JPG",
            github: "#",
            demo: "https://malejaconeja12.itch.io/dimension-shift",
        },
        {
            id: 2,
            tech: ["Next.js", "Streaming", "Web Audio API"],
            category: t.projects.categories.frontend,
            image: "/documents/emisoras latinas.JPG",
            github: "#",
            demo: "https://www.emisoraslatinas.online/",
        },
    ];

    // Merge with translations
    const projects = projectsStaticData.map((p, index) => ({
        ...p,
        title: t.projects.items[index]?.title || "", // index matching, fragile but works if order preserved
        description: t.projects.items[index]?.description || ""
    }));

    const filteredProjects = activeCategory === t.projects.categories.all
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-0" />

            <div className="container mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.projects.title} <span className="text-blue-500">{t.projects.featured}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        {t.projects.subtitle}
                    </p>

                    {/* Categories Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all shadow-xl"
                            >
                                {/* Image Area */}
                                <div className="relative h-48 overflow-hidden">
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                        <a href={project.demo} className="p-2 bg-white/10 rounded-full text-white hover:bg-blue-600 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <Folder className="text-slate-600" size={18} />
                                    </div>

                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* In Progress Section */}
                {t.projects.inProgressItems && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 pt-12 border-t border-slate-900/50"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2 text-center flex items-center justify-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            {t.projects.inProgressTitle}
                        </h3>
                        <p className="text-slate-500 text-center mb-10 text-sm uppercase tracking-widest">{t.projects.inProgressSubtitle}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {t.projects.inProgressItems.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className={`rounded-xl p-6 relative group overflow-hidden transition-all ${item.image
                                        ? "border border-slate-700/50 shadow-lg hover:shadow-purple-500/20"
                                        : "bg-slate-900/30 border border-slate-800 border-dashed hover:bg-slate-900/50"
                                        }`}
                                >
                                    {/* Background Image if present */}
                                    {item.image && (
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/50" />
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <div className="absolute -top-1 -right-1 text-slate-600 group-hover:text-yellow-500 transition-colors">
                                            <div className="group-hover:rotate-180 transition-transform duration-[2s]">⚙️</div>
                                        </div>
                                        <h4 className={`text-lg font-bold transition-colors mb-2 ${item.image ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-sm mb-4 ${item.image ? "text-slate-300" : "text-slate-500"}`}>
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech && item.tech.map((tc: string) => (
                                                <span
                                                    key={tc}
                                                    className={`text-[10px] font-mono px-2 py-1 rounded border backdrop-blur-sm ${item.image
                                                        ? "bg-black/40 border-slate-600 text-slate-200"
                                                        : "bg-slate-800/50 border-slate-800 text-slate-400"
                                                        }`}
                                                >
                                                    {tc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
