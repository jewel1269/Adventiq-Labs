// components/toast/CustomToast.tsx
"use client";

import React from "react";
import toast, { Toast } from "react-hot-toast";
import { CheckCircle, XCircle, Loader2, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "success" | "error" | "loading" | "info";

interface CustomToastProps {
  t: Toast;
  title?: string;
  description?: string;
  variant?: Variant;
  action?: {
    label: string;
    onClick: () => void;
  };
  link?: { label: string; href: string };
}

const iconByVariant = {
  success: <CheckCircle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
  loading: <Loader2 className="w-5 h-5 animate-spin" />,
  info: <ExternalLink className="w-5 h-5" />,
};

export function CustomToast({
  t,
  title,
  description,
  variant = "info",
  action,
  link,
}: CustomToastProps) {
  // Use t.visible to animate in/out
  return (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 6 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-md"
        >
          <div
            role="status"
            className={`
              relative flex gap-4 items-start p-4 rounded-xl shadow-lg
              border ${variant === "success" ? "border-green-500/30" : ""}
              ${variant === "error" ? "border-red-500/30" : ""}
              bg-linear-to-r from-gray-800/80 to-gray-900/80
              backdrop-blur-sm text-white
            `}
          >
            {/* Left: Icon */}
            <div
              className={`
                flex-shrink-0 p-2 rounded-lg
                ${variant === "success" ? "bg-green-500/10" : ""}
                ${variant === "error" ? "bg-red-500/10" : ""}
                ${variant === "loading" ? "bg-yellow-400/10" : ""}
              `}
            >
              <div className="text-yellow-400">{iconByVariant[variant]}</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {title && <div className="font-semibold text-sm">{title}</div>}
              {description && (
                <div className="text-xs text-gray-300 truncate mt-1">
                  {description}
                </div>
              )}

              {/* optional link */}
              {link && (
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    if (link.href) window.open(link.href, "_blank");
                  }}
                  className="inline-flex items-center gap-2 mt-3 text-xs text-yellow-400 hover:underline cursor-pointer"
                >
                  {link.label} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Right: actions */}
            <div className="flex flex-col items-end gap-2">
              {/* Action button */}
              {action && (
                <button
                  onClick={(ev) => {
                    ev.stopPropagation();
                    action.onClick();
                    toast.dismiss(t.id);
                  }}
                  className="px-3 py-1 text-xs rounded-lg bg-yellow-400 text-black font-medium hover:opacity-95"
                >
                  {action.label}
                </button>
              )}

              {/* Close button */}
              <button
                onClick={(ev) => {
                  ev.stopPropagation();
                  toast.dismiss(t.id);
                }}
                className="p-1 -mr-1 rounded hover:bg-white/5"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-gray-300" />
              </button>

              {/* timestamp (small) */}
              <div className="text-[11px] text-gray-400 mt-1">
                {/* show remaining time if duration known, otherwise just "now" */}
                {t.duration === Infinity
                  ? "—"
                  : `${Math.max(0, Math.round((t.duration ?? 5000) / 1000))}s`}
              </div>
            </div>

            {/* Progress bar */}
            {t.visible && t.duration !== Infinity && (
              <div
                className="absolute left-0 right-0 bottom-0 h-1 rounded-b-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* We'll animate width via CSS variable provided by react-hot-toast */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    transformOrigin: "left",
                    animation: `toast-progress ${t.duration}ms linear`,
                  }}
                  className={`
                    h-full
                    ${variant === "success" ? "bg-green-400" : ""}
                    ${variant === "error" ? "bg-red-400" : ""}
                    ${variant === "loading" ? "bg-yellow-400" : "bg-yellow-400"}
                  `}
                />
              </div>
            )}
          </div>

          <style jsx>{`
            @keyframes toast-progress {
              from {
                transform: scaleX(1);
              }
              to {
                transform: scaleX(0);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
