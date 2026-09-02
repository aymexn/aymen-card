"use client";

import { useState } from "react";
import { CONTACT, getWhatsAppUrl, downloadVCard } from "@/lib/contact";

export default function QuickContactBar() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const hasRealPhone =
    CONTACT.phone && !CONTACT.phone.includes("X") && CONTACT.phone.trim().length > 4;

  return (
    <section className="w-full my-8" aria-label="Actions de contact direct">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-[#9FB2C8] font-semibold">
            Contact direct
          </span>
          <button
            onClick={downloadVCard}
            className="text-xs font-medium text-[#C9994A] hover:underline flex items-center gap-1 cursor-pointer"
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
            Enregistrer contact (.vcf)
          </button>
        </div>

        {/* Primary Contact Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* WhatsApp Primary */}
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all duration-150 shadow-md hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          ) : (
            <div
              title="Numéro belge en cours d'activation"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-[#9FB2C8]/70 text-xs font-medium cursor-not-allowed text-center"
            >
              <span>WhatsApp (bientôt)</span>
            </div>
          )}

          {/* Call / Phone */}
          {hasRealPhone ? (
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0E2033] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] font-semibold text-xs sm:text-sm transition-all duration-150 hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4 fill-none stroke-[#C9994A] stroke-2 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Appeler</span>
            </a>
          ) : (
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0E2033] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] font-semibold text-xs sm:text-sm transition-all duration-150 hover:scale-[1.02] cursor-pointer"
            >
              <svg
                className="w-4 h-4 fill-none stroke-[#C9994A] stroke-2 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{copied ? "Copié !" : "Email"}</span>
            </button>
          )}

          {/* LinkedIn */}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0E2033] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] font-semibold text-xs sm:text-sm transition-all duration-150 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0E2033] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] font-semibold text-xs sm:text-sm transition-all duration-150 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4 fill-[#F7F5F0] shrink-0" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
