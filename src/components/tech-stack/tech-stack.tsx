"use client";

import Marquee from "react-fast-marquee";

const technologies = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "React Native",
  "iOS",
  "Android",
  "Node.js",
  "Express.js",
  "Fastify",
  "Nest.js",
];

export default function TechStackMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,120,180,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,180,255,0.25)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 -z-5 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />

        {/* Heading */}
        <div className="text-center font-serif mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Yes! We cover your
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent">
              entire tech stack.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
            We work with 850+ modern technologies trusted by global brands.
          </p>
        </div>

        {/* MARQUEES */}
        <div className="relative">
          {/* TOP MARQUEE */}
          <Marquee speed={60} gradient={false} pauseOnHover className="py-8">
            <div className="flex gap-12">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 min-w-max group"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-300 group-hover:bg-pink-400 transition-colors duration-300" />

                  <span
                    className="
                      text-2xl lg:text-4xl font-semibold
                      text-white/80
                      transition-all duration-300
                      group-hover:from-yellow-400 group-hover:to-pink-400
                      group-hover:drop-shadow-[0_0_20px_rgba(234,179,8,0.45)]
                      group-hover:scale-110
                      cursor-pointer
                    "
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>

          {/* BOTTOM MARQUEE */}
          <Marquee
            speed={60}
            direction="right"
            gradient={false}
            pauseOnHover
            className="py-8 mt-4"
          >
            <div className="flex gap-12 opacity-70">
              {technologies.map((tech, index) => (
                <div
                  key={"rev-" + index}
                  className="flex items-center gap-3 min-w-max group transition-opacity duration-300 hover:opacity-100"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-500 group-hover:bg-yellow-400 transition-colors" />

                  <span
                    className="
                      text-2xl lg:text-4xl font-semibold
                      text-white/50
                      transition-all duration-300
                     
                      
                      hover:text-white/70
                      group-hover:drop-shadow-[0_0_20px_rgba(234,179,8,0.45)]
                      group-hover:scale-110
                      cursor-pointer
                    "
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
      </div>
    </section>
  );
}
