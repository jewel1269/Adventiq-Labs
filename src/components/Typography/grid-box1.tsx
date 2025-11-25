import React from "react";

export const GridBox1 = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 opacity-[0.01] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 -z-5 opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
};
