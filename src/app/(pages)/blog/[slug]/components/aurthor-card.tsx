import Image from "next/image";

const AuthorCard = ({ author }) => {
    return (
        <div className="card card-border p-6">
            <div className="card-content">
                <h3 className="text-secondary text-xl mb-4">About the Author</h3>
                <div className="flex items-start gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary flex-shrink-0 overflow-hidden flex items-center justify-center text-white font-bold text-xl">
                        {author.image ? (
                            <Image
                                src={author.image || "/placeholder.svg"}
                                alt={author.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            author.initials || author.name.substring(0, 2)
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-neutral text-lg my-0 py-0">{author.name}</p>
                        <p className="text-neutral/70 text-sm my-0 py-0">{author.role}</p>
                    </div>
                </div>
                <p className="text-neutral/80 text-sm">
                    {author.bio ||
                        "Brandon helps entrepreneurs and companies with tech consulting, branding, automation, modernization and many more technology related subjects."}
                </p>
                <div className="mt-4">
                    <button className=" btn btn-secondary btn-block btn-outline rounded-full">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;