export interface ServiceDefinition {
    slug: string;
    title: string;
    short: string; // short blurb
    overview: string; // paragraph overview
    benefits: string[];
    features: string[];
    process: { title: string; description: string }[];
    cta?: string;
    keywords: string[];
}

// Central source of truth for all service pages (footer links reference these slugs)
export const SERVICES: ServiceDefinition[] = [
    {
        slug: 'web-development',
        title: 'Web Development',
        short: 'Custom, scalable web applications built with modern frameworks that grow with your business.',
        overview:
            'I build fast, secure, and maintainable web applications using modern frameworks like React, Next.js, and .NET. Whether you need a greenfield product, to modernize legacy systems, or to accelerate delivery with best practices, I bring full‑stack expertise from architecture through deployment.',
        benefits: [
            'Performance-focused (Core Web Vitals and Lighthouse best practices)',
            'Scalable architectures (monolith → modular → micro as you grow)',
            'Clean, testable, maintainable codebases',
            'Developer experience optimizations that reduce long‑term cost',
            'Built-in SEO, accessibility, and security considerations',
        ],
        features: [
            'Full‑stack application development',
            'API & integration layers (REST, GraphQL)',
            'Authentication & authorization',
            'Component libraries & design systems',
            'Performance + observability tooling',
            'Automated testing (unit, integration, e2e)',
        ],
        process: [
            { title: 'Discovery', description: 'Clarify objectives, users, constraints, success metrics.' },
            { title: 'Architecture', description: 'Select stack, define boundaries, establish patterns.' },
            { title: 'Build', description: 'Iterative delivery with tight feedback loops & demos.' },
            { title: 'Stabilize', description: 'Testing, hardening, performance passes.' },
            { title: 'Launch & Support', description: 'Deployment, monitoring, knowledge transfer.' },
        ],
        cta: 'Ready to ship something people love?',
        keywords: ['web development', 'full stack', 'react', 'next.js', 'api design'],
    },
    {
        slug: 'web-design',
        title: 'Web Design',
        short: 'High-converting, accessible designs that blend aesthetics with usability and brand clarity.',
        overview:
            'Great design is more than pixels—it is how clearly a user can achieve their goal while feeling trust in your brand. I craft design systems and page experiences that are both beautiful and purposeful, optimized for conversion and accessibility.',
        benefits: [
            'User-centered, research-informed approach',
            'Accessible color, contrast & semantic structure',
            'Responsive & mobile-first thinking baked in',
            'Design systems that scale—tokens, components, guidelines',
            'Optimized for conversions (CTA clarity, scroll psychology)',
        ],
        features: [
            'Wireframes & interactive prototypes',
            'High-fidelity UI/UX design',
            'Design systems & component libraries',
            'Brand alignment & visual identity support',
            'Interaction & micro‑animation recommendations',
            'Accessibility reviews (WCAG-informed)',
        ],
        process: [
            { title: 'Research', description: 'Audience, competitors, brand assets, analytics baselines.' },
            { title: 'Information Architecture', description: 'Site map, navigation & content hierarchy.' },
            { title: 'Wireframes', description: 'Low-fidelity flows to validate structure early.' },
            { title: 'Visual Design', description: 'High‑fidelity comps + interaction intent.' },
            { title: 'Handoff / Build', description: 'Token export + dev collaboration for fidelity.' },
        ],
        cta: 'Want a site that looks great and converts?',
        keywords: ['web design', 'ux', 'ui', 'design system', 'accessibility'],
    },
    {
        slug: 'innovation-modernization',
        title: 'Innovation & Modernization',
        short: 'Transform legacy systems, reduce technical debt, and adopt architectures that unlock velocity.',
        overview:
            'Legacy drag slows delivery, hiring, and feature quality. I help you assess current state, prioritize modernization, and implement future‑proof patterns—modular architectures, cloud adoption, refactors, or strategic rebuilds—with measurable ROI.',
        benefits: [
            'Reduce maintenance & defect costs',
            'Improve developer onboarding & productivity',
            'Enhance performance & reliability SLAs',
            'Strategic roadmap aligned with business outcomes',
            'Gradual migration plans to minimize disruption',
        ],
        features: [
            'Architecture & codebase audits',
            'Technical debt mapping & scoring',
            'Cloud & container migration strategies',
            'Refactor & strangler pattern implementations',
            'Observability & SLO/SLA alignment',
            'Readiness coaching & enablement',
        ],
        process: [
            { title: 'Assessment', description: 'Deep-dive audit: code, infra, workflow, metrics.' },
            { title: 'Roadmap', description: 'Prioritized sequencing w/ business justification.' },
            { title: 'Pilot', description: 'Prove value with a contained modernization slice.' },
            { title: 'Scale', description: 'Roll out patterns & tooling across teams.' },
            { title: 'Evolve', description: 'Continuous improvement loop & KPI tracking.' },
        ],
        cta: 'Let’s remove the drag from your delivery.',
        keywords: ['modernization', 'architecture', 'legacy migration', 'cloud', 'technical debt'],
    },
    {
        slug: 'automation',
        title: 'Automation',
        short: 'Streamline workflows and eliminate repetitive tasks with intelligent automation.',
        overview:
            'Manual, repetitive processes waste time and introduce risk. I design and implement automation solutions—scripts, RPA-style flows, API orchestrations, and AI-assisted tooling—that let humans focus on higher‑value work.',
        benefits: [
            'Reduce operational cost & error rates',
            'Shorten cycle times & handoff delays',
            'Improve data consistency & auditability',
            'Increase employee satisfaction & focus',
            'Scalable automation patterns & governance',
        ],
        features: [
            'Workflow analysis & automation mapping',
            'Custom scripts & service integrations',
            'API orchestration & event-driven pipelines',
            'Dashboarding & monitoring',
            'Documentation & runbooks',
            'Governance & access controls',
        ],
        process: [
            { title: 'Identify', description: 'Target high-friction, high-volume candidates.' },
            { title: 'Design', description: 'Map flows, define triggers, human/auto boundaries.' },
            { title: 'Implement', description: 'Build reliable, observable automations.' },
            { title: 'Measure', description: 'Track cycle time, error reduction, ROI.' },
            { title: 'Scale', description: 'Template + extend to adjacent processes.' },
        ],
        cta: 'Ready to reclaim hours each week?',
        keywords: ['automation', 'workflow', 'rpa', 'integration', 'process improvement'],
    },
    {
        slug: 'consulting',
        title: 'Consulting',
        short: 'Embedded technical & strategic partnership to accelerate clarity and execution.',
        overview:
            'From early product direction to scaling engineering operations, I provide hands‑on guidance that blends technology depth with pragmatic business thinking—helping you make faster, better-aligned decisions.',
        benefits: [
            'Objective technical guidance',
            'Faster decision cycles',
            'Alignment across stakeholders',
            'Risk identification & mitigation',
            'Strategic hiring & capability planning',
        ],
        features: [
            'Architecture & product strategy sessions',
            'Technical due diligence',
            'Team process & workflow optimization',
            'Hiring & skill gap assessment',
            'Tooling & platform recommendations',
            'Executive-ready technical briefs',
        ],
        process: [
            { title: 'Intake', description: 'Context gathering & objective definition.' },
            { title: 'Assessment', description: 'Stakeholder interviews & artifact review.' },
            { title: 'Recommendations', description: 'Actionable strategy & prioritized plan.' },
            { title: 'Enablement', description: 'Support implementation & course corrections.' },
            { title: 'Review', description: 'Measure outcomes & next-step refinement.' },
        ],
        cta: 'Need a trusted technical partner?',
        keywords: ['consulting', 'technical strategy', 'due diligence', 'engineering leadership'],
    },
    {
        slug: 'training',
        title: 'Training',
        short: 'Upskill teams with targeted workshops, coaching, and practical enablement.',
        overview:
            'I deliver workshops and hands‑on sessions that accelerate capability building—covering modern web stacks, performance, architecture, developer experience, and process excellence—tailored to your team’s current maturity.',
        benefits: [
            'Accelerated skill adoption',
            'Reduced knowledge silos',
            'Higher code quality & consistency',
            'Improved retention & engagement',
            'Practical, real-project examples',
        ],
        features: [
            'Custom curriculum design',
            'Live workshops & labs',
            'Office hours & coaching',
            'Codebase walkthroughs',
            'Best practice playbooks',
            'Follow-up assessments',
        ],
        process: [
            { title: 'Gap Analysis', description: 'Assess skills & define measurable outcomes.' },
            { title: 'Curriculum', description: 'Tailored modules & sequencing.' },
            { title: 'Delivery', description: 'Interactive sessions + labs.' },
            { title: 'Reinforcement', description: 'Resources, Q&A, follow-ups.' },
            { title: 'Evaluation', description: 'Skill adoption metrics & iteration.' },
        ],
        cta: 'Invest in your team’s growth.',
        keywords: ['training', 'workshops', 'developer enablement', 'education'],
    },
    {
        slug: 'brand-strategy',
        title: 'Brand Strategy',
        short: 'Clarify your brand story, positioning, and messaging to create lasting market impact.',
        overview:
            'A strong brand aligns promise, perception, and performance. I help define positioning, audience messaging, differentiation, and narrative frameworks that inform design, content, and go‑to‑market motion.',
        benefits: [
            'Clear market differentiation',
            'Consistent messaging across channels',
            'Improved audience resonance & trust',
            'Strategic content direction',
            'Foundation for scalable marketing & sales enablement',
        ],
        features: [
            'Positioning & value proposition development',
            'Audience & persona refinement',
            'Messaging hierarchy & narrative',
            'Competitive landscape analysis',
            'Brand voice & tone guidelines',
            'Content & campaign alignment',
        ],
        process: [
            { title: 'Discovery', description: 'Current brand audit & stakeholder inputs.' },
            { title: 'Positioning', description: 'Define differentiation & core narrative.' },
            { title: 'Messaging', description: 'Layer audience-specific value communication.' },
            { title: 'Guidelines', description: 'Voice, tone, usage & activation playbook.' },
            { title: 'Activation', description: 'Support rollout & refinement loops.' },
        ],
        cta: 'Ready to sharpen your brand?',
        keywords: ['brand strategy', 'positioning', 'messaging', 'differentiation'],
    },
]

export const getServiceBySlug = (slug: string) => SERVICES.find(s => s.slug === slug)
