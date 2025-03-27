import { formatDate } from '@/lib/utils';
import { faArrowRight, faCalendarDays, faTag } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleProps {
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

const Article = ({ id, category, featured, title, slug, excerpt, content, date, readTime, image, tags, author }: ArticleProps) => {
    return (
        <article
            key={id}
            className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:translate-y-[-4px]"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral mb-3">
                    <span className="flex items-center gap-2 text-nowrap">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {formatDate(date)}
                    </span>
                    <span className="flex items-center gap-2 flex-wrap">
                        <FontAwesomeIcon icon={faTag} />
                        {tags.map((tag) => (
                            <span key={tag} className="inline-block bg-base-300 text-neutral px-2 py-1 rounded-full text-xs font-medium text-nowrap">
                                {tag}
                            </span>
                        ))}
                    </span>
                </div>
                <h3 className="text-xl text-neutral mb-2">{title}</h3>
                <p className="text-neutral mb-4">{excerpt}</p>
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline text-sm"
                >
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </article>
    );
};

export default Article;