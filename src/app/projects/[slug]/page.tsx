"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const project = content.projects.find((p) => p.slug === slug);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { details } = project;
  const isWeb = project.category === "Web Development";

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{project.title}</span>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden mb-8 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".fallback")) {
                const fallback = document.createElement("div");
                fallback.className = "fallback text-center";
                fallback.innerHTML = `
                  <div style="width:80px;height:80px;margin:0 auto 12px;border-radius:16px;background:rgba(45,138,78,0.2);display:flex;align-items:center;justify-content:center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary)"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <p style="font-size:14px;color:var(--muted-foreground)">Tambah gambar di<br/><strong>public/images/projects/</strong></p>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
        </motion.div>

        {/* Category & Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
            {project.category}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-heading font-bold mb-6"
        >
          {project.title}
        </motion.h1>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {isWeb && project.links.github && project.links.github !== "#" && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:border-primary/30 hover:text-primary transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              View Code
            </a>
          )}
          {isWeb && project.links.demo && project.links.demo !== "#" && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {details.overview}
          </p>
        </motion.section>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-4">
              <span className="text-lg">🎯</span>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3">
              The Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-4">
              <span className="text-lg">💡</span>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3">
              The Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.solution}
            </p>
          </motion.div>
        </div>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">Results</h2>
          <div className="space-y-3">
            {details.results.map((result, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                </div>
                <p className="text-muted-foreground">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {details.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-border"
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
