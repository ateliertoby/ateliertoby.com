"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const destinations = [
  { name: "尖沙咀", price: 350, time: "~35 分鐘" },
  { name: "旺角", price: 350, time: "~40 分鐘" },
  { name: "銅鑼灣", price: 450, time: "~45 分鐘" },
];

export function BookingDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [800, 1000, 1000, 1000, 700, 2000, 500];
    if (step >= delays.length) {
      const t = setTimeout(() => setStep(0), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const selected = step >= 1;
  const showPrice = step >= 2;
  const showButton = step >= 3;
  const confirmed = step >= 4;
  const showNotif = step >= 5;
  const fading = step >= 6;

  return (
    <motion.div
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">機場接送</p>
        <span className="text-xs text-muted-foreground">由機場出發</span>
      </div>

      {/* Destination list */}
      <div className="space-y-2">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-colors ${
              selected && i === 0
                ? "border-primary bg-primary/5"
                : "border-border"
            }`}
            animate={
              selected && i === 0
                ? { borderColor: "var(--primary)" }
                : {}
            }
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                  selected && i === 0
                    ? "border-primary bg-primary"
                    : "border-border"
                }`}
              >
                {selected && i === 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </motion.div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.time}</p>
              </div>
            </div>
            <p className="text-sm font-bold">HK${d.price}</p>
          </motion.div>
        ))}
      </div>

      {/* Price summary */}
      <AnimatePresence>
        {showPrice && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3"
          >
            <span className="text-sm text-muted-foreground">總計</span>
            <span className="text-lg font-bold">HK$350</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book button */}
      <AnimatePresence mode="wait">
        {showButton && !confirmed && (
          <motion.button
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.03, 1] }}
            transition={{ scale: { repeat: Infinity, duration: 1.5 } }}
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground"
          >
            立即預約
          </motion.button>
        )}
        {confirmed && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold"
            style={{
              backgroundColor: "var(--success-muted)",
              color: "var(--success)",
            }}
          >
            <Check className="h-4 w-4" />
            預約成功
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp notification */}
      <AnimatePresence>
        {showNotif && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 rounded-lg border px-4 py-3"
            style={{
              borderColor: "var(--success)",
              backgroundColor: "var(--success-muted)",
            }}
          >
            <MessageCircle
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: "var(--success)" }}
            />
            <div>
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--success)" }}
              >
                WhatsApp 通知
              </p>
              <p className="text-xs text-muted-foreground">
                新預約！尖沙咀 → 機場，2 月 20 日 14:30，HK$350
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
