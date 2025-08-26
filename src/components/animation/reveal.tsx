"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
    once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 24, className = '', once = true }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
};
