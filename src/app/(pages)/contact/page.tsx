import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import FAQS from "@/data/faq";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/site";
import { faClock, faEnvelope, faLocationDot, faMessage, faPhone } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContactForm from "./components/form";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Contact = () => {
    return (
        <>
            <Hero topLeftBlobColor="bg-secondary/20" bottomRightBlobColor="bg-primary/20" className="">
                <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                        <div className="badge badge-xl bg-white text-secondary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                            <FontAwesomeIcon icon={faMessage} size="lg" />
                            Get In Touch
                        </div>
                        <h1 className="py-0 mb-0">
                            Let&apos;s <span className="text-primary">Connect</span> and <span className="text-secondary">Create</span> <span className="text-accent">Something Amazing</span>
                        </h1>
                        <div className="text-2xl">
                            Have a project in mind or just want to say hello?  I&apos;d love to hear from you.  Fill out the form below and I&apos;ll get back to you as soon as possible.
                        </div>
                    </div>
                </div>
            </Hero>
            <section className="bg-white py-16">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="flex w-full flex-col">
                                <ContactForm />
                                <div className="divider divider-primary font-extrabold">OR</div>
                                <Link href="/project-intake" className="btn btn-secondary btn-lg rounded-full">Start a Project Intake</Link>
                            </div>
                        </div>
                        <div className="bg-white border-primary text-neutral">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="mb-6">
                                        Contact Information
                                    </h2>
                                    <div className="mb-8 text-lg">
                                        Feel free to reach out through any of the following channels. I typically respond within 24-48
                                        hours.
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-primary/30 text-white rounded-full p-2">
                                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="" fixedWidth />
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <h5 className="-mb-2">Email</h5>
                                                <Link href={`mailto:${CONTACT_INFO.email}`} className="hover:underline text-lg">
                                                    {CONTACT_INFO.email}
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-secondary/30 text-white rounded-full p-2">
                                                <FontAwesomeIcon icon={faLocationDot} size="lg" className="" fixedWidth />
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <h5 className="-mb-2">Address</h5>
                                                <Link href={`tel:${CONTACT_INFO.address}`} className="hover:underline text-lg">
                                                    {CONTACT_INFO.address}
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-accent/30 text-white rounded-full p-2">
                                                <FontAwesomeIcon icon={faPhone} size="lg" className="" fixedWidth />
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <h5 className="-mb-2">Phone</h5>
                                                <Link href={`tel:${CONTACT_INFO.phone}`} className="hover:underline text-lg">
                                                    {CONTACT_INFO.phone}
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-success/30 text-white rounded-full p-2">
                                                <FontAwesomeIcon icon={faClock} size="lg" className="" fixedWidth />
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <h5 className="-mb-2">Working Hours</h5>
                                                <div className="text-lg">
                                                    {CONTACT_INFO.workingHours}
                                                    <br />
                                                    {CONTACT_INFO.weekendHours}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-neutral mb-4">Connect on Social Media</h3>
                                    <div className="flex space-x-4">
                                        {SOCIAL_LINKS.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className="btn btn-circle btn-outline btn-secondary hover:bg-primary hover:text-white hover:border-primary text-lg"
                                                aria-label={link.title}
                                            >
                                                <FontAwesomeIcon icon={link.icon as IconProp} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary">
                <div className="container">
                    <div className="flex flex-col items-center max-w-6xl mx-auto gap-8">
                        <h2 className="text-center text-white">Frequently Asked Questions</h2>
                        {FAQS.map((faq, index) => (
                            <FAQ key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container">
                    <div className="card card-border max-w-6xl mx-auto border-primary bg-white items-center">
                        <div className="text-center mt-16">
                            <h2 className="font-coiny">Let&apos;s Create Something Amazing Together</h2>
                            <p className="max-w-2xl mx-auto text-xl">
                                Ready to take your business to the next level?  I&apos;m excited to hear about your project and how we can collaborate to achieve your goals.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 mb-16">
                            <Link href="/project-intake" className="btn btn-primary btn-lg rounded-full">
                                <FontAwesomeIcon icon={faEnvelope} />
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;