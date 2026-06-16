"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function SourceNodePage() {
  const project = PROJECTS.find((p) => p.id === "sourcenode") || PROJECTS[1];
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
            QUEST_FILE: SOURCENODE
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
            <p className="mt-1 text-on-surface font-bold">Full-Stack Architect</p>
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
                git://github/sourcenode
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
              SourceNode acts as an interactive dependency graph visualizer. It solves the critical developer pain point of exploring nested modular code imports and database relation maps without digging through complex config files.
            </p>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">02.</span> Key Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Interactive Canvas:</strong> Smooth panning, zooming, and nodes drag-and-drop mechanics using canvas libraries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Import Parser:</strong> Automated scan script parsing file-based JavaScript/TypeScript dependency imports.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Query Filter:</strong> Find specific connections, circular references, and downstream relations.</span>
              </li>
            </ul>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">03.</span> Architecture & Tech Decisions
            </h2>
            <p>
              SourceNode utilizes <strong>Next.js</strong> and <strong>Tailwind CSS</strong> for the frontend interface, coupled with a <strong>Spring Boot</strong> and <strong>Fast API</strong> backend, storing relational tasks and repository metadata in a <strong>Postgres</strong> database, all containerized with <strong>Docker</strong>.
            </p>
            
            {/* Neovim style quote panel */}
            <div className="border-2 border-on-surface bg-surface-container-high px-4 py-3 text-[11px] text-on-surface italic flex flex-col gap-2 relative">
              <div className="absolute top-1 right-2 text-[8px] opacity-30 font-bold uppercase select-none">nvim_buffer: log</div>
              <p>&ldquo;We chose PostgreSQL because dev team integration tools require strong relational schemas for tracking kanban tasks, secure vaults, and repository meta-relations.&rdquo;</p>
            </div>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">04.</span> Challenges & Learnings
            </h2>
            <p>
              Rendering hundreds of DOM-based node connections resulted in low frame rates. Migrating the drawing mechanics to a customized Canvas-based rendering loop reduced re-render overhead, providing smooth 60fps interaction profiles.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}

