"use client";

import Link from "next/link";

type Props = {
  item: {
    id: number | string;
    title: string;
    slug: string;
  };
};

export default function ResourceCard({ item }: Props) {
  return (
    <Link
      href={`/details/${item.slug}`}
      className="group block rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300"
    >
      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h2>
    </Link>
  );
}
