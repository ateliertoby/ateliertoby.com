"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  HelpCircle,
  Clock,
  CircleOff,
  MessageSquare,
  Zap,
  Compass,
} from "lucide-react";

const comparisons = [
  {
    withoutIcon: HelpCircle,
    withoutTitle: "唔知問咗啲咩",
    withoutDesc: "AI 答錯你都唔知，以為係正確答案就照用",
    withIcon: MessageSquare,
    withTitle: "學識點問",
    withDesc: "AI 答得準，你識得判斷回答嘅質素",
  },
  {
    withoutIcon: Clock,
    withoutTitle: "改完又改，浪費時間",
    withoutDesc: "做完一版唔啱，又重頭嚟過，來來回回好費時",
    withIcon: Zap,
    withTitle: "一步到位",
    withDesc: "第一次就描述清楚，慳時間慳精力",
  },
  {
    withoutIcon: CircleOff,
    withoutTitle: "做完唔知點上線",
    withoutDesc: "工具寫好咗但唔知點樣俾人用到，卡喺最後一步",
    withIcon: Compass,
    withTitle: "由寫到部署一條龍",
    withDesc: "導師帶住你完成最後一步，真正用到",
  },
];

export function Pitfalls() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            有導師同冇導師嘅分別
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            自己摸索 vs 有人帶路
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            AI 工具人人都可以用，但用得好唔好，差別好大。
            有經驗嘅人帶住你行，可以少走好多冤枉路。
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((item, i) => (
            <ScrollReveal key={item.withTitle} delay={0.1 * i}>
              <div className="card-glow overflow-hidden rounded-xl border border-border">
                {/* Without instructor */}
                <div className="border-b border-border bg-card p-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    自己摸索
                  </p>
                  <div className="flex items-start gap-3">
                    <item.withoutIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="mb-1 font-semibold text-muted-foreground">
                        {item.withoutTitle}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        {item.withoutDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* With instructor */}
                <div className="bg-primary/5 p-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                    有導師帶路
                  </p>
                  <div className="flex items-start gap-3">
                    <item.withIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="mb-1 font-semibold">{item.withTitle}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.withDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
