"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { CONTACT, downloadVCard } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#030712] text-[#94A3B8] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <p className="font-mono font-black uppercase tracking-widest text-[#F8FAFC]">
            {CONTACT.name}
          </p>
          <p className="text-[11px] text-[#94A3B8]">
            Ingénieur Systèmes &amp; Produit · Mons, Belgique
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono font-medium">
          <Link href="/" className="hover:text-[#19D7FF] transition-colors">
            Accueil
          </Link>
          <Link href="/cv" className="hover:text-[#19D7FF] transition-colors">
            CVs
          </Link>
          <Link href="/contact" className="hover:text-[#19D7FF] transition-colors">
            Contact
          </Link>
          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#19D7FF] transition-colors text-[#19D7FF] inline-flex items-center gap-1"
          >
            <span>Portfolio</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={downloadVCard}
            className="text-[#D4AF37] hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            <span>.vcf</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
