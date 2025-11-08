import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRelatedBlogPosts, getBlogBySafeTitle } from "./api"
import Article from "./components/article"

// Generate metadata for the page
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
    const { slug } = await params;
    //const post = await getBlogPostBySlug(slug)
    const post = await getBlogBySafeTitle(slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        };
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
            publishedTime: post.createdAt,
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
        alternates: {
            canonical: `https://brandonkorous.com/blog/${slug}`,
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

// Use ISR (Incremental Static Regeneration) to revalidate every hour
export const revalidate = 3600

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    //const post = await getBlogPostBySlug(slug);
    const post = await getBlogBySafeTitle(slug);

    if (!post) {
        console.log(post);
        notFound();
    }

    // Get related posts
    const relatedPosts = await getRelatedBlogPosts(post.category || "");

    // JSON-LD structured data for the blog post
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.createdAt,
        "dateModified": post.createdAt,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "url": `https://brandonkorous.com/about`
        },
        "publisher": {
            "@type": "Person",
            "name": "Brandon Korous",
            "logo": {
                "@type": "ImageObject",
                "url": "https://brandonkorous.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://brandonkorous.com/blog/${slug}`
        },
        "keywords": post.tags?.join(", ") || "",
        "articleSection": post.category || "Technology"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="flex flex-col min-h-screen bg-beige">
                <Article article={post} relatedPosts={relatedPosts} />
            </div>
        </>
    );
};

export default BlogPostPage;
