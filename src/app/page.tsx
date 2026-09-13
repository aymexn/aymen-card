import RecruiterHero from "@/components/sections/RecruiterHero";
import TerrainProfileSection from "@/components/sections/TerrainProfileSection";
import CvSelectorSection from "@/components/sections/CvSelectorSection";
import TechProfileSection from "@/components/sections/TechProfileSection";
import AtlasErpCompact from "@/components/sections/AtlasErpCompact";
import CreationsCarousel from "@/components/sections/CreationsCarousel";
import SimpleContactSection from "@/components/sections/SimpleContactSection";

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col">
      {/* 01 // HERO — Horeca First, Étudiant polyvalent, Disponibilité immédiate à Mons */}
      <RecruiterHero />

      {/* 02 // PROFIL TERRAIN — Vente, Caisse, Horeca, Service Client, Logistique */}
      <TerrainProfileSection />

      {/* 03 // CVs — Deux cartes synthétiques, CV Terrain en premier et dominant */}
      <CvSelectorSection />

      {/* 04 // PROFIL TECH — Développement, Software, IA & Systèmes */}
      <TechProfileSection />

      {/* 05 // PROJET PHARE — AtlasERP au format très compact */}
      <AtlasErpCompact />

      {/* 06 // TRAVAUX & CRÉATIONS — Carousel horizontal (12 créations dont le dossier work) & 07 // PORTFOLIO COMPLET */}
      <CreationsCarousel />

      {/* 08 // CONTACT — WhatsApp direct (0465 10 46 88), Email, Réseaux & Fiche vCard */}
      <SimpleContactSection />
    </div>
  );
}
