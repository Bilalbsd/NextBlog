import { PrismaClient } from "@prisma/client";

export async function ArticleList() {
    const prisma = new PrismaClient();

    const articles = await prisma.post.findMany();

    return (
        <ul>
            {articles.map((article) => (
                <li key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <p>{article.slug}</p>
                    <p>{article.authorId}</p>
                    <p>{article.createdAt.toLocaleDateString('fr-FR').toString()}</p>
                    <br />
                </li>
            ))}
        </ul>
    );
}
