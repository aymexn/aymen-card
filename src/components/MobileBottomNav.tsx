"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <nav
      aria-label="Navigation mobile rapide"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07121E]/95 backdrop-blur-lg border-t border-[#1E3B5C]/60 px-3 py-2"
      style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* WhatsApp direct */}
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
          </a>
        ) : (
          <Link
            href="/contact"
            className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg text-emerald-400/60 hover:text-emerald-300 transition-colors"
          >
            <span className="w-5 h-5 flex items-center justify-center font-bold text-xs bg-emerald-500/20 rounded-full">
              W
            </span>
            <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
          </Link>
        )}

        {/* Portfolio link */}
        <a
          href={CONTACT.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg text-[#9FB2C8] hover:text-[#F7F5F0] transition-colors"
        >
          <svg
            className="w-5 h-5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Portfolio</span>
        </a>

        {/* CV link */}
        <Link
          href="/cv"
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors ${
            pathname === "/cv"
              ? "text-[#C9994A] font-semibold"
              : "text-[#9FB2C8] hover:text-[#F7F5F0]"
          }`}
        >
          <svg
            className="w-5 h-5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-[10px] tracking-tight">CVs</span>
        </Link>

        {/* Contact link */}
        <Link
          href="/contact"
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors ${
            pathname === "/contact"
              ? "text-[#C9994A] font-semibold"
              : "text-[#9FB2C8] hover:text-[#F7F5F0]"
          }`}
        >
          <svg
            className="w-5 h-5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[10px] tracking-tight">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
