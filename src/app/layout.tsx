import type { Metadata } from "next";
import { Coiny } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent fontawesome from adding its css since we did it manually above
config.autoAddCss = false;


const coiny = Coiny({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
    variable: "--font-coiny",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://brandonkorous.com'),
    title: "Brandon Korous - Bold Ideas.  Creative Solutions.",
    description: "Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.",
    openGraph: {
        title: "Brandon Korous - Bold Ideas.  Creative Solutions.",
        description: "Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.",
        type: "website",
        url: "https://brandonkorous.com",
        siteName: "Brandon Korous",
        images: [
            {
                url: "https://brandonkorous.com/logo.png",
                width: 800,
                height: 600,
                alt: "Brandon Korous Logo",
            },
        ],
    },
    twitter: {
        site: "@brandonkorous",
        card: "summary_large_image",
        description: "Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.",
        title: "Brandon Korous - Bold Ideas.  Creative Solutions.",
        images: {
            url: "https://brandonkorous.com/logo.png",
            alt: "Brandon Korous Logo",
            width: 800,
            height: 600,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": "large",
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-theme="personal" className={`${coiny.variable} antialiased`}>
            <body className="flex flex-col min-h-screen">
                {children}
                <script async src="https://helpninja.app/api/widget?t=hn_pk_7NFfkF5aljVeImKnvfhrqNc5&s=64dd50e3-8d05-43b9-b47f-6a9278721652&k=c7498e50-34e1-475a-b9f6-2ea18cde0f41&voice=casual"></script>
            </body>
        </html>
    );
}
