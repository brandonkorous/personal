"use client";
import ResumeClientPage from "./components/resume"
import EngineerResumePage from "./components/resume-engineer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCalendar, faDownload, faMessage } from "@fortawesome/pro-solid-svg-icons";


export default function ResumePage() {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const type = params.get('type') || 'manager';
    const handleDownloadPDF = async () => {
        try {
            const response = await fetch('/api/resume/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate PDF');
            }

            // Create blob from response
            const blob = await response.blob();

            // Create download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Brandon_Korous_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('Failed to download PDF. Please try again.');
        }
    };
    return (
        <div className="bg-white">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 justify-end p-4">
                <button className="btn btn-primary" onClick={handleDownloadPDF}>
                    <FontAwesomeIcon icon={faDownload} className="mr-2" fixedWidth />
                    Download PDF
                </button>
                <Link className="btn btn-secondary btn-outline" href={`/printables/resume?type=${type}`}>
                    Print Resume
                </Link>
            </div>
            {type === 'engineer' ? <EngineerResumePage /> : <ResumeClientPage />}

            <section className="bg-secondary py-16">
                <div className="container max-w-6xl">
                    <div className="card bg-white border-4 border-primary shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="font-coiny text-4xl text-neutral-500">Let&apos;s Connect</h2>
                            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                                Interested in discussing how my expereience can benefit your organization?  Let&apos;s connect and discuss how we can work together.
                            </p>
                            <p className="font-bold text-neutral-500">Schedule a meeting or send me a message to get started.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                                    <FontAwesomeIcon icon={faMessage} />
                                    Contact Me
                                </Link>
                                <Link href="https://calendly.com/brandonkorous/30min" className="btn btn-secondary btn-lg btn-outline rounded-full" target="_blank">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    Setup a Meeting
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

