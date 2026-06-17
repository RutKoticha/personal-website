"use client";

import React from "react";
import { EDUCATION } from "../data/info";

export default function Education() {
  return (
    <section id="education" className="bg-transparent py-20 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-lg uppercase tracking-wider font-bold text-accent-golden">
            [03_] Academic_Timeline
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            My academic progression, institutions, and key scholastic milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-border-subtle ml-4 sm:ml-6 md:ml-8 space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={item.stage} className="relative pl-8 sm:pl-12">
              
              {/* Timeline Indicator Dot */}
              <div 
                className={`absolute -left-[5.5px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border transition-colors duration-300 ${
                  index === 0 ? "border-accent-golden bg-accent-golden ring-4 ring-accent-golden/25" : "border-border-subtle bg-frosted"
                }`}
              />

              {/* Education Card (Frosted) */}
              <div className="rounded-sm frosted-card p-6 hover:border-border-subtle-active transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center rounded-sm bg-frosted-high px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-golden border border-border-subtle">
                      {item.year}
                    </span>
                    <h3 className="font-sans text-sm font-bold text-on-surface mt-2.5">
                      {item.stage}
                    </h3>
                    <p className="font-sans text-xs text-on-surface-variant mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Score details */}
                <div className="mt-4 border-t border-border-subtle/50 pt-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="font-mono text-[10px] font-medium text-on-surface-variant flex items-center">
                        <svg className="h-1.5 w-1.5 fill-accent-golden mr-2" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
