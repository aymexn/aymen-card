import Image from "next/image";

interface MasonryItem {
  id: string;
  tag: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  aspectClass: string;
}

const MASONRY_ITEMS: MasonryItem[] = [
  {
    id: "atlaserp",
    tag: "AI & ERP",
    title: "AtlasERP Dashboard",
    category: "Software & SaaS",
    src: "/images/atlaserp.png",
    alt: "AtlasERP interface logicielle et analytics",
    aspectClass: "col-span-1 sm:col-span-2 row-span-1",
  },
  {
    id: "uidesign",
    tag: "UI / UX",
    title: "Design & Design System",
    category: "Interface Design",
    src: "/images/uidesign.jpg",
    alt: "Conception visuelle et maquettes UI",
    aspectClass: "col-span-1 row-span-1",
  },
  {
    id: "ecom",
    tag: "COMMERCE",
    title: "Commandes & Inventaire",
    category: "E-Commerce",
    src: "/images/ecom.jpg",
    alt: "Gestion de catalogue et flux de commandes e-commerce",
    aspectClass: "col-span-1 row-span-1",
  },
  {
    id: "retail",
    tag: "RETAIL",
    title: "Vente & Merchandising",
    category: "Boutique & Caisse",
    src: "/images/retail-design.jpg",
    alt: "Ambiance boutique et merchandising textile",
    aspectClass: "col-span-1 row-span-1",
  },
  {
    id: "ai-agent",
    tag: "SYSTÈMES",
    title: "Multi-Agent Workflows",
    category: "Pipelines IA",
    src: "/images/ai-agent.png",
    alt: "Architecture de flux d'agents IA autonomes",
    aspectClass: "col-span-1 row-span-1",
  },
  {
    id: "basketball",
    tag: "DISCIPLINE",
    title: "Court & Esprit d'Équipe",
    category: "Sport & Rythme",
    src: "/images/basketball.jpg",
    alt: "Photographie de terrain de basketball au coucher du soleil",
    aspectClass: "col-span-1 sm:col-span-2 row-span-1",
  },
];

export default function VisualMasonry() {
  return (
    <section className="w-full my-12" aria-labelledby="masonry-heading">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <h3
              id="masonry-heading"
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F7FA]"
            >
              Aperçu Visuel // En Images
            </h3>
          </div>
          <span className="text-[11px] text-[#8D98A9]">Journal Visuel</span>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {MASONRY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-[#0D1118] border border-white/10 hover:border-[#00D2FF]/50 transition-all duration-300 ${item.aspectClass}`}
            >
              <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.82] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#05070B]/85 backdrop-blur-md text-[#00D2FF] font-mono text-[10px] font-bold tracking-wider border border-[#00D2FF]/30">
                    {item.tag}
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-[#8D98A9]">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-[#F5F7FA] tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
