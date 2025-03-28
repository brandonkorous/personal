import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: 'https://brandonkorous.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://brandonkorous.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://brandonkorous.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://brandonkorous.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://brandonkorous.com/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://brandonkorous.com/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://brandonkorous.com/resume',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.1,
        },
        {
            url: 'https://brandonkorous.com/project-intake',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://brandonkorous.com/404',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.1,
        },
        {
            url: 'https://brandonkorous.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://brandonkorous.com/terms-of-service',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://brandonkorous.com/sitemap.xml',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}

export default sitemap;