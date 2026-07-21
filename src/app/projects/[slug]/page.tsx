"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronRight, ChevronLeft, X, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = content.projects.find((p) => p.slug === slug);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/#portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { details } = project;
  const isWeb = project.category === "Web Development";
  const gallery = (details.gallery || []).map((item: string | { src: string; caption?: string }) =>
    typeof item === "string" ? { src: item, caption: "" } : item
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % gallery.length);
  };
  const prevImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-sans">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{project.title}</span>
        </motion.div>

        {/* === HERO: Thumbnail + Gallery === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 auto-rows-[300px] sm:auto-rows-[360px] lg:auto-rows-[420px]"
        >
          {/* LEFT: Thumbnail */}
          <div
            className="rounded-2xl overflow-hidden border border-border cursor-pointer bg-muted/50 relative"
            onClick={() => gallery.length > 0 && openLightbox(0)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
              <span className="text-xs text-muted-foreground/40 font-sans">Tambah gambar</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>

          {/* RIGHT: Project Gallery */}
          {gallery.length > 0 && (
            <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden flex flex-col">
              <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider px-4 pt-3 pb-2 shrink-0">
                Project Gallery ({gallery.length})
              </p>
              <div className="flex-1 overflow-y-auto min-h-0 px-3 pb-3">
                <div className="flex flex-col gap-2">
                  {gallery.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      className="group relative w-full rounded-lg overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer bg-muted/40 shrink-0"
                      onClick={() => openLightbox(i)}
                    >
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-primary/5 to-accent/5">
                          <ImageIcon className="w-5 h-5 text-muted-foreground/30" />
                          <span className="text-[10px] text-muted-foreground/40 font-sans">{i + 1}</span>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.src}
                          alt={item.caption || `${project.title} - ${i + 1}`}
                          className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      {item.caption && (
                        <p className="px-2.5 py-2 text-[11px] font-sans text-muted-foreground leading-snug text-left">
                          {item.caption}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Category & Tags */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="px-3 py-1 text-xs font-heading font-semibold rounded-full bg-primary/10 text-primary uppercase tracking-wider">
            {project.category}
          </span>
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-sans text-muted-foreground rounded-full bg-foreground/5 border border-border/50">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6 leading-tight"
        >
          {project.title}
        </motion.h1>

        {/* Action Buttons */}
        {(isWeb && (project.links.github || project.links.demo)) && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
            {isWeb && project.links.github && project.links.github !== "#" && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-sans font-medium text-foreground hover:border-primary/30 hover:text-primary transition-all">
                <GithubIcon className="w-4 h-4" /> View Code
              </a>
            )}
            {isWeb && project.links.demo && project.links.demo !== "#" && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-sans font-medium hover:shadow-lg transition-all">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </motion.div>
        )}

        {/* Overview */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-10">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-base font-sans text-muted-foreground leading-relaxed">{details.overview}</p>
        </motion.section>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="p-5 rounded-2xl bg-card border border-border">
            <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-3">
              <span className="text-base">🎯</span>
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">The Challenge</h3>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">{details.challenge}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="p-5 rounded-2xl bg-card border border-border">
            <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-3">
              <span className="text-base">💡</span>
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">The Solution</h3>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">{details.solution}</p>
          </motion.div>
        </div>

        {/* Results */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-10">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">Results</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {details.results.map((result, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-heading font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Techniques */}
        {(details.technologies || details.techniques) && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mb-10">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
              {details.techniques ? "Techniques & Methods" : "Technologies Used"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {(details.technologies || details.techniques || []).map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-sm font-sans font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Tools */}
        {details.tools && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.57 }} className="mb-10">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-4">Equipment & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {details.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 text-sm font-sans font-medium rounded-full bg-foreground/5 text-muted-foreground border border-border/50">
                  {tool}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pt-8 border-t border-border">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-4 right-4 p-2 text-white/80 hover:text-white cursor-pointer z-10">
            <X className="w-8 h-8" />
          </button>
          {gallery.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 p-2 text-white/80 hover:text-white cursor-pointer z-10">
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].caption || `${project.title} - ${lightboxIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
            <p className="text-center text-white/60 text-sm font-sans mt-3">
              {lightboxIndex + 1} / {gallery.length}
              {gallery[lightboxIndex].caption && (
                <span className="block text-white/80 mt-1">{gallery[lightboxIndex].caption}</span>
              )}
            </p>
          </div>
          {gallery.length > 1 && (
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 p-2 text-white/80 hover:text-white cursor-pointer z-10">
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </main>
  );
}
