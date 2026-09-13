"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Code2, Download, RotateCw, Sparkles, Store } from "lucide-react";
import CardTilt3D from "@/components/motion/CardTilt3D";

export default function TwoPathsFlipCard() {
  // "retail" is front face (gold, student job priority), "tech" is back face (cyan, software engineer)
  const [isFlipped, setIsFlipped] = useState(false);

  const activePath = isFlipped ? "tech" : "retail";

  return (
    <section
      id="two-paths"
      data-path-active={activePath}
      aria-label="Deux parcours professionnels : Retail & Hospitality ou Tech & Software"
      className="relative w-full py-10 sm:py-16 perspective-1400"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                02 // DEUX PARCOURS · UN NIVEAU D&apos;EXIGENCE
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[10px] font-mono text-[#94A3B8]">CARTE INTERACTIVE 3D</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight">
              CHOISISSEZ LE PROFIL
            </h2>
          </div>

          <p className="text-xs text-[#94A3B8] max-w-sm sm:text-right">
            Deux expertises concrètes. Retournez la carte en 3D pour découvrir chaque parcours.
          </p>
        </div>

        {/* Interactive 3D Mode Switcher Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-1.5 rounded-2xl bg-[#070E1B] border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            {/* Retail Tab */}
            <button
              onClick={() => setIsFlipped(false)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center justify-center gap-2 ${
                !isFlipped
                  ? "bg-[#D4AF37] text-[#030712] shadow-md shadow-amber-500/20 font-black"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Retail &amp; Horeca</span>
            </button>

            {/* Tech Tab */}
            <button
              onClick={() => setIsFlipped(true)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center justify-center gap-2 ${
                isFlipped
                  ? "bg-[#19D7FF] text-[#030712] shadow-md shadow-cyan-500/20 font-black"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Tech &amp; Software</span>
            </button>
          </div>

          {/* 3D Flip Trigger Hint Button */}
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 active:scale-[0.96] border border-white/10 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-all inline-flex items-center justify-center gap-2"
          >
            <RotateCw className="w-3.5 h-3.5 text-[#19D7FF] animate-spin [animation-duration:8s]" />
            <span>Retourner la carte 3D ({isFlipped ? "Vers Terrain" : "Vers Tech"})</span>
          </button>
        </div>

        {/* 3D Physical Flip Card Container */}
        <div className="flip-card-container w-full min-h-[460px] sm:min-h-[420px]">
          <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
            {/* FRONT FACE: RETAIL & HOSPITALITY (GOLD TONES) */}
            <div className="flip-card-front">
              <CardTilt3D maxTilt={5}>
                <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0B132B]/90 via-[#070E1B]/95 to-[#040813] border border-[#D4AF37]/30 shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] flex flex-col justify-between gap-6 min-h-[460px] sm:min-h-[420px] backdrop-blur-xl">
                  {/* Subtle Gold Ambient Corner Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/[0.06] rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] font-mono font-bold tracking-wider uppercase">
                      <Store className="w-3.5 h-3.5" />
                      <span>PARCOURS 01 // PRIORITÉ TERRAIN</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">DISPONIBLE À MONS</span>
                  </div>

                  {/* Title & Copy */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight">
                      VENTE, CAISSE &amp; SERVICE CLIENT
                    </h3>
                    <p className="text-xs font-mono text-[#D4AF37]">
                      Polyvalence · Rigueur caisse zéro écart · Rush horaire &amp; Sens client
                    </p>
                    <p className="text-xs sm:text-sm text-[#F8FAFC]/85 leading-relaxed mt-1">
                      Sur le terrain, j&apos;apporte ponctualité, énergie et sens du service. Qu&apos;il s&apos;agisse de tenir une caisse enregistreuse sans écart, conseiller une clientèle exigeante en bijouterie, assurer le rush en restauration rapide ou organiser le réassort logistique, je m&apos;adapte immédiatement aux besoins de votre équipe.
                    </p>
                  </div>

                  {/* Exclusive Skill Tags — Stated ONCE */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                      COMPÉTENCES CLÉS D&apos;EXÉCUTION
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Caisse POS (Zéro écart)",
                        "Service client & Conseil",
                        "Gestion du rush",
                        "Réassort & Facing soigné",
                        "Tenue des stocks & Pesée",
                        "Normes HACCP & Hygiène",
                        "Ponctualité irréprochable",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-[#D4AF37]/20 text-xs font-semibold text-[#F8FAFC]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08]">
                    <Link
                      href="/cv#hospitality"
                      className="sheen-sweep px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
                    >
                      <span>CONSULTER LE DOSSIER TERRAIN</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="/cv/aymen-derouiche-cv-hospitality.pdf"
                      download="aymen-derouiche-cv-hospitality.pdf"
                      className="px-4 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Télécharger PDF</span>
                    </a>
                  </div>
                </div>
              </CardTilt3D>
            </div>

            {/* BACK FACE: TECH & SOFTWARE (CYAN TONES) */}
            <div className="flip-card-back">
              <CardTilt3D maxTilt={5}>
                <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#071326]/90 via-[#070E1B]/95 to-[#040813] border border-[#19D7FF]/30 shadow-[0_15px_40px_-10px_rgba(25,215,255,0.15)] flex flex-col justify-between gap-6 min-h-[460px] sm:min-h-[420px] backdrop-blur-xl">
                  {/* Subtle Cyan Ambient Corner Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#19D7FF]/[0.06] rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19D7FF]/10 border border-[#19D7FF]/25 text-[#19D7FF] text-[10px] font-mono font-bold tracking-wider uppercase">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>PARCOURS 02 // INGÉNIERIE SYSTÈMES</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8]">FULL-STACK &amp; IA</span>
                  </div>

                  {/* Title & Copy */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight">
                      TECH &amp; SOFTWARE ENGINEER
                    </h3>
                    <p className="text-xs font-mono text-[#19D7FF]">
                      Architectures SaaS Cloud · Multi-Agents IA · Next.js &amp; NestJS
                    </p>
                    <p className="text-xs sm:text-sm text-[#F8FAFC]/85 leading-relaxed mt-1">
                      Je conçois des plateformes SaaS modulaires, des pipelines d&apos;automatisation multi-agents et des interfaces réactives fluides. Du schéma relationnel sous PostgreSQL jusqu&apos;au déploiement conteneurisé Docker, je développe avec méthode pour la robustesse et la scalabilité.
                    </p>
                  </div>

                  {/* Exclusive Skill Tags — Stated ONCE */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#19D7FF]">
                      STACK TECHNIQUE MAÎTRISÉE
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js 15 (App Router)",
                        "TypeScript",
                        "NestJS & Node",
                        "Python & FastAPIs",
                        "PostgreSQL & Prisma",
                        "Docker & Cloud VPS",
                        "Multi-Agents IA",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-[#19D7FF]/20 text-xs font-mono font-semibold text-[#F8FAFC]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#19D7FF]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08]">
                    <Link
                      href="/cv#tech"
                      className="sheen-sweep px-5 py-2.5 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
                    >
                      <span>CONSULTER LE DOSSIER TECH</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="/cv/aymen-derouiche-cv-tech.pdf"
                      download="aymen-derouiche-cv-tech.pdf"
                      className="px-4 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-[#19D7FF]" />
                      <span>Télécharger PDF Tech</span>
                    </a>
                  </div>
                </div>
              </CardTilt3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
