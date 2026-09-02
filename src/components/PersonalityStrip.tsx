export default function PersonalityStrip() {
  const interests = [
    "BASKETBALL",
    "IA & AGENTS",
    "PRODUCT DESIGN",
    "E-COMMERCE",
    "APPRENTISSAGE",
    "CONSTRUCTION",
  ];

  return (
    <div className="w-full my-6 py-2.5 px-4 rounded-xl bg-[#0E2033]/60 border border-white/5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-[#9FB2C8] tracking-wider font-mono">
      <span className="text-[#C9994A] font-bold">CURRENTLY INTO:</span>
      {interests.map((item, index) => (
        <span key={item} className="flex items-center gap-2 text-[#F7F5F0]/90">
          <span>{item}</span>
          {index < interests.length - 1 && (
            <span className="text-white/20">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
