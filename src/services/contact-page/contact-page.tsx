"use client";
import Image from "next/image";
import { ChevronDown, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ScheduleCallDialog } from "../ScheduleCallModal/ScheduleCallModal";

export default function ContactPage() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12  rounded-3xl shadow-2xl  border-2 border-gray-800">
          <div className="flex flex-col justify-center items-start space-y-10 lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold font-serif text-gray-50 leading-tight"
            >
              Hey 👋 Wanna Start
              <br />
              Something Great?
            </motion.h1>

            {/* Nasher Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white/5 backdrop-blur-2x p-8 rounded-2xl shadow-xl border border-gray-600/50 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Image
                  src="https://i.ibb.co.com/Ng0Nc31L/448829167-826867872341675-6771524522266413322-n.png"
                  alt="Nasher"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white/40 shadow-lg object-cover"
                />
              </div>
              <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold text-gray-50">
                  Hi, I am Jewel
                </h2>
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  Got an idea? Let is chat on WhatsApp or jump on a quick call.
                </p>
                <div className="mt-8 flex flex-col space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 px-6 py-3  text-white font-semibold rounded-full shadow-lg border backdrop-blur-2xl border-white/30 transition-all duration-300 text-lg"
                  >
                    <MessageSquare size={20} /> Ask Questions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setScheduleOpen(true)}
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-linear-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 text-lg"
                  >
                    <Phone size={20} /> Book a Call
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white/5 backdrop-blur-2x p-8 rounded-2xl shadow-xl border border-gray-600/50">
            <form className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <input
                  type="text"
                  id="your-name"
                  placeholder=" " // Important for floating label effect
                  className="peer w-full p-4 pt-6  text-gray-50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-transparent"
                />
                <label
                  htmlFor="your-name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-300
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                           peer-focus:top-3 peer-focus:text-purple-400 peer-focus:text-xs"
                >
                  Your name
                </label>
              </motion.div>

              {/* Company Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  <input
                    type="text"
                    id="company-name"
                    placeholder=" "
                    className="peer w-full p-4 pt-6  text-gray-50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="company-name"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-300
                             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                             peer-focus:top-3 peer-focus:text-purple-400 peer-focus:text-xs"
                  >
                    Company name
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <input
                    type="email"
                    id="your-email"
                    placeholder=" "
                    className="peer w-full p-4 pt-6  text-gray-50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="your-email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-300
                             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                             peer-focus:top-3 peer-focus:text-purple-400 peer-focus:text-xs"
                  >
                    Your email
                  </label>
                  <Mail
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-purple-400 transition-colors"
                  />
                </motion.div>
              </div>

              {/* Service & Budget Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <select
                    id="service"
                    defaultValue=""
                    className="peer w-full p-4 pt-6   text-gray-50 border border-gray-600 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" disabled hidden>
                      Select a service
                    </option>
                    <option value="genai" className="bg-gray-900 text-gray-50">
                      Gen AI
                    </option>
                    <option value="webdev" className="bg-gray-900 text-gray-50">
                      Web Development
                    </option>
                    <option value="appdev" className="bg-gray-900 text-gray-50">
                      App Development
                    </option>
                    <option value="seo" className="bg-gray-900 text-gray-50">
                      SEO
                    </option>
                  </select>
                  <label
                    htmlFor="service"
                    className="absolute left-4 top-3 text-purple-400 text-xs transition-all duration-300"
                  >
                    Service
                  </label>
                  <ChevronDown
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none peer-focus:text-purple-400 transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <select
                    id="budget"
                    defaultValue=""
                    className="peer w-full p-4 pt-6  text-gray-50 border border-gray-600 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" disabled hidden>
                      Select a budget
                    </option>
                    <option value="1-5k" className="bg-gray-900 text-gray-50">
                      $1K-$5K
                    </option>
                    <option value="5-10k" className="bg-gray-900 text-gray-50">
                      $5K-$10K
                    </option>
                    <option value="10k+" className="bg-gray-900 text-gray-50">
                      $10K+
                    </option>
                  </select>
                  <label
                    htmlFor="budget"
                    className="absolute left-4 top-3 text-purple-400 text-xs transition-all duration-300"
                  >
                    Budget
                  </label>
                  <ChevronDown
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none peer-focus:text-purple-400 transition-colors"
                  />
                </motion.div>
              </div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative"
              >
                <textarea
                  id="idea-details"
                  rows={5}
                  placeholder=" "
                  className="peer w-full p-4 pt-6  text-gray-50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-transparent resize-y"
                ></textarea>
                <label
                  htmlFor="idea-details"
                  className="absolute left-4 top-3 text-gray-400 text-base transition-all duration-300
                           peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                           peer-focus:top-3 peer-focus:text-purple-400 peer-focus:text-xs"
                >
                  Tell us more about idea!
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-linear-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 text-lg tracking-wide"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <ScheduleCallDialog open={scheduleOpen} onOpenChange={setScheduleOpen} />
    </>
  );
}
