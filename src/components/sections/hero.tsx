"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="bg-hero-pattern absolute inset-0 opacity-30" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, color-mix(in oklch, var(--glow-color) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm font-medium tracking-widest uppercase text-primary"
        >
          一對一面授指導 &middot; 灣仔工作室 &middot; 廣東話授課
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gradient mb-8 text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          唔使請 Programmer
          <br />
          自己用 AI 就搞得掂
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          用你熟悉嘅廣東話指揮 AI，寫出專屬你業務嘅工具。
          <br className="hidden sm:block" />
          唔使識英文，唔使識 coding，導師全程陪你由零到成品。
        </motion.p>

        {/* Trial lesson highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mx-auto mb-10 max-w-md"
        >
          <div className="flex items-center justify-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-3">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm">
              <span className="font-semibold">體驗課即帶走</span>
              <span className="text-muted-foreground">
                {" "}— 香港可長期安全使用嘅 AI 付費帳號
              </span>
            </p>
          </div>
        </motion.div>

        {/* Cost/Time comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mx-auto mb-12 flex max-w-lg flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <div className="flex-1 rounded-xl border border-border bg-card/50 p-4 text-center">
            <p className="mb-1 text-xs text-muted-foreground">傳統做法</p>
            <p className="text-lg font-bold text-muted-foreground line-through">
              外判開發數萬蚊
            </p>
            <p className="text-xs text-muted-foreground">等幾個月先交貨</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="hidden h-5 w-5 rotate-0 text-primary sm:block" />
            <ArrowDown className="h-5 w-5 text-primary sm:hidden" />
          </div>
          <div className="flex-1 rounded-xl border border-primary/30 bg-primary/5 p-4 text-center">
            <p className="mb-1 text-xs text-primary">上完課之後</p>
            <p className="text-lg font-bold">自己幾日搞掂</p>
            <p className="text-xs text-muted-foreground">$0 開發費，隨時修改</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="glow h-14 rounded-full px-10 text-base font-semibold transition-all"
            asChild
          >
            <a href="#contact">免費了解課程</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 rounded-full px-10 text-base"
            asChild
          >
            <a href="#modules">睇吓學啲咩</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
