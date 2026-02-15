"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ThemeApplier() {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
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
