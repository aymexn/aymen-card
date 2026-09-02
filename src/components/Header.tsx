"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/contact";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "CVs", href: "/cv" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-white/5 bg-[#07121E]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9994A] group-hover:scale-125 transition-transform duration-200" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-[#F7F5F0]">
              {CONTACT.name}
            </span>
            <span className="text-[10px] sm:text-xs text-[#9FB2C8] tracking-wider uppercase font-medium">
              Mons, Belgique
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#C9994A] text-[#0B1B2B] font-semibold"
                    : "text-[#9FB2C8] hover:text-[#F7F5F0] hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
