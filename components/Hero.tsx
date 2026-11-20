"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Code2, ShieldCheck, Workflow } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, type PointerEvent } from "react";

const focusIcons = [Code2, ShieldCheck, Workflow];

const Hero = () => {
    const { t } = useLanguage();
    const [activeFocus, setActiveFocus] = useState(0);
    const reducedMotion = useReducedMotion();
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const rotateX = useSpring(tiltX, { stiffness: 140, damping: 24 });
    const rotateY = useSpring(tiltY, { stiffness: 140, damping: 24 });

    const resetTilt = () => {
        tiltX.set(0);
        tiltY.set(0);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (reducedMotion !== false || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        tiltX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -12);
        tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
    };

    return (
        <section id="hero" className="professional-hero relative isolate overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-center sm:px-6 sm:pt-32">
            <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
            <div aria-hidden="true" className="hero-aura pointer-events-none absolute left-1/2 top-16 -z-10 h-[34rem] w-[min(90vw,44rem)] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[100px]" />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center">
                <div className="hero-scene relative mb-6 grid h-72 w-72 place-items-center sm:h-80 sm:w-80">
                    <div aria-hidden="true" className="hero-platform" />
                    <div aria-hidden="true" className="hero-ring-plane"><div className="hero-ring" /></div>
                    <div aria-hidden="true" className="hero-ring-plane hero-ring-plane-alt"><div className="hero-ring hero-ring-alt" /></div>
                    <div aria-hidden="true" className="hero-tech-plate hero-tech-react">React<span>&lt;/&gt;</span></div>
                    <div aria-hidden="true" className="hero-tech-plate hero-tech-typescript">TS<span>TypeScript</span></div>
                    <div aria-hidden="true" className="hero-tech-plate hero-tech-security"><Workflow size={20} /><span>Automate</span></div>
                    <div className="hero-perspective hero-photo-float relative z-10 mx-auto w-40 sm:w-44" onPointerMove={handlePointerMove} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
                        <div aria-hidden="true" className="hero-orbit absolute -inset-3 rounded-[2.5rem] border border-indigo-300/40" />
                        <div aria-hidden="true" className="hero-orbit-secondary absolute -inset-5 rounded-[2.5rem] border border-sky-300/15" />
                        <motion.div
                            style={{ rotateX: reducedMotion === false ? rotateX : 0, rotateY: reducedMotion === false ? rotateY : 0 }}
                            className="hero-portrait hero-photo-frame relative rounded-[2rem] border border-white/20 bg-slate-900 p-2 shadow-[0_20px_70px_-15px_rgba(129,140,248,0.5)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800">
                                <Image src="/images/maria-alejandra-ortiz.jpeg" alt="María Alejandra Ortiz Páez" fill priority sizes="(min-width: 640px) 176px, 160px" className="object-cover object-top" />
                            </div>
                            <div aria-hidden="true" className="hero-depth-badge absolute -right-5 bottom-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-200/30 bg-slate-900 text-lg font-semibold text-indigo-200 shadow-xl">&lt;/&gt;</div>
                        </motion.div>
                    </div>
                </div>

                <div className="hero-enter flex w-full flex-col items-center">
                    <span className="hero-availability mb-5 inline-flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-teal-300/25 bg-teal-300/5 px-5 py-3 text-sm font-medium leading-relaxed text-teal-100 sm:text-base">
                        <span aria-hidden="true" className="hero-status-dot h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                        {t.hero.available}
                    </span>
                    <h1 className="mb-4 text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.12] tracking-tight text-white">
                        María Alejandra <span className="hero-name-gradient block bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent sm:inline">Ortiz Páez</span>
                    </h1>
                    <p className="mb-3 text-xl font-medium text-indigo-200 sm:text-2xl">{t.hero.role}</p>
                    <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{t.hero.summary}</p>

                    <div role="group" aria-label={t.hero.focusLabel} className="mb-4 flex flex-wrap justify-center gap-2">
                        {t.hero.focusAreas.map((area, index) => {
                            const Icon = focusIcons[index];
                            return (
                                <button key={index} type="button" aria-pressed={activeFocus === index} aria-controls="hero-focus-description" onClick={() => setActiveFocus(index)} className={`hero-action inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activeFocus === index ? "border-indigo-300/60 bg-indigo-400/15 text-indigo-100" : "border-slate-700 bg-slate-900/60 text-slate-400 hover:border-indigo-400/50 hover:text-white"}`}>
                                    <Icon aria-hidden="true" size={16} />{area.title}
                                </button>
                            );
                        })}
                    </div>
                    <div id="hero-focus-description" aria-live="polite" aria-atomic="true" className="mx-auto mb-7 min-h-24 w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4 text-sm leading-relaxed text-slate-300 sm:min-h-20">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.p key={activeFocus} initial={reducedMotion === false ? { opacity: 0, y: 6 } : false} animate={{ opacity: 1, y: 0 }} exit={reducedMotion === false ? { opacity: 0, y: -6 } : undefined} transition={{ duration: reducedMotion === false ? 0.18 : 0 }}>
                                {t.hero.focusAreas[activeFocus].description}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                        <a href="#projects" className="hero-action group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-indigo-400 px-7 py-3.5 font-semibold text-slate-950 hover:bg-indigo-300">
                            {t.hero.projects}<ArrowRight aria-hidden="true" size={19} className="hero-arrow" />
                        </a>
                        <a href={t.hero.cvFile} download={t.hero.cvDownload} className="hero-action inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-600 bg-slate-900/70 px-7 py-3.5 font-medium text-slate-100 hover:border-indigo-300 hover:bg-slate-800">
                            {t.hero.cv}<Download aria-hidden="true" size={19} />
                        </a>
                        <a href="#contact" className="hero-action inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white">{t.nav.contact}</a>
                    </div>
                    <a href="#about" className="hero-action mt-8 inline-flex items-center gap-2 rounded px-2 py-1 text-sm text-slate-400 hover:text-white">
                        <ArrowDown aria-hidden="true" size={16} className="hero-scroll-arrow" />{t.nav.about}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
