"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroAccent3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check if WebGL is supported
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group to hold nested geometry
    const group = new THREE.Group();
    scene.add(group);

    // 1. Outer low-poly wireframe icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x19d7ff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const outerLines = new THREE.LineSegments(outerWire, lineMat);
    group.add(outerLines);

    // 2. Inner floating geometric core (gold accent)
    const innerGeo = new THREE.OctahedronGeometry(0.75, 0);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const innerLines = new THREE.LineSegments(innerWire, innerMat);
    group.add(innerLines);

    // 3. Glowing vertex points
    const pointsMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(outerGeo, pointsMat);
    group.add(points);

    // Subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse tilt tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let animId: number;

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetRotX = y * 0.35;
      targetRotY = x * 0.35;
    };

    if (isDesktop && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const delta = clock.getDelta();
        // Slow ambient rotation
        outerLines.rotation.y += delta * 0.18;
        outerLines.rotation.x += delta * 0.09;

        innerLines.rotation.y -= delta * 0.22;
        innerLines.rotation.z += delta * 0.12;

        points.rotation.y += delta * 0.18;
        points.rotation.x += delta * 0.09;

        // Smooth mouse tilt lerp
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        group.rotation.x = currentRotX;
        group.rotation.y = currentRotY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      if (isDesktop) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      resizeObserver.disconnect();

      // Clean disposal of Three.js objects
      outerGeo.dispose();
      outerWire.dispose();
      lineMat.dispose();
      innerGeo.dispose();
      innerWire.dispose();
      innerMat.dispose();
      pointsMat.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute -inset-10 sm:-inset-16 pointer-events-none z-0 flex items-center justify-center opacity-70"
    />
  );
}
