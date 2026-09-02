"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CvTab {
  id: "tech" | "hospitality";
  label: string;
  tagline: string;
  oneLiner: string;
  filePath: string;
  fileName: string;
  accentColor: "cyan" | "gold";
}

const CV_TABS: CvTab[] = [
  {
    id: "tech",
    label: "Tech & Software",
    tagline: "PROFIL INGÉNIERIE",
    oneLiner: "AI Systems · Full-Stack · Architectures SaaS · E-Commerce",
    filePath: "/cv/aymen-derouiche-cv-tech.pdf",
    fileName: "aymen-derouiche-cv-tech.pdf",
    accentColor: "cyan",
  },
  {
    id: "hospitality",
    label: "Operations & Terrain",
    tagline: "PROFIL TERRAIN",
    oneLiner: "Retail · Vente · Caisse POS · Logistique · Horeca",
    filePath: "/cv/aymen-derouiche-cv-hospitality.pdf",
    fileName: "aymen-derouiche-cv-hospitality.pdf",
    accentColor: "gold",
  },
];

export default function CvPage() {
  const [activeTab, setActiveTab] = useState<"tech" | "hospitality">("tech");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#00D2FF]">
          <Link href="/" className="hover:underline text-[#8D98A9]">
            Accueil
          </Link>
          <span>/</span>
          <span>CVs</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F5F7FA] uppercase">
          MY CVs
        </h1>
        <p className="text-xs sm:text-sm font-medium text-[#8D98A9]">
          Two profiles. One person. Deux contextes professionnels, une même rigueur.
        </p>
      </div>

      {/* Switchable Tabs with Anchor Links */}
      <div
        role="tablist"
        aria-label="Sélection du CV"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#0D1118] border border-white/10"
      >
        {CV_TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          const tabIsCyan = tab.accentColor === "cyan";
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-start p-4 rounded-xl text-left transition-all duration-200 cursor-pointer outline-none ${
                isSelected
                  ? tabIsCyan
                    ? "bg-[#00D2FF] text-[#05070B] shadow-lg shadow-[#00D2FF]/20"
                    : "bg-[#C9994A] text-[#05070B] shadow-lg shadow-[#C9994A]/20"
                  : "bg-transparent text-[#8D98A9] hover:text-[#F5F7FA] hover:bg-white/5"
              }`}
            >
              <span
                className={`text-[10px] font-mono font-bold tracking-wider uppercase mb-0.5 ${
                  isSelected
                    ? "text-[#05070B]/80 font-black"
                    : tabIsCyan
                    ? "text-[#00D2FF]"
                    : "text-[#C9994A]"
                }`}
              >
                {tab.tagline}
              </span>
              <span
                className={`text-sm sm:text-base font-black ${
                  isSelected ? "text-[#05070B]" : "text-[#F5F7FA]"
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`text-xs mt-0.5 leading-snug ${
                  isSelected ? "text-[#05070B]/90 font-medium" : "text-[#8D98A9]"
                }`}
              >
                {tab.oneLiner}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        id={`panel-${currentCv.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentCv.id}`}
        className="flex flex-col gap-4 animate-fade-in"
      >
        {/* Quick Action Bar above viewer */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0D1118] border border-white/10">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isCyan ? "bg-[#00D2FF]" : "bg-[#C9994A]"
              }`}
            />
            <span className="text-xs sm:text-sm font-bold text-[#F5F7FA]">
              {currentCv.fileName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentCv.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#121925] border border-white/10 text-[#F5F7FA] hover:border-white/30 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Plein écran</span>
            </a>

            <a
              href={currentCv.filePath}
              download={currentCv.fileName}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-md ${
                isCyan
                  ? "bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B]"
                  : "bg-[#C9994A] hover:bg-[#DCAE5D] text-[#05070B]"
              }`}
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
              <span>Télécharger PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer (80vh) */}
        <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden bg-[#05070B] border border-white/10 shadow-2xl">
          {isClient && (
            <iframe
              src={`${currentCv.filePath}#toolbar=0&navpanes=0`}
              title={`Aperçu ${currentCv.label}`}
              className="w-full h-full border-0"
            />
          )}

          {/* Fallback card for mobile webviews */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0D1118]/95 backdrop-blur-md border border-white/15 text-center flex flex-col gap-1 text-xs">
            <span className="text-[#8D98A9]">
              Visualisez le PDF directement dans votre navigateur :
            </span>
            <div className="flex items-center justify-center gap-3 mt-1">
              <a
                href={currentCv.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold underline ${
                  isCyan ? "text-[#00D2FF]" : "text-[#C9994A]"
                }`}
              >
                Ouvrir en plein écran ↗
              </a>
              <span className="text-white/20">·</span>
              <a
                href={currentCv.filePath}
                download={currentCv.fileName}
                className={`font-bold underline ${
                  isCyan ? "text-[#00D2FF]" : "text-[#C9994A]"
                }`}
              >
                Télécharger le fichier ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
