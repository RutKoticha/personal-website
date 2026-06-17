"use client";

import { COMPETITIVE_EXAMS, STATS } from "../data/info";
import Button from "./Button";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-transparent py-20 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-lg uppercase tracking-wider font-bold text-accent-golden">
            [02_] Competitive_Record
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            Highlights of my competitive programming rankings and performance in national-level competitive engineering and science entrance examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Side: Competitive Programming (5 columns equivalent) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-on-surface border-b border-border-subtle pb-2">
              Competitive Programming
            </h3>

            {/* LeetCode Card (Balanced 3-column layout) */}
            <div className="rounded-sm border border-border-subtle bg-frosted p-5 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-left">
              {/* Col 1: Logo & Name */}
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-frosted-high border border-border-subtle text-accent-golden font-mono font-bold text-base select-none">
                  LT
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface">LeetCode</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">@{STATS.leetcode.username}</p>
                </div>
              </div>
              
              {/* Col 2: Stats */}
              <div className="font-mono text-left sm:text-center">
                <span className="block text-xs font-bold text-accent-golden">{STATS.leetcode.solved} Solved</span>
                <span className="block text-[10px] text-on-surface-variant">{STATS.leetcode.rating}</span>
              </div>
              
              {/* Col 3: Button */}
              <div className="flex justify-start sm:justify-end">
                <Button href={STATS.leetcode.url} target="_blank" rel="noopener noreferrer" className="py-1.5 px-4 text-[10px] w-full sm:w-auto">
                  Profile
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Codeforces Card (Balanced 3-column layout) */}
            <div className="rounded-sm border border-border-subtle bg-frosted p-5 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-left">
              {/* Col 1: Logo & Name */}
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-frosted-high border border-border-subtle text-accent-golden font-mono font-bold text-base select-none">
                  CF
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface">Codeforces</h4>
                  <p className="font-mono text-[10px] text-on-surface-variant">@{STATS.codeforces.handle}</p>
                </div>
              </div>
              
              {/* Col 2: Stats */}
              <div className="font-mono text-left sm:text-center">
                <span className="block text-xs font-bold text-accent-golden">Rating: {STATS.codeforces.rating}</span>
                <span className="block text-[9px] text-on-surface-variant uppercase tracking-wider font-semibold">{STATS.codeforces.division}</span>
              </div>
              
              {/* Col 3: Button */}
              <div className="flex justify-start sm:justify-end">
                <Button href={STATS.codeforces.url} target="_blank" rel="noopener noreferrer" className="py-1.5 px-4 text-[10px] w-full sm:w-auto">
                  Profile
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Competitive Exams (7 columns equivalent) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-on-surface border-b border-border-subtle pb-2">
              National / State Examinations
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {COMPETITIVE_EXAMS.map((exam) => (
                <div
                  key={exam.name}
                  className="rounded-sm border border-border-subtle bg-frosted p-6 flex flex-col justify-between hover:border-border-subtle-active transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-mono text-xs font-bold text-on-surface uppercase tracking-wide">{exam.name}</h4>
                      <span className="inline-flex items-center rounded bg-frosted-high border border-border-subtle px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-golden">
                        {exam.year}
                      </span>
                    </div>

                    <ul className="space-y-2.5 font-sans text-xs text-on-surface-variant">
                      {Object.entries(exam.metrics).map(([label, val]) => (
                        <li key={label} className="flex justify-between items-center border-b border-border-subtle/50 pb-1.5 last:border-0 last:pb-0">
                          <span className="text-[11px] text-on-surface-variant font-medium">{label}</span>
                          <span className="font-mono text-xs font-bold text-on-surface">{val}</span>
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
