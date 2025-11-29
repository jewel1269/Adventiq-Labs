"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    previewType: "website" | "image" | "app";
    previewUrl?: string;
    previewImage?: string;
    description: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full overflow-y-auto bg-gray-900 animate-in fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 rounded-lg bg-gray-800 p-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400 transition-all"
        >
          <X size={28} />
        </button>

        <div className="h-[100vh] px-4 py-6 flex items-center justify-center">
          {project.previewType === "website" && project.previewUrl && (
            <iframe
              src={project.previewUrl}
              className="h-full w-full rounded-lg border border-gray-700 bg-gray-800"
              title={project.title}
              allow="fullscreen"
            />
          )}

          {project.previewType === "image" && project.previewImage && (
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative h-full w-full max-w-7xl">
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {project.previewType === "app" && project.previewImage && (
            <div className="h-full flex items-center justify-center">
              <div className="relative h-full w-[350px] max-w-full">
                <div className="relative h-full w-full rounded-3xl border-8 border-gray-700 bg-black shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={project.previewImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute left-1/2 top-0 z-20 h-7 w-40 -translate-x-1/2 rounded-b-2xl bg-black" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
