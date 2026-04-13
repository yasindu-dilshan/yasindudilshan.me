import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-8 pb-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <article className="animate-fade-up">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              {post.category}
            </span>
            <span className="text-xs text-[var(--muted2)]">
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Author card */}
          <div className="flex items-center gap-3 pb-6 border-b border-[var(--border-c)]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{siteConfig.name}</p>
              <p className="text-xs text-[var(--muted2)]">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {" · "}
                {siteConfig.author.role} at {siteConfig.author.company}
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="prose max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[var(--border-c)]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium font-code rounded-full border border-[var(--border-c)] text-[var(--muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom author card */}
        <div className="mt-10 p-6 rounded-xl border border-[var(--border-c)] bg-[var(--surface)]">
          <div className="flex items-start gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">
                Written by {siteConfig.name}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                {siteConfig.author.bio}
              </p>
              <div className="flex gap-3">
                <Link
                  href={siteConfig.author.links.linkedin}
                  target="_blank"
                  className="text-xs text-[var(--accent)] hover:underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.author.links.github}
                  target="_blank"
                  className="text-xs text-[var(--accent)] hover:underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
