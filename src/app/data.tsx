import { nanoid } from "nanoid";

import type { Comment } from "@/types";

export const comments: Comment[] = [
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima velit provident unde? Temporibus, quasi",
  },
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perferendis.",
  },
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat fugit accusantium earum sequi consequatur vitae adipisci. Ratione, veniam fugit.",
  },
  {
    id: nanoid(),
    replies: [],
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, commodi!",
  },
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolore, debitis id nesciunt dignissimos ducimus repellat eaque quasi similique qui!",
  },
  {
    id: nanoid(),
    replies: [],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, reprehenderit.",
  },
  {
    id: nanoid(),
    replies: [],
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
