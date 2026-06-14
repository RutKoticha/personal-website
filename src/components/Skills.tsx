"use client";

import React from "react";
import { SKILLS } from "../data/info";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      description: "Programming and scripting languages that I use daily or have worked with.",
      items: SKILLS.languages,
    },
    {
      title: "Technologies & Frameworks",
      description: "Libraries, application frameworks, and runtime environments.",
      items: SKILLS.technologies,
    },
    {
      title: "Databases",
      description: "Relational and NoSQL database management systems.",
      items: SKILLS.databases,
    },
  ];

  return (
    <section id="skills" className="bg-bg-alt py-20 border-y border-border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-txt-main sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 font-sans text-base text-txt-muted">
            A comprehensive overview of the programming languages, framework environments, and database technologies I leverage to build robust software solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="flex flex-col justify-between rounded-xl border border-border-line bg-bg-main p-6 shadow-sm hover:border-brand/30 transition-colors duration-200"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-txt-main">
                  {category.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-txt-muted leading-relaxed">
                  {category.description}
                </p>
                
                {/* Badges Grid */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-border-line bg-bg-alt px-3 py-1.5 font-sans text-xs font-semibold text-txt-main hover:border-brand/40 hover:text-brand transition-colors duration-150 cursor-default select-none"
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
