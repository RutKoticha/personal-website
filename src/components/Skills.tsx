"use client";

import React from "react";
import { SKILLS } from "../data/info";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      description: "Programming and scripting languages that I use daily.",
      items: SKILLS.languages,
      isCoral: false,
    },
    {
      title: "Frameworks",
      description: "Application frameworks and UI runtime environments.",
      items: SKILLS.technologies,
      isCoral: false,
    },
    {
      title: "Databases",
      description: "Relational and NoSQL database management systems.",
      items: SKILLS.databases,
      isCoral: false,
    },
    {
      title: "Tools & OS",
      description: "Version control, container tools, and shell utilities.",
      items: SKILLS.tools || [],
      isCoral: true,
    },
  ];

  return (
    <section id="skills" className="bg-surface py-20 border-y border-border-custom">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-cyan">
            [01_] Technical_Capabilities
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            A precise registry of the languages, frameworks, database technologies, and development tools I deploy to build robust and scalable systems.
          </p>
        </div>

        {/* Categories Grid - Asymmetric / balanced grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="flex flex-col justify-between rounded-sm border border-border-custom bg-surface-container p-6 hover:border-border-custom-active transition-colors duration-250"
            >
              <div>
                <h3 className="font-sans text-base font-bold text-on-surface">
                  {category.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-on-surface-variant leading-normal min-h-[36px]">
                  {category.description}
                </p>
                
                {/* Badges Grid (Pill-shaped tech chips) */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full bg-surface-container-high px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider border border-border-custom hover:border-border-custom-active transition-colors duration-150 cursor-default select-none ${
                        category.isCoral ? "text-accent-coral" : "text-accent-cyan"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
