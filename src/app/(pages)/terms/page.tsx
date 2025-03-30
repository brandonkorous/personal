import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Brandon Korous",
    description: "Review the terms of service for brandonkorous.com",
};

export default function TermsPage() {
    return (
        <main className="bg-base-100 text-neutral py-12">
            <div className="container text-xl">
                <h1 className="">Terms of Service</h1>
                <p className="text-neutral">Effective Date: March 29, 2025</p>

                <p className="mb-6 text-neutral">
                    Welcome to <strong>brandonkorous.com</strong> (&quot;BK&quot;, &quot;Brandon Korous&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of
                    Service (&quot;Terms&quot;) govern your access to and use of our website, content, services, and any
                    features or tools provided (collectively, the &quot;Service&quot;). By accessing or using the Service,
                    you agree to be bound by these Terms and our{" "}
                    <Link href="/privacy" className="link link-primary">
                        Privacy Policy
                    </Link>
                    .
                </p>

                <section className="space-y-6">
                    <div>
                        <h3 className="">1. Use of the Service</h3>
                        <p className="text-neutral">
                            You may use this site for personal, non-commercial use, portfolio browsing, or learning
                            about Brandon Korous&apos; professional work, content, or creative output.
                        </p>
                        <ul className="list-disc ml-6">
                            <li>Use the site in a respectful and lawful way.</li>
                            <li>Not interfere with the functionality or security of the site.</li>
                            <li>Not copy, distribute, or alter content unless explicitly permitted.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="">2. Intellectual Property</h3>
                        <p className="text-neutral">
                            All content on brandonkorous.com, including but not limited to text, images, branding
                            elements, icons, logos, graphics, and source code, is owned by Brandon Korous or its
                            content creators, unless otherwise stated.
                        </p>
                        <p className="text-neutral">You may not reproduce, reuse, or redistribute content without express permission.</p>
                    </div>

                    <div>
                        <h3 className="">3. User Contributions</h3>
                        <p className="text-neutral">
                            If the site allows user comments, contact forms, submissions, or uploads:
                        </p>
                        <ul className="list-disc ml-6">
                            <li>
                                You retain ownership of any content you submit, but grant BK a non-exclusive,
                                worldwide, royalty-free license to use, display, or distribute it.
                            </li>
                            <li>
                                You represent that your content does not infringe on the rights of others.
                            </li>
                        </ul>
                        <p className="text-neutral">
                            Brandon Korous reserves the right to remove any content deemed inappropriate or in violation of
                            these Terms.
                        </p>
                    </div>

                    <div>
                        <h3 className="">4. External Links</h3>
                        <p className="text-neutral">
                            This site may contain links to third-party websites or services. We are not responsible
                            for the content, accuracy, or policies of any third-party site. Use external links at
                            your own risk.
                        </p>
                    </div>

                    <div>
                        <h3 className="">5. Disclaimers</h3>
                        <p className="text-neutral">
                            The site is provided &quot;as is” without warranties of any kind. We make no guarantees about
                            the accuracy, reliability, or availability of the content or services.
                        </p>
                        <p className="text-neutral">
                            Brandon Korous disclaims any liability for errors or inaccuracies, downtime or interruptions, and
                            loss or damage arising from use of the Service.
                        </p>
                    </div>

                    <div>
                        <h3 className="">6. Limitation of Liability</h3>
                        <p className="text-neutral">
                            To the fullest extent permitted by law, BK and its affiliates shall not be liable for
                            any indirect, incidental, or consequential damages related to your use of this site.
                        </p>
                    </div>

                    <div>
                        <h3 className="">7. Modifications</h3>
                        <p className="text-neutral">
                            We may update or modify these Terms at any time. If we do, we’ll update the &quot;Effective
                            Date” at the top of the page. Continued use of the Service after changes indicates
                            acceptance of the new Terms.
                        </p>
                    </div>

                    <div>
                        <h3 className="">8. Termination</h3>
                        <p className="text-neutral">
                            We reserve the right to restrict or terminate your access to the Service at any time,
                            without notice, for behavior deemed inappropriate or in violation of these Terms.
                        </p>
                    </div>

                    <div>
                        <h3 className="">9. Governing Law</h3>
                        <p className="text-neutral">
                            These Terms are governed by the laws of the State of California, without regard to its
                            conflict of law principles.
                        </p>
                    </div>

                    <div>
                        <h3 className="">10. Contact</h3>
                        <p className="text-neutral">For questions about these Terms, contact:</p>
                        <ul className="ml-6 list-disc">
                            <li><strong>Brandon Korous</strong></li>
                            <li>Email: <a href="mailto:hello@brandonkorous.com" className="link">hello@brandonkorous.com</a></li>
                            <li>Website: <Link href="/" className="link">brandonkorous.com</Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
