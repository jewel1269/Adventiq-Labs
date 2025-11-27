"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import axios from "axios";

type Step = 1 | 2;

interface FormData {
  meetingType: string;
  date?: Date;
  time?: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

export function ScheduleCallWizard() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    meetingType: "consultation",
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const meetingTypes = [
    { id: "consultation", label: "Consultation" },
    { id: "demo", label: "Product Demo" },
    { id: "support", label: "Technical Support" },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleNextStep = () => {
    if (currentStep === 1 && formData.date && formData.time) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "https://n8n.srv1106977.hstgr.cloud/webhook/schedule",
        formData
      );

      console.log(res.data);
      alert(`Meeting scheduled! Confirmation sent to ${formData.email}`);
    } catch (err) {
      console.error(err);
      alert("Webhook failed!");
    }

    setIsSubmitting(false);
    setCurrentStep(1);
  };

  const isStep1Valid = formData.date && formData.time;
  const isStep2Valid = formData.name.trim() && formData.email.trim();

  return (
    <div className="lg:py-32 py-24 bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Schedule a Call
            </h1>
            <div className="text-sm font-medium text-gray-300">
              Step {currentStep} of 2
            </div>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-cyan-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: currentStep === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Card */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
          layout
        >
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 px-6">
              <Loader2 className="h-10 w-10 animate-spin text-cyan-500 mb-4" />
              <p className="text-gray-300">Loading calendar...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-lg font-semibold text-white mb-6">
                    Choose Meeting Type, Date & Time
                  </h2>

                  {/* Meeting Type */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Meeting Type
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                      {meetingTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setFormData({ ...formData, meetingType: type.id })
                          }
                          className={`py-3 px-4 rounded-lg border-2 font-medium transition-all text-sm ${
                            formData.meetingType === type.id
                              ? "border-cyan-500 bg-cyan-900 text-cyan-100"
                              : "border-gray-600 bg-gray-800 text-gray-300 hover:border-cyan-400"
                          }`}
                        >
                          {type.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Select Date
                    </label>

                    <div className="bg-gray-800 lg:w-96 rounded-lg p-4 inline-block">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        disabled={(date) =>
                          date < new Date() ||
                          date.getDay() === 0 ||
                          date.getDay() === 6
                        }
                        className="rounded-lg w-full bg-gray-800 text-white"
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-2">Weekdays only</p>
                  </div>

                  {/* Time Slots */}
                  {formData.date && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Select Time
                      </label>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFormData({ ...formData, time })}
                            className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                              formData.time === time
                                ? "border-cyan-500 bg-cyan-500 text-white"
                                : "border-gray-600 text-gray-300 hover:border-cyan-400"
                            }`}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Summary */}
                  <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Summary
                    </h3>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>
                        Type:{" "}
                        <span className="font-medium">
                          {
                            meetingTypes.find(
                              (t) => t.id === formData.meetingType
                            )?.label
                          }
                        </span>
                      </p>
                      <p>
                        Date:{" "}
                        <span className="font-medium">
                          {formData.date
                            ? format(formData.date, "MMM d, yyyy")
                            : "Not selected"}
                        </span>
                      </p>
                      <p>
                        Time:{" "}
                        <span className="font-medium">
                          {formData.time || "Not selected"}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-lg font-semibold text-white mb-6">
                    Your Information
                  </h2>

                  <div className="space-y-4 mb-8">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        placeholder="Tell us more about your inquiry..."
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-4 bg-cyan-900 border border-cyan-800 rounded-lg mb-8">
                    <h3 className="text-sm font-semibold text-cyan-100 mb-3">
                      Booking Details
                    </h3>
                    <div className="text-sm text-cyan-200 space-y-1">
                      <p>
                        📅{" "}
                        {formData.date
                          ? format(formData.date, "EEEE, MMM d")
                          : "N/A"}{" "}
                        at {formData.time}
                      </p>
                      <p>
                        🎯{" "}
                        {
                          meetingTypes.find(
                            (t) => t.id === formData.meetingType
                          )?.label
                        }
                      </p>
                      <p>⏱️ 30 minutes</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Footer Actions */}
          {!isLoading && (
            <div className="flex gap-3 p-6 md:p-8 border-t border-gray-700 bg-gray-800">
              {currentStep === 2 && (
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="flex-1 bg-gray-800 text-white border-gray-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}

              {currentStep === 1 && (
                <Button
                  onClick={handleNextStep}
                  disabled={!isStep1Valid}
                  className="flex-1 ml-auto bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}

              {currentStep === 2 && (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStep2Valid || isSubmitting}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Confirming...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-6">
          You will receive a confirmation email and Google Meet link
        </p>
      </div>
    </div>
  );
}
