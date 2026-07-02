import { revalidatePath } from "next/cache";

export const POST_STATUSES = ["published", "draft"];

// Every static surface that renders post data — add here when a new one appears.
export function revalidateBlog(slug: string) {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/feed.xml");
  revalidatePath("/sitemap.xml");
}
