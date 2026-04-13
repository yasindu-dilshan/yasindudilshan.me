import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/config";
import { ArticleCard } from "@/components/ArticleCard";

const skills = ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "AWS"];

const stats = [
  { value: "3+", label: "Years in fintech engineering" },
  { value: "1", label: "IEEE publication (Big Data '23)" },
  { value: "1st", label: "Class honours, UoM" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-14 flex flex-col sm:flex-row items-start gap-8 animate-fade-up">
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-[3px] border-[var(--border-c)] shadow-sm">
            <Image
              src="/images/avatar.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover object-[center_20%]"
              sizes="128px"
              priority
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Backend Engineer &middot; Fintech
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
            Building reliable systems{" "}
            <br className="hidden sm:block" />
            for <span className="text-[var(--accent)]">global markets</span>
          </h1>

          <p className="text-[var(--muted)] leading-relaxed mb-5 max-w-lg">
            {siteConfig.author.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium font-code rounded-full border border-[var(--border-c)] text-[var(--muted)] bg-[var(--surface)]"
              >
                {skill}
              </span>
            ))}
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] rounded-lg hover:opacity-90 transition-opacity"
          >
            Read the blog
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      {posts.length > 0 && (
        <section className="pb-14 animate-fade-up anim-d1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl">
              Latest articles
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-[var(--accent)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="pb-14 animate-fade-up anim-d2">
        <h2 className="font-heading text-xl mb-6">
          At a glance
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-xl bg-[var(--surface)] border border-[var(--border-c)]"
            >
              <div className="font-heading text-2xl text-[var(--accent)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-14 animate-fade-up anim-d3">
        <div className="p-6 rounded-xl border border-[var(--border-c)] bg-gradient-to-br from-[var(--accent)]/[0.03] to-emerald-500/[0.03]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-1">
                Get new articles in your inbox
              </h3>
              <p className="text-xs text-[var(--muted)]">
                No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 sm:w-44 px-3 py-2 text-xs rounded-lg border border-[var(--border-c)] bg-[var(--surface)] text-[var(--fg)] outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button className="px-4 py-2 text-xs font-semibold text-white bg-[var(--accent)] rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
