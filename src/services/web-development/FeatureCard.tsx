import React from "react";
import { getIconComponent } from "./IconMapper";

interface FeatureCardProps {
  title: string;
  details: string;
  icon: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  details,
  icon,
  link,
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <a
      href={link}
      className="flex flex-col p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:bg-gray-700/60 group h-full"
    >
      <div className="flex items-center mb-4">
        {React.createElement(IconComponent, {
          className:
            "w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors",
        })}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{details}</p>
    </a>
  );
};

export default FeatureCard;
