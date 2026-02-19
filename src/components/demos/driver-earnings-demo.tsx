"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rides = [
  { time: "09:15", platform: "Uber", amount: 216 },
  { time: "10:42", platform: "宇宙", amount: 189 },
  { time: "12:10", platform: "Uber", amount: 268 },
  { time: "14:35", platform: "高德", amount: 178 },
  { time: "16:20", platform: "Uber", amount: 242 },
  { time: "18:45", platform: "宇宙", amount: 318 },
];
// Sum: 216+189+268+178+242+318 = 1411

const platformColor: Record<string, string> = {
  Uber: "var(--primary)",
  宇宙: "var(--warning)",
  高德: "var(--success)",
};

function AnimatedCounter({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    const from = prevRef.current;
    const diff = target - from;
    if (diff === 0) return;
    const duration = 400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(from + diff * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    prevRef.current = target;
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return <>{display.toLocaleString()}</>;
}

export function DriverEarningsDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (fading) {
      const t = setTimeout(() => {
        setVisibleCount(0);
        setHighlight(false);
        setFading(false);
      }, 500);
      return () => clearTimeout(t);
    }

    if (visibleCount < rides.length) {
      const t = setTimeout(
        () => setVisibleCount((c) => c + 1),
        visibleCount === 0 ? 600 : 700
      );
      return () => clearTimeout(t);
    }

    if (visibleCount === rides.length && !highlight) {
      const t = setTimeout(() => setHighlight(true), 400);
      return () => clearTimeout(t);
    }

    if (highlight) {
      const t = setTimeout(() => setFading(true), 2000);
      return () => clearTimeout(t);
    }
  }, [visibleCount, highlight, fading]);

  const runningTotal = rides
    .slice(0, visibleCount)
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <motion.div
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Header + counter */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">今日收入</p>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">當日利潤</p>
          <motion.p
            animate={
              highlight
                ? { scale: [1, 1.1, 1] }
                : {}
            }
            transition={{ duration: 0.4 }}
            className={`text-xl font-bold tabular-nums ${
              highlight ? "text-primary" : ""
            }`}
          >
            HK$<AnimatedCounter target={runningTotal} />
          </motion.p>
        </div>
      </div>

      {/* Platform filters */}
      <div className="flex gap-2">
        {["全部", "Uber", "宇宙", "高德"].map((p, i) => (
          <span
            key={p}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {p}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-1">
        <AnimatePresence>
          {rides.slice(0, visibleCount).map((ride, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-lg border border-border px-4 py-2.5"
            >
              <span className="w-10 text-xs font-mono text-muted-foreground">
                {ride.time}
              </span>
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: platformColor[ride.platform] }}
              />
              <span className="flex-1 text-sm">{ride.platform}</span>
              <span className="text-sm font-bold tabular-nums">
                HK${ride.amount}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleCount === 0 && (
          <div className="py-8 text-center text-sm text-muted-foreground">
            等待接單...
          </div>
        )}
      </div>
    </motion.div>
  );
}
