"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Clock, Image as ImageIcon, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "機場接送預約平台",
    description:
      "客人自己揀時間同路線、自動付款、老闆自動收到 WhatsApp 通知。成個系統全自動運行。",
    time: "2 日",
    traditional: "外判開發報價 $50,000+",
    type: "網頁應用",
    alt: "使用 AI 製作的機場接送預約系統介面，顯示路線選擇和付款功能",
  },
  {
    title: "供應商格價工具",
    description:
      "自動對比唔同供應商嘅價格，圖表化顯示趨勢，幫助做入貨決策。原本要花半日人手格價。",
    time: "3 小時",
    traditional: "人手每次花半日",
    type: "桌面工具",
    alt: "使用 AI 製作的供應商格價工具介面，顯示價格趨勢圖表",
  },
  {
    title: "鋼琴調音助手",
    description:
      "手機 App，實時偵測音準，幫助調音師更有效率咁工作。直接裝喺自己手機用。",
    time: "1 日",
    traditional: "搵人開發 $20,000+",
    type: "手機 App",
    alt: "使用 AI 製作的鋼琴調音 iOS App 介面，顯示實時頻率偵測",
  },
];

export function Portfolio() {
  return (
    <section className="relative py-24 sm:py-32" id="portfolio">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            導師作品
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            呢啲工具，全部用 AI 做出嚟
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            以下係導師用 AI 輔助製作嘅真實項目。留意開發時間同傳統成本嘅對比。
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i}>
              <div className="card-glow group flex h-full flex-col rounded-xl border border-border bg-card">
                {/* Screenshot placeholder — replace with next/image when screenshots are ready */}
                <div
                  className="relative flex h-44 items-center justify-center rounded-t-xl bg-secondary"
                  role="img"
                  aria-label={project.alt}
                >
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  <span className="absolute top-3 right-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Clock className="h-3.5 w-3.5" />
                      AI 開發時間：{project.time}
                    </div>
                    <p className="text-xs text-muted-foreground line-through">
                      {project.traditional}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            學員完成課程後，你嘅作品都會出現喺度。
          </p>
        </ScrollReveal>

        {/* Inline CTA after portfolio */}
        <ScrollReveal delay={0.45}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-lg font-bold">想自己都做到呢啲？</p>
              <p className="text-sm text-muted-foreground">
                由零基礎開始，導師手把手教你用 AI 完成自己嘅工具。
              </p>
            </div>
            <Button
              size="lg"
              className="glow shrink-0 rounded-full px-8"
              asChild
            >
              <a href="#contact">
                了解課程
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
