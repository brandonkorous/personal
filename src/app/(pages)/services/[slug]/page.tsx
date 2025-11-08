import Hero from '@/components/hero'
import { notFound } from 'next/navigation'
import { getServiceBySlug, SERVICES } from '@/data/services'
import Link from 'next/link'
import { Metadata } from 'next'

interface RouteParams { slug: string }

export function generateStaticParams() {
    return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return {}
    return {
        title: `${service.title} | Services`,
        description: service.short,
        keywords: service.keywords,
        alternates: {
            canonical: `https://brandonkorous.com/services/${slug}`,
        },
    }
}

export default async function ServiceDetailPage({ params }: { params: Promise<RouteParams> }) {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return notFound()

    return (
        <>
            <Hero topLeftBlobColor='bg-primary/20' bottomRightBlobColor='bg-secondary/20' className='bg-base-200'>
                <div className='max-w-4xl mx-auto flex flex-col gap-8 text-center'>
                    <div className='badge badge-primary badge-lg mx-auto font-bold text-lg py-4 px-6'>{service.title}</div>
                    <h1 className='text-4xl md:text-6xl font-bold text-neutral'>{service.title}</h1>
                    <p className='text-xl text-neutral-500 max-w-3xl mx-auto'>{service.short}</p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link href='/contact' className='btn btn-primary rounded-full'>Start a Conversation</Link>
                        <Link href='/project-intake' className='btn btn-secondary btn-outline rounded-full'>Project Intake</Link>
                    </div>
                </div>
            </Hero>

            <section className='py-16 bg-white'>
                <div className='container max-w-5xl space-y-12'>
                    <div>
                        <h2 className='text-3xl font-bold text-neutral mb-4'>Overview</h2>
                        <p className='text-neutral-600 leading-relaxed'>{service.overview}</p>
                    </div>

                    <div className='grid gap-12 md:grid-cols-2'>
                        <div>
                            <h3 className='text-2xl font-bold text-neutral mb-4'>Key Benefits</h3>
                            <ul className='space-y-3'>
                                {service.benefits.map(b => (
                                    <li key={b} className='flex gap-3 items-start'>
                                        <span className='mt-1 h-3 w-3 rounded-full bg-primary inline-block' />
                                        <span className='text-neutral-600'>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-neutral mb-4'>What’s Included</h3>
                            <ul className='space-y-3'>
                                {service.features.map(f => (
                                    <li key={f} className='flex gap-3 items-start'>
                                        <span className='mt-1 h-3 w-3 rounded-full bg-secondary inline-block' />
                                        <span className='text-neutral-600'>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-neutral mb-6'>How It Works</h3>
                        <div className='grid gap-6 md:grid-cols-5'>
                            {service.process.map(step => (
                                <div key={step.title} className='card bg-base-100 shadow border border-base-300'>
                                    <div className='card-body p-4'>
                                        <h4 className='font-semibold text-neutral'>{step.title}</h4>
                                        <p className='text-sm text-neutral-500'>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='card bg-secondary text-base-100 shadow-xl border-4 border-primary'>
                        <div className='card-body text-center space-y-4'>
                            <h3 className='text-3xl font-bold font-coiny text-neutral-100'>{service.cta || 'Ready to begin?'}</h3>
                            <p className='text-neutral-200 max-w-2xl mx-auto'>Let’s discuss how this service can be tailored to your goals.</p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <Link href='/contact' className='btn btn-primary rounded-full'>Contact</Link>
                                <Link href='/portfolio' className='btn btn-secondary btn-outline rounded-full'>See Results</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
