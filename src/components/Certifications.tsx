"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Laboratory Safety Certification",
    issuer: "Health & Safety Institute",
    date: "2024",
    description: "Comprehensive laboratory safety and hazard management certification.",
    credential: "#",
  },
  {
    title: "Scientific Writing Workshop",
    issuer: "University Research Center",
    date: "2023",
    description: "Advanced scientific writing and research paper composition.",
    credential: "#",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Online Learning Platform",
    date: "2024",
    description: "Full-stack web development fundamentals with modern technologies.",
    credential: "#",
  },
  {
    title: "Data Analysis with Excel",
    issuer: "Professional Development Institute",
    date: "2023",
    description: "Advanced data analysis, visualization, and reporting techniques.",
    credential: "#",
  },
  {
    title: "Microbiology Techniques",
    issuer: "Biology Department",
    date: "2023",
    description: "Hands-on microbiology laboratory techniques and procedures.",
    credential: "#",
  },
  {
    title: "Google IT Support Certificate",
    issuer: "Google via Coursera",
    date: "2024",
    description: "IT support fundamentals including networking, security, and troubleshooting.",
    credential: "#",
  },
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
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Certificate icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-7 h-7 text-primary" />
              </div>

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

              <a
                href={cert.credential}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Credential
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
