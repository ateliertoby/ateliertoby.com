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
        <Proof />
        <FAQ />
        <CTA />
      </main>
      <FAB />
    </>
  );
}
