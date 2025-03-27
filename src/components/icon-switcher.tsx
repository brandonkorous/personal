'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { all } from "@awesome.me/kit-654a0ecbfd/icons";
import { cn } from "@/lib/utils";

library.add(...all);

interface IconSwitcherProps {
    icons: IconName[];
    interval: number;
    className: string;
    size?: "xs" | "sm" | "lg" | "xl" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
};

const IconSwitcher = ({ icons, interval, className = "", size = "lg" }: IconSwitcherProps) => {
    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [icons.length, interval]);

    return (
        <div className="relative flex items-center justify-center">
            {icons.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} size={size} fixedWidth className={cn("absolute transition-opacity duration-500", index === iconIndex ? "opacity-100" : "opacity-0", className)} />
            ))}
        </div>
    );
};

export default IconSwitcher;