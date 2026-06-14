"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, Star, GitFork } from "lucide-react";

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const platforms = [
    {
      name: "GitHub",
      handle: "Vansh7818",
      url: "https://github.com/Vansh7818",
      description: "Full-stack, Java, and MERN projects with consistent commit history.",
      stats: [
        { icon: Star, label: "Public Repos", value: "6+" },
        { icon: GitFork, label: "Projects", value: "6" },
      ],
      color: "border-zinc-700/60 hover:border-zinc-500/60",
      accentColor: "text-white",
    },
    {
      name: "LeetCode",
      handle: "Vansh7818",
      url: "https://leetcode.com/Vansh7818/",
      description: "Daily DSA practice in Java — arrays, trees, graphs, DP, and interview sets.",
      stats: [
        { icon: Star, label: "Focus", value: "DSA" },
        { icon: GitFork, label: "Language", value: "Java" },
      ],
      color: "border-amber-700/40 hover:border-amber-500/50",
      accentColor: "text-amber-400",
    },
  ];

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Coding
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Where I build &amp; practice.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-xl border bg-card transition-all duration-200 card-hover ${platform.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className={`text-sm font-semibold ${platform.accentColor}`}>
                    {platform.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    @{platform.handle}
                  </p>
                </div>
                <GitBranch className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {platform.description}
              </p>

              <div className="flex gap-6">
                {platform.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub contribution embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-6 rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">Contribution Activity</p>
            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              View on GitHub →
            </a>
          </div>
          <div className="overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/6366f1/Vansh7818"
              alt="Vansh Jain GitHub contribution graph"
              className="w-full min-w-[600px] opacity-80 rounded"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
