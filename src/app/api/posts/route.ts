import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireApiKey } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status") || "published";

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

  const body = await req.json();
  const { title, slug, content, excerpt } = body;

  if (!title || !slug || !content || !excerpt) {
    return NextResponse.json({ error: "Missing required fields: title, slug, content, excerpt" }, { status: 400 });
  }

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

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");

  return NextResponse.json(post, { status: 201 });
}
