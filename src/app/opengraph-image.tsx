import { ImageResponse } from "next/og";

export const alt = "AI Coding 實戰課程｜廣東話一對一教學";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#faf5ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 24px",
            border: "3px solid #1a1a1a",
            background: "#fff",
            marginBottom: 36,
            fontSize: 20,
            fontWeight: 700,
            color: "#1a1a1a",
            boxShadow: "4px 4px 0 0 #1a1a1a",
          }}
        >
          灣仔面授 · 一對一 · 廣東話
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          唔使請 Programmer
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#c87533",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 36,
          }}
        >
          自己用 AI 就搞得掂
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#666",
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
            fontWeight: 700,
            color: "#999",
          }}
        >
          AI Coding 實戰課程 — toby.courses
        </div>
      </div>
    ),
    { ...size }
  );
}
