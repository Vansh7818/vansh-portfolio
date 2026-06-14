"use client";

import { GitBranch, Link2, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            Vansh Jain<span className="text-primary">.</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground order-last sm:order-none">
          © {year} Vansh Jain. Built with Next.js &amp; Tailwind CSS.
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[
            { Icon: GitBranch, href: "https://github.com/Vansh7818", label: "GitHub" },
            {
              Icon: Link2,
              href: "https://www.linkedin.com/in/vansh-jain-809b442b9/",
              label: "LinkedIn",
            },
            { Icon: Mail, href: "mailto:vanshjain7818@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
