"use client";

import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import type { PostMeta } from "@/lib/posts";

/**
 * The category chips used to be inert spans styled with `cursor-pointer`, so
 * they advertised an interaction that did not exist. They are real buttons now
 * and filter the list client-side — the full set of posts is already in the
 * payload, so no extra request is needed.
 */
export function BlogList({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const visible = active
    ? posts.filter((post) => post.category === active)
    : posts;

  const chipBase =
    "px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer";
  const chipOn = `${chipBase} bg-[var(--accent)] text-[var(--accent-fg)]`;
  const chipOff = `${chipBase} border border-[var(--border-c)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]`;

  return (
    <>
      {categories.length > 0 && (
        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex flex-wrap gap-2 mb-8 animate-fade-up anim-d1"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={active === null ? chipOn : chipOff}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat === active ? null : cat)}
              aria-pressed={cat === active}
              className={cat === active ? chipOn : chipOff}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Screen readers get told the count changed; the list itself is visual. */}
      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "article" : "articles"}
        {active ? ` in ${active}` : ""}
      </p>

      <div className="flex flex-col gap-4 animate-fade-up anim-d2">
        {visible.length > 0 ? (
          visible.map((post) => <ArticleCard key={post.slug} post={post} />)
        ) : (
          <div className="text-center py-16 text-[var(--muted)]">
            <p className="text-lg mb-2">No articles yet</p>
            <p className="text-sm">
              Check back soon — new content is on the way.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
