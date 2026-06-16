"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function MarkipediaPage() {
  const project = PROJECTS.find((p) => p.id === "markipedia") || PROJECTS[2];
  const isCoralTech = (tech: string) => 
    ["Postgres", "PostgreSQL", "Docker", "Fast API", "Node.js", "Express.js", "MongoDB", "Express"].includes(tech);

  return (
    <div className="min-h-screen bg-surface py-12 sm:py-16 md:py-24 wavy-grid text-on-surface">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Back Link Button */}
        <Link 
          href="/" 
          className="neo-btn bg-surface inline-flex items-center px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold text-on-surface hover:text-[#1c2128] hover:bg-accent-golden focus-ring mb-12 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          <svg className="mr-2 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l-7.5-7.5M3 12h18" />
          </svg>
          &lt; Back to Workspace
        </Link>

        {/* Title Bar Panel */}
        <div className="neo-card-gold p-6 sm:p-8 text-left mb-8">
          <span className="bg-[#1c2128] border border-border-custom px-2.5 py-0.5 font-mono text-[9px] font-bold text-accent-golden tracking-widest uppercase select-none">
            QUEST_FILE: MARKIPEDIA
          </span>
          <h1 className="font-mono text-3xl font-extrabold tracking-tight text-on-surface mt-3 uppercase leading-none">
            {project.title}
          </h1>
          <p className="mt-4 font-mono text-xs text-on-surface-variant leading-relaxed">
            &gt; Description: {project.description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-2 border-on-surface bg-surface-container p-6 mb-8 font-mono text-xs text-left shadow-neo-slate">
          <div>
            <h4 className="font-bold text-accent-purple uppercase tracking-wider text-[10px]">Role / Class</h4>
            <p className="mt-1 text-on-surface font-bold">Full-Stack Engineer</p>
          </div>
          <div>
            <h4 className="font-bold text-accent-purple uppercase tracking-wider text-[10px]">Tech Weaponry</h4>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center border border-on-surface/50 bg-surface-container-high px-2 py-0.5 font-mono text-[8px] font-bold uppercase ${
                    isCoralTech(tech) ? "text-accent-coral" : "text-accent-cyan"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-accent-purple uppercase tracking-wider text-[10px]">Remote Repository</h4>
            <p className="mt-1">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-accent-golden hover:underline focus-ring"
              >
                git://github/markipedia
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <article className="space-y-8 font-mono text-xs leading-relaxed text-on-surface-variant text-left">
          
          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">01.</span> Project Overview
            </h2>
            <p>
              {project.longDescription}
            </p>
            <p>
              Markipedia provides a fast, structured wiki workspace for capturing team knowledge in Markdown format. Inspired by medium.com, it renders clean, easy-to-read markdown articles with live editing previews and automated version history.
            </p>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">02.</span> Key Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Split-Pane Editor:</strong> Side-by-side Markdown editing pane and formatted HTML preview window.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Offline Workspace Sync:</strong> Local caching using browser storage layers to allow offline writing, syncing with the central database on network reconnection.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Nested Articles Hierarchy:</strong> Tree-structure file explorer directories for cataloging documents.</span>
              </li>
            </ul>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">03.</span> Architecture & Tech Decisions
            </h2>
            <p>
              Markipedia utilizes a client-side <strong>React</strong> and <strong>Tailwind CSS</strong> interface supported by a lightweight <strong>Node.js/Express.js</strong> backend server.
            </p>
            
            {/* Neovim style quote panel */}
            <div className="border-2 border-on-surface bg-surface-container-high px-4 py-3 text-[11px] text-on-surface italic flex flex-col gap-2 relative">
              <div className="absolute top-1 right-2 text-[8px] opacity-30 font-bold uppercase select-none">nvim_buffer: log</div>
              <p>&ldquo;We structured the editing engine around customized unified/remark parsing pipelines, allowing extensibility of standard GFM (GitHub Flavored Markdown) and mathematical LaTeX equations.&rdquo;</p>
            </div>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">04.</span> Challenges & Learnings
            </h2>
            <p>
              Synchronizing offline changes from multiple clients could lead to rewrite overrides. We integrated a simple timestamp-based version check. When updates conflict, the client is prompted with a side-by-side visual diff to resolve edits manually.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
