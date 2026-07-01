import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";

export const metadata: Metadata = {
  title: "About",
  description: "About Toby — developer, educator, builder.",
};

export default function AboutPage() {
  return (
    <>
      <EntranceObserver />
      <SiteNav />
      <main>
        <section className="entrance corridor pt-[calc(var(--spacing-section)*1.5)] pb-[var(--spacing-section)]">
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            About
          </h1>
        </section>

        {/* Workspace photograph */}
        <div className="corridor pb-[var(--spacing-block)]">
          <Image
            src="/images/about.png"
            alt="A developer workspace with laptop, notebook, and warm desk lamp"
            width={1920}
            height={1280}
            className="w-full rounded-[4px] opacity-90"
          />
        </div>

        <section className="corridor pb-[var(--spacing-section)]">
          <div className="max-w-[55ch] space-y-6 text-[1.125rem] leading-[1.8] text-[var(--text)]">
            <p>
              I&apos;m Toby. Developer, educator, and builder based in Hong Kong.
            </p>
            <p>
              I teach people how to code with AI, and I use AI to build my own
              tools. This site is where I write about the process &mdash; the
              ideas, the experiments, and the things I learn along the way.
            </p>
            <p>
              Everything here starts from first principles. I care about
              understanding how things work, not just making them work.
            </p>
          </div>
        </section>

        {/* Laura's punctuation moment */}
        <section className="corridor py-[var(--spacing-section)]">
          <div className="mb-[var(--spacing-block)] h-0.5 w-12 bg-[var(--border-strong)]" />
          <p className="max-w-[40ch] font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] italic leading-[1.5] text-[var(--text-muted)]">
            The best tools are built by people who need them.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
