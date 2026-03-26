"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Globe, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Extract form data securely
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const org = formData.get("organization") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Construct Email Body
    const mailtoSubject = encodeURIComponent(`Inquiry from ${name} - ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org || 'N/A'}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Force redirect specifically to Gmail web client
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@rsmswiss.com&su=${mailtoSubject}&body=${mailtoBody}`;
    window.open(gmailLink, "_blank");

    setTimeout(() => setFormState("success"), 800);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90svh] w-full overflow-hidden px-6 pt-32 pb-24">
      
      {/* ── BACKGROUND ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/rsm_all_assets/gurdwara-sahib-langenthal/gurdwara-sahib-langenthal-image-1.webp"
          alt="Bespoke Background"
          fill
          className="object-cover opacity-[0.08] dark:opacity-[0.05] grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* EXECUTIVE WELCOME (Left) */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">The Office of RSM</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
            An Executive<br /><span className="italic text-muted-foreground">Welcome.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
            This gateway is intended for serious inquiries regarding community stewardship, corporate governance, global media relations, and legacy initiatives. Our office treats every message with the utmost discretion and executive priority.
          </p>
          <div className="flex flex-col gap-2 pt-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60 mb-2">Primary Residence</p>
            <p className="text-lg font-serif">Langenthal, Switzerland</p>
          </div>
          <div className="flex flex-col gap-2 pt-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60 mb-2">Direct Contact</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@rsmswiss.com" target="_blank" rel="noopener noreferrer" className="text-lg font-serif hover:text-primary transition-colors block w-max">Info@rsmswiss.com</a>
            <a href="https://wa.me/41789081315" target="_blank" rel="noopener noreferrer" className="text-lg font-serif hover:text-primary transition-colors block w-max">WhatsApp: +41 78 908 13 15</a>
          </div>
        </motion.div>

        {/* INQUIRY FORM (Right) */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           className="relative"
        >
          <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 ring-1 ring-border/50 shadow-2xl relative overflow-hidden">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", damping: 12 }}
                  >
                    <Send className="w-8 h-8 text-green-500" />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-serif font-bold">Message Received</h3>
                  <p className="text-muted-foreground font-light">Your inquiry has been logged for executive review.</p>
                </div>
                <button 
                  onClick={() => setFormState("idle")}
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary transition-all pb-1"
                >
                  Send another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <input id="name" name="name" required autoComplete="name" className="bg-muted/30 border border-border/50 focus:border-primary outline-none px-5 py-4 rounded-xl transition-all" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="organization" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Organization</label>
                    <input id="organization" name="organization" autoComplete="organization" className="bg-muted/30 border border-border/50 focus:border-primary outline-none px-5 py-4 rounded-xl transition-all" placeholder="Company Name" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <input id="email" name="email" required type="email" autoComplete="email" className="bg-muted/30 border border-border/50 focus:border-primary outline-none px-5 py-4 rounded-xl transition-all" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Inquiry Subject</label>
                  <input id="subject" name="subject" required className="bg-muted/30 border border-border/50 focus:border-primary outline-none px-5 py-4 rounded-xl transition-all" placeholder="Legacy Project / Media Request" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <textarea id="message" name="message" rows={4} required className="bg-muted/30 border border-border/50 focus:border-primary outline-none px-5 py-4 rounded-xl transition-all resize-none" placeholder="Your message here..." />
                </div>
                
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full relative group overflow-hidden bg-foreground text-background py-5 rounded-xl font-bold tracking-widest uppercase text-sm transition-all hover:shadow-2xl active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {formState === "submitting" ? "Encoding..." : "Seal & Send Inquiry"}
                    <Send className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                </button>

              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
