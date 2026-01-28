"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterText = ({ text, className }: { text: string, className?: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50); // Speed of typing

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-purple-500 ml-1 align-middle"
            />
        </span>
    );
};
