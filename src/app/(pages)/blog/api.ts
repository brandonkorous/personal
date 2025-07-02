import { BLOG_POSTS } from "./data";

export const getFeaturedBlogPosts = async () => {
    // In production/build, or if external API is not available, use local data
    if (process.env.NODE_ENV === 'production' || !process.env.WIZE_API_KEY) {
        return BLOG_POSTS.filter(post => post.featured);
    }

    try {
        const requestBody = {
            query: `
            query GetContents($filter: String, $featured: Boolean) {
                contents(filter: $filter, featured: $featured) {
                    totalCount
                    content {
                        id
                        title
                        safeTitle
                        intro
                        body
                        type
                        tags
                        status
                        createdAt
                        updatedAt
                        relevance
                    }
                }
            }
            `,
            variables: {
                featured: true,
            },
        };

        const response = await fetch(`http://localhost:5050/api/private`, {
            method: "POST",
            headers: {
                "x-api-key": process.env.WIZE_API_KEY || "",
                "Content-Type": "application/json",
                "wize-referrer": process.env.WIZE_TENANT_ID || "",
            },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        console.log("Result:", result.data.contents.content);

        if (result.errors) {
            console.error("Error fetching featured blog posts:", result.errors);
            // Fallback to local data on error
            return BLOG_POSTS.filter(post => post.featured);
        }

        return result.data.contents.content;
    } catch (error) {
        console.error("External API unavailable, using local data:", error);
        // Fallback to local data if fetch fails
        return BLOG_POSTS.filter(post => post.featured);
    }
};