"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";
import Image from "next/image";

// Partner data
const partners = [
  { name: "TechWave BD", logo: "https://i.ibb.co.com/ycp22zQv/image.png" },
  { name: "SoftLab IT", logo: "https://i.ibb.co.com/6cZ6J6Mc/image.png" },
  {
    name: "CodeBridge Solutions",
    logo: "https://i.ibb.co.com/21wWtDxW/image.png",
  },
  { name: "FutureStack BD", logo: "https://i.ibb.co.com/spPXhtWd/image.png" },
  { name: "BuyHut BD", logo: "https://i.ibb.co.com/DfZSfmDF/image.png" },
  { name: "MegaMart BD", logo: "https://i.ibb.co.com/XrTWWP62/image.png" },
];

interface PartnerType {
  name: string;
  logo: string;
}

// Logo Component
const PartnerLogo: React.FC<{ partner: PartnerType; index: number }> = ({
  partner,
  index,
}) => {
  const logoVariants = {
    initial: { scale: 1, rotateY: 0, opacity: 0.6, y: 0 },
    hover: {
      scale: 1.1,
      rotateY: [0, 5, -5, 0],
      y: -5,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      key={partner.name + index}
      className="relative h-36 w-48 sm:w-40  mx-8 cursor-pointer group"
      variants={logoVariants}
      initial="initial"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={400}
        height={400}
        className="object-contain w-full text-white h-full p-2 transition-all duration-300"
      />
    </motion.div>
  );
};

// Marquee Content (duplicates array for infinite scroll)
const MarqueeContent: React.FC<{ partners: PartnerType[] }> = ({
  partners,
}) => (
  <>
    {[...partners, ...partners].map((partner, i) => (
      <PartnerLogo partner={partner} index={i} key={i} />
    ))}
  </>
);

// Main Component
const TrustedPartners = () => {
  const marqueeDuration = 35;

  return (
    <section className="flex lg:py-10 items-center justify-center p-4 sm:p-8 text-white overflow-hidden font-sans">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2
          className="flex items-center justify-center text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="w-8 h-8 mr-4 text-cyan-400" />
          <span className="text-white/80 font-serif">
            Our Ecosystem Partners
          </span>
        </motion.h2>

        <div className="relative border border-zinc-700/50 rounded-2xl shadow-2xl p-4 md:p-8  backdrop-blur-sm">
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: marqueeDuration,
                ease: "linear",
              }}
              className="flex min-w-max"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <MarqueeContent partners={partners} />
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-center text-zinc-400 mt-8 text-lg font-light flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Globe className="w-4 h-4 mr-2 text-zinc-500" />
          Join our growing network of industry leaders.
        </motion.p>
      </div>
    </section>
  );
};

export default TrustedPartners;
