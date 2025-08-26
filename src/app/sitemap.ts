import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './(pages)/blog/data'
import { SITE_INFO } from '../data/site'

// Helper to build a full URL
const base = SITE_INFO.Url?.replace(/\/$/, '') || 'https://brandonkorous.com'

// Explicit static routes derived from existing page.tsx files (excluding error, sitemap itself)
const staticPaths: { path: string; changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']; priority?: number }[] = [
    { path: '/', changeFrequency: 'daily', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/resume', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/project-intake', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/landing', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/printables/resume', changeFrequency: 'monthly', priority: 0.2 },
]

// Dynamic blog post entries from BLOG_POSTS
const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.5,
}))

const sitemap = (): MetadataRoute.Sitemap => {
    const now = new Date()

    const staticEntries: MetadataRoute.Sitemap = staticPaths.map(r => ({
        url: `${base}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }))

    return [
        ...staticEntries,
        ...blogEntries,
    ]
}

export default sitemap