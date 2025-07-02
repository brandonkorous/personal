export const getFeaturedBlogPosts = async () => {
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
            featured: true, // Ensure filter is serialized
        },
    };

    const response = await fetch(`http://localhost:5050/api/private`, {
        method: "POST",
        headers: {
            "x-api-key": process.env.WIZE_API_KEY || "",
            "Content-Type": "application/json",
            "wize-referrer": process.env.WIZE_TENANT_ID || "",
        },
        body: JSON.stringify(requestBody), // Serialize the entire request body
    });
    const result = await response.json();
    console.log("Result:", result.data.contents.content); // Debug the response

    if (result.errors) {
        console.error("Error fetching featured blog posts:", result.errors);
        return null;
    }
    return result.data.contents.content;
};