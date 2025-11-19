"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroWavebox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${email}`);
  };

  return (
    <main className="relative min-h-screen xl:pt-0 lg:pt-20 pt-28 overflow-hidden text-white">
      {/* Animated Blur Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-10 top-12 w-72 h-72 rounded-full blur-[120px] bg-linear-to-tr from-pink-500/30 via-yellow-300/10 to-transparent animate-float-slow opacity-90" />
        <div className="absolute right-8 bottom-8 w-96 h-96 rounded-full blur-[160px] bg-linear-to-br from-blue-500/25 via-indigo-600/10 to-transparent animate-float-reverse opacity-80" />
        <div className="absolute right-28 top-36 w-60 h-60 rounded-full blur-[90px] bg-linear-to-br from-purple-500/30 to-transparent animate-float opacity-90" />
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-80 h-80 rounded-full bg-linear-to-tr from-yellow-300/20 to-transparent blur-3xl opacity-60 mix-blend-screen animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

      {/* Hero Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* tiny badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-1 text-xs text-yellow-300 shadow">
            <span className="inline-block rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-slate-900">
              +7100
            </span>
            interactions copied
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl leading-tight sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Maximize <span className="text-yellow-300">Sales Success</span>
            <br /> Through Data Insights
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-3xl text-lg text-slate-300 mb-10">
            Elevate your sales performance — unleashing the strategic power of
            data to achieve unrivaled success in your business.
          </p>

          {/* small avatars row */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              placeholder="Search......"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-full border border-yellow-500/30 bg-black/40 py-4 px-6 pr-32 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-linear-to-r from-yellow-400 to-pink-500 px-5 py-2 text-slate-900 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 animate-pulse hover:animate-none"
            >
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {/* Feature / Cards Row */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
            <StatCard />
            <ChartCard />
            <SmallInfoCard />
          </div>

          {/* footer tagline */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Empower Your Sales Performance to Its Fullest Potential: Unleashing
            the Strategic Power of Data for Unrivaled Success
          </p>
        </div>
      </section>

      {/* Animations + keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px) translateX(6px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        /* small responsive tweaks */
        @media (min-width: 1024px) {
          h1 {
            font-size: 4.25rem;
          }
        }
      `}</style>
    </main>
  );
}

function StatCard() {
  return (
    <div className="rounded-2xl bg-black/40 p-6 shadow-lg border border-white/6">
      <h4 className="text-sm text-slate-300">Track Your Business Easily</h4>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400">User Growth</div>
          <div className="mt-2 text-2xl font-bold">200,230</div>
          <div className="text-xs text-slate-400 mt-1">
            Checking Totaly • +140 Today
          </div>
        </div>
        <div className="w-32 h-6 rounded-full bg-linear-to-r from-pink-500 to-yellow-400" />
      </div>
    </div>
  );
}

function ChartCard() {
  return (
    <div className="rounded-2xl bg-black/40 p-6 shadow-lg border border-white/6">
      <h4 className="text-sm text-slate-300">Customer Satisfaction</h4>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex-1">
          <div className="h-24 w-full rounded-md bg-linear-to-b from-slate-800 to-slate-700 flex items-end gap-2 p-2">
            <div className="h-12 w-6 bg-pink-500 rounded-sm" />
            <div className="h-16 w-6 bg-yellow-400 rounded-sm" />
            <div className="h-10 w-6 bg-indigo-400 rounded-sm" />
            <div className="h-20 w-6 bg-green-400 rounded-sm" />
          </div>
        </div>
        <div className="w-16 text-right text-sm text-slate-300">
          Visitor Insight
        </div>
      </div>
    </div>
  );
}

function SmallInfoCard() {
  return (
    <div className="rounded-2xl bg-black/40 p-6 shadow-lg border border-white/6 flex flex-col justify-between">
      <div>
        <div className="text-xs text-slate-300">+85%</div>
        <h5 className="mt-2 text-lg font-semibold">More Of What You Love</h5>
        <p className="mt-2 text-sm text-slate-400">
          In less time: 45 mAh battery in each bud.
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a className="text-sm text-yellow-300 hover:underline">Learn More</a>
        <div className="flex items-center gap-2">
          <span className="block h-2 w-2 rounded-full bg-slate-500" />
          <span className="block h-2 w-2 rounded-full bg-slate-600" />
          <span className="block h-2 w-2 rounded-full bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
