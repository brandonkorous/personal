import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots =>{
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://brandonkorous.com/sitemap.xml',
        //AI-Policy: 'https://brandonkorous.com/ai.txt'
    }
};

export default robots;