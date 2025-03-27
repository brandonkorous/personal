import type { Metadata } from "next"
import ResumeClientPage from "./components/resume"

export const metadata: Metadata = {
    title: "Brandon Korous - Resume | Technology Executive",
    description:
        "Strategic and results-driven Technology Executive with 15+ years of leadership experience in enterprise architecture, cloud transformation, DevOps/DevSecOps, and AI-powered innovation.",
    keywords:
        "Brandon Korous, Technology Executive, Enterprise Architecture, Cloud Transformation, DevOps, DevSecOps, AI Innovation, Resume, CV",
}

export default function ResumePage() {
    return <ResumeClientPage />
}

