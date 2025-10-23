import { Reveal } from '@/components/animation/reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faShuffle,
    faHeart,
    faBolt,
    faUsers,
    faShield
} from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';

export function StumbleableContent() {
    const features = [
        {
            icon: faShuffle,
            title: 'Curated Randomness',
            description: 'Quality content from across the web, filtered for relevance and interest. Every click is a new surprise.',
        },
        {
            icon: faLightbulb,
            title: 'Wildness Control',
            description: 'Adjust how adventurous you want to be. From safe to wild, you decide the level of discovery.',
        },
        {
            icon: faBolt,
            title: 'Lightning Fast',
            description: 'Keyboard shortcuts, instant reactions. No friction, just flow. Press space to stumble.',
        },
        {
            icon: faHeart,
            title: 'Save & Organize',
            description: 'Build collections of your favorite discoveries. Access them anytime, anywhere.',
        },
        {
            icon: faUsers,
            title: 'Community Lists',
            description: 'Explore curated trails created by other discoverers. Share your own discoveries.',
        },
        {
            icon: faShield,
            title: 'Safe & Respectful',
            description: 'Community-moderated content. Report anything inappropriate instantly.',
        },
    ];

    const techStack = [
        { name: 'Next.js 14', description: 'App Router with Server Components for optimal performance' },
        { name: 'TypeScript', description: 'Type-safe development across the entire stack' },
        { name: 'Real-time Updates', description: 'Instant reactions and live content discovery' },
        { name: 'Smart Curation', description: 'Algorithm-free content matching based on preferences' },
        { name: 'Tailwind CSS', description: 'Custom design system with DaisyUI components' },
        { name: 'Edge Functions', description: 'Ultra-fast content delivery and API responses' },
    ];

    return (
        <div className="space-y-16">
            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">The Challenge</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            Modern internet browsing has become dominated by algorithmic feeds that keep users trapped in
                            filter bubbles, doom-scrolling through endless content optimized for engagement rather than
                            genuine discovery. The original magic of stumbling upon unexpected, delightful corners of the
                            internet had been lost.
                        </p>
                        <p>
                            I wanted to bring back that sense of serendipity—the joy of discovering something you never
                            knew you were looking for. The challenge was creating a platform that felt spontaneous and
                            exciting while still being fast, intuitive, and safe.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">The Solution</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            Stumbleable is a modern web discovery platform that puts serendipity first. With a single
                            click (or press of the spacebar), users are transported to curated content from across the
                            internet. No algorithms deciding what you should see—just pure, delightful discovery.
                        </p>
                        <p>
                            The platform features instant reactions (like, skip, save), adjustable &ldquo;wildness&rdquo; controls to
                            set how adventurous your discoveries should be, and community-curated lists for exploring
                            themed content trails. Everything is designed for speed: keyboard shortcuts, instant loading,
                            and zero friction between you and the next discovery.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Reveal key={feature.title} delay={0.05 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <FontAwesomeIcon
                                            icon={feature.icon}
                                            className="text-primary text-xl"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral mb-2">{feature.title}</h3>
                                    <p className="text-neutral-600">{feature.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">How It Works</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Click the Button</h3>
                                <p className="text-neutral-600">
                                    One click (or press Space) to get a curated discovery from across the internet.
                                    Simple, instant, delightful.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">React & Refine</h3>
                                <p className="text-neutral-600">
                                    Like, skip, or save. Your reactions help personalize future discoveries without
                                    trapping you in a filter bubble.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Keep Exploring</h3>
                                <p className="text-neutral-600">
                                    No end to the scroll. Every click is a new adventure waiting to happen. Rediscover
                                    the joy of the internet.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Technical Stack</h2>
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

            <section className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">The Result</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            Stumbleable brings back the magic of web discovery. Users report spending meaningful time
                            exploring interesting content rather than mindlessly scrolling. The platform has been featured
                            on Product Hunt and is growing a passionate community of curious minds who want to break free
                            from algorithmic feeds.
                        </p>
                        <p className="mb-0">
                            The combination of instant reactions, keyboard shortcuts, and adjustable wildness controls
                            creates a uniquely engaging experience that feels both nostalgic and modern. It&apos;s proof
                            that the internet can still be a place of genuine discovery and delight.
                        </p>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
