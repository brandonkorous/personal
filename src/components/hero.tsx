"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Lazy load animation component client-side only
const FloatingBlobs = dynamic(() => import('./animation/floating-blobs').then(m => m.FloatingBlobs), { ssr: false });

interface HeroProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
    className: string;
    applyBlobBlur?: boolean;
    topLeftBlobColor?: string;
    topRightBlobColor?: string;
    bottomLeftBlobColor?: string;
    bottomRightBlobColor?: string;
    contentPosition?: "left" | "right" | "above" | "below";
    animated?: boolean;
};

const Hero = ({
    children,
    className,
    applyBlobBlur = true,
    topLeftBlobColor,
    topRightBlobColor,
    bottomLeftBlobColor,
    bottomRightBlobColor,
    animated = false,
}: HeroProps) => {
    return (
        <div className={`hero min-h-180 relative overflow-hidden py-16 ${className}`}>
            {topLeftBlobColor && <div className={`absolute h-64 w-64 rounded-full -top-24 -left-32 ${applyBlobBlur && "blur-lg"} ${topLeftBlobColor}`}></div>}
            {topRightBlobColor && <div className={`absolute h-64 w-64 rounded-full -top-32 -right-24 ${applyBlobBlur && "blur-lg"} ${topRightBlobColor}`}></div>}
            {bottomLeftBlobColor && <div className={`absolute h-64 w-64 rounded-full -bottom-32 -left-24 ${applyBlobBlur && "blur-lg"} ${bottomLeftBlobColor}`}></div>}
            {bottomRightBlobColor && <div className={`absolute h-64 w-64 rounded-full -bottom-24 -right-32 ${applyBlobBlur && "blur-lg"} ${bottomRightBlobColor}`}></div>}
            {animated && <FloatingBlobs />}
            <div className="container relative">
                {children}
            </div>
        </div>
    );
};

export default Hero;