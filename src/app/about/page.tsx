import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";

export const metadata: Metadata = {
  title: "About | Atelier Toby",
  description: "關於 Toby — developer、educator、builder。",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold">About</h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            我係 Toby。Developer，教緊人用 AI 寫 code，自己都用 AI 寫 code。
          </p>
          <p>
            呢個 blog 記錄我嘅技術探索、開發過程、同埋對 AI 嘅觀察。
          </p>
        </div>
      </main>
    </>
  );
}
