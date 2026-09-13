"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Download, ExternalLink, FileText, Mail, MapPin, Maximize2, MessageCircle, Phone, Store } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

interface CvTab {
  id: "hospitality" | "tech";
  label: string;
  badge: string;
  oneLiner: string;
  filePath: string;
  fileName: string;
  accentColor: "gold" | "cyan";
}

const CV_TABS: CvTab[] = [
  {
    id: "hospitality",
    label: "CV Terrain",
    badge: "01 // PRIORITÉ ACTUELLE",
    oneLiner: "Vente · Caisse POS · Horeca · Service client · Logistique",
    filePath: "/cv/aymen-derouiche-cv-hospitality.pdf",
    fileName: "aymen-derouiche-cv-hospitality.pdf",
    accentColor: "gold",
  },
  {
    id: "tech",
    label: "CV Tech",
    badge: "02 // PROFIL SECONDAIRE",
    oneLiner: "Software · Full-Stack · AI · Systems · Cloud SaaS",
    filePath: "/cv/aymen-derouiche-cv-tech.pdf",
    fileName: "aymen-derouiche-cv-tech.pdf",
    accentColor: "cyan",
  },
];

export default function CvPage() {
  // Default active tab is hospitality (Terrain / Student jobs)
  const [activeTab, setActiveTab] = useState<"hospitality" | "tech">("hospitality");
  const whatsappUrl = getWhatsAppUrl();

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "tech") {
        setActiveTab("tech");
      } else if (hash === "hospitality") {
        setActiveTab("hospitality");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (tabId: "hospitality" | "tech") => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tabId}`);
    }
  };

  const isTerrain = activeTab === "hospitality";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6">
      {/* Top Breadcrumbs & Back */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#19D7FF] active:scale-[0.96] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]/60">
          DOSSIER DE RECRUTEMENT // 2026
        </span>
      </div>

      {/* Recruiter Quick Identity Card */}
      <div className="rounded-2xl p-4 sm:p-6 bg-[#070E1B] border border-white/10 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
        {/* Photo */}
        <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-white/15 bg-[#030712] shrink-0 shadow-md">
          <Image
            src="/photo.jpg"
            alt="Aymen Derouiche"
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>

        {/* Recruiter Essentials */}
        <div className="flex-1 flex flex-col gap-1 w-full">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F8FAFC]">
              AYMEN DEROUICHE
            </h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[10px] font-mono text-[#25D366] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span>DISPONIBLE</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-[#D4AF37]">
            {isTerrain
              ? "Étudiant polyvalent — Vente, Caisse, Horeca & Logistique"
              : "Ingénieur logiciel & systèmes — Full-Stack & IA"}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#94A3B8] pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Mons, Belgique</span>
            </span>
            <span>·</span>
            <span>Mobilité régionale</span>
          </div>

          {/* Quick Contact & Direct Download Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
            <a
              href={isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}
              download={isTerrain ? "aymen-derouiche-cv-hospitality.pdf" : "aymen-derouiche-cv-tech.pdf"}
              className={`py-2 px-4 rounded-xl text-xs font-black tracking-wider uppercase transition-all inline-flex items-center gap-2 shadow-lg active:scale-[0.96] ${
                isTerrain
                  ? "bg-[#D4AF37] hover:bg-[#e5bc4b] text-[#030712] shadow-amber-500/20"
                  : "bg-[#19D7FF] hover:bg-[#38BDF8] text-[#030712] shadow-cyan-500/20"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>TÉLÉCHARGER LE CV (PDF)</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all inline-flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp · {CONTACT.whatsappDisplay}</span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="py-2 px-3.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#19D7FF]" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Two CV Switcher Tabs — Terrain FIRST, Tech SECOND */}
      <div
        role="tablist"
        aria-label="Choix du profil de CV"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#070E1B] border border-white/10"
      >
        {CV_TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          const isGold = tab.accentColor === "gold";
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-start p-4 rounded-xl text-left transition-all duration-150 cursor-pointer outline-none active:scale-[0.98] ${
                isSelected
                  ? isGold
                    ? "bg-[#D4AF37] text-[#030712] shadow-lg shadow-amber-500/20"
                    : "bg-[#19D7FF] text-[#030712] shadow-lg shadow-cyan-500/20"
                  : "bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                {isGold ? (
                  <Store className={`w-3.5 h-3.5 ${isSelected ? "text-[#030712]" : "text-[#D4AF37]"}`} />
                ) : (
                  <Code2 className={`w-3.5 h-3.5 ${isSelected ? "text-[#030712]" : "text-[#19D7FF]"}`} />
                )}
                <span
                  className={`text-[9px] font-mono font-bold tracking-wider uppercase ${
                    isSelected ? "text-[#030712]/80 font-black" : isGold ? "text-[#D4AF37]" : "text-[#19D7FF]"
                  }`}
                >
                  {tab.badge}
                </span>
              </div>

              <span className={`text-base font-black uppercase ${isSelected ? "text-[#030712]" : "text-[#F8FAFC]"}`}>
                {tab.label}
              </span>

              <span className={`text-xs mt-0.5 leading-snug ${isSelected ? "text-[#030712]/90 font-medium" : "text-[#94A3B8]"}`}>
                {tab.oneLiner}
              </span>
            </button>
          );
        })}
      </div>

      {/* 01 // DOCUMENT OFFICIEL & TÉLÉCHARGEMENT DIRECT (EN PREMIER) */}
      <div className="flex flex-col gap-3">
        {/* Document Actions Bar (Large Direct Download + Controls) */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-[#070E1B] border border-white/10 shadow-xl">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#25D366] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              DOCUMENT OFFICIEL VALIDÉ // PRÊT À L&apos;EMPLOI
            </span>
            <div className="flex items-center gap-2">
              <FileText className={`w-4 h-4 ${isTerrain ? "text-[#D4AF37]" : "text-[#19D7FF]"}`} />
              <span className="text-xs sm:text-sm font-mono text-[#F8FAFC] font-bold">
                {isTerrain ? "aymen-derouiche-cv-hospitality.pdf" : "aymen-derouiche-cv-tech.pdf"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-[#F8FAFC] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Plein écran</span>
            </a>

            <a
              href={isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}
              download={isTerrain ? "aymen-derouiche-cv-hospitality.pdf" : "aymen-derouiche-cv-tech.pdf"}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xl active:scale-[0.96] ${
                isTerrain
                  ? "bg-[#D4AF37] hover:bg-[#e5bc4b] text-[#030712] shadow-amber-500/25 ring-2 ring-amber-400/40"
                  : "bg-[#19D7FF] hover:bg-[#38BDF8] text-[#030712] shadow-cyan-500/25 ring-2 ring-cyan-400/40"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>TÉLÉCHARGER LE CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer (Visual Document verification) */}
        <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden bg-[#030712] border border-white/10 shadow-2xl">
          {isClient && (
            <iframe
              src={`${isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}#toolbar=0&navpanes=0`}
              title={`Document ${isTerrain ? "CV Terrain" : "CV Tech"}`}
              className="w-full h-full border-0"
            />
          )}

          {/* Mobile direct download overlay helper */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#070E1B]/95 backdrop-blur-md border border-white/15 text-center flex flex-col gap-1 text-xs shadow-xl">
            <span className="text-[#94A3B8]">Aperçu mobile :</span>
            <div className="flex items-center justify-center gap-4 mt-0.5">
              <a
                href={isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold underline flex items-center gap-1 ${isTerrain ? "text-[#D4AF37]" : "text-[#19D7FF]"}`}
              >
                <span>Ouvrir en grand</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href={isTerrain ? "/cv/aymen-derouiche-cv-hospitality.pdf" : "/cv/aymen-derouiche-cv-tech.pdf"}
                download={isTerrain ? "aymen-derouiche-cv-hospitality.pdf" : "aymen-derouiche-cv-tech.pdf"}
                className={`font-bold underline flex items-center gap-1 ${isTerrain ? "text-[#D4AF37]" : "text-[#19D7FF]"}`}
              >
                <span>Télécharger</span>
                <Download className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 02 // SYNTHÈSE DU PROFIL (LECTURE RAPIDE POUR RECRUTEUR) */}
      <div className="rounded-2xl p-5 sm:p-7 bg-[#070E1B] border border-white/10 flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8]">
            SYNTHÈSE TEXTUELLE // LECTURE RAPIDE RECRUTEUR
          </span>
          <span className={`text-[10px] font-mono font-bold ${isTerrain ? "text-[#D4AF37]" : "text-[#19D7FF]"}`}>
            {isTerrain ? "PROFIL TERRAIN ACTIF" : "PROFIL TECH ACTIF"}
          </span>
        </div>

        {isTerrain ? (
          /* TERRAIN / HORECA PROFILE SECTIONS */
          <>
            {/* PROFIL */}
            <div className="flex flex-col gap-1.5 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                PROFIL
              </span>
              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                Étudiant sérieux, polyvalent et ponctuel, disponible pour des missions en vente,
                tenue de caisse, service en salle, réassort et logistique à Mons et environs.
                Capacité d&apos;apprentissage rapide et excellente aisance relationnelle.
              </p>
            </div>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <div className="flex flex-col gap-3 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                EXPÉRIENCES CLÉS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">Conseiller de Vente &amp; Caisse</h2>
                    <span className="text-[10px] font-mono text-[#D4AF37]">Bijouterie Familiale</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Réconciliation caisse quotidienne zéro écart. Accueil et conseil d&apos;une clientèle exigeante. Gestion et contrôle des stocks à forte valeur.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">Employé Polyvalent</h2>
                    <span className="text-[10px] font-mono text-[#D4AF37]">Mega Pizza</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Préparation et cuisson des commandes. Service client et prise de commande au comptoir en rythme soutenu. Respect strict des normes d&apos;hygiène.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">Logistique &amp; Commandes</h2>
                    <span className="text-[10px] font-mono text-[#D4AF37]">E-commerce Indépendant</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Préparation, conditionnement et expédition des commandes. Gestion des retours, SAV et tenue d&apos;inventaire.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">Création Web &amp; Médias</h2>
                    <span className="text-[10px] font-mono text-[#D4AF37]">Projets Indépendants</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Boutiques en ligne, visuels promotionnels, montage vidéo pour réseaux sociaux et supports de marque.
                  </p>
                </div>
              </div>
            </div>

            {/* COMPÉTENCES */}
            <div className="flex flex-col gap-2 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                COMPÉTENCES OPÉRATIONNELLES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Caisse POS & Zéro écart",
                  "Conseil & Vente client",
                  "Service Horeca & Comptoir",
                  "Rush horaire & Rythme soutenu",
                  "Conditionnement & Expédition",
                  "Gestion des stocks & Inventaire",
                  "Normes d'hygiène & Sécurité",
                  "Travail en équipe & Rigueur",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-[#F8FAFC]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* LANGUES & FORMATION & DISPONIBILITÉ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                  LANGUES
                </span>
                <p className="text-xs text-[#F8FAFC]">Français (Courant / C2)</p>
                <p className="text-xs text-[#94A3B8]">Anglais (B2) · Arabe (Maternelle)</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                  FORMATION
                </span>
                <p className="text-xs text-[#F8FAFC]">Université de Mons (UMONS)</p>
                <p className="text-xs text-[#94A3B8]">Université Constantine (Diplômé)</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#25D366]">
                  DISPONIBILITÉ &amp; STATUT
                </span>
                <p className="text-xs font-bold text-[#F8FAFC]">Immédiate (Carte A / Étudiant)</p>
                <p className="text-xs text-[#94A3B8]">Flexibilité matins, soirs &amp; w-e · Temps plein vacances</p>
              </div>
            </div>
          </>
        ) : (
          /* TECH PROFILE SECTIONS */
          <>
            {/* PROFIL */}
            <div className="flex flex-col gap-1.5 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                PROFIL TECHNIQUE
              </span>
              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                Développeur full-stack &amp; ingénieur produit. Conception d&apos;architectures cloud SaaS,
                interfaces web réactives et automatisation par agents IA.
              </p>
            </div>

            {/* RÉALISATIONS */}
            <div className="flex flex-col gap-3 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                RÉALISATIONS MAJEURES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1">
                  <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">AtlasERP Cloud SaaS</h2>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Plateforme modulaire de gestion commerciale, stocks et facturation multi-tenant (Next.js, NestJS, PostgreSQL).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1">
                  <h2 className="text-xs font-bold text-[#F8FAFC] uppercase">Pipelines Multi-Agents IA</h2>
                  <p className="text-[11px] text-[#94A3B8] leading-snug">
                    Automatisation de réconciliation de données et déclencheurs asynchrones (Python, APIs, Webhooks).
                  </p>
                </div>
              </div>
            </div>

            {/* COMPÉTENCES */}
            <div className="flex flex-col gap-2 border-b border-white/[0.06] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                COMPÉTENCES TECHNIQUES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js (App Router)",
                  "TypeScript",
                  "NestJS",
                  "Python",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "Tailwind CSS",
                  "Git / GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F8FAFC]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#19D7FF]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* LANGUES & DISPONIBILITÉ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                  LANGUES
                </span>
                <p className="text-xs text-[#F8FAFC]">Français (Courant) · Anglais (Technique &amp; Pro)</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                  DISPONIBILITÉ TECH
                </span>
                <p className="text-xs text-[#F8FAFC]">Missions freelance, projets ou opportunités junior</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
