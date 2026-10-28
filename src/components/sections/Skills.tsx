"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  BookOpen,
  Sparkles,
} from "lucide-react";
import skillsData from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  BookOpen,
};

const categoryBadgeStyles: Record<string, string> = {
  Languages: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Frontend: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Backend: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Databases: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Security: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  Tools: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  CoreCS: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Full-Stack &amp; Systems Tooling.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            A comprehensive matrix of technologies, frameworks, security protocols, and computer science foundations utilized in production environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2;
            const badgeClass =
              categoryBadgeStyles[group.category] ||
              "text-primary bg-primary/10 border-primary/20";

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${badgeClass}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground line-clamp-1">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg border transition-all ${
                          skill.highlight
                            ? "bg-primary/10 border-primary/30 text-foreground font-semibold"
                            : "bg-secondary/40 border-border text-muted-foreground font-medium"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-muted-foreground/80 font-mono">
                            • {skill.level}
                          </span>
                        )}
                      </span>
                    ))}
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
