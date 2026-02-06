"use client";

import { getPages } from "@/lib/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import ResourceCard from "./ResourceCard";
import Loading from "./Loading";
import LoadMoreButton from "./LoadMoreButton";
type Item = {
  id: string | number;
  title: string;
  slug: string;
};
export default function InfiniteList() {
    const fetchPages = ({ pageParam = 1 }) => {
    return getPages(pageParam.toString());
    };

  const {
    data,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pages"],
    queryFn: fetchPages,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pagination = lastPage?.meta?.pagination;
      if (!pagination) return undefined;

      const { page, pageCount } = pagination;
      return page < pageCount ? page + 1 : undefined;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold py-4">Infinite Scroll</h1>
      {data?.pages.map((group, pageIndex) => (
        <div key={pageIndex} className="flex flex-col gap-4">
          {group.data.map((item: Item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>
      ))}

      <LoadMoreButton
        onClick={fetchNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
        loading={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />

      {isFetchingNextPage && <p>fetching...</p>}
    </div>
  );
}
