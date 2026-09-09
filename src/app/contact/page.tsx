"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, Download, ExternalLink, Mail, MessageCircle, Phone } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/BrandIcons";
import { CONTACT, getWhatsAppUrl, downloadVCard } from "@/lib/contact";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const hasRealPhone =
    CONTACT.phone && !CONTACT.phone.includes("X") && CONTACT.phone.trim().length > 4;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 flex flex-col gap-8">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#19D7FF] text-[#030712] text-xs font-black shadow-2xl flex items-center gap-2 border border-cyan-300/40">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Email copié dans le presse-papiers</span>
        </div>
      )}

      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#19D7FF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]/60">
          COORDONNÉES // 2026
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-white/[0.06] pb-4">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] uppercase">
          CONTACT DIRECT
        </h1>
        <p className="text-xs sm:text-sm font-medium text-[#94A3B8] max-w-xl leading-relaxed">
          Pour toute opportunité d&apos;ingénierie logicielle, mission de conseil technique ou renfort opérationnel.
        </p>

        {/* Location & Availability */}
        <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-medium text-[#F8FAFC]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Localisation : <strong className="text-[#F8FAFC]">Mons, Belgique</strong></span>
          </div>
          <span className="text-white/20">·</span>
          <span className="text-[#94A3B8]">Mobilité régionale &amp; disponibilité active</span>
        </div>
      </div>

      {/* Channels List */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#070E1B] border border-white/[0.08] hover:border-[#25D366]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#25D366] uppercase tracking-wider">
                MESSAGERIE INSTANTANÉE
              </span>
              <h2 className="text-base font-bold text-[#F8FAFC]">WhatsApp</h2>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Idéal pour un échange direct ou une première prise de contact.
              </p>
            </div>
          </div>

          {whatsappUrl ? (
            <Magnetic>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-[#030712] font-black text-xs uppercase tracking-wider transition-all shadow-md text-center shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Discuter sur WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          ) : (
            <span className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] text-xs font-medium text-center shrink-0">
              Numéro en cours d&apos;activation
            </span>
          )}
        </div>

        {/* Email Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#070E1B] border border-white/[0.08] hover:border-[#19D7FF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#19D7FF]/10 border border-[#19D7FF]/20 flex items-center justify-center text-[#19D7FF] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#19D7FF] uppercase tracking-wider">
                COURRIER ÉLECTRONIQUE
              </span>
              <h2 className="text-base font-bold text-[#F8FAFC]">Email Professionnel</h2>
              <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">{CONTACT.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{copied ? "Copié !" : "Copier"}</span>
              <Copy className="w-3.5 h-3.5 text-white/50" />
            </button>
            <Magnetic>
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-5 py-2.5 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.98] text-[#030712] text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Écrire</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* LinkedIn Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#070E1B] border border-white/[0.08] hover:border-[#0A66C2]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#38BDF8] shrink-0">
              <LinkedInIcon className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                RÉSEAU PROFESSIONNEL
              </span>
              <h2 className="text-base font-bold text-[#F8FAFC]">LinkedIn</h2>
              <p className="text-xs text-[#94A3B8] mt-0.5">linkedin.com/in/aymen-derouiche</p>
            </div>
          </div>

          <Magnetic>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-[#F8FAFC] font-semibold text-xs transition-all text-center shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Voir le profil</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>

        {/* GitHub Channel */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#070E1B] border border-white/[0.08] hover:border-white/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F8FAFC]">
              <GitHubIcon className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-wider">
                DÉPÔTS &amp; CODE SOURCE
              </span>
              <h2 className="text-base font-bold text-[#F8FAFC]">GitHub</h2>
              <p className="text-xs text-[#94A3B8] mt-0.5">github.com/aymexn</p>
            </div>
          </div>

          <Magnetic>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-[#F8FAFC] font-semibold text-xs transition-all text-center shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Voir GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>

        {/* Phone if real */}
        {hasRealPhone && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#070E1B] border border-white/[0.08] hover:border-[#19D7FF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#19D7FF]/10 border border-[#19D7FF]/20 flex items-center justify-center text-[#19D7FF] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#19D7FF] uppercase tracking-wider">
                  LIGNE DIRECTE
                </span>
                <h2 className="text-base font-bold text-[#F8FAFC]">{CONTACT.phone}</h2>
                <p className="text-xs text-[#94A3B8] mt-0.5">Disponible pour échanger de vive voix.</p>
              </div>
            </div>

            <Magnetic>
              <a
                href={`tel:${CONTACT.phone}`}
                className="px-5 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.98] border border-white/10 text-[#F8FAFC] font-semibold text-xs transition-all text-center shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Appeler</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>
        )}
      </div>

      {/* Save vCard Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0D1527] via-[#070E1B] to-[#0D1527] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
            FICHE CONTACT RAPIDE
          </span>
          <h2 className="text-base sm:text-lg font-black text-[#F8FAFC]">
            Enregistrer Aymen Derouiche dans vos contacts
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Téléchargez le fichier .vcf complet (nom, email, LinkedIn, Mons) en un clic sur votre smartphone.
          </p>
        </div>

        <Magnetic className="w-full sm:w-auto">
          <button
            onClick={downloadVCard}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:scale-[0.98] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger la fiche (.vcf)</span>
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
