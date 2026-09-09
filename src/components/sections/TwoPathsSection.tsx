"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Code2, Download, Store } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";

export default function TwoPathsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHover, setActiveHover] = useState<"tech" | "hospitality" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    restDelta: 0.001,
  });

  const yTranslate = useTransform(smoothProgress, [0, 1], [30, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0.3, 1]);

  return (
    <section
      id="two-paths"
      ref={containerRef}
      aria-label="Deux parcours professionnels : Tech ou Retail & Horeca"
      className="relative w-full py-8 sm:py-16 perspective-1200"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              02 // DEUX PARCOURS · UN NIVEAU D&apos;EXIGENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight mt-1">
              CHOISISSEZ LE PROFIL
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-sm sm:text-right">
            Deux expertises concrètes. Choisissez le dossier adapté à votre recrutement.
          </p>
        </div>

        {/* Interactive Split-Panel Grid */}
        <motion.div
          style={{ y: isDesktop ? yTranslate : 0, opacity: isDesktop ? opacity : 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch"
        >
          {/* TRACK 01: TECH & SOFTWARE */}
          <div
            onMouseEnter={() => isDesktop && setActiveHover("tech")}
            onMouseLeave={() => isDesktop && setActiveHover(null)}
            className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#070E1B] to-[#040813] border ${
              activeHover === "tech"
                ? "border-[#19D7FF] shadow-[0_0_40px_-8px_rgba(25,215,255,0.22)] -translate-y-1.5"
                : "border-white/[0.08] hover:border-[#19D7FF]/50"
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#19D7FF]/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19D7FF]/10 border border-[#19D7FF]/20 text-[#19D7FF] text-[10px] font-mono font-bold tracking-wider uppercase">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>PARCOURS 01</span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8]">INGÉNIERIE SYSTÈMES</span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight group-hover:text-[#19D7FF] transition-colors">
                  TECH &amp; SOFTWARE
                </h3>
                <p className="text-xs font-mono text-[#19D7FF]/80 mt-0.5">
                  AI Systems · Architectures SaaS · Full-Stack
                </p>
              </div>

              {/* First-person paragraph */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Je conçois des architectures SaaS complètes, des pipelines multi-agents
                autonomes et des interfaces web à haute performance. Du modèle relationnel
                jusqu&apos;au pixel final, je construis des solutions fiables prêtes pour la production.
              </p>

              {/* Stated ONCE: Exclusive Tech Skill Tags */}
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#94A3B8]/60">
                  COMPÉTENCES MOBILISABLES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Python / AI",
                    "Multi-Agents",
                    "PostgreSQL",
                    "System Design",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/[0.04] text-[#F8FAFC] border border-white/[0.06] group-hover:border-[#19D7FF]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Actions: View CV & Download PDF */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-3">
              <Magnetic className="flex-1">
                <Link
                  href="/cv#tech"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Consulter le CV Tech</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic>
                <a
                  href="/cv/aymen-derouiche-cv-tech.pdf"
                  download="aymen-derouiche-cv-tech.pdf"
                  title="Télécharger le PDF Tech"
                  className="py-3.5 px-3.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#19D7FF]" />
                  <span className="text-[11px] font-mono">PDF</span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* TRACK 02: RETAIL & HOSPITALITY */}
          <div
            onMouseEnter={() => isDesktop && setActiveHover("hospitality")}
            onMouseLeave={() => isDesktop && setActiveHover(null)}
            className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#070E1B] to-[#040813] border ${
              activeHover === "hospitality"
                ? "border-[#D4AF37] shadow-[0_0_40px_-8px_rgba(212,175,55,0.22)] -translate-y-1.5"
                : "border-white/[0.08] hover:border-[#D4AF37]/50"
            }`}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-mono font-bold tracking-wider uppercase">
                  <Store className="w-3.5 h-3.5" />
                  <span>PARCOURS 02</span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8]">OPÉRATIONS DE TERRAIN</span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  RETAIL &amp; HOSPITALITY
                </h3>
                <p className="text-xs font-mono text-[#D4AF37]/80 mt-0.5">
                  Commerce · Caisse POS · Rigueur Opérationnelle
                </p>
              </div>

              {/* First-person paragraph */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Sur le terrain, je garantis une exécution sans faille : tenue de caisse rigoureuse,
                fluidité du rush en horeca, logistique des stocks et sens aigu du service client.
                Une fiabilité constante même sous forte cadence.
              </p>

              {/* Stated ONCE: Exclusive Retail/Hospitality Skill Tags */}
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#94A3B8]/60">
                  COMPÉTENCES MOBILISABLES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Caisse POS",
                    "Gestion des stocks",
                    "Rush Horeca",
                    "Service client",
                    "Merchandising",
                    "Rigueur financière",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/[0.04] text-[#F8FAFC] border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Actions: View CV & Download PDF */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-3">
              <Magnetic className="flex-1">
                <Link
                  href="/cv#hospitality"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Consulter le CV Terrain</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic>
                <a
                  href="/cv/aymen-derouiche-cv-hospitality.pdf"
                  download="aymen-derouiche-cv-hospitality.pdf"
                  title="Télécharger le PDF Opérations & Terrain"
                  className="py-3.5 px-3.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[11px] font-mono">PDF</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
