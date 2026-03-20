import Link from "next/link";
import { prisma } from "@/lib/db";
import { Navbar } from "@/components/sections/navbar";
import { PostCard } from "@/components/blog/post-card";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    take: 5,
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <div className="bg-hero-pattern absolute inset-0 -z-10 opacity-30" />
          {/* Decorative badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-border bg-primary-light/30 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider text-primary-deep">
            <span className="inline-block h-2 w-2 rounded-full bg-highlight" />
            BUILDER · EDUCATOR · DEVELOPER
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Atelier <span className="text-primary">Toby</span>
          </h1>
          <div className="mt-4 flex items-center gap-1.5">
            <div className="h-1 w-12 rounded-full bg-primary-deep" />
            <div className="h-1 w-8 rounded-full bg-primary" />
            <div className="h-1 w-5 rounded-full bg-primary-light" />
            <div className="h-1 w-3 rounded-full bg-highlight" />
          </div>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Tech、AI、開發日記。由第一性原理出發。
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/blog"
              className="glow inline-flex h-12 items-center rounded-full bg-primary px-8 font-semibold text-primary-foreground"
            >
              Blog
            </Link>
            <Link
              href="/courses"
              className="inline-flex h-12 items-center gap-2 rounded-full border-3 border-border bg-card px-8 font-semibold hover:bg-primary-light/20 transition-colors"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
              Courses
            </Link>
          </div>
        </section>

        {/* Latest Posts */}
        {posts.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 py-16">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <div className="h-8 w-1.5 rounded-full bg-primary-deep" />
                <div className="h-8 w-1.5 rounded-full bg-highlight" />
              </div>
              <h2 className="text-2xl font-bold">最新文章</h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
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
            <Link
              href="/blog"
              className="mt-8 inline-block text-sm font-mono text-primary hover:underline"
            >
              睇全部文章 →
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
