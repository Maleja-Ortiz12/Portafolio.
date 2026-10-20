"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Folder, X, Code2 } from "lucide-react";
import { filterProjects, getFeaturedProjects, type ProjectCategory, type ProjectDetails } from "@/data/projects";
import { TechnologyBadge } from "@/components/TechnologyBadge";

// Placeholder data - user mentioned grouped by language/tech
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
    const { t } = useLanguage();
    const reducedMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
    const categories: ProjectCategory[] = ["all", "gamedev", "frontend", "fullstack", "backend", "mobile"];
    const filteredProjects = filterProjects(getFeaturedProjects(t.projects), activeCategory);
    const inProgressProjects = t.projects.inProgressItems.map(item => ({
        ...item, id: `ip-${item.title}`, detailedDescription: item.detailedDescription || "",
    }));

    return (
        <section id="projects" className="projects-3d py-20 bg-slate-950 relative overflow-hidden">
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
                                type="button"
                                aria-pressed={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                {t.projects.categories[cat]}
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
                                initial={reducedMotion === false ? { opacity: 0, scale: 0.9 } : false}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={reducedMotion === false ? { opacity: 0, scale: 0.9 } : undefined}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="project-card group relative rounded-2xl border border-slate-700 bg-slate-900 shadow-xl"
                                data-category={project.category}
                            >
                                <button type="button" onClick={() => setSelectedProject(project)} aria-label={`${t.projects.details}: ${project.title}`} className="project-card-trigger absolute inset-0 z-20 rounded-2xl cursor-pointer" />
                                {/* Image Area */}
                                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                        <div className="flex items-center gap-2 text-white font-medium bg-blue-600/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                            <span>{t.projects.details}</span>
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div aria-hidden="true" className="project-blueprint flex h-full items-center justify-center">
                                            <div className="project-wireframe"><Code2 size={42} strokeWidth={1.5} /></div>
                                            <span className="absolute bottom-4 left-5 font-mono text-xs tracking-[0.2em] text-indigo-200">{project.tech.slice(0, 2).join(" / ")}</span>
                                        </div>
                                    )}
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
                                        {project.tech.map((t: string) => (
                                            <TechnologyBadge key={t} name={t} />
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
                            {inProgressProjects.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedProject(item)}
                                    className={`rounded-xl p-6 relative group overflow-hidden transition-all cursor-pointer ${item.image
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

                {/* Detailed View Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-20 pb-10">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-slate-950/90 backdrop-blur-lg"
                            />
                            
                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl max-h-full overflow-hidden shadow-2xl z-10 flex flex-col"
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
                                    <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-1">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        aria-label={t.projects.close}
                                        className="p-2 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all shadow-lg"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Scrollable Body */}
                                <div className="overflow-y-auto flex-1 scrollbar-hide">
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                        {selectedProject.image ? (
                                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div aria-hidden="true" className="project-blueprint flex h-full items-center justify-center"><div className="project-wireframe"><Code2 size={48} /></div></div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                    </div>

                                    <div className="p-6 md:p-10">
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedProject.tech.map((t: string) => (
                                                <span key={t} className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="prose prose-invert max-w-none mb-10">
                                            <p className="text-slate-300 leading-relaxed text-lg">
                                                {selectedProject.detailedDescription}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
                                            {selectedProject.demo && selectedProject.demo !== "#" && (
                                                <a
                                                    href={selectedProject.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all font-bold shadow-lg shadow-purple-600/20"
                                                >
                                                    {t.projects.live} <ExternalLink size={18} />
                                                </a>
                                            )}
                                            {selectedProject.github && selectedProject.github !== "#" && (
                                                <a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-bold"
                                                >
                                                    {t.projects.repository} <Github size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
