"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function ScrollProgress() {
  const lenis = useLenis();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = (e: { scroll: number; limit: number }) => {
      const scroll = e.scroll;
      const limit = e.limit;
      const percent = (scroll / limit) * 100;
      setProgress(percent);
      setVisible(percent > 10);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 shadow-lg transition-all ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <svg className="absolute h-14 w-14 -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-gray-800/50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
        />
        <path
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
          d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
        />
      </svg>
      <ArrowUp
        className="relative bg-linear-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent"
        size={20}
      />
    </button>
  );
}
