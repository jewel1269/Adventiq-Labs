"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.0008;
      sphereRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <group>
      {/* Core Sphere */}
      <Sphere ref={sphereRef} args={[1.2, 64, 64]}>
        <meshPhongMaterial color="#fef08a" emissive="#fde047" shininess={120} />
      </Sphere>

      {/* Soft Glow */}
      <Sphere args={[1.35, 32, 32]}>
        <meshBasicMaterial color="#fef08a" transparent opacity={0.15} />
      </Sphere>

      {/* Neon Ring */}
      <mesh rotation={[Math.PI * 0.25, 0, 0]}>
        <torusGeometry args={[1.6, 0.06, 16, 150]} />
        <meshPhongMaterial color="#fb7185" emissive="#f472b6" />
      </mesh>
    </group>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 "
    >
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-10 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-100 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-300" />
              <span className="text-sm text-yellow-300 uppercase tracking-wider">
                About Adventiq Labs
              </span>
            </div>

            {/* Heading */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-200">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Innovating Tomorrow
              </h1>
              <p className="text-xl text-white/80 mt-4">
                Transforming Ideas into Powerful Digital Solutions
              </p>
            </div>

            {/* Description */}
            <p className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-300 text-lg text-white/90 leading-relaxed max-w-2xl">
              At Adventiq Labs, we build modern, scalable and intelligent
              software solutions that empower businesses globally. Our expert
              engineers combine innovation with strategy to deliver impactful,
              future-ready technology.
            </p>

            {/* Key Points */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-400 space-y-3 py-4">
              {[
                "Mission-driven innovation with measurable impact",
                "Cutting-edge technologies built with best practices",
                "Global engineering team focused on excellence",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-yellow-300 mt-1" />
                  <span className="text-white/90">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-500 flex gap-4 pt-4">
              <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-300/40">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT 3D SPHERE */}
          <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-600 relative h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 3]} />
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <pointLight position={[-10, -10, 5]} intensity={1} />
              <AnimatedSphere />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
