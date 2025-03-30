import Hero from "@/components/hero";
import { faArrowRight, faEnvelope, faCalendar, faThoughtBubble } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TIME_LINE_ITEMS } from "@/data/about";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const AboutPage = () => {
    return (
        <>
            <Hero topLeftBlobColor="bg-secondary/20" bottomRightBlobColor="bg-primary/20" className="">
                <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                        <div className="badge badge-xl bg-white text-secondary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                            <FontAwesomeIcon icon={faThoughtBubble} size="xl" />
                            About Me
                        </div>
                        <h1 className="py-0 mb-0">
                            Who is <span className="text-primary">Brandon Korous</span>?
                        </h1>
                        <div className="text-2xl">
                            Tech enthusiast, creative thinker, and automation expert with a passion for helping brands stand out in todays digital landscape.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://calendly.com/brandonkorous/30min" className="btn btn-primary btn-lg rounded-full">
                                <FontAwesomeIcon icon={faCalendar} />
                                Meet With Me
                            </Link>
                            <Link href="/contact" className="btn btn-secondary btn-outline btn-lg rounded-full ">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </Hero>
            <section className="bg-white">
                <div className="container py-16 max-w-6xl text-neutral-500">
                    <h2 className="font-coiny text-4xl text-center">My Story</h2>
                    <div className="">
                        <p>
                            I&apos;ve always been fascinated by the intersection of technology, design, and creativity.  My journey began when I was a kid and I discovered the power of the computer. I was hooked from the moment I saw my first QBasic prompt and I knew that I wanted to be a part of this amazing world.
                        </p>
                        <p>
                            After serving as an on-demand developer and technical support volunteer for friends and family in my teen years. I decided to pursue several careers including sales, marketing, disk jockeying, and management of varying industries.  I&apos;ve always been a problem solver and I&apos;ve always realized that technology is the key to solving many of the world&apos;s problems.
                        </p>
                        <p>
                            This realization led me to pursue a career in technology and I&apos;ve never looked back.  I&apos;ve worked with some of the biggest brands in the world and I&apos;ve helped them achieve their goals through the power of technology.  I&apos;ve also worked with startups and small businesses to help them grow and succeed in today&apos;s digital landscape.
                        </p>
                        <p>
                            I&apos;m passionate about helping brands stand out in today&apos;s digital landscape and I&apos;m excited to help you achieve your goals.  I&apos;m always looking for new challenges and I&apos;m always looking for new opportunities to learn and grow.
                        </p>
                        <p>
                            If you&apos;re looking for a creative thinker, a problem solver, and a technology expert, then look no further.  I&apos;m here to help you achieve your goals and I&apos;m excited to work with you.
                        </p>
                    </div>
                </div>
            </section >
            <section className="bg-base py-16">
                <div className="container">
                    <h2 className="text-center text-neutral-500 pb-4">My Journey</h2>

                    <ul className="timeline max-md:timeline-compact timeline-vertical ">
                        {TIME_LINE_ITEMS.map((item, index) => (
                            <li key={index} className="mb-0">
                                {index > 0 && <hr className={`bg-${item.color}`} />}
                                <div className={`timeline-middle border-${item.color} border-4 bg-white h-10 w-10 rounded-full items-center justify-center flex`}>
                                    <FontAwesomeIcon icon={item.icon as IconProp} className={`text-${item.color}`} size="sm" fixedWidth />
                                </div>
                                <div className={`${index % 2 === 0 ? "timeline-start" : "timeline-end"} timeline-box text-2xl border-${item.color} border-4 shadow-lg`}>
                                    <div className="">
                                        <h3 className="text-neutral-500">{item.date}</h3>
                                        <h4 className="text-accent-500">{item.title}</h4>
                                        <p className="text-neutral">{item.description}</p>
                                    </div>
                                </div>
                                {index < TIME_LINE_ITEMS.length - 1 && <hr className={`bg-${item.color}`} />}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-accent py-16">
                <div className="container">
                    <h2 className="text-base-300 text-center pb-6">My Expertise</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card bg-base-300 border-4 border-primary shadow-lg">
                            <div className="card-body">
                                <h3 className="text-neutral">Web Development</h3>
                                <ul className="list-disc list-inside">
                                    <li>React, Vite, NextJS, Vue, .Net</li>
                                    <li>TailwindCSS, DaisyUI, Bootstrap, MaterialUI & Web Design</li>
                                    <li>Full-Stack Development, Serverless Architecture & Microservices</li>
                                    <li>REST, SOAP, 3rd Party & Custom Integrations</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card bg-base-300 border-4 border-primary shadow-lg">
                            <div className="card-body">
                                <h3 className="text-neutral">Business Strategy</h3>
                                <ul className="list-disc list-inside">
                                    <li>Brand Development, Positioning & Identity</li>
                                    <li>Digital Marketing, SEO & Social Media</li>
                                    <li>Growth Strategy, Analytics & Optimization</li>
                                    <li>E-Commerce, Marketplace, Insurance, Legal & Sales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card bg-base-300 border-4 border-primary shadow-lg">
                            <div className="card-body">
                                <h3 className="text-neutral">Automation & Innovation</h3>
                                <ul className="list-disc list-inside">
                                    <li>AI, Machine Learning & Data Science</li>
                                    <li>IoT, Agents, Automation & Blockchain</li>
                                    <li>Cloud Computing, DevOps & Infrastructure as Code (IaC)</li>
                                    <li>Security, Compliance, Privacy & Risk Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="bg-white py-16 text-neutral-500">
                <div className="container">
                    <div className="card card-border max-w-6xl mx-auto border-primary bg-white items-center">
                        <div className="text-center mt-16">
                            <h2 className="font-coiny">Let&apos;s Build Something Great Together!</h2>
                            <p className="max-w-2xl mx-auto text-xl">
                                Whether you&apos;re looking for innovative tech solutions, creative strategies, or a fresh perspective, I&apos;m here to collaborate and bring your vision to life.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-4 gap-4 mb-16">
                            <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                                <FontAwesomeIcon icon={faEnvelope} />
                                Contact Me
                            </Link>
                            <Link href="/portfolio" className="btn btn-secondary btn-lg btn-outline rounded-full">
                                View My Work
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;