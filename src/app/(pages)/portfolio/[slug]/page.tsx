import { PROJECTS } from '@/data/portfolio';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faExternalLink } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { Metadata } from 'next';
import { Reveal } from '@/components/animation/reveal';
import { ParallaxSection } from '@/components/animation/parallax-section';
import { StumbleableContent } from './components/stumbleable-content';
import { HelpNinjaContent } from './components/helpninja-content';
import { JobSightContent } from './components/jobsight-content';
import { JobSightTechnologiesContent } from './components/jobsight-technologies-content';

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Portfolio | Brandon Korous`,
        description: project.description,
        alternates: {
            canonical: `https://brandonkorous.com/portfolio/${slug}`,
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
    const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
    const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

    return (
        <main className="flex-1">
            <section className="py-16 bg-white">
                <div className="container">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-primary hover:underline mb-8"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>

                    <Reveal>
                        <div className="flex flex-wrap gap-2 items-center mb-4">
                            <div className="badge badge-accent font-bold">{project.category}</div>
                            {project.featured && <div className="badge badge-primary">Featured</div>}
                        </div>
                        <h1 className="mb-4">{project.title}</h1>
                        <p className="text-xl text-neutral-600 mb-6 max-w-4xl">{project.description}</p>

                        {project.url && (
                            <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary rounded-full mb-8"
                            >
                                Visit Live Site
                                <FontAwesomeIcon icon={faExternalLink} className="ml-2 h-4 w-4" />
                            </Link>
                        )}
                    </Reveal>
                </div>
            </section>

            <ParallaxSection className="py-16 bg-base">
                <div className="container">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Reveal className="block">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-lg font-bold mb-3 text-neutral">My Role</h3>
                                <p className="text-neutral-600">{project.role}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1} className="block">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-lg font-bold mb-3 text-neutral">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack?.map((tech) => (
                                        <span key={tech} className="badge badge-outline">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2} className="block">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-lg font-bold mb-3 text-neutral">Key Metrics</h3>
                                <ul className="space-y-2">
                                    {project.metrics?.map((metric) => (
                                        <li key={metric} className="text-neutral-600 flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            {metric}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </ParallaxSection>

            {project.slug === 'stumbleable-web-discovery' && (
                <section className="py-16 bg-white">
                    <div className="container">
                        <StumbleableContent />
                    </div>
                </section>
            )}

            {project.slug === 'helpninja-ai-support-platform' && (
                <section className="py-16 bg-white">
                    <div className="container">
                        <HelpNinjaContent />
                    </div>
                </section>
            )}

            {project.slug === 'jobsight-construction-platform' && (
                <section className="py-16 bg-white">
                    <div className="container">
                        <JobSightContent />
                    </div>
                </section>
            )}

            {project.slug === 'jobsight-technologies-site' && (
                <section className="py-16 bg-white">
                    <div className="container">
                        <JobSightTechnologiesContent />
                    </div>
                </section>
            )}

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="flex justify-between items-center border-t pt-8">
                        <div>
                            {prevProject && (
                                <Link
                                    href={`/portfolio/${prevProject.slug}`}
                                    className="inline-flex items-center text-primary hover:underline"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
                                    Previous Project
                                </Link>
                            )}
                        </div>
                        <div>
                            {nextProject && (
                                <Link
                                    href={`/portfolio/${nextProject.slug}`}
                                    className="inline-flex items-center text-primary hover:underline"
                                >
                                    Next Project
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
