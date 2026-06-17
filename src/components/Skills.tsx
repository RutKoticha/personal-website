"use client";

import React from "react";
import { SKILLS } from "../data/info";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      description: "Programming and scripting languages that I use daily.",
      items: SKILLS.languages,
      isPurple: false,
    },
    {
      title: "Frameworks",
      description: "Application frameworks and UI runtime environments.",
      items: SKILLS.technologies,
      isPurple: false,
    },
    {
      title: "Databases",
      description: "Relational and NoSQL database management systems.",
      items: SKILLS.databases,
      isPurple: false,
    },
    {
      title: "Tools & OS",
      description: "Version control, container tools, and shell utilities.",
      items: SKILLS.tools || [],
      isPurple: false,
    },
  ];

  return (
    <section id="skills" className="bg-transparent py-20 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-lg uppercase tracking-wider font-bold text-accent-golden">
            [01_] Technical_Capabilities
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            A precise registry of the languages, frameworks, database technologies, and development tools I deploy to build robust and scalable systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="flex flex-col justify-between rounded-sm frosted-card p-6 hover:border-border-subtle-active transition-colors duration-250"
            >
              <div>
                <h3 className="font-mono text-sm font-bold text-on-surface">
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
                      className={`inline-flex items-center rounded-sm bg-frosted-high px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-border-subtle hover:border-border-subtle-active transition-colors duration-150 cursor-default select-none ${
                        category.isPurple ? "text-accent-purple" : "text-accent-cyan"
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
