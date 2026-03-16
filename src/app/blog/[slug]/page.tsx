import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Navbar } from "@/components/sections/navbar";
import { Markdown } from "@/components/blog/markdown";
import { readingTime } from "@/lib/reading-time";
import { SITE_URL } from "@/lib/config";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug, status: "published" },
  });

  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("zh-HK", { year: "numeric", month: "long", day: "numeric" })
    : "";
  const minutes = readingTime(post.content);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <header className="mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>{date}</span>
            <span>·</span>
            <span>{minutes} min read</span>
          </div>
        </header>
        <Markdown content={post.content} />
      </main>
    </>
  );
}
