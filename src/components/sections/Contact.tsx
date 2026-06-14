"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link2, FileText, ArrowRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "vanshjain7818@gmail.com",
    href: "mailto:vanshjain7818@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/Vansh7818",
    href: "https://github.com/Vansh7818",
    description: "See my projects & code",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/vansh-jain-809b442b9",
    href: "https://www.linkedin.com/in/vansh-jain-809b442b9/",
    description: "Professional network",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,oklch(0.6_0.2_264/8%),transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let&apos;s build something{" "}
              <span className="shimmer-text">impactful</span>.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I&apos;m actively seeking software engineering internships for 2026.
              Whether you have a role, a project, or just want to connect — I&apos;d love
              to hear from you.
            </p>
          </motion.div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group p-5 rounded-xl border border-border bg-card card-hover flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{link.description}</p>
                <p className="text-sm font-semibold text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
                  {link.value}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ArrowRight className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <a
            href="/Vansh_Jain_Resume (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
