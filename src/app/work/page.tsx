"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const rise: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full min-h-screen pt-32 overflow-x-hidden">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[70svh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rsm_all_assets/telecommunications-liberalization-in-switzerland.webp"
          alt="Our Work - Telecommunications"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <motion.div
          style={{ opacity: opacityHero }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1 variants={rise} className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-serif tracking-tight">
            Telecommunications<br /><span className="italic text-primary">& Infrastructure</span>
          </motion.h1>
          <motion.div variants={rise} className="mt-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em]">A Visual Timeline of Innovation</span>
            <span className="w-12 h-px bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── TOPIC 1: THE GENESIS ─────────────────────────────────────── */}
      <section className="w-full py-32 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="flex flex-col gap-8"
            >
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">1995: The Genesis</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight">
                D.M. Enterprise:<br /><span className="italic text-muted-foreground">Democratizing Connection.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  In the mid-1990s, the PTT monopoly held an iron grip on Swiss telecommunications. For immigrants and expatriates, "calling home" was a prohibitive luxury, often costing an hour's wages for a 10-minute conversation.
                </p>
                <p>
                  Ranjit Singh Masuta identified this human cost. In 1995, he founded <strong>D.M. Enterprise</strong> at Basel Railway Station. It wasn't just a shop; it was the first discount telephone center in Switzerland, offering private wooden cabins and real-time billing—technologies that would soon disrupt the entire national market.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl group">
                <Image
                  src="/rsm_all_assets/establishment-of-d.m-enterprise-telephone-shop/img-1.webp"
                  alt="D.M Enterprise Basel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl group mt-12">
                <Image
                  src="/rsm_all_assets/establishment-of-d.m-enterprise-telephone-shop/img-2.webp"
                  alt="D.M Enterprise Cabins"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 2: U.S. PARTNERSHIPS ────────────────────────────────── */}
      <section className="w-full py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            <div className="max-w-3xl">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">1997: Global Alliances</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight mt-6">
                Strategic Partnerships with<br /><span className="italic text-muted-foreground">U.S. Telecom Carriers.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                By 1997, the vision expanded beyond Basel. Mr. Masuta spearheaded joint ventures with major U.S. carriers, including USA Global Link. Together with industry leaders like Michael Moor, he built the bridge between American technological scale and European consumer needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <Image
                  src="/rsm_all_assets/partnership-with-u.s-telecom-carriers/img-9364-15.webp"
                  alt="Mr. Masuta with Michael Moor"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <Image
                  src="/rsm_all_assets/partnership-with-u.s-telecom-carriers/img-9365-13.webp"
                  alt="U.S Telecom Team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 3: GLOBAL EXPANSION ────────────────────────────────── */}
      <section className="w-full py-32 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "/rsm_all_assets/global-line-call-shops-in-europe.webp",
                "/rsm_all_assets/1990s-was-a-decade-for-the-world-of-telecommunication.webp",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-xl group"
                >
                  <Image
                    src={src}
                    alt="Global Line Expansion"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="order-1 lg:order-2 flex flex-col gap-8"
            >
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">1998: The Global LINE</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight">
                Global Expansion:<br /><span className="italic text-muted-foreground text-primary">Calling the World.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  1998 saw the launch of <strong>Global LINE</strong>. This wasn't merely a brand; it was a revolution in the calling card industry. At the ITU Telecom 99 Geneva exhibition, Global LINE was recognized as a disruptive force, facilitating millions of minutes for families across Europe.
                </p>
                <p>
                  As Switzerland liberalized its telecom market, Mr. Masuta was already tiers ahead, having built private infrastructure that supported a vast network of resellers and retail points.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TOPIC 4: THE APEX (WTN) ──────────────────────────────────── */}
      <section className="w-full py-32 bg-muted/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 gap-6">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">1999–Present: Infrastructure Authority</span>
            <h2 className="text-4xl sm:text-6xl font-bold font-serif tracking-tight">
              World Telecom Network<br /><span className="italic text-muted-foreground">The Global Apex.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
              WTN Group Holding AG represents the ultimate realization of Mr. Masuta's vision: a proprietary network of V-Sat PoPs and Tier-1 carrier interconnections spanning the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/rsm_all_assets/telecom-infrastructure/frankfurt-img-2.webp", label: "Network Operational Centre Frankfurt" },
              { src: "/rsm_all_assets/telecom-infrastructure/v-sat-teleport-in-france.webp", label: "V-SAT Teleport in France" },
              { src: "/rsm_all_assets/telecom-infrastructure/v-sat-teleport-location-in-srilanka.webp", label: "V-SAT Location in Sri Lanka" },
              { src: "/rsm_all_assets/telecom-infrastructure/swiss-teleport.webp", label: "Swiss Teleport" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card ring-1 ring-white/10 group-hover:scale-[1.03] transition-transform duration-500">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="px-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-muted-foreground italic">Moving Worlds Forward</p>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>
    </div>
  );
}
