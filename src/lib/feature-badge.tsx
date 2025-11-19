"use client";

interface FeatureBadgeProps {
  feature: {
    label: string;
    color: string;
    icon: string;
  };
}

export default function FeatureBadge({ feature }: FeatureBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/80 group cursor-pointer`}
    >
      {/* Colored icon dot */}
      <div
        className={`flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-xs font-bold text-white`}
      >
        {feature.icon}
      </div>
      <span>{feature.label}</span>
    </div>
  );
}
