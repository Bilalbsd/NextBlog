import prisma from "@/lib/db";
import Link from "next/link";

type ArticleProps = {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    category: string;
    authorId: string;
};

export async function CardItem({ article }: { article: ArticleProps }) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR");
    };

    const stripHtmlTags = (text: string) => {
        return text.replace(/<[^>]*>?/gm, "");
    };

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) {
            return text;
        }
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    const cleanContent = truncateText(stripHtmlTags(article.content), 20);

    const postCreator = await prisma.user.findUnique({
        where: {
            id: article.authorId,
        },
        select: {
            name: true,
            image: true,
        },
    });

    return (
        <>
            <Link href={`posts/${article.slug}`}>
                <div className="max-w-sm h-64 w-96 rounded-lg shadow-md overflow-hidden border-2">
                    {/* <img className="w-full" src="/images/1.png" alt="Card image" /> */}
                    <div className="p-6 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-xs text-gray-500">
                                    Publié le {formatDate(article.createdAt)}
                                </p>
                                <span className="text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                    {article.category}
                                </span>
                            </div>
                            <h5 className="text-2xl font-bold tracking-tight hover:cursor-pointer mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                {article.title}
                            </h5>
                            <p className="font-normal mb-2 overflow-hidden text-ellipsis">
                                {cleanContent}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={postCreator?.image || ""}
                                alt={`avatar of ${postCreator?.name}`}
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold">
                                    {postCreator?.name}
                                </span>
                                <p className="text-xs">
                                    Créateur de NextBlog
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
