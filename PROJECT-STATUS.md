# AI Coding Course Landing Page — Project Status

> **Last Updated**: 2026-02-19
> **Project Path**: `/Users/accountname/Desktop/Project/ai-course-landing/`
> **Dev Server**: `npm run dev -- -p 3002`
> **Build**: `npm run build` — last verified passing
> **Git Remote**: `git@gitea:toby/ai-course-landing.git`

---

## Project Overview

Toby 嘅 AI Coding 一對一實戰課程 landing page。目標學員係 **freelancer、自媒體、one-man-band 老闆**，完全零 coding 經驗。課程喺**灣仔工作室面授**，**廣東話**教學。

### Core Value Proposition
- 唔使請 Programmer，自己用 AI 就搞得掂
- 唔使識英文、唔使識 coding
- 導師全程陪你由零到成品
- 體驗課即帶走可長期使用嘅 AI 付費帳號（香港開戶痛點）

---

## Tech Stack

- **Next.js 16.1.6** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4** + shadcn/ui (new-york style)
- **Framer Motion v12** (scroll animations, demo animations, typing effects)
- **Lucide React** (icons)
- **Fonts**: Inter (Latin) + Noto Sans TC (Chinese) + Geist Mono (code)
- **Deploy target**: Vercel / Mac Mini via Gitea

---

## Architecture & File Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, fonts, 3x JSON-LD schemas, SEO metadata
│   ├── page.tsx              # Assembles all sections + navbar + FAB
│   ├── globals.css           # 4 themes (dark/light/anthropic/apple), utilities
│   ├── icon.tsx              # Dynamic favicon via next/og ImageResponse
│   ├── apple-icon.tsx        # Dynamic Apple touch icon via next/og
│   ├── opengraph-image.tsx   # Dynamic OG image (1200x630) via next/og
│   ├── robots.ts             # Next.js convention robots.txt
│   └── sitemap.ts            # Next.js convention sitemap.xml
├── components/
│   ├── ui/                   # shadcn/ui: button.tsx, card.tsx
│   ├── sections/
│   │   ├── navbar.tsx        # Sticky nav, appears on scroll, mobile hamburger
│   │   ├── hero.tsx          # Gradient title, trial lesson card, cost comparison
│   │   ├── story.tsx         # Toby's background, instructor card, pain point cards
│   │   ├── modules.tsx       # 4 module cards, course specs, course outcome
│   │   ├── prompt-demo.tsx   # Chat bubble prompt comparison + car-clinic preview
│   │   ├── pitfalls.tsx      # "自己摸索 vs 有導師帶路" comparison cards
│   │   ├── portfolio.tsx     # 3 project cards with click-to-demo + inline CTA
│   │   ├── faq.tsx           # 7 FAQ items, accordion
│   │   └── cta.tsx           # Founding member banner, 2-tier pricing, WhatsApp CTA
│   ├── portfolio-modal.tsx   # Shared demo modal (AnimatePresence, a11y, body scroll lock)
│   ├── demos/
│   │   ├── booking-demo.tsx       # 機場接送預約 auto-play demo (~7s loop)
│   │   ├── car-clinic-demo.tsx    # 車房管理 auto-play demo (~8s loop)
│   │   └── driver-earnings-demo.tsx # 司機記帳 auto-play demo (~7s loop)
│   ├── scroll-reveal.tsx     # Reusable scroll animation wrapper (respects reduced-motion)
│   ├── typing-effect.tsx     # Typing animation component (useInView triggered)
│   ├── theme-provider.tsx    # URL param theme switcher (light/dark/anthropic/apple)
│   └── fab.tsx               # Floating WhatsApp button (右下角, scroll-triggered)
├── hooks/
│   └── use-lock-body-scroll.ts  # Body scroll lock (iOS Safari compatible)
├── lib/
│   ├── config.ts             # Centralized SITE_URL + WHATSAPP_URL
│   └── utils.ts              # cn() helper (shadcn)
└── public/
    └── portfolio/
        ├── hktransfer.png    # 機場接送預約平台截圖
        ├── car-clinic.png    # 車房管理系統截圖
        └── ledgerhud.png     # 司機記帳 App 截圖
```

---

## Theme System

4 個 theme，全部用 oklch color tokens，透過 URL param 切換：

| Theme | URL | 風格 |
|-------|-----|------|
| Light | `localhost:3002`（預設） | 暖白背景 + coral/amber 強調色 |
| Dark | `?theme=dark` | 深藍黑背景 + cyan/teal 強調色 |
| Anthropic | `?theme=anthropic` | Cream 底 + terracotta 橙紅，editorial 感 |
| Apple | `?theme=apple` | 冷灰 #F5F5F7 底 + Apple Blue，極簡 |

- CSS variables 全部喺 `globals.css`
- `ThemeProvider` 讀 URL search param `?theme=xxx`
- Light theme card shadows 獨立處理（light/anthropic/apple 共用）
- 最終部署時揀一個做 production default

---

## Page Sections (scroll order)

1. **Navbar** — sticky, fade in after scroll, anchor links + WhatsApp CTA
2. **Hero** — gradient title, trial lesson card (checklist + WhatsApp CTA), 傳統 vs AI 成本對比
3. **Story** — Toby 背景 (QA→餐廳→貿易), instructor photo placeholder, 4 industry pain points
4. **Modules** — 4 modules (設置/安全/溝通/部署), course specs (灣仔/90min/二人同行/彈性/MacBook借用), course outcome
5. **Prompt Demo** — chat bubble style, bad vs good prompt (車房管理例子), car-clinic screenshot preview
6. **Pitfalls** — "自己摸索 vs 有導師帶路" 3-column comparison
7. **Portfolio** — 3 real projects, click 開 interactive demo modal, hover scroll 截圖, inline CTA
8. **FAQ** — 7 items: 零經驗/英文/額外成本/電腦/AI更新/體驗課/課後
9. **CTA** — founding member banner, 2 tiers (體驗課 $450 / 四堂套餐 $1,800), WhatsApp button
10. **FAB** — floating bottom-right WhatsApp button, appears after hero

---

## Interactive Portfolio Demos

Portfolio section 嘅 3 個作品可以 click 開 modal 睇自動播放動畫：

| Demo | 展示內容 | 循環時間 |
|------|---------|---------|
| 機場接送預約 | 選目的地 → 價錢 → 預約 → WhatsApp 通知 | ~7s |
| 車房管理系統 | Dashboard counters + 狀態轉變 + 新車入場 | ~8s |
| 司機記帳 App | Timeline 逐單顯示 + counter 累加至 HK$1,411 | ~7s |

- 純 React + Framer Motion 實現（無圖片）
- Modal: backdrop blur, Escape 關閉, ARIA accessible, body scroll lock
- 動畫用 `useState`/`useEffect`/`setTimeout` step-based loop

---

## WhatsApp Integration

所有 CTA 統一指向 WhatsApp，集中管理：

```ts
// src/lib/config.ts
export const WHATSAPP_URL =
  "https://wa.me/85296166766?text=" +
  encodeURIComponent("你好，我想了解 AI Coding 課程，可以傾吓嗎？");
```

使用位置：navbar CTA, hero 體驗課 card, portfolio inline CTA, cta section 全部 tier + 底部按鈕, FAB

---

## SEO Implementation

- **Title**: `AI 寫程式課程香港 | 廣東話一對一教學`
- **Canonical**: Set via `SITE_URL` (placeholder, needs real domain)
- **Dynamic Favicon**: `src/app/icon.tsx` — "AI" text on cyan gradient via next/og
- **Dynamic Apple Icon**: `src/app/apple-icon.tsx`
- **Dynamic OG Image**: `src/app/opengraph-image.tsx` — 1200x630, course title + dark theme
- **Twitter Card**: `summary_large_image`
- **robots.ts**: Allow all, sitemap link
- **sitemap.ts**: Main page, weekly, priority 1
- **JSON-LD Schemas**: Course (with CourseInstance + 灣仔 location), EducationalOrganization (local SEO), FAQPage (7 Q&As)

---

## Accessibility

- **prefers-reduced-motion**: CSS 動畫全部 respect（gradient, blink, scroll, glow transitions）
- **ScrollReveal**: 用 framer-motion `useReducedMotion()` hook，reduced motion 時直接 render 靜態 `<div>`
- **Portfolio modal**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, Escape key close
- **Portfolio cards**: `role="button"`, `tabIndex={0}`, Enter/Space keyboard support
- **Touch targets**: Mobile hamburger h-11 w-11 (44px), nav links py-3

---

## Course Details (for content reference)

- **Location**: 灣仔工作室，實體面授
- **Duration**: 每堂 90 分鐘
- **Group**: 按情況可接受二人同行
- **Schedule**: 彈性預約
- **Language**: 廣東話（Toby 亦識普通話、英文、日文）
- **Equipment**: 自備 MacBook/Windows laptop，導師有舊 MacBook 可借用
- **AI Costs**: Claude $20 + ChatGPT $20 ≈ HK$400/月

### Pricing Model
1. **體驗課** $450/堂 — 手把手開 AI 帳號，即帶走可用帳號
2. **四堂套餐** $1,800/4堂 — 系統學習，完成自己嘅工具，套餐優惠

### 4 Modules
1. **設置** — 香港開 AI 帳號方法，模型能力同收費
2. **安全意識** — 真實中伏個案，sandbox 概念
3. **同 AI 有效溝通** — 語言學+心理學角度，兩年實戰內功心法，長青概念
4. **部署上線** — 導師親身幫上線

---

## Portfolio Projects (Real)

| Project | 類型 | AI 開發時間 | 傳統報價 |
|---------|------|-----------|---------|
| 機場接送預約平台 | 網頁應用 | 2 日 | $50,000+ |
| 車房維修管理系統 | 網頁應用 | 3 日 | $80,000+ |
| 司機接單記帳 App | 手機 App | 4 日 | $30,000+ |

---

## Design Decisions & Rationale

1. **去技術化** — 目標學員唔識 coding，所有技術名詞已移除
2. **Chat bubble > Terminal** — Prompt demo 用對話框風格而非 terminal
3. **安心感 > 恐嚇** — Pitfalls section 用「有導師 vs 冇導師」對比
4. **廣東話 prompt** — Good prompt 用車房管理例子，純日常廣東話
5. **英文焦慮** — 多處強調「唔使識英文」+ 教你叫 AI 用廣東話解釋
6. **互動 demo > 靜態截圖** — Portfolio click 開 modal 播放自動動畫，展示 AI 可以做到嘅嘢
7. **Light theme 預設** — 目標客群偏好明亮溫暖風格

---

## TODO (Before Deployment)

### Must Do
- [ ] `SITE_URL` 改成真實 domain（`src/lib/config.ts`）
- [ ] Toby 嘅相片替換 instructor card placeholder
- [ ] GA4 tracking ID 填入 layout.tsx
- [ ] 決定用邊個 theme 做 production default（light/dark/anthropic/apple）
- [ ] Vercel 部署 + custom domain（或 Mac Mini + Cloudflare Tunnel）

### Nice to Have
- [ ] LinkedIn/GitHub 連結加到 instructor card
- [ ] Portfolio 作品加 live URL 連結
- [ ] Microsoft Clarity 加入做 heatmap 分析
- [ ] Blog section（長線 SEO content strategy）
- [ ] 學員作品 section（有學員之後加）

---

## Toby's Profile (for content tone)

- 前軟體 QA 工程師，餐廳老闆，跨國貿易
- 廣東話為母語，亦識普通話、英文、日文
- 實際、結果導向、唔鍾意 over-engineer
- 定價底線 $600/hr+
- 有畫畫老師會幫睇設計
- 目標：課程收入覆蓋 AI API costs + profit

---

## Key Files to Read First

If resuming this project, read these files in order:
1. This file (`PROJECT-STATUS.md`)
2. `src/lib/config.ts` — centralized URLs
3. `src/app/layout.tsx` — SEO, schemas, fonts
4. `src/app/page.tsx` — section assembly order
5. `src/app/globals.css` — 4 theme variables + utilities
6. `src/components/sections/hero.tsx` — main messaging
7. `src/components/sections/cta.tsx` — pricing tiers
