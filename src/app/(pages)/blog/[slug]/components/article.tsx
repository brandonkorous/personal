"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faClock, faTag } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import AuthorCard from "./aurthor-card";
import ShareCard from "./share-card";
import ArticleBlurbCard from "./article-blurb-card";

// Types for the blog article data
export interface Author {
    name: string
    role: string
    image?: string
    bio?: string
    initials?: string
}

export interface Comment {
    id: string
    author: {
        name: string
        image?: string
    }
    content: string
    date: string
    replies?: Comment[]
}

export interface RelatedPost {
    title: string
    excerpt: string
    category: string
    date: string
    image: string
    slug: string
}

export interface BlogArticleProps {
    article: {
        title: string
        excerpt: string
        content: string
        date: string
        readTime?: string
        category?: string
        slug: string
        image: string
        tags?: string[]
        author: Author
    }
    comments?: Comment[]
    relatedPosts?: RelatedPost[]
    onShare?: () => void
    onBookmark?: () => void
    slug: string
}


export const Article = ({
    article,
    comments = [],
    relatedPosts = [],
    onShare,
    onBookmark,
    slug,
}: BlogArticleProps) => {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    {article.category && (
                        <div className="mb-4 flex justify-center">
                            <div className="badge badge-accent">
                                {article.category.toUpperCase()}
                            </div>
                        </div>
                    )}
                    <h1 className=" text-secondary mb-6 text-center tracking-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-sm text-neutral/60 mb-8">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faCalendar} className="mr-1" fixedWidth />
                            {formatDate(article.date)}
                        </span>
                        {article.readTime && (
                            <span className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="mr-1" fixedWidth />
                                {article.readTime} read
                            </span>
                        )}
                        {article.tags &&
                            article.tags.map((tag, index) => (
                                <span key={index} className="flex items-center">
                                    <FontAwesomeIcon icon={faTag} className="mr-1" fixedWidth />
                                    {tag}
                                </span>
                            ))}
                    </div>

                    <div className="relative h-[400px] w-full overflow-hidden rounded-xl mb-12">
                        <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <div
                                className="prose prose-lg max-w-none text-neutral/90"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {article.tags && article.tags.length > 0 && (
                                <div className="flex items-center justify-between border-t border-b border-neutral/10 py-6 my-8">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {article.tags.map((tag, index) => (
                                            <Link
                                                key={index}
                                                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="px-3 py-1 rounded-full bg-beige text-neutral hover:bg-accent/30 transition-colors text-sm"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:w-1/3 space-y-8">
                            {/* Author Card */}
                            <AuthorCard author={article.author} />
                            {/* Share Card */}
                            <ShareCard title={article.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <section className="py-12 bg-beige">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl text-neutral mb-6">Comments</h2>
                    Coming Soon....
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl text-neutral mb-8">Related Articles</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((post, index) => (
                                <ArticleBlurbCard key={index} article={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Section */}
            <section className="py-16 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="mx-auto bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Never Miss an Update</h2>
                            <p className="text-white/80 mb-8 max-w-xl mx-auto">
                                Subscribe to get the latest articles, tips, and resources straight to your inbox.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 h-12 px-4 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                                <button className="btn btn-primary rounded-full">Subscribe</button>
                            </form>

                            <p className="mt-4 text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Article;