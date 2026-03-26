"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { LogoTicker } from "@/components/LogoTicker";
import { LiteYouTube } from "@/components/LiteYouTube";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.3 } }
};

const rise: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [textIndex, setTextIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds for a prestigious readable pace
    return () => clearInterval(interval);
  }, []);

  const phrases = [
    <span key="1">Building <span className="text-white/60">Community.</span></span>,
    <span key="2">Connecting <span className="italic text-primary drop-shadow-[0_0_15px_rgba(229,193,88,0.5)]">Worlds.</span></span>,
    <span key="3">Creating <span className="text-white/40">Impact.</span></span>
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-start w-full overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505]">



        {/* ── L1: ATMOSPHERE (Blanked out as glow moved to L10) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#050505]" />

        {/* ── L2: FILM GRAIN — organic premium texture */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── L10: PERSONA ── */}
        <motion.div
          style={{ y: isMobile ? 0 : yHero, willChange: "transform" }}
          className="absolute inset-0 z-10 flex items-end justify-center md:justify-end pointer-events-none max-w-7xl mx-auto left-0 right-0"
        >
          {/* Wrapper: Optimized scale to prevent navbar overlap on all devices */}
          <div className="relative w-full md:w-[52%] h-full flex items-end justify-center scale-[1.1] md:scale-100 [@media(max-height:700px)]:!scale-95 [@media(max-height:600px)]:!scale-[0.85] [@media(max-height:500px)]:!scale-75 origin-bottom will-change-transform">
            
            {/* Wavy Gold Glow — isolated to its own layer to prevent blur repaints */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-80 z-[-1] flex items-center justify-center isolate" style={{ transform: "translateZ(0)" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Massive soft center circle */}
                <motion.div
                  initial={{ x: "-50%", y: "-50%", scale: 1 }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[60%] left-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full blur-[60px] sm:blur-[100px] will-change-transform"
                  style={{ background: "radial-gradient(closest-side, rgba(229,193,88,0.4) 0%, transparent 100%)" }}
                />
                
                {/* Secondary weaving circle */}
                <motion.div
                  initial={{ x: "-60%", y: "-40%", scale: 1 }}
                  animate={{ x: ["-60%", "-40%", "-60%"], y: ["-40%", "-60%", "-40%"], scale: [1, 1.2, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[50%] left-[40%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full blur-[50px] sm:blur-[90px] will-change-transform"
                  style={{ background: "radial-gradient(closest-side, rgba(229,193,88,0.3) 0%, transparent 100%)" }}
                />

                {/* Third weaving circle */}
                <motion.div
                  initial={{ x: "-30%", y: "-60%", scale: 1 }}
                  animate={{ x: ["-30%", "-50%", "-30%"], y: ["-60%", "-40%", "-60%"], scale: [1, 1.15, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[55%] left-[60%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full blur-[50px] sm:blur-[120px] will-change-transform"
                  style={{ background: "radial-gradient(closest-side, rgba(229,193,88,0.25) 0%, transparent 100%)" }}
                />
              </motion.div>
            </div>

            {/* 4-sided persona vignette mask */}
            <div
              className="relative w-full h-full"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, black 15%, black 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <Image
                src="/rsm_all_assets/Hero-img-official (1).webp"
                alt="Ranjit Singh Masuta"
                fill
                className="object-contain object-bottom md:object-cover md:object-[center_40%] md:scale-100 origin-bottom"
                priority
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </div>
          </div>
        </motion.div>


        {/* ── L20: BOTTOM GROUND BLEND */}
        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-48 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--background) 20%, transparent 100%)" }}
        />

        {/* ── L30: BACKDROP TYPOGRAPHY (Behind Head) — Mobile ONLY ── */}
        <div className="absolute top-[18svh] inset-x-0 z-[5] w-full max-w-7xl mx-auto px-8 sm:px-14 pointer-events-none md:hidden">
          <motion.div
            style={{ opacity: opacityHero }}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-[42rem] pointer-events-auto"
          >
            {/* ── ANIMATED H1 ROTATOR V5 (Responsive Backdrop Scale) ── */}
            <motion.div variants={rise} className="relative w-full mb-4 h-[80px] sm:h-[130px] md:h-[150px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col justify-center w-full"
                >
                  <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-bold tracking-tight text-white font-serif leading-[1.1]">
                    {phrases[textIndex]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* ── L31: EDITORIAL FOREGROUND (Chest Level on mobile / Full content on desktop) ── */}
        <div className="absolute bottom-[8svh] md:relative inset-x-0 z-30 w-full max-w-7xl mx-auto px-8 sm:px-14 pointer-events-none md:bottom-auto">
          <motion.div
            style={{ opacity: opacityHero }}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-[42rem] pointer-events-auto"
          >
            {/* Thin accent line (desktop only — kept for stagger sequence) */}
            <motion.div
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: EASE } },
              }}
              className="w-12 h-px bg-transparent mb-8 origin-left hidden"
            />

            {/* Badge — Hidden on mobile, visible on sm+ */}
            <motion.div
              variants={rise}
              className="hidden sm:inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Switzerland — Global Legacy</span>
            </motion.div>

            {/* ── ANIMATED H1 ROTATOR V5 (Desktop full layout) ── */}
            <motion.div variants={rise} className="hidden md:block relative w-full mb-4 h-[150px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col justify-center w-full"
                >
                  <h1 className="text-[4.5rem] font-bold tracking-tight text-white font-serif leading-[1.1]">
                    {phrases[textIndex]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description — Scaled up for mobile readability */}
            <motion.p variants={rise} className="text-base sm:text-xl text-white/60 font-light leading-relaxed max-w-xl mb-8">
              For over three decades, Ranjit Singh Masuta has been a visionary—engineering the systems that connect people both digitally and spiritually from his base in Switzerland.
            </motion.p>

            {/* ── BUTTONS V2 (Scaled for mobile) ── */}
            <motion.div variants={rise} className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-5 sm:px-10 sm:py-5 text-[12px] sm:text-sm font-bold tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-[1.05] hover:shadow-[0_0_40px_-5px_var(--primary)] group"
              >
                Explore The Legacy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── L40: SCROLL INDICATOR — unchanged */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2.5, duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 text-white/20"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Scroll Legacy</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>

      </section>

      {/* ── TOPIC 2: ETHOS / PHILOSOPHY & DOCUMENTARY ────────────────── */}
      <section className="w-full py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col gap-24">
          
          {/* Ethos Text */}
          <div className="flex flex-col items-center text-center gap-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-16 h-px bg-primary"
            />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif tracking-tight leading-tight"
            >
              A Legacy Built<br /><span className="italic text-muted-foreground font-light">to Last.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light"
            >
              "Systems matter. Whether technological or social, they must be built to last." This core principle has guided every initiative Ranjit Singh Masuta has undertaken.
            </motion.p>
          </div>

          {/* SF1 Documentary Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 glass-card p-1 md:p-2"
            >
              <div className="w-full h-full rounded-lg md:rounded-[1.5rem] overflow-hidden relative">
                <LiteYouTube 
                  videoId="pwVkuoyy5xo" 
                  title="SF1 Swiss National Television Documentary" 
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">National Recognition</span>
              </div>
              <p className="text-xl sm:text-2xl text-foreground font-serif leading-relaxed italic">
                "This powerful documentary, recorded by SF1 Swiss National Television, captures the essence of a journey that transformed simple connections into a global infrastructure, bridging the gap between cultures and continents."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 3: TELECOM TEASE ────────────────────────────────────── */}
      <section className="w-full max-w-7xl px-6 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group"
        >
          <Image
            src="/rsm_all_assets/ranjit-singh-masuta-image-1.webp"
            alt="Ranjit Singh Masuta Telecom Journey"
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Pioneering Global Connectivity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight leading-tight">
            Pioneering Global<br /><span className="text-muted-foreground italic font-light">Connectivity.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            From the first Swiss call shops in 1995 to the multi-million-franc enterprise, World Telecom Network (WTN), Ranjit Singh Masuta’s evolution has been a testament to identifying barriers and building the technology to dissolve them.
          </p>
          <Link href="/work" className="group inline-flex items-center gap-3 font-semibold text-primary hover:text-primary/80 transition-colors w-max text-base border-b border-primary/30 hover:border-primary pb-1.5">
            Explore the Business Legacy
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </section>

      {/* ── TOPIC 4: COMMUNITY TEASE ──────────────────────────────────── */}
      <section className="w-full py-24 relative overflow-hidden bg-muted/30 dark:bg-black/40">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-px bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Strengthening Identity & Heritage</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight leading-tight">
              Strengthening Identity<br /><span className="text-muted-foreground italic font-light">& Heritage.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Establishing the first traditional Sikh Gurdwara in Langenthal remains a landmark of long-term stewardship. It is a commitment to cultural continuity and a bridge of faith in the heart of Europe.
            </p>
            <Link href="/community" className="group inline-flex items-center gap-3 font-semibold text-primary hover:text-primary/80 transition-colors w-max text-base border-b border-primary/30 hover:border-primary pb-1.5">
              Discover Community Stewardship
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group"
          >
            <Image
              src="/rsm_all_assets/gurdwara-sahib-langenthal/gurdwara-sahib-langenthal-image-1.webp"
              alt="Gurdwara Sahib Langenthal"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── TOPIC 5: EXECUTIVE CTA & LOGO TICKER ──────────────────────── */}
      <section className="w-full pt-24 pb-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card w-full rounded-[2.5rem] p-12 sm:p-16 flex flex-col items-center gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
                Connect with the Office of<br /><span className="text-primary italic">Ranjit Singh Masuta.</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-12 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-[1.04] shadow-[0_0_50px_-10px_var(--primary)]"
              >
                Reach the Office <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <LogoTicker title="Proving Global Scale" />
      </section>
    </div>
  );
}
