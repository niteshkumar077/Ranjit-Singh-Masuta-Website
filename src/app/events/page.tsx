"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LiteYouTube } from "@/components/LiteYouTube";

interface Luminary {
  name: string;
  desc: string;
  image: string;
  fit?: "cover" | "contain";
  position?: string;
}

const LUMINARIES: Luminary[] = [
  { name: "Micheline Calmy-Rey", desc: "Served as the President of the Swiss Confederation in 2007. Her leadership was instrumental in strengthening Swiss neutrality and global diplomacy.", image: "/rsm_all_assets/ranjit-singh-with-leaders/micheline-calmy-rey.webp", fit: "contain" },
  { name: "Hans Jörg Käser", desc: "A prominent figure in Swiss regional government and business leadership. He played a key role in economic bridges between the public and private sectors.", image: "/rsm_all_assets/ranjit-singh-with-leaders/hans-jorg-kaser.webp" },
  { name: "Letizia Moratti", desc: "Former Mayor of Milan and Italy's Minister of Education. She is a dedicated advocate for urban innovation and European cultural heritage.", image: "/rsm_all_assets/ranjit-singh-with-leaders/letizia-moratti.webp" },
  { name: "Behgjet Pacolli", desc: "Former President of Kosovo and a titan in international business. Recognized for his contributions to the economic rebuilding of post-conflict regions.", image: "/rsm_all_assets/ranjit-singh-with-leaders/behgjet-pacolli.webp" },
  { name: "Jeff DeWit", desc: "Former CFO of NASA and a strategic leader in the U.S. aerospace and finance sectors. A key collaborator on global business frontier discussions.", image: "/rsm_all_assets/ranjit-singh-with-leaders/jeff-dewit.webp" },
  { name: "Rajinder Kaur Bhattal", desc: "The first woman Chief Minister of Punjab and a veteran stateswoman. She remains a powerful voice for women's empowerment and rural development.", image: "/rsm_all_assets/ranjit-singh-with-leaders/rajinder-kaur-bhattal.webp" },
  { name: "Reto Müller", desc: "Current Mayor of Langenthal, Switzerland. He has been a steadfast supporter of the city’s diverse cultural and spiritual institutions.", image: "/rsm_all_assets/ranjit-singh-with-leaders/reto-muller.webp" },
  { name: "Simon Murray", desc: "Legendary founder of Orange Mobile and global venture capitalist. A titan of the telecommunications industry with decades of transcontinental leadership.", image: "/rsm_all_assets/ranjit-singh-with-leaders/mr.simon-murray.webp" },
  { name: "Giani Harpreet Singh", desc: "Former Jathedar of the Akal Takht, the highest temporal seat of Sikhism. Recognized for his global leadership on Sikh unity and humanitarian affairs.", image: "/rsm_all_assets/ranjit-singh-with-leaders/giani-harpreet-singh.webp", fit: "contain" },
  { name: "Giani Raghbir Singh", desc: "Serving as Jathedar of Sri Akal Takht Sahib. He provides moral and spiritual guidance to millions across the worldwide Sikh diaspora.", image: "/rsm_all_assets/ranjit-singh-with-leaders/giani-raghbir-singh.webp" },
  { name: "Acharya Lokesh Muni", desc: "World-renowned Jain spiritual leader and founder of Ahimsa Vishwa Bharati. A global ambassador for non-violence and interfaith harmony.", image: "/rsm_all_assets/ranjit-singh-with-leaders/acharya-lokesh-muni.webp", fit: "contain" },
  { name: "Fauja Singh", desc: "The world's oldest marathon runner and a symbol of resilience. He has inspired millions globally with his record-breaking athletic longevity.", image: "/rsm_all_assets/ranjit-singh-with-leaders/fauja-singh.webp" },
  { name: "Snatam Kaur", desc: "Internationally acclaimed devotional singer and humanitarian. Her music has bridged spiritual gaps, bringing a message of peace to global audiences.", image: "/rsm_all_assets/ranjit-singh-with-leaders/snatam-kaur.webp" },
  { name: "Ma Anand Sheela", desc: "Historic figure in international communal movements and philosophy. She remains a subject of study in organizational leadership and human dynamics.", image: "/rsm_all_assets/ranjit-singh-with-leaders/ma-anand-sheela.webp" },
  { name: "Simranjit Singh Mann", desc: "Veteran Punjabi politician and president of Shiromani Akali Dal (Amritsar). Dedicated advocate for Sikh rights and political representation.", image: "/rsm_all_assets/ranjit-singh-with-leaders/simranjit-singh-mann.webp" },
  { name: "Rajwant Singh", desc: "Founder and President of EcoSikh. A global leader in environmental stewardship, representing the intersection of faith and ecological duty.", image: "/rsm_all_assets/ranjit-singh-with-leaders/rajwant-singh.webp" },
  { name: "Sant Baba Nihal Singh Ji", desc: "Deeply revered spiritual leader from Punjab. Recognized for his vast contributions to education, social welfare, and guiding the diaspora.", image: "/rsm_all_assets/ranjit-singh-with-leaders/sant-baba-nihal-singh-ji.webp" },
  { name: "Giani Daljit Singh", desc: "Senior spiritual scholar and Panthic leader. Committed to the preservation of Sikh traditions and ethical values in the modern world.", image: "/rsm_all_assets/ranjit-singh-with-leaders/giani-daljit-singh.webp" },
  { name: "Robert McCulloch", desc: "Respected leader in international education and interfaith coordination, working extensively to promote peaceful co-existence and inclusivity.", image: "/rsm_all_assets/ranjit-singh-with-leaders/robert-mcculloch.webp", fit: "contain" },
  { name: "Giani Sher Singh", desc: "Celebrated Sikh preacher and kathavachak. He has shared the profound history and ethics of Sikhism with audiences across the globe.", image: "/rsm_all_assets/ranjit-singh-with-leaders/giani-sher-singh.webp" },
  { name: "Giani Joginder Singh Vedanti", desc: "Former Jathedar of the Akal Takht, recognized for his scholarship in Sikh jurisprudence and leadership during historic reforms.", image: "/rsm_all_assets/ranjit-singh-with-leaders/giani-joginder-singh-vedanti.webp", fit: "contain" },
];

const LUMINARIES_DOUBLED = [...LUMINARIES, ...LUMINARIES];

export default function Events() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-32">
      
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60svh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rsm_all_assets/nagar-kirtan/whatsapp-image-2026-02-01-at-11-31-13-pm-199.webp"
          alt="Events & News"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white font-serif tracking-tight">Milestones & Influence</h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em]">Diplomatic Authority & Heritage</span>
            <span className="w-12 h-px bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* ── HISTORIC COMMEMORATIONS ──────────────────────────────────── */}
      <section className="w-full py-32 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-20">
            <div className="max-w-3xl">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">Nagar Kirtan 2008</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight mt-6">
                Historic Commemorations:<br /><span className="italic text-muted-foreground">A River of Devotion.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                The 2008 Nagar Kirtan in Langenthal marked 300 years of the Gurta Gaddi, drawing thousands to the streets of Switzerland. It remains a landmark ceremony of cultural pride and spiritual continuity.
              </p>
            </div>

            {/* 3-Image Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card shadow-xl">
                <Image src="/rsm_all_assets/nagar-kirtan/whatsapp-image-2026-02-01-at-11-31-12-pm-4-193.webp" alt="Nagar Kirtan 1" fill className="object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card shadow-xl lg:mt-12">
                <Image src="/rsm_all_assets/nagar-kirtan/whatsapp-image-2026-02-01-at-11-31-13-pm-1-195.webp" alt="Nagar Kirtan 2" fill className="object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card shadow-xl lg:mt-24">
                <Image src="/rsm_all_assets/nagar-kirtan/whatsapp-image-2026-02-01-at-11-31-13-pm-2-196.webp" alt="Nagar Kirtan 3" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Video Iframe 5 */}
            <div className="relative aspect-video rounded-xl md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/50 max-w-5xl mx-auto w-full glass-card p-1 md:p-3">
              <div className="w-full h-full rounded-lg md:rounded-[2.5rem] overflow-hidden relative">
                <LiteYouTube 
                  videoId="iFcghcwqfNc" 
                  title="25 Years – Gurdwara Sahib Langenthal" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERFAITH DIPLOMACY ─────────────────────────────────────── */}
      <section className="w-full py-32 bg-muted/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">Interfaith Diplomacy</span>
                  <h2 className="text-4xl sm:text-5xl font-bold font-serif leading-tight">
                    Remembrance &<br /><span className="italic text-muted-foreground">Unity.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    From honoring the forgotten Sikh soldiers at Menin Gate in Belgium to hosting high-level interfaith dialogues, Mr. Masuta's work bridges the gap between historical remembrance and modern co-existence. 
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pb-2">
                   <div className="flex flex-col gap-4">
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/50">
                        <Image
                          src="/rsm_all_assets/in-sacred-remembrance-in-unity-in-the-pursuit-of-peace/whatsapp-image-2026-02-20-at-1-31-47-am-1-136.webp"
                          alt="Wisconsin Memorial 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                   </div>
                   <div className="flex flex-col gap-4 pt-8">
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/50">
                        <Image
                          src="/rsm_all_assets/in-sacred-remembrance-in-unity-in-the-pursuit-of-peace/whatsapp-image-2026-02-20-at-1-31-47-am-2-135.webp"
                          alt="Wisconsin Memorial 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">
                        Honoring victims of the Wisconsin Temple tragedy with U.S. Ambassador Donald S. Beyer Jr.
                      </p>
                   </div>
                </div>
             </div>

             <div className="flex flex-col gap-8">
               {/* Menin Gate Placeholder Image as high-res visual since iframe URL not found */}
               <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                  <Image
                    src="/rsm_all_assets/historic-tribute-to-sikh-soldiers-at-menin-gate-image-1.webp"
                    alt="Menin Gate Tribute"
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 text-center px-12">
                      <h4 className="text-2xl font-serif text-white font-bold tracking-tight">Menin Gate Historic Tribute</h4>
                      <p className="text-white/60 text-sm font-light">Honoring the valour of Sikh soldiers in Belgium.</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── DISTINGUISHED GLOBAL LUMINARIES (INFINITE LOOP) ────────────── */}
      <section className="w-full py-32 bg-background overflow-hidden relative border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] font-sans">A Network of Influence</span>
            <h2 className="text-4xl sm:text-6xl font-bold font-serif tracking-tight">
              Distinguished Global<br /><span className="italic text-muted-foreground">Luminaries.</span>
            </h2>
          </div>
        </div>

        <div className="relative w-full">
           {/* Fade edges */}
           <div className="absolute left-0 top-0 h-full w-8 md:w-48 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
           <div className="absolute right-0 top-0 h-full w-8 md:w-48 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

           <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 w-max px-8"
           >
              {LUMINARIES_DOUBLED.map((leader, i) => (
                <div
                  key={i}
                  className="w-[320px] shrink-0 glass-card rounded-[2.5rem] aspect-[3/4] p-6 relative flex flex-col items-start justify-end overflow-hidden group ring-1 ring-border/50"
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-110 pointer-events-none ${leader.fit === "contain" ? "object-contain bg-black" : "object-cover"}`}
                    style={{ objectPosition: leader.position || "center center" }}
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="relative z-10 w-full flex flex-col gap-3 transition-transform duration-500">
                    <h4 className="text-2xl font-serif font-bold text-white leading-tight">{leader.name}</h4>
                    <div className="max-h-64 opacity-100 md:max-h-0 md:opacity-0 overflow-hidden md:group-hover:max-h-64 md:group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      <p className="text-white/70 text-sm font-light leading-relaxed">
                        {leader.desc}
                      </p>
                    </div>
                    <div className="w-8 h-1 bg-primary rounded-full transform scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="w-full py-12" />
    </div>
  );
}
