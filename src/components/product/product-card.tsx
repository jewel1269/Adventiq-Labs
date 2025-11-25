"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative border border-slate-400/10  overflow-hidden rounded-2xl transition-all duration-500 transform-gpu
        ${
          isHovered
            ? "scale-[1.04] shadow-2xl shadow-slate-600/25" // Gray shadow on hover
            : "shadow-xl shadow-black/40"
        }
        animate-slide-up`}
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass background - Updated to a darker, less saturated glass look */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl rounded-2xl z-0" />

      {/* Border - Updated to gray */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-slate-400/40 transition-all duration-500" />

      {/* Gray glow gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.18),transparent_60%)]" />

      {/* Gloss light sweep - Maintained white for gloss */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(115deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)]" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-3xl font-bold font-serif text-white">
            {product.name}
          </h3>
          <p className="text-sm text-slate-300/70 tracking-wide mt-1">
            {product.subtitle}
          </p>
        </div>

        {/* Image - Updated border to a soft gray */}
        <div className="mb-4 overflow-hidden rounded-xl h-80 border border-slate-400/20">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={800}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features - Updated to use slate/gray tones */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="
                px-3 py-1 text-xs font-medium rounded-full
                bg-slate-400/10 text-slate-300 
                border border-slate-300/50 
                backdrop-blur-md
                shadow-[0_0_10px_rgba(148,163,184,0.15)] 
                transition-all duration-300
                hover:bg-slate-400/20 hover:border-slate-300 hover:text-white
              "
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {/* Primary CTA - Updated to white/light-gray gradient */}
          <button
            className="
              flex-1 px-4 py-2 rounded-2xl font-semibold
            text-slate-100  bg-slate-800/40 
            border border-slate-400/30 
              hover:from-slate-200 hover:to-white
              transition-all duration-300 transform hover:-translate-y-1
              hover:shadow-lg hover:shadow-slate-400/40 // Gray shadow
              flex items-center justify-center gap-2
            "
          >
            <span>View Site</span>
            <ArrowRight size={16} />
          </button>

          {/* Secondary CTA - Updated to slate/gray theme */}
          <button
            className="
              flex-1 px-4 py-2 rounded-3xl font-semibold
              text-slate-300 bg-slate-800/40 
              border border-slate-400/30 
              hover:bg-slate-700/40 hover:border-slate-300
              hover:text-white
              transition-all duration-300 transform hover:-translate-y-1
              hover:shadow-lg hover:shadow-slate-500/20 // Gray shadow
            "
          >
            View Details
          </button>
        </div>
      </div>

      {/* Gray animated top accent line */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-slate-400 via-slate-200 to-transparent group-hover:w-full transition-all duration-700" />
    </div>
  );
}
