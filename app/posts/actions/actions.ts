"use server";

import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createArticle(formData: FormData) {
    const session = await auth();

    if (!session?.user) return null;

    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            category: formData.get("category") as string,
            content: formData.get("content") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            authorId: session.user.id as string,
        },
    });
    redirect('/');
}
