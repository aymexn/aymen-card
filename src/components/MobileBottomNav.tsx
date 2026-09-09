"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText, Mail, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <nav
      aria-label="Navigation mobile rapide"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-t border-white/10 px-3 py-1 shadow-2xl"
      style={{ paddingBottom: "max(0.45rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {/* WhatsApp or Contact */}
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 py-1 px-3 min-h-[44px] text-[#25D366] hover:text-[#25D366]/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
          </a>
        ) : (
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-0.5 py-1 px-3 min-h-[44px] text-[#25D366]/80 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
          </Link>
        )}

        {/* CVs */}
        <Link
          href="/cv"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 px-3 min-h-[44px] transition-colors ${
            pathname === "/cv"
              ? "text-[#19D7FF] font-bold"
              : "text-[#94A3B8] hover:text-[#F8FAFC]"
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] tracking-tight font-semibold">CVs</span>
        </Link>

        {/* Portfolio Link */}
        <a
          href={CONTACT.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-3 min-h-[44px] text-[#94A3B8] hover:text-[#19D7FF] transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight">Portfolio</span>
        </a>

        {/* Contact */}
        <Link
          href="/contact"
          className={`flex flex-col items-center justify-center gap-0.5 py-1 px-3 min-h-[44px] transition-colors ${
            pathname === "/contact"
              ? "text-[#19D7FF] font-bold"
              : "text-[#94A3B8] hover:text-[#F8FAFC]"
          }`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] tracking-tight font-semibold">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
