"use client";

import React from "react";
import { COMPETITIVE_EXAMS, STATS } from "../data/info";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-golden">
            [02_] Player_Stats
          </h2>
          <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed">
            &gt; Querying competitive coding records and national-level examinations registry. Status: ALL RECORDS VERIFIED.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Left Side: Competitive Coding Arena (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-accent-purple border-b-2 border-on-surface pb-2 text-left">
              Coding Arena Rankings
            </h3>

            {/* LeetCode Card */}
            <a 
              href={STATS.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-card p-5 flex items-center justify-between hover:border-accent-golden focus-ring block text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-11 w-11 items-center justify-center border-2 border-on-surface bg-surface-container-high text-accent-golden font-mono font-bold text-sm select-none shadow-[2px_2px_0px_rgba(255,255,255,0.05)]">
                  LC
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface group-hover:text-accent-golden transition-colors">LeetCode Arena</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">@{STATS.leetcode.username}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-mono text-xs font-bold text-[#50fa7b]">⚔️ {STATS.leetcode.solved} Solved</span>
                <span className="font-mono text-[10px] text-on-surface-variant">{STATS.leetcode.rating}</span>
              </div>
            </a>

            {/* Codeforces Card */}
            <a 
              href={STATS.codeforces.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-card p-5 flex items-center justify-between hover:border-accent-purple focus-ring block text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-11 w-11 items-center justify-center border-2 border-on-surface bg-surface-container-high text-accent-cyan font-mono font-bold text-sm select-none shadow-[2px_2px_0px_rgba(255,255,255,0.05)]">
                  CF
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface group-hover:text-accent-purple transition-colors">Codeforces Arena</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">@{STATS.codeforces.handle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-mono text-xs font-bold text-accent-cyan">Rating: {STATS.codeforces.rating}</span>
                <span className="font-mono text-[9px] text-accent-coral font-bold uppercase tracking-wider">{STATS.codeforces.division}</span>
              </div>
            </a>
          </div>

          {/* Right Side: National Exams Scorecard (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-accent-purple border-b-2 border-on-surface pb-2 text-left">
              National Examination Achievements
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {COMPETITIVE_EXAMS.map((exam) => (
                <div
                  key={exam.name}
                  className="neo-card p-5 flex flex-col justify-between hover:border-accent-golden transition-all"
                >
                  <div>
                    {/* Card Titlebar */}
                    <div className="flex items-center justify-between border-b border-border-custom pb-2.5 mb-4">
                      <h4 className="font-mono text-xs font-bold text-on-surface uppercase tracking-wider">{exam.name}</h4>
                      <span className="bg-[#1c2128] border border-border-custom px-2 py-0.5 font-mono text-[9px] font-bold text-accent-golden">
                        YEAR_{exam.year}
                      </span>
                    </div>

                    {/* Metrics List */}
                    <ul className="space-y-2 font-mono text-xs text-left">
                      {Object.entries(exam.metrics).map(([label, val]) => (
                        <li key={label} className="flex justify-between items-center py-0.5">
                          <span className="text-on-surface-variant text-[10px] uppercase font-bold">{label}</span>
                          <span className="font-bold text-on-surface text-[11px] bg-surface-container-high/40 px-1.5 py-0.5 border border-border-custom/50">
                            {val}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

