"use client";

import { CheckCircle2, Store } from "lucide-react";

export default function TerrainProfileSection() {
  const chips = [
    "Caisse POS",
    "Service client",
    "Horeca",
    "Vente",
    "Réassort",
    "Gestion des stocks",
    "Merchandising",
    "Travail en équipe",
    "Ponctualité",
    "Adaptabilité",
  ];

  return (
    <section
      id="profil-terrain"
      aria-label="Profil opérationnel et compétences de terrain"
      className="relative w-full py-6 sm:py-8 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              02 // PROFIL TERRAIN
            </span>
            <span className="text-white/20">·</span>
            <span className="text-[10px] font-mono text-[#94A3B8]">
              RETAIL · HORECA · SERVICE
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
            COMPÉTENCES OPÉRATIONNELLES
          </h2>
        </div>

        {/* Short Statement */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
          Étudiant polyvalent, sérieux et opérationnel, disponible pour des missions en vente,
          caisse, horeca, service client, logistique et réassort.
        </p>

        {/* Compact Visual Chips Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {chips.map((chip) => (
            <div
              key={chip}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#070E1B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 text-xs font-semibold text-[#F8FAFC] shadow-sm transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
