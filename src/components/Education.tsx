"use client";

import React from "react";
import { EDUCATION } from "../data/info";

export default function Education() {
  return (
    <section id="education" className="bg-bg-alt py-20 border-y border-border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-txt-main sm:text-4xl">
            Education Timeline
          </h2>
          <p className="mt-4 font-sans text-base text-txt-muted">
            My academic progression, institutions, and major milestones along the way.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border-line ml-4 sm:ml-6 md:ml-8 space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={item.stage} className="relative pl-8 sm:pl-12">
              
              {/* Timeline Indicator Dot */}
              <div 
                className={`absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 bg-bg-main transition-colors duration-300 ${
                  index === 0 ? "border-brand ring-4 ring-brand-light" : "border-border-line"
                }`}
              />

              {/* Education Card */}
              <div className="rounded-xl border border-border-line bg-bg-main p-6 shadow-sm hover:border-brand/30 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center rounded-md bg-bg-alt px-2.5 py-0.5 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/15">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-txt-main mt-2">
                      {item.stage}
                    </h3>
                    <p className="font-sans text-sm font-medium text-txt-muted mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Score details */}
                <div className="mt-4 border-t border-border-line/50 pt-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="font-sans text-xs font-medium text-txt-muted flex items-center">
                        <svg className="h-1.5 w-1.5 fill-brand mr-2" viewBox="0 0 6 6">
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
