import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faEnvelope, faLightbulb, faRobot, faRocket, faStar } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { faStar as faStarSolid } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { faStar as faStarThin } from "@awesome.me/kit-654a0ecbfd/icons/classic/thin";
import Hero from "@/components/hero";
import IconSwitcher from "@/components/icon-switcher";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Testimonial from "@/components/testimonial";


export default function LandingPage() {
    const icons = ["code", "face-smile", "network-wired"] as IconName[];
    const icons2 = ["paintbrush-fine", "code-branch", "cloud"] as IconName[];
    const interval = 5000;
    const interval2 = 8000;

    return (
        <>
            <Hero className="" bottomLeftBlobColor="bg-success/20" topRightBlobColor="bg-accent/20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center container">
                    <div className="flex flex-col space-y-8 text-neutral-500 max-w-2xl">
                        <div className="badge badge-xl bg-white text-primary font-bold py-5 shadow-lg border-none">
                            <FontAwesomeIcon icon={faRocket} />
                            Technology Solutions
                        </div>
                        <h1 className="mb-0">
                            Bold Ideas.
                            <br /><span className="text-primary">Creative</span> Solutions.
                        </h1>
                        <p className="text-2xl">
                            Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/services" className="btn btn-primary btn-lg rounded-full">
                                <FontAwesomeIcon icon={faStar} />
                                Get Started
                            </Link>
                            <Link href="/about" className="btn btn-secondary btn-lg btn-outline rounded-full">
                                Learn More
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="fa-layers fa-fw fa-lg">
                                        <FontAwesomeIcon icon={faStarSolid} size="lg" className="text-accent-500" />
                                        <FontAwesomeIcon icon={faStarThin} size="lg" className="text-accent-800" />
                                    </span>
                                ))}
                            </div>
                            <div className="text-neutral-500">
                                Trusted by <span className="font-semibold">1000+</span> customers
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-secondary border-8 border-white shadow-xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-9xl md:text-[14rem] text-white font-coiny pt-10">BK</div>
                                </div>
                            </div>
                            <div className="absolute top-10 -right-2 w-20 h-20 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                <IconSwitcher icons={icons} interval={interval} size="2x" className="text-white" />
                            </div>
                            <div className="absolute bottom-4 left-3 w-24 h-24 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                <IconSwitcher icons={icons2} interval={interval2} size="2x" className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>

            <section className="bg-white py-16 text-neutral-500">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="">What I Do</h2>
                        <p className="max-w-xl mx-auto text-xl">
                            Combining tech expertise, innovation, and automation to help your business thrive in the digital landscape.
                        </p>
                    </div>
                    <div className="container grid gap-10 lg:grid-cols-3">
                        <div className="card card-border bg-base-100 p-8 border-primary relative">
                            <div className="card-icon absolute top-0 right-0">
                                <div className="w-12 h-12 bg-primary rounded-bl-4xl flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCode} size="xl" fixedWidth className="text-white pl-2 pb-2" />
                                </div>
                            </div>
                            <div className="card-title">
                                <h3>Tech Expertise</h3>
                            </div>
                            <p className="card-content ">
                                Web development, automation, and innovation to help your brand stand out and operate efficiently.
                            </p>
                            <div className="card-actions text-lg">
                                <Link href="/services" className="text-primary no-underline hover:underline pt-4">
                                    Learn More <FontAwesomeIcon icon={"arrow-right"} />
                                </Link>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 p-8 border-secondary relative">
                            <div className="card-icon absolute top-0 right-0">
                                <div className="w-12 h-12 bg-secondary rounded-bl-4xl flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLightbulb} size="xl" fixedWidth className="text-white pl-2 pb-2" />
                                </div>
                            </div>
                            <div className="card-title">
                                <h3>Innovation & Modernization</h3>
                            </div>
                            <p className="card-content">
                                Forward-thinking strategies and solutions that transform outdated systems and processes into modern, efficient operations.
                            </p>
                            <div className="card-actions text-lg">
                                <Link href="/services" className="text-secondary no-underline hover:underline pt-4">
                                    Learn More <FontAwesomeIcon icon={"arrow-right"} />
                                </Link>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 p-8 border-accent relative">
                            <div className="card-icon absolute top-0 right-0">
                                <div className="w-12 h-12 bg-accent rounded-bl-4xl flex items-center justify-center">
                                    <FontAwesomeIcon icon={faRobot} size="xl" fixedWidth className="text-white pl-2 pb-2" />
                                </div>
                            </div>
                            <div className="card-title">
                                <h3>Automation</h3>
                            </div>
                            <p className="card-content">
                                Intelligent workflow automation solutions that reduce manual tasks, minimize errors, and increase operational efficiency.
                            </p>
                            <div className="card-actions text-lg">
                                <Link href="/services" className="text-accent no-underline hover:underline pt-4">
                                    Learn More <FontAwesomeIcon icon={"arrow-right"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-16 text-xl">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="font-coiny text-base-400">What People Say</h2>
                        <p className="text-base-400 text-2xl">
                            Don&apos;t just take my word for it.  Here&apos;s what my partners and clients have to say.
                        </p>
                    </div>
                    <div className="container grid gap-y-10 gap-x-20 lg:grid-cols-3">
                        <Testimonial name="Sarah Johnson" initials="SJ" position="CEO, Johnson & Co." statement="Brandon Korous tranformed our online presence with a perfect blend of technical expertise and creative vision.  Our engagement has never been higher." />
                        <Testimonial name="Michael Chen" initials="MC" position="Marketing Director, GrowthLabs" statement="Working with Brandon Korous was a game-changer for our automation strategy.  The results exceeded our expectations in every way." />
                        <Testimonial name="Jessica Williams" initials="JW" position="Founder, CreativeEdge" statement="Brandon Korous&apos;s innovative approach to modernization helped us out in a crowded market.  Highly recommend!" />
                    </div>
                </div>
            </section>
            <section className="bg-base-500 py-16 text-neutral-500 container">
                <div className="card card-border max-w-6xl mx-auto border-primary bg-white items-center">
                    <div className="text-center mt-16">
                        <h2 className="font-coiny">Ready to Work Together?</h2>
                        <p className="max-w-2xl mx-auto text-xl">
                            Let&apos;s create somethign amazing! Whether you need technical solutions, automation, or a fresh new look, I&apos;m here to help.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row text-center space-4 gap-4 mb-16">
                        <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Get in Touch
                        </Link>
                        <Link href="/services" className="btn btn-secondary btn-lg btn-outline rounded-full">
                            Explore Services
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
