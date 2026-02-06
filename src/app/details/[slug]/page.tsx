import { getPageBySlug } from "@/lib/apiClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const data = await getPageBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold py-6 text-black">{data?.data[0].title}</h1>
      <div className="text-black"  dangerouslySetInnerHTML={{ __html: data?.data[0].content || "" }} />
    </div>
  );
}
