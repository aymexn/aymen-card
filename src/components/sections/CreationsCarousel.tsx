"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Sparkles, X } from "lucide-react";
import { CONTACT } from "@/lib/contact";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  image: string;
  role: string;
  tools: string[];
  objective: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "work-packaging",
    category: "E-COMMERCE & PACKAGING",
    title: "Direction Artistique & Packaging",
    shortDesc: "Création de visuels produits 3D et packaging digital pour gamme cosmétique.",
    image: "/work/Generated Image September 13, 2026 - 9_04PM.jpg",
    role: "Direction Artistique & Rendu Produit",
    tools: ["Photoshop", "Figma", "Rendu 3D"],
    objective: "Sublimer le packaging avec un éclairage soigné et valoriser l'identité de marque.",
  },
  {
    id: "work-branding",
    category: "BRANDING & IDENTITÉ",
    title: "Identité Visuelle & Déclinaisons",
    shortDesc: "Déclinaison graphique de marque et univers visuel haut de gamme.",
    image: "/work/photo_2026-09-13_20-48-54.jpg",
    role: "Designer Graphique",
    tools: ["Canva", "Photoshop", "Illustrator"],
    objective: "Créer une identité mémorable, cohérente et prête pour l'impression et le digital.",
  },
  {
    id: "work-social",
    category: "SOCIAL MEDIA & REELS",
    title: "Campagne Réseaux Sociaux",
    shortDesc: "Création de contenus visuels engageants orientés acquisition et conversion.",
    image: "/work/photo_2026-09-13_20-49-00.jpg",
    role: "Créateur de Contenu & Montage",
    tools: ["CapCut", "Photoshop", "Instagram Reels"],
    objective: "Capter l'attention en moins de 3 secondes avec un rythme dynamique et moderne.",
  },
  {
    id: "work-marketing",
    category: "MARKETING VISUEL",
    title: "Mise en Scène Publicitaire",
    shortDesc: "Direction artistique et scénographie pour campagnes promotionnelles.",
    image: "/work/photo_2026-07-07_16-36-01.jpg",
    role: "Concepteur Visuel",
    tools: ["Photoshop", "Lightroom", "Canva"],
    objective: "Renforcer l'impact commercial à travers une esthétique soignée et professionnelle.",
  },
  {
    id: "work-3d-graphic",
    category: "DESIGN GRAPHIQUE",
    title: "Composition & Asset 3D",
    shortDesc: "Création d'éléments visuels et déclinaisons pour supports digitaux.",
    image: "/work/72642ca0e1ee785e98cb10e091fc99fc-removebg-preview.png",
    role: "Designer Graphique & 3D",
    tools: ["Blender", "Figma", "Photoshop"],
    objective: "Intégrer des visuels en relief pour donner du volume aux présentations de produits.",
  },
  {
    id: "work-ai-experiment",
    category: "EXPÉRIMENTATION IA",
    title: "Génération Créative IA",
    shortDesc: "Exploration de styles visuels et intégration d'actifs graphiques génératifs.",
    image: "/work/Gemini_Generated_Image_ykpkytykpkytykpk-removebg-preview.png",
    role: "Prompt Engineer & Directeur Créatif",
    tools: ["Midjourney", "Gemini", "ComfyUI"],
    objective: "Accélérer l'idéation visuelle et concevoir des concepts publicitaires originaux.",
  },
  {
    id: "work-dashboard",
    category: "UI / DASHBOARD",
    title: "Interface de Monitoring SaaS",
    shortDesc: "Conception d'une console SaaS avec métriques en direct et hiérarchie soignée.",
    image: "/work/403063444-c284eb2d-1909-48cd-9ab7-b0fbe4709308.jpg",
    role: "UI/UX Designer & Développeur",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    objective: "Offrir une visibilité immédiate sur les indicateurs clés avec une ergonomie claire.",
  },
  {
    id: "ui-web",
    category: "UI / WEB DESIGN",
    title: "Interface Web Responsive",
    shortDesc: "Conception d'une expérience web responsive, fluide et interactive.",
    image: "/images/uidesign.jpg",
    role: "UI Designer & Développeur Frontend",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    objective: "Optimiser le confort de navigation et valoriser la proposition de valeur.",
  },
  {
    id: "ecom",
    category: "E-COMMERCE STORE",
    title: "Créatives Produit & Ads",
    shortDesc: "Visuels publicitaires et mise en scène produit orientée conversion.",
    image: "/images/ecom.jpg",
    role: "Direction Visuelle & Contenu Digital",
    tools: ["Photoshop", "Canva", "Figma"],
    objective: "Mettre en valeur le produit avec un éclairage percutant et engageant.",
  },
  {
    id: "retail-brand",
    category: "RETAIL & MERCHANDISING",
    title: "Organisation Point de Vente",
    shortDesc: "Organisation visuelle de rayon et valorisation merchandising en magasin.",
    image: "/images/retail-design.jpg",
    role: "Merchandising & Mise en avant",
    tools: ["Agencement", "Signalétique", "Rigueur Terrain"],
    objective: "Faciliter l'orientation du client et stimuler l'acte d'achat.",
  },
  {
    id: "ai-pipeline",
    category: "PIPELINES IA",
    title: "Workflows Multi-Agents",
    shortDesc: "Automatisation de flux opérationnels et synchronisation de données.",
    image: "/images/ai-agent.png",
    role: "Conception de flux automatisés",
    tools: ["Python", "LangChain", "Webhooks", "APIs"],
    objective: "Éliminer les saisies répétitives et accélérer le traitement des données.",
  },
  {
    id: "saas-atlas",
    category: "ARCHITECTURE SAAS",
    title: "AtlasERP Cloud Platform",
    shortDesc: "Gestion commerciale centralisée, stocks et facturation multi-tenant.",
    image: "/images/atlaserp.jpg",
    role: "Concepteur & Développeur Full-Stack",
    tools: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    objective: "Fournir un outil de gestion robuste et rapide sous forte cadence opérationnelle.",
  },
];

export default function CreationsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="creations"
      aria-label="Travaux, créations et réalisations visuelles"
      className="relative w-full py-8 sm:py-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-5 px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
                06 // TRAVAUX &amp; CRÉATIONS
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[10px] font-mono text-[#94A3B8]">
                12 CRÉATIONS VISUELLES
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight">
              CE QUE JE CONÇOIS
            </h2>
            <p className="text-xs text-[#94A3B8] font-mono">
              GLISSEZ POUR EXPLORER →
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Faire défiler vers la gauche"
              className="p-2.5 rounded-xl bg-[#070E1B] border border-white/10 hover:border-white/25 active:scale-95 text-[#F8FAFC] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Faire défiler vers la droite"
              className="p-2.5 rounded-xl bg-[#070E1B] border border-white/10 hover:border-[#19D7FF] active:scale-95 text-[#F8FAFC] hover:text-[#19D7FF] transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel (Mobile swipeable / Desktop smooth scroll) */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          aria-label="Galerie de projets horizontaux"
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none select-none focus:outline-none focus:ring-1 focus:ring-[#19D7FF]/30 rounded-2xl"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="w-[82vw] sm:w-[320px] md:w-[340px] shrink-0 snap-start rounded-2xl bg-[#070E1B] border border-white/10 hover:border-[#19D7FF]/50 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col group active:scale-[0.98] shadow-lg"
            >
              {/* Category & Index Header Bar */}
              <div className="px-3.5 py-2 flex items-center justify-between border-b border-white/[0.06] bg-[#050914]/80">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#19D7FF] uppercase truncate max-w-[200px]">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]/60 shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              {/* Image Preview - Full image displayed with zero cropping */}
              <div className="relative w-full h-64 sm:h-72 bg-[#02050E] overflow-hidden flex items-center justify-center">
                {/* Pure CSS Ambient lighting (Zero GPU/DOM overhead, zero duplicate decodes) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(25,215,255,0.12),_transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Foreground uncropped image */}
                <div className="relative w-full h-full p-2.5 flex items-center justify-center z-[1]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading={idx < 2 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 85vw, 340px"
                    className="object-contain p-1 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-2">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-[#19D7FF] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                    Cliquer pour détails
                  </span>
                  <span className="text-[11px] text-[#19D7FF] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                    <span>Voir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 07 // PORTFOLIO COMPLET CTA */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#070E1B] border border-white/10">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              07 // PORTFOLIO COMPLET
            </span>
            <p className="text-xs text-[#F8FAFC]">
              Découvrez l&apos;ensemble de mes réalisations web, designs et dépôts de code.
            </p>
          </div>

          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2 shrink-0"
          >
            <span>VOIR LE PORTFOLIO COMPLET</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#070E1B] border border-white/15 p-5 sm:p-7 shadow-2xl overflow-hidden flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer la fenêtre de détails"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F8FAFC] transition-colors z-10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image - Full artwork displayed without cropping */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#02050E] border border-white/10 shrink-0 flex items-center justify-center">
              {/* Pure CSS Ambient Lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(25,215,255,0.14),_transparent_75%)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050E] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Foreground uncropped image */}
              <div className="relative w-full h-full p-2 sm:p-3 flex items-center justify-center z-[1]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 600px"
                  className="object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
                />
              </div>

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#070E1B]/90 border border-white/20 text-[10px] font-mono font-bold text-[#19D7FF] uppercase backdrop-blur-md z-10">
                {selectedProject.category}
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col gap-3">
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                {selectedProject.shortDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08] text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#94A3B8] uppercase block">
                    MON RÔLE :
                  </span>
                  <span className="text-[#F8FAFC] font-semibold mt-0.5 block">
                    {selectedProject.role}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#94A3B8] uppercase block">
                    OBJECTIF :
                  </span>
                  <span className="text-[#F8FAFC] mt-0.5 block">
                    {selectedProject.objective}
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="pt-2 border-t border-white/[0.08]">
                <span className="font-mono text-[10px] text-[#94A3B8] uppercase block mb-1.5">
                  OUTILS &amp; TECHNOLOGIES :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.05] border border-white/[0.08] text-[#F8FAFC]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/[0.08]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[#F8FAFC] text-xs font-semibold transition-all cursor-pointer"
                >
                  Fermer
                </button>
                <a
                  href={CONTACT.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] text-[#030712] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explorer Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
