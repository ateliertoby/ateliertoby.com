import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { readingTime } from "@/lib/reading-time";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";
import { SubscribeForm } from "@/components/subscribe-form";

export const revalidate = 3600;

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    take: 5,
  });

  const featured = posts[0];
  const recent = posts.slice(1);

  return (
    <>
      <EntranceObserver />
      <SiteNav />
      <main>
        {/* Scene 1 — Hero: The Notebook Opening */}
        <section className="entrance corridor relative flex min-h-[60vh] flex-col justify-end pb-[calc(var(--spacing-section)*1.5)] pt-[var(--spacing-section)]">
          {/* Visual element #10: printer's cross mark */}
          <div className="absolute right-[var(--px-corridor)] top-8 h-[10px] w-[10px]" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--border)]" />
            <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--border)]" />
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            Atelier Toby
          </h1>
          <p className="mt-6 max-w-[50ch] text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.3] text-[var(--text-muted)]">
            Tech, AI, and dev diary. From first principles.
          </p>
        </section>

        {/* Pillow shot — the notebook by the window */}
        <div className="corridor py-[var(--spacing-block)]">
          <Image
            src="/images/hero.png"
            alt="A notebook open on a desk by a window, bathed in warm afternoon light"
            width={1920}
            height={1080}
            className="w-full rounded-[4px] opacity-90"
            priority
          />
        </div>

        {/* Scene 2 — Divider */}
        <hr className="section-divider corridor" />

        {/* Scene 3 — Featured Post (The Encounter) */}
        {featured && (
          <section className="entrance-wipe corridor py-[var(--spacing-section)]">
            {featured.excerpt && (
              <blockquote className="mb-[var(--spacing-block)] border-l-2 border-[var(--border-strong)] pl-6 font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] italic leading-[1.6] text-[var(--text)]">
                {featured.excerpt}
              </blockquote>
            )}
            <div>
              <Link
                href={`/blog/${featured.slug}`}
                className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-[1.3] text-[var(--text)] no-underline transition-colors duration-300 hover:text-[var(--accent)]"
              >
                {featured.title}
              </Link>
              <span className="mt-2 block font-mono text-xs tracking-[0.05em] text-[var(--text-muted)]">
                {featured.publishedAt
                  ? new Date(featured.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
                {" \u00b7 "}
                {readingTime(featured.content)} min read
              </span>
            </div>
          </section>
        )}

        {/* Scene 4 — Recent Posts (The Bus Route) */}
        {recent.length > 0 && (
          <section className="corridor pb-[var(--spacing-section)]">
            <h2 className="mb-[var(--spacing-block)] text-sm font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Recent
            </h2>
            <div className="flex flex-col">
              {recent.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="entrance-stagger group block border-b border-[var(--border)] py-[var(--spacing-element)] no-underline transition-colors duration-500 first:border-t hover:bg-[var(--bg-surface)]"
                  data-index={i}
                >
                  <span className="font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.3] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {post.title}
                  </span>
                  <span className="mt-1 block font-mono text-xs tracking-[0.05em] text-[var(--text-muted)]">
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
                  {post.excerpt && (
                    <span className="mt-2 block text-sm leading-[1.6] text-[var(--text-muted)] line-clamp-2">
                      {post.excerpt}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              className="hover-underline mt-8 inline-block text-sm text-[var(--text-muted)] no-underline transition-colors duration-300 hover:text-[var(--text)]"
            >
              All posts &rarr;
            </Link>
          </section>
        )}

        {/* Scene 5 — Pull Quote (Laura's B&W Punctuation) */}
        <section className="corridor py-[var(--spacing-section)]">
          <div className="mb-[var(--spacing-block)] h-0.5 w-12 bg-[var(--border-strong)]" />
          <p className="max-w-[45ch] font-serif text-[clamp(1.5rem,3vw,2rem)] italic leading-[1.5] text-[var(--text)]">
            The best way to understand something is to build it yourself.
          </p>
        </section>

        {/* Scene 6 — Newsletter (The Invitation) */}
        <section className="entrance corridor py-[var(--spacing-section)]">
          <p className="mb-[var(--spacing-element)] text-[var(--text-muted)]">
            Want to follow along?
          </p>
          <SubscribeForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
