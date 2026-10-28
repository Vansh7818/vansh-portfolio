"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { History, Briefcase, GraduationCap, Code2 } from "lucide-react";
import timelineData from "@/data/timeline";

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "experience":
        return Briefcase;
      case "education":
        return GraduationCap;
      default:
        return Code2;
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Progression &amp; Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Engineering Timeline.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            A chronological view of academic grounding, self-directed systems engineering, and active internship delivery.
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative max-w-3xl">
          {/* Vertical track line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-4 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {timelineData.map((item, i) => {
              const Icon = getIcon(item.type);

              return (
                <motion.div
                  key={item.role + item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex gap-5 sm:gap-6 pl-12 sm:pl-16"
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-6 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-sm shadow-primary/30">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <span className="text-xs font-bold text-primary font-mono tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.organization}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {item.role}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md border border-border bg-secondary/50 text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
