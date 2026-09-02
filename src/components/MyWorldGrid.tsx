import Image from "next/image";

interface WorldFacet {
  number: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  spanClass?: string;
  accentColor: "cyan" | "gold";
}

const FACETS: WorldFacet[] = [
  {
    number: "01",
    tagline: "BUILD",
    title: "Software & IA",
    subtitle: "Systèmes · Architectures SaaS",
    description:
      "Conception full-stack, agents autonomes LLM, ERP multi-tenant et bases de données haute performance.",
    imageSrc: "/images/atlaserp.png",
    imageAlt: "Dashboard AtlasERP et architecture de données",
    spanClass: "sm:col-span-2",
    accentColor: "cyan",
  },
  {
    number: "02",
    tagline: "CREATE",
    title: "Design & Digital",
    subtitle: "UI/UX · Vidéo · Contenu",
    description:
      "Direction artistique, interfaces web soignées, montages vidéo courts (Reels/Shorts) et identité visuelle.",
    imageSrc: "/images/uidesign.jpg",
    imageAlt: "Design d'interfaces UI et direction artistique",
    spanClass: "sm:col-span-1",
    accentColor: "cyan",
  },
  {
    number: "03",
    tagline: "BUSINESS",
    title: "E-Commerce & Retail",
    subtitle: "Flux de vente · POS",
    description:
      "Gestion de boutiques en ligne, pilotage de catalogues, analyse des marges et efficacité commerciale.",
    imageSrc: "/images/ecom.jpg",
    imageAlt: "Commandes et gestion e-commerce",
    spanClass: "sm:col-span-1",
    accentColor: "gold",
  },
  {
    number: "04",
    tagline: "PEOPLE",
    title: "Vente, Caisse & Service",
    subtitle: "Relation Client · Rigueur",
    description:
      "Tenue de caisse sans écart (bijouterie haut de gamme), conseil attentif et aisance relationnelle.",
    imageSrc: "/images/retail-design.jpg",
    imageAlt: "Boutique de vente et accueil client",
    spanClass: "sm:col-span-1",
    accentColor: "gold",
  },
  {
    number: "05",
    tagline: "MOVE",
    title: "Logistique & Opérations",
    subtitle: "Stock · Préparation · Horeca",
    description:
      "Gestion de réserve, rigueur d'inventaire, cadence soutenue en restauration et flexibilité soirs/week-ends.",
    imageSrc: "/images/ai-agent.png",
    imageAlt: "Processus logistiques et opérations terrain",
    spanClass: "sm:col-span-1",
    accentColor: "gold",
  },
  {
    number: "06",
    tagline: "PLAY",
    title: "Basketball & Énergie",
    subtitle: "Discipline · Esprit d'équipe",
    description:
      "En dehors des écrans, le basket me maintient en mouvement. Sang-froid, lecture rapide du jeu et rythme collectif.",
    imageSrc: "/images/basketball.jpg",
    imageAlt: "Ballon de basketball sur terrain au coucher du soleil",
    spanClass: "sm:col-span-2",
    accentColor: "cyan",
  },
];

export default function MyWorldGrid() {
  return (
    <section id="my-world" className="w-full my-12" aria-labelledby="world-heading">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00D2FF] font-mono font-bold">
              MY WORLD // LES DIFFÉRENTES FACETTES
            </span>
            <h2
              id="world-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F7FA] mt-1"
            >
              Polyvalent. Pratique. Curieux.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8D98A9] max-w-xs">
            Pas un profil standard. Une combinaison concrète de rigueur technique et de bon sens opérationnel.
          </p>
        </div>

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {FACETS.map((card) => {
            const isCyan = card.accentColor === "cyan";
            return (
              <div
                key={card.number}
                className={`group relative overflow-hidden rounded-2xl bg-[#0D1118] border border-white/10 transition-all duration-300 flex flex-col justify-between ${
                  isCyan ? "hover:border-[#00D2FF]/60" : "hover:border-[#C9994A]/60"
                } ${card.spanClass || ""}`}
              >
                {/* Visual Thumbnail */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.8] group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-[#0D1118]/60 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-md bg-[#05070B]/80 backdrop-blur-md font-mono text-[10px] font-bold tracking-wider border ${
                        isCyan
                          ? "text-[#00D2FF] border-[#00D2FF]/30"
                          : "text-[#C9994A] border-[#C9994A]/30"
                      }`}
                    >
                      {card.number} // {card.tagline}
                    </span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-5 pt-2 flex flex-col justify-between flex-1">
                  <div>
                    <h3
                      className={`text-base sm:text-lg font-bold text-[#F5F7FA] tracking-tight transition-colors ${
                        isCyan
                          ? "group-hover:text-[#00D2FF]"
                          : "group-hover:text-[#C9994A]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8D98A9] mt-0.5">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-[#8D98A9]/90 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
