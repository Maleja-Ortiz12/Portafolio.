"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
                <Particle key={p.id} {...p} />
            ))}
        </div>
    );
};

const Particle = ({ x, y, size, duration, delay }: { x: number; y: number; size: number; duration: number; delay: number }) => {
    return (
        <motion.div
            className="absolute rounded-full bg-purple-500/20"
            style={{
                width: size,
                height: size,
                left: `${x}vw`,
                top: `${y}vh`,
            }}
            animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0], // This Math.random inside animate prop is okay as it's evaluated at animation start, but better to pass it too to be safe.
                opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
        />
    );
};

export default ParticleBackground;
