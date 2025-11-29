"use client";

import { Bot, Workflow, PenTool, Code } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Custom Web Development",
    icon: PenTool,
    link: "/services/web",
    gradient: "from-cyan-500/20 to-pink-500/20",
    iconColor: "text-gray-300",
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
    link: "/services/app",
    gradient: "from-indigo-500/30 to-sky-500/30",
    iconColor: "text-sky-300",
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
    link: "/services/ai-agent",
    gradient: "from-cyan-500/30 to-violet-500/30",
    iconColor: "text-fuchsia-300",
    points: [
      "Custom AI agent creation",
      "Text-to-image generation",
      "Audio & speech generation",
      "Automated content writing",
      "Social media content automation",
      "Creative storytelling with AI",
      "AI Chatbot Development",
    ],
  },

  {
    title: "WordPress Development",
    icon: Code,
    link: "/services/web",
    gradient: "from-blue-500/30 to-purple-500/30",
    iconColor: "text-blue-300",
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
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-lg">
            Services We Offer
          </h2>
          <div className="w-32 h-1 mx-auto mt-4 bg-linear-to-r from-fuchsia-400 to-sky-400 rounded-full shadow-lg" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                   border border-gray-700/60 rounded-3xl p-8 shadow-2xl
                  backdrop-blur-xl transition-all duration-500 group
                  transform  hover:shadow-3xl hover:-translate-y-2
                  hover:border-cyan-400/50 relative overflow-hidden
                "
              >
                <Link href={service.link}>
                  <div
                    className={`absolute inset-0 opacity-10 rounded-2xl bg-linear-to-br ${service.gradient}`}
                  />

                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-700 
                    bg-linear-to-br ${service.gradient} mb-6 shadow-xl 
                    group-hover:shadow-fuchsia-400/50 transition-shadow`}
                  >
                    <Icon
                      className={`w-7 h-7 ${service.iconColor} drop-shadow-lg`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-400 transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 text-gray-300 text-base">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-sky-400 text-xl leading-none font-extrabold flex-shrink-0">
                          •
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
