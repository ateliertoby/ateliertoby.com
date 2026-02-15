"use client";

import { useState, useCallback, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TypingEffect } from "@/components/typing-effect";
import { X, Check, User, Bot, Globe } from "lucide-react";

const badPrompt = "幫我寫個網站";

const badReply =
  "好的！你想要咩網站呢？可以提供多啲資料嗎？例如你想要咩功能、咩設計風格？有冇參考網站？用咩程式語言？需要數據庫嗎？...";

const goodPrompt =
  "我開咗間車房，想整一個網頁俾客人自己 book 時間嚟整車。要有我啲服務清單同價錢，book 完自動 send 個 WhatsApp 俾我確認。手機睇都要靚。";

const goodReply =
  "明白！我幫你整一個車房預約網頁。會包含：服務清單連價目表、日曆俾客人揀時間、確認後自動發 WhatsApp 通知你、手機版面自動適配。而家開始幫你建立...";

function ChatBubble({
  role,
  children,
  align,
}: {
  role: "user" | "ai";
  children: React.ReactNode;
  align: "right" | "left";
}) {
  return (
    <div
      className={`flex items-start gap-2.5 ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          role === "user"
            ? "bg-primary/15 text-primary"
            : "bg-secondary text-muted-foreground"
        }`}
      >
        {role === "user" ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          role === "user"
            ? "bg-primary/10 text-foreground"
            : "bg-secondary text-muted-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function DemoColumn({
  type,
  label,
  labelIcon: LabelIcon,
  promptText,
  replyText,
  started,
  onTypingDone,
}: {
  type: "bad" | "good";
  label: string;
  labelIcon: typeof X;
  promptText: string;
  replyText: string;
  started: boolean;
  onTypingDone: () => void;
}) {
  const [showReply, setShowReply] = useState(false);

  const handleComplete = useCallback(() => {
    setShowReply(true);
    onTypingDone();
  }, [onTypingDone]);

  const labelColor = type === "bad" ? "text-muted-foreground" : "text-primary";

  return (
    <div>
      <div className={`mb-4 flex items-center gap-2 ${labelColor}`}>
        <LabelIcon className="h-4 w-4" />
        <span className="text-sm font-medium">{label}</span>
      </div>

      <div className="space-y-3 rounded-xl border border-border bg-card p-4 sm:p-5">
        <ChatBubble role="user" align="right">
          {started ? (
            <TypingEffect
              text={promptText}
              speed={25}
              onComplete={handleComplete}
            />
          ) : (
            <span className="cursor-blink text-primary">|</span>
          )}
        </ChatBubble>

        {showReply && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ChatBubble role="ai" align="left">
              {replyText}
            </ChatBubble>
          </motion.div>
        )}
      </div>

      {/* Product preview for good prompt */}
      {type === "good" && showReply && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 overflow-hidden rounded-xl border border-primary/20"
        >
          <div className="flex items-center gap-1.5 bg-primary/5 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            <span className="ml-2 text-xs text-muted-foreground">
              預覽：你嘅車房預約網頁
            </span>
          </div>
          <div className="space-y-2.5 bg-card/50 p-4">
            <div className="h-5 w-2/3 rounded bg-primary/15" />
            <div className="flex gap-2">
              <div className="h-8 flex-1 rounded bg-secondary" />
              <div className="h-8 flex-1 rounded bg-secondary" />
              <div className="h-8 flex-1 rounded bg-secondary" />
            </div>
            <div className="h-16 rounded bg-secondary" />
            <div className="mx-auto h-8 w-1/3 rounded-full bg-primary/20" />
          </div>
          <div className="bg-primary/5 px-4 py-2 text-center">
            <p className="text-xs font-medium text-primary">
              幾分鐘後，AI 已經幫你整好一個可以用嘅預約網頁
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function PromptDemo() {
  const [badDone, setBadDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32" id="demo">
      <div className="mx-auto max-w-5xl px-6" ref={ref}>
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            效果示範
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            同一個 AI，
            <span className="text-primary">識問同唔識問</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            你唔使學任何專業術語。用你平時講嘢嘅方式，清楚描述你想要咩，AI
            就識做。呢個就係課程教你嘅核心技能。
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.2}>
            <DemoColumn
              type="bad"
              label="未學過"
              labelIcon={X}
              promptText={badPrompt}
              replyText={badReply}
              started={isInView}
              onTypingDone={() => setBadDone(true)}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <DemoColumn
              type="good"
              label="學過之後"
              labelIcon={Check}
              promptText={goodPrompt}
              replyText={goodReply}
              started={badDone}
              onTypingDone={() => {}}
            />
          </ScrollReveal>
        </div>

        {/* English error handling callout */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
            <Globe className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="mb-1 font-semibold">
                「AI 回覆英文我睇唔明點算？」
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                你只需要話：「用廣東話解釋呢個錯誤，同埋教我一步步點修正。」AI
                就會用你嘅語言幫你解決。課堂上導師會教你呢啲實用技巧，確保你任何時候都唔會卡住。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            注意：「學過之後」嘅 prompt 全部都係日常廣東話，冇任何技術用語。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
