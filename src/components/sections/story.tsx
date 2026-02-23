"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Camera,
  Wrench,
  Music,
  ShoppingBag,
} from "lucide-react";

const painPoints = [
  {
    icon: Camera,
    role: "自媒體經營者",
    pain: "每日手動整理素材、排程發佈，重複又費時",
    solution: "一個自動整理 + 排程嘅小工具",
    saved: "每星期慳返 5 小時",
  },
  {
    icon: Wrench,
    role: "汽車維修師傅",
    pain: "客戶預約同報價全靠 WhatsApp 逐個覆",
    solution: "一個客人自助預約嘅網頁",
    saved: "唔使再做人肉接線生",
  },
  {
    icon: Music,
    role: "音樂教師",
    pain: "學生排課、收費、出席記錄全部人手做",
    solution: "一個簡單嘅管理工具",
    saved: "行政時間減半",
  },
  {
    icon: ShoppingBag,
    role: "網店老闆",
    pain: "每次入貨都要逐間供應商格價",
    solution: "一個自動格價程式",
    saved: "幾秒鐘搞掂原本半日嘅嘢",
  },
];

export function Story() {
  return (
    <section className="relative py-24 sm:py-32" id="story">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            點解開呢個課程
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            好多生意痛點，
            <span className="text-primary">其實好簡單就解決到</span>
          </h2>
        </ScrollReveal>

        <div className="mb-16 grid gap-8 lg:grid-cols-5">
          {/* Story text */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                我做過軟件 QA
                工程師，後來自己做生意，開過餐廳、做過跨國貿易。創業路上認識咗好多同樣一個人撐起成盤生意嘅老闆。
              </p>
              <p>
                了解過佢哋嘅日常工作之後，我發現好多好頭痕嘅問題，其實只需要一啲好簡單嘅程式就可以解決。但市場上唔會有人為咁小嘅需求專登開發工具，搵人寫又貴。
              </p>
              <p className="font-medium text-foreground">
                而家有咗
                AI，呢啲工具你可以自己做。我教嘅唔係某一件工具嘅用法，而係解決問題嘅能力。無論將來
                AI 點樣更新，呢套方法都終身受用。
              </p>
            </div>
          </ScrollReveal>

          {/* Instructor card */}
          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <div className="card-glow rounded-xl border border-border bg-card p-6">
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/toby-sketch.png"
                  alt="Toby — 課程導師"
                  fill
                  className="object-cover" style={{ objectPosition: "center 15%" }}
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
              </div>
              <h3 className="mb-1 text-lg font-bold">Toby</h3>
              <p className="mb-3 text-sm text-primary">課程導師</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>前軟件 QA 工程師</li>
                <li>餐廳老闆 / 跨國貿易經驗</li>
                <li>兩年 AI 重度使用者</li>
              </ul>
              {/* LinkedIn / GitHub placeholder */}
              {/* <a href="#" className="mt-3 inline-block text-sm text-primary hover:underline">LinkedIn &rarr;</a> */}
            </div>
          </ScrollReveal>
        </div>

        {/* Industry pain points */}
        <ScrollReveal>
          <p className="mb-6 text-lg font-semibold">
            佢哋嘅痛點，可能你都有：
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((item, i) => (
            <ScrollReveal key={item.role} delay={0.1 * i}>
              <div className="card-glow flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="mb-1 font-semibold">{item.role}</p>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {item.pain}
                  </p>
                  <p className="mb-1 text-sm font-medium text-foreground">
                    &rarr; {item.solution}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {item.saved}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
