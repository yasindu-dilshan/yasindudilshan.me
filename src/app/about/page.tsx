import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yasindu Dilshan — Backend Engineer specializing in fintech, distributed systems, and Java/Spring Boot.",
};

const experience = [
  {
    role: "Software Engineer",
    company: "GTN Tech",
    period: "Jul 2023 — Present",
    highlights: [
      "Designing event-driven solutions processing millions of historical stock data records daily with Kafka and Spring Boot",
      "Built financial metadata management microservice supporting 40+ formats with S3 storage and ETag caching",
      "Developed trade backlog system with Redis caching, real-time/delayed data, and automatic failure recovery",
      "Led Phoenix Framework modernization — centralized framework replacing duplicate codebases across legacy monolith",
      "Taking end-to-end project ownership from architecture to production",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "GTN Tech",
    period: "Dec 2021 — Aug 2022",
    highlights: [
      "Built wrapper component for legacy MixWeb microservice",
      "Implemented profile-based authorization with Open Policy Agent",
      "Developed Kafka-based alerting library for real-time error management",
    ],
  },
];

const techStack = [
  { category: "Languages", items: "Java, Python" },
  { category: "Backend", items: "Spring Boot, RESTful APIs, JWT, Maven" },
  { category: "Data & Messaging", items: "Apache Kafka, PostgreSQL, Redis, MongoDB, Apache Solr, Elasticsearch" },
  { category: "Cloud & DevOps", items: "AWS (EC2, S3, MSK, ElastiCache), Linux, Git" },
  { category: "Other", items: "Flutter, React, Node.js, Playwright, Cucumber" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      {/* Header with photo */}
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-12 animate-fade-up">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-[3px] border-[var(--border-c)] shadow-sm flex-shrink-0">
          <Image
              src="/images/avatar.jpg"
            alt={siteConfig.name}
            fill
            className="object-cover object-[center_20%]"
            sizes="176px"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="font-heading text-3xl tracking-tight mb-2">
            About me
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
            I&apos;m Yasindu Dilshan, a software engineer at{" "}  
            <span className="text-[var(--fg)] font-medium">GTN Tech </span>  in
            Sri Lanka, where I work on the Price &amp; Market Backend Team
            building systems that power global trading infrastructure.
          </p>
          <div className="flex gap-3">
            <Link
              href={siteConfig.author.links.github}
              target="_blank"
              className="p-2 rounded-lg border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
            >
              <GitHubIcon size={18} />
            </Link>
            <Link
              href={siteConfig.author.links.linkedin}
              target="_blank"
              className="p-2 rounded-lg border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
            >
              <LinkedInIcon size={18} />
            </Link>
            <Link
              href={`mailto:${siteConfig.author.email}`}
              className="p-2 rounded-lg border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="mb-12 animate-fade-up anim-d1">
        <h2 className="font-heading text-xl mb-4">
          My story
        </h2>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            I graduated with First Class Honours from the University of Moratuwa
            — Sri Lanka&apos;s top engineering university — with a 3.77/4.2 GPA in
            Computer Science &amp; Engineering. I was on the Dean&apos;s List for 6 out
            of 8 semesters.
          </p>
          <p>
            My journey at GTN started as an intern in 2021. What began as working
            on wrapper components quickly evolved into designing full
            microservices architectures. Today, I own projects end-to-end — from
            requirements analysis through production deployment.
          </p>
          <p>
            I&apos;m passionate about solving complex backend challenges:
            event-driven architectures, real-time data processing, and building
            systems that are reliable at scale. Every day, the code I write
            handles millions of financial data records flowing through global
            stock exchanges.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12 animate-fade-up anim-d2">
        <h2 className="font-heading text-xl mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.period} className="relative pl-6 border-l-2 border-[var(--border-c)]">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]" />
              <div className="mb-2">
                <h3 className="font-semibold text-sm">{exp.role}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {exp.company} &middot; {exp.period}
                </p>
              </div>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-[var(--muted)] leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12 animate-fade-up anim-d3">
        <h2 className="font-heading text-xl mb-4">
          Tech stack
        </h2>
        <div className="grid gap-3">
          {techStack.map((t) => (
            <div
              key={t.category}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-c)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] w-32 flex-shrink-0">
                {t.category}
              </span>
              <span className="text-sm text-[var(--muted)] font-code">
                {t.items}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Publication */}
      <section className="mb-12 animate-fade-up anim-d4">
        <h2 className="font-heading text-xl mb-4">
          Publication
        </h2>
        <div className="p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)]">
          <h3 className="font-semibold text-sm leading-snug mb-2">
            A Novel Approach for Deep Learning-Powered Forecasting of Market
            Bottoms in Cryptocurrency and Stock Trading
          </h3>
          <p className="text-xs text-[var(--muted)] mb-3">
            D.M.D.K. Dasanayake, H.Y. Dilshan, H.D.K.Y. Rathnaweera, S.
            Ahangama, I. Perera
            <br />
            2023 IEEE International Conference on Big Data
          </p>
          <Link
            href="https://ieeexplore.ieee.org/document/10386273"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
          >
            Read on IEEE Xplore <ExternalLink size={12} />
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-up anim-d4">
        <h2 className="font-heading text-xl mb-4">
          Education
        </h2>
        <div className="p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)]">
          <h3 className="font-semibold text-sm mb-1">
            B.Sc. Engineering (Hons.) in Computer Science &amp; Engineering
          </h3>
          <p className="text-sm text-[var(--muted)] mb-2">
            University of Moratuwa, Sri Lanka &middot; 2018 — 2023
          </p>
          <p className="text-xs text-[var(--muted2)]">
            3.77 / 4.2 GPA (First Class) &middot; Dean&apos;s List 6/8 semesters
          </p>
        </div>
      </section>
    </div>
  );
}
