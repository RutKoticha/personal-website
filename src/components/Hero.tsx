"use client";

import React from "react";
import { PERSONAL_INFO } from "../data/info";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center bg-transparent pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-mono text-4xl font-bold tracking-tight text-on-surface sm:text-5xl md:text-6xl uppercase leading-none">
              Hi, I&apos;m <span className="text-accent-golden">{PERSONAL_INFO.name}</span>
            </h1>
            
            <p className="font-sans text-sm leading-relaxed text-on-surface-variant max-w-xl sm:text-base">
              A Computer Engineering student building practical experience in full-stack development through hands-on projects, focused on writing clean, SOLID-compliant code and designing intuitive, minimalist user interfaces.
            </p>
            
            {/* CTAs using the common Button component */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                href={PERSONAL_INFO.resumeUrl}
                download="Rut_Koticha_Resume.pdf"
              >
                Download Resume
                <svg className="ml-2 -mr-0.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </Button>
              <Button href="#contact">
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Right Column: Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
            <div className="w-full max-w-sm aspect-square relative rounded-lg border border-border-subtle bg-frosted overflow-hidden flex items-center justify-center">
              <img 
                src="/Rut-Koticha-Profile-Sticker.png"
                alt="Rut Koticha - Profile" 
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
