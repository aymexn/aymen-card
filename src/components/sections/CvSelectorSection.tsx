"use client";

import Link from "next/link";
import { ArrowUpRight, Download, FileText, Sparkles, Store, Terminal } from "lucide-react";

export default function CvSelectorSection() {
  return (
    <section
      id="cvs"
      aria-label="Sélection des CVs disponibles"
      className="relative w-full py-6 sm:py-8 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              03 // DOSSIERS DE CANDIDATURE
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
              CURRICULUM VITAE
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#94A3B8] hidden sm:inline">
            2 PROFILS SPÉCIALISÉS
          </span>
        </div>

        {/* Dual Cards Grid — Horeca FIRST, Tech SECOND */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CARD 1: CV TERRAIN (VISUALLY DOMINANT) */}
          <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#0E1726] to-[#070E1B] border-2 border-[#D4AF37] shadow-[0_0_30px_-8px_rgba(212,175,55,0.25)] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[10px] font-mono font-bold uppercase text-[#D4AF37]">
                  <Store className="w-3 h-3" />
                  <span>PRIORITÉ ACTUELLE</span>
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]">DISPO MONS</span>
              </div>

              {/* Title & Subhead */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-[#F8FAFC] tracking-tight">
                  CV TERRAIN
                </h3>
                <p className="text-xs font-medium text-[#D4AF37]">
                  Vente · Caisse · Horeca · Service client
                </p>
              </div>

              {/* 1-line description */}
              <p className="text-xs text-[#94A3B8] leading-snug">
                Sens aigu du service, tenue de caisse exacte, rapidité d&apos;exécution en rush et réassort.
              </p>

              {/* Key Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Caisse POS", "Relation client", "Gestion de stock", "Rush horaire", "Réassort"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-white/[0.05] border border-white/[0.08] text-[#F8FAFC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
              <Link
                href="/cv#hospitality"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 text-center"
              >
                <span>OUVRIR LE CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="/cv/aymen-derouiche-cv-hospitality.pdf"
                download="aymen-derouiche-cv-hospitality.pdf"
                title="Télécharger le PDF Terrain"
                className="py-2.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center gap-1 shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[11px] font-mono">PDF</span>
              </a>
            </div>
          </div>

          {/* CARD 2: CV TECH (SECONDARY) */}
          <div className="relative rounded-2xl p-5 sm:p-6 bg-[#070E1B] border border-white/10 hover:border-[#19D7FF]/40 transition-colors flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#19D7FF]/10 border border-[#19D7FF]/25 text-[10px] font-mono font-bold uppercase text-[#19D7FF]">
                  <Terminal className="w-3 h-3" />
                  <span>PROFIL TECHNIQUE</span>
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]">INGÉNIERIE</span>
              </div>

              {/* Title & Subhead */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-[#F8FAFC] tracking-tight">
                  CV TECH
                </h3>
                <p className="text-xs font-medium text-[#19D7FF]">
                  Software · Full-Stack · AI · Systems
                </p>
              </div>

              {/* 1-line description */}
              <p className="text-xs text-[#94A3B8] leading-snug">
                Développement d&apos;applications web modernes, architectures cloud, APIs et automatisation IA.
              </p>

              {/* Key Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Next.js", "TypeScript", "Python / IA", "PostgreSQL", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-white/[0.04] border border-white/[0.06] text-[#94A3B8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
              <Link
                href="/cv#tech"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 hover:border-[#19D7FF]/40 text-[#F8FAFC] text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>OUVRIR LE CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#19D7FF]" />
              </Link>

              <a
                href="/cv/aymen-derouiche-cv-tech.pdf"
                download="aymen-derouiche-cv-tech.pdf"
                title="Télécharger le PDF Tech"
                className="py-2.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center gap-1 shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-[#19D7FF]" />
                <span className="text-[11px] font-mono">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
