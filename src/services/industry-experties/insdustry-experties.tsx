"use client";

import { expertiseData } from "@/utils/experties/experties";
import { LucideIcon } from "lucide-react";
import { createElement } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface ExpertiseItem {
  icon: LucideIcon;
  name: string;
  bgColorClass: string;
  textColorClass: string;
}

const ExpertiseCard = ({
  icon,
  name,
  bgColorClass,
  textColorClass,
  delay,
}: ExpertiseItem & { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className={`
      flex items-center space-x-2 p-3 rounded-xl 
      ${bgColorClass} ${textColorClass}
      text-sm font-medium cursor-pointer 
      transition duration-300 hover:scale-[1.03] hover:shadow-lg
    `}
  >
    {createElement(icon, {
      size: 16,
      className: `opacity-70 ${textColorClass}`,
    })}
    <span className="whitespace-nowrap">{name}</span>
  </motion.div>
);

export function IndustryExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Background Grids and Z-Layers remain the same */}
      <div className="absolute inset-0 z-0 opacity-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#251a4b"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 z-10"></div>

      <div
        ref={ref}
        className="relative z-20 container mx-auto px-4 pt-16 pb-1"
      >
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-sm font-semibold text-[#8a8a8a] tracking-[.3em] mb-2"
          >
            INCORPORATION
          </motion.h2>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold font-serif text-white/80 mb-4"
          >
            Our Industry Expertises
          </motion.h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={item.name}
              {...item}
              delay={isInView ? 0.05 * index : 0}
            />
          ))}
        </div>
        <div className="mt-40 text-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-40 h-px bg-purple-500/50 -top-16"></div>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-semibold text-[#8a8a8a] tracking-[.3em] mb-1"
          >
            Recognition
          </motion.h2>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:text-5xl text-3xl font-extrabold text-white/80 font-serif mb-4"
          >
            Excellence is Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-600">
              Standard
            </span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base text-gray-400 max-w-xl mx-auto mb-10"
          >
            Recognized by leading industry platforms for our commitment to
            delivering exceptional digital solutions and client satisfaction.
          </motion.p>

          {/* Awards/Logos Section - Also animated */}
          <div className="flex justify-center space-x-6">
            {["GoodFirms", "Clutch Top", "Clutch Global"].map(
              (badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }} // Staggered delay for badges
                  className="w-32 h-24 p-2 border border-[#4d3a8e] bg-[#221741] rounded-lg flex flex-col items-center justify-center space-y-1"
                >
                  {badge === "GoodFirms" && (
                    <>
                      <span className="text-xs text-gray-400">Featured On</span>
                      <span className="text-lg font-bold text-white">
                        GoodFirms
                      </span>
                    </>
                  )}
                  {badge.startsWith("Clutch") && (
                    <>
                      <div className="text-2xl font-black text-white">
                        Clutch
                      </div>
                      <div className="text-xs text-gray-400">
                        {badge === "Clutch Top"
                          ? "Top Development"
                          : "Global Leader"}
                      </div>
                    </>
                  )}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Large Corner Gradient Swirls remain the same */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-tr from-transparent to-[#251a4b] blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-linear-to-bl from-transparent to-[#251a4b] blur-3xl opacity-50 pointer-events-none"></div>
    </div>
  );
}
