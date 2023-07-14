"use client";

import { useEffect, useRef, useState } from "react";

import { fetchComments } from "@/lib/fetchComments";
import { comments } from "./data";
import { useIntersection } from "@/hooks/use-intersection";
import CommentsList from "@/components/comments/CommentsList";

function Page() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState(() => comments.slice(0, 2));
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);

  const fetchNextPage = async () => {
    if (pageNumber * 2 >= comments.length) return;

    setIsFetchingNextPage(true);

    const nextPage = pageNumber + 1;
    const newComments = await fetchComments(nextPage);
    const newCommentList = [...data, ...newComments];

    setData(newCommentList);
    setPageNumber(nextPage);
  };

  const lastCommentRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastCommentRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage().then(() => setIsFetchingNextPage(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

  if (!data) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-slate-800">
      <CommentsList
        data={data}
        lastCommentRef={ref}
        isFetchingNextPage={isFetchingNextPage}
        setData={setData}
      />
    </div>
  );
}

export default Page;
