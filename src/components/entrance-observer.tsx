"use client";

import { useEffect } from "react";

export function EntranceObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".entrance, .entrance-wipe, .entrance-stagger, .entrance-slow"
    );

    // Apply stagger delays to post items
    document.querySelectorAll(".entrance-stagger[data-index]").forEach((el) => {
      const index = Number((el as HTMLElement).dataset.index ?? 0);
      (el as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
