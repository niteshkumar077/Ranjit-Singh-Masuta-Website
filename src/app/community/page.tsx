"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ImageCarousel } from "@/components/ImageCarousel";

const rise: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const RELIEF_IMAGES = [
  { src: "/rsm_all_assets/gujarat-earthquake-relief/whatsapp-image-2026-02-03-at-6-52-30-pm-102.webp", alt: "gujarat-earthquake-relief 1", caption: "2001 Gujarat Earthquake: Providing immediate essential supplies." },
  { src: "/rsm_all_assets/gujarat-earthquake-relief/whatsapp-image-2026-02-03-at-6-52-30-pm-2-100.webp", alt: "gujarat-earthquake-relief 2", caption: "Direct aid distribution to affected families." },
  { src: "/rsm_all_assets/humanitarian-relief-efforts-in-pakistan/whatsapp-image-2026-01-31-at-10-57-57-pm-112.webp", alt: "Pakistan Earthquake Relief 1", caption: "2005 Pakistan Earthquake: Heavy infrastructure and logistics support." },
  { src: "/rsm_all_assets/humanitarian-relief-efforts-in-pakistan/whatsapp-image-2026-01-31-at-10-57-57-pm-3-105.webp", alt: "Pakistan Earthquake Relief 2", caption: "Coordinating humanitarian efforts across the border." },
  { src: "/rsm_all_assets/humanitarian-relief-efforts-in-pakistan/whatsapp-image-2026-01-31-at-10-57-57-pm-5-107.webp", alt: "Pakistan Earthquake Relief 3", caption: "Medical aid and temporary shelter for displaced populations." },
  { src: "/rsm_all_assets/humanitarian-relief-efforts-in-pakistan/whatsapp-image-2026-01-31-at-10-57-58-pm-8-120.webp", alt: "Tsunami Relief", caption: "2004 Tsunami: Global compassion and rapid response support." },
];

export default function Community() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-32">
      
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60svh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rsm_all_assets/gurdwara-sahib-langenthal/gurdwara-sahib-langenthal-image-1.webp"
          alt="Community Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white font-serif tracking-tight">The Heart & Legacy</h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em]">Stewardship Beyond Borders</span>
            <span className="w-12 h-px bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* ── SPIRITUAL INFRASTRUCTURE ─────────────────────────────────── */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            
            {/* Intro & Architectural Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="flex flex-col gap-8"
              >
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Spiritual Infrastructure</span>
                <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight">
                  Gurdwara Sahib Langenthal:<br /><span className="italic text-muted-foreground">A Landmark of Faith.</span>
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Established by Ranjit Singh Masuta, Gurdwara Sahib Langenthal stands as the first traditional Sikh Gurdwara in Switzerland. Since its completion in 2006, it has served as a sanctuary for the Sikh community and a bridge for interfaith dialogue in the Bernese heartland.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-border p-2 glass-card">
                    <Image
                      src="/rsm_all_assets/gurdwara-sahib-langenthal/gurdwara-sahib-langenthal-image-1.webp"
                      alt="Gurdwara Exterior"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-border p-2 glass-card">
                    <Image
                      src="/rsm_all_assets/gurdwara-sahib-langenthal/gurdwara-sahib-langenthal-inside-image.webp"
                      alt="Gurdwara Interior"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>



              {/* ── NEWSPAPER V3 (Zero Letterboxing, Natural Aspect Ratio) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-b from-muted/20 to-transparent rounded-[2.5rem] p-8 lg:p-10 border border-border/40 hover:border-border/80 transition-colors shadow-2xl overflow-hidden group flex flex-col gap-8"
              >
                {/* Header */}
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Basler Zeitung · Dec 2005</span>
                  <h3 className="text-2xl font-serif font-bold leading-tight">"Ein Basler mit Turban hat grosse Pläne"</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mt-2">
                    This historic cover feature details Mr. Masuta's ambitious vision and his foundation for cultural integration in the Swiss region.
                  </p>
                </div>

                {/* Images Section - Natural Flow (h-auto) to completely eliminate top/bottom empty spaces */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full items-start">
                  <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-border/50 group-hover:ring-primary/30 transition-all duration-700 bg-white/5 p-1 shadow-lg">
                    <Image
                      src="/rsm_all_assets/swiss-newspaper-article-this-remarkable-article-from-basler-zeitung-published-on-27-december-2005/rsm-agency-asset-142-142.webp"
                      alt="Basler Zeitung Full Clipping"
                      width={800}
                      height={1200}
                      className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-border/50 group-hover:ring-primary/30 transition-all duration-700 bg-white/5 p-1 shadow-lg">
                    <Image
                      src="/rsm_all_assets/swiss-newspaper-article-this-remarkable-article-from-basler-zeitung-published-on-27-december-2005/rsm-agency-asset-141-141.webp"
                      alt="Article Translation"
                      width={800}
                      height={1200}
                      className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Subtle Glow background pattern */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL COMPASSION ────────────────────────────────────────── */}
      <section className="w-full py-32 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Humanitarian Stewardship</span>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif">Global Compassion</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              From the 2001 Gujarat Earthquake to the 2004 Tsunami, Mr. Masuta's legacy is defined by active, global compassion, providing direct relief where it is needed most.
            </p>
          </div>
          
          <ImageCarousel images={RELIEF_IMAGES} />
        </div>
      </section>

      {/* ── YOUTH & ATHLETIC HERITAGE ─────────────────────────────────── */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">PECA Trust</span>
              <h2 className="text-4xl font-bold font-serif">Youth & Athletic Heritage</h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl">
                Empowering the next generation through sports, culture, and shared values.
              </p>
            </div>

            <div className="space-y-16">
              {/* Summer Camp */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-border/50">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/50">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image src="/rsm_all_assets/sikh-summer-camp-for-youth-in-switzerland/image-1.webp" alt="Sikh Summer Camp" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-serif font-bold">Sikh Summer Camp (Switzerland)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Annual youth programs focusing on Punjabi language, Gurbani, and the art of Dastar (turban) tying, ensuring cultural continuity for the Swiss Sikh diaspora.
                  </p>
                </div>
              </div>

              {/* Wrestling Tournament */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-border/50">
                <div className="order-2 lg:order-1 flex flex-col gap-4">
                  <h3 className="text-2xl font-serif font-bold">European Wrestling Tournament (Milan 2008)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    A historic international event featuring the legendary Dara Singh. PECA Trust pioneered the first European Sikh Wrestling Tournament to promote physical excellence and heritage.
                  </p>
                </div>
                <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/50">
                   <div className="absolute inset-0">
                      <Image src="/rsm_all_assets/wrestling-tournament/rsm-agency-asset-68-68.webp" alt="Wrestling Tournament" fill className="object-cover" />
                   </div>
                </div>
              </div>

              {/* Kabaddi */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/50">
                   <div className="absolute inset-0">
                      <Image src="/rsm_all_assets/kabaddi-tournament-in-italy/whatsapp-image-2026-01-29-at-6-20-19-pm-2-80.webp" alt="Kabaddi Tournament" fill className="object-cover" />
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-serif font-bold">Kabaddi Tournament (Italy)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Sponsored by PECA Trust, these tournaments celebrate international Kabaddi, fostering a sense of community and athletic pride among the diaspora in Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="w-full py-12" />
    </div>
  );
}
