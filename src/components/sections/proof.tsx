"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const stats = ["0 寫 code", "100% AI", "廣東話"];

export function Proof() {
  return (
    <section className="relative py-24 sm:py-32" id="proof">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            AI 實證
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            你而家睇緊嘅呢個網站
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            冇人手寫過一行 code，連文案都係 AI 出。
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat} delay={0.2 + i * 0.1}>
              <div className="card-glow rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-3xl font-black sm:text-4xl">
                  {stat}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="mt-10 text-center text-muted-foreground">
            由設計、文案、排版到部署，全部用廣東話指揮 AI
            完成。呢個就係課程教你做到嘅嘢。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
