"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, Rocket, Coffee } from "lucide-react";

const traits = [
  {
    icon: Target,
    title: "Engineering Mindset",
    description:
      "I approach every project with a focus on scalability, maintainability, and clean architecture — not just making it work, but making it right.",
  },
  {
    icon: Zap,
    title: "Consistent Builder",
    description:
      "From REST APIs to interactive UIs, I ship full-stack applications end-to-end, deploying to Vercel and integrating real-world APIs.",
  },
  {
    icon: Rocket,
    title: "Production-Focused",
    description:
      "I care about code quality, folder structure, and patterns that scale. Every project is built as if it's going into production.",
  },
  {
    icon: Coffee,
    title: "Always Learning",
    description:
      "DSA in Java, Next.js App Router, Spring Boot — I'm continuously pushing my depth across the full engineering stack.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Building with intent.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              I&apos;m <span className="text-foreground font-semibold">Vansh Jain</span>,
              a 3rd-year B.Tech Computer Science student and full-stack developer. I build
              modern web applications that go beyond functioning demos — I focus on
              <span className="text-foreground"> clean architecture</span>,
              <span className="text-foreground"> real deployment</span>, and
              <span className="text-foreground"> engineering quality</span>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My work spans the full stack: interactive React frontends, RESTful Node.js
              backends, Java enterprise systems, and MongoDB/MySQL databases. I deploy on
              Vercel and build APIs that are structured to grow.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Alongside development, I practice Data Structures &amp; Algorithms daily in
              Java — preparing for technical interviews with the same rigor I bring to
              every project I ship.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-lg border border-border bg-secondary/40 text-sm">
                <span className="text-muted-foreground">Currently</span>{" "}
                <span className="text-foreground font-medium">
                  B.Tech CSE, 3rd Year
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg border border-border bg-secondary/40 text-sm">
                <span className="text-muted-foreground">Goal</span>{" "}
                <span className="text-foreground font-medium">
                  SWE Intern 2026
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg border border-border bg-secondary/40 text-sm">
                <span className="text-muted-foreground">Focus</span>{" "}
                <span className="text-foreground font-medium">
                  Full Stack + DSA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="p-5 rounded-xl border border-border bg-card card-hover group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <trait.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {trait.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
