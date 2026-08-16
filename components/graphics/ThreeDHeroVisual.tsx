"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Zap, Radio, ShieldCheck } from "lucide-react";

export function ThreeDHeroVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Three.js Real WebGL Scene Setup
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Real 3D Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainSpotLight = new THREE.DirectionalLight(0xff5544, 4.5);
    mainSpotLight.position.set(5, 8, 5);
    scene.add(mainSpotLight);

    const goldRimLight = new THREE.DirectionalLight(0xf4b333, 3.5);
    goldRimLight.position.set(-5, -4, 4);
    scene.add(goldRimLight);

    const cyanEyeLight = new THREE.PointLight(0x00ffff, 2.5, 10);
    cyanEyeLight.position.set(0, 0.2, 2);
    scene.add(cyanEyeLight);

    // 3. Real 3D Mecha Helmet Mesh Group
    const helmetGroup = new THREE.Group();

    // Metallic Materials
    const crimsonMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc71524,
      metalness: 0.9,
      roughness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf4b333,
      metalness: 0.95,
      roughness: 0.2,
      clearcoat: 1.0
    });

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1c26,
      metalness: 0.8,
      roughness: 0.4
    });

    const cyanGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff
    });

    // 3D Helmet Cranial Shell
    const crownGeo = new THREE.SphereGeometry(1.8, 32, 32);
    crownGeo.scale(0.9, 1.15, 0.95);
    const crownMesh = new THREE.Mesh(crownGeo, crimsonMaterial);
    helmetGroup.add(crownMesh);

    // 3D Metallic Gold Faceplate Mesh
    const faceGeo = new THREE.CylinderGeometry(1.2, 0.85, 2.2, 32);
    faceGeo.scale(0.95, 1.0, 0.65);
    const faceMesh = new THREE.Mesh(faceGeo, goldMaterial);
    faceMesh.position.set(0, -0.2, 0.55);
    helmetGroup.add(faceMesh);

    // 3D Jaw Structure
    const jawGeo = new THREE.ConeGeometry(1.1, 1.2, 32);
    jawGeo.scale(0.85, 1.0, 0.6);
    const jawMesh = new THREE.Mesh(jawGeo, crimsonMaterial);
    jawMesh.rotation.x = Math.PI;
    jawMesh.position.set(0, -1.2, 0.4);
    helmetGroup.add(jawMesh);

    // 3D Eye Slot Lasers (Left & Right)
    const eyeGeo = new THREE.BoxGeometry(0.55, 0.12, 0.2);

    const leftEye = new THREE.Mesh(eyeGeo, cyanGlowMaterial);
    leftEye.position.set(-0.45, 0.15, 1.15);
    leftEye.rotation.z = -0.1;
    helmetGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, cyanGlowMaterial);
    rightEye.position.set(0.45, 0.15, 1.15);
    rightEye.rotation.z = 0.1;
    helmetGroup.add(rightEye);

    // Side Ear Caps
    const earGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 16);
    const leftEar = new THREE.Mesh(earGeo, titaniumMaterial);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.position.set(-1.6, -0.1, 0);
    helmetGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, titaniumMaterial);
    rightEar.rotation.z = Math.PI / 2;
    rightEar.position.set(1.6, -0.1, 0);
    helmetGroup.add(rightEar);

    scene.add(helmetGroup);
    setIsLoaded(true);

    // 4. Mouse Tracking Rotation Physics
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.9;
      targetRotationX = y * 0.7;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Real-Time Render Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth levitation motion
      helmetGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Smooth 3D mouse look rotation interpolation
      helmetGroup.rotation.y += (targetRotationY - helmetGroup.rotation.y) * 0.08;
      helmetGroup.rotation.x += (targetRotationX - helmetGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto min-h-[440px] flex items-center justify-center select-none">
      {/* Ambient Sunset Glow Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[var(--brand-yellow)]/20 via-[var(--brand-orange)]/25 to-[var(--brand-magenta)]/20 blur-[110px] animate-pulse" />
      </div>

      {/* ── REAL THREE.JS 3D CANVAS CONTAINER ── */}
      <div ref={mountRef} className="relative z-10 w-full h-[440px] flex items-center justify-center" />

      {/* ── AI AGENCY BRANDING HUD OVERLAY ── */}
      <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-2 pointer-events-none z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-cyan-500/40 text-cyan-400 text-[11px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-md"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" /> AI-Powered Agency
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-400 text-[11px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-md"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Real 3D Engine
        </motion.div>
      </div>

      {/* Bottom Floating Badge */}
      <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none z-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/20 text-white text-xs font-bold shadow-xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[var(--brand-yellow)]" /> Move cursor to interact with Real 3D AI Helmet
        </span>
      </div>

    </div>
  );
}
