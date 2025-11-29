"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { GridBox2 } from "../Typography/grid-box2";

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
    text: "Outstanding service and exceptional quality. The team went beyond expectations and delivered a smooth, high-performing web experience. Truly impressed with their professionalism and dedication.",
  },

  {
    id: 2,
    name: "মাহিন রহমান",
    role: "ই-কমার্স উদ্যোক্তা",
    rating: 5,
    date: "January 12, 2025",
    avatar: "https://i.postimg.cc/VNZM9828/image.png",
    text: "ওয়েবসাইটটি পাওয়ার পর আমার ব্যবসার বিক্রি দ্বিগুণ বেড়েছে। খুব দ্রুত, সুন্দর ও প্রফেশনাল একটি সাইট বানিয়ে দিয়েছে। সব কিছুই একদম পারফেক্টভাবে ডেলিভার হয়েছে।",
  },

  {
    id: 3,
    name: "সাদিয়া ইসলাম",
    role: "ডিজিটাল মার্কেটিং এক্সপার্ট",
    rating: 5,
    date: "February 02, 2025",
    avatar: "https://i.postimg.cc/DyQXjsRD/image.png",
    text: "ওদের ডিজাইন এবং ইউআই/ইউএক্স সেন্স অসাধারণ। আমার ক্লায়েন্টদের জন্য কয়েকটি ওয়েবসাইট তৈরি করিয়েছি—প্রতিটাই দ্রুত, মোবাইল-ফ্রেন্ডলি এবং কনভার্শন ফোকাসড। সত্যি বলতে, ফুল স্যাটিসফাইড!",
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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-15 overflow-hidden">
      <GridBox2 />
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
          {/* Right Side – Review Card */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              <div
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-10 border border-white/10 shadow-xl transition-all duration-500 ${
                  isAnimating
                    ? direction === "next"
                      ? "opacity-0 translate-x-6"
                      : "opacity-0 -translate-x-6"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-white/50 mb-4" />

                {/* Review Text */}
                <p className="text-base lg:text-lg text-white/80 leading-relaxed font-light mb-6">
                  {currentReview.text}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-primary/20 shadow-md">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {currentReview.name}
                    </h3>

                    <div className="flex items-center  gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-500 fill-primary"
                        />
                      ))}
                      <span className="text-[10px] text-white/40 ml-1">
                        {currentReview.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                  {/* Prev */}
                  <button
                    onClick={handlePrev}
                    className="group w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 text-white/50 group-hover:text-primary" />
                  </button>

                  {/* Progress Bars */}
                  <div className="flex-1 flex gap-1.5">
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
                    className="group w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
