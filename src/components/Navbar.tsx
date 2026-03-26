"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Work", href: "/work" },
  { name: "Community Services", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Reach Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  // Track scroll — only matters on home page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Transparent state = home page AND not scrolled yet
  // Transparent state = home page AND not scrolled yet
  const isTransparent = isHome && !scrolled;

  // Stagger animation for the elite mobile menu
  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: EASE,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2, ease: EASE }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        


        {/* ─── Transparent Top Bar V2 (Closer Edge Spacing) ─── */}
        <AnimatePresence>
          {isTransparent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="absolute top-0 left-0 right-0 pointer-events-auto flex items-center justify-center px-6 py-6"
            >
              <div className="flex flex-row items-center justify-between w-full max-w-6xl">
                {/* Logo */}
                <a href="/" className="relative h-14 w-44 shrink-0 hover:opacity-80 transition-opacity drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] brightness-[1.15]">
                  <Image
                    src="/rsm_all_assets/website-official-logo.webp"
                    alt="RSM Swiss"
                    fill
                    sizes="(max-width: 768px) 150px, 176px"
                    className="object-contain object-left"
                    priority
                  />
                </a>

                {/* Desktop Links (White) */}
                <nav className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                          "relative text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-300",
                          active ? "text-primary drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]" : "text-white/80 hover:text-white"
                        )}
                      >
                        {link.name}
                        {active && (
                          <motion.span
                            layoutId="nav-underline-transparent"
                            className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary"
                          />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Right Group (White) */}
                <div className="flex items-center gap-3">
                  <ThemeToggle isTransparent={true} />
                  <button
                    className="flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50 outline-none bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10"
                    onClick={() => setIsOpen((o) => !o)}
                    aria-label="Toggle menu"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span key="x" initial={{ rotate: -90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0.5, opacity: 0 }} transition={{ duration: 0.2, ease: "backOut" }}><X size={18} strokeWidth={2.5} /></motion.span>
                      ) : (
                        <motion.span key="menu" initial={{ rotate: 90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: -90, scale: 0.5, opacity: 0 }} transition={{ duration: 0.2, ease: "backOut" }}><Menu size={18} strokeWidth={2.5} /></motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Floating Glass Pill (Scrolled Home & Inner Pages) ─── */}
        <AnimatePresence>
          {!isTransparent && (
            <motion.div
              initial={isHome ? { y: "-100%" } : { y: 16 }}
              animate={{ y: 16 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28, mass: 1 }}
              className="absolute top-0 left-0 right-0 flex justify-center pointer-events-auto px-4"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center justify-between w-full max-w-5xl bg-white/80 dark:bg-neutral-900/75 backdrop-blur-md border border-border/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-5 sm:px-6 py-2.5">
                
                {/* Logo */}
                <a href="/" className="relative h-12 w-40 shrink-0 hover:opacity-80 transition-opacity">
                  <Image
                    src="/rsm_all_assets/website-official-logo.webp"
                    alt="RSM Swiss"
                    fill
                    sizes="(max-width: 768px) 150px, 160px"
                    className="object-contain object-left"
                    priority
                  />
                </a>

                {/* Desktop Links (Theme aware) */}
                <nav className="hidden md:flex items-center gap-7">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                          "relative text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-300",
                          active ? "text-primary drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]" : "text-foreground/60 hover:text-foreground"
                        )}
                      >
                        {link.name}
                        {active && (
                          <motion.span
                            layoutId="nav-underline-pill"
                            className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary"
                          />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Right Group (Theme aware) */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:block w-px h-4 bg-border mx-1" />
                  <ThemeToggle isTransparent={false} />
                  <button
                    className="flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50 outline-none bg-primary/5 hover:bg-primary/10 text-foreground border border-primary/10"
                    onClick={() => setIsOpen((o) => !o)}
                    aria-label="Toggle menu"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span key="x" initial={{ rotate: -90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0.5, opacity: 0 }} transition={{ duration: 0.2, ease: "backOut" }}><X size={18} strokeWidth={2.5} /></motion.span>
                      ) : (
                        <motion.span key="menu" initial={{ rotate: 90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: -90, scale: 0.5, opacity: 0 }} transition={{ duration: 0.2, ease: "backOut" }}><Menu size={18} strokeWidth={2.5} /></motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Elite Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className={clsx(
              "fixed left-4 right-4 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-border/50 rounded-3xl p-4 flex flex-col gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]",
              isTransparent ? "top-[6.5rem]" : "top-[5.5rem]"
            )}
            style={{ willChange: "transform, opacity" }}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <motion.div variants={staggerItem} key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "flex items-center px-5 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.12em] transition-all",
                      active
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "hover:bg-muted text-foreground/70 hover:text-foreground border border-transparent"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

