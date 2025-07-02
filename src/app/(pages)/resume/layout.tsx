import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Brandon Korous - Resume | Technology Executive",
    description:
        "Strategic and results-driven Technology Executive with 15+ years of leadership experience in enterprise architecture, cloud transformation, DevOps/DevSecOps, software development, and AI-powered innovation.",
    keywords:
        "Brandon Korous, Technology Executive, Enterprise Architecture, Cloud Transformation, DevOps, DevSecOps, Software, Development, Engineering, AI Innovation, Resume, CV",
    openGraph: {
        title: "Brandon Korous - Resume | Technology Executive",
        description:
            "Strategic and results-driven Technology Executive with 15+ years of leadership experience in enterprise architecture, cloud transformation, DevOps/DevSecOps, software development, and AI-powered innovation.",
        type: "profile",
        images: [
            {
                url: "/images/brandon-korous-profile.jpg",
                width: 1200,
                height: 630,
                alt: "Brandon Korous - Technology Executive",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Brandon Korous - Resume | Technology Executive",
        description:
            "Strategic and results-driven Technology Executive with 15+ years of leadership experience in enterprise architecture, cloud transformation, DevOps/DevSecOps, software development, and AI-powered innovation.",
        images: ["/images/brandon-korous-profile.jpg"],
        creator: "@brandonkorous",
    },
}

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Person",
                        name: "Brandon Korous",
                        jobTitle: "Technology Executive",
                        description:
                            "Strategic and results-driven Technology Executive with 15+ years of leadership experience in enterprise architecture, cloud transformation, DevOps/DevSecOps, software development, and AI-powered innovation.",
                        url: "https://brandonkorous.com/resume",
                        sameAs: [
                            "https://www.linkedin.com/in/brandonkorous",
                            "https://twitter.com/brandonkorous",
                            "https://github.com/brandonkorous",
                        ],
                    }),
                }}
            />
            {children}
        </>
    )
}

export default ResumeLayout;