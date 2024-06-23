import { PrismaClient } from "@prisma/client";

export default async function ArticleDetails({
    params,
}: {
    params: { articleSlug: string };
}) {

    const prisma = new PrismaClient();

    const article = await prisma.post.findUniqueOrThrow({
        where: { slug: params.articleSlug },
        select: {
            slug: true,
            title: true,
        }
    })
    return (
        <div>
            <h1>{article.title}</h1>
            <h1>{params.articleSlug}</h1>
        </div>
    );
}
