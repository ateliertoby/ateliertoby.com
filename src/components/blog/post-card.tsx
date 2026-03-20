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
      <div className="card-glow rounded-xl border border-l-4 border-l-primary-light group-hover:border-l-primary-deep bg-card p-6 transition-all">
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs font-mono">
          <span className="text-muted-foreground">{date}</span>
          <span className="rounded-full bg-highlight/10 px-2 py-0.5 text-highlight font-semibold">
            {minutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
