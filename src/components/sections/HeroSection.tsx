"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Check, Copy, ExternalLink, Mail, MessageCircle } from "lucide-react";
import Hero3DCanvas from "@/components/motion/Hero3DCanvas";
import Magnetic from "@/components/motion/Magnetic";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    // Only enable scroll parallax on desktop for maximum mobile scrolling speed
    setIsDesktop(window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches);
  }, []);

  // Multi-plane parallax on scroll (Desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const photoY = useTransform(smoothProgress, [0, 1], [0, 80]);
  const photoScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(smoothProgress, [0, 1], [0, 45]);
  const canvasY = useTransform(smoothProgress, [0, 1], [0, -30]);
  const opacityFade = useTransform(smoothProgress, [0, 0.85], [1, 0.2]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="Aymen Derouiche — Présentation et profil"
      className="relative min-h-[90vh] sm:min-h-[88vh] flex flex-col justify-between pt-3 pb-6 sm:pt-6 sm:pb-12 overflow-hidden"
    >
      {/* Toast Notification */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          className="fixed top-18 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#19D7FF] text-[#030712] text-xs font-black shadow-2xl flex items-center gap-2 border border-cyan-300/40"
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Email copié dans le presse-papiers</span>
        </motion.div>
      )}

      {/* Atmospheric 3D Canvas Layer */}
      <motion.div
        style={{ y: isDesktop ? canvasY : 0 }}
        className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none opacity-40 sm:opacity-60 z-0"
      >
        <Hero3DCanvas />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-between flex-1">
        {/* Top Monospace Coordinates & Origin */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between py-2 border-b border-white/[0.06] text-[10px] font-mono tracking-widest text-[#94A3B8]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-semibold text-[#F8FAFC]">MONS, BELGIQUE</span>
            <span className="text-white/20">·</span>
            <span>50.45°N 3.95°E</span>
          </div>

          <span className="hidden sm:inline text-white/50 tracking-wider">
            PORTFOLIO // 2026
          </span>
        </motion.div>

        {/* Centerpiece Composition: Large-Format Portrait + Bold Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-5 sm:py-10">
          {/* Large-Format Seamless Photo Piece */}
          <motion.div
            style={{
              y: isDesktop ? photoY : 0,
              scale: isDesktop ? photoScale : 1,
              opacity: isDesktop ? opacityFade : 1,
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Integrated Photo Container with Edge Gradient Masking */}
            <div className="relative w-64 h-80 sm:w-76 sm:h-96 md:w-84 md:h-104 rounded-3xl overflow-hidden shadow-2xl bg-[#070E1B] border border-white/[0.08] group">
              <Image
                src="/photo.jpg"
                alt="Aymen Derouiche"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 304px, 336px"
                className="object-cover object-top filter contrast-[1.03] brightness-[0.96] transition-transform duration-500 group-hover:scale-103"
              />

              {/* Edge Gradient Blending Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030712]/40 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

              {/* Corner Metadata Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#030712]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono">
                <span className="text-[#19D7FF] font-bold">DIGITAL CARD</span>
                <span className="text-white/60">DISPONIBLE</span>
              </div>
            </div>
          </motion.div>

          {/* Typography & Editorial Statement */}
          <motion.div
            style={{
              y: isDesktop ? textY : 0,
              opacity: isDesktop ? opacityFade : 1,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left gap-4 sm:gap-5"
          >
            {/* Title Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/[0.05] text-[#19D7FF] border border-white/10">
                PROFIL DOUBLE IMPACT
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F8FAFC] leading-[1.04]">
              AYMEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#94A3B8]">
                DEROUICHE
              </span>
            </h1>

            {/* Motto (The only personal note allowed) */}
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
              <span>BUILD · LEARN · CREATE · WORK · EXPLORE</span>
            </div>

            {/* First-person Crisp Subhead */}
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
              Ingénieur systèmes &amp; produit. Je conçois des logiciels d&apos;envergure et
              pilote des opérations de terrain avec la même rigueur.
            </p>

            {/* Tactical Direct Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* WhatsApp (Visually Primary if available) */}
              {whatsappUrl ? (
                <Magnetic>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.96] text-[#030712] text-xs font-black uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Magnetic>
              ) : null}

              {/* Email Button */}
              <Magnetic>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 hover:border-[#19D7FF]/40 text-[#F8FAFC] text-xs font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#19D7FF]" />
                  <span>{copied ? "Copié !" : "Copier l'email"}</span>
                  <Copy className="w-3 h-3 text-white/50" />
                </button>
              </Magnetic>

              {/* Jump to 2 Paths */}
              <a
                href="#two-paths"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono font-semibold text-[#94A3B8] hover:text-[#19D7FF] transition-colors active:scale-[0.96]"
              >
                <span>Explorer les 2 parcours</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Subtle Bottom Transition Cue */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.04] text-[10px] font-mono text-white/40">
          <span>01 // DÉCOUVERTE DU PROFIL</span>
          <span>DÉFILEZ POUR SÉLECTIONNER UN CV ↓</span>
        </div>
      </div>
    </section>
  );
}
