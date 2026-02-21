"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ThemeApplier() {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme");

  useEffect(() => {
    const valid = ["dark", "light", "anthropic", "apple", "brutalism"];
    const selected = valid.includes(theme ?? "") ? theme! : "light";
    document.documentElement.setAttribute("data-theme", selected);
  }, [theme]);

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense>
        <ThemeApplier />
      </Suspense>
      {children}
    </>
  );
}
