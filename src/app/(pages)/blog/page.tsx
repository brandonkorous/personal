import Hero from "@/components/hero";
import { ParallaxSection } from "@/components/animation/parallax-section";
import { Reveal } from "@/components/animation/reveal";
import { BLOG_POSTS, CATEGORIES } from "./data";
import Link from "next/link";
import Article from "@/components/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { getFeaturedBlogPosts } from "./api";
import FeaturedArticle from "@/components/featured-article";
import { ArticleBlurb } from "./types";

const Blog = async () => {
    const featuredPosts = await getFeaturedBlogPosts();
    console.log(featuredPosts.length, "featuredPosts");
    return (
        <>
            <Hero animated topLeftBlobColor="bg-secondary/20" bottomRightBlobColor="bg-primary/20" className="">
                <div className="gap-10 lg:gap-20 items-center max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-8 text-neutral-500 text-center">
                        <div className="badge badge-xl bg-white text-secondary font-bold text-xl py-5 shadow-lg border-none mx-auto">
                            <FontAwesomeIcon icon={faPenNib} size="lg" />
                            Blog & Articles
                        </div>
                        <h1 className="py-0 mb-0">
                            Insights on <span className="text-primary">Technology</span>, <span className="text-secondary">Innovation</span>, and <span className="text-accent">Automation</span>
                        </h1>
                        <div className="text-xl pb-8">
                            Practical tips, industry trends, and personal stories to help you build a stronger technological foundation.
                        </div>
                        <label className="input rounded-full input-xl border border-primary/20 focus:ring-2 focus:ring-primary/50 w-full">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className=""
                            />
                            <button className="btn btn-primary rounded-full">
                                Search
                            </button>
                        </label>
                    </div>
                </div>
            </Hero>
            <ParallaxSection className="py-8 bg-white border-y border-gray-200">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map((category, i) => (
                            <Reveal key={category.slug} delay={i * 0.05} y={24} className="inline-block">
                                <Link
                                    href={`/blog/category/${category.slug}`}
                                    className={`btn rounded-full ${category.slug === "all"
                                        ? "btn-primary"
                                        : "btn-secondary btn-outline"
                                        }`}
                                >
                                    {category.name}
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* Featured Post */}
            <ParallaxSection className="py-16 bg-white">
                <div className="container">
                    <Reveal><h2 className="text-neutral mb-8">Featured Post</h2></Reveal>
                    {featuredPosts.map((featuredPost: ArticleBlurb, i: number) => (
                        <Reveal key={featuredPost.id} delay={i * 0.08} y={60}>
                            <FeaturedArticle  {...featuredPost} />
                        </Reveal>
                    ))}
                </div>
            </ParallaxSection>

            <ParallaxSection className="py-16 bg-beige">
                <div className="container">
                    <Reveal><h2 className="text-neutral mb-8">Latest Articles</h2></Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.filter(blog => !blog.featured).map((blog, i) => (
                            <Reveal key={blog.id} delay={i * 0.05} y={50}>
                                <Article  {...blog} />
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Reveal y={24} delay={0.3}>
                            <Link href="/" className="btn btn-secondary btn-lg rounded-full">
                                Load More Articles
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection className="py-16 bg-white">
                <div className="container">
                    <Reveal className="max-w-5xl mx-auto bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
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
                    </Reveal>
                </div>
            </ParallaxSection>
        </>
    );
};

export default Blog;