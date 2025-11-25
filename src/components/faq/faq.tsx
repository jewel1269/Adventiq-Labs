"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Import AnimatePresence
import { ChevronDown } from "lucide-react";

// --- Data remains the same ---
const faqs = [
  {
    question: "What is Adventiq Labs?",
    answer:
      "Adventiq Labs is an innovation-driven AI development company focused on building intelligent SaaS systems, automation tools, and next-generation digital products.",
  },
  {
    question: "What services does Adventiq Labs provide?",
    answer:
      "We provide AI-powered SaaS development, full-stack app development, LLM integrations, automation, ML solutions, and enterprise-level AI product building.",
  },
  {
    question: "Do you build custom AI solutions?",
    answer:
      "Yes, we build custom AI solutions including LLM apps, vision-based systems, automation workflows, chatbots, and intelligent SaaS tools tailored to business needs.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use Next.js, React, Node.js, Python, OpenAI/Anthropic models, TensorFlow, PyTorch, AWS, Vercel, Firebase, and more cutting-edge technologies.",
  },
  {
    question: "Do you offer product maintenance?",
    answer:
      "Yes, we offer monthly and yearly maintenance plans including updates, bug fixes, performance scaling, and new feature development.",
  },
  {
    question: "How can I contact Adventiq Labs?",
    answer:
      "You can email us at contact@adventiqlabs.com or visit our website to schedule a meeting or request product demos.",
  },
];

const answerVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5,
    },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.3,
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      {" "}
      {/* Added bg-black for context */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures animation only runs once
          className="text-center text-4xl sm:text-5xl font-extrabold mb-12"
        >
          <span className="font-serif bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                // Initial load animation for each card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                // Set layout for smooth height transitions on expand/collapse
                layout
                className={`
                  p-6 rounded-xl shadow-2xl transition-all duration-300 cursor-pointer
                  border border-zinc-700/50 backdrop-blur-md
                  ${isOpen ? " shadow-zinc-600/20" : "hover:border-zinc-500/50"}
                `}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-zinc-200"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${
                        isOpen ? "text-white" : "text-zinc-400"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer - Using AnimatePresence for smooth unmounting/mounting */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={answerVariants}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-zinc-300 leading-relaxed pt-2">
                        {" "}
                        {/* Added padding for separation */}
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
