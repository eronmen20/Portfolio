"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import data from "@/data/skills.json";

const accentColors = [
  "from-blue-500 to-sky-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-orange-500 to-amber-500",
  "from-pink-500 to-rose-500",
  "from-blue-500 to-violet-500",
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my skills and
            commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certifications.map((cert, i) => {
            const accent = accentColors[i % accentColors.length];

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Colorful top accent - always visible */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent}`}
                />

                {/* Certificate image */}
                {cert.image && cert.image !== "" && (
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-border/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-muted/50"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted-foreground)"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>`;
                        }
                      }}
                    />
                  </div>
                )}

                {/* Certificate icon — only if no image */}
                {(!cert.image || cert.image === "") && (
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                )}

                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                  <span className="text-border">•</span>
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {cert.credential && cert.credential !== "#" && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
