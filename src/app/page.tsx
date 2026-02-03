import { getPages } from "@/lib/apiClient";
import Image from "next/image";

export  default async function Home() {
  const data = await getPages()
  console.log("data from api", data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      test page
    </div>
  );
}
