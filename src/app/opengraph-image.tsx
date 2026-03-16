import { ImageResponse } from "next/og";

export const alt = "Atelier Toby";
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
        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Atelier Toby
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#666",
            textAlign: "center",
          }}
        >
          Tech、AI、開發日記。由第一性原理出發。
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
          ateliertoby.com
        </div>
      </div>
    ),
    { ...size }
  );
}
