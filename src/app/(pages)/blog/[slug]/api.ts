import { BLOG_POSTS } from "../data";
import { ArticleBlurb, Article } from "../types";

export const getAllBlogPosts = async () => {
    return Object.values(BLOG_POSTS);
};

export const getBlogPostBySlug = async (slug: string) => {
    return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRelatedBlogPosts = async (category: string): Promise<ArticleBlurb[]> => {
    // First try to get from local data
    const localPosts = BLOG_POSTS.filter(post => post.category === category);

    // Map local posts to ArticleBlurb format
    return localPosts.map(post => ({
        id: post.id.toString(),
        title: post.title,
        safeTitle: post.slug,
        intro: post.excerpt,
        category: post.category,
        createdAt: post.date,
        image: post.image,
        tags: post.tags,
    }));
}

export const getBlogBySafeTitle = async (safeTitle: string): Promise<Article | null> => {
    const response = await fetch(`http://localhost:5050/api/public`,
        {
            method: "POST",
            headers: {
                //"x-api-key": process.env.WIZE_API_KEY, // Fixed the environment variable
                "Content-Type": "application/json",
                "wize-referrer": process.env.WIZE_TENANT_ID || "",
            },
            body: JSON.stringify({
                query: `
                query ReadContent($safeTitle: String!) {
                    read(safeTitle: $safeTitle) {
                        id
                        title
                        subTitle
                        safeTitle
                        intro
                        body
                        type
                        tags
                        status
                        order
                        image
                        metaKeywords
                        metaDescription
                        metaAuthor
                        categoryId
                        createdAt
                        updatedAt
                    }
                }
            `,
                variables: {
                    safeTitle,
                }
            }),
        }
    );

    const result = await response.json();

    if (result.errors) {
        console.error("Error fetching blog post:", result.errors);
        return null;
    }

    const apiData = result.data.read;
    if (!apiData) return null;

    // Map API response to Article format
    return {
        title: apiData.title,
        excerpt: apiData.intro || '',
        body: apiData.body,
        content: apiData.body,
        createdAt: apiData.createdAt,
        category: apiData.categoryId || '',
        slug: apiData.safeTitle,
        image: apiData.image || '',
        tags: apiData.tags || [],
        author: {
            name: apiData.metaAuthor || 'Unknown Author',
            role: 'Author',
            initials: apiData.metaAuthor ? apiData.metaAuthor.split(' ').map((n: string) => n[0]).join('') : 'UA'
        }
    };
};