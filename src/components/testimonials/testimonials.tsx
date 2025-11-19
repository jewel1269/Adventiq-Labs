"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  date: string;
  avatar: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Lauren Contreras",
    role: "Product Director",
    rating: 5,
    date: "August 20, 2024",
    avatar: "https://i.ibb.co.com/Qj3bJMKw/image.png",
    text: "Outstanding service and exceptional quality. The team went above and beyond to ensure everything was perfect. Their attention to detail and commitment to excellence is truly remarkable.",
  },
  {
    id: 2,
    name: "Edward Alexander",
    role: "VP of Engineering",
    rating: 5,
    date: "August 29, 2024",
    avatar: "https://i.ibb.co.com/24c54bz/image.png",
    text: "They have awesome customer service. I wouldn't recommend going to anyone else. All of you guys are awesome. Definitely love the way everything works seamlessly together.",
  },
  {
    id: 3,
    name: "Diana Johnston",
    role: "Chief Marketing Officer",
    rating: 5,
    date: "September 15, 2024",
    avatar: "https://i.ibb.co.com/rGtxQ7K9/image.png",
    text: "Excellent experience from start to finish. The attention to detail and professionalism is unmatched in this industry. They truly understand what clients need.",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // --- FIX: Move all functions above useEffect ---

  const handleNext = () => {
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsAnimating(false);
    }, 350);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsAnimating(false);
    }, 350);
  };

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 350);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      {/* Background Glow */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary/40 rounded-full animate-ping"></span>
            <span className="text-sm font-medium text-white/60">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-serif tracking-tight">
            Our Valuable Clients
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real businesses who trust our expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left Side – Avatar Selector */}
          <div className="flex lg:flex-col gap-6 order-2 lg:order-1">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                onClick={() => handleSelect(index)}
                className={`group relative transition-all duration-500 ${
                  index === currentIndex
                    ? "scale-110 brightness-110"
                    : "scale-90 opacity-50 hover:opacity-80 hover:scale-95"
                }`}
                style={{
                  transform:
                    index === currentIndex
                      ? "translateZ(25px)"
                      : "translateZ(0px)",
                }}
              >
                <div
                  className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                    index === currentIndex
                      ? "ring-4 ring-primary/80 shadow-[0_0_40px_rgba(52,211,153,0.35)]"
                      : "ring-2 ring-white/10"
                  }`}
                >
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  z
                </div>

                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10"></div>
                )}
              </button>
            ))}
            <h1 className="text-white/50 text-3xl lg:ml-6 lg:-mt-7">......</h1>
          </div>

          {/* Right Side – Review Card */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              <div
                className={`relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 lg:p-14 border border-white/10 shadow-2xl transition-all duration-500 ${
                  isAnimating
                    ? direction === "next"
                      ? "opacity-0 translate-x-10 rotate-y-12"
                      : "opacity-0 -translate-x-10 -rotate-y-12"
                    : "opacity-100 translate-x-0 rotate-y-0"
                }`}
                style={{
                  transform: "translateZ(40px)",
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(52,211,153,0.15)",
                }}
              >
                {/* Icon */}
                <Quote className="w-16 h-16 text-primary/30 mb-8" />

                {/* Text */}
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light mb-10">
                  {currentReview.text}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-lg">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {currentReview.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {currentReview.role}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-primary fill-primary"
                        />
                      ))}
                      <span className="text-xs text-white/50 ml-2">
                        {currentReview.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10">
                  {/* Prev */}
                  <button
                    onClick={handlePrev}
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-white/50 group-hover:text-primary" />
                  </button>

                  {/* Progress Bars */}
                  <div className="flex-1 flex gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className="relative h-1 flex-1 rounded-full bg-white/10 overflow-hidden"
                      >
                        <div
                          className={`absolute inset-0 bg-primary transition-all duration-500 ${
                            index === currentIndex ? "scale-x-100" : "scale-x-0"
                          }`}
                          style={{ transformOrigin: "left" }}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    onClick={handleNext}
                    className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-primary" />
                  </button>
                </div>
              </div>

              {/* Soft Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
