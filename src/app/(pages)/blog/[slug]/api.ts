import { BLOG_POSTS } from "../data";

export const getAllBlogPosts = async () => {
    return Object.values(BLOG_POSTS);
};

export const getBlogPostBySlug = async (slug: string) => {
    return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRelatedBlogPosts = async (category: string) => {
    return Object.values(BLOG_POSTS).filter(post => post.category === category);
}

export const getBlogBySafeTitle = async (safeTitle: string) => {
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

    if(result.errors) {
        console.error("Error fetching blog post:", result.errors);
        return null;
    }
    
    return result.data.read;
};