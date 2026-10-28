"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,oklch(0.64_0.22_264/4%),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Industry &amp; Engineering Experience.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Applying software engineering principles in production environments, building secure fintech interfaces and high-reliability systems.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card/90 backdrop-blur-sm card-hover relative overflow-hidden"
            >
              {/* Subtle top-edge accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/40" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/80 font-medium">
                    <span className="text-primary font-bold text-base">{exp.company}</span>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location} ({exp.type})
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 border border-border text-xs font-semibold text-foreground/90 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* High-level Description */}
              <p className="text-sm text-foreground/90 leading-relaxed mb-6 font-medium">
                {exp.description}
              </p>

              {/* Responsibilities / Accomplishments */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Key Contributions &amp; Architectural Impact
                </h4>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground mr-1">
                  Environment:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg border border-border bg-secondary/50 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
