import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireApiKey } from "@/lib/auth";
import { POST_STATUSES, revalidateBlog } from "@/lib/posts";
import { Prisma } from "@/generated/prisma/client";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status") || "published";

  if (!POST_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: `Invalid status: must be one of ${POST_STATUSES.join(", ")}` },
      { status: 400 }
    );
  }

  // Draft listing requires auth
  if (status !== "published") {
    const authError = requireApiKey(req);
    if (authError) return authError;
  }

  const posts = await prisma.post.findMany({
    where: { status },
    orderBy: { publishedAt: "desc" },
    select: { id: true, slug: true, title: true, excerpt: true, status: true, publishedAt: true, createdAt: true, updatedAt: true },
  });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const authError = requireApiKey(req);
  if (authError) return authError;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const { title, slug, content, excerpt } = body;

  if (!title || !slug || !content || !excerpt) {
    return NextResponse.json({ error: "Missing required fields: title, slug, content, excerpt" }, { status: 400 });
  }

  if (typeof slug !== "string" || !SLUG_PATTERN.test(slug)) {
    return NextResponse.json(
      { error: "Invalid slug: use lowercase letters, digits, and single hyphens" },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        status: "published",
        publishedAt: new Date(),
      },
    });

    revalidateBlog(slug);
    return NextResponse.json(post, { status: 201 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return NextResponse.json({ error: `A post with slug "${slug}" already exists` }, { status: 409 });
    }
    throw e;
  }
}
