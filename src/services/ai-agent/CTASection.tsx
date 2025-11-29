import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => (
  <section className="py-12 md:py-20">
    <div className="bg-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-700/50 shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Partner for Intelligent Automation
          </h2>
          <p className="text-lg text-gray-300">
            We empower your business by automating repetitive tasks, freeing up
            your team to focus on strategic, high-value work.
          </p>
        </div>
        <Link href="/schedule">
          <button className="flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-10 rounded-xl text-lg shadow-2xl transition duration-300 w-full md:w-auto transform hover:scale-[1.03]">
            Schedule a Call
            <MoveUpRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
