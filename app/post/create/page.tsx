"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CreatePostPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<FileList | null>(null);

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
  }, [session, status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", content);

    if (images) {
      Array.from(images).forEach((image) => {
        formData.append("images", image);
      });
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.error("Failed to create post");
    }
  };


  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Subtitle:
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Images:
          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
