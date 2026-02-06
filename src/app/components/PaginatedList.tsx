"use client";

import { getPages } from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Pagination from "./Pagination";
import ResourceCard from "./ResourceCard";
import Loading from "./Loading";
type Item = {
  id: string | number;
  title: string;
  slug: string;
};
export default function PaginatedList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["resources", "paginated", page],
    queryFn: () => getPages(page.toString()),
    
  });

  if (isLoading) return <Loading />;

  const totalPages = data?.meta.pagination.pageCount ?? 0;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold py-4">Paginated page</h1>
      {data?.data.map((item: Item) => (
        <ResourceCard key={item.id} item={item} />
      ))}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />

      {isFetching && <p>...</p>}
    </div>
  );
}
