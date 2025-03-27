import { SITE_INFO } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
    className?: string;
    showText?: boolean;
    href?: string;
    textContent?: string;
}

export default function Logo({
    className = "",
    showText = true,
    href = "/",
    textContent = SITE_INFO.Name,
}: LogoProps) {
    return (
        <Link href={href} className="group">
            <div className={cn("flex items-center gap-2", className)}>
                <div className="relative">
                    <div className="relative flex items-center justify-center bg-primary w-10 h-10 rounded-full shadow-md z-10">
                        <span className="font-coiny text-white text-xl leading-none mt-1">BK</span>
                    </div>
                    <div className="absolute top-1 -right-1.5 bg-accent-500 w-5 h-5 rounded-full z-0" />
                    <div className="absolute top-6 -left-1 bg-secondary-500 w-4 h-4 rounded-full z-0" />
                </div>
                {showText && <span className={cn("font-coiny text-2x mt-1 group-hover:underline", className)}>{textContent}</span>}
            </div>
        </Link>
    );
}