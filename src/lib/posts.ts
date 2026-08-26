import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { getImageSize } from "./imageSize";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  /** Thumbnail shown at the right of the article card, Medium-style. */
  coverImage?: string;
  /** Intrinsic size of `coverImage`, read from the file at build time so the
   *  card can render it at its own aspect ratio rather than matting it. */
  coverWidth?: number;
  coverHeight?: number;
  /** If set, the article lives elsewhere (e.g. Medium) and cards link out to it. */
  externalUrl?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);
      const coverSize = data.coverImage ? getImageSize(data.coverImage) : null;

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        readingTime: data.readingTime || stats.text,
        featured: data.featured || false,
        coverImage: data.coverImage || undefined,
        coverWidth: coverSize?.width,
        coverHeight: coverSize?.height,
        externalUrl: data.externalUrl || undefined,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);
  const coverSize = data.coverImage ? getImageSize(data.coverImage) : null;

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    category: data.category || "Uncategorized",
    tags: data.tags || [],
    readingTime: data.readingTime || stats.text,
    featured: data.featured || false,
    coverImage: data.coverImage || undefined,
    coverWidth: coverSize?.width,
    coverHeight: coverSize?.height,
    externalUrl: data.externalUrl || undefined,
    content,
  };
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];
  return categories;
}
