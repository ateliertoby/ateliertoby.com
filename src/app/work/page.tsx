import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";

export const metadata: Metadata = {
  title: "Work",
  description: "Things I've built — tools, experiments, and products.",
};

/*
  Add your projects here. Each entry:
  - name: project name
  - description: one-liner
  - stack: tech used (optional)
  - url: link to the project (optional)
  - status: "live" | "building" | "archived" (optional)
*/
const projects: {
  name: string;
  description: string;
  stack?: string;
  url?: string;
  status?: "live" | "building" | "archived";
}[] = [
  {
    name: "Ride Dispatch",
    description:
      "Telegram bot that parses WeChat airport ride orders into structured records, with a mobile dashboard for daily revenue and cost tracking.",
    stack: "Python, Telegram Bot API, SQLite, Flask",
    url: "https://github.com/ateliertoby/ride-dispatch",
    status: "live",
  },
];

export default function WorkPage() {
  return (
    <>
      <EntranceObserver />
      <SiteNav />
      <main>
        <header className="entrance corridor pt-[calc(var(--spacing-section)*1.5)] pb-[var(--spacing-section)]">
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            Work
          </h1>
          <p className="mt-3 text-[var(--text-muted)]">
            Things I&apos;ve built.
          </p>
        </header>

        <section className="corridor pb-[var(--spacing-section)]">
          {projects.length === 0 ? (
            <p className="text-[var(--text-muted)] italic">
              Something is coming. Check back soon.
            </p>
          ) : (
            <div className="flex flex-col">
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className="entrance-stagger border-b border-[var(--border)] py-[var(--spacing-element)] first:border-t"
                  data-index={i}
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-underline font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.3] text-[var(--text)] no-underline transition-colors duration-300 hover:text-[var(--accent)]"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="font-serif text-[clamp(1.125rem,2vw,1.375rem)] font-normal leading-[1.3]">
                        {project.name}
                      </span>
                    )}
                    {project.status && (
                      <span className="font-mono text-xs tracking-[0.05em] text-[var(--accent)]">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[var(--text-muted)] leading-[1.6]">
                    {project.description}
                  </p>
                  {project.stack && (
                    <p className="mt-1.5 font-mono text-xs tracking-[0.05em] text-[var(--text-muted)] opacity-70">
                      {project.stack}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
