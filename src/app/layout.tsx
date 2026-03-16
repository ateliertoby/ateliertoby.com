import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atelier Toby",
    template: "%s | Atelier Toby",
  },
  description: "Tech、AI、開發日記。由第一性原理出發。",
  openGraph: {
    title: "Atelier Toby",
    description: "Tech、AI、開發日記。由第一性原理出發。",
    type: "website",
    locale: "zh_HK",
    url: SITE_URL,
    siteName: "Atelier Toby",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK" data-theme="brutalism">
      <head>
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
        {children}
      </body>
    </html>
  );
}
