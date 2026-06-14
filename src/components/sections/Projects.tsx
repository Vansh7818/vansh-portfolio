"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, ArrowRight } from "lucide-react";
import projects from "@/data/projects";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Things I&apos;ve built.
            </h2>
            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all on GitHub <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured projects — large cards */}
        <div className="space-y-6 mb-6">
          {filtered
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card card-hover overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,oklch(0.6_0.2_264/6%),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative grid sm:grid-cols-[1fr_auto] gap-4">
                  <div className="space-y-3">
                    {/* Category badge */}
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md border border-primary/30 bg-primary/8 text-primary">
                      {project.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {project.longDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-xs font-mono rounded-md border border-border bg-secondary/60 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex sm:flex-col gap-2 justify-start items-start sm:items-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/40 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span className="hidden sm:inline">Source</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Non-featured — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="group p-5 rounded-xl border border-border bg-card card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded border border-border text-muted-foreground">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-border bg-secondary/50 text-muted-foreground"
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
