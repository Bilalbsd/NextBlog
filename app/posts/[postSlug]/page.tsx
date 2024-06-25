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
        <div className="container mx-auto px-8 py-8 sm:px-6 sm:px-8">
            <h1 className="text-3xl text-center my-5 font-bold">
                {article.title}
            </h1>
            <div className="text-sm text-gray-500 mb-4">{article.category}</div>
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
            ></div>
            <div className="mt-4 text-sm text-gray-400">
                URL: {params.postSlug}
            </div>
        </div>
    );
}
