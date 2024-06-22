// components/LikeButton.tsx
"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export const LikeButton = ({ postId }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState<number>(0);

  const handleLike = async () => {
    if (session) {
      const res = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId: session.user.id }),
      });
      if (res.ok) {
        setLikes(likes + 1);
      }
    } else {
      // Prompt user to sign in
    }
  };

  return <button onClick={handleLike}>Like {likes}</button>;
};
