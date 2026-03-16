import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Modules } from "@/components/sections/modules";
import { PromptDemo } from "@/components/sections/prompt-demo";
import { Pitfalls } from "@/components/sections/pitfalls";
import { Proof } from "@/components/sections/proof";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { FAB } from "@/components/fab";

export const metadata: Metadata = {
  title: "AI 寫程式課程 | Atelier Toby",
  description: "香港 AI coding 實戰課程。一對一廣東話面授，由零開始用 ChatGPT、Claude 寫出解決業務痛點嘅工具。",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Modules />
        <PromptDemo />
        <Pitfalls />
        <Proof />
        <FAQ />
        <CTA />
      </main>
      <FAB />
    </>
  );
}
