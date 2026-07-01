import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { readingTime } from "@/lib/reading-time";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on tech, AI, and building from first principles.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <EntranceObserver />
      <SiteNav />
      <main>
        {/* Scene 1 — Page Header */}
        <header className="entrance corridor pt-[calc(var(--spacing-section)*1.5)] pb-[var(--spacing-section)]">
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            Blog
          </h1>
          <p className="mt-3 text-[var(--text-muted)]">
            Thinking, building, sharing.
          </p>
        </header>

        {/* Scene 2 — Post List (The Bus Route) */}
        <section className="corridor pb-[var(--spacing-section)]">
          {posts.length === 0 && (
            <p className="text-[var(--text-muted)]">Nothing here yet.</p>
          )}
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="entrance-stagger group block border-b border-[var(--border)] py-[var(--spacing-element)] no-underline transition-colors duration-500 first:border-t hover:bg-[var(--bg-surface)]"
                data-index={i}
              >
                <span className="block font-mono text-xs tracking-[0.05em] text-[var(--text-muted)]">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                  {" \u00b7 "}
                  {readingTime(post.content)} min read
                </span>
                <span className="mt-1 block font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.3] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
