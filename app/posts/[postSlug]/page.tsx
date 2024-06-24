import { PrismaClient } from "@prisma/client";

export default async function ArticleDetails({
    params,
}: {
    params: { postSlug: string };
}) {
    const prisma = new PrismaClient();

    const article = await prisma.post.findUniqueOrThrow({
        where: { slug: params.postSlug },
        select: {
            slug: true,
            title: true,
            content: true,
            categorie: true,
        },
    });

    console.log(article, "article");
    return (
        <div>
            <h1>{article.title}</h1>
            <h1>{article.categorie}</h1>
            <h1>{article.content}</h1>
            <h1>{params.postSlug}</h1>
        </div>
    );
}
