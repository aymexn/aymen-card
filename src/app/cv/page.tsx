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
}

const CV_TABS: CvTab[] = [
  {
    id: "tech",
    label: "💻 Tech & Ingénierie",
    tagline: "PROFIL INGÉNIERIE",
    oneLiner: "Développement full-stack, systèmes IA, architectures distribuées.",
    filePath: "/cv/aymen-derouiche-cv-tech.pdf",
    fileName: "aymen-derouiche-cv-tech.pdf",
  },
  {
    id: "hospitality",
    label: "🛍️ Vente · Logistique · Restauration",
    tagline: "PROFIL TERRAIN & OPÉRATIONS",
    oneLiner: "Vente, gestion de caisse, logistique, service client, horeca.",
    filePath: "/cv/aymen-derouiche-cv-hospitality.pdf",
    fileName: "aymen-derouiche-cv-hospitality.pdf",
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9994A]">
          <Link href="/" className="hover:underline text-[#9FB2C8]">
            Accueil
          </Link>
          <span>/</span>
          <span>Curriculum Vitae</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F7F5F0]">
          Mes CVs
        </h1>
        <p className="text-sm sm:text-base text-[#9FB2C8]">
          Différent contexte, différent profil. Choisissez la version adaptée à votre recherche.
        </p>
      </div>

      {/* Switchable Tabs with Anchor Links */}
      <div
        role="tablist"
        aria-label="Sélection du CV"
        className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl bg-[#07121E] border border-[#1E3B5C]/80"
      >
        {CV_TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 flex flex-col items-start p-4 rounded-xl text-left transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#C9994A] ${
                isSelected
                  ? "bg-[#C9994A] text-[#0B1B2B] font-semibold shadow-lg shadow-[#C9994A]/20"
                  : "bg-transparent text-[#9FB2C8] hover:text-[#F7F5F0] hover:bg-white/5"
              }`}
            >
              <span
                className={`text-[10px] font-mono font-bold tracking-wider uppercase mb-1 ${
                  isSelected ? "text-[#0B1B2B]/80" : "text-[#C9994A]"
                }`}
              >
                {tab.tagline}
              </span>
              <span
                className={`text-sm sm:text-base font-bold ${
                  isSelected ? "text-[#0B1B2B]" : "text-[#F7F5F0]"
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`text-xs mt-1 leading-snug ${
                  isSelected ? "text-[#0B1B2B]/90 font-medium" : "text-[#9FB2C8]"
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
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#0E2033] border border-[#1E3B5C]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9994A]" />
            <span className="text-xs sm:text-sm font-semibold text-[#F7F5F0]">
              {currentCv.fileName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentCv.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#07121E] border border-[#1E3B5C] text-[#F7F5F0] hover:border-[#C9994A] text-xs font-medium transition-colors inline-flex items-center gap-1.5"
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
              className="px-4 py-2 rounded-lg bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-md"
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
              <span>Télécharger le PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer (80vh) */}
        <div className="relative w-full h-[75vh] sm:h-[80vh] rounded-2xl overflow-hidden bg-[#07121E] border border-[#1E3B5C]/80 shadow-2xl">
          {isClient && (
            <iframe
              src={`${currentCv.filePath}#toolbar=0&navpanes=0`}
              title={`Aperçu ${currentCv.label}`}
              className="w-full h-full border-0"
            />
          )}

          {/* Fallback info card visible underneath / if iframe is blocked or mobile doesn't embed */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E2033]/90 backdrop-blur-md border border-[#1E3B5C] text-center flex flex-col gap-1 text-xs">
            <span className="text-[#9FB2C8]">
              Sur mobile, l&apos;aperçu intégré dépend de votre navigateur.
            </span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <a
                href={currentCv.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9994A] font-bold underline"
              >
                Ouvrir directement
              </a>
              <span className="text-white/30">·</span>
              <a
                href={currentCv.filePath}
                download={currentCv.fileName}
                className="text-[#C9994A] font-bold underline"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>

        {/* Clear Download button below as specified in prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#0E2033] border border-white/5">
          <div>
            <p className="text-sm font-semibold text-[#F7F5F0]">
              Besoin d&apos;archiver ou de transmettre ce profil ?
            </p>
            <p className="text-xs text-[#9FB2C8]">
              Le document PDF est prêt pour impression ou partage RH.
            </p>
          </div>
          <a
            href={currentCv.filePath}
            download={currentCv.fileName}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all duration-150 shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Télécharger le PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
