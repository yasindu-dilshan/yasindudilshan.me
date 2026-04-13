# yasindudilshan.dev

Personal website & technical blog — built with Next.js 15, Tailwind CSS, and MDX.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build
```

## Project Structure

```
├── content/blog/          # Blog articles (MDX files)
│   ├── kafka-consumer-lag-high-throughput.mdx
│   ├── etag-caching-spring-boot-financial-apis.mdx
│   └── intern-to-project-owner-career-growth.mdx
├── public/images/         # Static images
│   └── avatar.jpg         # ⚠️ REPLACE with your actual photo
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
Replace `public/images/avatar.jpg` with your professional photo (same as LinkedIn/GitHub).
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
tags: ["kafka", "java", "distributed-systems"]
featured: false
---

Your article content in Markdown...
```

### 4. Deploy to Vercel
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
