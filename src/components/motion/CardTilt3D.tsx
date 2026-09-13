"use client";

import React, { useRef, useEffect } from "react";

interface CardTilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max degrees tilt (default 6deg)
  glare?: boolean;
}

export default function CardTilt3D({
  children,
  className = "",
  maxTilt = 6,
  glare = true,
}: CardTilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only attach tilt listeners on fine pointer (desktop mouse/trackpad)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isDesktop || prefersReducedMotion) return;

    const card = cardRef.current;
    const inner = innerRef.current;
    const glareEl = glareRef.current;
    if (!card || !inner) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = -((y - centerY) / centerY) * maxTilt;
        const tiltY = ((x - centerX) / centerX) * maxTilt;

        inner.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(4px)`;

        if (glareEl) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glareEl.style.opacity = "0.12";
          glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
        }
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      inner.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
      if (glareEl) {
        glareEl.style.opacity = "0";
      }
    };

    card.addEventListener("mousemove", handleMouseMove, { passive: true });
    card.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}

        {/* Specular glare overlay on hover */}
        {glare && (
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-30 opacity-0"
          />
        )}
      </div>
    </div>
  );
}
