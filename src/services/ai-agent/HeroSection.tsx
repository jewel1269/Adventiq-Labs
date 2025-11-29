import React from "react";
import { AI_HERO_FEATURES } from "./data";
import { getIconComponent } from "@/services/web-development/IconMapper";
import Image from "next/image";

const HeroSection = () => (
  <section className="py-12 md:py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight mb-6 text-white/90 ">
          AI Agent & Workflow Development. Autonomous Business Logic.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          We build intelligent, integrated automation agents, providing the
          power of <span className="text-green-300 font-semibold">Zapier</span>{" "}
          and <span className="text-teal-300 font-semibold">n8n</span> with the
          flexibility of custom code and advanced LLM orchestration.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
          {AI_HERO_FEATURES.map((feature, idx) => {
            const Icon = getIconComponent(feature.icon);
            return (
              <div key={idx} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative h-64 md:h-full min-h-[300px] bg-gray-800 rounded-xl border border-gray-700/50 flex items-center justify-center p-6">
        <Image
          src="https://i.postimg.cc/bJPTD3hy/image.png"
          alt="web"
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
