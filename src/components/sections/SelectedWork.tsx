"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cpu, Database, ExternalLink, Layers, Server } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import CardTilt3D from "@/components/motion/CardTilt3D";

export default function SelectedWork() {
  const proofPoints = [
    "Architecture multi-tenant SaaS distribuée (Next.js 15 App Router, NestJS, PostgreSQL)",
    "Moteur de facturation & gestion des stocks en temps réel avec réconciliation automatique",
    "Pipelines multi-agents IA pour l'analyse prédictive et le traitement d'incidents",
  ];

  const techStack = [
    "Next.js 15",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AI Agents",
  ];

  return (
    <section
      id="selected-work"
      aria-label="Projet sélectionné : AtlasERP & Agents IA"
      className="relative w-full py-10 sm:py-14 border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/[0.08] pb-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                03 // TRAVAUX SÉLECTIONNÉS
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[10px] font-mono text-[#94A3B8]">ÉTUDE DE CAS PHARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight">
              ATLAS ERP &amp; AGENTS IA
            </h2>
          </div>

          <p className="text-xs text-[#94A3B8] max-w-sm sm:text-right">
            Conception complète d&apos;un écosystème d&apos;entreprise moderne et résilient.
          </p>
        </div>

        {/* 3D Tilt Case Study Showcase Card */}
        <CardTilt3D maxTilt={4}>
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#071120]/90 via-[#070E1B]/95 to-[#040813] border border-[#19D7FF]/20 hover:border-[#19D7FF]/40 shadow-[0_15px_40px_-10px_rgba(25,215,255,0.12)] transition-all backdrop-blur-xl flex flex-col md:flex-row gap-6 items-center">
            {/* Project Mockup / Visual Thumbnail */}
            <div className="relative w-full md:w-72 h-44 sm:h-48 rounded-2xl overflow-hidden bg-[#030712] border border-white/10 shrink-0 group">
              <Image
                src="/images/atlaserp.png"
                alt="AtlasERP — Plateforme Cloud SaaS"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#070E1B]/90 border border-white/15 text-[10px] font-mono text-[#19D7FF] flex items-center gap-1.5 backdrop-blur-md">
                <Cpu className="w-3 h-3" />
                <span>Cloud SaaS · Production</span>
              </div>
            </div>

            {/* Details, Proof Points & Action */}
            <div className="flex-1 flex flex-col justify-between gap-4 w-full">
              <div>
                <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                  Plateforme modulaire développée pour automatiser la chaîne opérationnelle d&apos;une entreprise : synchronisation des stocks, génération comptable automatisée et assistants IA autonomes.
                </p>
              </div>

              {/* 3 High-Signal Proof Points */}
              <div className="flex flex-col gap-2">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19D7FF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] text-[#94A3B8] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Case study & Portfolio CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen-sweep px-4 py-2 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:translate-y-[2px] active:scale-[0.98] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>EXPLORER LE PROJET SUR GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={CONTACT.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                >
                  <span>Tous les projets</span>
                  <ExternalLink className="w-3 h-3 text-[#19D7FF]" />
                </a>
              </div>
            </div>
          </div>
        </CardTilt3D>
      </div>
    </section>
  );
}
