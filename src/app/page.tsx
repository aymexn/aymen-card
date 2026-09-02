import Image from "next/image";
import Link from "next/link";
import InteractiveSelector from "@/components/InteractiveSelector";
import QuickContactBar from "@/components/QuickContactBar";
import PersonalityStrip from "@/components/PersonalityStrip";
import CapabilityChips from "@/components/CapabilityChips";
import MyWorldGrid from "@/components/MyWorldGrid";
import CvBanner from "@/components/CvBanner";
import { CONTACT } from "@/lib/contact";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center sm:items-start text-center sm:text-left gap-6 pt-2 pb-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 w-full">
          {/* Portrait Photo */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#C9994A] shadow-xl shadow-[#C9994A]/10 shrink-0">
            <Image
              src="/photo.jpg"
              alt="Aymen Derouiche"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>

          {/* Identity & Motto */}
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 self-center sm:self-start px-3 py-1 rounded-full bg-[#0E2033] border border-[#1E3B5C] text-[11px] font-mono text-[#C9994A] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Mons, Belgique · Disponible immédiatement
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F7F5F0] leading-tight">
              Aymen — I build, I learn, I create, I work, I explore.
            </h1>

            <p className="text-sm sm:text-base text-[#9FB2C8] font-medium leading-normal max-w-2xl">
              Étudiant en informatique à Mons, disponible pour à peu près tout — du code aux commandes en salle.
            </p>
          </div>
        </div>

        {/* Verbatim Intro Paragraph */}
        <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#0E2033]/70 border border-[#1E3B5C]/70 shadow-lg text-left">
          <p className="text-sm sm:text-base text-[#F7F5F0] leading-relaxed">
            « Je suis quelqu&apos;un qui touche à tout, sérieusement. Je développe des applications et des systèmes IA, je tiens une caisse sans écart, je gère un stock, je monte des vidéos, et je passe mes soirées sur un terrain de basket. Je ne rentre pas dans une seule case — et c&apos;est exactement pour ça que cette page existe. »
          </p>
        </div>

        {/* First Screen Actions */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 w-full">
          <a
            href="#my-world"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-150 shadow-md hover:scale-[1.02]"
          >
            Explorer mon monde ↗
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E2033] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 hover:scale-[1.02]"
          >
            Me contacter ↗
          </Link>
          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 text-[#9FB2C8] hover:text-[#F7F5F0] text-xs sm:text-sm font-medium transition-colors"
          >
            Portfolio d&apos;ingénierie ↗
          </a>
        </div>
      </section>

      {/* Direct Contact Actions */}
      <QuickContactBar />

      {/* Interactive Self-Selector */}
      <InteractiveSelector />

      {/* Personality Strip */}
      <PersonalityStrip />

      {/* Compact Capabilities */}
      <CapabilityChips />

      {/* My World 6 Tiles / Visual Mosaic */}
      <MyWorldGrid />

      {/* Prominent Portfolio CTA Banner */}
      <section className="w-full my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0E2033] to-[#13273D] border border-[#C9994A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C9994A] font-bold">
            PROJETS D&apos;INGÉNIERIE DÉTAILLÉS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F7F5F0]">
            Envie de plonger dans mes réalisations techniques ?
          </h3>
          <p className="text-xs sm:text-sm text-[#9FB2C8]">
            Découvrez le code, les démos d&apos;AtlasERP, les pipelines d&apos;agents IA et les architectures complètes.
          </p>
        </div>
        <a
          href={CONTACT.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3.5 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 shadow-lg hover:scale-[1.02] text-center"
        >
          Explorer mon portfolio complet ↗
        </a>
      </section>

      {/* Two CVs Section */}
      <CvBanner />

      {/* Bottom Final Callout */}
      <section className="w-full my-8 p-6 rounded-2xl bg-[#0E2033]/60 border border-white/5 text-center flex flex-col items-center gap-3">
        <h3 className="text-lg font-bold text-[#F7F5F0]">
          Un projet, une mission ou une opportunité à Mons ?
        </h3>
        <p className="text-xs sm:text-sm text-[#9FB2C8] max-w-md">
          Job étudiant, mission tech, renfort en commerce ou en salle : je réponds très rapidement.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-[#C9994A] text-[#0B1B2B] text-xs font-bold uppercase tracking-wider hover:bg-[#DCAE5D] transition-colors"
          >
            Écrivez-moi
          </Link>
          <Link
            href="/cv"
            className="px-5 py-2.5 rounded-full bg-[#07121E] border border-[#1E3B5C] text-[#F7F5F0] text-xs font-semibold hover:border-[#C9994A] transition-colors"
          >
            Consulter mes CVs
          </Link>
        </div>
      </section>
    </div>
  );
}
