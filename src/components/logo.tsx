import { SITE_INFO } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    className?: string;
    showText?: boolean;
    showMoto?: boolean;
    href?: string;
    textContent?: string;
    width?: number;
    height?: number;
}

export default function Logo({
    className = "",
    showText = true,
    showMoto = false,
    href = "/",
    textContent = SITE_INFO.Name,
    width = 40,
    height = 40,
}: LogoProps) {
    return (
        <Link href={href} className="group justify-center text-center items-center">
            <div className={cn("flex justify-center gap-2", className)}>
                <Image src="/images/logo-large.png" alt={SITE_INFO.Name} width={width} height={height} />
                {showText && <span className={cn("font-coiny text-2x mt-1 group-hover:underline", className)}>{textContent}</span>}
            </div>
            {showMoto && (
                <span className="text-secondary font-bold mt-1">
                    Have IT your way!
                </span>
            )}
        </Link>
    );
}