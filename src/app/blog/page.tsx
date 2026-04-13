import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on Java, Spring Boot, system design, fintech engineering, and career growth.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <div className="mb-10 animate-fade-up">
        <h1 className="font-heading text-3xl tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          Writing about backend engineering, distributed systems, fintech, and
          lessons from building software that handles millions of records daily.
        </p>
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-up anim-d1">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)] text-white">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--border-c)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 animate-fade-up anim-d2">
        {posts.length > 0 ? (
          posts.map((post) => <ArticleCard key={post.slug} post={post} />)
        ) : (
          <div className="text-center py-16 text-[var(--muted)]">
            <p className="text-lg mb-2">No articles yet</p>
            <p className="text-sm">Check back soon — new content is on the way.</p>
          </div>
        )}
      </div>
    </div>
  );
}
