"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, Copy, Download, ExternalLink, Mail, MessageCircle, Phone } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/BrandIcons";
import { CONTACT, getWhatsAppUrl, downloadVCard } from "@/lib/contact";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    restDelta: 0.001,
  });

  const yTranslate = useTransform(smoothProgress, [0, 1], [30, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0.3, 1]);

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
    <section
      id="contact"
      ref={containerRef}
      aria-label="Contact et coordonnées professionnelles d'Aymen Derouiche"
      className="relative w-full py-8 sm:py-16"
    >
      {/* Toast Notification */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          className="fixed top-18 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#19D7FF] text-[#030712] text-xs font-black shadow-2xl flex items-center gap-2 border border-cyan-300/40"
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Email copié dans le presse-papiers</span>
        </motion.div>
      )}

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              04 // CONTACT DIRECT · COORDONNÉES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F8FAFC] tracking-tight mt-1">
              ÉCHANGEONS
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-sm sm:text-right">
            Disponible pour opportunités d&apos;ingénierie logicielle ou missions opérationnelles.
          </p>
        </div>

        {/* Contact Suite Hub Container */}
        <motion.div
          style={{ y: isDesktop ? yTranslate : 0, opacity: isDesktop ? opacity : 1 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#070E1B] via-[#050A14] to-[#030712] border border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#19D7FF]/[0.05] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8">
            {/* First-person Call to Action */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#25D366]">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>DISPONIBILITÉ ACTIVE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
                UN PROJET TECHNIQUE, UNE MISSION OU UN ÉCHANGE ?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Je réponds rapidement par email ou WhatsApp. Vous pouvez également enregistrer
                directement ma fiche contact (.vcf) sur votre smartphone.
              </p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* WhatsApp Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#25D366]/40 transition-all flex flex-col justify-between gap-4 group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[9px] font-mono text-[#25D366] font-bold">DIRECT</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">WhatsApp</h4>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5">Idéal pour un premier contact rapide.</p>
                </div>

                {whatsappUrl ? (
                  <Magnetic>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.96] text-[#030712] text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Discuter</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Magnetic>
                ) : (
                  <span className="w-full py-2.5 px-3 rounded-xl bg-white/5 text-[#94A3B8] text-center text-xs font-medium">
                    Numéro bientôt actif
                  </span>
                )}
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#19D7FF]/40 transition-all flex flex-col justify-between gap-4 group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#19D7FF]/10 border border-[#19D7FF]/20 flex items-center justify-center text-[#19D7FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono text-[#19D7FF] font-bold">OFFICIEL</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">Email</h4>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5 truncate">{CONTACT.email}</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-2.5 px-2 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{copied ? "Copié !" : "Copier"}</span>
                    <Copy className="w-3 h-3 text-white/50" />
                  </button>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="py-2.5 px-3 rounded-xl bg-[#19D7FF] hover:bg-[#38BDF8] active:scale-[0.96] text-[#030712] text-xs font-black uppercase transition-all shadow-sm flex items-center justify-center"
                    title="Envoyer un email"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0A66C2]/40 transition-all flex flex-col justify-between gap-4 group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#38BDF8]">
                    <LinkedInIcon className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[9px] font-mono text-[#38BDF8] font-bold">RÉSEAU</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">LinkedIn</h4>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5">Parcours et recommandations.</p>
                </div>

                <Magnetic>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 hover:border-[#0A66C2]/50 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Voir profil</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Magnetic>
              </div>

              {/* GitHub Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/30 transition-all flex flex-col justify-between gap-4 group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F8FAFC]">
                    <GitHubIcon className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[9px] font-mono text-[#94A3B8] font-bold">CODE</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">GitHub</h4>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5">Dépôts, architectures et commits.</p>
                </div>

                <Magnetic>
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/10 hover:border-white/30 text-[#F8FAFC] text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Explorer</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Instant vCard (.vcf) Download Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0D1527] via-[#070E1B] to-[#0D1527] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">
                    Enregistrer la fiche contact (.vcf)
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    Ajoutez immédiatement Aymen Derouiche à votre répertoire téléphonique.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {hasRealPhone && (
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0D1527] hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F8FAFC] flex items-center justify-center gap-1.5 active:scale-[0.96]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#19D7FF]" />
                    <span>Appeler</span>
                  </a>
                )}

                <Magnetic className="flex-1 sm:flex-none">
                  <button
                    onClick={downloadVCard}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5bc4b] active:scale-[0.96] text-[#030712] text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Télécharger .vcf</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
