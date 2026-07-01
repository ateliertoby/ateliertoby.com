import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Markdown } from "@/components/blog/markdown";
import { readingTime } from "@/lib/reading-time";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";
import { SITE_URL } from "@/lib/config";
import Link from "next/link";

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
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
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
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const minutes = readingTime(post.content);

  // Fetch related posts (latest 3 excluding current)
  const related = await prisma.post.findMany({
    where: { status: "published", slug: { not: slug } },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: { slug: true, title: true, publishedAt: true },
  });

  return (
    <>
      <EntranceObserver />
      <SiteNav />
      <main>
        {/* Scene 1 — Article Header */}
        <header className="entrance corridor pt-[calc(var(--spacing-section)*1.5)] pb-[var(--spacing-block)]">
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            {post.title}
          </h1>
          <div className="mt-4 flex items-baseline gap-3 font-mono text-xs tracking-[0.05em] text-[var(--text-muted)]">
            <span>{date}</span>
            <span className="text-[var(--border)]">&middot;</span>
            <span>{minutes} min read</span>
          </div>
        </header>

        {/* Scene 2 — Article Body */}
        <article className="corridor">
          <div className="prose-paterson">
            <Markdown content={post.content} />
          </div>
        </article>

        {/* Scene 3 — The Waterfall Pause */}
        <section className="entrance-slow corridor py-[calc(var(--spacing-section)*1.5)]">
          <div className="mb-[var(--spacing-block)] h-0.5 w-16 bg-[var(--border-strong)]" />
          {post.excerpt ? (
            <p className="max-w-[40ch] font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] italic leading-[1.5] text-[var(--text-muted)]">
              {post.excerpt}
            </p>
          ) : (
            <p className="max-w-[40ch] font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] italic leading-[1.5] text-[var(--text-muted)]">
              Thanks for reading.
            </p>
          )}
        </section>

        {/* Scene 4 — Related Posts */}
        {related.length > 0 && (
          <section className="corridor pb-[var(--spacing-section)]">
            <h2 className="mb-[var(--spacing-element)] text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
              More writing
            </h2>
            <div className="flex flex-col">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="entrance-stagger group block border-b border-[var(--border)] py-[var(--spacing-element)] no-underline transition-colors duration-500 first:border-t hover:bg-[var(--bg-surface)]"
                  data-index={i}
                >
                  <span className="block font-mono text-xs tracking-[0.05em] text-[var(--text-muted)]">
                    {r.publishedAt
                      ? new Date(r.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                  </span>
                  <span className="mt-1 block font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.3] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {r.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
