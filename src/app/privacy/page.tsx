import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <h1 className="font-heading text-3xl tracking-tight mb-8">
        Privacy Policy
      </h1>
      <div className="prose max-w-none text-[var(--muted)]">
        <p><strong>Last updated:</strong> April 2026</p>

        <h2>Information I collect</h2>
        <p>
          This website may collect basic analytics data such as page views,
          referral sources, and general geographic region through Google
          Analytics. This data is anonymized and used solely to understand how
          visitors interact with the site.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses cookies for essential functionality (such as
          remembering your theme preference) and for third-party services like
          Google Analytics and Google AdSense. You can disable cookies in your
          browser settings at any time.
        </p>

        <h2>Third-party services</h2>
        <p>This website may use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics</strong> — for anonymous usage statistics</li>
          <li><strong>Google AdSense</strong> — for displaying relevant advertisements</li>
          <li><strong>Vercel</strong> — for website hosting and analytics</li>
        </ul>
        <p>
          Each of these services has its own privacy policy governing how they
          collect and process data.
        </p>

        <h2>Your data rights</h2>
        <p>
          I do not sell or share your personal data with any third parties
          beyond the services listed above. If you have any questions about
          your data, please contact me at{" "}
          <a href="mailto:yasindudilshan98@gmail.com">
            yasindudilshan98@gmail.com
          </a>
          .
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This privacy policy may be updated from time to time. Any changes
          will be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
