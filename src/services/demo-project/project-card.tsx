"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    description: string;
  };
  onPreview: () => void;
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-lg transition-all duration-300  hover:shadow-2xl"
    >
      {/* Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-xl bg-gray-800">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-100 line-clamp-1">
            {project.title}
          </h3>
          <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
            {project.category}
          </span>
        </div>
        <p className="mb-6 text-sm text-gray-400 line-clamp-3">
          {project.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPreview}
          className="w-full rounded-lg bg-cyan-600 py-2.5 font-semibold text-white shadow-md shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-600"
        >
          Preview
        </motion.button>
      </div>

      {/* Decorative Blur Circle */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse" />
    </motion.div>
  );
}
