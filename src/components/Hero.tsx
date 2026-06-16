"use client";

import React from "react";
import { PERSONAL_INFO } from "../data/info";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Asymmetric 12-column CSS grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: Copy and CTAs (lg:col-span-8 for asymmetric weighting) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border-custom bg-surface-container px-3 py-1 font-mono text-[10px] font-semibold text-accent-cyan uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#50fa7b] animate-ping"></span>
              Active_Opportunity: true
            </div>
            
            <h1 className="font-mono text-3xl font-bold tracking-tight text-on-surface sm:text-4xl md:text-5xl uppercase leading-none">
              Hi, I&apos;m <span className="text-accent-golden">{PERSONAL_INFO.name}</span>
            </h1>
            
            <p className="font-sans text-xl font-medium text-on-surface-variant sm:text-2xl">
              {PERSONAL_INFO.role}
            </p>
            
            <p className="font-sans text-sm leading-relaxed text-on-surface-variant max-w-2xl sm:text-base">
              I specialize in developing high-performance web applications and scalable backend architectures. Currently pursuing my B.Tech. in Computer Engineering at Dharmsinh Desai University, I focus on writing clean, secure, and self-documenting code.
            </p>
            
            {/* CTAs (using Monospace labels for buttons) */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Rut_Koticha_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full bg-accent-golden px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-[#1c2128] hover:bg-accent-golden/90 transition-all duration-200 focus-ring cursor-pointer select-none"
              >
                Download Resume
                <svg className="ml-2 -mr-0.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-accent-cyan px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200 focus-ring cursor-pointer select-none"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Side: Terminal Photo Frame Placeholder (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
            <div className="relative w-full max-w-sm border border-border-custom bg-surface-container rounded-sm p-4 flex items-center justify-center hover:border-accent-cyan/40 hover:bg-surface-container-high transition-all duration-300">
              {/* Interactive terminal aesthetic */}
              <div className="w-full h-full flex flex-col justify-between text-left font-mono text-xs text-on-surface-variant">
                <div className="flex items-center justify-between border-b border-border-custom pb-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5555]/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f1fa8c]/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#50fa7b]/60"></span>
                  </div>
                  <span className="text-[10px] opacity-50">terminal@rk</span>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center py-6 text-center">
                  <svg className="w-12 h-12 text-accent-cyan/60 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  <div className="space-y-1">
                    <p className="font-bold text-on-surface text-sm">Rut Koticha</p>
                    <p className="text-[10px] text-accent-cyan uppercase tracking-wider font-semibold">B.Tech. Computer Engineering</p>
                    <p className="text-[9px] opacity-40">Rajkot, Gujarat, India</p>
                  </div>
                </div>
                <div className="border-t border-border-custom pt-2 mt-4 flex items-center justify-between text-[9px] opacity-60">
                  <span>LOC: DDU, Nadiad</span>
                  <span>v1.0.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

