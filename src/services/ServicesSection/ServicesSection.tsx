"use client";

import { Bot, Workflow, Eye, PenTool, Code } from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    icon: PenTool,
    gradient: "from-violet-400/20 to-pink-400/20",
    points: [
      "Responsive website design",
      "Custom UI/UX development",
      "Full-stack web application",
      "Performance optimization",
      "API integration",
      "Enterprise-grade security",
    ],
  },
  {
    title: "App Development",
    icon: Workflow,
    gradient: "from-blue-400/20 to-cyan-400/20",
    points: [
      "iOS and Android app development",
      "Cross-platform solutions",
      "Integration with third-party services",
      "Push notifications and analytics",
      "App performance optimization",
      "Maintenance and updates",
    ],
  },
  {
    title: "AI Agent Development",
    icon: Bot,
    gradient: "from-purple-400/20 to-indigo-400/20",
    points: [
      "Custom AI agent creation",
      "Conversational AI integration",
      "Object recognition & detection",
      "Task automation",
      "Multi-platform deployment",
    ],
  },
  {
    title: "AI Content Creation",
    icon: Eye,
    gradient: "from-rose-400/20 to-orange-400/20",
    points: [
      "Text-to-image generation",
      "Audio & speech generation",
      "Automated content writing",
      "Social media content automation",
      "Creative storytelling with AI",
    ],
  },
  {
    title: "WordPress Development",
    icon: Code,
    gradient: "from-blue-400/20 to-purple-400/20",
    points: [
      "Custom theme development",
      "Plugin development & customization",
      "SEO optimization",
      "Performance tuning",
      "Website security enhancement",
      "E-commerce solutions",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full  py-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-white">
            Services We Offer
          </h2>
          <div className="w-28 h-1 mx-auto mt-4 bg-linear-to-r from-amber-400 to-purple-400 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-gray-800/20 border border-gray-600 rounded-xl p-6 shadow-xl
                  backdrop-blur-md transition-all duration-300 group
                  hover:shadow-2xl hover:-translate-y-2
                  hover:border-amber-400/20
                "
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br ${service.gradient} mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 text-lg leading-none">
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
