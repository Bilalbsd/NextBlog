"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createArticle(formData: FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            authorId: 1,
        },
    });
}
