import { ArticleBlurb } from '@/app/(pages)/blog/types';
import { formatDate } from '@/lib/utils';
import { faArrowRight, faCalendarDays, faTag } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';


const FeaturedArticle = ({ title, safeTitle, intro, createdAt, image, tags = [] }: ArticleBlurb) => {
    return (
        <article className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={image || 'https://placehold.co/600x400'}
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
                        {formatDate(createdAt)}
                    </span>
                    <span className="flex items-center text-neutral gap-2">
                        <FontAwesomeIcon icon={faTag} size="xl" />
                        {tags.map((tag: string) => (
                            <span key={tag} className="inline-block bg-base-300 text-neutral px-2 py-1 rounded-full text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral">{title}</h3>
                <p className="text-xl">{intro}</p>
                <Link
                    href={`/blog/${safeTitle}`}
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