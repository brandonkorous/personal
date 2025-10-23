import { Reveal } from '@/components/animation/reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullseye,
    faEye,
    faHandshake,
    faHardHat,
    faBrain,
    faHeadset,
    faRocket
} from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import Link from 'next/link';
import Image from 'next/image';

export function JobSightTechnologiesContent() {
    const coreValues = [
        {
            icon: faBullseye,
            title: 'Our Mission',
            description: 'To empower construction companies and project teams with innovative technology solutions that streamline operations, enhance project delivery, and drive sustainable growth in the construction industry.',
        },
        {
            icon: faEye,
            title: 'Our Vision',
            description: 'To be the leading provider of construction management and project workflow solutions, setting new standards for innovation, efficiency, and project success in the construction industry.',
        },
        {
            icon: faHandshake,
            title: 'Our Values',
            description: 'Innovation, reliability, and project success drive everything we do. We believe in building lasting partnerships with construction professionals through exceptional tools and dedicated support.',
        },
    ];

    const whyChoose = [
        {
            icon: faHardHat,
            title: 'Construction Industry Expertise',
            description: 'Deep understanding of construction workflows and project management needs. We speak your language and understand your challenges.',
        },
        {
            icon: faBrain,
            title: 'AI-Powered Innovation',
            description: 'Advanced AI voice processing and intelligent project management tools that actually work in the field.',
        },
        {
            icon: faHeadset,
            title: 'Dedicated Construction Support',
            description: '24/7 support from experts who understand construction challenges and can help you succeed.',
        },
    ];

    const products = [
        {
            name: 'JobSight',
            tagline: 'AI-enhanced construction management platform',
            description: 'Transform your construction business with JobSight\'s AI-powered voice processing, automated workflows, and comprehensive project management tools. From 95% accurate daily logs to enterprise-grade financial workflows, designed specifically for professional construction companies.',
            image: '/images/portfolio/jobsight-home.png',
            features: ['AI Voice Processing', 'Project Management', 'Financial Workflows', 'Construction CRM'],
            url: 'https://jobsight.co',
            slug: 'jobsight-construction-platform',
        },
        {
            name: 'helpNINJA',
            tagline: 'Powerful AI made effortless for customer support',
            description: 'Deploy human-quality AI support in 15 minutes. Cut resolution time by 80% with advanced AI chat widgets, intelligent escalation engine, comprehensive analytics, and full white-label solution. Trusted by 1000+ support teams worldwide.',
            image: '/images/portfolio/helpninja-home.png',
            features: ['AI Chat Widget', 'Smart Escalation', 'Analytics Dashboard', 'Multi-Site Support'],
            url: 'https://helpninja.ai',
            slug: 'helpninja-ai-support-platform',
        },
        {
            name: 'Stumbleable',
            tagline: 'One click. Boundless wonder.',
            description: 'Break free from the algorithm. Discover amazing content you never knew you needed with intelligent content discovery, wildness control, instant reactions, and pure serendipity. No infinite scroll, just quality human-curated discoveries.',
            image: '/images/portfolio/stumbleable-home.png',
            features: ['Smart Discovery', 'Wildness Control', 'Instant Reactions', 'Personal Library'],
            url: 'https://stumbleable.com',
            slug: 'stumbleable-web-discovery',
        },
    ];

    const metrics = [
        { value: '3', label: 'Innovative Products' },
        { value: '100+', label: 'Businesses Transformed' },
        { value: '99.9%', label: 'Uptime Guarantee' },
    ];

    const techStack = [
        { name: 'Modern Cloud Architecture', description: 'Scalable, reliable infrastructure across all products with 99.9% uptime' },
        { name: 'AI & Machine Learning', description: 'Advanced AI capabilities powering voice processing, content discovery, and support automation' },
        { name: 'Enterprise Security', description: 'SOC 2 Type II compliance with bank-level security across all platforms' },
        { name: 'Mobile-First Design', description: 'Professional mobile experiences for field teams and on-the-go users' },
        { name: 'Integration Ecosystem', description: '50+ integrations and robust APIs for seamless workflow connections' },
        { name: 'Real-Time Collaboration', description: 'Live updates and synchronization across teams and devices' },
    ];

    return (
        <div className="space-y-16">
            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">Pioneering the Future of Business Technology</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            JobSight Technologies is a technology innovation company specializing in creating cutting-edge
                            solutions that transform how businesses operate. While we started with deep construction industry
                            expertise, our portfolio has expanded to address critical business challenges across multiple
                            industries—from construction management to customer support to content discovery.
                        </p>
                        <p>
                            What unites our products is a relentless focus on innovation, user experience, and real-world
                            results. We don&apos;t build software for the sake of technology—we build solutions that solve
                            genuine problems and deliver measurable value from day one.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreValues.map((value) => (
                            <div key={value.title}>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <FontAwesomeIcon
                                        icon={value.icon}
                                        className="text-primary text-xl"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-neutral mb-3">{value.title}</h3>
                                <p className="text-neutral-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Why Choose JobSight Technologies?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {whyChoose.map((reason, index) => (
                            <Reveal key={reason.title} delay={0.05 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <FontAwesomeIcon
                                            icon={reason.icon}
                                            className="text-primary text-xl"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral mb-2">{reason.title}</h3>
                                    <p className="text-neutral-600">{reason.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">Our Product Portfolio</h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-4xl">
                        Discover our specialized solutions designed to transform business operations and deliver
                        measurable results. Each product is built with the same commitment to innovation, reliability,
                        and exceptional user experience.
                    </p>

                    <div className="space-y-12">
                        {products.map((product, index) => (
                            <Reveal key={product.name} delay={0.1 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="relative h-64 md:h-96">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold text-neutral mb-2">{product.name}</h3>
                                            <p className="text-primary font-medium mb-4">{product.tagline}</p>
                                            <p className="text-neutral-600 mb-6">{product.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {product.features.map((feature) => (
                                                    <span key={feature} className="badge badge-outline">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <Link
                                                    href={`/portfolio/${product.slug}`}
                                                    className="btn btn-secondary rounded-full"
                                                >
                                                    Learn More
                                                </Link>
                                                <Link
                                                    href={product.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary rounded-full"
                                                >
                                                    Visit Site
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">By the Numbers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                                <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                                <div className="text-lg text-neutral-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Technology & Innovation</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {techStack.map((tech, index) => (
                            <Reveal key={tech.name} delay={0.05 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-neutral mb-2">{tech.name}</h3>
                                    <p className="text-neutral-600">{tech.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">Building Tomorrow&apos;s Solutions Today</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            We&apos;re continuously innovating and expanding our product portfolio to meet the evolving needs
                            of modern businesses. Each product is built on the foundation of real-world experience, deep
                            technical expertise, and an unwavering commitment to user success.
                        </p>
                        <p>
                            From construction companies managing $50M+ in projects to support teams serving thousands of
                            customers daily to curious minds discovering amazing content—JobSight Technologies products
                            empower people to do their best work.
                        </p>
                        <p className="mb-0">
                            With 99.9% uptime, enterprise-grade security, and dedicated support, we&apos;re not just building
                            software—we&apos;re building long-term partnerships with businesses that demand excellence. Join
                            hundreds of companies already transforming their operations with our specialized solutions.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faRocket} className="text-3xl" />
                        </div>
                        <h2 className="text-white mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Explore our product portfolio and discover how JobSight Technologies can help you streamline
                            operations, enhance productivity, and drive sustainable growth.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact" className="btn btn-white rounded-full">
                                Contact Us
                            </Link>
                            <Link href="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full">
                                View All Products
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
