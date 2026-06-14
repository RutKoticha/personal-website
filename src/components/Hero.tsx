"use client";

import React from "react";
import { PERSONAL_INFO } from "../data/info";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center bg-bg-main py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: Copy and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center rounded-md bg-brand-light px-3 py-1 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/10 uppercase tracking-widest">
              Available for Opportunities
            </span>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-txt-main sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-brand">{PERSONAL_INFO.name}</span>
            </h1>
            
            <p className="font-display text-2xl font-bold text-txt-muted sm:text-3xl">
              {PERSONAL_INFO.role}
            </p>
            
            <p className="font-sans text-base leading-relaxed text-txt-muted max-w-2xl sm:text-lg">
              I specialize in developing high-performance web applications and backend systems. Currently pursuing my B.Tech. in Computer Engineering at Dharmsinh Desai University, I focus on writing clean, maintainable, and self-documenting code.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Rut_Koticha_Resume.pdf"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover transition-colors duration-200 focus-ring"
              >
                Download Resume
                <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border-line bg-white px-6 py-3 text-sm font-semibold text-txt-main hover:bg-bg-alt hover:border-txt-main/20 transition-all duration-200 focus-ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Side: Photo Frame Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative border/shadow layout */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand to-brand-hover opacity-20 blur-md transition duration-500 group-hover:opacity-30"></div>
              
              {/* Photo box */}
              <div className="relative flex items-center justify-center w-full h-full rounded-2xl border border-border-line bg-bg-alt p-4 text-center select-none overflow-hidden">
                {/* 
                  When the user adds a photo (e.g. public/avatar.jpg), they can replace this with:
                  <img src="/avatar.jpg" alt="Rut Koticha" className="w-full h-full object-cover rounded-xl" />
                */}
                <div className="flex flex-col items-center justify-center space-y-4 text-txt-muted/60">
                  <svg className="w-16 h-16 text-txt-muted/30" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-txt-main/60">Profile Photo Frame</p>
                    <p className="text-xs mt-1">Place image at <code className="bg-bg-main px-1 py-0.5 rounded">public/avatar.jpg</code></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
