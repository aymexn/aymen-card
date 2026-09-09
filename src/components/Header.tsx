"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-40 bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Monogram / Brand Identity */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-[#19D7FF] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(25,215,255,0.8)]" />
          <span className="text-xs font-black tracking-widest uppercase text-[#F8FAFC]">
            AYMEN
          </span>
          <span className="text-[10px] font-mono text-[#94A3B8] hidden sm:inline">
            {"// MONS, BE"}
          </span>
        </Link>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/cv"
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              pathname === "/cv"
                ? "bg-[#19D7FF] text-[#030712] font-black shadow-md shadow-cyan-500/20"
                : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
            }`}
          >
            CVs
          </Link>
          <Link
            href="/contact"
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              pathname === "/contact"
                ? "bg-[#19D7FF] text-[#030712] font-black shadow-md shadow-cyan-500/20"
                : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
            }`}
          >
            Contact
          </Link>
          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#94A3B8] hover:text-[#19D7FF] hover:bg-white/5 transition-all"
          >
            <span>Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
