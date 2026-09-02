"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT, getWhatsAppUrl, downloadVCard } from "@/lib/contact";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const hasRealPhone =
    CONTACT.phone && !CONTACT.phone.includes("X") && CONTACT.phone.trim().length > 4;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-12 flex flex-col gap-8">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#00D2FF] text-[#05070B] text-xs font-black shadow-2xl flex items-center gap-2 animate-fade-in">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
          <span>Adresse email copiée dans le presse-papiers !</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#00D2FF]">
          <Link href="/" className="hover:underline text-[#8D98A9]">
            Accueil
          </Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F5F7FA] uppercase">
          LET&apos;S CONNECT.
        </h1>
        <p className="text-xs sm:text-sm font-medium text-[#8D98A9]">
          Projet, job, collaboration, mission technique ou renfort en commerce — écrivez-moi directement.
        </p>

        {/* Location & Mobility */}
        <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-medium text-[#F5F7FA]/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Localisation : <strong className="text-[#F5F7FA]">Mons, Belgique</strong></span>
          </div>
          <span className="text-white/20">·</span>
          <span className="text-[#8D98A9]">Mobilité régionale & disponibilité immédiate</span>
        </div>
      </div>

      {/* Primary Channels Card */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Direct & Rapide
              </span>
              <h3 className="text-base font-bold text-[#F5F7FA]">WhatsApp</h3>
              <p className="text-xs text-[#8D98A9]">
                Idéal pour un message rapide ou une première prise de contact.
              </p>
            </div>
          </div>

          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] text-center shrink-0"
            >
              Discuter sur WhatsApp ↗
            </a>
          ) : (
            <span className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-[#8D98A9] text-xs font-medium text-center shrink-0">
              Disponible prochainement
            </span>
          )}
        </div>

        {/* Email Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                Email Professionnel
              </span>
              <h3 className="text-base font-bold text-[#F5F7FA]">Email</h3>
              <p className="text-xs text-[#8D98A9] break-all">
                {CONTACT.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? "Copié !" : "Copier"}
            </button>
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-4 py-2 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md"
            >
              Écrire ↗
            </a>
          </div>
        </div>

        {/* LinkedIn Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-[#0A66C2] uppercase tracking-wider">
                Profil Pro
              </span>
              <h3 className="text-base font-bold text-[#F5F7FA]">LinkedIn</h3>
              <p className="text-xs text-[#8D98A9]">
                linkedin.com/in/aymen-derouiche
              </p>
            </div>
          </div>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] hover:border-[#0A66C2] font-semibold text-xs transition-all text-center shrink-0"
          >
            Voir le profil ↗
          </a>
        </div>

        {/* GitHub Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-[#8D98A9] uppercase tracking-wider">
                Code Source
              </span>
              <h3 className="text-base font-bold text-[#F5F7FA]">GitHub</h3>
              <p className="text-xs text-[#8D98A9]">
                github.com/aymexn
              </p>
            </div>
          </div>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] hover:border-white/30 font-semibold text-xs transition-all text-center shrink-0"
          >
            Voir GitHub ↗
          </a>
        </div>

        {/* Optional Call */}
        {hasRealPhone && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1118] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                  Appel Téléphonique
                </span>
                <h3 className="text-base font-bold text-[#F5F7FA]">{CONTACT.phone}</h3>
                <p className="text-xs text-[#8D98A9]">
                  Disponible pour échanger de vive voix
                </p>
              </div>
            </div>

            <a
              href={`tel:${CONTACT.phone}`}
              className="px-5 py-2.5 rounded-xl bg-[#121925] hover:bg-[#1A2333] border border-white/10 text-[#F5F7FA] font-semibold text-xs transition-all text-center shrink-0"
            >
              Appeler ↗
            </a>
          </div>
        )}
      </div>

      {/* Save Contact vCard */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1118] via-[#121925] to-[#0D1118] border border-[#00D2FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold">
            FICHE CONTACT
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">
            Enregistrer dans vos contacts
          </h3>
          <p className="text-xs text-[#8D98A9]">
            Téléchargez la fiche .vcf complète (Aymen Derouiche, email, LinkedIn, Mons) d&apos;un simple clic.
          </p>
        </div>

        <button
          onClick={downloadVCard}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00D2FF] hover:bg-[#38BDF8] text-[#05070B] text-xs font-extrabold tracking-wider uppercase transition-all duration-150 shadow-md hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Enregistrer mon contact (.vcf)</span>
        </button>
      </div>
    </div>
  );
}
