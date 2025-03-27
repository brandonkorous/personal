import { BLOG_POSTS } from "../data";

export const getAllBlogPosts = async () => {
    return Object.values(BLOG_POSTS);
};

export const getBlogPostBySlug = async (slug: string) => {
    console.log("slug", slug);
    return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRelatedBlogPosts = async (category: string) => {
    return Object.values(BLOG_POSTS).filter(post => post.category === category);
}