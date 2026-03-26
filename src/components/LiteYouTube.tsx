"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

export function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use Framer Motion's built-in observer for perfect integration
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "0px 0px 500px 0px" // Trigger when 500px from bottom
  });

  const handlePlay = () => {
    setIsLoaded(true);
  };


  return (
    <div ref={containerRef} className="relative w-full h-full bg-muted/20 group overflow-hidden">
      {!isLoaded ? (
        <>
          {/* High-Res Thumbnail (only renders when nearly in view) */}
          {isInView && (
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105"
              priority={false}
            />
          )}

          {/* Overlay & Play Button */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            onClick={handlePlay}
          >
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(229,193,88,0.3)] group-hover:shadow-[0_0_50px_rgba(229,193,88,0.5)] transition-all duration-300"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </motion.div>
          </div>
        </>
      ) : (
        /* The actual YouTube Iframe - only loads after interaction */
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}
