import { comments } from "@/app/data";
import type { Comment } from "@/types";

export const fetchComments = async (
  page: number,
  url?: string
): Promise<Comment[]> => {
  if (url) {
    const response = await fetch(`${url}?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const comments: Comment[] = await response.json();

    return comments;
  } else {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return comments.slice((page - 1) * 2, page * 2);
  }
};
