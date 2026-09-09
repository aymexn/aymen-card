"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, Download, ExternalLink, Maximize2, Store } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";

interface CvTab {
  id: "tech" | "hospitality";
  label: string;
  badge: string;
  description: string;
  filePath: string;
  fileName: string;
  accentColor: "cyan" | "gold";
}

const CV_TABS: CvTab[] = [
  {
    id: "tech",
    label: "Tech & Software",
    badge: "DOSSIER 01 // INGÉNIERIE",
    description: "Systèmes IA · Architectures Cloud SaaS · Next.js · Python & Multi-Agents",
    filePath: "/cv/aymen-derouiche-cv-tech.pdf",
    fileName: "aymen-derouiche-cv-tech.pdf",
    accentColor: "cyan",
  },
  {
    id: "hospitality",
    label: "Retail & Operations",
    badge: "DOSSIER 02 // TERRAIN",
    description: "Commerce · Caisse POS · Logistique de Stock · Cadence Horeca & Service Client",
    filePath: "/cv/aymen-derouiche-cv-hospitality.pdf",
    fileName: "aymen-derouiche-cv-hospitality.pdf",
    accentColor: "gold",
  },
];

export default function CvPage() {
  const [activeTab, setActiveTab] = useState<"tech" | "hospitality">("tech");
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "hospitality" || hash === "tech") {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (tabId: "tech" | "hospitality") => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tabId}`);
    }
  };

  const currentCv = CV_TABS.find((t) => t.id === activeTab) || CV_TABS[0];
  const isCyan = currentCv.accentColor === "cyan";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col gap-6">
      {/* Top Breadcrumb & Return */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#19D7FF] active:scale-[0.96] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]/60">
          CURRICULUM VITAE // 2026
        </span>
      </div>

      {/* Page Title & First-Person Subhead */}
      <div className="flex flex-col gap-1.5 border-b border-white/[0.06] pb-4">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] uppercase">
          MES CURRICULUM VITAE
        </h1>
        <p className="text-xs sm:text-sm font-medium text-[#94A3B8] max-w-2xl leading-relaxed">
          Deux profils spécialisés selon vos besoins de recrutement : ingénierie logicielle d&apos;un côté,
          gestion rigoureuse des opérations et du terrain de l&apos;autre.
        </p>
      </div>

      {/* Dual Selector Tabs with Deep-Link Anchor IDs */}
      <div
        role="tablist"
        aria-label="Sélection du dossier CV"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#070E1B] border border-white/10"
      >
        {CV_TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          const tabIsCyan = tab.accentColor === "cyan";
          return (
            <button
              key={tab.id}
              id={tab.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-start p-4 sm:p-5 rounded-xl text-left transition-all duration-150 cursor-pointer outline-none relative overflow-hidden active:scale-[0.98] ${
                isSelected
                  ? tabIsCyan
                    ? "bg-[#19D7FF] text-[#030712] shadow-lg shadow-[#19D7FF]/20"
                    : "bg-[#D4AF37] text-[#030712] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {tabIsCyan ? (
                  <Code2 className={`w-3.5 h-3.5 ${isSelected ? "text-[#030712]" : "text-[#19D7FF]"}`} />
                ) : (
                  <Store className={`w-3.5 h-3.5 ${isSelected ? "text-[#030712]" : "text-[#D4AF37]"}`} />
                )}
                <span
                  className={`text-[9px] font-mono font-bold tracking-wider uppercase ${
                    isSelected
                      ? "text-[#030712]/80 font-black"
                      : tabIsCyan
                      ? "text-[#19D7FF]"
                      : "text-[#D4AF37]"
                  }`}
                >
                  {tab.badge}
                </span>
              </div>

              <span
                className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                  isSelected ? "text-[#030712]" : "text-[#F8FAFC]"
                }`}
              >
                {tab.label}
              </span>

              <span
                className={`text-xs mt-1 leading-snug ${
                  isSelected ? "text-[#030712]/90 font-medium" : "text-[#94A3B8]"
                }`}
              >
                {tab.description}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panel with Document Actions & Embedded Viewer */}
      <div
        id={`panel-${currentCv.id}`}
        role="tabpanel"
        aria-labelledby={currentCv.id}
        className="flex flex-col gap-4 animate-fade-in"
      >
        {/* Quick Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#070E1B] border border-white/10 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isCyan ? "bg-[#19D7FF]" : "bg-[#D4AF37]"
              }`}
            />
            <span className="text-xs sm:text-sm font-mono font-bold text-[#F8FAFC]">
              {currentCv.fileName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Magnetic>
              <a
                href={currentCv.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0D1527] border border-white/10 hover:border-white/30 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5 active:scale-[0.96]"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Plein écran</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href={currentCv.filePath}
                download={currentCv.fileName}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-md active:scale-[0.96] ${
                  isCyan
                    ? "bg-[#19D7FF] hover:bg-[#38BDF8] text-[#030712]"
                    : "bg-[#D4AF37] hover:bg-[#e5bc4b] text-[#030712]"
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger PDF</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="relative w-full h-[72vh] sm:h-[82vh] rounded-2xl overflow-hidden bg-[#030712] border border-white/10 shadow-2xl">
          {isClient && (
            <iframe
              src={`${currentCv.filePath}#toolbar=0&navpanes=0`}
              title={`Aperçu interactif ${currentCv.label}`}
              className="w-full h-full border-0"
            />
          )}

          {/* Fallback bar for mobile screens */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#070E1B]/95 backdrop-blur-md border border-white/15 text-center flex flex-col gap-1.5 text-xs">
            <span className="text-[#94A3B8]">
              Consultez le document directement dans votre lecteur :
            </span>
            <div className="flex items-center justify-center gap-4 mt-1">
              <a
                href={currentCv.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold underline flex items-center gap-1 active:scale-[0.96] ${
                  isCyan ? "text-[#19D7FF]" : "text-[#D4AF37]"
                }`}
              >
                <span>Ouvrir plein écran</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-white/20">·</span>
              <a
                href={currentCv.filePath}
                download={currentCv.fileName}
                className={`font-bold underline flex items-center gap-1 active:scale-[0.96] ${
                  isCyan ? "text-[#19D7FF]" : "text-[#D4AF37]"
                }`}
              >
                <span>Télécharger</span>
                <Download className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
