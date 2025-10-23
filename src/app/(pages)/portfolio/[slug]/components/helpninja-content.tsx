import { Reveal } from '@/components/animation/reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faBrain,
    faArrowUpRightFromSquare,
    faChartLine,
    faPalette,
    faPlug,
    faBolt,
    faShieldCheck,
    faClock,
    faUsers
} from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';

export function HelpNinjaContent() {
    const features = [
        {
            icon: faBrain,
            title: 'AI Chat Support',
            description: 'Deploy intelligent conversations that understand your business context and customer needs. 80% faster response times with human-quality interactions.',
        },
        {
            icon: faArrowUpRightFromSquare,
            title: 'Smart Escalations',
            description: 'Seamlessly route complex issues to human experts with full conversation context. Zero missed priority tickets.',
        },
        {
            icon: faChartLine,
            title: 'Analytics Dashboard',
            description: 'Real-time insights into support performance, customer satisfaction, and team efficiency. Complete visibility into every interaction.',
        },
        {
            icon: faPalette,
            title: 'White-Label Ready',
            description: 'Customize every aspect of the experience to match your brand perfectly. 100% customizable interface and branding.',
        },
        {
            icon: faPlug,
            title: 'Easy Integrations',
            description: 'Connect with Slack, Zendesk, and 50+ other tools your team already uses. Seamless workflow integration.',
        },
        {
            icon: faBolt,
            title: 'Quick Setup',
            description: 'From signup to production-ready AI support in under 15 minutes. No complex setup or developer resources needed.',
        },
    ];

    const metrics = [
        { icon: faShieldCheck, value: '98%', label: 'Resolution Rate', description: 'Issues resolved on first contact' },
        { icon: faUsers, value: '10k+', label: 'Happy Teams', description: 'Growing every day' },
        { icon: faClock, value: '< 30s', label: 'Response Time', description: 'Average first response' },
        { icon: faChartLine, value: '4.9/5', label: 'Customer Rating', description: 'Based on 2,500+ reviews' },
    ];

    const techStack = [
        { name: 'Next.js 14 App Router', description: 'Server components and streaming for optimal performance' },
        { name: 'TypeScript', description: 'End-to-end type safety across the entire platform' },
        { name: 'Edge Functions', description: 'Global distribution for sub-30ms response times' },
        { name: 'AI/LLM Integration', description: 'Advanced language models for human-quality responses' },
        { name: 'PostgreSQL + Vector Search', description: 'Semantic search across knowledge bases and documentation' },
        { name: 'Real-time WebSockets', description: 'Instant message delivery and live chat capabilities' },
    ];

    return (
        <div className="space-y-16">
            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">The Challenge</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            Customer support teams are drowning in repetitive queries while customers wait hours (or days)
                            for simple answers. Traditional chatbots are frustrating and obviously robotic. Building custom
                            AI support requires months of development and deep technical expertise most teams don&apos;t have.
                        </p>
                        <p>
                            Meanwhile, support costs scale linearly with growth—every new customer means more tickets, more
                            agents, and higher operational overhead. Companies need a solution that delivers human-quality
                            support at machine speed, without the complexity of building it themselves.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">The Solution</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            helpNINJA is an AI-powered customer support platform that reduces resolution time by 80% and
                            achieves 98% first-contact resolution. It understands your business context, learns from your
                            documentation, and delivers human-quality responses instantly.
                        </p>
                        <p>
                            The platform deploys in under 15 minutes with a single line of code. It handles 80% of queries
                            automatically, escalating complex issues to your team with full conversation context. White-label
                            capabilities make it perfect for agencies, and 50+ integrations connect with the tools teams
                            already use. It&apos;s enterprise-grade AI support without the enterprise complexity.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Trusted by Growing Teams</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, index) => (
                            <Reveal key={metric.label} delay={0.05 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <FontAwesomeIcon
                                            icon={metric.icon}
                                            className="text-primary text-xl"
                                        />
                                    </div>
                                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                                    <h3 className="text-lg font-bold text-neutral mb-1">{metric.label}</h3>
                                    <p className="text-sm text-neutral-600">{metric.description}</p>
                                </div>
                            </Reveal>
                        ))}
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
                    <h2 className="text-neutral mb-6">From Setup to Success in Three Simple Steps</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Connect Your Data</h3>
                                <p className="text-neutral-600 mb-2">
                                    Upload docs, link your knowledge base, or connect your website. The AI learns your
                                    business context in minutes.
                                </p>
                                <div className="badge badge-secondary badge-outline">50+ data sources supported</div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Deploy Instantly</h3>
                                <p className="text-neutral-600 mb-2">
                                    Copy one line of code and your AI support is live. No complex setup, no developer
                                    resources needed.
                                </p>
                                <div className="badge badge-secondary badge-outline">&lt; 2 minutes to deploy</div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Watch It Work</h3>
                                <p className="text-neutral-600 mb-2">
                                    AI handles most queries instantly. Complex issues are escalated to your team with
                                    full conversation context.
                                </p>
                                <div className="badge badge-secondary badge-outline">80% automation achieved</div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">Why Teams Prefer helpNINJA</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">
                                <FontAwesomeIcon icon={faRocket} className="text-primary mr-2" />
                                Faster Issue Resolution
                            </h3>
                            <p className="text-neutral-600">
                                AI handles 80% of queries instantly, escalating complex issues with full context to your team.
                                Average resolution time drops from hours to seconds.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">
                                <FontAwesomeIcon icon={faUsers} className="text-primary mr-2" />
                                Scale Your Team Efficiently
                            </h3>
                            <p className="text-neutral-600">
                                Handle 10x more support requests without proportionally growing your team size. Support costs
                                grow sublinearly with customer base.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">
                                <FontAwesomeIcon icon={faBolt} className="text-primary mr-2" />
                                Deploy in Minutes
                            </h3>
                            <p className="text-neutral-600">
                                No complex setup required. Get enterprise-grade AI support running in under 15 minutes with a
                                single line of code.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">
                                <FontAwesomeIcon icon={faClock} className="text-primary mr-2" />
                                24/7 Availability
                            </h3>
                            <p className="text-neutral-600">
                                AI support never sleeps. Provide instant responses to customers around the globe, any time
                                of day or night.
                            </p>
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

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">The Result</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            helpNINJA has transformed customer support for 10,000+ teams worldwide. Companies report 80%
                            faster resolution times, 98% first-contact resolution rates, and dramatic reductions in support
                            costs. Customer satisfaction scores consistently improve as response times drop from hours to
                            seconds.
                        </p>
                        <p className="mb-0">
                            The platform&apos;s white-label capabilities have made it particularly popular with agencies who
                            can offer AI support as their own branded service. With 50+ integrations and enterprise-grade
                            security, helpNINJA scales from startups to Fortune 500 companies—all with the same 15-minute
                            setup process.
                        </p>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
