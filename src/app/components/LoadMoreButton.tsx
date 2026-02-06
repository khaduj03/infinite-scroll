"use client";

type Props = {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
  hasNextPage: boolean;
};

export default function LoadMoreButton({
  onClick,
  disabled,
  loading,
  hasNextPage,
}: Props) {
  return (
    <div className="flex justify-center pt-10">
      <button
        onClick={onClick}
        disabled={disabled}
        className="rounded-full bg-blue-600 px-6 py-2 text-base text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        {loading
          ? "Loading more..."
          : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
      </button>
    </div>
  );
}
