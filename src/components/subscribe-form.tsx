"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("done");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="text-sm text-[var(--accent)]">
        Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 flex-wrap">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 max-w-[20rem] border-b border-[var(--border)] bg-transparent py-3 font-mono text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] placeholder:opacity-60 focus:border-[var(--accent)] transition-colors duration-300"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="hover-underline text-sm font-medium text-[var(--text)] bg-transparent border-none cursor-pointer disabled:opacity-50"
      >
        {state === "loading" ? "..." : "Subscribe"}
      </button>
      {state === "error" && (
        <span className="basis-full text-sm text-red-600">
          Something went wrong. Try again.
        </span>
      )}
    </form>
  );
}
