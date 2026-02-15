# AI Coding Course Landing Page — Project Status

> **Last Updated**: 2026-02-11
> **Project Path**: `/Users/accountname/Desktop/Project/ai-course-landing/`
> **Dev Server**: `npm run dev` (default port 3002, or next available)
> **Build**: `npm run build` — last verified passing

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

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4** + shadcn/ui (new-york style)
- **Framer Motion** (scroll animations, typing effects)
- **Lucide React** (icons)
- **Fonts**: Inter (Latin) + Noto Sans TC (Chinese) + Geist Mono (code)
- **Deploy target**: Vercel

---

## Architecture & File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, 3x JSON-LD schemas, SEO metadata
│   ├── page.tsx            # Assembles all sections + navbar + FAB
│   ├── globals.css         # Dual theme CSS (dark/light), utilities
│   ├── robots.ts           # Next.js convention robots.txt
│   └── sitemap.ts          # Next.js convention sitemap.xml
├── components/
│   ├── ui/                 # shadcn/ui: button.tsx, card.tsx
│   ├── sections/
│   │   ├── navbar.tsx      # Sticky nav, appears on scroll, mobile hamburger
│   │   ├── hero.tsx        # Gradient title, cost comparison, trial lesson pill
│   │   ├── story.tsx       # Toby's background, instructor card, pain point cards
│   │   ├── modules.tsx     # Trial lesson highlight, 4 module cards, course specs
│   │   ├── prompt-demo.tsx # Chat bubble prompt comparison + product preview + English error callout
│   │   ├── pitfalls.tsx    # "自己摸索 vs 有導師帶路" comparison cards
│   │   ├── portfolio.tsx   # 3 project cards + inline CTA
│   │   ├── faq.tsx         # 7 FAQ items, accordion
│   │   └── cta.tsx         # Founding member banner, 3-tier pricing, WhatsApp CTA
│   ├── scroll-reveal.tsx   # Reusable Framer Motion scroll animation wrapper
│   ├── typing-effect.tsx   # Typing animation component (useInView triggered)
│   ├── theme-provider.tsx  # URL param ?theme=light switcher
│   └── fab.tsx             # Floating action button (右下角, scroll-triggered)
└── lib/
    └── utils.ts            # cn() helper (shadcn)
```

---

## Dual Theme System

- **Dark (default)**: `data-theme="dark"` — 深藍黑背景, cyan/teal 強調色
- **Light**: `data-theme="light"` via URL `?theme=light` — 暖白背景, coral/amber 強調色
- CSS variables in globals.css, ThemeProvider reads URL search param
- Toby 同佢畫畫老師會對比兩版再決定

---

## Page Sections (scroll order)

1. **Navbar** — sticky, fade in after scroll, anchor links + CTA
2. **Hero** — gradient title, "體驗課即帶走 AI 帳號" pill, 傳統 vs AI 成本對比
3. **Story** — Toby 背景 (QA→餐廳→貿易), instructor photo placeholder, 4 industry pain points
4. **Modules** — trial lesson highlight card, 4 modules (設置/安全/溝通/部署), course specs (灣仔/90min/彈性/MacBook借用), course outcome
5. **Prompt Demo** — chat bubble style, bad vs good prompt (廣東話日常語言), product preview wireframe, "英文error→廣東話解釋" callout
6. **Pitfalls** — "自己摸索 vs 有導師帶路" 3-column comparison (no fear/red/skulls)
7. **Portfolio** — 3 projects (機場接送/格價工具/鋼琴調音), no tech jargon, time + cost comparison, inline CTA
8. **FAQ** — 7 items: 零經驗/英文/額外成本(HK$400/月)/電腦(iPad唔得,有MacBook借)/AI更新/體驗課/課後
9. **CTA** — founding member banner, 3 tiers (體驗課/單堂/四堂套餐), WhatsApp button
10. **FAB** — floating bottom-right button, appears after hero

---

## SEO Implementation

- **Title**: `AI 寫程式課程香港 | 廣東話一對一教學` (<60 chars)
- **Canonical**: Set (placeholder domain)
- **OG Image**: Placeholder path `og-image.png` (1200x630, TODO: provide real image)
- **Twitter Card**: `summary_large_image`
- **robots.ts**: Allow all, sitemap link
- **sitemap.ts**: Main page, weekly, priority 1
- **JSON-LD Schemas**: Course (with CourseInstance + 灣仔 location), EducationalOrganization (local SEO), FAQPage (7 Q&As)

---

## Course Details (for content reference)

- **Location**: 灣仔工作室，實體面授
- **Duration**: 每堂 90 分鐘，可連上兩堂
- **Schedule**: 彈性預約
- **Language**: 廣東話（Toby 亦識普通話、英文、日文，日後可擴展）
- **Equipment**: 自備 MacBook/Windows laptop，導師有舊 MacBook 可借用
- **AI Costs**: Claude $20 + ChatGPT $20 ≈ HK$400/月

### Pricing Model
1. **體驗課** — 手把手開 AI 帳號，即帶走可用帳號
2. **單堂** — 按需預約，靈活無綁定
3. **四堂套餐** — 系統學習，完成自己嘅工具，套餐優惠

### 4 Modules
1. **設置** — 香港開 AI 帳號方法，模型能力同收費
2. **安全意識** — 真實中伏個案，sandbox 概念
3. **同 AI 有效溝通** — 語言學+心理學角度，兩年實戰內功心法，長青概念
4. **部署上線** — 導師親身幫上線

---

## Design Decisions & Rationale

1. **去技術化** — 目標學員唔識 coding，所有技術名詞已移除（無 Next.js/Tailwind/Prisma 字眼出現喺可見內容）
2. **Chat bubble > Terminal** — Prompt demo 用對話框風格而非 terminal，避免 hacker aesthetic
3. **安心感 > 恐嚇** — Pitfalls section 用「有導師 vs 冇導師」對比，無 rm-rf/skull/紅色
4. **廣東話 prompt** — Good prompt 用純日常廣東話（車房預約例子），證明唔使識術語
5. **英文焦慮** — 多處強調「唔使識英文」+ 教你叫 AI 用廣東話解釋
6. **體驗課 = 入口** — 獨立 highlight，帶走 AI 帳號本身就有價值

---

## TODO (Before Deployment)

### Must Do
- [ ] `SITE_URL` 改成真實 domain（layout.tsx, robots.ts, sitemap.ts）
- [ ] OG image 製作 (1200x630) → `public/og-image.png`
- [ ] WhatsApp 連結改成 `https://wa.me/電話號碼?text=我想查詢AI課程`
- [ ] Portfolio 截圖/GIF 替換 placeholder（hktransfer, price-checker, PianoTuningHelper）
- [ ] Toby 嘅相片替換 instructor card placeholder
- [ ] GA4 tracking ID 填入 layout.tsx
- [ ] 決定用 dark 定 light theme（或者保留雙 theme？）
- [ ] Vercel 部署 + custom domain

### Nice to Have
- [ ] LinkedIn/GitHub 連結加到 instructor card
- [ ] Portfolio 作品加 live URL 連結
- [ ] Microsoft Clarity 加入做 heatmap 分析
- [ ] Blog section（長線 SEO content strategy）
- [ ] 學員作品 section（有學員之後加）
- [ ] Chatbot 替換底部 contact（Phase 2）

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
2. `src/app/layout.tsx` — SEO, schemas, fonts
3. `src/app/page.tsx` — section assembly order
4. `src/app/globals.css` — dual theme variables
5. `src/components/sections/hero.tsx` — main messaging
