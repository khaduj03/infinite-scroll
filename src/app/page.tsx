"use client";

import { useState } from "react";
import InfiniteList from "./components/InfiniteList";
import PaginatedList from "./components/PaginatedList";

export default function Home() {
  const [isInfinite, setIsInfinite] = useState(true);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setIsInfinite(true)}
          className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition
            ${
              isInfinite
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
        >
          Infinite Scroll
        </button>

        <button
          onClick={() => setIsInfinite(false)}
          className={`px-5  py-2 cursor-pointer rounded-full text-sm font-medium transition
            ${
              !isInfinite
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
        >
          Page by Page
        </button>
      </div>

      {/* Content */}
      <section className="w-full max-w-4xl">
        {isInfinite ? <InfiniteList /> : <PaginatedList />}
      </section>
    </main>
  );
}
