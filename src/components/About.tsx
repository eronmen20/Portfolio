"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Heart, Star, BookOpen } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "S.Pd. Biology Education",
    detail: "GPA: 3.XX / 4.00",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indonesia",
    detail: "Open to relocation",
  },
  {
    icon: Briefcase,
    label: "Career Interests",
    value: "Research, Lab, Education",
    detail: "Data Management & Web Dev",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "Science & Technology",
    detail: "Bridging biology & digital",
  },
  {
    icon: Star,
    label: "Strength",
    value: "Analytical Thinking",
    detail: "Detail-oriented & organized",
  },
  {
    icon: BookOpen,
    label: "Focus",
    value: "Continuous Learning",
    detail: "Always growing & adapting",
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
            A dedicated Biology Education graduate with a passion for science,
            research, and technology. I combine academic excellence with
            practical skills to deliver meaningful contributions.
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
              <p>
                As a fresh graduate in Biology Education, I have developed a
                strong foundation in scientific methodology, laboratory
                techniques, and educational practices. My academic journey has
                equipped me with both theoretical knowledge and hands-on
                experience in various biological disciplines.
              </p>
              <p>
                Beyond biology, I have cultivated skills in data management and
                web development, allowing me to approach problems with a unique
                multidisciplinary perspective. I believe that the intersection
                of science and technology holds the key to innovative solutions.
              </p>
              <p>
                I am detail-oriented, organized, and passionate about continuous
                learning. Whether it&apos;s conducting laboratory research,
                managing data, or building web applications, I bring the same
                level of dedication and analytical thinking to every task.
              </p>
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
                <p className="text-xs text-muted-foreground">{card.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
