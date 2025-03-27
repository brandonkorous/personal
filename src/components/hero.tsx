import React from 'react';

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
};

const Hero = ({
    title,
    children,
    className,
    applyBlobBlur = true,
    topLeftBlobColor,
    topRightBlobColor,
    bottomLeftBlobColor,
    bottomRightBlobColor,
}: HeroProps) => {
    return (
        <div className={`hero min-h-180 relative overflow-hidden p-16 ${className}`}>
            {topLeftBlobColor && <div className={`absolute h-64 w-64 rounded-full -top-24 -left-32 ${applyBlobBlur &&  "blur-lg"} ${topLeftBlobColor}`}></div>}
            {topRightBlobColor && <div className={`absolute h-64 w-64 rounded-full -top-32 -right-24 ${applyBlobBlur &&  "blur-lg"} ${topRightBlobColor}`}></div>}
            {bottomLeftBlobColor && <div className={`absolute h-64 w-64 rounded-full -bottom-32 -left-24 ${applyBlobBlur &&  "blur-lg"} ${bottomLeftBlobColor}`}></div>}
            {bottomRightBlobColor && <div className={`absolute h-64 w-64 rounded-full -bottom-24 -right-32 ${applyBlobBlur &&  "blur-lg"} ${bottomRightBlobColor}`}></div>}
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Hero;