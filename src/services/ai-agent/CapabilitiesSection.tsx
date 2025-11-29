import React from "react";
import CapabilityCard from "@/services/web-development/CapabilityCard";
import { AI_CAPABILITIES } from "./data";

const CapabilitiesSection = () => (
  <section className="py-12 md:py-20 text-center">
    <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
      Integrated AI Agent Capabilities
    </h2>
    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
      Powerful features ensuring your automated workflows are robust, traceable,
      and capable of advanced decision-making.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {AI_CAPABILITIES.map((cap, idx) => (
        <CapabilityCard
          key={idx}
          title={cap.title}
          description={cap.description}
          icon={cap.icon}
          color={cap.color}
          bgColor={cap.bgColor}
        />
      ))}
    </div>
    <div className="mt-12">
      <a href="/ai-capabilities">
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300">
          Explore All Agent Features
        </button>
      </a>
    </div>
  </section>
);

export default CapabilitiesSection;
