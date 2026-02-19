"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Play } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";
import { PortfolioModal } from "@/components/portfolio-modal";
import { BookingDemo } from "@/components/demos/booking-demo";
import { CarClinicDemo } from "@/components/demos/car-clinic-demo";
import { DriverEarningsDemo } from "@/components/demos/driver-earnings-demo";

const projects = [
  {
    title: "機場接送預約平台",
    description:
      "客人自己揀時間同路線、固定價錢一目了然、即時確認。成個預約流程全自動運行，唔使再逐個 WhatsApp 覆。",
    time: "2 日",
    traditional: "外判開發報價 $50,000+",
    type: "網頁應用",
    image: "/portfolio/hktransfer.png",
    alt: "HK Transfer 機場接送預約平台介面，顯示各區固定價錢同即時預約功能",
  },
  {
    title: "車房維修管理系統",
    description:
      "一眼睇晒今日工作台：待維修、診斷中、維修中、等零件。客戶車輛紀錄自動整理，告別紙筆同 Excel。",
    time: "3 日",
    traditional: "外判開發報價 $80,000+",
    type: "網頁應用",
    image: "/portfolio/car-clinic.png",
    alt: "Car Clinic 車房管理系統介面，顯示今日工作台同維修狀態追蹤",
  },
  {
    title: "司機接單記帳 App",
    description:
      "自動整合 Uber、宇宙等多平台收入，計算每單利潤、每日總結。司機唔使再自己逐單記。",
    time: "4 日",
    traditional: "搵人開發 $30,000+",
    type: "手機 App",
    image: "/portfolio/ledgerhud.png",
    alt: "LedgerHUD 司機記帳 App 介面，顯示時間線同當日利潤 HK$1,411.93",
  },
];

const demos = [BookingDemo, CarClinicDemo, DriverEarningsDemo];

export function Portfolio() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

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
            以下係導師用 AI 輔助製作嘅真實項目。撳入去睇互動示範。
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i}>
              <div
                className="card-glow group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card"
                role="button"
                tabIndex={0}
                onClick={() => setActiveDemo(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveDemo(i);
                  }
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="portfolio-scroll object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 z-10 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.type}
                  </span>
                  {/* Demo overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-all duration-300 group-hover:bg-background/60">
                    <div className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Play className="h-3.5 w-3.5" />
                      睇 Demo
                    </div>
                  </div>
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
          <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-5 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                了解課程
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Demo modal */}
      <PortfolioModal
        isOpen={activeDemo !== null}
        onClose={() => setActiveDemo(null)}
        title={activeDemo !== null ? projects[activeDemo].title : ""}
      >
        {activeDemo === 0 && <BookingDemo />}
        {activeDemo === 1 && <CarClinicDemo />}
        {activeDemo === 2 && <DriverEarningsDemo />}
      </PortfolioModal>
    </section>
  );
}
