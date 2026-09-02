"use client";

import Link from "next/link";
import { CONTACT, downloadVCard } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#07121E] text-[#9FB2C8] py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="font-semibold uppercase tracking-widest text-[#F7F5F0]">
            {CONTACT.name}
          </p>
          <p className="text-[#9FB2C8]">
            AI Systems & Product Engineer · Mons, Belgique
          </p>
          <p className="text-[#9FB2C8]/60 mt-1">
            © {new Date().getFullYear()} — Bâtir, apprendre, créer, travailler, explorer.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <Link href="/" className="hover:text-[#C9994A] transition-colors">
            Accueil
          </Link>
          <Link href="/cv" className="hover:text-[#C9994A] transition-colors">
            CVs
          </Link>
          <Link href="/contact" className="hover:text-[#C9994A] transition-colors">
            Contact
          </Link>
          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9994A] transition-colors"
          >
            Portfolio ↗
          </a>
          <button
            onClick={downloadVCard}
            className="text-[#C9994A] hover:underline font-semibold cursor-pointer"
          >
            Enregistrer contact (.vcf)
          </button>
        </div>
      </div>
    </footer>
  );
}
