import { Reveal } from '@/components/animation/reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMicrophone,
    faChartLine,
    faProjectDiagram,
    faDollarSign,
    faTruckMoving,
    faUsers,
    faShieldCheck,
    faClock,
    faInfinity,
    faHeadset,
    faBolt,
    faCheckCircle
} from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';

export function JobSightContent() {
    const features = [
        {
            icon: faMicrophone,
            title: '95% Accurate AI Voice Processing',
            description: 'Transform unstructured voice notes into detailed, actionable daily logs with enterprise-grade precision. AI understands construction terminology and automatically extracts equipment usage, crew assignments, materials, and safety notes.',
            highlight: '95% accuracy rate',
        },
        {
            icon: faChartLine,
            title: 'Executive-Level Dashboard & Analytics',
            description: 'Get instant visibility into business performance with role-based dashboards providing live KPIs, financial analytics, and project health scores. Track crew productivity to equipment utilization with enterprise BI.',
            highlight: 'Real-time insights',
        },
        {
            icon: faProjectDiagram,
            title: 'Advanced Project Management',
            description: 'Professional construction project management with critical path analysis, weather integration, and real-time budget tracking. Manage complex projects with milestone dependencies and resource optimization.',
            highlight: 'Critical path analysis',
        },
        {
            icon: faDollarSign,
            title: 'Enterprise Financial Workflows',
            description: 'Comprehensive financial management with AI-powered invoice generation, multi-level approval workflows, and complex billing rules. Transform daily logs into professional invoices automatically.',
            highlight: '40% faster payments',
        },
        {
            icon: faTruckMoving,
            title: 'Complete Equipment Management',
            description: 'Enterprise asset management with QR code tracking, GPS monitoring, predictive maintenance scheduling, and financial analytics. Know exactly where every piece of equipment is.',
            highlight: 'Full lifecycle tracking',
        },
        {
            icon: faUsers,
            title: 'Advanced Team Coordination',
            description: 'Complete workforce management with advanced scheduling, real-time notifications, performance analytics, and integrated billing rates. Keep your entire team connected and productive.',
            highlight: 'Enterprise scheduling',
        },
    ];

    const metrics = [
        { icon: faMicrophone, value: '95%', label: 'AI Voice Accuracy', description: 'Construction terminology processing' },
        { icon: faCheckCircle, value: '10+', label: 'Tools Replaced', description: 'One integrated platform' },
        { icon: faBolt, value: '40%', label: 'Faster Payments', description: 'Automated workflows' },
        { icon: faClock, value: '99.9%', label: 'Uptime Reliability', description: 'Enterprise-grade infrastructure' },
    ];

    const enterpriseFeatures = [
        {
            icon: faShieldCheck,
            title: 'Bank-Level Security',
            description: 'Enterprise-grade security with role-based access control, audit trails, and compliance tracking.',
        },
        {
            icon: faClock,
            title: '99.9% Uptime',
            description: 'Enterprise reliability with real-time synchronization and intelligent conflict resolution.',
        },
        {
            icon: faInfinity,
            title: 'Unlimited Scalability',
            description: 'Scale from 10 to 10,000 users with enterprise architecture designed for growth.',
        },
        {
            icon: faHeadset,
            title: 'Professional Support',
            description: 'Dedicated account management and 24/7 enterprise support for mission-critical operations.',
        },
    ];

    const techStack = [
        { name: 'Next.js & React', description: 'Modern web framework with server-side rendering for optimal performance' },
        { name: 'AI/LLM Integration', description: '95% accurate voice processing with construction-specific training' },
        { name: 'Real-time Sync Engine', description: 'Conflict resolution and offline-first mobile architecture' },
        { name: 'Enterprise Analytics', description: 'Business intelligence with predictive analytics and KPI tracking' },
        { name: 'Cloud Infrastructure', description: '99.9% uptime with auto-scaling and disaster recovery' },
        { name: 'Mobile-First Design', description: 'Native-quality PWA for iOS and Android field teams' },
    ];

    return (
        <div className="space-y-16">
            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">The Challenge</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            Construction companies are drowning in paperwork and juggling 10+ disconnected software tools—
                            project management, time tracking, equipment logs, invoicing, scheduling, and more. Field teams
                            waste hours on redundant data entry while office staff struggle to get accurate, real-time
                            information about what&apos;s happening on job sites.
                        </p>
                        <p>
                            Traditional construction management software is either too simple (glorified spreadsheets) or too
                            complex (enterprise systems requiring months of training). Companies need enterprise-grade
                            capabilities without enterprise complexity—a platform that construction teams can actually use
                            while delivering the insights executives need to run their business profitably.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">The Solution</h2>
                    <div className="prose prose-lg max-w-none text-neutral-600">
                        <p>
                            JobSight Pro is an enterprise-grade construction management platform that replaces 10+ tools with
                            one integrated solution. It features 95% accurate AI voice processing that transforms jobsite
                            voice notes into structured daily logs automatically, comprehensive project management with
                            critical path analysis, and automated financial workflows that turn daily logs into invoices.
                        </p>
                        <p>
                            The platform provides real-time business intelligence dashboards, complete equipment lifecycle
                            management, and advanced workforce coordination—all with bank-level security and 99.9% uptime.
                            Professional construction companies see ROI within 30 days and save $50,000+ annually by
                            eliminating redundant tools and automating administrative workflows. It&apos;s enterprise-grade
                            capabilities with professional usability.
                        </p>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Trusted by Professional Construction Companies</h2>
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
                    <h2 className="text-neutral mb-8">AI-Enhanced Construction Management Platform</h2>
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
                                    <p className="text-neutral-600 mb-3">{feature.description}</p>
                                    <div className="badge badge-secondary badge-outline">{feature.highlight}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-6">From Setup to Success in Three Steps</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Connect Your Data</h3>
                                <p className="text-neutral-600 mb-2">
                                    Import existing projects, add your team members, and set up your company structure.
                                    The platform adapts to your workflows, not the other way around.
                                </p>
                                <div className="badge badge-secondary badge-outline">Quick onboarding process</div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Deploy to Your Team</h3>
                                <p className="text-neutral-600 mb-2">
                                    Field teams get mobile-first apps that work offline. Office staff get powerful web
                                    dashboards. Everyone gets real-time visibility into projects, budgets, and performance.
                                </p>
                                <div className="badge badge-secondary badge-outline">Mobile + desktop ready</div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral mb-2">Start Seeing ROI</h3>
                                <p className="text-neutral-600 mb-2">
                                    AI handles daily logging, invoices generate automatically, and executives get real-time
                                    insights. Most companies see ROI within 30 days and save $50,000+ annually.
                                </p>
                                <div className="badge badge-secondary badge-outline">30-day typical ROI</div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                <Reveal>
                    <h2 className="text-neutral mb-6">Why Professional Contractors Choose JobSight Pro</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">Replace 10+ Disconnected Tools</h3>
                            <p className="text-neutral-600 mb-4">
                                Eliminate the chaos of juggling separate systems for project management, time tracking,
                                equipment logs, invoicing, and scheduling. One platform, one login, complete visibility.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Project management with critical path analysis
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    AI-powered daily logs and voice processing
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Automated financial workflows and invoicing
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Equipment and workforce management
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-neutral mb-3">Save 10+ Hours Per Week Per Project</h3>
                            <p className="text-neutral-600 mb-4">
                                AI voice processing saves 80% on daily reporting time. Automated invoice generation cuts
                                billing time by 40%. Real-time dashboards eliminate status meetings.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Voice notes become structured logs instantly
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Invoices generate from daily log data
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Real-time budget and profit tracking
                                </li>
                                <li className="flex items-start text-neutral-600">
                                    <span className="text-primary mr-2">✓</span>
                                    Automated compliance and audit trails
                                </li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section>
                <Reveal>
                    <h2 className="text-neutral mb-8">Enterprise-Grade Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {enterpriseFeatures.map((feature, index) => (
                            <Reveal key={feature.title} delay={0.05 * index} className="block">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FontAwesomeIcon
                                                icon={feature.icon}
                                                className="text-primary text-xl"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-neutral mb-2">{feature.title}</h3>
                                            <p className="text-neutral-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
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
                            JobSight Pro serves 5,000+ professional construction companies managing billions of dollars in
                            projects. Companies typically see ROI within 30 days and report saving $50,000+ annually in
                            operational costs by eliminating redundant tools and automating administrative workflows.
                        </p>
                        <p>
                            The 95% accurate AI voice processing has transformed how field teams document work—what used to
                            take 2 hours now takes 15 minutes. Automated financial workflows mean invoices go out 40% faster,
                            improving cash flow. Real-time business intelligence dashboards give executives visibility they
                            never had before.
                        </p>
                        <p className="mb-0">
                            From $15M contractors to $50M+ enterprises, construction companies trust JobSight Pro&apos;s
                            bank-level security, 99.9% uptime, and professional support to manage their most critical
                            business operations. It&apos;s enterprise-grade construction intelligence that scales with your
                            business.
                        </p>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
