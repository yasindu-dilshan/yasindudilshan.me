"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The inline script in the root layout already sets `.dark` on <html> before
 * first paint, so the correct icon can be chosen in CSS from that class. That
 * avoids holding the theme in React state, which previously meant rendering a
 * blank placeholder until mount and then swapping the icon in — a visible
 * flash on every page load, and a hydration mismatch risk besides.
 */
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
    >
      <Moon size={16} className="block dark:hidden" aria-hidden="true" />
      <Sun size={16} className="hidden dark:block" aria-hidden="true" />
    </button>
  );
}
