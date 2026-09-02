import Link from "next/link";

export default function CvBanner() {
  const cvItems = [
    {
      id: "tech",
      badge: "PROFIL INGÉNIERIE",
      title: "Tech & Logiciel",
      summary: "AI · Full-Stack · Systèmes SaaS · E-Commerce",
      description:
        "Architecture logicielle (Next.js, NestJS, Python), intégration d'agents LLM, bases de données PostgreSQL & Redis, pipelines automatisés.",
      viewHref: "/cv#tech",
      downloadHref: "/cv/aymen-derouiche-cv-tech.pdf",
      fileName: "aymen-derouiche-cv-tech.pdf",
    },
    {
      id: "hospitality",
      badge: "PROFIL OPÉRATIONS & TERRAIN",
      title: "Vente, Logistique & Restauration",
      summary: "Caisse · Stock · Relation Client · Horeca · POS",
      description:
        "Tenue de caisse sans écart (bijouterie de luxe), flux e-commerce, gestion de réserves, accueil clientèle, service salle & cuisine en horeca.",
      viewHref: "/cv#hospitality",
      downloadHref: "/cv/aymen-derouiche-cv-hospitality.pdf",
      fileName: "aymen-derouiche-cv-hospitality.pdf",
    },
  ];

  return (
    <section className="w-full my-12" aria-labelledby="cv-banner-heading">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C9994A] font-mono font-semibold">
              UN PEU PLUS FORMEL ?
            </span>
            <h2
              id="cv-banner-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F7F5F0] mt-1"
            >
              Je maintiens deux versions de mon CV.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9FB2C8] max-w-xs">
            Pour que chacun accède directement aux informations qui l&apos;intéressent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvItems.map((cv) => (
            <div
              key={cv.id}
              className="p-6 rounded-2xl bg-[#0E2033] border border-[#1E3B5C]/80 hover:border-[#C9994A]/60 transition-all duration-200 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#C9994A]">
                  {cv.badge}
                </span>
                <h3 className="text-xl font-bold text-[#F7F5F0]">{cv.title}</h3>
                <p className="text-xs font-semibold text-[#9FB2C8] uppercase tracking-wide">
                  {cv.summary}
                </p>
                <p className="text-xs sm:text-sm text-[#9FB2C8]/90 mt-1 leading-relaxed">
                  {cv.description}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={cv.viewHref}
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#C9994A] hover:bg-[#DCAE5D] text-[#0B1B2B] text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-150 shadow-md hover:scale-[1.01]"
                >
                  Consulter le CV ↗
                </Link>
                <a
                  href={cv.downloadHref}
                  download={cv.fileName}
                  className="py-2.5 px-4 rounded-xl bg-[#07121E] hover:bg-[#13273D] border border-[#1E3B5C] text-[#F7F5F0] text-xs sm:text-sm font-medium transition-all duration-150 flex items-center gap-1.5"
                  title={`Télécharger ${cv.fileName}`}
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
