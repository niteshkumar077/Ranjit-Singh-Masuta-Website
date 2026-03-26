"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoItem {
  src: string;
  alt: string;
}

const LOGOS: LogoItem[] = [
  { src: "/rsm_all_assets/colaborated-with-companies/global-line-colored-line-361.webp", alt: "Global Line" },
  { src: "/rsm_all_assets/colaborated-with-companies/global-talk-colored-logo-360.webp", alt: "Global Talk" },
  { src: "/rsm_all_assets/colaborated-with-companies/gudwara-logo-356.webp", alt: "Gurdwara Sahib" },
  { src: "/rsm_all_assets/colaborated-with-companies/peca-logo-355.webp", alt: "PECA Trust" },
  { src: "/rsm_all_assets/colaborated-with-companies/star-logo-351.webp", alt: "Star" },
  { src: "/rsm_all_assets/colaborated-with-companies/sanware-logo-353.webp", alt: "Sanware" },
  { src: "/rsm_all_assets/colaborated-with-companies/sports-logo-352.webp", alt: "Sports" },
  { src: "/rsm_all_assets/colaborated-with-companies/office-logo-354.webp", alt: "RSM Office" },
  { src: "/rsm_all_assets/colaborated-with-companies/meco-colored-logo-359.webp", alt: "Meco" },
  { src: "/rsm_all_assets/colaborated-with-companies/ag-colored-logo-362.webp", alt: "AG" },
  { src: "/rsm_all_assets/colaborated-with-companies/geo-colored-logo-363.webp", alt: "Geo" },
  { src: "/rsm_all_assets/colaborated-with-companies/mobile-1-358.webp", alt: "Mobile" },
  { src: "/rsm_all_assets/website-official-logo.webp", alt: "RSM Swiss" },
];

// Duplicate for seamless loop
const LOGOS_DOUBLED = [...LOGOS, ...LOGOS];

export function LogoTicker({ title = "Empire Entities" }: { title?: string }) {
  return (
    <div className="w-full py-10 overflow-hidden border-t border-border/40">
      {title && (
        <p className="text-center text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-10">
          {title}
        </p>
      )}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-14 w-max"
        >
          {LOGOS_DOUBLED.map((logo, i) => (
            <div
              key={i}
              className="relative h-20 w-44 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
