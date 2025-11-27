"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Import all necessary icons
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Bot,
  Feather,
  Globe,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Interface for service item structure
interface ServiceItem {
  name: string;
  href: string;
  icon: string;
  color: string;
}

const getIconComponent = (iconName: string, colorClass: string) => {
  const IconComponent: LucideIcon = {
    Code: Code,
    Smartphone: Smartphone,
    Bot: Bot,
    Feather: Feather,
    Globe: Globe,
    // Add more icons here if needed
  }[iconName] as LucideIcon;

  if (!IconComponent) return <Code size={20} className={colorClass} />; // Default

  return <IconComponent size={20} className={colorClass} />;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["product", "services", "pricing", "about", "career"];
  const servicesList: ServiceItem[] = [
    {
      name: "Custom Web Development",
      href: "/services/custom-web-development",
      icon: "Code",
      color: "text-blue-400",
    },
    {
      name: "App Development",
      href: "/services/app-development",
      icon: "Smartphone",
      color: "text-purple-400",
    },
    {
      name: "AI Agent Development",
      href: "/services/ai-agent-development",
      icon: "Bot",
      color: "text-green-400",
    },
    {
      name: "AI Content Creation",
      href: "/services/ai-content-creation",
      icon: "Feather",
      color: "text-red-400",
    },
    {
      name: "Wordpress Development",
      href: "/services/wordpress-development",
      icon: "Globe",
      color: "text-yellow-400",
    },
  ];

  const isActive = (path: string) =>
    pathname === `/${path}` || pathname === `#${path}`;

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 pt-1.5"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.1)" : "transparent",
            boxShadow: scrolled
              ? "0 8px 25px rgba(0,0,0,0.1)"
              : "0 2px 10px rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1 rounded-2xl border border-gray-600/50 shadow-2xl shadow-black backdrop-blur-md relative z-50"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="https://i.ibb.co.com/23tBf54k/adventiq.png"
              alt="logo"
              height={300}
              width={250}
              className="h-16 w-16"
            />
            <Link
              href="/"
              className="text-2xl font-bold text-gray-100 transition-all hover:text-gray-300/50"
            >
              Adventiq<span className="text-cyan-400">-Labs</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => {
              if (item === "services") {
                return (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1 text-gray-200 text-base font-semibold capitalize tracking-wide transition duration-300 ${
                        isActive(item)
                          ? "text-blue-400 font-semibold"
                          : "hover:text-blue-400"
                      }`}
                    >
                      {item}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          desktopServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown - MODERNIZED STYLING */}
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 w-96  bg-gray-900/95 backdrop-blur-xl
          border border-gray-700  rounded-xl  shadow-2xl p-2 flex flex-col gap-1 z-[60]"
                        >
                          {servicesList.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setDesktopServicesOpen(false)}
                              // Item styling with icons and hover effects
                              className="flex items-center gap-3 p-3 rounded-lg group transition-all duration-200  hover:bg-gray-800"
                            >
                              {/* Render Icon */}
                              <div className="flex-shrink-0">
                                {getIconComponent(service.icon, service.color)}
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-gray-100 font-semibold text-sm group-hover:text-white transition-colors">
                                  {service.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`relative text-gray-200 text-base font-semibold capitalize tracking-wide transition duration-300 ${
                    isActive(item)
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* CTA Button + Mobile Menu Toggle (No change here) */}
          <div className="flex items-center justify-center gap-2">
            <Link href="/schedule">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(236,72,153,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-linear-to-r from-indigo-500 to-cyan-400 text-white font-medium px-5 py-2 rounded-2xl shadow-md hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-[1.03] animate-bounce-slow hover:animate-none hidden md:inline"
              >
                <span className="relative z-10">Schedule a call </span>
              </motion.button>
            </Link>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setMobileServicesOpen(false);
              }}
              className="md:hidden text-gray-200 hover:text-blue-400 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu - Updated to include icons and better styling */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden fixed top-[4.5rem] left-0 w-full bg-gray-800/90 backdrop-blur-xl border-t border-gray-700 z-40"
            >
              <div className="flex flex-col items-start pl-6 gap-5 py-6">
                {menuItems.map((item) => {
                  if (item === "services") {
                    return (
                      <div key={item} className="flex flex-col w-full">
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="flex items-center justify-between pr-6 text-gray-200 font-medium text-left w-full transition hover:text-blue-400"
                        >
                          Services
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Mobile Dropdown with Icons */}
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col pl-4 mt-2 gap-2 pb-2 border-l border-gray-700 ml-1.5"
                          >
                            {servicesList.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="flex items-center gap-3 text-gray-400 font-medium hover:text-blue-400 transition"
                              >
                                {getIconComponent(
                                  service.icon,
                                  `w-5 h-5 ${service.color}`
                                )}
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item}
                      href={`/${item}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-200 text-base font-medium transition hover:text-blue-400"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  );
                })}

                <Link href="/schedule">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(236,72,153,0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="bg-linear-to-r from-blue-500 to-pink-500 text-white font-medium px-5 py-2 rounded-2xl shadow-md transition-all duration-300 mt-3"
                  >
                    Schedule a call
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
