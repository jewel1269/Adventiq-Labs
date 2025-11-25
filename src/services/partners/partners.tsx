"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GridBox1 } from "@/components/Typography/grid-box1";

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

type Partner = (typeof partners)[number];

const MarqueeContent = ({ partners }: { partners: Partner[] }) => (
  <>
    {/* Original Set */}
    {partners.map((partner, i) => (
      <div
        key={`original-${i}`}
        className="relative h-16 w-32 sm:w-40 flex-shrink-0 mx-8"
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-[1.05]"
          sizes="(max-width: 640px) 128px, 160px"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/160x60/374151/e5e7eb?text=Logo+Error";
            e.currentTarget.className = "object-contain opacity-30";
          }}
        />
      </div>
    ))}

    {partners.map((partner, i) => (
      <div
        key={`duplicate-${i}`}
        className="relative h-16 w-32 sm:w-40 flex-shrink-0 mx-8"
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-[1.05]"
          sizes="(max-width: 640px) 128px, 160px"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/160x60/374151/e5e7eb?text=Logo+Error";
            e.currentTarget.className = "object-contain opacity-30";
          }}
        />
      </div>
    ))}
  </>
);

export default function TrustedPartners() {
  const marqueeDuration = 25;

  return (
    <section className="py-20 overflow-hidden ">
      <GridBox1 />
      <div className="max-w-7xl mx-auto px-0">
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold mb-8">
          <span className="bg-linear-to-r from-white to-zinc-400 text-transparent bg-clip-text font-serif">
            Our Trusted Partners
          </span>
        </h2>

        <div className="relative overflow-hidden py-6 border-y border-zinc-900/50">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: marqueeDuration,
              ease: "linear",
            }}
            className="flex min-w-max"
          >
            <MarqueeContent partners={partners} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
