import Hero from '@/components/hero';
import { faArrowRight, faEnvelope, faFaceThinking, faFilter } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import { CATEGORIES, PROJECTS } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import Testimonial from '@/components/testimonial';

export const metadata: Metadata = {
    title: 'Portfolio | Your Name',
    description: 'A showcase of my projects and work experience.',
};

export default function Portfolio() {
    return (

        <>
            <main className="flex-1">
                <Hero bottomLeftBlobColor="bg-secondary/20" bottomRightBlobColor="bg-primary/20" className="">
                    <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                        <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                            <div className="badge badge-xl bg-white text-secondary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                                <FontAwesomeIcon icon={faFaceThinking} size="lg" />
                                Portfolio
                            </div>
                            <h1 className="py-0 mb-0">
                                Who is <span className="text-primary">Brandon Korous</span>?
                            </h1>
                            <div className="text-2xl">
                                Explore a selection of my recent projects showcasing my technical expertise, innovation, modernization, and automation solutions.
                            </div>
                        </div>
                    </div>
                </Hero>

                <section className="py-8 bg-white border-y border-gray-200">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="flex items-center text-[#502314] font-medium mr-2">
                                <FontAwesomeIcon icon={faFilter} className='me-2' />
                                Filter:
                            </span>
                            {CATEGORIES.map((category) => (
                                <a
                                    key={category.slug}
                                    href={`/portfolio/category/${category.slug}`}
                                    className={`btn rounded-full ${category.slug === "all"
                                        ? "btn-primary"
                                        : "btn-secondary btn-outline"
                                        }`}
                                >
                                    {category.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container text-neutral">
                        <h2 className="mb-8">Featured Project</h2>

                        {PROJECTS.filter(project => project.featured).map((project) => (
                            <article
                                key={project.id}
                                className="grid md:grid-cols-2 gap-8 items-center"
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={700}
                                        height={500}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute top-4 left-4">
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="badge badge-accent font-bold">
                                        {project.category}
                                    </div>
                                    <div className="badge badge-warning ml-2">sample</div>
                                    <h3 className="mt-4">{project.title}</h3>
                                    <p className="mb-4">{project.description}</p>
                                    <Link
                                        href={`/portfolio/${project.slug}`}
                                        className="text-primary font-medium"
                                    >
                                        View Project
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-base">
                    <div className="container">
                        <h2 className="text-neutral mb-8">Recent Projects</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PROJECTS.filter(project => !project.featured).map((project) => (
                                <article
                                    key={project.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="badge badge-white">
                                                {project.category}
                                            </span>
                                            <div className="badge badge-warning ml-2">sample</div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-neutral mb-2">{project.title}</h3>
                                        <p className="text-neutral mb-4">{project.description}</p>
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="inline-flex items-center text-primary font-medium hover:underline"
                                        >
                                            View Project
                                            <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <a className="btn btn-secondary btn-lg rounded-full" href="/portfolio">
                                Load More Projects
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container">
                        <h2 className="text-neutral mb-12 text-center">
                            Client Testimonials
                        </h2>
                        <div className="flex flex-col md:flex-row gap-x-20 gap-y-10">
                            <Testimonial name="Michael Chen" initials="MC" position="CTO, Enterprise Solutions Inc." statement="Brandon's approach to modernizing our legacy systems was exceptional. He not only understood our technical challenges but also helped us implement automation solutions that dramatically improved our efficiency." />
                            <Testimonial name="Sarah Johnson" initials="SJ" position="VP of Digital, TechStart" statement="Working with Brandon on our automation initiative was a game-changer. His technical expertise combined with his innovative thinking helped us eliminate repetitive tasks and focus on strategic initiatives. We've seen a 40% increase in productivity since launch." />
                        </div>
                    </div>
                </section>
                <section className="bg-primary py-16 text-neutral">
                    <div className='container'>
                        <div className="card card-border max-w-6xl mx-auto border-primary-300 bg-white items-center">
                            <div className="text-center mt-16">
                                <h2 className="font-coiny">Ready to Start Your Project?</h2>
                                <p className="max-w-2xl mx-auto text-xl">
                                    Let&apos;s work together to create innovative solutions that help your business thrive in the digital age.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center space-x-4 mb-16">
                                <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    Contact Me
                                </Link>
                                <Link href="/services" className="btn btn-secondary btn-lg btn-outline rounded-full">
                                    View Services
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
