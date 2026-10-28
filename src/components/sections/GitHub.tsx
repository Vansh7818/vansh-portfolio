"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const platforms = [
    {
      name: "GitHub",
      handle: "Vansh7818",
      url: "https://github.com/Vansh7818",
      description:
        "Full-stack web applications, Java enterprise systems, microservices, and modern UI engineering with active commits.",
      stats: [
        { label: "Public Repos", value: "13+" },
        { label: "Active Stacks", value: "React & Java" },
      ],
      badgeColor: "border-zinc-700 bg-zinc-800/60 text-white",
      accent: "text-white",
    },
    {
      name: "LeetCode",
      handle: "Vansh7818",
      url: "https://leetcode.com/Vansh7818/",
      description:
        "Consistent daily practice in Java covering core DSA: Arrays, Two Pointers, Trees, Backtracking, and Dynamic Programming.",
      stats: [
        { label: "Problems Solved", value: "100+" },
        { label: "Primary Language", value: "Java" },
      ],
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      accent: "text-amber-400",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Code &amp; Problem Solving.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Where I push production code, review architectural patterns, and sharpen algorithmic fluency.
          </p>
        </motion.div>

        {/* 2 Platform Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className={`text-lg font-bold ${platform.accent}`}>
                        {platform.name}
                      </p>
                      <span className="text-xs text-muted-foreground font-mono">
                        @{platform.handle}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg border border-border group-hover:border-primary/40 group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-8">
                {platform.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-lg font-bold text-foreground">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Contribution Heatmap Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-6 rounded-2xl border border-border bg-card/85 backdrop-blur-sm overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <p className="text-sm font-bold text-foreground">
                GitHub Contribution Activity
              </p>
              <p className="text-xs text-muted-foreground">
                Public commits, pull requests, and open-source code
              </p>
            </div>
            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>View github.com/Vansh7818</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="overflow-x-auto py-2">
            <img
              src="https://ghchart.rshah.org/6366f1/Vansh7818"
              alt="Vansh Jain GitHub contribution graph"
              className="w-full min-w-[650px] opacity-85 hover:opacity-100 transition-opacity rounded"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
