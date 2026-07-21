"use client";

import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Microscope, FlaskConical, Dna, Atom } from "lucide-react";
import profile from "@/data/profile.json";

const floatingIcons = [
  { Icon: Microscope, x: "10%", y: "20%", delay: 0, size: 28, color: "text-emerald-500/20" },
  { Icon: FlaskConical, x: "85%", y: "15%", delay: 0.5, size: 24, color: "text-violet-500/20" },
  { Icon: Dna, x: "75%", y: "75%", delay: 1, size: 32, color: "text-blue-500/20" },
  { Icon: Atom, x: "15%", y: "70%", delay: 1.5, size: 26, color: "text-orange-500/20" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, size, color }, i) => (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{ left: x, top: y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}

        {/* Colorful gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {profile.status}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={profile.cvFile}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted hover:border-violet-300 dark:hover:border-violet-700 transition-all hover:-translate-y-0.5"
              >
                <FolderOpen className="w-4 h-4" />
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-violet-500/20 to-orange-500/20 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".fallback")) {
                      const fallback = document.createElement("div");
                      fallback.className = "fallback text-center p-8";
                      fallback.innerHTML = `
                        <div style="width:96px;height:96px;margin:0 auto 16px;border-radius:50%;background:linear-gradient(135deg,rgba(16,185,129,0.2),rgba(139,92,246,0.2));display:flex;align-items:center;justify-content:center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary)"><path d="M6 19h4"/><path d="M10 19h4"/><path d="M14 19h4"/><path d="M18 19h2"/><path d="M6 6h4"/><path d="M10 6h4"/><path d="M14 6h4"/><path d="M18 6h2"/><path d="M8 6V4"/><path d="M16 6V4"/><path d="M8 6v6"/><path d="M16 6v6"/></svg>
                        </div>
                        <p style="font-size:14px;color:var(--muted-foreground)">Tambah foto di<br/><strong>public/images/profile.svg</strong></p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Colorful decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
