import { NextResponse } from "next/server";

// Best-effort rate limit: per serverless instance, resets on cold start.
// Stops naive scripts, not distributed abuse — accepted trade-off for a
// personal site (no external store needed).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 500) {
    for (const [key, entry] of hits) {
      if (now - entry.windowStart > WINDOW_MS) hits.delete(key);
    }
  }
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let email: unknown;
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const res = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (res.ok) {
    return NextResponse.json({ ok: true });
  }

  const data = await res.json().catch(() => null);

  // Only this specific error means "already subscribed" — other Buttondown
  // failures (invalid email is a 422, auth errors, etc.) must not read as success.
  if (res.status === 400 && data?.code === "email_already_exists") {
    return NextResponse.json({ ok: true, existing: true });
  }

  // Don't relay Buttondown's error body — it can include subscriber ids.
  return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
}
