"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  CheckCircle,
  Briefcase,
  Terminal,
} from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Full-Stack System Architecture",
    description:
      "Designing decoupled, scalable applications with React 19, Next.js 14 App Router, Node.js/Express, and modern enterprise patterns.",
  },
  {
    icon: Cpu,
    title: "Enterprise Java & Backends",
    description:
      "Deep grounding in Java OOP, Spring Boot, Jakarta Servlets, JDBC connection pools, and GraphQL APIs with strict data validation.",
  },
  {
    icon: Terminal,
    title: "Algorithmic Problem Solving",
    description:
      "100+ LeetCode problems solved in Java focusing on Arrays, Two Pointers, Trees, Backtracking, and Dynamic Programming.",
  },
  {
    icon: Briefcase,
    title: "Production & FinTech Experience",
    description:
      "Hands-on internship experience at KyronDataTech developing banking dashboards, UPI workflows, and role-based access control.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
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
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Engineering with rigor and intent.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            A software engineer who bridges frontend user experience with resilient backend architectures and core CS fundamentals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Candidate Bio & Academic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Executive Candidate Summary
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am a final-year Computer Science undergraduate at{" "}
                <span className="text-foreground font-semibold">Parul University</span> and an active{" "}
                <span className="text-foreground font-semibold">Software Development Intern at KyronDataTech</span>.
                My engineering focus centers on developing high-availability full-stack web applications,
                RESTful and GraphQL service layers, and robust relational data models.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Having built and shipped applications ranging from an{" "}
                <span className="text-foreground font-medium">AI Career Platform</span> with Gemini and Next.js 14,
                to an <span className="text-foreground font-medium">Asynchronous Distributed Transaction Pipeline</span> in Python/Celery,
                and simulated <span className="text-foreground font-medium">Banking &amp; UPI Dashboards</span> in React and Java,
                I bring practical end-to-end delivery experience.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I back my development work with disciplined algorithmic problem solving, holding a track record of{" "}
                <span className="text-foreground font-medium">100+ LeetCode problems solved in Java</span> and
                multiple hackathon builds.
              </p>

              {/* Academic & Professional Badges */}
              <div className="pt-4 grid sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-border bg-secondary/40 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Parul University</p>
                    <p className="text-[11px] text-muted-foreground">B.Tech CSE (2023 – 2027)</p>
                    <p className="text-[11px] text-emerald-400 font-medium mt-0.5">CGPA: 7.66 / 10</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-secondary/40 flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Industry Readiness</p>
                    <p className="text-[11px] text-muted-foreground">KyronDataTech SDE Intern</p>
                    <p className="text-[11px] text-primary font-medium mt-0.5">Seeking SDE Roles 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="p-5 rounded-xl border border-border bg-card card-hover group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
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
