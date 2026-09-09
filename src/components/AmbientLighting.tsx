"use client";

import { useEffect, useRef } from "react";

export default function AmbientLighting() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only track pointer on desktop devices with fine pointer (mouse)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop || !spotlightRef.current) return;

    let targetX = window.innerWidth / 2;
    let targetY = 300;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateSpotlight = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 350}px, ${currentY - 350}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Technical Grid Overlay (Fades out radially) */}
      <div className="absolute inset-0 bg-tech-grid opacity-80" />

      {/* 2. Micro Noise Grain */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      {/* 3. Hero Cyan Ambient Light Field */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#19D7FF]/[0.045] rounded-full blur-[140px]" />

      {/* 4. Operations Muted Gold Accent Glow (Right Flank) */}
      <div className="absolute top-[480px] right-[-10%] w-[520px] h-[520px] bg-[#D4AF37]/[0.035] rounded-full blur-[130px]" />

      {/* 5. Desktop Interactive Spotlight (Subtle dual cyan-amber glow) */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(25,215,255,0.035)_0%,rgba(212,175,55,0.015)_40%,transparent_70%)] blur-[90px] will-change-transform"
        style={{ transform: "translate3d(300px, 150px, 0)" }}
      />

      {/* 6. Bottom Gradient Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />
    </div>
  );
}
