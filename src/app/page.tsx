import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Modules } from "@/components/sections/modules";
import { PromptDemo } from "@/components/sections/prompt-demo";
import { Pitfalls } from "@/components/sections/pitfalls";
import { Portfolio } from "@/components/sections/portfolio";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { FAB } from "@/components/fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Modules />
        <PromptDemo />
        <Pitfalls />
        <Portfolio />
        <FAQ />
        <CTA />
      </main>
      <FAB />
    </>
  );
}
