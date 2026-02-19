"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statusColors: Record<string, { bg: string; fg: string }> = {
  待維修: { bg: "var(--warning-muted)", fg: "var(--warning)" },
  診斷中: { bg: "oklch(0.72 0.17 195 / 10%)", fg: "var(--primary)" },
  維修中: { bg: "var(--success-muted)", fg: "var(--success)" },
};

const initialCards = [
  { plate: "AB 1234", model: "Toyota Camry", status: "待維修" },
  { plate: "CD 5678", model: "Honda Civic", status: "診斷中" },
  { plate: "EF 9012", model: "BMW 320i", status: "維修中" },
];

const newCard = { plate: "GH 3456", model: "Benz C200", status: "待維修" };

function StatusBadge({ status }: { status: string }) {
  const c = statusColors[status] ?? statusColors["待維修"];
  return (
    <motion.span
      key={status}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{ backgroundColor: c.bg, color: c.fg }}
    >
      {status}
    </motion.span>
  );
}

function Counter({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-xl font-bold"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export function CarClinicDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [1000, 1000, 1500, 1000, 2500, 500];
    if (step >= delays.length) {
      const t = setTimeout(() => setStep(0), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const statusChanged = step >= 1;
  const showNew = step >= 3;
  const fading = step >= 5;

  const cards = statusChanged
    ? [
        { ...initialCards[0], status: "診斷中" },
        initialCards[1],
        initialCards[2],
      ]
    : [...initialCards];

  const allCards = showNew ? [newCard, ...cards] : cards;

  const counts = {
    待維修: allCards.filter((c) => c.status === "待維修").length,
    診斷中: allCards.filter((c) => c.status === "診斷中").length,
    維修中: allCards.filter((c) => c.status === "維修中").length,
  };

  return (
    <motion.div
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Header */}
      <p className="text-sm font-bold">今日工作台</p>

      {/* Counters */}
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(counts).map(([label, count]) => {
          const c = statusColors[label];
          return (
            <div
              key={label}
              className="rounded-lg border border-border px-3 py-2 text-center"
            >
              <Counter value={count} />
              <p
                className="text-xs font-medium"
                style={{ color: c?.fg }}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Car cards */}
      <div className="space-y-2">
        <AnimatePresence>
          {allCards.map((card) => (
            <motion.div
              key={card.plate}
              layout
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
              className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
            >
              <div>
                <p className="text-sm font-bold font-mono">{card.plate}</p>
                <p className="text-xs text-muted-foreground">{card.model}</p>
              </div>
              <AnimatePresence mode="wait">
                <StatusBadge status={card.status} />
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
