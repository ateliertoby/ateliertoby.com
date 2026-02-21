"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "我完全唔識 coding，真係學得到？",
    a: "本課程就係專門為零經驗嘅人設計。你唔需要任何技術背景，全程有導師一對一陪住你，從開帳號到完成作品。",
  },
  {
    q: "我英文唔好，寫 code 唔使英文咩？",
    a: "你用廣東話同 AI 溝通就得，AI 會幫你處理所有英文嘅部分。就算 AI 回覆英文或者出現錯誤訊息，你只需要話「用廣東話解釋」，AI 就會用你嘅語言教你。課堂上導師亦會教你呢啲實用技巧。",
  },
  {
    q: "除咗學費，仲有冇其他費用？",
    a: "需要訂閱付費 AI 工具。免費帳號嘅額度絕對無法滿足實際工作需要。性價比較高嘅方案係分別訂閱 Claude 同 ChatGPT 嘅 US$20 月費 plan，兩個合共每月大約 HK$400。導師會喺課堂上幫你揀最適合嘅方案。",
  },
  {
    q: "我需要咩電腦？iPad 得唔得？",
    a: "iPad 暫時仲未適合做編程，最起碼需要一部 MacBook 或者 Windows 手提電腦。如果你暫時未有電腦，導師有舊 MacBook 可以喺課堂時借用，等你親身體驗 AI 編程嘅威力後再決定係咪投資。導師亦會根據你嘅實際需要一齊分析。",
  },
  {
    q: "AI 成日更新，學完會唔會好快過時？",
    a: "課程教嘅係「內功心法」— 點樣思考問題、點樣同 AI 溝通嘅底層邏輯。呢啲基本功唔會因為 AI 版本更新而過時。就好似學識揸車之後，換新車都識揸。",
  },
  {
    q: "上完體驗課可以唔繼續嗎？",
    a: "完全可以。體驗課獨立收費，完成之後你已經帶走可長期使用嘅 AI 帳號。之後想繼續學先再報名，零壓力。",
  },
  {
    q: "上完課之後有問題點算？",
    a: "你可以隨時預約單堂跟進。但更重要嘅係，課程嘅目標就係教你識得自己向 AI 問問題同搵答案，畢業之後你已經有呢個能力。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 rounded-lg px-2 py-5 text-left transition-colors hover:bg-muted/50 sm:px-4"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-2 pb-5 leading-relaxed text-muted-foreground sm:px-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="relative py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            常見問題
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            你可能會想知
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
