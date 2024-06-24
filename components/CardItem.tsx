import prisma from "@/lib/db";
import Link from "next/link";

type ArticleProps = {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    categorie: string;
    authorId: string;
};

export async function CardItem({ article }: { article: ArticleProps }) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR");
    }

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
                <div className="max-w-sm h-64 w-96 bg-white rounded-lg shadow-md overflow-hidden">
                    {/* <img className="w-full" src="/images/1.png" alt="Card image" /> */}
                    <div className="p-6 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-xs text-gray-500">
                                    Publié le {formatDate(article.createdAt)}
                                </p>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                    {article.categorie}
                                </span>
                            </div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 hover:cursor-pointer mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                {article.title}
                            </h5>
                            <p className="font-normal text-gray-700 mb-2 overflow-hidden text-ellipsis">
                                {article.content}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={postCreator?.image || ""}
                                alt={`avatar of ${postCreator?.name}`}
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900">
                                    {postCreator?.name}
                                </span>
                                <p className="text-xs text-gray-500">
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
