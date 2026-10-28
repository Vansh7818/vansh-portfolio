"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, ArrowRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import projectsData, { Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

const categories = ["All", "Full Stack", "AI & Systems", "Backend"] as const;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Production-Ready Systems.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
                Curated portfolio of real-world applications, enterprise tools, and distributed architectures. Zero filler, genuine implementation.
              </p>
            </div>
            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline shrink-0"
            >
              <span>Explore GitHub Repos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all shrink-0 cursor-pointer ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent line if featured */}
              {project.featured && (
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-transparent" />
              )}

              <div>
                {/* Header row: Category & Badge & Links */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-primary/30 bg-primary/10 text-primary">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        title="View Live Deployment"
                        aria-label="View Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key architectural highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: Tech Stack & Deep Dive Trigger */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded border border-border bg-secondary/30 text-muted-foreground">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer shrink-0"
                >
                  <span>Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
