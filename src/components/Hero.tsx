"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/info";

export default function Hero() {
  const [logs, setLogs] = useState<string[]>([
    "Booting CE_CORE v1.0.0...",
    "Loading student_data: Dharmsinh Desai University",
    "Loading stats: GATE (AIR 11705), GUJCET (98.45%)",
    "Initializing editor: Neovim v0.10.0 (lua-backed)",
    "Status: Ready to forge systems."
  ]);

  // Terminal log animator loop
  useEffect(() => {
    const additionalLogs = [
      "Running database checks... OK",
      "Syncing git repo activity... OK",
      "Scanning security vault credentials... SECURE",
      "Active Opportunity: TRUE"
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index < additionalLogs.length) {
        setLogs((prev) => [...prev.slice(1), additionalLogs[index]]);
        index++;
      } else {
        index = 0; // loop
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Asymmetric 12-column Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Column 1: Character Stats Sheet (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Active Opportunity Indicator */}
            <div className="inline-flex items-center gap-2 border-2 border-on-surface bg-surface-container px-3 py-1 font-mono text-[10px] font-bold text-accent-cyan uppercase tracking-wider select-none shadow-[2px_2px_0px_#8be9fd]">
              <span className="h-2 w-2 bg-[#50fa7b] border border-on-surface animate-ping"></span>
              Active_Opportunity: true
            </div>
            
            {/* Title & Role */}
            <div className="space-y-2 text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl uppercase leading-none">
                Hi, I&apos;m <span className="text-accent-golden font-bold block sm:inline">{PERSONAL_INFO.name}</span>
              </h1>
              <div className="font-mono text-sm font-bold text-accent-purple tracking-widest uppercase">
                &lt;Class: {PERSONAL_INFO.role} /&gt;
              </div>
            </div>

            {/* RPG Status Bars */}
            <div className="neo-card p-5 space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-border-custom pb-2">
                <span className="font-mono text-xs font-bold text-on-surface uppercase">Character Attributes</span>
                <span className="font-mono text-[10px] text-accent-golden uppercase font-bold">LVL.20 Developer</span>
              </div>

              {/* HP (GUJCET Logic Score) */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono font-bold">
                  <span className="text-[#ff5555]">HP [LOGIC]: GUJCET</span>
                  <span>98.45% (102.75/120)</span>
                </div>
                <div className="w-full h-4 border-2 border-on-surface bg-[#1c2128] overflow-hidden p-[2px]">
                  <div 
                    className="h-full bg-[#ff5555] border-r-2 border-on-surface transition-all duration-500" 
                    style={{ width: "98.45%" }}
                  ></div>
                </div>
              </div>

              {/* MP (JEE Mains Percentile) */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono font-bold">
                  <span className="text-[#8be9fd]">MP [ADAPTABILITY]: JEE</span>
                  <span>94.45% (AIR 62.9k)</span>
                </div>
                <div className="w-full h-4 border-2 border-on-surface bg-[#1c2128] overflow-hidden p-[2px]">
                  <div 
                    className="h-full bg-[#8be9fd] border-r-2 border-on-surface transition-all duration-500" 
                    style={{ width: "94.45%" }}
                  ></div>
                </div>
              </div>

              {/* Stamina (DDU CGPA Performance) */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono font-bold">
                  <span className="text-[#50fa7b]">STAMINA [SYSTEMS]: CGPA</span>
                  <span>80.60% (8.06/10.0)</span>
                </div>
                <div className="w-full h-4 border-2 border-on-surface bg-[#1c2128] overflow-hidden p-[2px]">
                  <div 
                    className="h-full bg-[#50fa7b] border-r-2 border-on-surface transition-all duration-500" 
                    style={{ width: "80.6%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Character Equipment Inventory */}
            <div className="neo-card p-4 text-left space-y-3 bg-surface-container-high border-2 border-on-surface">
              <h4 className="font-mono text-xs font-bold text-accent-purple border-b border-border-custom pb-1 uppercase">Equipped Relics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px]">
                <div className="flex items-center gap-2 p-1.5 border border-border-custom bg-surface rounded-none">
                  <span className="text-accent-golden">⚔️</span>
                  <span><strong>Wpn:</strong> Neovim</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 border border-border-custom bg-surface rounded-none">
                  <span className="text-accent-coral">🛡️</span>
                  <span><strong>Armr:</strong> Linux OS</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 border border-border-custom bg-surface rounded-none">
                  <span className="text-accent-cyan">📜</span>
                  <span><strong>Spell:</strong> Spring Boot</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Rut_Koticha_Resume.pdf"
                className="neo-btn-gold inline-flex items-center justify-center bg-accent-golden px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold text-[#1c2128] hover:bg-accent-golden transition-all focus-ring select-none"
              >
                Download Resume
                <svg className="ml-2 h-4 w-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="neo-btn inline-flex items-center justify-center bg-surface px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold text-on-surface focus-ring select-none"
              >
                Connect Interface
              </a>
            </div>
          </div>
          
          {/* Column 2: Simulated Neovim Terminal Mockup (lg:col-span-6) */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end w-full">
            <div className="neo-card-gold w-full max-w-xl overflow-hidden p-0 flex flex-col">
              
              {/* Terminal Titlebar */}
              <div className="bg-surface-container-high border-b-2 border-on-surface px-4 py-2 flex items-center justify-between font-mono text-xs text-on-surface-variant select-none">
                <div className="flex items-center gap-2">
                  <span className="text-accent-golden font-bold">NVIM</span>
                  <span className="opacity-40">|</span>
                  <span className="text-[10px]">init.lua</span>
                </div>
                <div className="text-[10px] bg-surface-container px-2 py-0.5 border border-border-custom text-accent-cyan">
                  utf-8
                </div>
              </div>
              
              {/* Nvim Code Workspace */}
              <div className="p-4 bg-[#1c2128] font-mono text-xs text-left overflow-x-auto min-h-[220px] flex flex-col justify-between">
                
                {/* Simulated Editor Lines */}
                <div className="space-y-1">
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">1</span>
                    <span className="text-accent-coral">local</span> developer <span className="text-accent-purple">=</span> <span className="text-accent-cyan">&#123;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">2</span>
                    <span className="opacity-50">  </span>name <span className="text-accent-purple">=</span> <span className="text-accent-golden">&quot;Rut Koticha&quot;</span>,
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">3</span>
                    <span className="opacity-50">  </span>class <span className="text-accent-purple">=</span> <span className="text-accent-golden">&quot;Software Developer&quot;</span>,
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">4</span>
                    <span className="opacity-50">  </span>quest <span className="text-accent-purple">=</span> <span className="text-accent-golden">&quot;B.Tech CE @ DDU&quot;</span>,
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">5</span>
                    <span className="opacity-50">  </span>skills <span className="text-accent-purple">=</span> <span className="text-accent-cyan">&#123;</span> <span className="text-accent-golden">&quot;Spring Boot&quot;</span>, <span className="text-accent-golden">&quot;React&quot;</span>, <span className="text-accent-golden">&quot;Docker&quot;</span> <span className="text-accent-cyan">&#125;</span>,
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">6</span>
                    <span className="opacity-50">  </span>focus <span className="text-accent-purple">=</span> <span className="text-accent-golden">&quot;Scalable Architecture & Clean Code&quot;</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant select-none mr-4">7</span>
                    <span className="text-accent-cyan">&#125;</span><span className="bg-accent-golden text-[#1c2128] font-bold px-0.5 ml-0.5 terminal-cursor">_</span>
                  </div>
                </div>

                {/* Simulated CLI Live Outputs */}
                <div className="mt-6 border-t border-border-custom/50 pt-3 space-y-1 text-[10px] text-on-surface-variant select-none bg-surface-container-high/40 p-2">
                  <div className="text-accent-cyan font-bold">--- CLI STATE ---</div>
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-accent-golden font-bold">&gt;</span>
                      <span className="truncate">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Nvim Status Line */}
              <div className="bg-accent-purple border-t-2 border-on-surface text-[#1c2128] font-mono text-[10px] px-3 py-1 flex items-center justify-between font-bold select-none uppercase">
                <div className="flex gap-2">
                  <span className="bg-on-surface text-surface px-1.5">NORMAL</span>
                  <span>init.lua</span>
                </div>
                <div>
                  <span>100% ☰ 7/7</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

