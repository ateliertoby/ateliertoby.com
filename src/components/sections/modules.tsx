"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Settings,
  Shield,
  MessageSquare,
  Rocket,
  Check,
  MapPin,
  Clock,
  Monitor,
  CalendarDays,
} from "lucide-react";

const modules = [
  {
    icon: Settings,
    number: "01",
    title: "設置",
    description:
      "喺香港以月費訂閱各個 AI 帳號，認識唔同 AI 嘅能力同收費，揀到最啱自己嘅方案。",
    highlights: [
      "香港實測可行嘅開戶方法",
      "認識唔同 AI 嘅能力同收費",
      "點樣揀最啱自己嘅方案",
    ],
  },
  {
    icon: Shield,
    number: "02",
    title: "安全意識",
    description:
      "收集咗網上同導師親身經歷嘅中伏個案，幫你避開新手地雷。喺安全環境入面做實驗，隨便試、隨便錯，點搞都唔會壞。",
    highlights: [
      "真實中伏個案分享",
      "安全環境概念：點搞都唔會壞",
      "養成好習慣，避開常見地雷",
    ],
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "同 AI 有效溝通",
    description:
      "了解 AI 點樣理解人話，學識點樣同 AI 有效溝通。呢啲係導師兩年實戰提煉出嚟嘅心法，教嘅係長青基本功，唔怕 AI 版本更新。",
    highlights: [
      "AI 理解語言嘅底層邏輯",
      "兩年實戰提煉嘅內功心法",
      "長青概念，唔怕版本更新",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "部署上線",
    description:
      "導師親身幫你將成品部署上線。唔使盲摸摸唔知要撳咩掣、upload 啲咩檔案。由「寫完」到「用得到」，呢一步有人帶住行。",
    highlights: [
      "導師親身幫你上線",
      "網站、App 唔同部署方式",
      "由寫完到真正用得到",
    ],
  },
];

export function Modules() {
  return (
    <section className="relative py-24 sm:py-32" id="modules">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            課程結構
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            由零基礎到自己做出成品
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            全程用廣東話，唔使識英文。AI 會幫你處理所有英文嘅部分。
            學完基礎之後，自己都識繼續摸索。
          </p>
        </ScrollReveal>

        {/* Module cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.number} delay={0.1 * i}>
              <div className="card-glow group relative flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-8">
                <span className="mb-4 text-4xl font-bold text-border sm:mb-6 sm:text-5xl">
                  {mod.number}
                </span>

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <mod.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{mod.title}</h3>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>

                <ul className="mt-auto space-y-2">
                  {mod.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Course specs */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-5 text-sm font-medium tracking-widest uppercase text-primary">
              課程規格
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">灣仔工作室</p>
                  <p className="text-sm text-muted-foreground">實體面授</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">每堂 60 分鐘</p>
                  <p className="text-sm text-muted-foreground">按情況可接受二人同行</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">時間彈性預約</p>
                  <p className="text-sm text-muted-foreground">配合你嘅時間</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Monitor className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">自備電腦為佳</p>
                  <p className="text-sm text-muted-foreground">導師有舊 MacBook 可借用</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Course outcome */}
        <ScrollReveal delay={0.35}>
          <div className="mt-6 rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-lg">
              <span className="font-semibold">課程目標：</span>
              <span className="text-muted-foreground">
                喺導師幫助下，你會用廣東話指揮 AI
                完成一個為自己度身訂造嘅工具。上完堂之後，你已經識得自己問
                AI 搵答案。
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
