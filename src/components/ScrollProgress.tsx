"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 180, damping: 25, restDelta: 0.001 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 25, restDelta: 0.001 });

  return (
    <>
      {/* Mobile Top Progress Line */}
      <div
        aria-hidden="true"
        className="sm:hidden fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#19D7FF] via-[#D4AF37] to-[#19D7FF] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Desktop Right Side Technical Rail */}
      <div
        aria-hidden="true"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 pointer-events-none select-none text-[9px] font-mono text-[#94A3B8]/60"
      >
        <span className="tracking-tighter">01</span>
        <div className="w-[1.5px] h-28 bg-white/[0.08] rounded-full overflow-hidden relative">
          <motion.div
            className="w-full bg-gradient-to-b from-[#19D7FF] to-[#D4AF37] rounded-full origin-top"
            style={{ scaleY, height: "100%" }}
          />
        </div>
        <span className="tracking-tighter">04</span>
      </div>
    </>
  );
}
