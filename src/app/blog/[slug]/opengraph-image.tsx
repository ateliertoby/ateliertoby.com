import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";
export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "src/assets/fonts");

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, newsreaderData, newsreaderItalicData, interData, geistMonoData] =
    await Promise.all([
      prisma.post.findUnique({
        where: { slug },
        select: { title: true, publishedAt: true, excerpt: true },
      }),
      readFile(join(fontsDir, "Newsreader-Regular.ttf")),
      readFile(join(fontsDir, "Newsreader-Italic.ttf")),
      readFile(join(fontsDir, "Inter-Regular.ttf")),
      readFile(join(fontsDir, "GeistMono-Regular.ttf")),
    ]);

  const title = post?.title ?? "Atelier Toby";
  const date = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#f2eee7",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: title.length > 60 ? 42 : 54,
              lineHeight: 1.2,
              color: "#27201b",
              letterSpacing: "-0.02em",
              fontFamily: "Newsreader",
            }}
          >
            {title}
          </div>
          {date && (
            <div
              style={{
                marginTop: 20,
                fontSize: 15,
                color: "#68625e",
                letterSpacing: "0.05em",
                fontFamily: "Geist Mono",
              }}
            >
              {date}
            </div>
          )}
          {post?.excerpt && (
            <div
              style={{
                marginTop: 28,
                fontSize: 28,
                lineHeight: 1.5,
                color: "#68625e",
                maxWidth: 900,
                fontFamily: "Newsreader",
                fontStyle: "italic",
              }}
            >
              {post.excerpt.length > 160
                ? post.excerpt.slice(0, 157) + "..."
                : post.excerpt}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #342c27",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#27201b",
              letterSpacing: "0.02em",
              fontFamily: "Newsreader",
            }}
          >
            Atelier Toby
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#68625e",
              fontFamily: "Geist Mono",
            }}
          >
            ateliertoby.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Newsreader",
          data: newsreaderData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Newsreader",
          data: newsreaderItalicData,
          style: "italic",
          weight: 400,
        },
        { name: "Inter", data: interData, style: "normal", weight: 400 },
        {
          name: "Geist Mono",
          data: geistMonoData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
