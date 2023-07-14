import { AiOutlineDelete } from "react-icons/ai";

import type { Reply } from "@/types";

type ReplysListItem = {
  rep: Reply;
  handleReplyDelete: (id: string) => void;
};

function ReplysListItem({ rep, handleReplyDelete }: ReplysListItem) {
  return (
    <div
      key={rep.id}
      className="flex items-center justify-between gap-4 px-5 py-5 mx-6 bg-gray-100 rounded-md">
      <p>{rep.content}</p>
      <button
        onClick={() => handleReplyDelete(rep.id)}
        type="button"
        className="cursor-pointer">
        <AiOutlineDelete size={25} />
      </button>
    </div>
  );
}

export default ReplysListItem;
