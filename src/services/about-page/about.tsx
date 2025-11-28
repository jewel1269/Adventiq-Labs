"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Zap, Users, Code, Cloud } from "lucide-react"; // Using Lucide Icons for professionalism

// Define icons and colors for 'What We Do' section
const services = [
  {
    title: "Custom Software Development",
    icon: Code,
    color: "text-cyan-400",
    description:
      "Architecting bespoke, scalable, and high-performance digital products.",
  },
  {
    title: "AI & Intelligent Automation",
    icon: Lightbulb,
    color: "text-purple-400",
    description:
      "Integrating smart solutions to streamline operations and unlock data value.",
  },
  {
    title: "Web & Mobile App Engineering",
    icon: Zap,
    color: "text-emerald-400",
    description:
      "Building fast, reliable, and delightful cross-platform user experiences.",
  },
  {
    title: "UI/UX & Product Design",
    icon: Users,
    color: "text-yellow-400",
    description:
      "Crafting intuitive interfaces rooted in user research and modern aesthetics.",
  },
  {
    title: "Cloud Architecture & DevOps",
    icon: Cloud,
    color: "text-indigo-400",
    description:
      "Implementing resilient, secure, and cost-effective cloud infrastructure.",
  },
  {
    title: "Enterprise Integrations",
    icon: Rocket,
    color: "text-red-400",
    description:
      "Seamlessly connecting disparate systems for unified business workflows.",
  },
];

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function HeroSection() {
  return (
    <div className="relative h-[85vh] w-full flex items-center justify-center">
      {/* Background Image with optimized Next.js Image Component */}
      <Image
        src="https://i.ibb.co.com/HRsm17f/Dark-Blue-Modern-Glow-Software-Solution-Linked-In-Background-Photo.jpg"
        alt="Adventiq Labs Banner Background"
        fill
        priority // Load this important image first
        className="object-cover opacity-30"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gray-900/80" />

      {/* Subtle Radial Glow Effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg uppercase tracking-widest text-cyan-400 font-semibold"
        >
          Adventiq Labs
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-extrabold text-white mt-4"
        >
          Innovating <span className="text-cyan-500">Digital</span> Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto"
        >
          We transform bold ideas into scalable, high-performance digital
          experiences that drive growth.
        </motion.p>
      </div>
    </div>
  );
}

function MissionStatement() {
  return (
    <div className="relative py-24 bg-gray-800/50 border-y border-gray-700">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://i.ibb.co.com/PGLtKbXp/images.jpg"
          alt="Technical Abstract Background"
          fill
          className="object-cover scale-110 blur-sm opacity-10"
        />
      </div>
      <div className="relative flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center text-cyan-300 tracking-tight leading-snug max-w-4xl px-4"
        >
          Engineering the future, one elegant solution at a time.
        </motion.h2>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      <HeroSection />

      <MissionStatement />

      <div className="max-w-7xl mx-auto py-24 px-6 space-y-24">
        {/* Who We Are */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-extrabold text-cyan-400">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed text-xl">
            We are a collective of elite innovators, engineers, and product
            designers dedicated to shaping the future through intelligent,
            modern technology. At Adventiq Labs, we transform complex challenges
            into powerful, intuitive digital solutions that drive **measurable
            business growth** and scale.
          </p>
        </motion.section>

        <hr className="border-gray-800" />

        {/* Vision & Mission */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div className="bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-cyan-500/30 transition-all duration-300">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 mb-4">
              Envisioning Tomorrow
            </h3>
            <p className="text-gray-300 text-lg">
              To be recognized globally as the premier innovation partner,
              evolving intelligent ideas into meaningful, industry-defining
              digital experiences that set new standards for performance and
              user-centricity.
            </p>
          </motion.div>

          <motion.div className="bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-purple-500/30 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-300 mb-4">
              Our Purpose & Commitment
            </h3>
            <ul className="text-gray-300 list-none space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-2xl">•</span> Build
                intelligent, scalable digital products with engineering
                precision.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-2xl">•</span> Simplify
                complex problems through elegant, performant solutions.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-2xl">•</span> Empower
                businesses with advanced AI, automation, and data strategy.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <hr className="border-gray-800" />

        {/* What We Do - Service Cards with Icons */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-extrabold text-center text-white">
            Our Core Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 20px 30px -10px rgba(6, 182, 212, 0.2)`,
                  }} // Enhanced hover
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl transition-all duration-300"
                >
                  <IconComponent className={`w-8 h-8 mb-4 ${service.color}`} />
                  <h4 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-base">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <hr className="border-gray-800" />

        {/* Values */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-extrabold text-center text-white">
            Our Foundational Values
          </h2>
          <ul className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "Engineering craftsmanship in every detail, prioritizing quality, reliability, and performance.",
              },
              {
                title: "Integrity",
                desc: "Operating with complete transparency, honesty, and ethical responsibility in all engagements.",
              },
              {
                title: "Innovation",
                desc: "Cultivating a culture of continuous learning, research, and boundary-pushing creativity.",
              },
            ].map((value, index) => (
              <motion.li
                key={value.title}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg text-gray-300"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-20 border-t border-gray-800 mt-20"
        >
          <p className="text-gray-500 text-lg">
            Adventiq Labs — Crafting the future of digital solutions with
            intelligence and precision.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
