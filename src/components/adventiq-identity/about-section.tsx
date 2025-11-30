"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ReactPlayer from "react-player";
import { GridBox1 } from "../Typography/grid-box1";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 "
    >
      <GridBox1 />

      <div className="relative z-10 max-w-7xl mx-auto py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-100 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-cyan-400 uppercase tracking-wider font-medium">
                About Adventiq Labs
              </span>
            </div>

            {/* Heading */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-200">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Driving{" "}
                <span className="text-cyan-400">Next-Gen Innovation</span>
              </h1>
              <p className="text-xl text-white/80 mt-4">
                Crafting intelligent software solutions that power global
                businesses.
              </p>
            </div>

            {/* Description */}
            <p className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-300 text-lg text-white/90 leading-relaxed max-w-2xl">
              At Adventiq Labs, we combine strategy, creativity, and
              cutting-edge technology to build scalable, impactful solutions.
              Our global team of engineers brings innovation to life, shaping
              the future of digital experiences.
            </p>

            {/* Key Points */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-400 space-y-3 py-4">
              {[
                "Innovation with measurable impact",
                "Global engineering excellence",
                "Cutting-edge technologies & best practices",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-cyan-400 mt-1" />
                  <span className="text-white/90">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-500 flex gap-4 pt-4">
              <button className="group inline-flex items-center gap-2 px-8 py-3 bg-cyan-400/20 hover:bg-cyan-400/30 backdrop-blur-md text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/40">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO PLAYER - 3D Styled Card */}
          <div className="scroll-animate opacity-0 translate-y-5 transition-all duration-700 delay-600 relative rounded-3xl shadow-gray-950 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-linear-to-br from-gray-800 via-gray-900 to-black border border-cyan-500/30">
            <div className="relative aspect-video w-full">
              <ReactPlayer
                src="/video/Promotional_video.mp4"
                width="100%"
                height="100%"
                controls
                light={false}
                playing={false}
                className="rounded-3xl"
              />
              <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/40 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
