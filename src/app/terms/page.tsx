import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <h1 className="font-heading text-3xl tracking-tight mb-8">
        Terms of Service
      </h1>
      <div className="prose max-w-none text-[var(--muted)]">
        <p><strong>Last updated:</strong> April 2026</p>

        <h2>Use of this website</h2>
        <p>
          This website is a personal blog and portfolio maintained by Yasindu
          Dilshan. By accessing this site, you agree to these terms. If you
          do not agree, please do not use the site.
        </p>

        <h2>Content</h2>
        <p>
          All articles, code snippets, and other content on this website are
          provided for informational and educational purposes. While I strive
          for accuracy, I make no guarantees about the completeness or
          correctness of the information provided.
        </p>
        <p>
          Code examples are provided as-is and should be reviewed and tested
          before use in production environments.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, all content on this website is the
          intellectual property of Yasindu Dilshan. You may share articles
          with proper attribution and a link back to the original post.
        </p>

        <h2>External links</h2>
        <p>
          This site may contain links to external websites. I am not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2>Advertisements</h2>
        <p>
          This website may display advertisements through Google AdSense.
          These ads are served by Google and are subject to Google&apos;s own
          terms and privacy policies.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind. I shall not be liable for any damages
          arising from the use of this website.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be updated at any time. Continued use of the site
          after changes constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact me at{" "}
          <a href="mailto:yasindudilshan98@gmail.com">
            yasindudilshan98@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
