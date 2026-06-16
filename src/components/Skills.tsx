"use client";

import React, { useState } from "react";
import { SKILLS } from "../data/info";

interface SkillMetadata {
  name: string;
  category: "Language" | "Framework" | "Database" | "Tool";
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Mythic";
  slot: string;
  stats: string[];
  description: string;
  icon: string;
  color: string; // Tailwind color class for rarities
}

const SKILL_REGISTRY: Record<string, SkillMetadata> = {
  // Languages
  "C": { name: "C", category: "Language", rarity: "Common", slot: "Scroll Space", stats: ["+15 System Closeness"], description: "The ancient language of the ancestors. Hard to wield, but foundational to all magic.", icon: "📄", color: "text-[#8b949e]" },
  "C++": { name: "C++", category: "Language", rarity: "Epic", slot: "Main Hand", stats: ["+45 Execution Speed", "+25 Competitive Rating"], description: "A highly complex weapon forged for speed. Primarily used in Arena Competitive Programming.", icon: "⚔️", color: "text-[#bd93f9]" },
  "Java": { name: "Java", category: "Language", rarity: "Epic", slot: "Main Hand", stats: ["+50 Relational Strength", "+30 Garbage Collection"], description: "A heavy, battle-tested broadsword. Stable, structured, and ideal for heavy architectures.", icon: "🛡️", color: "text-[#bd93f9]" },
  "Python": { name: "Python", category: "Language", rarity: "Rare", slot: "Accessory Slot", stats: ["+35 Data Processing", "+25 Automation Scripting"], description: "A versatile tool that handles scripts and automation tasks with minimal friction.", icon: "🐍", color: "text-[#8be9fd]" },
  "PHP": { name: "PHP", category: "Language", rarity: "Common", slot: "Off-hand Scroll", stats: ["+20 Server Scripts"], description: "A web script engine. Unfashionable but powers a massive chunk of the historic web realm.", icon: "🐘", color: "text-[#8b949e]" },
  "JS": { name: "JavaScript", category: "Language", rarity: "Common", slot: "Main Hand", stats: ["+25 Client Interaction"], description: "The standard energy source of client-side web layouts. Extremely chaotic if unguided.", icon: "🌐", color: "text-[#8b949e]" },
  "TS": { name: "TypeScript", category: "Language", rarity: "Legendary", slot: "Spellbook", stats: ["+55 Type Safety", "+35 Code Navigation"], description: "A gilded grimoire that binds JavaScript with strict types. Prevents compilation failure curses.", icon: "📘", color: "text-[#f1fa8c]" },
  "HTML": { name: "HTML", category: "Language", rarity: "Common", slot: "Armor Core", stats: ["+20 Layout Structure"], description: "The skeletal structure of every page template. Simple but absolutely mandatory.", icon: "🏗️", color: "text-[#8b949e]" },
  "CSS": { name: "CSS", category: "Language", rarity: "Common", slot: "Visual Shell", stats: ["+30 Layout Aesthetics"], description: "The paint scroll that controls layout structures, color mappings, and active animations.", icon: "🎨", color: "text-[#8b949e]" },

  // Frameworks
  "React": { name: "React", category: "Framework", rarity: "Epic", slot: "Visual Shield", stats: ["+40 Render Speed", "+30 Component Recycling"], description: "A powerful visual matrix that updates UI structures dynamically without reloading pages.", icon: "⚛️", color: "text-[#bd93f9]" },
  "Next.js": { name: "Next.js", category: "Framework", rarity: "Legendary", slot: "Relic Core", stats: ["+55 SEO Rating", "+40 Server Prefetching"], description: "A high-tier framework that renders components on the server before client-side loading.", icon: "▲", color: "text-[#f1fa8c]" },
  "Angular": { name: "Angular", category: "Framework", rarity: "Epic", slot: "Main Hand", stats: ["+40 Modular DI", "+25 Two-Way Binding"], description: "A structured, enterprise-grade runtime engine featuring strict dependency injection systems.", icon: "🅰️", color: "text-[#bd93f9]" },
  "Tailwind CSS": { name: "Tailwind CSS", category: "Framework", rarity: "Rare", slot: "Visual Armor", stats: ["+30 Style Velocity", "-50 CSS Code bloat"], description: "Utility-first design armor. Speeds up style deployment via direct class names.", icon: "🍃", color: "text-[#8be9fd]" },
  "Spring Boot": { name: "Spring Boot", category: "Framework", rarity: "Legendary", slot: "API Forge", stats: ["+65 Microservice Scale", "+45 DI Security"], description: "Heavy framework machinery used to construct secure, scalable REST API systems.", icon: "🍃", color: "text-[#f1fa8c]" },
  "Shadcn/ui": { name: "Shadcn/ui", category: "Framework", rarity: "Rare", slot: "Visual Armor", stats: ["+35 Layout Assembly"], description: "Pre-crafted component structures designed for rapid UI prototype assembly.", icon: "🧩", color: "text-[#8be9fd]" },

  // Databases
  "MySQL": { name: "MySQL", category: "Database", rarity: "Common", slot: "Storage Vault", stats: ["+25 Relational Tables"], description: "A battle-proven SQL vault used for structured query storage.", icon: "🗄️", color: "text-[#8b949e]" },
  "PostgreSQL": { name: "PostgreSQL", category: "Database", rarity: "Epic", slot: "Storage Vault", stats: ["+50 ACID Reliability", "+35 JSON Parsing"], description: "An advanced, highly robust SQL vault supporting transactional safety and relational integrity.", icon: "🐘", color: "text-[#bd93f9]" },
  "MongoDB": { name: "MongoDB", category: "Database", rarity: "Rare", slot: "Storage Vault", stats: ["+30 Document Flexibility"], description: "A NoSQL data repository designed for rapid, schema-less JSON storage.", icon: "🍃", color: "text-[#8be9fd]" },

  // Tools
  "Git/Github": { name: "Git & GitHub", category: "Tool", rarity: "Common", slot: "Accessory Slot", stats: ["+30 Branch Management", "+20 Merge Checks"], description: "Tracking systems used to trace code alterations and commit nodes in timelines.", icon: "🐙", color: "text-[#8b949e]" },
  "Docker": { name: "Docker", category: "Tool", rarity: "Epic", slot: "Armor Shell", stats: ["+45 Env Portability", "+35 Process Isolation"], description: "Containerizes development nodes to ensure they run identically across staging maps.", icon: "🐳", color: "text-[#bd93f9]" },
  "Linux": { name: "Linux OS", category: "Tool", rarity: "Legendary", slot: "Armor Core", stats: ["+55 Kernel Stability", "+45 Terminal Execution"], description: "The core operating system of development machines. Wielded via terminal commands.", icon: "🐧", color: "text-[#f1fa8c]" },
  "Postman": { name: "Postman", category: "Tool", rarity: "Common", slot: "Accessory Slot", stats: ["+25 API Testing"], description: "A diagnostic tool utilized to query and audit HTTP REST server endpoints.", icon: "🚀", color: "text-[#8b949e]" },
  "VS Code": { name: "VS Code", category: "Tool", rarity: "Common", slot: "Accessory Slot", stats: ["+20 Extensibility"], description: "A widely utilized code editor supporting syntax highlights and extension widgets.", icon: "💻", color: "text-[#8b949e]" },
  "IntelliJ IDEA": { name: "IntelliJ IDEA", category: "Tool", rarity: "Rare", slot: "Main Hand", stats: ["+35 Java Auto-Refactor"], description: "An intelligent workspace designed for writing Spring Boot and enterprise Java programs.", icon: "☕", color: "text-[#8be9fd]" },
  "Neovim": { name: "Neovim", category: "Tool", rarity: "Mythic", slot: "Accessory Slot", stats: ["+99 Geek Credibility", "+80 Editing Speed"], description: "A highly customized editor run inside the terminal, optimized with Lua mappings. Core relic of power.", icon: "⚡", color: "text-[#ff79c6]" }
};

export default function Skills() {
  // Merge all static lists
  const allSkills = [
    ...SKILLS.languages,
    ...SKILLS.technologies,
    ...SKILLS.databases,
    ...SKILLS.tools
  ];

  // Default to Neovim
  const [activeSkillName, setActiveSkillName] = useState<string>("Neovim");
  const activeSkill = SKILL_REGISTRY[activeSkillName] || SKILL_REGISTRY["Neovim"];

  return (
    <section id="skills" className="bg-surface py-20 border-y-2 border-on-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-golden">
            [01_] Equipped_Stack
          </h2>
          <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed">
            &gt; Inspecting Player Inventory. Hover or click an item slot in the grid to view detailed attributes, stats, and item description.
          </p>
        </div>

        {/* 2-Column RPG Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Inventory Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs font-bold text-on-surface uppercase tracking-wider text-left border-b border-border-custom pb-2">
              Item Grid (Hover to Inspect)
            </h3>
            
            {/* Minecraft Style Inventory Slots Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-3">
              {allSkills.map((skillName) => {
                const item = SKILL_REGISTRY[skillName];
                if (!item) return null;
                const isActive = activeSkillName === skillName;

                return (
                  <button
                    key={skillName}
                    onMouseEnter={() => setActiveSkillName(skillName)}
                    onClick={() => setActiveSkillName(skillName)}
                    type="button"
                    className={`relative aspect-square flex flex-col items-center justify-center border-2 bg-surface-container select-none cursor-pointer transition-all duration-100 ${
                      isActive 
                        ? "border-accent-golden bg-surface-container-high scale-105 shadow-[2px_2px_0px_#f1fa8c]" 
                        : "border-on-surface hover:border-accent-purple hover:scale-105"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] mt-1 text-on-surface-variant truncate w-full px-1 text-center font-bold">
                      {skillName}
                    </span>
                    
                    {/* Tiny corner indicators like stack size */}
                    <span className="absolute top-1 right-1 font-mono text-[7px] opacity-30 select-none">x1</span>
                  </button>
                );
              })}

              {/* Pad remaining grid spaces for retro inventory feel */}
              {Array.from({ length: Math.max(0, 28 - allSkills.length) }).map((_, idx) => (
                <div 
                  key={`empty-${idx}`}
                  className="aspect-square border-2 border-on-surface/30 bg-surface-container/20 opacity-30 flex items-center justify-center select-none"
                >
                  <span className="font-mono text-[8px] text-on-surface-variant font-bold">Empty</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Item Inspection Panel (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="neo-card-gold p-6 text-left space-y-6">
              
              {/* Inspection Header */}
              <div className="border-b-2 border-on-surface pb-4 flex items-start gap-4">
                <div className="w-14 h-14 border-2 border-on-surface bg-surface-container-high flex items-center justify-center text-3xl shadow-[2px_2px_0px_rgba(255,255,255,0.1)] select-none">
                  {activeSkill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface leading-tight font-sans">
                    {activeSkill.name}
                  </h3>
                  <div className="flex gap-2 items-center mt-1">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${activeSkill.color}`}>
                      {activeSkill.rarity}
                    </span>
                    <span className="text-on-surface-variant text-[9px] font-mono">|</span>
                    <span className="text-on-surface-variant text-[9px] font-mono uppercase tracking-wider">
                      {activeSkill.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Item Properties */}
              <div className="space-y-3 font-mono text-[11px]">
                <div>
                  <span className="text-on-surface-variant uppercase">Equipped In:</span>
                  <span className="text-on-surface ml-2 font-bold">{activeSkill.slot}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-on-surface-variant uppercase block">Attribute Modifiers:</span>
                  <ul className="space-y-1 pl-1">
                    {activeSkill.stats.map((stat, idx) => (
                      <li key={idx} className="text-[#50fa7b] font-bold flex items-center gap-1">
                        <span>+</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Item Description */}
              <div className="border-t border-border-custom pt-4">
                <p className="font-mono text-xs leading-relaxed text-on-surface-variant italic">
                  &ldquo;{activeSkill.description}&rdquo;
                </p>
              </div>

              {/* RPG Status Hint */}
              <div className="bg-surface-container-high/60 p-2.5 border border-border-custom flex items-center justify-between text-[9px] font-mono text-on-surface-variant select-none">
                <span>SLOT ID: {activeSkillName.toUpperCase()}</span>
                <span className="text-accent-golden font-bold uppercase">Ready to Use</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
