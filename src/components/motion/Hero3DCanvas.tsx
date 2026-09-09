"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile or coarse pointer
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || !window.matchMedia("(pointer: fine)").matches;
      setIsMobile(mobile);
      return mobile;
    };

    if (checkMobile()) {
      // On mobile, skip WebGL entirely to keep phone cool, fast, and 120fps responsive
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Three.js Scene Setup (Desktop only)
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner Geometry: Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x19d7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    group.add(icoMesh);

    // 2. Outer Geometry: Torus Ring with Gold Accent
    const torusGeometry = new THREE.TorusGeometry(1.85, 0.02, 16, 80);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    group.add(torusMesh);

    // 3. Subtle floating particles
    const particleCount = 35;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.1 + Math.random() * 0.5;
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x19d7ff,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Pointer lerp tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.2;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // Scroll tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Pause when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop using performance.now()
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const speed = prefersReducedMotion ? 0 : 0.45;

      icoMesh.rotation.x += delta * speed * 0.6;
      icoMesh.rotation.y += delta * speed * 0.8;

      torusMesh.rotation.z += delta * speed * 0.4;
      torusMesh.rotation.y += delta * speed * 0.3;

      particles.rotation.y -= delta * speed * 0.2;

      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      group.rotation.y = currentX * 0.9 + scrollY * 0.0008;
      group.rotation.x = currentY * 0.7 - scrollY * 0.0005;

      renderer.render(scene, camera);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full h-full pointer-events-none select-none overflow-hidden relative"
    >
      {/* Lightweight CSS ambient graphic on mobile (Zero GPU/CPU cost, instant rendering) */}
      {isMobile && (
        <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-48 h-48 rounded-full border border-[#19D7FF]/20 animate-pulse [animation-duration:6s]" />
          <div className="absolute w-64 h-64 rounded-full border border-[#D4AF37]/15 rotate-45" />
        </div>
      )}
    </div>
  );
}
