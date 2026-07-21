"use client";

import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Microscope, FlaskConical, Dna, Atom } from "lucide-react";

const floatingIcons = [
  { Icon: Microscope, x: "10%", y: "20%", delay: 0, size: 28 },
  { Icon: FlaskConical, x: "85%", y: "15%", delay: 0.5, size: 24 },
  { Icon: Dna, x: "75%", y: "75%", delay: 1, size: 32 },
  { Icon: Atom, x: "15%", y: "70%", delay: 1.5, size: 26 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 dark:text-primary/5"
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

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Your Name</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0"
            >
              Biology Education Graduate | Research & Laboratory | Data
              Management | Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about bridging science and technology. With a strong
              foundation in biology education, hands-on laboratory experience,
              and growing expertise in web development, I bring a unique
              multidisciplinary perspective to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-all hover:-translate-y-0.5"
              >
                <FolderOpen className="w-4 h-4" />
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4">
                    <Microscope className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Professional Photo
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/10 border border-accent/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
