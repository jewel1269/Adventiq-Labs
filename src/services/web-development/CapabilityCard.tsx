import React from "react";
import { getIconComponent } from "./IconMapper";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  icon,
  color,
  bgColor,
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700/50 shadow-md flex flex-col gap-3">
      <div className={`p-3 rounded-full w-fit ${bgColor}`}>
        {React.createElement(IconComponent, {
          className: `w-6 h-6 ${color}`,
        })}
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default CapabilityCard;
