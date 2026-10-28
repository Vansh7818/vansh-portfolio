"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  FileText,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import ResumeModal from "@/components/ResumeModal";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Quick message form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vanshj7818@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:vanshj7818@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Recruiter"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(0.64_0.22_264/8%),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Ready to create something <span className="shimmer-text">exceptional</span>.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I am actively seeking Software Development Engineer internships and entry-level engineering roles for 2026–2027.
              Reach out directly to discuss opportunities or technical collaborations.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-card/90 backdrop-blur-sm relative overflow-hidden card-hover">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/40" />
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Official Job &amp; Recruiter Email
              </p>
              <a
                href="mailto:vanshj7818@gmail.com"
                className="text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors block break-all"
              >
                vanshj7818@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Guaranteed response within 24 hours.
              </p>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+917818086344"
                  className="text-sm font-bold text-foreground hover:text-primary transition-colors block mt-1"
                >
                  +91-7818086344
                </a>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm font-bold text-foreground mt-1">
                  Vadodara, Gujarat
                </p>
                <p className="text-[11px] text-muted-foreground">Open to Relocation</p>
              </div>
            </div>

            {/* Resume & Profile CTAs */}
            <div className="p-5 rounded-2xl border border-border bg-secondary/30 flex flex-col gap-3">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Preview &amp; Download Resume (PDF)</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-xs font-semibold text-foreground transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Vansh7818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-xs font-semibold text-foreground transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Recruiter Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border bg-card/85 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-foreground mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Have an opening or project? Fill this out to start a conversation with Vansh instantly.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/90">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/90">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/90">
                  Subject / Role Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SDE Internship Opportunity / Full Stack Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/90">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to vanshj7818@gmail.com</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
