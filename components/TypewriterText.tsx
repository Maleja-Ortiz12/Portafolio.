"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypewriterTextProps = { text: string; className?: string };

// A text change remounts the animation so its timer and index reset together.
export const TypewriterText = (props: TypewriterTextProps) => (
    <TypewriterAnimation key={props.text} {...props} />
);

const TypewriterAnimation = ({ text, className }: TypewriterTextProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= text.length) return;

        const timeout = setTimeout(() => {
            setCurrentIndex(index => index + 1);
        }, 50);

        return () => clearTimeout(timeout);
    }, [currentIndex, text]);

    return (
        <span className={className}>
            {text.slice(0, currentIndex)}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-purple-500 ml-1 align-middle"
            />
        </span>
    );
};
