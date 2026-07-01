import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { EntranceObserver } from "@/components/entrance-observer";
import { FaqAccordion } from "@/components/courses/faq-accordion";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI 寫程式課程",
  description:
    "香港 AI coding 實戰課程。一對一廣東話面授，由零開始用 ChatGPT、Claude 寫出解決業務痛點嘅工具。",
};

/* ─── Data ─── */

const painPoints = [
  {
    role: "自媒體經營者",
    pain: "每日手動整理素材、排程發佈，重複又費時",
    solution: "一個自動整理 + 排程嘅小工具",
    saved: "每星期慳返 5 小時",
  },
  {
    role: "汽車維修師傅",
    pain: "客戶預約同報價全靠 WhatsApp 逐個覆",
    solution: "一個客人自助預約嘅網頁",
    saved: "唔使再做人肉接線生",
  },
  {
    role: "音樂教師",
    pain: "學生排課、收費、出席記錄全部人手做",
    solution: "一個簡單嘅管理工具",
    saved: "行政時間減半",
  },
  {
    role: "網店老闆",
    pain: "每次入貨都要逐間供應商格價",
    solution: "一個自動格價程式",
    saved: "幾秒鐘搞掂原本半日嘅嘢",
  },
];

const modules = [
  {
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

const comparisons = [
  {
    without: { label: "唔知問咗啲咩", desc: "AI 答錯你都唔知，以為係正確答案就照用" },
    with: { label: "學識點問", desc: "AI 答得準，你識得判斷回答嘅質素" },
  },
  {
    without: { label: "改完又改，浪費時間", desc: "做完一版唔啱，又重頭嚟過，來來回回好費時" },
    with: { label: "一步到位", desc: "第一次就描述清楚，慳時間慳精力" },
  },
  {
    without: { label: "做完唔知點上線", desc: "工具寫好咗但唔知點樣俾人用到，卡喺最後一步" },
    with: { label: "由寫到部署一條龍", desc: "導師帶住你完成最後一步，真正用到" },
  },
];

const faqs = [
  { question: "我完全唔識 coding，真係學得到？", answer: "呢個課程就係專門為零經驗嘅人設計。你唔需要任何技術背景，全程有導師一對一陪住你，從開帳號到完成作品。" },
  { question: "我英文唔好，寫 code 唔使英文咩？", answer: "你用廣東話同 AI 溝通就得，AI 會幫你處理所有英文嘅部分。就算 AI 回覆英文或者出現錯誤訊息，你只需要話「用廣東話解釋」，AI 就會用你嘅語言教你。" },
  { question: "除咗學費，仲有冇其他費用？", answer: "需要訂閱付費 AI 工具。免費帳號嘅用量唔夠應付實際需要。性價比較高嘅方案係分別訂閱 Claude 同 ChatGPT 嘅 US$20 月費 plan，兩個合共每月大約 HK$400。導師會喺課堂上幫你揀最適合嘅方案。" },
  { question: "我需要咩電腦？iPad 得唔得？", answer: "iPad 暫時仲未適合寫 code，最起碼需要一部 MacBook 或者 Windows 手提電腦。如果你暫時未有電腦，導師有舊 MacBook 可以喺課堂時借用，試過先再決定。" },
  { question: "AI 成日更新，學完會唔會好快過時？", answer: "課程教嘅係「內功心法」，即係點樣思考問題、點樣同 AI 溝通嘅底層邏輯。呢啲基本功唔會因為 AI 版本更新而過時。就好似學識揸車之後，換新車都識揸。" },
  { question: "上完體驗課可以唔繼續嗎？", answer: "完全可以，零壓力。完成之後你已經帶走可長期使用嘅 AI 帳號。如果鍾意想繼續，即場補三堂就可以用套餐價上齊四堂。" },
  { question: "四堂上完仲想繼續點算？", answer: "如果你想有導師繼續帶住做更大型或者長期嘅作品，可以再買四堂套餐，按自己進度決定。" },
  { question: "上完課之後有問題點算？", answer: "課程嘅目標就係教你識得自己問 AI 搵答案。上完堂之後，AI 就係你 24 小時嘅技術顧問，有問題隨時問佢。" },
];

const tiers = [
  {
    name: "體驗課",
    price: "$450",
    unit: "堂",
    badge: "推薦入門",
    highlight: true,
    description: "試一堂先，鍾意再補三堂完成課程",
    features: [
      "手把手開設 AI 付費帳號",
      "長期安全使用嘅方法",
      "認識唔同 AI 工具嘅分別",
      "完成即帶走可用帳號",
    ],
  },
  {
    name: "四堂套餐",
    price: "$1,800",
    unit: "4 堂",
    badge: null,
    highlight: false,
    description: "有系統學習，完成自己嘅工具",
    features: [
      "包括四個單元嘅核心內容",
      "喺導師輔助下完成一個作品",
      "體驗課後補三堂就得",
      "學識自己解決問題",
    ],
  },
];

/* ─── Page ─── */

export default function CoursesPage() {
  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "AI Coding 實戰課程",
            description: "香港一對一廣東話面授 AI 寫程式課程",
            provider: { "@type": "Person", name: "Toby" },
            educationalLevel: "Beginner",
            inLanguage: "zh-Hant-HK",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <EntranceObserver />
      <SiteNav />

      <main>
        {/* ═══ Hero ═══ */}
        <section className="entrance corridor pt-[calc(var(--spacing-section)*1.5)] pb-[var(--spacing-section)]">
          <p className="mb-4 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            一對一面授 &middot; 灣仔 &middot; 廣東話
          </p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            唔使請 Programmer
            <br />
            自己用 AI 就搞得掂
          </h1>
          <p className="mt-6 max-w-[50ch] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.7] text-[var(--text-muted)]">
            用你熟悉嘅廣東話指揮 AI，寫出啱你生意用嘅工具。唔使識英文，唔使識 coding，導師全程陪你由零到成品。
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[4px] bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] no-underline transition-opacity duration-300 hover:opacity-80"
            >
              免費了解課程
            </a>
            <a
              href="#modules"
              className="hover-underline inline-flex items-center text-sm text-[var(--text-muted)] no-underline transition-colors duration-300 hover:text-[var(--text)]"
            >
              睇吓學啲咩 &darr;
            </a>
          </div>
        </section>

        {/* Trial lesson highlight */}
        <section className="entrance corridor pb-[var(--spacing-section)]">
          <div className="border border-[var(--border)] rounded-[4px] p-8">
            <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--accent)] uppercase">首堂體驗課</p>
            <p className="font-serif text-[1.25rem] leading-[1.4]">
              手把手幫你開好 AI 帳號
            </p>
            <p className="mt-3 text-[var(--text-muted)] leading-[1.7] max-w-[55ch]">
              教你點樣喺香港安全開設 Claude 同 ChatGPT 嘅付費帳號。完成之後即刻帶走可以長期使用嘅帳號。就算唔繼續上堂，呢個已經值回票價。
            </p>
          </div>
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ Pain Points ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            佢哋嘅痛點，可能你都有
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            好多生意痛點，其實好簡單就解決到
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="entrance-stagger border-t border-[var(--border)] pt-5"
                data-index={i}
              >
                <p className="font-serif text-[1.125rem] font-normal">{p.role}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-[1.6]">{p.pain}</p>
                <p className="mt-3 text-sm text-[var(--accent)]">&rarr; {p.solution}</p>
                <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">{p.saved}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ Modules ═══ */}
        <section id="modules" className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            課程結構
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            由零基礎到自己做出成品
          </h2>
          <p className="mt-3 max-w-[50ch] text-[var(--text-muted)] leading-[1.7]">
            全程用廣東話，唔使識英文。AI 會幫你處理所有英文嘅部分。學完基礎之後，自己都識繼續摸索。
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {modules.map((m, i) => (
              <div
                key={i}
                className="entrance-stagger border-t border-[var(--border)] pt-6"
                data-index={i}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[var(--text-muted)]">{m.number}</span>
                  <h3 className="font-serif text-[1.375rem] font-normal">{m.title}</h3>
                </div>
                <p className="mt-3 max-w-[55ch] text-[var(--text-muted)] leading-[1.7]">
                  {m.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {m.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[var(--text)]">
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Course specs */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "灣仔工作室", sub: "實體面授" },
              { label: "每堂 60 分鐘", sub: "可二人同行" },
              { label: "時間彈性預約", sub: "配合你嘅時間" },
              { label: "自備電腦為佳", sub: "可借用 MacBook" },
            ].map((spec, i) => (
              <div key={i} className="border-t border-[var(--border)] pt-4">
                <p className="text-sm font-medium">{spec.label}</p>
                <p className="mt-0.5 font-mono text-xs text-[var(--text-muted)]">{spec.sub}</p>
              </div>
            ))}
          </div>

          {/* Course goal */}
          <div className="mt-12 border-l-2 border-[var(--border-strong)] pl-6">
            <p className="text-sm text-[var(--text-muted)] uppercase tracking-[0.08em] mb-2">課程目標</p>
            <p className="max-w-[50ch] leading-[1.7]">
              喺導師幫助下，你會用廣東話指揮 AI 完成一個為自己度身訂造嘅工具。上完堂之後，你已經識得自己問 AI 搵答案。
            </p>
          </div>
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ Prompt Demo ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            效果示範
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            同一個 AI，識問同唔識問
          </h2>
          <p className="mt-3 max-w-[50ch] text-[var(--text-muted)] leading-[1.7]">
            你唔使學任何專業術語。用你平時講嘢嘅方式，清楚描述你想要咩，AI 就識做。
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Bad prompt */}
            <div className="entrance-stagger" data-index="0">
              <p className="mb-3 font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.08em]">未學過</p>
              <div className="rounded-[4px] bg-[var(--bg-surface)] p-5">
                <p className="font-mono text-sm text-[var(--text)]">&ldquo;幫我寫個網站&rdquo;</p>
              </div>
              <div className="mt-3 rounded-[4px] border border-[var(--border)] p-5">
                <p className="text-sm text-[var(--text-muted)] leading-[1.6]">
                  好的！你想要咩網站呢？可以提供多啲資料嗎？例如你想要咩功能、咩設計風格？有冇參考網站？用咩程式語言？需要數據庫嗎？...
                </p>
              </div>
            </div>

            {/* Good prompt */}
            <div className="entrance-stagger" data-index="1">
              <p className="mb-3 font-mono text-xs text-[var(--accent)] uppercase tracking-[0.08em]">學過之後</p>
              <div className="rounded-[4px] bg-[var(--bg-surface)] p-5">
                <p className="font-mono text-sm text-[var(--text)] leading-[1.6]">
                  &ldquo;我開咗間車房，而家用紙同 WhatsApp 記邊架車要修，成日搵唔返紀錄，又唔記得邊個客嘅車整到邊個步驟。我想要個系統可以一眼睇晒今日所有車嘅狀態，同埋記低每架車嘅維修歷史。手機同電腦都要用到。&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-[4px] border border-[var(--accent)] border-opacity-30 p-5">
                <p className="text-sm text-[var(--text)] leading-[1.6]">
                  明白！我幫你整一個車房管理系統。會包含：今日工作台顯示所有車嘅維修狀態、客戶同車輛資料庫、每架車嘅完整維修紀錄、電腦同手機都用到嘅介面。而家開始幫你建立...
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-[var(--text-muted)] italic">
            注意：「學過之後」嘅 prompt 全部都係日常廣東話，冇任何技術用語。
          </p>
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ Comparison ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            有導師同冇導師嘅分別
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            自己摸索 vs 有人帶路
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {comparisons.map((c, i) => (
              <div
                key={i}
                className="entrance-stagger grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2"
                data-index={i}
              >
                <div>
                  <p className="mb-1 font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.08em]">自己摸索</p>
                  <p className="font-serif text-[1.125rem]">{c.without.label}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)] leading-[1.6]">{c.without.desc}</p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-[var(--accent)] uppercase tracking-[0.08em]">有導師帶路</p>
                  <p className="font-serif text-[1.125rem]">{c.with.label}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)] leading-[1.6]">{c.with.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Proof ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <div className="mb-[var(--spacing-block)] h-0.5 w-12 bg-[var(--border-strong)]" />
          <p className="font-serif text-[clamp(1.5rem,3vw,2rem)] italic leading-[1.4] text-[var(--text)]">
            你而家睇緊嘅呢個網站，冇人手寫過一行 code。
          </p>
          <div className="mt-8 flex gap-8 flex-wrap">
            {["0 寫 code", "100% AI", "廣東話"].map((stat) => (
              <span key={stat} className="font-mono text-sm tracking-[0.05em] text-[var(--text-muted)]">
                {stat}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-[50ch] text-sm text-[var(--text-muted)] leading-[1.6]">
            由設計、文案、排版到部署，全部用廣東話指揮 AI 完成。呢個就係課程教你做到嘅嘢。
          </p>
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ FAQ ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            常見問題
          </p>
          <h2 className="mb-10 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            你可能會想知
          </h2>
          <FaqAccordion items={faqs} />
        </section>

        <hr className="section-divider corridor" />

        {/* ═══ Pricing ═══ */}
        <section className="corridor py-[var(--spacing-section)]">
          <p className="mb-2 font-mono text-xs tracking-[0.08em] text-[var(--text-muted)] uppercase">
            開始學習
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
            準備好用 AI 解決你嘅問題？
          </h2>

          {/* Course format */}
          <div className="mt-8 flex gap-8 flex-wrap">
            {[
              { label: "形式", value: "一對一面授" },
              { label: "語言", value: "廣東話" },
              { label: "每堂", value: "60 分鐘" },
            ].map((d) => (
              <div key={d.label}>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.08em]">{d.label}</p>
                <p className="mt-0.5 text-sm">{d.value}</p>
              </div>
            ))}
          </div>

          {/* Tiers */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`entrance-stagger rounded-[4px] border p-8 ${
                  tier.highlight
                    ? "border-[var(--accent)]"
                    : "border-[var(--border)]"
                }`}
                data-index={tier.highlight ? 0 : 1}
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-[1.375rem] font-normal">{tier.name}</h3>
                  {tier.badge && (
                    <span className="font-mono text-xs text-[var(--accent)]">{tier.badge}</span>
                  )}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-[2rem] font-normal">{tier.price}</span>
                  <span className="text-sm text-[var(--text-muted)]">/ {tier.unit}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{tier.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center rounded-[4px] px-6 py-3 text-sm font-medium no-underline transition-opacity duration-300 hover:opacity-80 ${
                    tier.highlight
                      ? "bg-[var(--text)] text-[var(--bg)]"
                      : "border border-[var(--border)] text-[var(--text)]"
                  }`}
                >
                  {tier.highlight ? "預約體驗課" : "查詢套餐價"}
                </a>
              </div>
            ))}
          </div>

          {/* Direct contact */}
          <div className="mt-12 text-center">
            <p className="text-[var(--text-muted)]">想了解更多？直接 message 我傾吓</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline mt-3 inline-block text-sm font-medium text-[var(--text)] no-underline"
            >
              WhatsApp 查詢 &rarr;
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
