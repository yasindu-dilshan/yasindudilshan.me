import Link from "next/link";
import Image from "next/image";
import { formatDateShort } from "@/lib/utils";
import type { PostMeta } from "@/lib/posts";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "System Design": { bg: "bg-blue-100 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300" },
  "Spring Boot": { bg: "bg-green-100 dark:bg-green-950", text: "text-green-700 dark:text-green-300" },
  "Career": { bg: "bg-amber-100 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300" },
  "Fintech": { bg: "bg-purple-100 dark:bg-purple-950", text: "text-purple-700 dark:text-purple-300" },
  "DevOps": { bg: "bg-rose-100 dark:bg-rose-950", text: "text-rose-700 dark:text-rose-300" },
};

function getCatStyle(cat: string) {
  return categoryColors[cat] || { bg: "bg-stone-100 dark:bg-stone-800", text: "text-stone-600 dark:text-stone-300" };
}

export function ArticleCard({ post }: { post: PostMeta }) {
  const catStyle = getCatStyle(post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-200 hover:-translate-y-0.5">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt="Yasindu Dilshan"
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
          <span className="text-xs text-[var(--muted)]">Yasindu Dilshan</span>
          <span className="text-xs text-[var(--muted2)]">&middot;</span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${catStyle.bg} ${catStyle.text}`}
          >
            {post.category}
          </span>
          <span className="text-xs text-[var(--muted2)]">&middot;</span>
          <span className="text-xs text-[var(--muted2)]">{post.readingTime}</span>
        </div>

        <h3 className="text-base font-semibold mb-1.5 group-hover:text-[var(--accent)] transition-colors leading-snug">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
          {post.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-[var(--muted2)]">
          <time dateTime={post.date}>{formatDateShort(post.date)}</time>
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[var(--muted2)]">#{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  );
}
