"use client";
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface FloatingBlobsProps {
    className?: string;
    colors?: string[];
    count?: number;
}

export const FloatingBlobs: React.FC<FloatingBlobsProps> = ({ className = '', colors = ['bg-primary/20', 'bg-secondary/20', 'bg-accent/10'], count = 3 }) => {
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start(i => ({
            x: [0, (i + 1) * 20, (i + 1) * -10, 0],
            y: [0, (i + 1) * -30, (i + 1) * 15, 0],
            transition: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut' }
        }));
    }, [controls]);

    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    animate={controls}
                    className={`absolute rounded-full mix-blend-multiply blur-2xl opacity-60 ${colors[i % colors.length]}`}
                    style={{ width: 260, height: 260, top: 80 + i * 120, left: 40 + i * 160 }}
                />
            ))}
        </div>
    );
};
