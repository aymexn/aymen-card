"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function TechProfileSection() {
  const techSkills = [
    "Next.js",
    "TypeScript",
    "NestJS",
    "Python",
    "PostgreSQL",
    "Docker",
    "AI Agents",
    "System Design",
  ];

  return (
    <section
      id="profil-tech"
      aria-label="Profil technique secondaire et compétences d'ingénierie"
      className="relative w-full py-6 sm:py-8 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#19D7FF]">
              04 // PROFIL SECONDAIRE
            </span>
            <span className="text-white/20">·</span>
            <span className="text-[10px] font-mono text-[#94A3B8]">
              SOFTWARE · AI · SYSTEMS
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black uppercase text-[#F8FAFC] tracking-tight">
            PROFIL TECHNIQUE &amp; DÉVELOPPEMENT
          </h2>
        </div>

        {/* Short & Punchy Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
          Full-stack, architecture SaaS et IA. Des solutions conçues pour être utilisées,
          pas seulement présentées.
        </p>

        {/* Compact Skills Row */}
        <div className="flex flex-wrap gap-2 pt-1">
          {techSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-xl bg-[#070E1B] border border-white/10 hover:border-[#19D7FF]/40 text-xs font-mono font-medium text-[#F8FAFC] shadow-sm transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <Link
            href="/cv#tech"
            className="py-2 px-4 rounded-xl bg-[#0D1527] hover:bg-white/10 active:scale-[0.96] border border-white/15 hover:border-[#19D7FF]/40 text-[#F8FAFC] text-xs font-bold tracking-wider uppercase transition-all inline-flex items-center gap-1.5"
          >
            <span>VOIR CV TECH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#19D7FF]" />
          </Link>

          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-xl bg-transparent hover:bg-white/5 active:scale-[0.96] text-[#94A3B8] hover:text-[#19D7FF] text-xs font-mono transition-colors inline-flex items-center gap-1"
          >
            <span>Explorer portfolio complet</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
