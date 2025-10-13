"use client"
import Logo from "@/components/logo"
import { faLinkedin } from "@awesome.me/kit-654a0ecbfd/icons/classic/brands"
import { faEnvelope, faPhone } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const ResumePage = () => {


    return (
        <main className="bg-white py-6 print:py-0">
            {/* Hero Section */}
            <section className="relative">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl text-neutral pt-2">Brandon Korous</h1>
                            <p className="text-xl text-neutral/80">Technology Leader | Enterprise Architect | Cloud & AI Innovator</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Logo showText={false} showMoto={true} width={80} height={80} />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link href="mailto:me@brandonkorous.com" className="flex items-center text-neutral/80 hover:text-primary">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-secondary" fixedWidth />
                            me@brandonkorous.com
                        </Link>
                        <Link href="tel:+15596233290" className="flex items-center text-neutral/80 hover:text-primary">
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-secondary" fixedWidth />
                            559.623.3290
                        </Link>
                        <Link
                            href="https://linkedin.com/in/brandonkorous"
                            className="flex items-center text-neutral/80 hover:text-primary"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-secondary" fixedWidth />
                            /in/brandonkorous
                        </Link>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Executive Summary</h2>
                        <div className="max-w-none text-neutral/80">
                            <p>
                                Strategic Technology Executive and founder with 15+ years leading enterprise architecture, cloud transformation, DevOps/DevSecOps, and AI. Conceived, built, and shipped multi-tenant SaaS platforms (JobSight.co, HelpNinja.ai) that replace 10+ tools with one AI-enhanced suite, accelerating delivery through lean discovery and weekly release cadence.
                            </p>
                            <p>
                                Deep expertise in AI systems (hybrid RAG, semantic search, guardrails, multilingual), secure-by-design cloud architectures (RBAC, audit trails, RLS), and CI/CD with automated environment promotion and rollback. Delivered enterprise-grade reliability targets (99.9% uptime) with real-time sync, observability, and SLO-driven operations.
                            </p>
                            <p>
                                Proven record aligning technology strategy to business outcomes: 95% AI voice accuracy cutting daily reporting time, 40% faster payments via automated financial workflows, and $45K–$50K+ annual savings through platform consolidation and workflow automation.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Key Strengths & Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Enterprise Architecture & Cloud Transformation</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>DevOps / DevSecOps & CI/CD Automation</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>AI & Intelligent Process Automation</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>AI Systems: Hybrid RAG, Semantic Search, Guardrails</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Cybersecurity & Regulatory Compliance (HIPAA, PCI DSS, DOJ, NYDFS)</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Multi-Tenant SaaS: RBAC, Audit Trails, Row-Level Security</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Business Continuity & Disaster Recovery (RTO/RPO Optimization)</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Cross-Functional Leadership & Talent Development</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Innovation & Change Management</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Integration Marketplace & Two-Way Escalation (Slack/Teams/Email)</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Executive BI & Automated Financial Workflows</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Observability, SLOs & 99.9% Uptime Operations</span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>Vendor & Partner Relationship Management</span>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Career Highlights</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Founded and shipped two multi-tenant SaaS platforms (JobSight.co, helpNINJA.ai) replacing 10+ tools with one suite, enabling $45K–$50K+ annual savings for typical customers.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Achieved 95% AI voice accuracy and hybrid RAG search with confidence scoring and guardrails, cutting daily reporting time by up to 80% and improving first-response automation.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Delivered 99.9% uptime targets with real-time sync and conflict resolution; scaled architecture from 10 to 10,000 users with RBAC, audit trails, and RLS.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Drove 40% faster payments via automated financial workflows (AI invoice generation, multi-level approvals, complex billing) and executive BI for margin/variance tracking.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Launched an integration marketplace with Slack, Microsoft Teams, Email, Discord, and webhooks, featuring visual setup wizards, delivery analytics, and automatic retry.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Accelerated enterprise integration delivery by 40% by transforming the EIS team with Agile
                                    methodologies, DevOps, and CI/CD practices, reducing post-deployment issues by 25%.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Designed and deployed enterprise-wide Business Continuity and Disaster Recovery (BC/DR)
                                    capabilities, reducing recovery time from 48+ hours to under 4 hours.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Led the enterprise adoption of Azure Kubernetes Services (AKS) and Azure API Management (APIM),
                                    increasing deployment frequency by 50%, reducing time-to-market for new features by 30%, and
                                    improving application scalability and resiliency.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Implemented intelligent process automation by integrating Microsoft Teams, Azure OpenAI, and Azure
                                    DevOps, empowering engineering teams with secure self-service pipeline creation, reducing
                                    time-to-market for integrations by 20-30% without service desk dependencies.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Promoted DevSecOps practices across IT engineering teams, eliminating 100% of late-stage security
                                    gating issues and ensuring zero auto findings for systems under my leadership, while fostering a
                                    security-first culture compliant with HIPAA, PCI DSS, NYDFS, and DOJ regulations.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Directed enterprise-wide integration of Salesforce and internal core systems, enhancing customer
                                    experience and expanding business capabilities through streamlined processes and improved data
                                    availability.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Migrated legacy infrastructure and applications from on-premise systems to Azure cloud, supporting
                                    multi-tenant architecture during organizational restructuring, ensuring secure data separation and
                                    regulatory compliance across distinct business units.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                <span>
                                    Established and led a cross-functional Architecture Review Board and Enterprise Hackathons, driving
                                    organizational innovation, continuous improvement, and improving team morale by 30%.
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-6">Professional Experience</h2>

                        {/* JobSight */}
                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Entrepreneurial & Technical Ventures</h5>
                                    <p className="text-lg text-neutral/80">Founder & CEO — JobSight Technologies Inc. — Visalia, CA (Remote)</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    February 2025 – Present
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Company Overview</h5>
                                    <p>
                                        Founded JobSight Technologies Inc.; conceived, designed, and shipped three production-ready SaaS platforms —
                                        <strong> JobSight.co</strong> (construction & field service management), <strong>helpNINJA.ai</strong> (AI support assistant) and <strong>stumbleable.com</strong> (internet discovery) —
                                        operating as a solo founder with an agile, weekly release cadence.
                                    </p>

                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Team Transformation & Agile Delivery</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Established a reusable design system with DaisyUI/TailwindCSS to keep UX consistent across brands and accelerate feature delivery.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Drove lean product discovery and roadmap execution (PRDs, backlog hygiene, tight scoping) to move from prototype → MVP → GA efficiently.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Positioned platform to replace 10+ point solutions with single AI-enhanced suite; built ROI calculator, demo funnels, and case studies to drive conversion.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Framed value metrics used in marketing: 95% AI voice accuracy, 40% faster payments, and $45K–$50K+/yr savings based on typical implementations.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">DevOps, CI/CD & Integration Excellence</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Architected cloud-native, multi-tenant apps on Next.js, TypeScript, and Node.js, containerized and deployed with automated pipelines.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Implemented CI/CD with GitHub Actions (OIDC), environment promotion and rollback strategies; added observability (structured logging/alerts and error tracking).
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Built an AI stack with OpenAI and Claude: RAG (retrieval-augmented generation), semantic search, prompt orchestration, fallback/guardrails, and internal copilot features.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed secure secrets/config practices and standardized operational runbooks for reliable releases.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Delivered enterprise-grade reliability: 99.9% uptime target, real-time sync with conflict resolution, and horizontal scale from 10 to 10,000 users.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Implemented bank-level security controls: RBAC, audit trails, encrypted credentials, and multi-tenant data isolation (RLS); SOC2/HIPAA-ready posture.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Shipped hybrid RAG: OpenAI embeddings + lexical search, confidence scoring, multilingual support, and guardrails with human fallback.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Leadership & Cross-Functional Collaboration</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Led brand, product, and early go-to-market — website content, campaigns, and outreach; user acquisition is in progress as marketing ramps.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Authored key operational docs (Privacy Policy, Terms), configured domains/DNS and email deliverability (DMARC/SPF/DKIM), and set up support/feedback loops.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Defined integration architecture (e.g., Slack/Teams escalation and embeddable web widget) with a two-way messaging pattern planned.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Launched an integration marketplace with visual setup wizards and health monitoring; supported Slack, Teams, Email, Discord, and custom webhooks.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Built ingestion/knowledge pipeline: URLs, sitemaps, PDFs; semantic chunking; automatic embeddings; source citation and deduplication for accuracy.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Delivered analytics suites: executive KPIs and profit margin analysis for JobSight; support KPIs, sentiment, and workload analytics for HelpNinja.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Added enterprise PM and ops features: critical path scheduling, weather-aware timelines, asset lifecycle with QR/GPS, predictive maintenance.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Job 1 */}
                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Enterprise Integration Systems Manager</h5>
                                    <p className="text-lg text-neutral/80">Berkshire Hathaway Homestate Companies – Sacramento, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    August 2023 – February 2025
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Team Transformation & Agile Delivery</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Transformed the Enterprise Integration Services (EIS) team by implementing Agile methodologies
                                                and standardizing development, QA, and deployment practices, accelerating project delivery by
                                                more than 40% and aligning outputs with key business objectives.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed and implemented a new organizational structure, introducing Principal Engineers, Lead
                                                Engineers, and Product Owners across our Claims, Underwriting, Finance, and Analytics
                                                portfolios, resulting in enhanced domain expertise and 60% improvement in operational
                                                efficiency.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Instituted a culture of continuous improvement, launching innovation days, lessons-learned
                                                sessions, and team engagement, resulting in a 60% boost in team morale and 80% increase in
                                                innovation initiatives.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">DevOps, CI/CD & Integration Excellence</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Integrated Agile and DevOps into the EIS processes and workflows, building CI/CD pipelines
                                                that increased deployment frequency by 80% and reduced time to market for new features by 60%.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Implemented an enterprise-wide transaction logging framework for all ETL/ELT processes,
                                                enabling end-to-end data traceability and reducing root cause discovery time by 80%. Improved
                                                development debugging and insights by 60%, contributing to a 20% increase in time-to-market
                                                for key integrations.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Directed a cross-functional team of engineers and architects to design and implement an
                                                enterprise-wide Business Continuity and Disaster Recovery (BC/DR) program, reducing recovery
                                                time from 48+ hours by achieving recovery time objective (RTO) of 4 hours and recovery point
                                                objective (RPO) of 5 minutes.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Leadership & Cross-Functional Collaboration
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Managed a cross-functional team of QA Analysts, Engineers, Product Owners, and Scrum Masters,
                                                optimizing resource allocation and ensuring high-quality integration services across multiple
                                                business units.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Authored, educated, and enforced an enterprise-wide Standardization of Practices, improving
                                                project consistency and cross-team collaboration, leading to: 40% decrease in new project
                                                delivery time, 30% decrease in onboarding time, and a 30% reduction in critical
                                                post-deployment issues.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Served as a trusted advisor and problem-solver across the entire IT organization, providing
                                                strategic and technical leadership to Data Analytics, IT Operations, and Application
                                                Development teams, helping them overcome complex challenges and consistently deliver critical
                                                project on time.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">
                                        Architecture Manager, DevOps Manager, & Platform Engineering Manager
                                    </h5>
                                    <p className="text-lg text-neutral/80">Berkshire Hathaway Homestate Companies – Sacramento, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    February 2021 – August 2023
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Cloud Strategy & Platform Transformation
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed and Led the implementation of a hub-and-spoke cloud architecture with Zero Trust
                                                Security, enabling the secure migration of brownfield and greenfield application to Azure,
                                                creating a nimble, scalable, and resilient platform for enterprise workloads.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Trained and mentored internal teams across our IT organizations in cloud technologies,
                                                accelerating our Azure adoption and increasing cloud proficiency across IT by 80%.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Championed and led the enterprise-wide adoption of Azure Kubernetes Services (AKS), reducing
                                                time-to-market for new products and enhancing platform resiliency and stability.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        DevOps, CI/CD & Security Delivery Acceleration
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Built and led a team of DevOps engineers, implementing Infrastructure as Code (IaC) with
                                                Terraform, Azure CLI, PowerShell, and Azure DevOps (ADO), reducing manual processes by 30% and
                                                repetitive tasks by 80%.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed and Led the implementation of Managed DevOps processes, improving CI/CD visibility,
                                                reducing deployment effort by 90%, and decreasing time from ideation to production from weeks
                                                to minutes.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Promoted DevSecOps practices, embedding security-first principles into pipelines and
                                                accelerating secure deployments.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Observability, Governance & Security</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Spearheaded the enterprise Splunk implementation, enhancing observability and reducing
                                                incident response time, minimizing business impact.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Launched Cloud and Data Governance initiatives, ensuring data integrity, security, and
                                                compliance across all platforms and cloud services.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Evangelized security-first culture across IT teams, fostering security best practices and
                                                reducing cybersecurity risks.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">AI, Data & Analytics Innovation</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Led a senior engineering team in deploying Azure OpenAI and Cognitive Services, gathering
                                                requirements and driving innovative AI solutions.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Managed the automation and integration of Snowflake, ensuring seamless data operations,
                                                improving analytics capabilities, and empowering data-driven decision-making.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Developed intelligent self-service integrations between Microsoft Teams, Azure OpenAI, Azure
                                                Cognitive Services, and Azure DevOps, enabling engineering teams to autonomously create common
                                                repository structures and CI/CD pipelines without service desk intervention – reducing
                                                time-to-market by 20-30% and accelerating development cycles.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Leadership, Talent Development & Cost Optimization
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Collaborated with HR to design strategies that attracted and retained top IT talent, fostering
                                                high-performing teams and improving employee engagement.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Built employee confidence and engagement to new highs, increasing productivity and job
                                                satisfaction across the IT landscape.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Implemented and evangelized Cloud cost optimization strategies, achieving efficient resource
                                                allocation and reducing Cloud spend by 40%.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Advised sister companies within Berkshire Hathaway on Cloud and Platform best practices,
                                                ensuring consistent standards and sharing strategic guidance across business units.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Promoted and mentored cybersecurity best practices across IT engineering teams, eliminating
                                                100% of late-stage security gating issues and fostering a security-first culture that
                                                accelerated cross-functional delivery.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Led secure-by-design initiatives, resulting in zero findings on systems under my guidance
                                                during the annual security audit, while other systems were flagged for risk – demonstrating
                                                effective governance and risk mitigation.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Enterprise Architect</h5>
                                    <p className="text-lg text-neutral/80">Berkshire Hathaway Homestate Companies – Sacramento, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    May 2017 - February 2021
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Legacy Modernization & Application Development
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed and implemented new .Net MVC applications to replace legacy systems (C++, Delphi,
                                                WinForms, XML Web Services), driving the organization&apos;s transition to modern technologies
                                                and improving application maintainability and performance.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Developed a centralized .Net Proxy Gateway to serve as the data and operations backbone for
                                                new applications, promoting standardization and scalability.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Implemented a companywide design and branding system in .Net, Bootstrap, and SCSS,
                                                standardizing UI/UX across all web applications and accelerating development consistency and
                                                efficiency.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Agile Transformation & Delivery Enablement
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Championed the organization&apos;s transformation from Waterfall SDLC to Agile methodologies,
                                                collaborating with product owners, developers, analysts, and QA teams to foster an Agile
                                                mindset focused on incremental delivery and continuous improvement.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Launched the first-ever Architecture &quot;Ask Me Anything&quot; (AMA) series to increase
                                                transparency, awareness, and collaboration between architecture and engineering teams,
                                                demystifying architectural decision-making processes.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Head of Information Technology</h5>
                                    <p className="text-lg text-neutral/80">
                                        Employer Driven Solutions (Formerly BEN-E-LECT) – Visalia, CA
                                    </p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    March 2010 - May 2017
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Infrastructure Modernization & Cloud Transformation
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Led the enterprise-wide modernization of IT infrastructure, migrating from legacy POTS/T1
                                                systems to ShoreTel VoIP solution and fiber connectivity, improving network reliability and
                                                enabling secure, remote connectivity across multiple locations and external agents.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Migrated proprietary applications and infrastructure to Azure, including Active Directory,
                                                SQL Server, and App Services, enabling multi-tenant architecture with strict data separation
                                                and security compliance, supporting the company&apos;s restructuring and separation process.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Security, Compliance & Governance</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Ensured enterprise-wide compliance with HIPAA, PCI DSS, NAIC, FIO, DOJ, and California
                                                DOI/DOL regulations, implementing secure systems and protocols to protect sensitive customer
                                                data and ensure regulatory readiness.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Led security governance initiatives, including role-based access control (RBAC), VPN
                                                enhancements, firewall management, and MFA adoption, reducing the organization&apos;s risk
                                                profile and strengthening cybersecurity posture.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Chief Technology Officer (CTO)</h5>
                                    <p className="text-lg text-neutral/80">GMO Developing – Visalia, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">
                                    February 2009 – February 2010
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Technology Strategy & Leadership</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Co-founded and served as Chief Technology Officer (CTO) for a boutique software development
                                                firm, overseeing technology strategy, solution architecture, and end-to-end delivery of
                                                custom Web, Desktop, and Mobile applications.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Defined technical vision and roadmaps, ensuring alignment with client business goals and
                                                market opportunities, while maintaining high standards for quality, security, and
                                                scalability.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">
                                        Full-Stack Development & Solution Delivery
                                    </h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Directed and developed full-stack solutions using C#, PGP, C++, Objective-C, and JavaScript,
                                                delivering Web, Desktop, and Mobile applications across, Windows, macOS, iOS, and Android
                                                platforms.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                            <span>
                                                Designed and implemented relational database architectures in SQL Server, MySQL, PostgreSQL,
                                                and SQLite, ensuring reliable data management and secure access.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl text-neutral mb-4">Tech Stack</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h5 className="text-lg text-secondary">Cloud Platforms</h5>
                                <p>Azure, AWS, GCP, DigitalOcean, Cloudflare, Salesforce, Snowflake, Linode, Wasabi, HPE GreenLake, Heroku</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">DevOps & CI/CD</h5>
                                <p>Azure DevOps, GitHub Actions (OIDC), Jenkins, Terraform, Docker, Kubernetes, PowerShell, Python, YAML</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Application Development</h5>
                                <p>.Net, C#, JavaScript/TypeScript, Python, WinForms, Next.js, React, Express, Node.js, C++, Java, Objective-C, Swift, GraphQL, REST, SOAP</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Design</h5>
                                <p>Bootstrap, DaisyUI, Tailwind CSS, Material UI, SCSS, Font Awesome, Lucid, Chart.js</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">AI & Automation</h5>
                                <p>OpenAI, Azure OpenAI, Anthropic/Claude, Azure Cognitive Services; RAG pipelines, embeddings, semantic search, prompt orchestration, guardrails; Zapier, n8n, Power Automate, Make</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Security & Compliance</h5>
                                <p>OAuth2, JWT, Zero Trust Architecture, DevSecOps, MFA; RBAC, audit trails, Row-Level Security; SOC 2-ready, HIPAA, PCI DSS, DOJ, NYDFS, CCPA, GDPR</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Data & Analytics</h5>
                                <p>PostgreSQL (pgvector, full-text search), SQL Server, Snowflake, MySQL; SSRS, Power BI, Supabase</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Monitoring & Observability</h5>
                                <p>Splunk, Dynatrace, Grafana, Azure Monitor, Snyk, Sentry, LogRocket, SolarWinds, Microsoft Clarity</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Collaboration Tools</h5>
                                <p>Microsoft Teams, Slack, Email, Discord, Salesforce, Zoom, Google Workspace, Figma, Miro, monday.com, Notion</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Project & Process Frameworks</h5>
                                <p>Agile, Scrum, Kanban, Lean, Six Sigma; Architecture Review Boards, SLOs/SLIs, Compliance</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl text-neutral mb-4">Education</h2>
                        <h5 className="text-lg text-secondary">
                            Bachelor of Science in Management Information Systems
                        </h5>
                        <p><span className="font-bold">Emphasis:</span> Computer Science, Mathematics, Business Administration</p>
                        <p className="text-neutral/80">Utah State University – Logan, UT</p>
                    </section>

                </div>
            </section>
        </main>
    )
};

export default ResumePage;