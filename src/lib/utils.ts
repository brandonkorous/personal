//import { type ClassValue, clsx } from clsx;
//import { twMerge } from "tailwind-merge";

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function formatDate(dateInput: string | number | Date): string {
    try {
        console.log("Formatting date:", dateInput);

        // Handle stringified timestamps
        const date = typeof dateInput === 'string' && /^\d+$/.test(dateInput)
            ? new Date(parseInt(dateInput, 10))
            : new Date(dateInput);

        if (isNaN(date.getTime())) {
            console.warn("Invalid date provided:", dateInput);
            return String(dateInput);
        }

        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    } catch (error) {
        console.error("Error formatting date:", error);
        return String(dateInput);
    }
}