"use client";

import type { Comment } from "@/types";
import CommentListItem from "./CommentListItem";
import LoadingSpinner from "../LoadingSpinner";

type CommentsList = {
  data: Comment[];
  lastCommentRef: (element: HTMLDivElement) => void;
  isFetchingNextPage: boolean;
  setData: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function CommentsList({
  data,
  setData,
  lastCommentRef,
  isFetchingNextPage,
}: CommentsList) {
  const handleDeleteComment = (id: string) => {
    const newData = data.filter(comment => comment.id !== id);
    setData(newData);
  };

  const handleReplyDelete = (id: string) => {
    data.map(comment => {
      const newReplies = comment.replies.filter(reply => reply.id !== id);
      const updatedComment = { ...comment, replys: newReplies };

      setData(prevState => {
        const newComments = prevState.map(c => {
          if (c.id === updatedComment.id) {
            c.replies = updatedComment.replys;
            return c;
          }
          return c;
        });
        return newComments;
      });
    });
  };

  return (
    <div className="bg-black rounded-md w-[700px] py-8 px-8 h-[300px]">
      <div className="w-full h-full px-5 overflow-y-auto">
        {data.map((comment, index) => {
          return (
            <CommentListItem
              key={comment.id}
              comment={comment}
              index={index}
              commentsLength={data.length}
              lastCommentRef={lastCommentRef}
              handleDeleteComment={handleDeleteComment}
              handleReplyDelete={handleReplyDelete}
              setData={setData}
            />
          );
        })}
        {isFetchingNextPage ? <LoadingSpinner /> : null}
      </div>
    </div>
  );
}

export default CommentsList;
