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

  // Alternate gradient directions for visual interest

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform
        ${
          isHovered
            ? "scale-105 shadow-2xl shadow-pink-500/20"
            : "shadow-xl shadow-slate-900/50"
        }
        animate-slide-up`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gray-800/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500`}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-500/30 transition-colors duration-500 " />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="mb-2">
          <h3 className="text-3xl font-bold font-serif text-white mb-2">
            {product.name}
          </h3>
          <div className="inline-block mb-3">
            <span className="text-md font-serif text-white/50 tracking-wides">
              {product.subtitle}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="mb-3 overflow-hidden rounded-lg h-80">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 text-xs font-medium rounded-full
                bg-linear-to-r from-yellow-400/20 to-pink-500/20
                text-yellow-300 border border-yellow-400/30
                transition-all duration-300 hover:border-pink-500/50
                hover:text-pink-300 hover:bg-linear-to-r hover:from-pink-500/20 hover:to-yellow-400/20"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 px-4 py-3 rounded-lg font-semibold text-slate-900
              bg-linear-to-r from-yellow-400 to-yellow-300
              hover:from-yellow-300 hover:to-yellow-200
              transition-all duration-300 transform hover:translate-y-[-2px]
              hover:shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2"
          >
            <span>View Site</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="flex-1 px-4 py-3 rounded-lg font-semibold text-pink-300
              bg-slate-700/50 border border-pink-500/30
              hover:bg-slate-600/50 hover:border-pink-500/60
              hover:text-pink-200
              transition-all duration-300 transform hover:translate-y-[-2px]
              hover:shadow-lg hover:shadow-pink-500/20"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Animated accent line */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-transparent group-hover:w-full transition-all duration-500" />
    </div>
  );
}
