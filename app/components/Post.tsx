import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author?.name}</p>
      <p>Comments: {post.comments.length}</p>
      <p>Likes: {post.likes.length}</p>
      <Link href={`/post/${post.id}`}>Read more</Link>
    </div>
  );
};

export default Post;
