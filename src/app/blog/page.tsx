import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import { BlogList } from "@/components/BlogList";

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

      <BlogList posts={posts} categories={categories} />
    </div>
  );
}
