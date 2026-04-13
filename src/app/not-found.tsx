import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
      <h1 className="font-heading text-6xl mb-4 text-[var(--accent)]">
        404
      </h1>
      <p className="text-lg text-[var(--muted)] mb-8">
        This page doesn&apos;t exist — maybe it was moved or you followed a broken link.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
