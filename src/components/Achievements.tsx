"use client";

import React from "react";
import { COMPETITIVE_EXAMS, STATS } from "../data/info";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-txt-main sm:text-4xl">
            Achievements & Competitions
          </h2>
          <p className="mt-4 font-sans text-base text-txt-muted">
            Highlights of my competitive programming journey and results in national-level competitive engineering and science entrance examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: Competitive Programming (5 columns equivalent) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl font-bold text-txt-main border-b border-border-line pb-2">
              Competitive Programming
            </h3>
            
            {/* LeetCode Card */}
            <div className="rounded-xl border border-border-line bg-bg-alt p-5 flex items-center justify-between hover:border-brand/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-border-line text-amber-500 font-bold text-lg">
                  L
                </div>
                <div>
                  <h4 className="font-display font-bold text-txt-main">LeetCode</h4>
                  <p className="font-sans text-xs text-txt-muted">Handle: @{STATS.leetcode.username}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-display text-base font-extrabold text-brand">{STATS.leetcode.solved} Solved</span>
                <span className="font-sans text-xs text-txt-muted">{STATS.leetcode.rank}</span>
              </div>
            </div>

            {/* Codeforces Card */}
            <div className="rounded-xl border border-border-line bg-bg-alt p-5 flex items-center justify-between hover:border-brand/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-border-line text-blue-600 font-extrabold text-lg">
                  CF
                </div>
                <div>
                  <h4 className="font-display font-bold text-txt-main">Codeforces</h4>
                  <p className="font-sans text-xs text-txt-muted">Handle: @{STATS.codeforces.handle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-display text-base font-extrabold text-brand">{STATS.codeforces.rating}</span>
                <span className="font-sans text-xs text-txt-muted">{STATS.codeforces.division}</span>
              </div>
            </div>

            {/* CodeChef Card */}
            <div className="rounded-xl border border-border-line bg-bg-alt p-5 flex items-center justify-between hover:border-brand/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-border-line text-emerald-600 font-extrabold text-lg">
                  CC
                </div>
                <div>
                  <h4 className="font-display font-bold text-txt-main">CodeChef</h4>
                  <p className="font-sans text-xs text-txt-muted">Handle: @{STATS.codechef.handle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-display text-base font-extrabold text-brand">{STATS.codechef.rating}</span>
                <span className="font-sans text-xs text-txt-muted">{STATS.codechef.stars}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Competitive Exams (7 columns equivalent) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-xl font-bold text-txt-main border-b border-border-line pb-2">
              National / State Examinations
            </h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {COMPETITIVE_EXAMS.map((exam) => (
                <div 
                  key={exam.name} 
                  className="rounded-xl border border-border-line bg-bg-alt p-6 flex flex-col justify-between hover:border-brand/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display text-lg font-bold text-txt-main">{exam.name}</h4>
                      <span className="inline-flex items-center rounded-md bg-white border border-border-line px-2 py-0.5 text-xs font-medium text-txt-muted">
                        {exam.year}
                      </span>
                    </div>
                    
                    <ul className="space-y-2.5 font-sans text-sm text-txt-muted">
                      {Object.entries(exam.metrics).map(([label, val]) => (
                        <li key={label} className="flex justify-between items-center border-b border-border-line/40 pb-1 last:border-0 last:pb-0">
                          <span className="text-xs text-txt-muted font-medium">{label}</span>
                          <span className="text-xs font-bold text-txt-main">{val}</span>
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
