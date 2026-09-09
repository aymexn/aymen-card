import HeroSection from "@/components/sections/HeroSection";
import TwoPathsSection from "@/components/sections/TwoPathsSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col">
      {/* 01 // HERO — Integrated Photo Centerpiece & Atmospheric 3D Wireframe */}
      <HeroSection />

      {/* 02 // TWO PATHS — Interactive Split-Panel (Tech vs Retail/Hospitality) */}
      <TwoPathsSection />

      {/* 03 // SELECTED WORK — AtlasERP & Multi-Agent AI Case Study Teaser */}
      <SelectedWorkSection />

      {/* 04 // CONTACT — Direct Channels, Instant vCard & Coordonnées */}
      <ContactSection />
    </div>
  );
}
