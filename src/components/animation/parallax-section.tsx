"use client";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // multiplier for parallax
    fade?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = '', strength = 120, fade = true }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
    const fadeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const opacity = fade ? fadeOpacity : undefined;

    return (
        <div ref={ref} className={`relative will-change-transform ${className}`}>
            <motion.div style={{ y, opacity }}>
                {children}
            </motion.div>
        </div>
    );
};
