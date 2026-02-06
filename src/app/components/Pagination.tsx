"use client";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: Props) {
  return (
    <div className="flex justify-center gap-2 pt-10 flex-wrap">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNumber = i + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => onChange(pageNumber)}
            className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
              currentPage === pageNumber
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
