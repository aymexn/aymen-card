export default function CapabilityChips() {
  const capabilities = [
    { label: "Software", category: "tech" },
    { label: "IA & LLM", category: "tech" },
    { label: "E-Commerce", category: "business" },
    { label: "Sites Web", category: "tech" },
    { label: "Design & UI", category: "creative" },
    { label: "Caisse & POS", category: "retail" },
    { label: "Vente en boutique", category: "retail" },
    { label: "Logistique & Stock", category: "operations" },
    { label: "Service Client", category: "people" },
    { label: "Horeca & Salle", category: "horeca" },
  ];

  return (
    <section className="w-full my-8" aria-labelledby="capabilities-heading">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3
            id="capabilities-heading"
            className="text-xs uppercase tracking-widest text-[#9FB2C8] font-semibold flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-[#C9994A] rounded-full" />
            Ce que je peux apporter
          </h3>
          <span className="text-[11px] text-[#9FB2C8]/70">Polyvalent & Immédiat</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {capabilities.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#0E2033] border border-[#1E3B5C]/70 text-[#F7F5F0] hover:border-[#C9994A]/60 transition-colors"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
