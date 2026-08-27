# yasindudilshan.me

Personal website & technical blog — built with Next.js 15, Tailwind CSS, and MDX.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build
```

## Project Structure

```
├── content/blog/          # Blog articles (MDX files), one per post
├── public/images/
│   ├── site/              # Site-wide identity assets
│   │   └── avatar.png     # Profile photo (imported via src/lib/avatar.ts)
│   ├── projects/          # Project figures, one folder per project slug
│   └── blog/              # Per-article images, one folder per slug
│       └── <slug>/
│           ├── cover.png  # Card thumbnail (any aspect, never cropped)
│           └── *.png      # Inline images used in the article body
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog index + [slug] post pages
│   │   ├── projects/      # Projects showcase
│   │   ├── privacy/       # Privacy policy (AdSense required)
│   │   ├── terms/         # Terms of service (AdSense required)
│   │   ├── sitemap.ts     # Auto-generated sitemap
│   │   ├── robots.ts      # robots.txt
│   │   └── rss.xml/       # RSS feed for Medium cross-posting
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Sticky nav with avatar + theme toggle
│   │   ├── Footer.tsx     # Footer with social links
│   │   ├── ArticleCard.tsx # Blog post card with author avatar
│   │   ├── ThemeToggle.tsx # Dark/light mode switcher
│   │   └── SocialIcons.tsx # GitHub, LinkedIn, Medium SVG icons
│   └── lib/               # Utilities
│       ├── config.ts      # Site configuration (edit this first!)
│       ├── posts.ts       # MDX content pipeline
│       └── utils.ts       # Date formatting helpers
```

## First Steps After Cloning

### 1. Replace your photo
Replace `public/images/site/avatar.png` with your professional photo (same as LinkedIn/GitHub).
Recommended: 512x512px minimum, JPEG or WebP.

### 2. Update site config
Edit `src/lib/config.ts` with your details (domain, email, social links).

### 3. Writing blog posts
Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Article Title"
description: "A brief description for SEO and social cards."
date: "2026-04-15"
category: "System Design"
coverImage: "/images/blog/your-article-slug/cover.png"
tags: ["kafka", "java", "distributed-systems"]
featured: false
---

Your article content in Markdown...
```

### 4. Adding images to an article

Images live in a folder named after the article slug:

```
public/images/blog/<slug>/cover.png     # card thumbnail (.jpg also fine)
public/images/blog/<slug>/diagram.png   # inline image
```

Reference them from MDX with an absolute path (`public/` is the web root):

```mdx
![A diagram](/images/blog/<slug>/diagram.png)
```

**Card thumbnails.** Set `coverImage` in the frontmatter to show a thumbnail on
the right of the article card, Medium-style. Posts without one fall back to a
category-tinted tile, so cards keep a consistent shape either way.

- **Shape:** any aspect ratio. The card sets the width and lets the height
  follow the image's own ratio, so nothing is cropped and there is no matte to
  show through in dark mode. Intrinsic size is read from the file header at
  build time by `src/lib/imageSize.ts` — no frontmatter bookkeeping needed.
- **Size:** ~1280px on the long edge is plenty. Cards render at 224px wide on
  desktop and full-bleed (up to ~640px) on mobile; larger files just sit in
  git, since Next downscales and serves WebP at the size actually needed.
- **Format:** PNG for diagrams generated losslessly, JPEG if the source is
  already JPEG. Either way Next re-encodes to WebP for delivery.
- **Replacing one:** optimized images are served `immutable`, so overwriting a
  cover under the same filename leaves stale copies in visitors' browser caches.
  Give the new file a different name and update `coverImage`.

### 5. Deploy to Vercel
1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add custom domain in Vercel dashboard
4. Submit sitemap to Google Search Console

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Generation)
- **Styling:** Tailwind CSS 4
- **Content:** MDX via next-mdx-remote
- **Fonts:** DM Serif Display + Plus Jakarta Sans + JetBrains Mono
- **Icons:** Lucide React + custom SVG brand icons
- **Hosting:** Vercel (free tier)

## Features

- ✅ Dark/light mode with system preference detection
- ✅ MDX blog with frontmatter, reading time, syntax highlighting
- ✅ Auto-generated sitemap.xml and RSS feed
- ✅ SEO metadata (Open Graph, Twitter Cards) on every page
- ✅ Privacy Policy & Terms pages (AdSense ready)
- ✅ Responsive design (mobile-first)
- ✅ Photo/avatar across all pages for brand consistency
- ✅ Static generation for maximum performance
- ✅ 404 custom page

## AdSense Setup (Phase 3)

When you're ready to add Google AdSense:

1. Add the AdSense script to `src/app/layout.tsx`:
```tsx
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
  crossOrigin="anonymous"
/>
```

2. Create an `AdUnit` component for manual ad placements.
3. Apply for AdSense after publishing 15-20 articles.

## Medium Cross-Posting

1. Publish article on your site first
2. Wait 1-2 days for Google to index it
3. Import to Medium via medium.com/p/import using your article URL
4. Verify canonical URL points to your site

The RSS feed at `/rss.xml` can also be used with Zapier/Make.com for automation.

## License

Content © Yasindu Dilshan. Code is MIT licensed.
