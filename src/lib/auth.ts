import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function requireApiKey(req: NextRequest): NextResponse | null {
  const key = req.headers.get("x-api-key");
  const expected = process.env.BLOG_API_KEY;
  if (!key || !expected || !safeEqual(key, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
