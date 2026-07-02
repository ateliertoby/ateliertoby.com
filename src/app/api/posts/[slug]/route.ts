import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireApiKey } from "@/lib/auth";
import { POST_STATUSES, revalidateBlog } from "@/lib/posts";
import { Prisma } from "@/generated/prisma/client";

function isNotFoundError(e: unknown): boolean {
  return e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025";
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  // Draft posts require auth
  if (post.status !== "published") {
    const authError = requireApiKey(req);
    if (authError) return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = requireApiKey(req);
  if (authError) return authError;

  const { slug } = await params;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const { title, content, excerpt, status } = body;

  if (status !== undefined && !POST_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: `Invalid status: must be one of ${POST_STATUSES.join(", ")}` },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        ...(title !== undefined && { title }),
        ...(content !== undefined && { content }),
        ...(excerpt !== undefined && { excerpt }),
        ...(status !== undefined && { status }),
      },
    });

    revalidateBlog(slug);
    return NextResponse.json(post);
  } catch (e) {
    if (isNotFoundError(e)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    throw e;
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = requireApiKey(req);
  if (authError) return authError;

  const { slug } = await params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { status: "draft" },
    });

    revalidateBlog(slug);
    return NextResponse.json(post);
  } catch (e) {
    if (isNotFoundError(e)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    throw e;
  }
}
