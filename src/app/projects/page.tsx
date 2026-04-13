import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Projects",
  description: "Key projects by Yasindu Dilshan — from event-driven fintech systems to ML-powered market forecasting.",
};

const projects = [
  {
    title: "Stock History Data Pipeline",
    description:
      "Comprehensive event-driven solution handling millions of historical stock data records daily. Designed microservices architecture with reliable message streaming and search indexing.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Apache Solr"],
    type: "Professional — GTN Tech",
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

      <div className="space-y-4 animate-fade-up anim-d1">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-5 rounded-xl border border-[var(--border-c)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-semibold text-sm">
                  {project.title}
                </h3>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--accent)]">
                  {project.type}
                </span>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-1.5 rounded-md border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    <GitHubIcon size={14} />
                  </Link>
                )}
                {project.paper && (
                  <Link
                    href={project.paper}
                    target="_blank"
                    className="p-1.5 rounded-md border border-[var(--border-c)] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-medium font-code rounded-full border border-[var(--border-c)] text-[var(--muted2)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
