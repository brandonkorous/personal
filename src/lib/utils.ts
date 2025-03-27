//import { type ClassValue, clsx } from clsx;
//import { twMerge } from "tailwind-merge";

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date)
    } catch (error) {
        console.error("Error formatting date:", error)
        return dateString
    }
}