export const PROJECTS = [
    {
        id: 1,
        featured: true,
        title: 'Stumbleable – Modern Web Discovery Platform',
        description: 'Algorithm-free content discovery platform bringing back the joy of internet exploration. One-click serendipity with wildness control, community curation, and instant reactions—rediscover the magic of stumbling upon amazing content.',
        category: 'Consumer Web',
        image: '/images/portfolio/stumbleable-home.png',
        slug: 'stumbleable-web-discovery',
        url: 'https://stumbleable.com',
        metrics: ['One-click discovery', 'Community curation', 'Algorithm-free', 'Lightning fast UX'],
        role: 'Full-stack engineering, product design, community features',
        stack: ['Next.js', 'TypeScript', 'Real-time reactions', 'Content curation', 'Tailwind'],
    },
    {
        id: 2,
        featured: true,
        title: 'helpNINJA – AI Customer Support Platform',
        description: 'AI-powered support platform that reduces resolution time by 80%, achieves 98% first-contact resolution, and enables <15 minute deployment with white‑label capability and 50+ integrations.',
        category: 'AI / SaaS',
        image: '/images/portfolio/helpninja-home.png',
        slug: 'helpninja-ai-support-platform',
        url: 'https://helpninja.ai',
        metrics: ['80% faster resolution', '98% first-contact resolution', '1000+ teams', '<15 min setup'],
        role: 'Architecture, full‑stack engineering, product strategy',
        stack: ['Next.js', 'TypeScript', 'Edge Functions', 'AI/LLM', 'PostgreSQL', 'Vector Search', 'Tailwind'],
    },
    {
        id: 3,
        featured: false,
        title: 'kanNINJA – AI Recruitment & Talent Platform',
        description: 'Intelligent hiring platform delivering AI candidate matching, workflow automation, analytics and collaboration to shrink time‑to‑hire and raise talent quality.',
        category: 'AI / HR Tech',
        image: '/images/portfolio/kanninja-home.png',
        slug: 'kanninja-talent-platform',
        url: 'https://kanninja.com',
        metrics: ['Reduced time-to-hire', 'AI candidate matching', 'Workflow automation'],
        role: 'Technical direction, core platform build, data modeling',
        stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AI Matching', 'Tailwind'],
    },
    {
        id: 4,
        featured: false,
        title: 'JobSight Pro – Construction Intelligence',
        description: 'Enterprise-grade construction management replacing 10+ disparate tools with AI voice logs (95% accuracy), financial automation, BI dashboards & predictive analytics.',
        category: 'Enterprise SaaS',
        image: '/images/portfolio/jobsight-home.png',
        slug: 'jobsight-construction-platform',
        url: 'https://jobsight.co',
        metrics: ['95% AI voice accuracy', '40% faster payments', '10+ tools replaced', '30 day ROI'],
        role: 'Platform modernization, AI integration, performance engineering',
        stack: ['Next.js', 'TypeScript', 'Node.js', 'AI/LLM', 'Analytics', 'Cloud Infrastructure'],
    },
    {
        id: 5,
        featured: false,
        title: 'JobSight Technologies – Multi‑Product Portfolio',
        description: 'Corporate technology umbrella site showcasing product suite (kanNINJA, JobSight) with messaging architecture, product positioning and conversion focused design.',
        category: 'Brand / Platform',
        image: '/images/portfolio/jobsighttech-home.png',
        slug: 'jobsight-technologies-site',
        url: 'https://jobsighttechnologies.com',
        metrics: ['Multi-product messaging', '99.9% uptime positioning', 'Growth-focused IA'],
        role: 'Brand strategy, content architecture, front-end build',
        stack: ['Next.js', 'TypeScript', 'Static Optimization', 'Tailwind'],
    },
    {
        id: 6,
        featured: false,
        title: 'Gillett Diesel Service – E‑commerce Modernization',
        description: 'Modern diesel parts & service ecommerce ecosystem with multi-brand catalog structure, performance enhancements, customer education content and conversion UX.',
        category: 'E-commerce',
        image: '/images/portfolio/gillettdiesel-home.png',
        slug: 'gillett-diesel-modernization',
        url: 'https://gillettdiesel.com',
        metrics: ['Same-day shipping workflows', 'Expanded brand catalog', 'Optimized product discovery'],
        role: 'Architecture guidance, performance tuning, UX improvements',
        stack: ['Shopify', 'Liquid', 'Custom Apps', 'Edge Caching'],
    },
]

export const CATEGORIES = [
    { name: 'All', slug: 'all' },
    { name: 'Consumer Web', slug: 'consumer-web' },
    { name: 'AI / SaaS', slug: 'ai-saas' },
    { name: 'AI / HR Tech', slug: 'ai-hr-tech' },
    { name: 'Enterprise SaaS', slug: 'enterprise-saas' },
    { name: 'Brand / Platform', slug: 'brand-platform' },
    { name: 'E-commerce', slug: 'ecommerce' },
]

export interface Project {
    id: number
    featured: boolean
    title: string
    description: string
    category: string
    image: string
    slug: string
    url?: string
    metrics?: string[]
    role?: string
    stack?: string[]
}

// Helper for runtime usage when needed
export type { Project as ProjectType }