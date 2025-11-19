"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Calendar as CalendarIcon,
  Video,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

interface ScheduleCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleCallDialog({
  open,
  onOpenChange,
}: ScheduleCallDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [meetingType, setMeetingType] = useState<"google-meet" | null>(null);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  useEffect(() => {
    if (open) {
      setStep(1);
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 900);
      return () => clearTimeout(timer);
    } else {
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setMeetingType(null);
      setIsLoading(true);
    }
  }, [open]);

  const handleConfirm = () => {
    alert(
      `Meeting scheduled on ${format(selectedDate!, "PPP")} at ${selectedTime}`
    );
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[950px] max-w-none 
          max-h-[80vh] overflow-y-auto
          bg-gray-900/50 backdrop-blur-xl
          border border-gray-700 
          rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
          p-10
        "
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-white flex items-center gap-3">
            Schedule a Call
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Follow the steps to schedule a session with us
          </DialogDescription>
        </DialogHeader>

        {/* STEP INDICATOR */}
        <div className="flex justify-between mt-6 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center w-full">
              <motion.div
                animate={{
                  backgroundColor: step >= s ? "#facc15" : "#374151",
                  scale: step === s ? 1.2 : 1,
                }}
                className="h-10 w-10 rounded-full flex items-center justify-center text-black font-bold"
              >
                {s}
              </motion.div>
              <div className="mt-2 text-gray-400 text-sm">
                {s === 1 && "Meeting Type"}
                {s === 2 && "Date & Time"}
                {s === 3 && "Confirm"}
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <Loader2 className="h-10 w-10 animate-spin text-yellow-400" />
              <p className="text-gray-400 mt-3">Loading…</p>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* STEP 1 — Meeting Type */}
              {step === 1 && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white">
                    Choose Meeting Type
                  </h3>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMeetingType("google-meet")}
                    className={`
                      p-6 rounded-2xl w-full border-2
                      flex items-center gap-4 transition-all
                      ${
                        meetingType === "google-meet"
                          ? "border-yellow-400 bg-yellow-400/10"
                          : "border-gray-700 hover:border-yellow-400/40"
                      }
                    `}
                  >
                    <div className="h-12 w-12 rounded-full bg-yellow-400/10 flex items-center justify-center">
                      <Video className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Google Meet</p>
                      <p className="text-gray-400 text-sm">Video conference</p>
                    </div>
                  </motion.button>

                  <div className="flex justify-end">
                    <Button
                      disabled={!meetingType}
                      onClick={() => setStep(2)}
                      className="bg-yellow-400 text-black px-8 py-5 rounded-xl font-semibold hover:opacity-90"
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2 — Date & Time */}
              {step === 2 && (
                <div className="space-y-10">
                  {/* Date */}
                  <div>
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
                      <CalendarIcon className="h-5 w-5" />
                      Select Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-xl lg:w-[420px] border border-gray-700 bg-gray-800/50"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Select Time
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                          className={`
                            p-3 rounded-xl border transition-all text-white
                            ${
                              selectedTime === time
                                ? "bg-yellow-400 text-black font-semibold border-yellow-400"
                                : "border-gray-700 hover:border-yellow-400/50 hover:bg-yellow-400/10"
                            }
                            disabled:opacity-40 disabled:cursor-not-allowed
                          `}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep(1)}
                      className="bg-gray-700 text-white px-6 py-5 rounded-xl"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    <Button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(3)}
                      className="bg-yellow-400 text-black px-8 py-5 rounded-xl font-semibold hover:opacity-90"
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3 — Confirm */}
              {step === 3 && (
                <div className="space-y-10">
                  <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-400" /> Review
                      Details
                    </h3>

                    <div className="text-gray-300 space-y-3">
                      <p>
                        <strong className="text-white">Meeting Type:</strong>{" "}
                        Google Meet
                      </p>
                      <p>
                        <strong className="text-white">Date:</strong>{" "}
                        {selectedDate ? format(selectedDate, "PPP") : ""}
                      </p>
                      <p>
                        <strong className="text-white">Time:</strong>{" "}
                        {selectedTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep(2)}
                      className="bg-gray-700 text-white px-6 py-5 rounded-xl"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    <Button
                      onClick={handleConfirm}
                      className="bg-linear-to-r from-yellow-400 to-pink-500 text-black px-8 py-5 rounded-xl font-semibold"
                    >
                      Confirm & Schedule
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
