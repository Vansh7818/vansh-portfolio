"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Trophy,
  CheckCircle2,
  ExternalLink,
  Code2,
  GraduationCap,
  Cloud,
  Cpu,
  ShieldAlert,
} from "lucide-react";
import { achievements, certifications, education } from "@/data/experience";

export default function Credentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors, Certifications &amp; Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Verified Credentials &amp; Milestones.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Academic achievements, verified certifications from industry leaders, and competitive algorithmic problem-solving track record.
          </p>
        </motion.div>

        {/* 3-Column Grid: DSA & Achievements, Certifications, Education */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Algorithmic Problem Solving & Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Achievements
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    DSA &amp; Hackathons
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl border border-border/80 bg-secondary/30">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-bold text-foreground">
                        {item.title}
                      </p>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-2 hover:underline"
                      >
                        <span>View LeetCode Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Industry Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="p-6 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Cloud &amp; Artificial Intelligence
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-xl border border-border/80 bg-secondary/30 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-primary">
                        {cert.issuer}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-xs font-semibold text-foreground leading-snug">
                      {cert.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Academic Degree & Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 rounded-2xl border border-border bg-card/85 backdrop-blur-sm card-hover flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Education
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Computer Science Engineering
                  </p>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.institution} className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-border/80 bg-secondary/30">
                    <p className="text-xs font-bold text-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {edu.degree}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/60">
                      <span className="text-[11px] text-muted-foreground">{edu.period}</span>
                      <span className="text-xs font-bold text-emerald-400">{edu.grade}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border/80 bg-secondary/30">
                    <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Coursework Focus
                    </p>
                    <ul className="space-y-1 text-xs text-foreground/80 leading-relaxed">
                      <li>• Data Structures &amp; Algorithms (DSA in Java)</li>
                      <li>• Database Management Systems &amp; SQL</li>
                      <li>• Operating Systems &amp; Computer Networks</li>
                      <li>• Object-Oriented Software Design</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
