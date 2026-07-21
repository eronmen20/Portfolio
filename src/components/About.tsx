"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Heart, Star, BookOpen } from "lucide-react";
import profile from "@/data/profile.json";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: profile.education.degree,
    detail: `GPA: ${profile.education.gpa}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    detail: profile.relocation,
  },
  {
    icon: Briefcase,
    label: "Career Interests",
    value: profile.careerInterests.slice(0, 3).join(", "),
    detail: profile.careerInterests.slice(3).join(", ") || "",
  },
  {
    icon: Heart,
    label: "Passion",
    value: profile.passion,
    detail: profile.passionDetail,
  },
  {
    icon: Star,
    label: "Strength",
    value: profile.strength,
    detail: profile.strengthDetail,
  },
  {
    icon: BookOpen,
    label: "Focus",
    value: profile.focus,
    detail: profile.focusDetail,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/50">
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
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated {profile.education.degree} graduate with a passion for
            science, research, and technology.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Bridging Science & Technology
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {profile.aboutDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className="text-sm font-semibold mb-0.5">{card.value}</p>
                {card.detail && (
                  <p className="text-xs text-muted-foreground">{card.detail}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
