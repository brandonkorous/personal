'use client';
import { faFacebook, faLinkedin, faTwitter } from "@awesome.me/kit-654a0ecbfd/icons/classic/brands";
import { faCopy } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface ShareCardProps {
    title: string;
}

const ShareCard = ({ title }: ShareCardProps) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const handleShare = (platform: string) => {
        if (!url) return;

        switch (platform) {
            case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
                break
            case "twitter":
                window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
                    "_blank",
                )
                break
            case "linkedin":
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
                break
            default:
                // Copy to clipboard
                navigator.clipboard.writeText(url).then(() => {
                    //toast.success("Link copied to clipboard!")
                })
        }
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/10">
            <h3 className="text-secondary text-xl mb-4">Share This Post</h3>
            <div className="flex items-center justify-between">
                <button
                    onClick={() => handleShare("facebook")}
                    className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                    aria-label="Share on Facebook"
                >
                    <FontAwesomeIcon icon={faFacebook} size="lg" fixedWidth />
                </button>
                <button
                    onClick={() => handleShare("twitter")}
                    className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                    aria-label="Share on Twitter"
                >
                    <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
                </button>
                <button
                    onClick={() => handleShare("linkedin")}
                    className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                    aria-label="Share on LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
                </button>
                <button
                    onClick={() => handleShare("copy")}
                    className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                    aria-label="Copy link"
                >
                    <FontAwesomeIcon icon={faCopy} size="lg" fixedWidth />
                </button>
            </div>
        </div>
    );
};

export default ShareCard;