import React from "react";

export const ColorTypography = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 overflow-hidden ">
        <div className="absolute -left-10 top-12 w-72 h-72 rounded-full blur-[120px] bg-linear-to-tr from-indigo-600/30 via-cyan-400/10 to-transparent animate-float-slow opacity-90" />
        <div className="absolute right-8 bottom-8 w-96 h-96 rounded-full blur-[160px] bg-linear-to-br from-blue-700/25 via-purple-600/10 to-transparent animate-float-reverse opacity-80" />
        <div className="absolute right-28 top-36 w-60 h-60 rounded-full blur-[90px] bg-linear-to-br from-teal-500/30 to-transparent animate-float opacity-90" />
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-80 h-80 rounded-full bg-linear-to-tr from-cyan-400/20 to-transparent blur-3xl opacity-60 mix-blend-screen animate-pulse-slow" />
      </div>
    </div>
  );
};
