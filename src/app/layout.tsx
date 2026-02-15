import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// TODO: Replace with your actual domain before deployment
const SITE_URL = "https://example.com";

const faqs = [
  {
    question: "我完全唔識 coding，真係學得到？",
    answer:
      "本課程就係專門為零經驗嘅人設計。你唔需要任何技術背景，全程有導師一對一陪住你，從開帳號到完成作品。",
  },
  {
    question: "我英文唔好，寫 code 唔使英文咩？",
    answer:
      "你用廣東話同 AI 溝通就得，AI 會幫你處理所有英文嘅部分。就算 AI 回覆英文或者出現錯誤訊息，你只需要話「用廣東話解釋」，AI 就會用你嘅語言教你。",
  },
  {
    question: "除咗學費，仲有冇其他費用？",
    answer:
      "需要訂閱付費 AI 工具。性價比較高嘅方案係分別訂閱 Claude 同 ChatGPT 嘅 US$20 月費 plan，兩個合共每月大約 HK$400。導師會喺課堂上幫你揀最適合嘅方案。",
  },
  {
    question: "我需要咩電腦？iPad 得唔得？",
    answer:
      "iPad 暫時仲未適合做編程，最起碼需要一部 MacBook 或者 Windows 手提電腦。如果你暫時未有電腦，導師有舊 MacBook 可以喺課堂時借用。",
  },
  {
    question: "AI 成日更新，學完會唔會好快過時？",
    answer:
      "課程教嘅係「內功心法」— 點樣思考問題、點樣同 AI 溝通嘅底層邏輯。呢啲基本功唔會因為 AI 版本更新而過時。就好似學識揸車之後，換新車都識揸。",
  },
  {
    question: "上完體驗課可以唔繼續嗎？",
    answer:
      "完全可以。體驗課獨立收費，完成之後你已經帶走可長期使用嘅 AI 帳號。之後想繼續學先再報名，零壓力。",
  },
  {
    question: "上完課之後有問題點算？",
    answer:
      "你可以隨時預約單堂跟進。但更重要嘅係，課程嘅目標就係教你識得自己向 AI 問問題同搵答案，畢業之後你已經有呢個能力。",
  },
];

export const metadata: Metadata = {
  title: "AI 寫程式課程香港 | 廣東話一對一教學",
  description:
    "香港 AI coding 實戰課程。一對一廣東話面授，由零開始用 ChatGPT、Claude 寫出解決業務痛點嘅工具。無需 coding 經驗、無需識英文。適合 freelancer、自媒體、中小企老闆。灣仔上課。",
  keywords: [
    "AI 寫程式",
    "AI coding 課程",
    "AI 課程 香港",
    "ChatGPT 課程",
    "Claude 教學",
    "廣東話 coding",
    "學寫程式 香港",
    "AI 自動化",
    "freelancer 工具",
    "無需經驗 寫程式",
    "灣仔 課程",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "AI 寫程式課程香港 | 廣東話一對一教學",
    description:
      "由零開始用 AI 寫出解決業務痛點嘅工具。無需 coding 經驗、無需識英文。一對一面授，灣仔上課。",
    type: "website",
    locale: "zh_HK",
    url: SITE_URL,
    siteName: "AI Coding 實戰課程",
    // TODO: Replace with actual OG image (1200x630)
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Coding 實戰課程 — 廣東話一對一教學",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 寫程式課程香港 | 廣東話一對一教學",
    description:
      "由零開始用 AI 寫出解決業務痛點嘅工具。無需經驗、無需識英文。",
    // TODO: Replace with actual image
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK" data-theme="dark">
      <head>
        {/* Course schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "AI Coding 實戰課程",
              description:
                "香港一對一廣東話面授 AI 寫程式課程，由零開始用 ChatGPT 同 Claude 寫出解決業務痛點嘅工具。",
              provider: {
                "@type": "Person",
                name: "Toby",
              },
              educationalLevel: "Beginner",
              inLanguage: "zh-Hant-HK",
              coursePrerequisites: "無需任何 coding 經驗",
              teaches:
                "用 AI 工具寫程式解決業務問題，由設置到部署全流程",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "onsite",
                location: {
                  "@type": "Place",
                  name: "灣仔工作室",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "灣仔",
                    addressRegion: "香港",
                    addressCountry: "HK",
                  },
                },
                instructor: {
                  "@type": "Person",
                  name: "Toby",
                },
              },
            }),
          }}
        />
        {/* LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "AI Coding 實戰課程",
              description:
                "香港灣仔 AI 寫程式一對一教學，廣東話授課。",
              address: {
                "@type": "PostalAddress",
                addressLocality: "灣仔",
                addressRegion: "香港",
                addressCountry: "HK",
              },
              areaServed: {
                "@type": "City",
                name: "香港",
              },
              // TODO: Add telephone and url when available
            }),
          }}
        />
        {/* FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        {/* GA4 placeholder — replace with your tracking ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} /> */}
      </head>
      <body
        className={`${inter.variable} ${notoSansTC.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
