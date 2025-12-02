"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  const logos = [
    "/logos/logo.png",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-600 tracking-wide uppercase mb-2">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
            Our Partners
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10"></div>

          <Marquee speed={40} pauseOnHover={true} gradient={false}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-3 transition-transform duration-300 hover:scale-110"
              >
                <div className="w-40 h-24 flex items-center justify-center rounded-xl shadow-md p-4">
                  <Image
                    width={500}
                    height={500}
                    src={logo}
                    className="w-full h-full object-contain"
                    alt="Partner Logo"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #8080801a 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #8080801a 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;
