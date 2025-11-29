import React from "react";
import FeatureCard from "./FeatureCard";
import CapabilityCard from "./CapabilityCard";
import PillarCard from "./PillarCard";
import { Code, MoveUpRight } from "lucide-react";
import {
  HERO_FEATURES,
  CAPABILITIES,
  EXCELLENCE_PILLARS,
  SERVICE_CARDS,
} from "./data";
import { getIconComponent } from "./IconMapper";
import Image from "next/image";
import { ColorTypography } from "@/components/Typography/color";
import { GridBox2 } from "@/components/Typography/grid-box2";

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen  text-white font-sans pt-20 pb-16">
      <ColorTypography />
      <GridBox2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight mb-6 text-white/90 ">
                Build Faster. Scale Smarter. Modern Web Application Development
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We design, develop, and maintain high-performance websites and
                web applications with clean code, reliability, and SEO—so you
                can launch confidently and grow without limits.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                {HERO_FEATURES.map((feature, index) => {
                  const IconComponent = getIconComponent(feature.icon);
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative h-64 md:h-full min-h-[300px]  rounded-xl  flex items-center justify-center p-6">
              <Image
                src="https://i.postimg.cc/q71fjhMx/image7.png"
                alt="web"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </section>

        {/* Featured Capabilities */}
        <section className="py-12 md:py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
            Featured Capabilities
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Everything you need to ship confidently—architecture, integrations,
            and optimization—delivered by a team that cares about craft and
            outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, index) => (
              <CapabilityCard key={index} {...cap} />
            ))}
          </div>
          <div className="mt-12">
            <a href="/capabilities">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300">
                View All Capabilities
              </button>
            </a>
          </div>
        </section>

        {/* Choose Us Section */}
        <section className="py-12 md:py-20">
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                  Choose Us For Unmatched Web Application Excellence
                </h2>
                <p className="text-lg text-gray-300">
                  We are your partner from strategy to success—combining design,
                  development, and data to deliver web solutions that drive
                  real-world, scalable, and future-ready. Experience clarity,
                  transparency, and results you can measure.
                </p>
              </div>
              <a href="/schedule">
                <button className="flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg shadow-2xl transition duration-300 w-full md:w-auto transform hover:scale-[1.03]">
                  Schedule a Call
                  <MoveUpRight className="w-5 h-5 ml-2" />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Excellence Pillars */}
        <section className="py-12 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8 text-center">
            Our Pillars of Excellence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EXCELLENCE_PILLARS.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
