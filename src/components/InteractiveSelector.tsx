"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

interface AudienceOption {
  id: string;
  icon: string;
  label: string;
  line: string;
  ctaText?: string;
  ctaHref?: string;
  isExternal?: boolean;
}

const AUDIENCE_OPTIONS: AudienceOption[] = [
  {
    id: "tech",
    icon: "💻",
    label: "Tech & Software",
    line: "Explorez mes projets d'ingénierie, architectures de systèmes et mon CV technique.",
    ctaText: "Voir le CV Tech",
    ctaHref: "/cv#tech",
  },
  {
    id: "retail",
    icon: "🛍️",
    label: "Retail & Vente",
    line: "Découvrez mon profil terrain : caisse bijouterie sans écart, gestion des stocks et relation client.",
    ctaText: "Voir le CV Terrain",
    ctaHref: "/cv#hospitality",
  },
  {
    id: "restaurant",
    icon: "🍽️",
    label: "Restaurant & Horeca",
    line: "Tenue de la cadence en salle, service, polyvalence et disponibilité en soirée & week-ends.",
    ctaText: "Profil Opérations Horeca",
    ctaHref: "/cv#hospitality",
  },
  {
    id: "logistics",
    icon: "📦",
    label: "Logistique",
    line: "Gestion de stocks, réassort, préparation des commandes et rigueur d'inventaire.",
    ctaText: "Profil Logistique",
    ctaHref: "/cv#hospitality",
  },
  {
    id: "creative",
    icon: "🎨",
    label: "Créatif & Digital",
    line: "Direction artistique, montages vidéo courts (Reels/Shorts), UI/UX et identité visuelle.",
    ctaText: "Portfolio complet ↗",
    ctaHref: CONTACT.portfolioUrl,
    isExternal: true,
  },
  {
    id: "curious",
    icon: "🏀",
    label: "Simple Curiosité",
    line: "Bienvenue dans mon univers — sport, code, projets personnels et énergie positive.",
    ctaText: "Explorer mon monde",
    ctaHref: "#my-world",
  },
];

export default function InteractiveSelector() {
  const [selectedId, setSelectedId] = useState<string>(AUDIENCE_OPTIONS[0].id);

  const current =
    AUDIENCE_OPTIONS.find((item) => item.id === selectedId) ||
    AUDIENCE_OPTIONS[0];

  return (
    <section className="w-full my-8" aria-labelledby="visitor-intent-heading">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <h3
              id="visitor-intent-heading"
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA]"
            >
              Qu&apos;est-ce qui vous amène ici ?
            </h3>
          </div>
          <span className="text-[11px] text-[#8D98A9]">Cliquez pour orienter</span>
        </div>

        {/* 6 Selector Chips */}
        <div
          role="tablist"
          aria-label="Sélectionnez votre intérêt"
          className="flex flex-wrap gap-2"
        >
          {AUDIENCE_OPTIONS.map((opt) => {
            const isSelected = selectedId === opt.id;
            return (
              <button
                key={opt.id}
                role="tab"
                id={`intent-tab-${opt.id}`}
                aria-selected={isSelected}
                aria-controls={`intent-panel-${opt.id}`}
                onClick={() => setSelectedId(opt.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] ${
                  isSelected
                    ? "bg-[#F5F7FA] text-[#05070B] font-bold shadow-md scale-[1.02]"
                    : "bg-[#0D1118] border border-white/10 text-[#8D98A9] hover:border-white/30 hover:text-[#F5F7FA]"
                }`}
              >
                <span className="mr-1.5">{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* One tailored short line reveal */}
        <div
          key={current.id}
          role="tabpanel"
          id={`intent-panel-${current.id}`}
          aria-labelledby={`intent-tab-${current.id}`}
          className="animate-fade-in p-4 rounded-xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md"
        >
          <p className="text-xs sm:text-sm text-[#F5F7FA] font-medium leading-relaxed">
            {current.line}
          </p>

          {current.ctaText && current.ctaHref && (
            <div className="shrink-0">
              {current.isExternal ? (
                <a
                  href={current.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00D2FF] text-[#05070B] text-xs font-bold uppercase tracking-wider hover:bg-[#38BDF8] transition-all"
                >
                  {current.ctaText}
                </a>
              ) : current.ctaHref.startsWith("#") ? (
                <a
                  href={current.ctaHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 text-[#F5F7FA] text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  {current.ctaText} ↓
                </a>
              ) : (
                <Link
                  href={current.ctaHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00D2FF] text-[#05070B] text-xs font-bold uppercase tracking-wider hover:bg-[#38BDF8] transition-all"
                >
                  {current.ctaText} →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
