"use client";

import React from "react";
import { EDUCATION } from "../data/info";

export default function Education() {
  return (
    <section id="education" className="bg-surface py-20 border-y-2 border-on-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-golden">
            [03_] Quest_Log
          </h2>
          <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed">
            &gt; Querying education milestones logs. Timeline traces academic progression nodes.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-on-surface ml-4 sm:ml-6 md:ml-8 space-y-12 pl-6 sm:pl-10">
          {EDUCATION.map((item, index) => {
            const isActive = index === 0;

            return (
              <div key={item.stage} className="relative text-left">
                
                {/* Timeline Indicator Node (Blocky Square) */}
                <div 
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-4 w-4 border-2 border-on-surface items-center justify-center transition-colors duration-300 ${
                    isActive 
                      ? "bg-accent-golden shadow-[2px_2px_0px_rgba(255,255,255,0.1)] animate-pulse" 
                      : "bg-surface-container"
                  }`}
                />

                {/* Quest Card Container */}
                <div className={`neo-card p-6 ${isActive ? "border-accent-golden shadow-neo-gold" : "hover:border-accent-purple hover:shadow-neo-purple"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border-custom pb-3 mb-4">
                    <div>
                      {/* Quest Status Tag */}
                      <span className={`inline-flex items-center border-2 border-on-surface px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                        isActive ? "bg-accent-golden text-[#1c2128]" : "bg-surface text-on-surface-variant"
                      }`}>
                        {isActive ? "ACTIVE_QUEST" : "QUEST_COMPLETED"}
                      </span>
                      <h3 className="font-sans text-base font-bold text-on-surface mt-2">
                        {item.stage}
                      </h3>
                      <p className="font-mono text-[10px] text-on-surface-variant mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-block bg-[#1c2128] border border-border-custom px-2 py-0.5 font-mono text-[10px] font-bold text-accent-cyan select-none">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Rewards / Scholastic Metrics */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent-purple font-bold block">Quest Rewards (Milestones):</span>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {item.metrics.map((metric) => (
                        <span key={metric} className="font-mono text-[11px] font-bold text-[#50fa7b] flex items-center">
                          <span className="text-accent-golden mr-1.5 select-none">🏆</span>
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
