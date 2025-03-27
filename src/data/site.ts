export const CONTACT_INFO = {
    email: "hello@brandonkorous.com",
    phone: "559-623-3290",
    address: "Central California",
    workingHours: "Mon - Fri, 9:00 AM - 5:00 PM PST",
    weekendHours: "Weekend: By appointment only"
};

export const SITE_INFO = {
    Name: "Brandon Korous",
    Url: "https://brandonkorous.com",
    Title: "Brandon Korous - Bold Ideas.  Creative Solutions.",
    Description: "Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.",
};

export const FOOTER_LINKS = [
    {
        category: "Pages", links: [
            { title: "About", href: "/about" },
            { title: "Services", href: "/services" },
            { title: "Portfolio", href: "/portfolio" },
            { title: "Blog", href: "/blog" },
            { title: "Contact", href: "/contact" },
        ]
    },
    {
        category: "Services", links: [
            { title: "Web Development", href: "/services/web-development" },
            { title: "Web Design", href: "/services/web-design" },
            { title: "Innovation & Modernization", href: "/services/innovation-modernization" },
            { title: "Automation", href: "/services/automation" },
            { title: "Consulting", href: "/services/consulting" },
            { title: "Training", href: "/services/training" },
            { title: "Brand Strategy", href: "/services/brand-strategy" },
        ]
    },
    {
        category: "Contact", links: [
            { title: `Email: ${CONTACT_INFO.email}`, href: `mailto:${CONTACT_INFO.email}` },
            { title: `Phone: ${CONTACT_INFO.phone}`, href: `tel:${CONTACT_INFO.phone}` },
        ]
    },
];

export const FOOTER_LINKS_LEGAL = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Sitemap", href: "/sitemap" },
]

export const SOCIAL_LINKS = [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/brandonkorous", icon: "fa-brands fa-linkedin-in" },
    { title: "GitHub", href: "https://github.com/brandonkorous", icon: "fa-brands fa-github-alt" },
    { title: "X (formerly Twitter)", href: "https://x.com/brandonkorous", icon: "fa-brands fa-x-twitter" },
    { title: "Instagram", href: "https://www.instagram.com/brandonkorous", icon: "fa-brands fa-instagram" },
    { title: "Facebook", href: "https://www.facebook.com/brandonkorous", icon: "fa-brands fa-facebook-f" },
]