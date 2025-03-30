import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Brandon Korous",
    description: "Read how brandonkorous.com collects and uses data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-base-100 text-neutral py-12">
            <div className="container text-xl">
                <h1 className="">Privacy Policy</h1>
                <p className="text-neutral">Effective Date: March 29, 2025</p>

                <p className="mb-6 text-neutral">
                    This Privacy Policy explains how <strong>brandonkorous.com</strong> (&quot;BK&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects the personal information of users who visit or interact with our site and services.
                </p>

                <section className="space-y-6">
                    <div>
                        <h3 className="">1. Information We Collect</h3>
                        <p className="text-neutral">We may collect the following types of information:</p>
                        <ul className="list-disc ml-6">
                            <li><strong>Personal Information</strong> (e.g., name, email address) if you submit a contact form or sign up for updates.</li>
                            <li><strong>Usage Data</strong> such as pages visited, time spent, and technical details like browser type.</li>
                            <li><strong>Cookies & Analytics</strong> to understand how users interact with the site and improve performance.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="">2. How We Use Your Information</h3>
                        <ul className="list-disc ml-6">
                            <li>To respond to inquiries or feedback.</li>
                            <li>To analyze traffic and improve website performance.</li>
                            <li>To send occasional updates or newsletters (if opted-in).</li>
                            <li>To detect or prevent fraud or abuse of the service.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="">3. Sharing of Information</h3>
                        <p className="text-neutral">
                            We do not sell, trade, or rent your personal information to others. We may share data with trusted third-party services (e.g., analytics or hosting providers) who help us operate our site, provided they comply with strict data protection standards.
                        </p>
                    </div>

                    <div>
                        <h3 className="">4. Cookies</h3>
                        <p className="text-neutral">
                            We use cookies to improve user experience, track usage statistics, and remember preferences. You can control or disable cookies via your browser settings.
                        </p>
                    </div>

                    <div>
                        <h3 className="">5. Data Security</h3>
                        <p className="text-neutral">
                            We take reasonable technical and organizational precautions to prevent loss, misuse, or unauthorized access to your data. However, no system is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h3 className="">6. Third-Party Services</h3>
                        <p className="text-neutral">
                            This website may use third-party tools (e.g., Google Analytics, FontAwesome Kits) which may collect data according to their own privacy policies. We encourage you to review their terms.
                        </p>
                    </div>

                    <div>
                        <h3 className="">7. Your Rights</h3>
                        <p className="text-neutral">
                            You may request to view, update, or delete your personal information by contacting us. If you have subscribed to updates, you may unsubscribe at any time.
                        </p>
                    </div>

                    <div>
                        <h3 className="">8. Changes to This Policy</h3>
                        <p className="text-neutral">
                            We may update this Privacy Policy periodically. When we do, we’ll revise the &quot;Effective Date&quot; at the top of the page. Continued use of the site after changes constitutes acceptance.
                        </p>
                    </div>

                    <div>
                        <h3 className="">9. Contact</h3>
                        <p className="text-neutral">For questions or privacy-related requests, please contact:</p>
                        <ul className="ml-6 list-disc">
                            <li><strong>Brandon Korous</strong></li>
                            <li>Email: <a href="mailto:your-email@domain.com" className="link">your-email@domain.com</a></li>
                            <li>Website: <Link href="/" className="link">brandonkorous.com</Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
