"use client";

export default function BeamAnimation() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
