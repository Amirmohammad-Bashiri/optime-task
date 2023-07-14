import type { Comment } from "@/types";
import RepliesListItem from "./RepliesListItem";

type RepliesList = {
  showReplies: boolean;
  comment: Comment;
  handleReplyDelete: (id: string) => void;
};

function RepliesList({ showReplies, comment, handleReplyDelete }: RepliesList) {
  return (
    <div
      className={`py-8 mx-10 space-y-5 overflow-y-auto bg-black rounded-md max-h-44`}>
      {showReplies
        ? comment.replies.map(rep => (
            <RepliesListItem
              key={rep.id}
              rep={rep}
              handleReplyDelete={handleReplyDelete}
            />
          ))
        : null}
    </div>
  );
}

export default RepliesList;
