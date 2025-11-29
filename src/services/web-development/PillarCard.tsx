import React from "react";
import { getIconComponent } from "./IconMapper";

interface PillarCardProps {
  title: string;
  description: string;
  details: string;
  icon: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  title,
  description,
  details,
  icon,
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <div className="flex flex-col p-6 bg-gray-800/50 rounded-xl border border-cyan-700/30 shadow-xl h-full">
      <div className="flex items-center gap-4 mb-4">
        {React.createElement(IconComponent, {
          className: "w-8 h-8 text-cyan-400",
        })}
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      <p className="text-sm font-semibold text-cyan-300 mb-2">{description}</p>
      <p className="text-gray-400 text-sm">{details}</p>
    </div>
  );
};

export default PillarCard;
