import React from "react";
import { Briefcase, Clock } from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* Gradient Icon Background */}
      <div className="p-5 rounded-full bg-linear-to-br from-cyan-500 via-cyan-600 to-cyan-400 shadow-lg mb-6 animate-fadeIn">
        <Briefcase size={55} className="text-white" />
      </div>

      <h1 className="text-4xl font-extrabold mb-3 animate-fadeIn">
        Career Opportunities
      </h1>

      {/* Colorful icon */}
      <Clock
        size={40}
        className="text-cyan-600 mb-4 animate-fadeIn"
        style={{ animationDelay: "0.2s" }}
      />

      <p
        className="text-lg text-gray-600 max-w-lg animate-fadeIn"
        style={{ animationDelay: "0.35s" }}
      >
        We are crafting something amazing for talented individuals like you.
        <br />
        <span className="font-semibold text-cyan-600">
          Exciting job opportunities are coming soon!
        </span>
      </p>
    </div>
  );
};

export default Career;
