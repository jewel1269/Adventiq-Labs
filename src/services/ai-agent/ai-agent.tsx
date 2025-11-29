import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CapabilitiesSection from "./CapabilitiesSection";
import CTASection from "./CTASection";
import PillarsSection from "./PillarsSection";
import { GridBox2 } from "@/components/Typography/grid-box2";
import { ColorTypography } from "@/components/Typography/color";

const AIAgentDevelopmentPage = () => {
  return (
    <div className="min-h-screen  text-white font-sans pt-20 pb-16">
      <ColorTypography />
      <GridBox2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ServicesSection />
        <CapabilitiesSection />
        <CTASection />
        <PillarsSection />
      </div>
    </div>
  );
};

export default AIAgentDevelopmentPage;
