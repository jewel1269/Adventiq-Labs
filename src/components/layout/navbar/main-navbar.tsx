"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScheduleCallDialog } from "@/services/ScheduleCallModal/ScheduleCallModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const pathname = usePathname();

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["product", "services", "pricing", "about", "career"];
  const isActive = (path: string) =>
    pathname === `/${path}` || pathname === `#${path}`;

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "bg-gray-400/50" : "transparent",
            y: scrolled ? 4 : 0,
            boxShadow: scrolled
              ? "0 8px 25px rgba(0,0,0,0.1)"
              : "0 2px 10px rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-7xl mx-auto mt-1.5 flex items-center justify-between px-6 py-1 rounded-2xl border border-gray-400/50 shadow-2xl shadow-black relative overflow-hidden backdrop-blur-md"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center  cursor-pointer"
          >
            <Image
              src="https://i.ibb.co.com/B548wXKw/7f3d80c1-7e5e-47b6-ae3b-719b088c1472-removalai-preview.png"
              alt="logo"
              height={300}
              width={250}
              className="h-16 w-16"
            />
            <Link
              href="/"
              className="text-2xl font-bold text-gray-100 transition-all hover:text-gray-300/50"
            >
              Adventiq
              <span className="text-yellow-300">-Labs</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`${item}`}
                  className={`relative text-gray-200 text-base font-semibold capitalize tracking-wide transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:transition-all after:duration-300 ${
                    isActive(item)
                      ? "text-blue-400 font-semibold after:w-full"
                      : "hover:text-blue-400 hover:after:w-full"
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center justify-center gap-2">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(236,72,153,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setScheduleOpen(true)}
              className="relative bg-linear-to-r from-yellow-500 to-pink-500 text-white font-medium px-5 py-2 rounded-2xl shadow-md transition-all duration-300 hidden md:inline"
            >
              <span className="relative z-10">Schedule a call</span>
            </motion.button>

            {/* Hamburger Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-800/60 hover:text-blue-400 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden fixed top-20 left-0 w-full bg-gray-300 backdrop-blur-xl border-t border-gray-700"
            >
              <div className="flex flex-col items-start pl-6 gap-5 py-6">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <Link
                      href={`${item}`}
                      onClick={() => setMenuOpen(false)}
                      className={`text-gray-900 text-base font-medium transition ${
                        isActive(item)
                          ? "font-semibold text-blue-400"
                          : "hover:text-blue-400"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(236,72,153,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setScheduleOpen(true)}
                  className="bg-linear-to-r from-blue-500 to-pink-500 text-white font-medium px-5 py-2 rounded-2xl shadow-md transition-all duration-300 mt-3"
                >
                  Schedule a call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ScheduleCallDialog open={scheduleOpen} onOpenChange={setScheduleOpen} />
    </>
  );
}
