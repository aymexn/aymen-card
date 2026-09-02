"use client";

import Image from "next/image";
import Link from "next/link";
import HeroCvSelector from "@/components/HeroCvSelector";
import QuickContactBar from "@/components/QuickContactBar";
import PersonalityStrip from "@/components/PersonalityStrip";
import CapabilityChips from "@/components/CapabilityChips";
import InteractiveSelector from "@/components/InteractiveSelector";
import MyWorldGrid from "@/components/MyWorldGrid";
import VisualMasonry from "@/components/VisualMasonry";
import { CONTACT, downloadVCard } from "@/lib/contact";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col">
      {/* ========================================================
          01. IDENTITY / HERO (Compact for First Viewport)
          ======================================================== */}
      <section className="w-full flex flex-col gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Editorial Portrait Crop */}
          <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#00D2FF]/60 shadow-lg shadow-[#00D2FF]/10 shrink-0">
            <Image
              src="/photo.jpg"
              alt="Aymen Derouiche"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 72px, 96px"
            />
          </div>

          {/* Identity & Location */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mons, Belgique · Dispo immédiate</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#F5F7FA] uppercase leading-none">
              Aymen Derouiche
            </h1>

            <p className="text-xs sm:text-sm font-bold text-[#8D98A9] uppercase tracking-wide mt-1">
              AI Systems & Product Engineer
            </p>

            <p className="text-[11px] sm:text-xs text-[#F5F7FA]/70 font-mono tracking-wide mt-0.5">
              I build. I learn. I create. I work. I explore.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          02. TWO CVS — TOP HERO COMPONENT (Immediate Choice)
          ======================================================== */}
      <HeroCvSelector />

      {/* ========================================================
          03. CONTACT — ALSO EARLY
          ======================================================== */}
      <QuickContactBar />

      {/* ========================================================
          04. SHORT PERSONAL INTRO
          ======================================================== */}
      <section className="w-full my-6 p-4 sm:p-5 rounded-2xl bg-[#0D1118] border border-white/10 shadow-sm">
        <p className="text-xs sm:text-sm text-[#F5F7FA] leading-relaxed">
          « Je touche à beaucoup de choses, sérieusement : logiciels, IA, e-commerce, création, vente, terrain. Je peux passer d&apos;un système complexe à une caisse, d&apos;un écran à un service en salle — et j&apos;aime apprendre en chemin. »
        </p>
      </section>

      {/* ========================================================
          05. EXPLORE MY FULL PORTFOLIO ↗
          ======================================================== */}
      <section className="w-full my-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0D1118] via-[#121925] to-[#0D1118] border border-[#00D2FF]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold">
            QR WEBSITE = ME · MAIN PORTFOLIO = MY DEEP WORK
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">
            Envie de voir mes architectures logicielles complètes ?
          </h3>
          <p className="text-xs text-[#8D98A9]">
            Démos AtlasERP, pipelines multi-agents, code source et études de cas approfondies.
          </p>
        </div>
        <a
          href={CONTACT.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B] text-xs font-black tracking-wider uppercase transition-all duration-150 shadow-md hover:scale-[1.02] text-center"
        >
          Explorer mon portfolio complet ↗
        </a>
      </section>

      {/* ========================================================
          06. MY WORLD (01 to 06 with Basketball)
          ======================================================== */}
      <MyWorldGrid />

      {/* ========================================================
          07. PERSONALITY STRIP / BASKETBALL & INTERESTS
          ======================================================== */}
      <PersonalityStrip />

      {/* ========================================================
          08. WHAT I CAN DO (Interactive Intent + Capabilities)
          ======================================================== */}
      <InteractiveSelector />
      <CapabilityChips />

      {/* ========================================================
          09. VISUAL MASONRY (Editorial Asymmetric Journal)
          ======================================================== */}
      <VisualMasonry />

      {/* ========================================================
          10 & 11. LET'S CONNECT & SAVE CONTACT (.VCF)
          ======================================================== */}
      <section className="w-full my-8 p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold">
            LET&apos;S CONNECT
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA]">
            Projet, mission, job ou simple échange ?
          </h3>
          <p className="text-xs text-[#8D98A9]">
            Je suis basé à Mons, disponible immédiatement et mobile dans toute la région.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
          >
            Me Contacter ↗
          </Link>
          <button
            onClick={downloadVCard}
            className="px-4 py-2.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] text-xs font-semibold hover:border-white/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Enregistrer contact (.vcf)</span>
          </button>
        </div>
      </section>
    </div>
  );
}
