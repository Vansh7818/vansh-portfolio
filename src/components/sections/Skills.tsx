"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Monitor, Server, Database, Wrench, BookOpen } from "lucide-react";
import skillsData from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  BookOpen,
};

const categoryColors: Record<string, string> = {
  Languages: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Backend: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Databases: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Tools & DevOps": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Core CS": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,oklch(0.6_0.2_264/4%),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tech stack &amp; tooling.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Technologies I use to build full-stack applications, from UI to database to deployment.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            const colorClass =
              categoryColors[category.category] ||
              "text-primary bg-primary/10 border-primary/20";

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-5 rounded-xl border border-border bg-card card-hover group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center ${colorClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04 }}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
