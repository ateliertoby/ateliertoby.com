import { ImageResponse } from "next/og";

export const alt = "AI Coding 實戰課程 — 廣東話一對一教學";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0c1222, #0a1a2e, #0c1222)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: 600,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15), transparent)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(14,165,233,0.3)",
            background: "rgba(14,165,233,0.1)",
            marginBottom: 32,
            fontSize: 20,
            color: "#67e8f9",
          }}
        >
          灣仔面授 · 一對一 · 廣東話
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          唔使請 Programmer
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            background: "linear-gradient(90deg, #0ea5e9, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          自己用 AI 就搞得掂
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          零經驗 · 無需識英文 · 由設置到部署全包
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#475569",
          }}
        >
          AI Coding 實戰課程
        </div>
      </div>
    ),
    { ...size }
  );
}
