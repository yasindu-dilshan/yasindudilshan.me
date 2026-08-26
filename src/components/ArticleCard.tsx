import Link from "next/link";
import Image from "next/image";
import { avatarImage } from "@/lib/avatar";
import { ArrowUpRight } from "lucide-react";
import { formatDateShort } from "@/lib/utils";
import type { PostMeta } from "@/lib/posts";

const categoryColors: Record<string, { bg: string; text: string; tile: string }> = {
  "System Design": { bg: "bg-blue-100 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300", tile: "from-blue-200 to-blue-50 dark:from-blue-950 dark:to-blue-900" },
  "Spring Boot": { bg: "bg-green-100 dark:bg-green-950", text: "text-green-700 dark:text-green-300", tile: "from-green-200 to-green-50 dark:from-green-950 dark:to-green-900" },
  "AI": { bg: "bg-cyan-100 dark:bg-cyan-950", text: "text-cyan-700 dark:text-cyan-300", tile: "from-cyan-200 to-cyan-50 dark:from-cyan-950 dark:to-cyan-900" },
  "Career": { bg: "bg-amber-100 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300", tile: "from-amber-200 to-amber-50 dark:from-amber-950 dark:to-amber-900" },
  "Fintech": { bg: "bg-purple-100 dark:bg-purple-950", text: "text-purple-700 dark:text-purple-300", tile: "from-purple-200 to-purple-50 dark:from-purple-950 dark:to-purple-900" },
  "DevOps": { bg: "bg-rose-100 dark:bg-rose-950", text: "text-rose-700 dark:text-rose-300", tile: "from-rose-200 to-rose-50 dark:from-rose-950 dark:to-rose-900" },
};

const fallbackCat = {
  bg: "bg-stone-100 dark:bg-stone-800",
  text: "text-stone-600 dark:text-stone-300",
  tile: "from-stone-200 to-stone-50 dark:from-stone-800 dark:to-stone-700",
};

function getCatStyle(cat: string) {
  return categoryColors[cat] || fallbackCat;
}

export function ArticleCard({ post }: { post: PostMeta }) {
  const catStyle = getCatStyle(post.category);
  const isExternal = Boolean(post.externalUrl);

  const body = (
    <article className="p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-200 hover:-translate-y-0.5">
      {/* col-reverse puts the thumbnail above the text on mobile while keeping
          the text first in the DOM; sm+ moves it to the right, vertically
          centred against the text block. */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 sm:gap-5">
        {/* min-w-0 lets the title wrap and the description clamp, instead of
            the text column stretching the row past the card. */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={avatarImage}
                quality={95}
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
            <span className="text-xs text-[var(--muted2)]">
              {post.readingTime}
            </span>
            {isExternal && (
              <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-[var(--muted2)] uppercase tracking-wide">
                Medium
                <ArrowUpRight size={12} />
              </span>
            )}
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
              <span key={tag} className="text-[var(--muted2)]">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Thumbnail. Full-bleed on mobile, 224px wide on desktop, with the
            height coming from the image's own aspect ratio — no fixed box, so
            nothing is cropped and there is no matte to show through in dark
            mode. Posts with no cover fall back to a 16:9 tinted tile. */}
        {post.coverImage && post.coverWidth && post.coverHeight ? (
          <Image
            src={post.coverImage}
            alt=""
            width={post.coverWidth}
            height={post.coverHeight}
            sizes="(max-width: 640px) 100vw, 224px"
            className="w-full sm:w-56 h-auto rounded-lg flex-shrink-0 border border-[var(--border-c)]"
          />
        ) : (
          <div
            className={`w-full sm:w-56 aspect-video rounded-lg flex-shrink-0 border border-[var(--border-c)] bg-gradient-to-br ${catStyle.tile}`}
            aria-hidden="true"
          />
        )}
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {body}
    </Link>
  );
}
