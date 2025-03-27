import { formatDate } from '@/lib/utils';
import { faArrowRight, faCalendarDays, faTag } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
    id: number;
    category: string;
    featured: boolean;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    author: string;
}

const FeaturedArticle = ({ id, category, featured, title, slug, excerpt, content, date, readTime, image, tags, author }: ArticleProps) => {
    return (
        <article className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
                />
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-6 ">
                    <span className="flex items-center text-neutral gap-2">
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" />
                        {formatDate(date)}
                    </span>
                    <span className="flex items-center text-neutral gap-2">
                        <FontAwesomeIcon icon={faTag} size="xl" />
                        {tags.map((tag) => (
                            <span key={tag} className="inline-block bg-base-300 text-neutral px-2 py-1 rounded-full text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral">{title}</h3>
                <p className="text-xl">{excerpt}</p>
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                >
                    Read Full Article
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </article>
    );
};

export default FeaturedArticle;