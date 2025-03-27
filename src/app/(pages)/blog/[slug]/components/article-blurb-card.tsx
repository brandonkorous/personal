import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faTag } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { ArticleBlurb } from "../../types";

export const ArticleBlurbCard = ({ article }: { article: ArticleBlurb }) => {
    return (
        <article
            className="card shadow-sm"
        >
            <figure className="relative h-48 overflow-hidden">
                <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="card-title">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-4 text-sm text-neutral/60 mb-3">
                            <span className="flex items-center text-nowrap">
                                <FontAwesomeIcon icon={faCalendar} className="mr-1" fixedWidth />
                                {formatDate(article.date)}
                            </span>
                            {article.category && (
                                <span className="flex items-center">
                                    <FontAwesomeIcon icon={faTag} className="mr-1" fixedWidth />
                                    {article.category}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl text-neutral">{article.title}</h3>
                    </div>
                </div>
                <p className="text-neutral/80 mb-4">{article.excerpt}</p>
                <div className="card-actions justify-start">
                    <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:underline text-sm"
                    >
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" fixedWidth />
                    </Link>
                </div>
            </div>
        </article>

    );
};

export default ArticleBlurbCard;