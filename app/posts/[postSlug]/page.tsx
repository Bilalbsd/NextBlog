import { PrismaClient } from "@prisma/client";
import React from "react";
import sanitizeHtml from "sanitize-html";

export default async function ArticleDetails({
    params,
}: {
    params: { postSlug: string };
}) {
    const prisma = new PrismaClient();

    console.log(params, "params");

    const article = await prisma.post.findUniqueOrThrow({
        where: { slug: params.postSlug },
        select: {
            slug: true,
            title: true,
            content: true,
            category: true,
        },
    });

    console.log(article, "article");

    const cleanContent = sanitizeHtml(article.content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ["src", "alt"],
        },
    });

    return (
        <div>
            <h1>{article.title}</h1>
            <h2>{article.category}</h2>
            <div dangerouslySetInnerHTML={{ __html: cleanContent }}></div>
            <h3>{params.postSlug}</h3>
        </div>
    );
}
