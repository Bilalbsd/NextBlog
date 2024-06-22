<<<<<<< HEAD
import { PrismaClient, Post } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      comments: true,
      likes: true,
    },
  });
  return posts;
=======
import { DropdownComponent } from "./components/DropdownComponent";
import { CardList } from "./components/CardList";

export default function Home() {
  return (
    <div className="home container mx-auto">
      <div className="flex justify-around">
        <h1 className="text-2xl">Tous les articles</h1>
        <DropdownComponent />
      </div>
      <CardList />
    </div>
  );
>>>>>>> cb3d69cf79f447acfd70931fd685e0e7e71f2602
}

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author?.name}</p>
          <p>Comments: {post.comments.length}</p>
          <p>Likes: {post.likes.length}</p>
          <Link href={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
