"use client";

import { motion } from "framer-motion";
import { GraduationCap, Microscope, Database, Code } from "lucide-react";
import content from "@/data/content.json";

const iconMap: Record<string, React.ElementType> = {
  Education: GraduationCap,
  "Research & Laboratory": Microscope,
  "Data Management": Database,
  "Web Development": Code,
};

const colorMap: Record<string, string> = {
  Education: "from-blue-500 to-sky-500",
  "Research & Laboratory": "from-blue-500 to-cyan-500",
  "Data Management": "from-violet-500 to-purple-500",
  "Web Development": "from-orange-500 to-amber-500",
};

const bgMap: Record<string, string> = {
  Education: "bg-blue-50 dark:bg-blue-950/30",
  "Research & Laboratory": "bg-blue-50 dark:bg-blue-950/30",
  "Data Management": "bg-violet-50 dark:bg-violet-950/30",
  "Web Development": "bg-orange-50 dark:bg-orange-950/30",
};

const borderMap: Record<string, string> = {
  Education: "hover:border-blue-400/40",
  "Research & Laboratory": "hover:border-blue-400/40",
  "Data Management": "hover:border-violet-400/40",
  "Web Development": "hover:border-orange-400/40",
};

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
          {content.expertise.map((item, i) => {
            const Icon = iconMap[item.title] || Code;
            const color = colorMap[item.title] || "from-gray-500 to-gray-600";
            const bg = bgMap[item.title] || "bg-gray-50 dark:bg-gray-950/30";
            const borderHover = borderMap[item.title] || "hover:border-gray-400/40";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`group relative p-6 rounded-2xl bg-card border border-border ${borderHover} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Colorful top accent bar - always visible */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}
                  >
                    <Icon className="w-7 h-7 text-white" />
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
                          className={`px-3 py-1 text-xs font-medium rounded-full ${bg} text-foreground border border-border transition-colors`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
