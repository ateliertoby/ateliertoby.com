import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireApiKey } from "@/lib/auth";

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
  const body = await req.json();
  const { title, content, excerpt, status } = body;

  const post = await prisma.post.update({
    where: { slug },
    data: {
      ...(title !== undefined && { title }),
      ...(content !== undefined && { content }),
      ...(excerpt !== undefined && { excerpt }),
      ...(status !== undefined && { status }),
    },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");

  return NextResponse.json(post);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = requireApiKey(req);
  if (authError) return authError;

  const { slug } = await params;

  const post = await prisma.post.update({
    where: { slug },
    data: { status: "draft" },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");

  return NextResponse.json(post);
}
