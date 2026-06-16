"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "../data/info";

interface QuestMetadata {
  difficulty: "EASY" | "MEDIUM" | "HARD" | "NIGHTMARE";
  rewards: string;
  status: "ACTIVE_QUEST" | "COMPLETED";
  statusColor: string;
  diffColor: string;
}

const QUEST_REGISTRY: Record<string, QuestMetadata> = {
  clinix: {
    difficulty: "HARD",
    rewards: "+150 Fullstack XP, +100 Medical Domain XP",
    status: "ACTIVE_QUEST",
    statusColor: "bg-accent-golden text-[#1c2128]",
    diffColor: "text-[#ff5555]"
  },
  sourcenode: {
    difficulty: "NIGHTMARE",
    rewards: "+250 API Scale XP, +150 Integration XP",
    status: "COMPLETED",
    statusColor: "bg-[#50fa7b]/20 text-[#50fa7b] border-[#50fa7b]/40",
    diffColor: "text-[#ff5555] font-extrabold animate-pulse"
  },
  markipedia: {
    difficulty: "MEDIUM",
    rewards: "+100 Offline Sync XP, +50 Markdown Parsing XP",
    status: "COMPLETED",
    statusColor: "bg-[#50fa7b]/20 text-[#50fa7b] border-[#50fa7b]/40",
    diffColor: "text-accent-cyan"
  }
};

export default function Projects() {
  const isCoralTech = (tech: string) => 
    ["Postgres", "PostgreSQL", "Docker", "Fast API", "Node.js", "Express.js", "MongoDB", "Express"].includes(tech);

  return (
    <section id="projects" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-golden">
            [04_] Completed_Quests
          </h2>
          <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed">
            &gt; Querying stage database. Select a completed quest level node below to examine development logs, architecture details, and project blueprints.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const meta = QUEST_REGISTRY[project.id] || {
              difficulty: "MEDIUM",
              rewards: "+100 XP",
              status: "COMPLETED",
              statusColor: "bg-surface text-on-surface-variant",
              diffColor: "text-accent-cyan"
            };
            const stageNum = `STAGE_0${index + 1}`;

            return (
              <div 
                key={project.id} 
                className="neo-card flex flex-col justify-between p-6 hover:border-accent-golden hover:shadow-neo-gold text-left"
              >
                <div>
                  {/* Visual Titlebar */}
                  <div className="flex items-center justify-between border-b border-border-custom pb-3 mb-4 select-none">
                    <span className="font-mono text-[10px] font-bold text-accent-purple tracking-widest">{stageNum}</span>
                    <span className={`border-2 border-on-surface px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider ${meta.statusColor}`}>
                      {meta.status}
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-on-surface">
                    {project.title}
                  </h3>
                  
                  {/* Quest Stats details panel */}
                  <div className="mt-3 bg-surface-container-high/60 border border-border-custom p-2.5 space-y-1.5 font-mono text-[9px] text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>DIFFICULTY:</span>
                      <span className={`font-bold ${meta.diffColor}`}>{meta.difficulty}</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span>REWARDS:</span>
                      <span className="text-[#50fa7b] font-bold truncate">{meta.rewards}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center border border-on-surface/55 bg-surface-container-high px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                          isCoralTech(tech) ? "text-accent-coral" : "text-accent-cyan"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link Footer */}
                <div className="mt-8 pt-4 border-t border-border-custom/50 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="neo-btn bg-surface inline-flex items-center px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface hover:text-[#1c2128] hover:bg-accent-golden focus-ring active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  >
                    Select Quest
                    <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-surface text-on-surface hover:text-accent-golden focus-ring p-1.5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

