"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "../data/info";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-txt-main sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 font-sans text-base text-txt-muted">
            A selection of software tools, libraries, and web portals I have designed and engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col justify-between rounded-xl border border-border-line bg-bg-main p-6 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-200"
            >
              <div>
                {/* Icon Placeholder or Decorative Header */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand font-bold text-lg mb-4">
                  {project.title.substring(0, 2).toUpperCase()}
                </div>

                <h3 className="font-display text-xl font-bold text-txt-main">
                  {project.title}
                </h3>
                
                <p className="mt-3 font-sans text-sm text-txt-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded bg-bg-alt px-2 py-0.5 font-sans text-[10px] font-semibold text-txt-muted uppercase tracking-wider border border-border-line/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-8 pt-4 border-t border-border-line/40 flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center font-sans text-sm font-bold text-brand hover:text-brand-hover transition-colors"
                >
                  View Case Study
                  <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-txt-muted hover:text-txt-main transition-colors focus-ring rounded-md p-1"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
