"use client"
import { AI_HERO_FEATURES } from "./data";
import { getIconComponent } from "@/services/web-development/IconMapper";
import Image from "next/image";
import Lottie from "lottie-react";
import ai from "../../../public/animations/aid.json"

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
       <div className="relative h-64 md:h-full min-h-[300px]  rounded-xl  flex items-center justify-center p-6">
              <Lottie
  animationData={ai}
  loop
  autoplay
  className="absolute inset-0 -z-10 lg:w-[600px] lg:h-[600px] lg:-mt-24 w-full h-full"
/>

            </div>
    </div>
  </section>
);

export default HeroSection;
