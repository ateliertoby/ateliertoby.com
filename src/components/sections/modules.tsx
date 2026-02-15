"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Sparkles,
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
      "手把手教你喺香港以月費訂閱各個 AI 帳號。導師已親身試驗多種方法，保證可以長期安全使用。同時認識唔同 AI 嘅能力同收費，揀到最啱自己嘅方案。",
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
      "綜合網絡上常見中伏個案，結合導師自身經驗，幫你上路時避開新手地雷，安全咁完成第一個工具。學識喺安全環境入面做實驗——隨便試、隨便錯，都唔會壞。",
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
      "認識 AI 點樣理解人類語言，結合語言學同心理學嘅知識，從底層邏輯解構點樣同 AI 有效溝通。呢啲係導師兩年重度使用後提煉出嘅內功心法，著重長青基本概念——唔怕 AI 版本更新。",
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
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
            全程用廣東話，唔使識英文。AI 會幫你處理所有英文嘅部分。
            學完基礎之後，你已經有能力自己繼續探索。
          </p>
        </ScrollReveal>

        {/* Trial lesson highlight */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="mb-1 text-sm font-medium text-primary">
                  首堂體驗課
                </p>
                <h3 className="mb-2 text-xl font-bold">
                  手把手幫你開好 AI 帳號
                </h3>
                <p className="text-muted-foreground">
                  體驗課會教你點樣喺香港安全開設 Claude 同 ChatGPT
                  嘅付費帳號。完成之後你即刻帶走可以長期使用嘅帳號——就算唔繼續上堂，呢個已經值回票價。
                </p>
              </div>
              <div className="shrink-0">
                <div className="rounded-lg bg-card px-4 py-3 text-center">
                  <p className="text-xs text-muted-foreground">完成即帶走</p>
                  <p className="text-sm font-bold">
                    可長期使用嘅 AI 帳號
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Module cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.number} delay={0.1 * i}>
              <div className="card-glow group relative flex h-full flex-col rounded-xl border border-border bg-card p-8">
                <span className="mb-6 text-5xl font-bold text-border">
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
                  <p className="font-medium">每堂 90 分鐘</p>
                  <p className="text-sm text-muted-foreground">可連上兩堂</p>
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
                喺導師輔助下，你會用廣東話指揮 AI
                完成一個完全為自己度身訂造嘅工具。
                完成課程時，你已具備解決問題嘅基礎思維，往後可以自行向
                AI 尋求答案。
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
