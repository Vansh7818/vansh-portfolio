"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Mail, Phone, MapPin, Check, Copy } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vanshj7818@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Vansh Jain — Resume
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <span>Software Development Engineer</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">Updated 2026</span>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Vansh_Jain_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span> PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Contact Bar for HR */}
            <div className="bg-secondary/40 px-5 py-2.5 border-b border-border flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1.5 text-foreground font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Vadodara, Gujarat
                </span>
                <a
                  href="tel:+917818086344"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" /> +91-7818086344
                </a>
                <a
                  href="mailto:vanshj7818@gmail.com"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" /> vanshj7818@gmail.com
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* PDF Viewer Frame */}
            <div className="flex-1 w-full bg-zinc-950 min-h-[500px] max-h-[calc(90vh-140px)] overflow-hidden relative">
              <object
                data="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                type="application/pdf"
                className="w-full h-full min-h-[520px]"
              >
                <div className="p-8 text-center flex flex-col items-center justify-center h-full gap-4">
                  <FileText className="w-12 h-12 text-primary/60" />
                  <p className="text-sm text-muted-foreground max-w-sm">
                    PDF preview is not supported directly by your browser engine. Click below to view or download Vansh&apos;s resume:
                  </p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm"
                  >
                    <Download className="w-4 h-4" /> Open Resume PDF
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
