"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  User,
  Clock,
  Globe,
  Check,
  Star,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

const details = [
  { icon: User, label: "形式", value: "一對一面授" },
  { icon: Globe, label: "語言", value: "廣東話" },
  { icon: Clock, label: "每堂", value: "90 分鐘" },
];

const tiers = [
  {
    name: "體驗課",
    price: "$450",
    unit: "/ 堂",
    highlight: true,
    badge: "推薦入門",
    description: "試一堂先，鍾意再補三堂完成課程",
    features: [
      "手把手開設 AI 付費帳號",
      "長期安全使用嘅方法",
      "認識唔同 AI 工具嘅分別",
      "完成即帶走可用帳號",
    ],
    cta: "預約體驗課",
  },
  {
    name: "四堂套餐",
    price: "$1,800",
    unit: "/ 4 堂",
    highlight: false,
    description: "有系統學習，完成自己嘅工具",
    features: [
      "包括四個單元嘅核心內容",
      "喺導師輔助下完成一個作品",
      "體驗課後補三堂就得",
      "學識自己解決問題",
    ],
    cta: "查詢套餐價",
  },
];

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        {/* Founding member banner */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="mb-1 text-lg font-bold">
                首批學員限定
              </p>
              <p className="text-sm text-muted-foreground">
                首批學員會得到導師最密切嘅指導同特別優惠。名額有限，額滿即止。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mb-4 text-center text-sm font-medium tracking-widest uppercase text-primary">
            開始學習
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            準備好用 AI 解決你嘅問題？
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <d.icon className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  <span className="text-muted-foreground">{d.label}：</span>
                  <span className="font-medium">{d.value}</span>
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing tiers */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 mx-auto max-w-2xl">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={0.1 * i}>
              <div
                className={`card-glow relative flex h-full flex-col rounded-xl border p-6 ${
                  tier.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    {tier.badge}
                  </span>
                )}
                <h3 className="mb-1 text-xl font-bold">{tier.name}</h3>
                <p className="mb-1 text-2xl font-bold text-primary">
                  {tier.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}{tier.unit}
                  </span>
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                <ul className="mb-6 space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlight ? "default" : "outline"}
                  className={`mt-auto w-full rounded-full ${
                    tier.highlight ? "glow" : ""
                  }`}
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.cta}
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Direct contact */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              想了解更多？直接 message 我傾吓
            </p>
            <Button
              size="lg"
              className="glow h-14 rounded-full px-10 text-base font-semibold"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp 查詢
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border px-6 pt-8 text-center text-sm text-muted-foreground">
        <p>呢個網站用 AI 寫出嚟，正正就係課程會教嘅嘢</p>
      </div>
    </section>
  );
}
