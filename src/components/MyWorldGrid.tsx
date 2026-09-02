import Image from "next/image";

interface WorldCard {
  number: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  spanClass?: string;
}

const CARDS: WorldCard[] = [
  {
    number: "01",
    tagline: "BUILD",
    title: "Software & IA",
    subtitle: "Systèmes · Architectures SaaS",
    description:
      "Conception full-stack de bout en bout, agents autonomes LLM, ERP multi-tenant et bases de données haute performance.",
    imageSrc: "/images/atlaserp.png",
    imageAlt: "Interface AtlasERP et architecture de données",
    spanClass: "sm:col-span-2",
  },
  {
    number: "02",
    tagline: "CREATE",
    title: "Design & Digital",
    subtitle: "UI/UX · Motion & Identité",
    description:
      "Direction artistique soignée, interfaces web ergonomiques, montages vidéo courts et visuels de marque percutants.",
    imageSrc: "/images/uidesign.jpg",
    imageAlt: "Maquettes UI et design graphique",
    spanClass: "sm:col-span-1",
  },
  {
    number: "03",
    tagline: "BUSINESS",
    title: "E-Commerce & Retail",
    subtitle: "Gestion de flux · Vente",
    description:
      "Optimisation de boutiques en ligne, pilotage de catalogues produits, analyse des marges et performance commerciale.",
    imageSrc: "/images/ecom.jpg",
    imageAlt: "Dashboard commandes e-commerce et gestion commerciale",
    spanClass: "sm:col-span-1",
  },
  {
    number: "04",
    tagline: "PEOPLE",
    title: "Caisse, Vente & Service",
    subtitle: "Relation client · Rigueur",
    description:
      "Tenue de caisse sans écart, accueil clientèle attentif, conseil personnalisé et sang-froid en période de forte affluence.",
    imageSrc: "/images/retail-design.jpg",
    imageAlt: "Ambiance boutique et retail élégant",
    spanClass: "sm:col-span-1",
  },
  {
    number: "05",
    tagline: "MOVE",
    title: "Logistique & Opérations",
    subtitle: "Stocks · Préparation · Horeca",
    description:
      "Gestion d'inventaire, flux de marchandises, rythme soutenu en restauration et disponibilité soirs & week-ends.",
    imageSrc: "/images/ai-agent.png",
    imageAlt: "Flux logistique et processus opérationnel",
    spanClass: "sm:col-span-1",
  },
  {
    number: "06",
    tagline: "PLAY",
    title: "Basketball & Énergie",
    subtitle: "Discipline · Esprit d'équipe",
    description:
      "Mon terrain de respiration en dehors des écrans. Même discipline, même rythme, même réactivité sous pression.",
    imageSrc: "/images/basketball.jpg",
    imageAlt: "Ballon de basketball sur terrain au coucher du soleil",
    spanClass: "sm:col-span-2",
  },
];

export default function MyWorldGrid() {
  return (
    <section id="my-world" className="w-full my-12" aria-labelledby="world-heading">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C9994A] font-mono font-semibold">
              MY WORLD // LES DIFFÉRENTES FACETTES
            </span>
            <h2
              id="world-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F7F5F0] mt-1"
            >
              Polyvalent. Pratique. Curieux.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9FB2C8] max-w-xs">
            Pas un profil standard. Une combinaison concrète de rigueur technique et de bon sens opérationnel.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className={`group relative overflow-hidden rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 hover:border-[#C9994A]/60 transition-all duration-300 flex flex-col justify-between ${
                card.spanClass || ""
              }`}
            >
              {/* Image background with gradient overlay */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.8] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2033] via-[#0E2033]/60 to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#07121E]/80 backdrop-blur-md text-[#C9994A] font-mono text-[11px] font-bold tracking-wider border border-[#C9994A]/30">
                    {card.number} // {card.tagline}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 pt-1 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F7F5F0] tracking-tight group-hover:text-[#C9994A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#9FB2C8] mt-0.5">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-[#9FB2C8]/90 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
