"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  live?: string;
  link?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`
        group relative border border-slate-400/10 overflow-hidden 
        rounded-2xl transition-all duration-500 transform-gpu cursor-pointer
        ${
          open
            ? "scale-[1.03] shadow-2xl shadow-slate-700/30"
            : "shadow-xl shadow-black/40"
        }
        animate-slide-up
      `}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Background Frosted Layer */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl rounded-2xl z-0" />

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Image */}
        <div className="mb-4 overflow-hidden rounded-xl h-80 border border-slate-400/20">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className={`w-full h-full object-cover transition-transform duration-700 
              ${open ? "scale-110" : "group-hover:scale-105"}`}
          />
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="text-3xl font-bold font-serif text-white">
            {product.name}
          </h3>
          <p className="text-sm text-slate-300/70 tracking-wide mt-1">
            {product.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* --- CLICK TO REVEAL BUTTONS --- */}
        <div
          className={`
            overflow-hidden transition-all duration-500 
            ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Product Details Button */}
            <a
              href={product.link || "#"}
              className="
                flex-1 h-12 bg-cyan-600 hover:bg-cyan-500 
                text-white font-semibold rounded-xl 
                flex items-center justify-center gap-2 transition
              "
            >
              View Details <ArrowRight size={18} />
            </a>

            {/* Live Demo */}
            <a
              href={product.live || "#"}
              className="
                flex-1 h-12 border border-slate-500 
                text-slate-200 hover:bg-slate-800 hover:text-white 
                rounded-xl flex items-center justify-center gap-2 transition
              "
            >
              Live Preview <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
