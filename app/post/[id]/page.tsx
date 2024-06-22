// app/post/[id]/page.tsx
import { PrismaClient, Post } from "@prisma/client";
import { notFound } from "next/navigation";
import Comment from "@/app/components/Comment";
import { getSession } from "next-auth/react";
import { LikeButton } from "@/app/components/LikeButton";

const prisma = new PrismaClient();

async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
      likes: true,
    },
  });
  return post;
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author?.name}</p>
      <p>Comments: {post.comments.length}</p>
      <p>Likes: {post.likes.length}</p>
      <LikeButton postId={post.id} />
      <div>
        <h2>Comments</h2>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
