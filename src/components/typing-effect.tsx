"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingEffect({
  text,
  speed = 30,
  startDelay = 0,
  className,
  onComplete,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || started) return;
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [isInView, started, startDelay]);

  useEffect(() => {
    if (!started) return;
    
    // We handle the completion through the timeout to avoid direct synchronous setState in the render cycle
    if (displayed.length >= text.length) {
      const t = setTimeout(() => {
        setDone(true);
        onComplete?.();
      }, 0);
      return () => clearTimeout(t);
    }
    
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {started && !done && (
        <span className="cursor-blink text-primary">|</span>
      )}
    </span>
  );
}
