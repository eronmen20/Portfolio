"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  FileText,
  Database,
  Code,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    icon: Microscope,
    title: "Laboratory Skills",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Microbiology",
      "Biotechnology",
      "Laboratory Management",
      "Scientific Writing",
      "Sample Preparation",
      "Hematology",
      "Quality Control",
    ],
  },
  {
    icon: FlaskConical,
    title: "Research Skills",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Literature Review",
      "Research Design",
      "Data Analysis",
      "Report Writing",
      "Research Methodology",
      "Peer Review",
    ],
  },
  {
    icon: Database,
    title: "Data Management",
    color: "from-purple-500 to-violet-500",
    skills: [
      "Microsoft Excel",
      "Google Workspace",
      "Data Cleaning",
      "Database Management",
      "Documentation",
      "Data Visualization",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    color: "from-orange-500 to-amber-500",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Responsive Design",
      "UI Design",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "from-pink-500 to-rose-500",
    skills: [
      "Communication",
      "Problem Solving",
      "Leadership",
      "Teamwork",
      "Time Management",
      "Critical Thinking",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/50">
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
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning laboratory techniques, research
            methodology, data management, web development, and essential soft
            skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-foreground border border-border font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
