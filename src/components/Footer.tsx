"use client";

import { Code2, GitBranch, Mail, ArrowUp, Trophy } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">
              Vansh Jain<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Software Development Engineer • Parul University &amp; KyronDataTech
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <p className="text-xs text-muted-foreground text-center">
          © {currentYear} Vansh Jain. Built with Next.js 14, React 19 &amp; Tailwind CSS.
        </p>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vansh7818"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitBranch className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-blue-400 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/Vansh7818/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-amber-400 transition-colors"
          >
            <Trophy className="w-4 h-4" />
          </a>
          <a
            href="mailto:vanshj7818@gmail.com"
            aria-label="Email Vansh"
            className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
