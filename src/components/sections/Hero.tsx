"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link2, FileText, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.6_0.2_264/18%),transparent)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 pt-32 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to SWE Internships — 2026
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="shimmer-text">Vansh Jain</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                Full-Stack Developer &amp; Software Engineer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              B.Tech CSE student building{" "}
              <span className="text-foreground font-medium">scalable, production-grade</span>{" "}
              web applications with React, Next.js, Java, and Node.js.
              Focused on clean architecture, real-world deployment, and engineering quality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-secondary/50 rounded-xl font-semibold text-sm text-foreground hover:bg-secondary hover:border-primary/40 active:scale-95 transition-all"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>

              <a
                href="https://github.com/Vansh7818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-secondary/30 active:scale-95 transition-all text-sm font-medium"
              >
                <GitBranch className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-secondary/30 active:scale-95 transition-all text-sm font-medium"
              >
                <Link2 className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4 w-full"
            >
              {[
                { value: "7+", label: "Projects Deployed" },
                { value: "3rd", label: "Year B.Tech CSE" },
                { value: "2026", label: "Internship Ready" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-blue-500 opacity-20 blur-2xl group-hover:opacity-35 transition duration-500" />
              
              {/* Glass Card */}
              <div className="relative bg-card/30 border border-border/80 backdrop-blur-xl rounded-3xl p-4 shadow-2xl">
                <img
                  src="/images/profile.png"
                  alt="Vansh Jain"
                  className="w-[280px] sm:w-[320px] md:w-[340px] rounded-2xl object-cover border border-border/40 shadow-inner"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hidden lg:flex"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
