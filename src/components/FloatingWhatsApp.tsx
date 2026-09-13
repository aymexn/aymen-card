"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/contact";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Contact WhatsApp rapide"
      className="fixed z-50 pointer-events-auto select-none"
      style={{
        // Positioned at bottom: 90px on mobile (clearing the bottom nav bar), and bottom: 25px on desktop
        // Using CSS responsive classes:
      }}
    >
      <div className="fixed right-[18px] bottom-[90px] md:right-[25px] md:bottom-[25px] z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contacter Aymen sur WhatsApp au ${CONTACT.whatsappDisplay}`}
          title={`Discuter sur WhatsApp (${CONTACT.whatsappDisplay})`}
          className="group relative flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#030712] font-black shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all duration-200 active:scale-[0.94] p-3.5 md:py-3 md:px-5 border border-emerald-300/40"
        >
          {/* Subtle pulsating radar ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none [animation-duration:3s]" />

          {/* WhatsApp Vector Icon */}
          <MessageCircle className="w-6 h-6 md:w-5 md:h-5 fill-current shrink-0" />

          {/* Text visible only on desktop */}
          <span className="hidden md:inline text-xs font-mono font-bold tracking-wider uppercase">
            WhatsApp
          </span>

          {/* Desktop tooltip showing real phone number */}
          <span className="hidden md:group-hover:block absolute bottom-full mb-2 right-0 px-2.5 py-1 rounded-md bg-[#030712] text-white text-[10px] font-mono border border-white/10 whitespace-nowrap shadow-xl">
            {CONTACT.whatsappDisplay}
          </span>
        </a>
      </div>
    </aside>
  );
}
