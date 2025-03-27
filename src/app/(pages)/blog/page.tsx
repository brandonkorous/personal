import Hero from "@/components/hero";
import { BLOG_POSTS, CATEGORIES } from "./data";
import Link from "next/link";
import Article from "@/components/article";
import FeaturedArticle from "@/components/featured-article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";

const Blog = () => {
    return (
        <>
            <Hero topLeftBlobColor="bg-secondary/20" bottomRightBlobColor="bg-primary/20" className="">
                <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                        <div className="badge badge-xl bg-white text-secondary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                            <FontAwesomeIcon icon={faPenNib} size="lg" />
                            Blog & Articles
                        </div>
                        <h1 className="py-0 mb-0">
                            Insights on <span className="text-primary">Technology</span>, <span className="text-secondary">Innovation</span>, and <span className="text-accent">Automation</span>
                        </h1>
                        <div className="text-xl">
                            Practical tips, industry trends, and personal stories to help you build a stronger technological foundation.
                        </div>
                    </div>
                </div>
            </Hero>
            <section className="py-8 bg-white border-y border-gray-200">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/blog/category/${category.slug}`}
                                className={`btn rounded-full ${category.slug === "all"
                                    ? "btn-primary"
                                    : "btn-secondary btn-outline"
                                    }`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-neutral mb-8">Featured Post</h2>
                    {BLOG_POSTS.filter(blog => blog.featured).map((featuredPost) => (
                        <FeaturedArticle key={featuredPost.id} {...featuredPost} />

                    ))}
                </div>
            </section>

            <section className="py-16 bg-beige">
                <div className="container">
                    <h2 className="text-neutral mb-8">Latest Articles</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.filter(blog => !blog.featured).map((blog) => (
                            <Article key={blog.id} {...blog} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/" className="btn btn-secondary btn-lg rounded-full">
                            Load More Articles
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-5xl mx-auto bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-white mb-4">Never Miss an Update</h2>
                            <p className="text-white mb-8 max-w-xl mx-auto text-xl">
                                Subscribe to get the latest articles, tips, and resources straight to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input type="email" placeholder="Enter your email" className="input input-lg rounded-full bg-white/20 text-white border-none" />
                                <Link href="/" className="btn btn-white text-secondary btn-lg rounded-full">
                                    Subscribe
                                </Link>
                            </form>

                            <p className="mt-4 text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;