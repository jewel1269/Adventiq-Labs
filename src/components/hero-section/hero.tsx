"use client";
import Lottie from "lottie-react";
import { Code, Globe, Gauge, Users, Layers3, Search } from "lucide-react";
import animationData from ".././../../public/animations/circle.json";
import { ColorTypography } from "../Typography/color";


export default function HeroWavebox() {
  return (
    <main className="relative min-h-screen  pt-28 lg:pt-0 xl:pt-10  overflow-hidden text-white ">
      <ColorTypography />
      <div className="absolute inset-0 z-0 flex items-center backdrop:backdrop-blur-xl justify-center pointer-events-none opacity-40">
        <div className="2xl:w-[1100px] xl:w-[1000px] xl:mt-64 2xl:mt-20 lg:mt-20 2xl:h-[1100px]">
          <Lottie animationData={animationData} loop autoplay className="lg:mt-0 mt-10" />
        </div>
        <div className="absolute inset-0  bg-black/10"></div>
      </div>


      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-3xl leading-tight sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Innovating <span className="text-cyan-400">Intelligent</span>{" "}
            Solutions
            <br />
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 mb-10">
            We transform complex challenges into robust, high-performance
            software, leveraging cutting-edge technology and agile methodologies
            to deliver unparalleled business value.
          </p>

          <div className="relative mx-auto max-w-md">
            <input
              type="text"
              placeholder="Search our solutions..."
              className="w-full rounded-full bg-white/5 text-white placeholder-slate-300 px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-sm shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <StatCard />
            <ChartCard />
            <SmallInfoCard />
          </div>
        </div>
      </section>

    </main>
  );
}

function StatCard() {
  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-xl border border-indigo-500/30 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
      <h4 className="text-md font-semibold text-cyan-400 flex items-center gap-2">
        <Code className="w-5 h-5" /> Deployment Success Rate
      </h4>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-5xl font-extrabold text-white">99.8%</div>
          <div className="text-xs text-slate-400 mt-2">
            Uptime & Stability Average
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-indigo-400">2M+</div>
          <div className="text-xs text-slate-400">Lines of Code Deployed</div>
        </div>
      </div>
      <div className="mt-4 w-full h-2 rounded-full bg-slate-700">
        <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-indigo-500 w-[99.8%]" />
      </div>
    </div>
  );
}

function ChartCard() {
  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-xl border border-indigo-500/30 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
      <h4 className="text-md font-semibold text-cyan-400 flex items-center gap-2">
        <Gauge className="w-5 h-5" /> Project Velocity (Y-o-Y)
      </h4>
      <div className="mt-4 flex items-center gap-6">
        <div className="relative flex-1">
          {/* Simple Chart Representation for Sprints/Releases */}
          <div className="h-24 w-full rounded-lg bg-slate-800/50 flex items-end gap-2 p-2 shadow-inner">
            <div
              className="h-10 w-6 bg-cyan-500 rounded-sm hover:h-12 transition-all duration-300"
              title="Q1"
            ></div>
            <div
              className="h-16 w-6 bg-indigo-500 rounded-sm hover:h-20 transition-all duration-300"
              title="Q2"
            ></div>
            <div
              className="h-12 w-6 bg-purple-500 rounded-sm hover:h-16 transition-all duration-300"
              title="Q3"
            ></div>
            <div
              className="h-20 w-6 bg-green-500 rounded-sm hover:h-24 transition-all duration-300"
              title="Q4"
            ></div>
          </div>
          <div className="mt-2 text-xs text-slate-500 text-left">
            Average features/sprint
          </div>
        </div>
        <div className="w-24 text-center">
          <Globe className="w-6 h-6 mx-auto text-indigo-400" />
          <div className="text-xl font-bold mt-1 text-white">5+</div>
          <div className="text-xs text-slate-400">Global Markets Served</div>
        </div>
      </div>
    </div>
  );
}

function SmallInfoCard() {
  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-xl border border-indigo-500/30 backdrop-blur-sm flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
      <div>
        <div className="text-lg font-semibold text-green-400 flex items-center gap-2">
          <Users className="w-5 h-5" /> 95% Client Retention
        </div>
        <h5 className="mt-3 text-xl font-bold">
          Innovation, Partnership, Trust.
        </h5>
        <p className="mt-2 text-sm text-slate-400">
          Our long-term success is built on a foundation of delivering
          consistent value and adapting to evolving technology needs.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-indigo-300 hover:underline flex items-center gap-1">
          <Layers3 className="w-4 h-4" /> Tech Stack Focus
        </div>
        <div className="flex items-center gap-2">
          <span
            className="block h-3 w-3 rounded-full bg-sky-500"
            title="Cloud"
          ></span>
          <span
            className="block h-3 w-3 rounded-full bg-red-500"
            title="AI/ML"
          ></span>
          <span
            className="block h-3 w-3 rounded-full bg-green-500"
            title="DevOps"
          ></span>
        </div>
      </div>
    </div>
  );
}
