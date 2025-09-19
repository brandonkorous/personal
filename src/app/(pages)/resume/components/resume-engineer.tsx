"use client"
import Logo from "@/components/logo"
import { faLinkedin } from "@awesome.me/kit-654a0ecbfd/icons/classic/brands"
import { faEnvelope, faPhone } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const EngineerResumePage = () => {
    return (
        <main className="bg-white py-6 print:py-0">
            <section className="relative">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl text-neutral pt-2">Brandon Korous</h1>
                            <p className="text-xl text-neutral/80">Principal Engineer | Full‑Stack Architect | Cloud & AI Builder</p>
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
                        <Link href="https://linkedin.com/in/brandonkorous" className="flex items-center text-neutral/80 hover:text-primary">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-secondary" fixedWidth />
                            /in/brandonkorous
                        </Link>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Executive Summary</h2>
                        <div className="max-w-none text-neutral/80">
                            <p>
                                Hands-on Principal Engineer and Full‑Stack Architect shipping multi-tenant SaaS on Next.js, TypeScript, Node.js, and PostgreSQL with AI systems (hybrid RAG, embeddings/semantic search), CI/CD, and secure-by-design patterns. Built JobSight.co and HelpNinja.ai with weekly releases and measurable impact.
                            </p>
                            <p>
                                Depth across application architecture, database design (pgvector, FTS), containerization (Docker/Kubernetes), and production operations (observability, SLOs, rollback strategies). Strong focus on developer experience, performance, and reliability (99.9% uptime targets).
                            </p>
                            <p>
                                Outcomes include 95% AI voice accuracy reducing reporting time by up to 80%, 40% faster payments via automated financial workflows, and $45K–$50K+ annual savings through platform consolidation.
                            </p>
                            <p>
                                In every leadership role, I also engineered core components—pair programming, prototyping, building and testing alongside the team to accelerate delivery and quality.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Key Strengths & Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Full‑Stack Dev: Next.js, React, Node.js</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>API Design: REST, GraphQL, Webhooks</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>AI Systems: RAG, embeddings, semantic search</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Data: PostgreSQL (pgvector, FTS), Snowflake</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>DevOps: GitHub Actions (OIDC), Terraform, IaC</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Security: RBAC, RLS, audit trails, SOC2/HIPAA</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Containers: Docker, Kubernetes</span></div>
                            <div className="flex items-start"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Observability: SLOs, logging, tracing</span></div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-4">Career Highlights</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Shipped two multi-tenant SaaS platforms consolidating 10+ tools; typical customers save $45K–$50K+/yr.</span></li>
                            <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Built hybrid RAG search (OpenAI + lexical), confidence scoring, guardrails; 95% AI voice accuracy and 80% time savings in daily logs.</span></li>
                            <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Delivered 99.9% uptime targets with real-time sync, conflict resolution, and automated rollback.</span></li>
                            <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented AI invoicing, multi-level approvals, complex billing; 40% faster payments and real-time margin analytics.</span></li>
                            <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Launched integrations: Slack, Teams, Email, Discord, webhooks with visual wizards and delivery analytics.</span></li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl  text-neutral mb-6">Professional Experience</h2>

                        {/* JobSight – Engineering Focus */}
                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Founder & Principal Engineer</h5>
                                    <p className="text-lg text-neutral/80">JobSight Technologies Inc. — Visalia, CA (Remote)</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">February 2025 – Present</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Architecture & Delivery</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Designed and built multi-tenant platforms on Next.js, TypeScript, Node.js with PostgreSQL; containerized services with Docker/Kubernetes.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented CI/CD (GitHub Actions OIDC), environment promotion, and automated rollback; infrastructure as code with Terraform.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Delivered real-time sync, conflict resolution, and observability (structured logging, alerts, tracing) against 99.9% uptime targets.</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">AI & Data Systems</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Built hybrid RAG (OpenAI embeddings + lexical FTS), semantic chunking, citations, and confidence scoring; pgvector + PostgreSQL FTS.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Created ingestion pipelines for URLs/sitemaps/PDFs, automated embeddings, and multilingual support.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Delivered AI invoicing and financial workflows; executive dashboards for margin and variance tracking.</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Security & Integrations</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented RBAC, audit trails, RLS, and secure secret management; SOC2/HIPAA-ready posture.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Shipped integration marketplace with Slack, Teams, Email, Discord, and webhooks; visual setup wizards, delivery analytics, retries.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Embedded web widget with confidence-based routing and human escalation patterns.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BHHC – Engineering Roles */}
                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Enterprise Integration Systems Manager (Engineering Lead)</h5>
                                    <p className="text-lg text-neutral/80">Berkshire Hathaway Homestate Companies – Sacramento, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">August 2023 – February 2025</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Engineering Delivery Highlights</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Built CI/CD pipelines and release automation increasing deployment frequency by 80% and cutting time‑to‑market by 60%.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Engineered enterprise transaction logging for ETL/ELT with end‑to‑end traceability; reduced root‑cause time by 80% and improved debugging insights by 60%.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Designed and executed BC/DR achieving RTO 4h, RPO 5m for mission‑critical integrations.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Authored standard templates and dev practices that decreased new project delivery by 40% and onboarding by 30%.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Architecture Manager, DevOps Manager & Platform Engineering Manager</h5>
                                    <p className="text-lg text-neutral/80">Berkshire Hathaway Homestate Companies – Sacramento, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">February 2021 – August 2023</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Cloud & Platform Engineering</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Designed hub‑and‑spoke Azure architecture with Zero Trust; migrated brownfield/greenfield apps to cloud.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Led AKS adoption; implemented IaC with Terraform and Managed DevOps patterns to standardize delivery.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Built CI/CD templates and pipeline automation reducing deployment effort by ~90%.</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Observability & Governance</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented Splunk for centralized logging and incident response; SLO/alerting strategy to reduce MTTR.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Launched cloud and data governance to improve integrity, security, and compliance.</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">AI & Data</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Integrated Azure OpenAI/Cognitive Services and built self‑service pipeline generation via Teams.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Automated Snowflake workflows to improve analytics delivery.</span></li>
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
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">May 2017 – February 2021</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Application Modernization</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Built .NET MVC apps replacing legacy C++/Delphi/WinForms/XML services to improve maintainability and performance.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Developed centralized .NET Proxy Gateway as data/operations backbone for new applications.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented design/branding system in .NET + Bootstrap/SCSS to standardize UI/UX and accelerate delivery.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex flex-row justify-between items-start md:items-center mb-3">
                                <div>
                                    <h5 className="text-xl  text-neutral">Head of Information Technology</h5>
                                    <p className="text-lg text-neutral/80">Employer Driven Solutions (Formerly BEN‑E‑LECT) – Visalia, CA</p>
                                </div>
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">March 2010 – May 2017</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Software Development & Integration</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Developed C# ASP.NET MVC web apps and Windows services integrating with SQL Server, HEALTHpac, Quickbooks, and other third-party systems.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Engineered ETL/ELT pipelines for data warehousing and reporting; built SSIS packages and SSRS reports.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Integrated third-party APIs (REST, SOAP) and built custom middleware for data synchronization and workflow automation.</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Infrastructure & Cloud Engineering</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Migrated from POTS/T1 to ShoreTel VoIP and fiber; engineered secure remote connectivity across multiple sites.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Migrated AD, SQL Server, and App Services to Azure; implemented multi‑tenant data separation and compliance controls.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Implemented RBAC, VPN hardening, firewall management, and MFA to strengthen security posture.</span></li>
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
                                <div className="badge badge-secondary mt-2 md:mt-0 text-nowrap font-bold">February 2009 – February 2010</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg  text-secondary mb-2">Full‑Stack Engineering</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Delivered web/desktop/mobile apps using C#, PGP, C++, Objective‑C, JavaScript across Windows, macOS, iOS, Android.</span></li>
                                        <li className="flex items-start gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div><span>Designed relational schemas and performance tuning across SQL Server, MySQL, PostgreSQL, SQLite.</span></li>
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
                                <p>Azure, AWS, DigitalOcean, Cloudflare, Snowflake</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">DevOps & CI/CD</h5>
                                <p>GitHub Actions (OIDC), Terraform, Docker, Kubernetes, PowerShell, Python</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Application Development</h5>
                                <p>TypeScript, Next.js, React, Node.js/Express, C#, GraphQL, REST, Webhooks</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">AI & Automation</h5>
                                <p>OpenAI, Azure OpenAI, Anthropic; RAG, embeddings, semantic search, prompt orchestration</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Security</h5>
                                <p>RBAC, RLS, audit trails, OAuth2/JWT; SOC2/HIPAA ready</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Data</h5>
                                <p>PostgreSQL (pgvector, FTS), SQL Server, Snowflake</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Observability</h5>
                                <p>Splunk, Grafana, Azure Monitor, Sentry</p>
                            </div>
                            <div>
                                <h5 className="text-lg text-secondary">Integrations</h5>
                                <p>Slack, Microsoft Teams, Email, Discord, Webhooks</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl text-neutral mb-4">Education</h2>
                        <h5 className="text-lg text-secondary">Bachelor of Science in Management Information Systems</h5>
                        <p><span className="font-bold">Emphasis:</span> Computer Science, Mathematics, Business Administration</p>
                        <p className="text-neutral/80">Utah State University – Logan, UT</p>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default EngineerResumePage
