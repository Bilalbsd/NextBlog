import React from "react";
import { CardItem } from "./CardItem";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function CardList() {
    const articles = await prisma.post.findMany();

    return (
        <div className="flex justify-center items-center flex-wrap gap-10 mx-auto mt-12 max-w-5xl">
            {articles.map((article) => (
                <CardItem
                    key={article.id}
                    article={{
                        ...article,
                        createdAt: article.createdAt.toISOString(),
                    }}
                />
            ))}
        </div>
    );
}
