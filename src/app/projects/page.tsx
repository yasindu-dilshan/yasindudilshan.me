import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { getImageSize } from "@/lib/imageSize";

export const metadata: Metadata = {
  title: "Projects",
  description: "Key projects by Yasindu Dilshan — from event-driven fintech systems to ML-powered market forecasting.",
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
  github?: string;
  paper?: string;
  /** Optional diagram, rendered as a full-width figure inside the card. Most
   *  projects have none, so it sits in the card flow rather than in a fixed
   *  side column — that way cards without one are not left with a gap. */
  image?: string;
  imageAlt?: string;
}

const projects: Project[] = [
  {
    title: "Stock History Data Pipeline",
    description:
      "Comprehensive event-driven solution handling millions of historical stock data records daily. Designed microservices architecture with reliable message streaming and search indexing.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Apache Solr"],
    type: "Professional — GTN Tech",
    image: "/images/projects/stock-history-data-pipeline/architecture.png",
    imageAlt:
      "Architecture diagram: three vendor feeds flow into per-vendor extractors that publish to Kafka, where a Solr writer and a DB writer fan out to Apache Solr and the database. The whole region is mirrored to a second region through MSK Replicator.",
  },
  {
    title: "Phoenix Framework",
    description:
      "Centralized Java framework to modernize a large legacy monolithic application. Extracts common functionalities, shared libraries, and security components into a reusable library, eliminating code duplication across components.",
    tech: ["Java", "Apache Maven"],
    type: "Professional — GTN Tech",
  },
  {
    title: "Trade Backlog Solution",
    description:
      "Backend system managing real-time and delayed trade data from multiple stock exchanges. Features Redis caching, health monitoring, automatic recovery, data compression, and configurable per-exchange delays.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Redis"],
    type: "Professional — GTN Tech",
  },
  {
    title: "File Service Application",
    description:
      "Financial metadata management microservice with RESTful APIs, JWT authentication, support for 40+ metadata formats, S3 storage, ETag caching, and scheduled batch distribution.",
    tech: ["Java", "Spring Boot", "AWS S3"],
    type: "Professional — GTN Tech",
  },
  {
    title: "ML Forecasting for Market Movements",
    description:
      "Predicting cryptocurrency and stock market bottom turning points using a Wasserstein GAN combined with GRU networks. Published at IEEE International Conference on Big Data 2023.",
    tech: ["Python", "Machine Learning", "Deep Learning", "GAN"],
    type: "Final Year Project",
    github: "https://github.com/FYP-Team-Predictors",
    paper: "https://ieeexplore.ieee.org/document/10386273",
    image: "/images/projects/ml-forecasting-market-movements/architecture.jpg",
    imageAlt:
      "Architecture diagram: input features and technical indicators pass through PCA into a price prediction model, where a GRU generator and CNN discriminator train adversarially, feeding an XGBoost classifier that outputs the next-day close price and the probability of a market bottom.",
  },
  {
    title: "Sinhala Metaphor Search Engine",
    description:
      "Elasticsearch-based search engine that efficiently finds Sinhala metaphors in a text corpus. Built as an individual semester project for Information Retrieval.",
    tech: ["Elasticsearch", "Angular", "Node.js"],
    type: "Semester Project",
    github: "https://github.com/yasindu-dilshan/IR_Project-Sinhala_Song_Search_Engine",
  },
  {
    title: "CropAid Mobile Application",
    description:
      "Mobile app for assessing crop damage and facilitating compensation claims for farmers, built with Flutter and Firebase.",
    tech: ["Flutter", "Dart", "Firebase"],
    type: "Semester Project",
    github: "https://github.com/yasindu-dilshan/CropAid-App",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <div className="mb-10 animate-fade-up">
        <h1 className="font-heading text-3xl tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg">
          A selection of professional work and personal projects spanning
          fintech infrastructure, distributed systems, and machine learning.
        </p>
      </div>

      {/* One column. A two-column grid reads better for short text cards, but the
          architecture diagrams here run to 2.6:1 — at half width their labels
          drop to a few pixels tall. Full-width figure cards then break the grid's
          parity and leave an empty cell beside whichever card precedes them, so
          the column wins. Scanning is carried by the eyebrow/title hierarchy. */}
      <div className="flex flex-col gap-4 animate-fade-up anim-d1">
        {projects.map((project) => {
          const size = project.image ? getImageSize(project.image) : null;
          const hasLinks = Boolean(project.github || project.paper);

          return (
            <article
              key={project.title}
              className="flex flex-col p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)] shadow-sm"
            >
              {/* Type reads as an eyebrow, so it belongs above the title. It was
                  below it in accent — the loudest colour on the page spent on
                  the least important line. */}
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted2)] mb-2">
                {project.type}
              </p>

              {/* h2, not h3: these are the only sections under the page h1, and
                  the jump skipped a level. But globals.css maps h1/h2 to the
                  display serif, which at 16px is cramped and has no real 600
                  weight to bold with — so font-body keeps the sans while the
                  heading level stays correct. text-base outranks the 14px
                  description; leading-normal gives wrapped titles room. */}
              <h2 className="font-body font-semibold text-base leading-normal mb-3">
                {project.title}
              </h2>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {project.description}
              </p>

              {size && (
                // Intrinsic size lets the figure keep its own aspect ratio, so
                // there is no fixed box to letterbox against in dark mode.
                <figure className="mb-4">
                  <Image
                    src={project.image!}
                    alt={project.imageAlt ?? ""}
                    width={size.width}
                    height={size.height}
                    sizes="(max-width: 768px) 100vw, 680px"
                    className="w-full h-auto rounded-lg border border-[var(--border-c)] bg-white"
                  />
                </figure>
              )}

              {/* mt-auto pins the footer to the bottom so tech and links line up
                  across cards of differing text length in the same grid row. */}
              <div className="mt-auto">
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-medium font-code rounded-full border border-[var(--border-c)] text-[var(--muted)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Labelled buttons rather than bare 26px icons: the icons gave
                    no clue whether they led to code or a paper, and the hit
                    target was under the 24px minimum. */}
                {hasLinks && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--border-c)]">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title} (opens in a new tab)`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-c)] text-xs font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
                      >
                        <GitHubIcon size={13} />
                        Code
                      </Link>
                    )}
                    {project.paper && (
                      <Link
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Published paper for ${project.title} (opens in a new tab)`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-c)] text-xs font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
                      >
                        <ExternalLink size={13} />
                        Paper
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
