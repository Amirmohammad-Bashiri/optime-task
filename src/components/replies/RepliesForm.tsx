import { AiOutlineSend } from "react-icons/ai";

type ReplysForm = {
  handleReplySubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  replyInputRef: React.MutableRefObject<HTMLInputElement | null>;
};

function ReplysForm({ handleReplySubmit, replyInputRef }: ReplysForm) {
  return (
    <form className="space-y-2" onSubmit={handleReplySubmit}>
      <label
        htmlFor="reply"
        className="block mb-2 text-sm font-medium text-gray-900">
        Reply:
      </label>
      <input
        ref={replyInputRef}
        type="text"
        id="reply"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
      <button
        className="flex items-center px-6 py-2 font-semibold bg-black rounded-md gap-x-3 active:bg-gray-700 text-gray-50"
        type="submit">
        Send
        <AiOutlineSend size={18} />
      </button>
    </form>
  );
}

export default ReplysForm;
