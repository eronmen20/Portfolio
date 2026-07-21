"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Microscope,
  Users,
  Heart,
  Building,
} from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Teaching Assistant",
    institution: "University Name",
    duration: "2023 - 2024",
    description:
      "Assisted faculty in teaching biology courses, prepared laboratory materials, and mentored students in practical sessions.",
    achievement: "Improved student lab performance by 20%",
    type: "education",
  },
  {
    icon: Microscope,
    title: "Research Assistant",
    institution: "Research Laboratory",
    duration: "2023",
    description:
      "Conducted microbiology research, prepared samples, performed analysis, and contributed to scientific report writing.",
    achievement: "Co-authored research publication",
    type: "research",
  },
  {
    icon: Briefcase,
    title: "Laboratory Intern",
    institution: "Healthcare Institution",
    duration: "2022 - 2023",
    description:
      "Performed hematology tests, managed laboratory equipment, maintained quality control protocols, and documented results.",
    achievement: "Zero-error rate in sample processing",
    type: "lab",
  },
  {
    icon: Users,
    title: "Student Mentor",
    institution: "University Biology Department",
    duration: "2022 - 2023",
    description:
      "Mentored junior students in biology subjects, organized study groups, and facilitated learning workshops.",
    achievement: "Mentored 30+ students successfully",
    type: "education",
  },
  {
    icon: Heart,
    title: "Community Volunteer",
    institution: "Environmental Organization",
    duration: "2021 - 2022",
    description:
      "Participated in environmental conservation projects, community education programs, and scientific outreach activities.",
    achievement: "Organized 5 community workshops",
    type: "volunteer",
  },
  {
    icon: Building,
    title: "Administrative Intern",
    institution: "Research Institution",
    duration: "2022",
    description:
      "Managed research databases, prepared reports, organized documentation, and supported administrative operations.",
    achievement: "Streamlined data filing system",
    type: "admin",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experiences across education,
            research, laboratory, and administration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Spacer for mobile */}
                <div className="w-8 md:hidden flex-shrink-0" />

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                    <div
                      className={`flex items-start gap-4 ${
                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {exp.duration}
                        </span>
                        <h3 className="text-lg font-heading font-semibold mt-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {exp.institution}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {exp.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other side spacer (desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
