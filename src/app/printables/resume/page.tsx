"use client";
import ResumeClientPage from "@/app/(pages)/resume/components/resume";
import EngineerResumePage from "@/app/(pages)/resume/components/resume-engineer";

export default function ResumePrintable() {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const type = params.get('type') || 'manager';
    return (
        <div className="printables">
            {type === 'engineer' ? <EngineerResumePage /> : <ResumeClientPage />}
        </div>
    );
}