"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Database,
  Code,
} from "lucide-react";

const expertiseData = [
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50 dark:bg-green-950/30",
    description:
      "Passionate about teaching and creating engaging learning experiences that make complex biological concepts accessible.",
    skills: [
      "Teaching",
      "Learning Material Development",
      "Scientific Communication",
      "Educational Media",
      "Mentoring",
    ],
  },
  {
    icon: Microscope,
    title: "Research & Laboratory",
    color: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50 dark:bg-blue-950/30",
    description:
      "Hands-on experience in laboratory management, sample analysis, and scientific research with attention to quality control.",
    skills: [
      "Laboratory Management",
      "Sample Preparation",
      "Hematology",
      "Microbiology",
      "Biotechnology",
      "Quality Control",
      "Scientific Reporting",
    ],
  },
  {
    icon: Database,
    title: "Data Management",
    color: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50 dark:bg-purple-950/30",
    description:
      "Skilled in organizing, cleaning, and managing data with precision. Experienced in administrative support and documentation.",
    skills: [
      "Data Entry",
      "Data Cleaning",
      "Excel",
      "Documentation",
      "Database Management",
      "Report Preparation",
      "Digital Organization",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50 dark:bg-orange-950/30",
    description:
      "Building modern, responsive web applications with clean code and intuitive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git",
      "GitHub",
      "UI Design",
      "Frontend Development",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding">
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
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multidisciplinary skills spanning education, research, data
            management, and web development.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
