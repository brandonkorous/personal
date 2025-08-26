import { BLOG_POSTS } from "./data";

export const getFeaturedBlogPosts = async () => {
    // In production/build, or if external API is not available, use local data
    if (process.env.NODE_ENV === 'production' || !process.env.WIZE_API_KEY) {
        return BLOG_POSTS.filter(post => post.featured);
    }

    try {
        const requestBody = {
            query: `
            query FindContents {
                findContents {
                    count
                    data {
                        _id
                        slug
                        published
                        title
                        excerpt
                        body
                        image
                        createdAt
                        createdBy
                        updatedAt
                        updatedBy
                    }
                }
            }

            `,
            variables: {
                featured: true,
            },
        };

        const response = await fetch(`${process.env.WIZE_API_URL}/wize-content/graphql`, {
            method: "POST",
            headers: {
                "wize-api-key": process.env.WIZE_API_KEY || "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        console.log("Result:", result);

        if (result.errors) {
            console.error("Error fetching featured blog posts:", result.errors);
            // Fallback to local data on error
            return BLOG_POSTS.filter(post => post.featured);
        }

        if (!result.data || !result.data.findContents || !result.data.findContents.data || result.data.findContents.data.length === 0) {
            console.error("No data found in response:", result);
            return BLOG_POSTS.filter(post => post.featured);
        }
        return result;
    } catch (error) {
        console.error("External API unavailable, using local data:", error);
        // Fallback to local data if fetch fails
        return BLOG_POSTS.filter(post => post.featured);
    }
};