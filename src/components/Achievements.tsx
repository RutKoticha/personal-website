"use client";

import { COMPETITIVE_EXAMS, STATS } from "../data/info";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-cyan">
            [02_] Competitive_Record
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            Highlights of my competitive programming rankings and performance in national-level competitive engineering and science entrance examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Side: Competitive Programming (5 columns equivalent) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans text-sm uppercase tracking-wider font-bold text-on-surface border-b border-border-custom pb-2">
              Competitive Programming
            </h3>

            {/* LeetCode Card */}
            <a 
              href={STATS.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-custom bg-surface-container p-5 flex items-center justify-between hover:border-border-custom-active transition-all focus-ring block"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-surface-container-high border border-border-custom text-accent-golden font-mono font-bold text-lg">
                  LT
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface">LeetCode</h4>
                  <p className="font-mono text-xs text-on-surface-variant">@{STATS.leetcode.username}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-mono text-sm font-bold text-accent-golden">{STATS.leetcode.solved} Solved</span>
                <span className="font-mono text-xs text-on-surface-variant">{STATS.leetcode.rating}</span>
              </div>
            </a>

            {/* Codeforces Card */}
            <a 
              href={STATS.codeforces.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-custom bg-surface-container p-5 flex items-center justify-between hover:border-border-custom-active transition-all focus-ring block"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-surface-container-high border border-border-custom text-accent-cyan font-mono font-bold text-lg">
                  CF
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface">Codeforces</h4>
                  <p className="font-mono text-xs text-on-surface-variant">@{STATS.codeforces.handle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-mono text-sm font-bold text-accent-cyan">Rating: {STATS.codeforces.rating}</span>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">{STATS.codeforces.division}</span>
              </div>
            </a>
          </div>

          {/* Right Side: Competitive Exams (7 columns equivalent) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-sm uppercase tracking-wider font-bold text-on-surface border-b border-border-custom pb-2">
              National / State Examinations
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {COMPETITIVE_EXAMS.map((exam) => (
                <div
                  key={exam.name}
                  className="rounded-sm border border-border-custom bg-surface-container p-6 flex flex-col justify-between hover:border-border-custom-active transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wide">{exam.name}</h4>
                      <span className="inline-flex items-center rounded bg-surface-container-high border border-border-custom px-2 py-0.5 font-mono text-xs font-semibold text-accent-cyan">
                        {exam.year}
                      </span>
                    </div>

                    <ul className="space-y-2.5 font-sans text-sm text-on-surface-variant">
                      {Object.entries(exam.metrics).map(([label, val]) => (
                        <li key={label} className="flex justify-between items-center border-b border-border-custom/50 pb-1 last:border-0 last:pb-0">
                          <span className="text-xs text-on-surface-variant font-medium">{label}</span>
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

