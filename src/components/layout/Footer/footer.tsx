"use client";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-footer-dark text-footer-text">
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-5 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container border-t border-white/10 rounded-2xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
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
            <p className="text-sm mb-6 leading-relaxed">
              Adventiq Labs delivers cutting-edge technology solutions and
              innovative products for businesses worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Platform Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Analytics Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  API Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  What is New
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-footer-text-hover transition-colors"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              Copyright © 2025 Adventiq Labs, Inc. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm hover:text-footer-text-hover transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-footer-text-hover transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm hover:text-footer-text-hover transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
