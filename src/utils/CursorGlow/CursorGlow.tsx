"use client";
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  velocityX: number;
  velocityY: number;
  hue: number;
}

export default function CursorAnimation() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const particleIdRef = useRef(0);
  const lastSpawnTime = useRef(0);

  // Track mouse movement & spawn particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastSpawnTime.current > 16) {
        lastSpawnTime.current = now;

        const newParticles: Particle[] = [];
        for (let i = 0; i < 3; i++) {
          const angle = Math.random() * Math.PI * 2;
          const velocity = Math.random() * 2 + 1;
          newParticles.push({
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 2,
            life: 1,
            velocityX: Math.cos(angle) * velocity,
            velocityY: Math.sin(angle) * velocity,
            hue: Math.random() * 60 + 200,
          });
        }

        setParticles((prev) => [...prev, ...newParticles]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update particle positions
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY,
            life: p.life - 0.03,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)",
          filter: "blur(8px)",
          transition: "transform 0.05s ease-out",
        }}
      />

      {/* Inner Glow */}
      <div
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          left: cursorPos.x - 6,
          top: cursorPos.y - 6,
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, transparent 70%)",
          filter: "blur(2px)",
          transition: "transform 0.05s ease-out",
        }}
      />

      {/* Particle Trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed rounded-full pointer-events-none z-[9999]"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            opacity: p.life,
            background: `radial-gradient(circle, hsl(${p.hue}, 80%, 60%) 0%, transparent 70%)`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </>
  );
}
