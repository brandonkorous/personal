import Hero from "@/components/hero";
import { faCode, faPlay, faArrowRight, faEnvelope, faRocket, faChartLine } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>
            <Hero topLeftBlobColor="bg-success/20" bottomRightBlobColor="bg-neutral/20" className="">
                <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                        <div className="badge badge-xl bg-white text-primary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                            <FontAwesomeIcon icon={faCode} size="xl" />
                            Services
                        </div>
                        <h1 className="py-0 mb-0 text-3xl md:text-6xl">
                            How can I help <span className="text-secondary">Your Organization</span>?
                        </h1>
                        <div className="text-2xl">
                            Tailored technology solutions designed to help your organization reach its full potential.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#" className="btn btn-primary btn-lg rounded-full">
                                <FontAwesomeIcon icon={faPlay} />
                                Get Started
                            </a>
                            <a href="#" className="btn btn-secondary btn-outline btn-lg rounded-full">View Packages</a>
                        </div>
                    </div>
                </div>
            </Hero>

            <section className="bg-secondary py-16">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-white text-center mb-12">Technical Expertise That Drives Results</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                            <h3 className="mb-4 flex items-center gap-3 text-neutral">
                                <FontAwesomeIcon icon={faCode} className="text-primary" />
                                Frontend Excellence
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Crafting pixel-perfect, responsive interfaces using cutting-edge technologies that your users will love.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-primary">React</span>
                                <span className="badge badge-primary">Next.js</span>
                                <span className="badge badge-primary">Vue.js</span>
                                <span className="badge badge-primary">.Net</span>
                                <span className="badge badge-primary">Objective-C/Swift</span>
                                <span className="badge badge-primary">TypeScript</span>
                                <span className="badge badge-primary">Tailwind CSS</span>
                                <span className="badge badge-primary">DaisyUI</span>
                                <span className="badge badge-primary">Bootstrap</span>
                                <span className="badge badge-primary">FontAwesome</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-success">
                            <h3 className="mb-4 flex items-center gap-3 text-neutral">
                                <FontAwesomeIcon icon={faRocket} className="text-success" />
                                Backend Architecture
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Building robust, scalable backend systems that power your applications with reliability and performance.
                            </p>
                            <div className="flex flex-wrap gap-2 text-white">
                                <span className="badge badge-success">Node.js</span>
                                <span className="badge badge-success">Express</span>
                                <span className="badge badge-success">.Net</span>
                                <span className="badge badge-success">MongoDB</span>
                                <span className="badge badge-success">MySQL</span>
                                <span className="badge badge-success">SQL Server</span>
                                <span className="badge badge-success">PostgreSQL</span>
                                <span className="badge badge-success">REST APIs</span>
                                <span className="badge badge-success">GraphQL</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent">
                            <h3 className="mb-4 flex items-center gap-3 text-neutral">
                                <FontAwesomeIcon icon={faChartLine} className="text-accent" />
                                Performance Optimization
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Enhancing application speed and efficiency through advanced optimization techniques and best practices.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-accent">SEO</span>
                                <span className="badge badge-accent">Core Web Vitals</span>
                                <span className="badge badge-accent">Caching</span>
                                <span className="badge badge-accent">CDN</span>
                                <span className="badge badge-accent">Lazy Loading</span>
                                <span className="badge badge-accent">Code Splitting</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-info">
                            <h3 className="mb-4 flex items-center gap-3 text-neutral">
                                <FontAwesomeIcon icon={faEnvelope} className="text-info" />
                                Integration & Deployment
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Seamless integration and deployment solutions that keep your applications running smoothly.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-info">CI/CD</span>
                                <span className="badge badge-info">Docker</span>
                                <span className="badge badge-info">Azure</span>
                                <span className="badge badge-info">AWS</span>
                                <span className="badge badge-info">Google Cloud</span>
                                <span className="badge badge-info">DigitalOcean</span>
                                <span className="badge badge-info">Heroku</span>
                                <span className="badge badge-info">GitHub</span>
                                <span className="badge badge-info">Vercel</span>
                                <span className="badge badge-info">Terraform</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                            Let&apos;s Discuss Your Project
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container max-w-6xl text-neutral">
                    <h2 className="text-center">My Services</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        <div className="card bg-base-100 border-4 border-primary shadow-lg">
                            <div className="card-body">
                                <FontAwesomeIcon icon={faCode} className="text-primary text-4xl mb-4" />
                                <h3 className="text-neutral text-center">Web Development</h3>
                                <p>Custom web applications built with modern technologies like React, Next.js, Vue.js, and .Net. Full-stack solutions that scale with your business.</p>
                                <ul className="list-disc list-inside text-lg">
                                    <li>Custom Web Applications</li>
                                    <li>E-commerce Solutions</li>
                                    <li>Content Management Systems</li>
                                    <li>Progressive Web Apps</li>
                                    <li>API Development</li>
                                    <li>Performance Optimization</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card bg-base-100 border-4 border-accent shadow-lg">
                            <div className="card-body">
                                <FontAwesomeIcon icon={faRocket} className="text-accent text-4xl mb-4" />
                                <h3 className="text-neutral text-center">Digital Strategy</h3>
                                <p>Comprehensive digital strategies to help your business grow and succeed in the modern marketplace.</p>
                                <ul className="list-disc list-inside text-lg">
                                    <li>Brand Development</li>
                                    <li>Market Analysis</li>
                                    <li>Growth Planning</li>
                                    <li>Competitive Positioning</li>
                                    <li>Customer Engagement</li>
                                    <li>Marketing Automation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card bg-base-100 border-4 border-secondary shadow-lg">
                            <div className="card-body">
                                <FontAwesomeIcon icon={faChartLine} className="text-secondary text-4xl mb-4" />
                                <h3 className="text-neutral text-center">Business Optimization</h3>
                                <p>Streamline your operations and improve efficiency with custom automation solutions.</p>
                                <ul className="list-disc list-inside text-lg">
                                    <li>Process Automation</li>
                                    <li>Workflow Optimization</li>
                                    <li>System Integration</li>
                                    <li>Performance Analytics</li>
                                    <li>Cost Reduction</li>
                                    <li>Resource Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-base py-16">
                <div className="container max-w-6xl">
                    <h2 className="font-coiny text-center text-neutral-500 pb-8">Why Choose Me?</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="text-2xl font-bold text-neutral">Expertise & Experience</h3>
                                <p className="text-neutral-500">
                                    With years of experience across various industries, I bring a wealth of knowledge and expertise to every project. My diverse background allows me to approach challenges from multiple perspectives and deliver innovative solutions.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="font-bold text-neutral">Custom Solutions</h3>
                                <p className="text-neutral-500">
                                    Every business is unique, and I believe in creating tailored solutions that address your specific needs. I work closely with you to understand your goals and develop strategies that align with your vision.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="font-bold text-neutral">Innovation & Technology</h3>
                                <p className="text-neutral-500">
                                    I stay at the forefront of technological advancements and industry trends, ensuring that your solutions are built with the latest and most effective tools and methodologies.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="font-bold text-neutral">Results-Driven Approach</h3>
                                <p className="text-neutral-500">
                                    My focus is always on delivering measurable results that drive your business forward. I combine technical expertise with business acumen to ensure your investments yield tangible returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-16">
                <div className="container max-w-6xl">
                    <div className="card bg-white border-4 border-primary shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="font-coiny text-neutral-500">Ready to Get Started?</h2>
                            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                                Let&apos;s discuss how I can help transform your business with innovative technology solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
