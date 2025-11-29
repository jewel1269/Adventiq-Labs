"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";
import { PROJECTS } from "@/utils/project-data/projects-data";
import { GridBox1 } from "@/components/Typography/grid-box1";
import { ColorTypography } from "@/components/Typography/color";

type Category = "All" | "Custom" | "WordPress" | "AI Agent" | "App";

const CATEGORIES: Category[] = [
  "All",
  "Custom",
  "WordPress",
  "AI Agent",
  "App",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen pt-24 ">
      <ColorTypography />
      <GridBox1 />
      {/* Header Section */}
      <div className="py-5">
        <div className="mx-auto font-serif max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-100 sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Explore a curated showcase of custom solutions, WordPress sites, AI
            agents, and mobile applications.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className=" py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreview={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-xl text-gray-400">
                No projects found in this category. Try selecting another.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
