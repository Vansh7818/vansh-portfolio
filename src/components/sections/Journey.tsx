"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import timelineData from "@/data/timeline";

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.6_0.2_264/4%),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Growth timeline.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            My engineering journey — from first principles to production-grade systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-8">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 sm:gap-8 pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background ring-4 ring-primary/20" />

                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-full border border-primary/25 bg-primary/6 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
