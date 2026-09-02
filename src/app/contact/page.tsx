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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col gap-8">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#C9994A] text-[#0B1B2B] text-xs font-bold shadow-2xl flex items-center gap-2 animate-fade-in">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
          <span>Adresse email copiée dans le presse-papiers !</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9994A]">
          <Link href="/" className="hover:underline text-[#9FB2C8]">
            Accueil
          </Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F7F5F0]">
          Envie d&apos;échanger ? Écrivez-moi.
        </h1>
        <p className="text-sm sm:text-base text-[#9FB2C8]">
          Projet, opportunité d&apos;emploi, mission technique, renfort en commerce ou simple conversation — je suis à l&apos;écoute.
        </p>

        {/* Location Line */}
        <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-medium text-[#F7F5F0]/80">
          <svg
            className="w-4 h-4 text-[#C9994A] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Localisation : <strong className="text-[#F7F5F0]">{CONTACT.location}</strong></span>
          <span className="text-white/20">·</span>
          <span className="text-emerald-400 font-mono text-xs">Mobilité régionale & immédiate</span>
        </div>
      </div>

      {/* Primary Channels Card */}
      <div className="flex flex-col gap-4">
        {/* WhatsApp Channel */}
        <div className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                Messagerie instantanée
              </span>
              <h3 className="text-lg font-bold text-[#F7F5F0]">WhatsApp</h3>
              <p className="text-xs text-[#9FB2C8] mt-0.5">
                Le moyen le plus direct et le plus rapide pour me joindre.
              </p>
            </div>
          </div>

          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-150 shadow-md hover:scale-[1.02] text-center shrink-0"
            >
              Discuter sur WhatsApp ↗
            </a>
          ) : (
            <span className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#9FB2C8]/70 text-xs font-medium text-center shrink-0">
              Disponible prochainement
            </span>
          )}
        </div>

        {/* Email Channel */}
        <div className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C9994A]/10 border border-[#C9994A]/20 flex items-center justify-center text-[#C9994A] shrink-0">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-[#C9994A] uppercase tracking-wide">
                Courrier électronique
              </span>
              <h3 className="text-lg font-bold text-[#F7F5F0]">Email</h3>
              <p className="text-xs text-[#9FB2C8] mt-0.5 break-all">
                {CONTACT.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-[#07121E] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? "Copié !" : "Copier l'adresse"}
            </button>
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-5 py-2.5 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs font-bold uppercase tracking-wide transition-all shadow-md"
            >
              Envoyer un email ↗
            </a>
          </div>
        </div>

        {/* LinkedIn Channel */}
        <div className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-[#0A66C2] uppercase tracking-wide">
                Réseau professionnel
              </span>
              <h3 className="text-lg font-bold text-[#F7F5F0]">LinkedIn</h3>
              <p className="text-xs text-[#9FB2C8] mt-0.5">
                linkedin.com/in/aymen-derouiche
              </p>
            </div>
          </div>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#07121E] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] hover:border-[#0A66C2] font-semibold text-xs sm:text-sm transition-all duration-150 text-center shrink-0"
          >
            Voir le profil LinkedIn ↗
          </a>
        </div>

        {/* GitHub Channel */}
        <div className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-[#9FB2C8] uppercase tracking-wide">
                Code source & Projets
              </span>
              <h3 className="text-lg font-bold text-[#F7F5F0]">GitHub</h3>
              <p className="text-xs text-[#9FB2C8] mt-0.5">
                github.com/aymexn
              </p>
            </div>
          </div>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#07121E] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] hover:border-white/30 font-semibold text-xs sm:text-sm transition-all duration-150 text-center shrink-0"
          >
            Explorer le GitHub ↗
          </a>
        </div>

        {/* Call if number set */}
        {hasRealPhone && (
          <div className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9994A]/10 border border-[#C9994A]/20 flex items-center justify-center text-[#C9994A] shrink-0">
                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-[#C9994A] uppercase tracking-wide">
                  Téléphone direct
                </span>
                <h3 className="text-lg font-bold text-[#F7F5F0]">{CONTACT.phone}</h3>
                <p className="text-xs text-[#9FB2C8] mt-0.5">
                  Appel direct ou SMS
                </p>
              </div>
            </div>

            <a
              href={`tel:${CONTACT.phone}`}
              className="px-6 py-3 rounded-xl bg-[#07121E] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] font-semibold text-xs sm:text-sm transition-all duration-150 text-center shrink-0"
            >
              Appeler ↗
            </a>
          </div>
        )}
      </div>

      {/* Save Contact vCard Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0E2033] to-[#13273D] border border-[#C9994A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C9994A] font-bold">
            FICHE CONTACT DIRECTE
          </span>
          <h3 className="text-xl font-bold text-[#F7F5F0]">
            Enregistrer dans votre répertoire
          </h3>
          <p className="text-xs sm:text-sm text-[#9FB2C8]">
            Téléchargez la fiche .vcf complète (nom, téléphone, email, LinkedIn, ville) pour m&apos;ajouter en un clic.
          </p>
        </div>

        <button
          onClick={downloadVCard}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Enregistrer mon contact</span>
        </button>
      </div>
    </div>
  );
}
