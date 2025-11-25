"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ColorTypography } from "@/components/Typography/color";

const plans = [
  {
    title: "Startup",
    monthly: "$3,000",
    quarterly: "$8,400",
    onetime: "$30,000",
    description: "Perfect for small teams",
    features: [
      "1 Senior Developer (Part Time)",
      "1 Senior Designer (Part Time)",
      "Shared Project Manager",
      "80 Development Hours/Month",
      "20 Design Hours/Month",
      "Basic Support (Email + Slack)",
    ],
    color: "from-pink-400 to-pink-300",
  },
  {
    title: "Growth",
    monthly: "$5,000",
    quarterly: "$14,000",
    onetime: "$50,000",
    description: "For growing companies",
    features: [
      "1 Senior Developer (Full Time)",
      "1 Senior Designer (Part Time)",
      "Dedicated Project Manager",
      "140 Development Hours/Month",
      "30 Design Hours/Month",
      "Priority Support + Weekly Calls",
    ],
    color: "from-orange-400 to-orange-300",
  },
  {
    title: "Enterprise",
    monthly: "Custom",
    quarterly: "Custom",
    onetime: "Custom",
    description: "Custom solutions for large teams",
    features: [
      "Custom Development Team",
      "Custom Design Team",
      "Senior Project Manager",
      "Unlimited Hours",
      "24/7 Priority Support",
      "Custom Integrations & Solutions",
    ],
    color: "from-blue-400 to-blue-300",
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "quarterly" | "onetime">(
    "monthly"
  );

  return (
    <section className="relative text-white lg:py-36 pt-10 overflow-hidden ">
      <ColorTypography />
      {/* Background grids */}
      <div className="absolute inset-0 -z-20 opacity-[0.18] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-25 opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple <span className="text-cyan-400">Pricing</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Flexible plans for startups, growing teams, and enterprises. Choose a
          billing cycle that works best for you.
        </p>

        {/* Billing toggle */}
        <div className="flex justify-center gap-3 mb-12 bg-gray-800/30 backdrop-blur-md rounded-full p-1">
          {[
            { label: "Monthly", value: "monthly" },
            { label: "Quarterly", value: "quarterly" },
            { label: "One Time", value: "onetime" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setBilling(option.value as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billing === option.value
                  ? "bg-white/20 backdrop-blur-md text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/10 hover:backdrop-blur-sm"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 80 }}
              className="bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}
                >
                  {plan.title}
                </h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <p className="text-3xl md:text-4xl font-extrabold mb-6">
                  {billing === "monthly"
                    ? plan.monthly
                    : billing === "quarterly"
                    ? plan.quarterly
                    : plan.onetime}{" "}
                  <span className="text-gray-400 text-base">
                    {billing === "monthly"
                      ? "/ month"
                      : billing === "quarterly"
                      ? "/ quarter"
                      : "/ one time"}
                  </span>
                </p>
                <ul className="mb-6 space-y-2 text-gray-300">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glassy button */}
              <button className="mt-auto py-3 rounded-2xl font-semibold text-white bg-gray-900 backdrop-blur-md border border-white/5 hover:text-white/50  transition-all duration-300">
                Contact To Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
