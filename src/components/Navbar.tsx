"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, FileText, Mail, ArrowUpRight } from "lucide-react";
import ResumeModal from "@/components/ResumeModal";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/10 dark:shadow-black/25"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-all group-hover:scale-105">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground tracking-tight text-sm sm:text-base leading-none">
                  Vansh Jain<span className="text-primary">.</span>
                </div>
                <div className="text-[10px] text-muted-foreground font-mono mt-0.5 hidden xs:block">
                  Software Engineer
                </div>
              </div>
            </button>

            {/* Recruiter Availability Beacon */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for SDE Roles</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/60 border border-border/70 px-2 py-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  active === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-background border border-border shadow-sm rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold border border-border bg-card hover:bg-secondary rounded-xl text-foreground transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              Resume
            </button>

            <button
              onClick={() => handleNav("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold border border-border bg-secondary/80 rounded-lg text-foreground"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              Resume
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground bg-secondary/60 hover:bg-secondary border border-border/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-30 md:hidden bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-border text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available for SDE Roles</span>
                </span>
                <ThemeToggle />
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors text-left ${
                    active === link.href.slice(1)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{link.label}</span>
                  {active === link.href.slice(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              ))}

              <div className="flex flex-col gap-2.5 pt-4 border-t border-border mt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setIsResumeOpen(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-primary text-primary-foreground rounded-xl shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    View &amp; Download Resume
                  </button>
                </div>

                <div className="flex gap-2">
                  <a
                    href="mailto:vanshj7818@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium border border-border bg-card rounded-xl text-foreground"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    vanshj7818@gmail.com
                  </a>
                  <a
                    href="https://github.com/Vansh7818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium border border-border bg-card rounded-xl text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
