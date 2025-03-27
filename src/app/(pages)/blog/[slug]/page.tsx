import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedBlogPosts } from "./api"
import Article from "./components/article"

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

// Generate metadata for the page
export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        }
    }

    return {
        title: `${post.title} | BK's Blog`,
        description: post.excerpt,
        keywords: post.tags?.join(", ") || "",
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

export const generateStaticParams = async () => {
    // For now, we'll just hardcode the slugs
    // In a real app, you would fetch all slugs from your API/CMS
    return [
        { slug: "psychology-of-color-in-branding" },
        { slug: "10-tips-for-building-strong-personal-brand" },
        { slug: "future-of-web-development-trends" },
    ]
}

// Disable caching for this page to ensure comments are always fresh
export const dynamic = "force-dynamic"
export const revalidate = 0

export const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        console.log(post);
        notFound();
    }

    // Get related posts
    const relatedPosts = await getRelatedBlogPosts(post.category)


    return (
        <div className="flex flex-col min-h-screen bg-beige">
            <Article article={post} relatedPosts={relatedPosts} slug={post.slug} />
        </div>
    );
};

export default BlogPostPage;