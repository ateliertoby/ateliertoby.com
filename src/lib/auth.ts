import { NextRequest, NextResponse } from "next/server";

export function requireApiKey(req: NextRequest): NextResponse | null {
  const key = req.headers.get("x-api-key");
  if (!key || key !== process.env.BLOG_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
