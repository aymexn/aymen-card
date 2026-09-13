"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle, Database, Layers, ShieldCheck, Zap } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function AtlasErpCompact() {
  const proofPoints = [
    "Architecture multi-tenant SaaS",
    "Système distribué haute disponibilité",
    "Automatisation via agents IA",
  ];

  const techStack = [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Python / AI",
  ];

  return (
    <section
      id="atlaserp"
      aria-label="Projet phare : AtlasERP"
      className="relative w-full py-6 sm:py-8 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              05 // PROJET PHARE
            </span>
            <span className="text-white/20">·</span>
            <span className="text-[10px] font-mono text-[#94A3B8]">
              ÉTUDE DE CAS
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
            ATLAS ERP
          </h2>
          <p className="text-xs font-mono text-[#19D7FF]">
            SaaS · ERP · IA · Architecture distribuée
          </p>
        </div>

        {/* Compact Showcase Box */}
        <div className="rounded-2xl p-5 sm:p-6 bg-[#070E1B] border border-white/10 hover:border-[#19D7FF]/30 transition-all flex flex-col md:flex-row gap-5 items-center">
          {/* Compact Mockup Thumbnail - Full preview with zero crop */}
          <div className="relative w-full md:w-72 h-44 sm:h-48 rounded-xl overflow-hidden bg-[#02050E] border border-white/10 shrink-0 flex items-center justify-center">
            {/* Pure CSS Ambient Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(25,215,255,0.12),_transparent_75%)] pointer-events-none" />
            <div className="relative w-full h-full p-1.5 flex items-center justify-center z-[1]">
              <Image
                src="/images/atlaserp.jpg"
                alt="AtlasERP Aperçu Interface SaaS"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-contain filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.85)]"
              />
            </div>
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#030712]/90 text-[9px] font-mono text-[#19D7FF] border border-white/10 z-10">
              Demo Preview
            </span>
          </div>

          {/* Details & Proof Points */}
          <div className="flex-1 flex flex-col justify-between gap-3 w-full">
            {/* Description */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Plateforme SaaS conçue pour centraliser la gestion commerciale, les stocks,
              les commandes et l’automatisation.
            </p>

            {/* 3 Proof Points */}
            <div className="flex flex-col gap-1.5">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#19D7FF] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Row */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-[#94A3B8] border border-white/[0.05]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={CONTACT.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#0D1527] hover:bg-[#19D7FF] hover:text-[#030712] active:scale-[0.96] border border-white/15 hover:border-[#19D7FF] text-[#F8FAFC] text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center gap-1.5"
              >
                <span>VOIR L&apos;ÉTUDE DE CAS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
