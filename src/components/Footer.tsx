import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 py-10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Link href="/" className="relative h-20 w-64 flex items-center justify-center hover:opacity-80 transition-opacity">
            <Image
              src="/rsm_all_assets/website-official-logo.webp"
              alt="RSM Swiss Logo"
              fill
              className="object-contain object-center sm:object-left drop-shadow-[0_0_1.5px_rgba(0,0,0,0.4)] dark:drop-shadow-none"
            />
          </Link>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-sm font-semibold text-foreground tracking-tight font-serif">Ranjit Singh Masuta</span>
            <p className="text-xs text-muted-foreground font-light">
              © 2026 Ranjit Singh Masuta SWISS. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://www.linkedin.com/in/ranjit-singh-masuta/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(10,102,194,0.3)]">
            <Linkedin size={16} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.youtube.com/@theofficeofrsm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(220,38,38,0.3)]">
            <Youtube size={16} />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://wa.me/41789081315" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(37,211,102,0.3)]">
            <MessageCircle size={16} />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

