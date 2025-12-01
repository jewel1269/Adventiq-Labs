"use client"
import { MoveUpRight } from "lucide-react";
import { getIconComponent } from "../web-development/IconMapper";
import FeatureCard from "../web-development/FeatureCard";
import CapabilityCard from "../web-development/CapabilityCard";
import PillarCard from "../web-development/PillarCard";
import {
  APP_CAPABILITIES,
  APP_HERO_FEATURES,
  APP_SERVICE_CARDS,
  EXCELLENCE_PILLARS,
} from "./app-data";
import Image from "next/image";
import Link from "next/link";
import { ColorTypography } from "@/components/Typography/color";
import { GridBox2 } from "@/components/Typography/grid-box2";
import Lottie from "lottie-react";
import app from "../../../public/animations/appd.json"


const AppDevelopmentPage = () => {
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
                Cross-Platform App Development. Fast, Fluid, & Future-Ready.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We specialize in building native-quality mobile applications
                using modern frameworks like{" "}
                <span className="text-cyan-500 font-semibold">Flutter</span> and{" "}
                <span className="text-blue-400 font-semibold">
                  React Native (Expo)
                </span>
                , ensuring rapid development and wide platform reach.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                {APP_HERO_FEATURES.map((feature, index) => {
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
              <Lottie
  animationData={app}
  loop
  autoplay
  className="absolute inset-0 -z-10 lg:w-[600px] lg:h-[600px] lg:-mt-24 w-full h-full"
/>

            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_SERVICE_CARDS.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </section>
        {/* Capabilities */}
        <section className="py-12 md:py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
            Integrated Mobile Capabilities
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Every feature your modern mobile application needs, baked in for
            reliability, user engagement, and data security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_CAPABILITIES.map((cap, index) => (
              <CapabilityCard key={index} {...cap} />
            ))}
          </div>
          <div className="mt-12">
            <a href="/app-capabilities">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300">
                Explore All Features
              </button>
            </a>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                  Partner for Flawless Mobile App Delivery
                </h2>
                <p className="text-lg text-gray-300">
                  From initial concept to App Store acceptance, we manage the
                  entire lifecycle, providing transparent communication and
                  robust technical execution.
                </p>
              </div>
              <Link href="/schedule">
                <button className="flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg shadow-2xl transition duration-300 w-full md:w-auto transform hover:scale-[1.03]">
                  Schedule a Consultation
                  <MoveUpRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
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

export default AppDevelopmentPage;
