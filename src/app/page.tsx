import Link from "next/link";
import { prisma } from "@/lib/db";
import { Navbar } from "@/components/sections/navbar";
import { PostCard } from "@/components/blog/post-card";
import { Footer } from "@/components/footer";

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
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 text-center sm:min-h-[70vh]">
          <div className="bg-hero-pattern absolute inset-0 -z-10 opacity-10" />
          <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl">
            Atelier <span className="text-primary">Toby</span>
          </h1>
          <p className="mt-6 max-w-xl border-2 border-black bg-yellow-400 px-3 py-1.5 text-xl font-bold text-black shadow-[4px_4px_0px_#000000]">
            Tech、AI、開發日記。由第一性原理出發。
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/blog"
              className="inline-flex h-12 items-center border-4 border-black bg-pink-500 px-8 font-bold text-white shadow-[4px_4px_0px_#000000] transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Blog
            </Link>
            <Link
              href="/courses"
              className="inline-flex h-12 items-center border-4 border-black bg-white px-8 font-bold text-black shadow-[4px_4px_0px_#000000] transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Courses
            </Link>
          </div>
        </section>

        {/* Latest Posts */}
        {posts.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="flex items-center gap-3 text-3xl font-black uppercase tracking-tight">
              <span className="inline-block h-8 w-8 border-4 border-black bg-primary" />
              最新文章
            </h2>
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
              className="mt-8 inline-block border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_#000000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              睇全部文章 →
            </Link>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
