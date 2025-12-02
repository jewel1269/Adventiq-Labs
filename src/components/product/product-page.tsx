"use client";

import { products } from "@/utils/product/product";
import { ProductCard } from "./product-card";

export default function Products() {
  return (
    <main className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl  mb-4">
          <span className="font-serif">Our Products</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Transforming ideas into powerful AI solutions
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
