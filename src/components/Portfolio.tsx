"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const categories = [
  "All",
  "Education",
  "Research",
  "Data Management",
  "Web Development",
];

const projects = [
  {
    title: "Interactive Biology Learning Module",
    description:
      "An interactive e-learning platform for biology students featuring quizzes, simulations, and progress tracking.",
    category: "Education",
    tags: ["HTML", "CSS", "JavaScript", "Education"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
  {
    title: "Microbiology Lab Report System",
    description:
      "Digital system for recording and managing microbiology laboratory results with automated analysis.",
    category: "Research",
    tags: ["Research", "Data Analysis", "Documentation"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
  {
    title: "Student Performance Dashboard",
    description:
      "Excel-based dashboard for tracking and analyzing student academic performance across multiple metrics.",
    category: "Data Management",
    tags: ["Excel", "Data Cleaning", "Visualization"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
  {
    title: "Scientific Writing Workshop Materials",
    description:
      "Comprehensive teaching materials for scientific writing workshops targeting undergraduate students.",
    category: "Education",
    tags: ["Teaching", "Scientific Writing", "Materials"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
  {
    title: "Sample Tracking Application",
    description:
      "Web-based application for tracking laboratory samples from collection to analysis with status updates.",
    category: "Research",
    tags: ["Web App", "Database", "Laboratory"],
    image: "/placeholder-project.svg",
    github: "#",
    demo: "#",
    view: "#",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects across education, research, data management,
            and web development.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-2">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Project Preview
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <a
                      href={project.view}
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                      title="View Project"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
