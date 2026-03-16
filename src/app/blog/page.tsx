import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { PostCard } from "@/components/blog/post-card";
import { Navbar } from "@/components/sections/navbar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Atelier Toby",
  description: "Toby 嘅技術分享、開發日記、AI 觀點。",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-2 text-muted-foreground">思考、開發、分享。</p>

        <div className="mt-10 flex flex-col gap-6">
          {posts.length === 0 && (
            <p className="text-muted-foreground">暫時未有文章。</p>
          )}
          {posts.map((post) => (
            <PostCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </main>
    </>
  );
}
