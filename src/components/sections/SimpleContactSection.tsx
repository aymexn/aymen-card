"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Download, ExternalLink, FileText, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl, downloadVCard } from "@/lib/contact";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import CardTilt3D from "@/components/motion/CardTilt3D";

export default function SimpleContactSection() {
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

  return (
    <section
      id="contact"
      aria-label="Coordonnées et contact direct"
      className="relative w-full py-10 sm:py-14 border-t border-white/[0.08]"
    >
      {/* Toast Feedback */}
      {copied && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#19D7FF] text-[#030712] text-xs font-black shadow-2xl flex items-center gap-2 border border-cyan-300/40 animate-fade-in">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Email copié dans le presse-papiers</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#25D366]">
              04 // CONTACT DIRECT
            </span>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#F8FAFC]">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Mons, Belgique</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#F8FAFC] tracking-tight">
            PARLONS.
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Disponible immédiatement pour un entretien, une mission étudiante ou une collaboration technique.
          </p>
        </div>

        {/* Contact Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-2">
          {/* 1. WhatsApp Card — Dominant */}
          <CardTilt3D maxTilt={4} className="sm:col-span-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-sweep h-full p-5 rounded-2xl bg-gradient-to-b from-[#0B2316]/90 via-[#070E1B]/95 to-[#040813] border-2 border-[#25D366]/50 hover:border-[#25D366] transition-all flex flex-col justify-between gap-3 group shadow-[0_10px_30px_-5px_rgba(37,211,102,0.25)] active:translate-y-[2px] active:scale-[0.98] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shadow-inner">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-mono text-[#25D366] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30">
                  RÉPONSE DIRECTE
                </span>
              </div>

              <div>
                <h3 className="text-base font-black text-[#F8FAFC] uppercase tracking-wide">WhatsApp</h3>
                <p className="text-sm text-[#25D366] font-mono font-bold mt-0.5">
                  {CONTACT.whatsappDisplay}
                </p>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Messagerie instantanée prioritaire pour recruteurs et employeurs.
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono font-bold text-white/90 group-hover:text-white">
                <span>Discuter en 1 tap</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
            </a>
          </CardTilt3D>

          {/* 2. Email Card */}
          <CardTilt3D maxTilt={4} className="sm:col-span-2">
            <div className="h-full p-5 rounded-2xl bg-[#070E1B]/90 border border-white/10 hover:border-[#19D7FF]/40 transition-all flex flex-col justify-between gap-3 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#19D7FF]/10 flex items-center justify-center text-[#19D7FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#19D7FF] font-bold">COURRIEL PRO</span>
              </div>

              <div>
                <h3 className="text-base font-black text-[#F8FAFC] uppercase tracking-wide">Email</h3>
                <p className="text-xs text-[#94A3B8] font-mono mt-0.5 truncate">
                  {CONTACT.email}
                </p>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Pour transmission d&apos;offres d&apos;emploi ou de dossiers contractuels.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 text-xs font-semibold text-[#F8FAFC] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-white/60" />
                  <span>{copied ? "Copié !" : "Copier"}</span>
                </button>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="py-2 px-3.5 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black uppercase transition-all flex items-center justify-center shadow-md shadow-cyan-500/20"
                  title="Écrire un email"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </CardTilt3D>

          {/* 3. LinkedIn */}
          <CardTilt3D maxTilt={4} className="sm:col-span-1">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-4 rounded-2xl bg-[#070E1B]/90 border border-white/10 hover:border-[#0A66C2]/60 transition-all flex flex-col justify-between gap-3 group backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/15 flex items-center justify-center text-[#0A66C2]">
                <LinkedInIcon className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#F8FAFC] uppercase">LinkedIn</h3>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">Réseau professionnel</p>
              </div>
              <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-white flex items-center gap-1">
                <span>Profil</span>
                <ExternalLink className="w-3 h-3 text-[#0A66C2]" />
              </span>
            </a>
          </CardTilt3D>

          {/* 4. GitHub */}
          <CardTilt3D maxTilt={4} className="sm:col-span-1">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full p-4 rounded-2xl bg-[#070E1B]/90 border border-white/10 hover:border-white/40 transition-all flex flex-col justify-between gap-3 group backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <GitHubIcon className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#F8FAFC] uppercase">GitHub</h3>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">Code &amp; Repositories</p>
              </div>
              <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-white flex items-center gap-1">
                <span>Code</span>
                <ExternalLink className="w-3 h-3 text-white" />
              </span>
            </a>
          </CardTilt3D>

          {/* 5. Fiche vCard & CVs */}
          <CardTilt3D maxTilt={4} className="sm:col-span-2">
            <div className="h-full p-4 rounded-2xl bg-[#070E1B]/90 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-3 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F8FAFC] uppercase">Fiche Contact &amp; CVs</h3>
                  <p className="text-[11px] text-[#94A3B8]">Enregistrez le contact ou consultez le dossier</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="/cv"
                  className="flex-1 sm:flex-none py-1.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 text-xs font-semibold text-[#F8FAFC] border border-white/10 transition-all text-center"
                >
                  Voir CVs
                </Link>
                <button
                  onClick={downloadVCard}
                  className="flex-1 sm:flex-none py-1.5 px-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] text-[#030712] text-xs font-black uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                  title="Télécharger la fiche contact (.vcf)"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>vCard (.vcf)</span>
                </button>
              </div>
            </div>
          </CardTilt3D>
        </div>
      </div>
    </section>
  );
}
