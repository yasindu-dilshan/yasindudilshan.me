import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-c)] mt-20">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xs text-[var(--muted2)]">
          <span>&copy; {currentYear} {siteConfig.name}</span>
          <Link href="/privacy" className="hover:text-[var(--fg)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--fg)] transition-colors">Terms</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.author.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted2)] hover:text-[var(--fg)] transition-colors"
          >
            <GitHubIcon size={18} />
          </Link>
          <Link
            href={siteConfig.author.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted2)] hover:text-[var(--fg)] transition-colors"
          >
            <LinkedInIcon size={18} />
          </Link>
          <Link
            href={`mailto:${siteConfig.author.email}`}
            aria-label="Email"
            className="text-[var(--muted2)] hover:text-[var(--fg)] transition-colors"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="/rss.xml"
            aria-label="RSS Feed"
            className="text-[var(--muted2)] hover:text-[var(--fg)] transition-colors"
          >
            <Rss size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
