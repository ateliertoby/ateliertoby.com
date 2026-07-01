import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
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

  const data = await res.json();

  // Buttondown returns 400 if already subscribed
  if (res.status === 400) {
    return NextResponse.json({ ok: true, existing: true });
  }

  return NextResponse.json(
    { error: data?.detail || "Something went wrong" },
    { status: res.status }
  );
}
