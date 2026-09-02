"use client";

import Link from "next/link";

export default function HeroCvSelector() {
  return (
    <section
      aria-labelledby="cv-selector-heading"
      className="w-full my-4 sm:my-6"
    >
      <div className="flex flex-col gap-3">
        {/* Section Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
            <h2
              id="cv-selector-heading"
              className="text-xs uppercase tracking-widest text-[#F5F7FA] font-mono font-bold"
            >
              Mes Deux Profils Professionnels
            </h2>
          </div>
          <span className="text-[11px] text-[#8D98A9] font-medium hidden sm:inline">
            Versatilité & Double Compétence
          </span>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Card 1: Tech / Software */}
          <div className="relative group overflow-hidden rounded-2xl bg-[#0D1118] border border-[#00D2FF]/30 hover:border-[#00D2FF] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-[#00D2FF]/10">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00D2FF]/10 rounded-full blur-2xl group-hover:bg-[#00D2FF]/20 transition-all pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30">
                  01 // INGÉNIERIE & CODE
                </span>
                <span className="text-xs font-mono text-[#8D98A9]">Full-Stack · IA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA] tracking-tight group-hover:text-[#00D2FF] transition-colors">
                Tech & Software
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#8D98A9] leading-snug">
                Architectures SaaS, agents autonomes LLM, APIs haute performance & e-commerce technique.
              </p>

              <div className="flex flex-wrap gap-1.5 my-2">
                {["Next.js", "Python / IA", "NestJS", "PostgreSQL", "Redis", "SaaS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#F5F7FA]/80"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/5 mt-2 relative z-10">
              <a
                href="/cv/aymen-derouiche-cv-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B] text-xs font-extrabold tracking-wider uppercase transition-all duration-150 shadow-md hover:scale-[1.02] flex items-center justify-center gap-1.5"
              >
                <span>Voir le CV</span>
                <span className="text-sm">↗</span>
              </a>

              <a
                href="/cv/aymen-derouiche-cv-tech.pdf"
                download="aymen-derouiche-cv-tech.pdf"
                className="py-2.5 px-3.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] text-xs font-semibold transition-all flex items-center gap-1.5 hover:border-[#00D2FF]/50"
                title="Télécharger le PDF Tech"
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
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Card 2: Operations / Terrain */}
          <div className="relative group overflow-hidden rounded-2xl bg-[#0D1118] border border-[#C9994A]/30 hover:border-[#C9994A] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-[#C9994A]/10">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9994A]/10 rounded-full blur-2xl group-hover:bg-[#C9994A]/20 transition-all pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#C9994A]/10 text-[#C9994A] border border-[#C9994A]/30">
                  02 // TERRAIN & OPÉRATIONS
                </span>
                <span className="text-xs font-mono text-[#8D98A9]">Commerce · Service</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA] tracking-tight group-hover:text-[#C9994A] transition-colors">
                Operations & Terrain
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#8D98A9] leading-snug">
                Tenue de caisse sans écart, logistique d&apos;inventaire, préparation commandes & cadence horeca.
              </p>

              <div className="flex flex-wrap gap-1.5 my-2">
                {["Caisse / POS", "Vente Retail", "Stock & Réserve", "Horeca", "Service Client", "Shopify"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#F5F7FA]/80"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/5 mt-2 relative z-10">
              <a
                href="/cv/aymen-derouiche-cv-hospitality.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#05070B] text-xs font-extrabold tracking-wider uppercase transition-all duration-150 shadow-md hover:scale-[1.02] flex items-center justify-center gap-1.5"
              >
                <span>Voir le CV</span>
                <span className="text-sm">↗</span>
              </a>

              <a
                href="/cv/aymen-derouiche-cv-hospitality.pdf"
                download="aymen-derouiche-cv-hospitality.pdf"
                className="py-2.5 px-3.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] text-xs font-semibold transition-all flex items-center gap-1.5 hover:border-[#C9994A]/50"
                title="Télécharger le PDF Opérations"
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
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Deep Link to interactive comparison */}
        <div className="flex justify-center">
          <Link
            href="/cv"
            className="text-[11px] font-mono text-[#8D98A9] hover:text-[#00D2FF] transition-colors flex items-center gap-1"
          >
            <span>Consulter les aperçus détaillés sur la page CVs</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
