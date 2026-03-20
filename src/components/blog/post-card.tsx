import Link from "next/link";
import { readingTime } from "@/lib/reading-time";

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date | string | null;
}

export function PostCard({ slug, title, excerpt, content, publishedAt }: PostCardProps) {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("zh-HK", { year: "numeric", month: "long", day: "numeric" })
    : "";
  const minutes = readingTime(content);

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="flex overflow-hidden rounded-sm border-4 border-black bg-white shadow-[6px_6px_0px_#000000] transition-transform duration-75 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000]">
        <div className="w-1.5 shrink-0 bg-primary" />
        <div className="flex-1 p-6">
          <h3 className="text-xl font-black uppercase tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>{date}</span>
            <span>·</span>
            <span>{minutes} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
