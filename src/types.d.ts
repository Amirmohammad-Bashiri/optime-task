export type Comment = {
  id: string;
  content: string;
  replies: Reply[] | [];
};

export type Reply = {
  id: string;
  content: string;
};
