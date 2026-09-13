"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function LivingBackground() {
  const [mounted, setMounted] = useState(false);
  const [pathTone, setPathTone] = useState<"neutral" | "tech" | "retail">("retail");
  const spotlightRef = useRef<HTMLDivElement>(null);
  const gridGlowRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scroll-based undertone listener (Throttled with rAF, caches scrollFraction to avoid layout thrashing)
    let scrollFraction = 0;
    let scrollTicking = false;

    const handleScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const totalScrollable = Math.max(1, document.documentElement.scrollHeight - windowHeight);
          scrollFraction = scrollY / totalScrollable;

          const techSection = document.getElementById("profil-tech");
          const atlasSection = document.getElementById("atlaserp");

          if (atlasSection && scrollY + windowHeight * 0.4 > atlasSection.offsetTop) {
            setPathTone("tech");
          } else if (techSection && scrollY + windowHeight * 0.4 > techSection.offsetTop) {
            setPathTone("tech");
          } else {
            setPathTone("retail");
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. Cursor tracking for desktop spotlight
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    if (isDesktop && !prefersReducedMotion) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    // 3. PERSISTENT FULL-VIEWPORT 3D THREE.JS CANVAS
    const container = webglContainerRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;

    // Objects to dispose
    let outerGeo: THREE.IcosahedronGeometry | null = null;
    let outerWire: THREE.WireframeGeometry | null = null;
    let lineMat: THREE.LineBasicMaterial | null = null;
    let outerLines: THREE.LineSegments | null = null;

    let innerGeo: THREE.OctahedronGeometry | null = null;
    let innerWire: THREE.WireframeGeometry | null = null;
    let innerMat: THREE.LineBasicMaterial | null = null;
    let innerLines: THREE.LineSegments | null = null;

    let pointsMat: THREE.PointsMaterial | null = null;
    let points: THREE.Points | null = null;

    let starGeo: THREE.BufferGeometry | null = null;
    let starMat: THREE.PointsMaterial | null = null;
    let starField: THREE.Points | null = null;

    let constellationGeo: THREE.BufferGeometry | null = null;
    let constellationMat: THREE.LineBasicMaterial | null = null;
    let constellationLines: THREE.LineSegments | null = null;

    let mainGroup: THREE.Group | null = null;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let clock = new THREE.Clock();

    if (container) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: isDesktop,
        powerPreference: "low-power",
        precision: isDesktop ? "highp" : "mediump",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(isDesktop ? Math.min(window.devicePixelRatio, 1.25) : 1.0);
      container.appendChild(renderer.domElement);

      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // A) Geometric Core — The exact 3D wireframe from hero
      // Outer icosahedron (Cyan)
      outerGeo = new THREE.IcosahedronGeometry(1.5, 1);
      outerWire = new THREE.WireframeGeometry(outerGeo);
      lineMat = new THREE.LineBasicMaterial({
        color: 0x19d7ff,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
      });
      outerLines = new THREE.LineSegments(outerWire, lineMat);
      mainGroup.add(outerLines);

      // Inner octahedron (Gold)
      innerGeo = new THREE.OctahedronGeometry(0.8, 0);
      innerWire = new THREE.WireframeGeometry(innerGeo);
      innerMat = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      innerLines = new THREE.LineSegments(innerWire, innerMat);
      mainGroup.add(innerLines);

      // Glowing vertex points (Emerald)
      pointsMat = new THREE.PointsMaterial({
        color: 0x10b981,
        size: 0.055,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });
      points = new THREE.Points(outerGeo, pointsMat);
      mainGroup.add(points);

      // Position the main geometric accent slightly offset to frame content elegantly
      mainGroup.position.set(-1.8, 0.8, -1.0);

      // B) Full-viewport constellation particle field
      const particleCount = isDesktop ? 80 : 35;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 14;
        particlePositions[i + 1] = (Math.random() - 0.5) * 12;
        particlePositions[i + 2] = (Math.random() - 0.5) * 6 - 1;
      }

      starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

      starMat = new THREE.PointsMaterial({
        color: 0x19d7ff,
        size: 0.045,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });
      starField = new THREE.Points(starGeo, starMat);
      scene.add(starField);

      // Connecting constellation lines on desktop only
      if (isDesktop) {
        const linePositions: number[] = [];
        const threshold = 2.4;
        for (let i = 0; i < particleCount; i++) {
          const x1 = particlePositions[i * 3];
          const y1 = particlePositions[i * 3 + 1];
          const z1 = particlePositions[i * 3 + 2];
          for (let j = i + 1; j < particleCount; j++) {
            const x2 = particlePositions[j * 3];
            const y2 = particlePositions[j * 3 + 1];
            const z2 = particlePositions[j * 3 + 2];
            const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
            if (dist < threshold) {
              linePositions.push(x1, y1, z1, x2, y2, z2);
            }
          }
        }

        constellationGeo = new THREE.BufferGeometry();
        constellationGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
        constellationMat = new THREE.LineBasicMaterial({
          color: 0x19d7ff,
          transparent: true,
          opacity: 0.12,
          blending: THREE.AdditiveBlending,
        });
        constellationLines = new THREE.LineSegments(constellationGeo, constellationMat);
        scene.add(constellationLines);
      }
    }

    // 4. Combined Render Loop (Optimized 60/120 FPS)
    const render = () => {
      animId = requestAnimationFrame(render);

      // Cursor spotlight physics on desktop only
      if (isDesktop) {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`;
        }
        if (gridGlowRef.current) {
          gridGlowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
        }
      }

      // Three.js 3D Physics
      if (renderer && scene && camera && !prefersReducedMotion) {
        const delta = clock.getDelta();

        if (outerLines) {
          outerLines.rotation.y += delta * 0.18;
          outerLines.rotation.x += delta * 0.09;
        }
        if (innerLines) {
          innerLines.rotation.y -= delta * 0.22;
          innerLines.rotation.z += delta * 0.12;
        }
        if (points) {
          points.rotation.y += delta * 0.18;
          points.rotation.x += delta * 0.09;
        }
        if (starField) {
          starField.rotation.y += delta * 0.02;
          starField.rotation.x += delta * 0.01;
        }
        if (constellationLines) {
          constellationLines.rotation.y += delta * 0.02;
          constellationLines.rotation.x += delta * 0.01;
        }

        if (isDesktop) {
          // Mouse tilt on 3D group
          const normX = (mouseX / window.innerWidth - 0.5) * 2;
          const normY = (mouseY / window.innerHeight - 0.5) * 2;
          targetRotX = normY * 0.25;
          targetRotY = normX * 0.25;

          currentRotX += (targetRotX - currentRotX) * 0.05;
          currentRotY += (targetRotY - currentRotY) * 0.05;
        }

        if (mainGroup) {
          mainGroup.rotation.x = currentRotX;
          mainGroup.rotation.y = currentRotY;

          // Gentle parallax with cached scrollFraction (no layout thrashing)
          mainGroup.position.y = 0.8 - scrollFraction * 1.6;
        }

        renderer.render(scene, camera);
      }
    };

    animId = requestAnimationFrame(render);

    // Resize listener for full-viewport 3D canvas
    const handleResize = () => {
      if (!renderer || !camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (isDesktop) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      // Clean disposal of Three.js resources
      outerGeo?.dispose();
      outerWire?.dispose();
      lineMat?.dispose();
      innerGeo?.dispose();
      innerWire?.dispose();
      innerMat?.dispose();
      pointsMat?.dispose();
      starGeo?.dispose();
      starMat?.dispose();
      constellationGeo?.dispose();
      constellationMat?.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#040711]"
      style={{ contain: "strict", willChange: "transform" }}
    >
      {/* 1. Deep navy base and shifting aurora mesh */}
      <div className="absolute inset-0 opacity-80 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-[#040711]" />

        {/* Ambient Top Left Glow (Warm gold) */}
        <div
          className={`absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] transition-all duration-1000 ${
            pathTone === "tech"
              ? "bg-[#19D7FF]/[0.035] scale-95"
              : "bg-[#D4AF37]/[0.06] scale-105"
          }`}
          style={{ animation: mounted ? "auroraDrift1 24s ease-in-out infinite alternate" : "none" }}
        />

        {/* Ambient Right Flank Glow (Cool cyan) */}
        <div
          className={`absolute top-[20%] -right-32 w-[700px] h-[700px] rounded-full blur-[150px] transition-all duration-1000 ${
            pathTone === "tech"
              ? "bg-[#19D7FF]/[0.08] scale-110"
              : "bg-[#19D7FF]/[0.035] scale-90"
          }`}
          style={{ animation: mounted ? "auroraDrift2 28s ease-in-out infinite alternate" : "none" }}
        />

        {/* Ambient Mid-Lower Glow (Emerald subtle tint) */}
        <div
          className="absolute top-[60%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#10b981]/[0.025] blur-[160px]"
          style={{ animation: mounted ? "auroraDrift3 32s ease-in-out infinite alternate" : "none" }}
        />
      </div>

      {/* 2. PERSISTENT FULL-VIEWPORT THREE.JS 3D CANVAS */}
      <div
        ref={webglContainerRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-85"
      />

      {/* 3. Fine noise / grain texture overlay */}
      <div
        className="absolute inset-0 z-20 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. Subtle fine technical grid (Desktop only: illuminated near cursor) */}
      <div className="hidden md:block absolute inset-0 z-20 bg-tech-grid opacity-30" />

      {/* 5. Desktop cursor-following soft spotlight glow */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 z-20 w-[800px] h-[800px] rounded-full pointer-events-none transition-colors duration-700 blur-[130px] opacity-70 will-change-transform"
        style={{
          background:
            pathTone === "tech"
              ? "radial-gradient(circle, rgba(25,215,255,0.065) 0%, rgba(25,215,255,0.015) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(212,175,55,0.055) 0%, rgba(25,215,255,0.02) 45%, transparent 70%)",
        }}
      />

      {/* 6. Desktop cursor-following circuit grid illumination mask */}
      <div
        ref={gridGlowRef}
        className="hidden md:block absolute top-0 left-0 z-20 w-[500px] h-[500px] rounded-full pointer-events-none blur-[60px] opacity-40 will-change-transform"
        style={{
          background:
            pathTone === "tech"
              ? "radial-gradient(circle, rgba(25,215,255,0.08) 0%, transparent 60%)"
              : "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 60%)",
        }}
      />

      {/* 7. Subtle dark contrast scrim ensuring WCAG AAA text contrast across all content */}
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-transparent via-[#040711]/30 to-[#040711]/70 pointer-events-none" />
    </div>
  );
}
