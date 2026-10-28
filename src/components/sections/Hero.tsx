"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  GitBranch,
  Copy,
  Check,
  Code2,
  Sparkles,
  MapPin,
  Building2,
  Terminal,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import ResumeModal from "@/components/ResumeModal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vanshj7818@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Grids & Ambient Lights */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Recruiter Pitch & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
          >
            {/* Status badges */}
            <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to SDE Intern &amp; Full-Time Roles (2026–2027)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/60 text-muted-foreground text-xs font-medium">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span>KyronDataTech Intern</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="shimmer-text">Vansh Jain</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-foreground/90 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Software Development Engineer</span>
                <span className="text-primary hidden sm:inline">•</span>
                <span className="text-muted-foreground font-normal text-base sm:text-xl">
                  Full-Stack &amp; Enterprise Java
                </span>
              </h2>
            </motion.div>

            {/* Professional Summary for HR */}
            <motion.p
              variants={item}
              className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              Final-year B.Tech Computer Science undergraduate at{" "}
              <span className="text-foreground font-medium">Parul University (CGPA 7.66)</span> and{" "}
              <span className="text-foreground font-medium">Software Development Intern at KyronDataTech</span>.
              Specialized in building scalable, production-grade applications with{" "}
              <span className="text-foreground font-medium">React 19, Next.js 14, Java REST APIs, and Spring Boot</span>.
              Strong foundation in Data Structures &amp; Algorithms with 100+ LeetCode problems solved.
            </motion.p>

            {/* Quick Location & Email info */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="hidden sm:block text-border">•</div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group cursor-pointer"
                title="Click to copy email"
              >
                <span>vanshj7818@gmail.com</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>
            </motion.div>

            {/* High-Impact Action CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full pt-1"
            >
              {/* Primary: View Projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View / Download Resume */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-card hover:bg-secondary rounded-xl font-bold text-sm text-foreground active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>View Resume</span>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/Vansh7818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-border bg-secondary/40 hover:bg-secondary rounded-xl text-foreground font-semibold text-sm active:scale-95 transition-all"
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-border bg-secondary/40 hover:bg-secondary rounded-xl text-foreground font-semibold text-sm active:scale-95 transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar for Recruiters */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 w-full border-t border-border/80"
            >
              {[
                { value: "100+", label: "LeetCode DSA Solved", sub: "Java Focus" },
                { value: "7+", label: "Production Projects", sub: "Live & GitHub" },
                { value: "7.66", label: "Parul University", sub: "B.Tech CSE" },
                { value: "Active", label: "KyronDataTech", sub: "SDE Intern" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-card/60 border border-border/60 text-center lg:text-left"
                >
                  <p className="text-lg sm:text-2xl font-black text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-foreground/90 mt-0.5 truncate">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-blue-500/20 to-purple-500/20 blur-2xl opacity-70" />

              {/* Glass Frame Card */}
              <div className="relative rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl p-3 sm:p-4 shadow-2xl">
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-border/50">
                  <img
                    src="/images/profile.jpg"
                    alt="Vansh Jain — Software Engineer in suit"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                  {/* Card bottom banner inside photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-background/80 backdrop-blur-md border border-border/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-foreground">Vansh Jain</p>
                        <p className="text-[11px] text-muted-foreground">Software Development Engineer</p>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Chips around Card */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-secondary/60 border border-border/60">
                    <Terminal className="w-4 h-4 text-primary shrink-0" />
                    <div className="truncate">
                      <p className="font-semibold text-foreground text-[11px]">Core DSA</p>
                      <p className="text-[10px] text-muted-foreground">Java &amp; OOP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-secondary/60 border border-border/60">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <p className="font-semibold text-foreground text-[11px]">Full Stack</p>
                      <p className="text-[10px] text-muted-foreground">React &amp; Next.js 14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
