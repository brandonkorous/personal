import { SITE_INFO } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
                <Image src="/images/logo-large.png" alt={SITE_INFO.Name} width={40} height={40} />
                {showText && <span className={cn("font-coiny text-2x mt-1 group-hover:underline", className)}>{textContent}</span>}
            </div>
        </Link>
    );
}