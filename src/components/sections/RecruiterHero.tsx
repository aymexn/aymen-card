"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ExternalLink, FileText, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";
import CardTilt3D from "@/components/motion/CardTilt3D";

export default function RecruiterHero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      aria-label="Présentation générale et disponibilité"
      className="relative w-full pt-4 pb-10 sm:py-14 flex flex-col justify-center"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-10">
        {/* Large-Format Portrait Integrated with Persistent 3D Background */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* 3D Tilt interactive frame */}
          <CardTilt3D maxTilt={5}>
            <div className="relative group">
              {/* Soft ambient aura behind photo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#19D7FF]/20 via-transparent to-[#D4AF37]/20 blur-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

              {/* Large-format portrait blended with soft gradient mask */}
              <div
                className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#070E1B]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-sm"
                style={{
                  maskImage: "radial-gradient(ellipse 95% 95% at 50% 48%, black 75%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 50% 48%, black 75%, transparent 100%)",
                }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Aymen Derouiche — Portrait professionnel"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                  className="object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />
                {/* Soft bottom vignette integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Compact Floating Location Chip */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-2 px-3 py-1 rounded-full bg-[#070E1B]/95 border border-white/15 text-[10px] font-mono text-[#F8FAFC] flex items-center gap-1.5 shadow-xl whitespace-nowrap backdrop-blur-md">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                <span className="font-semibold">Mons, BE</span>
              </div>
            </div>
          </CardTilt3D>
        </div>

        {/* Recruiter-First Identity & Direct CTAs */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2.5 w-full">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_-3px_rgba(37,211,102,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>DISPONIBLE IMMÉDIATEMENT</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F8FAFC] leading-none mt-0.5">
            AYMEN DEROUICHE
          </h1>

          {/* Job Title / Primary Objective */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="text-sm sm:text-base font-bold text-[#D4AF37] uppercase tracking-wider">
              ÉTUDIANT POLYVALENT
            </span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="text-xs sm:text-sm font-medium text-[#94A3B8]">
              Mons, Belgique
            </span>
          </div>

          {/* Target Job Categories Chips */}
          <p className="text-xs sm:text-sm font-medium text-[#F8FAFC]/90 max-w-xl leading-relaxed">
            Vente · Caisse · Horeca · Service client · Logistique &amp; Réassort
          </p>

          {/* Action CTAs: Primary CV Terrain + WhatsApp with 3D Depth-press & Sheen */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3 w-full">
            {/* Primary CTA: Consulter le CV */}
            <Link
              href="/cv#hospitality"
              className="sheen-sweep inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:translate-y-[2px] active:scale-[0.98] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)]"
            >
              <FileText className="w-4 h-4" />
              <span>CONSULTER MON CV</span>
            </Link>

            {/* Primary CTA: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-sweep inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:translate-y-[2px] active:scale-[0.98] text-[#030712] text-xs font-black tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WHATSAPP · {CONTACT.whatsappDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Secondary Anchor: Jump to Profil Tech */}
            <a
              href="#profil-tech"
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-mono text-[#94A3B8] hover:text-[#19D7FF] active:scale-[0.96] transition-colors"
            >
              <span>Voir profil Tech</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
