import { useRef } from "react";
import { nanoid } from "nanoid";
import { BsReply } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

import { comments } from "@/app/data";
import RepliesList from "../replies/RepliesList";
import RepliesForm from "../replies/RepliesForm";
import { useToggle } from "@/hooks/useToggle";
import type { Comment, Reply } from "@/types";

type CommentListItem = {
  comment: Comment;
  index: number;
  commentsLength: number;
  lastCommentRef: (element: HTMLDivElement) => void;
  handleDeleteComment: (id: string) => void;
  handleReplyDelete: (id: string) => void;
  setData: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function CommentListItem({
  comment,
  index,
  commentsLength,
  lastCommentRef,
  handleDeleteComment,
  handleReplyDelete,
  setData,
}: CommentListItem) {
  const [isReplyInputOpen, toggleReplyInput] = useToggle(false);
  const [showReplies, toggleShowReplies] = useToggle(false);
  const replyInputRef = useRef<HTMLInputElement>(null);

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!replyInputRef.current?.value) return;

    const parentComment = comments.find(c => c.id === comment.id);

    if (!parentComment) return;

    const reply: Reply = { id: nanoid(), content: replyInputRef.current.value };

    parentComment.replies = [...parentComment.replies, reply];

    replyInputRef.current.value = "";

    setData(prevState => {
      const newComments = prevState.map(c => {
        if (c.id === parentComment.id) {
          return parentComment;
        }
        return c;
      });
      return newComments;
    });

    toggleReplyInput();
  };

  const isLastComment = index === commentsLength - 1;

  return (
    <div
      className={`bg-gray-100 rounded-md ${
        showReplies && comment.replies.length > 0 && "pb-4 mb-4"
      }`}
      ref={isLastComment ? lastCommentRef : null}
      key={comment.id}>
      <div className="flex items-center justify-between w-full gap-2 px-4 py-5 my-4">
        <div>
          <p>{comment.content}</p>
          {comment.replies.length > 0 && !isReplyInputOpen ? (
            <button
              onClick={() => toggleShowReplies()}
              type="button"
              className="flex items-center px-3 py-2 mt-6 font-semibold bg-black rounded-md gap-x-3 active:bg-gray-700 text-gray-50">
              replys <MdExpandMore size={18} />
            </button>
          ) : null}
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={toggleReplyInput}
            type="button"
            className="cursor-pointer">
            <BsReply size={25} />
          </button>
          <button
            onClick={() => handleDeleteComment(comment.id)}
            type="button"
            className="cursor-pointer">
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
      {isReplyInputOpen ? (
        <div className="flex flex-col px-4 pb-4">
          <RepliesForm
            handleReplySubmit={handleReplySubmit}
            replyInputRef={replyInputRef}
          />
        </div>
      ) : null}
      {showReplies && comment.replies.length > 0 ? (
        <RepliesList
          comment={comment}
          handleReplyDelete={handleReplyDelete}
          showReplies={showReplies}
        />
      ) : null}
    </div>
  );
}

export default CommentListItem;
