import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL } from "@/lib/config";
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

const faqs = [
  {
    question: "我完全唔識 coding，真係學得到？",
    answer:
      "呢個課程就係專門為零經驗嘅人設計。你唔需要任何技術背景，全程有導師一對一陪住你，從開帳號到完成作品。",
  },
  {
    question: "我英文唔好，寫 code 唔使英文咩？",
    answer:
      "你用廣東話同 AI 溝通就得，AI 會幫你處理所有英文嘅部分。就算 AI 回覆英文或者出現錯誤訊息，你只需要話「用廣東話解釋」，AI 就會用你嘅語言教你。",
  },
  {
    question: "除咗學費，仲有冇其他費用？",
    answer:
      "需要訂閱付費 AI 工具。免費帳號嘅用量唔夠應付實際需要。性價比較高嘅方案係分別訂閱 Claude 同 ChatGPT 嘅 US$20 月費 plan，兩個合共每月大約 HK$400。導師會喺課堂上幫你揀最適合嘅方案。",
  },
  {
    question: "我需要咩電腦？iPad 得唔得？",
    answer:
      "iPad 暫時仲未適合寫 code，最起碼需要一部 MacBook 或者 Windows 手提電腦。如果你暫時未有電腦，導師有舊 MacBook 可以喺課堂時借用，試過先再決定。導師會幫你分析實際需要。",
  },
  {
    question: "AI 成日更新，學完會唔會好快過時？",
    answer:
      "課程教嘅係「內功心法」，即係點樣思考問題、點樣同 AI 溝通嘅底層邏輯。呢啲基本功唔會因為 AI 版本更新而過時。就好似學識揸車之後，換新車都識揸。",
  },
  {
    question: "上完體驗課可以唔繼續嗎？",
    answer:
      "完全可以，零壓力。完成之後你已經帶走可長期使用嘅 AI 帳號。如果鍾意想繼續，即場補三堂就可以用套餐價上齊四堂。",
  },
  {
    question: "四堂上完仲想繼續點算？",
    answer:
      "如果你想有導師繼續帶住做更大型或者長期嘅作品，可以再買四堂套餐，按自己進度決定。",
  },
  {
    question: "上完課之後有問題點算？",
    answer:
      "課程嘅目標就係教你識得自己問 AI 搵答案。上完堂之後，AI 就係你 24 小時嘅技術顧問，有問題隨時問佢。",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "AI Coding 實戰課程｜廣東話一對一教學",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 寫程式課程香港 | 廣東話一對一教學",
    description:
      "由零開始用 AI 寫出解決業務痛點嘅工具。無需經驗、無需識英文。",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK" data-theme="light">
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
