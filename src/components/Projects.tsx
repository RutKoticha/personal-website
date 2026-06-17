import React from "react";
import { getAllProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="bg-transparent py-20 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-lg uppercase tracking-wider font-bold text-accent-golden">
            [04_] Projects
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            A registry of the software platforms, API portals, and developer toolings I have designed and engineered.
          </p>
        </div>

        {/* Slotted Projects Grid in a single unified line/row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              isOngoing={project.isOngoing}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
