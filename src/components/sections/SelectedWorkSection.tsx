"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Bot, Cpu, Database, ShieldCheck, Zap } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { CONTACT } from "@/lib/contact";

export default function SelectedWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      ref={containerRef}
      aria-label="Projet phare : AtlasERP & Workflows Multi-Agents"
      className="relative w-full py-8 sm:py-16"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              03 // ÉTUDE DE CAS · PROJET PHARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight mt-1">
              ATLAS ERP &amp; AGENTS IA
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-sm sm:text-right">
            Conception complète d&apos;une plateforme cloud distribuée pour la gestion d&apos;entreprise.
          </p>
        </div>

        {/* Case Study Feature Container */}
        <motion.div
          style={{ y: isDesktop ? yTranslate : 0, opacity: isDesktop ? opacity : 1 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#070E1B] via-[#050A14] to-[#030712] border border-white/[0.08] hover:border-[#19D7FF]/40 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#19D7FF]/[0.06] rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar / Architecture Stack Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#19D7FF] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F8FAFC]">
                SYSTÈME EN PRODUCTION
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs font-mono text-[#19D7FF]">MULTI-TENANT SAAS</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#94A3B8]">
              <span>Next.js 15</span>
              <span>·</span>
              <span>NestJS</span>
              <span>·</span>
              <span>PostgreSQL</span>
              <span>·</span>
              <span>Redis</span>
              <span>·</span>
              <span>Docker</span>
            </div>
          </div>

          {/* Content & Visual Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            {/* Left Column: Context, Problem & Solution in First Person */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                  INGÉNIERIE APPLIQUÉE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight mt-1">
                  PLATEFORME MODULAIRE DE GESTION &amp; AUTOMATISATION
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                J&apos;ai conçu et développé AtlasERP pour unifier la facturation, la logistique de stock
                et les commandes clients au sein d&apos;une architecture distribuée résiliente.
              </p>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Pour réduire le temps d&apos;exécution des tâches manuelles, j&apos;y ai intégré des
                agents autonomes capables de rapprocher les données comptables et d&apos;anticiper les ruptures
                d&apos;approvisionnement.
              </p>

              {/* Technical Highlights / Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#19D7FF]">
                    <Zap className="w-3 h-3" />
                    <span>LATENCE</span>
                  </div>
                  <div className="text-lg font-black text-[#F8FAFC] mt-0.5">&lt; 85ms</div>
                  <div className="text-[9px] text-[#94A3B8]">Temps de réponse p95</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#25D366]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>ISOLATION</span>
                  </div>
                  <div className="text-lg font-black text-[#F8FAFC] mt-0.5">100%</div>
                  <div className="text-[9px] text-[#94A3B8]">Cloisonnement tenant</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#D4AF37]">
                    <Bot className="w-3 h-3" />
                    <span>AGENTS</span>
                  </div>
                  <div className="text-lg font-black text-[#F8FAFC] mt-0.5">Multi-LLM</div>
                  <div className="text-[9px] text-[#94A3B8]">Workflows asynchrones</div>
                </div>
              </div>
            </div>

            {/* Right Column: Realistic Mockup Frame with layered image presentation */}
            <div className="lg:col-span-6 relative flex flex-col gap-4">
              {/* Main Application Interface Mockup */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-[#030712] border border-white/15 shadow-2xl group/mockup">
                <Image
                  src="/images/atlaserp.png"
                  alt="AtlasERP Interface & Analytics Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top filter brightness-[0.92] group-hover/mockup:scale-103 group-hover/mockup:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#030712]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#19D7FF]" />
                    <span className="text-[#F8FAFC] font-bold">Base PostgreSQL clusterisée</span>
                  </div>
                  <span className="text-[#19D7FF]">LIVE DEMO READY</span>
                </div>
              </div>

              {/* Sub-Layer: Autonomous Multi-Agent Diagram Teaser */}
              <div className="p-4 rounded-2xl bg-[#0A1220] border border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#19D7FF]/10 border border-[#19D7FF]/20 flex items-center justify-center text-[#19D7FF] shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#19D7FF] font-bold">
                      PIPELINE MULTI-AGENTS
                    </span>
                    <p className="text-xs text-[#F8FAFC] font-semibold">
                      Orchestration LangChain, Python &amp; Webhooks
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#94A3B8] hidden sm:inline">
                  DÉCOUVRIR LE CODE SOURCE
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Portal Banner: Link out to Full Portfolio */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider">
                EXPLORER L&apos;ENSEMBLE DES PROJETS &amp; ARCHITECTURES
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                Consultez les démonstrations interactives et études de cas approfondies.
              </p>
            </div>

            <Magnetic>
              <a
                href={CONTACT.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-500/25 shrink-0"
              >
                <span>Accéder au portfolio complet</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
