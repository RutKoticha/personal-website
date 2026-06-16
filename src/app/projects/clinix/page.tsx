"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function ClinixPage() {
  const project = PROJECTS.find((p) => p.id === "clinix") || PROJECTS[0];
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
            QUEST_FILE: CLINIX
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
            <p className="mt-1 text-on-surface font-bold">Lead Software Developer</p>
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
                git://github/clinix
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
              This application was engineered with a primary focus on clean security standards, ensuring patient electronic health records (EHR) comply with medical database standards. It allows easy appointment creation, records management, and real-time medical billing modules.
            </p>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">02.</span> Key Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Patient EHR Module:</strong> Secure entry, search, and storage of patient diagnostics history and clinical vitals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Doctor Scheduling:</strong> Dynamic calendars showing availability slots and managing booking collision handles.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#50fa7b] font-bold">✔️</span>
                <span><strong>Billing & Invoices:</strong> Direct generation of digital invoices detailing medicine prescriptions and service fees.</span>
              </li>
            </ul>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">03.</span> Architecture & Tech Decisions
            </h2>
            <p>
              The application uses an <strong>Angular</strong> frontend coupled with a robust <strong>Spring Boot</strong> backend REST API, utilizing <strong>Postgres</strong> as the primary database store, containerized via <strong>Docker</strong>.
            </p>
            
            {/* Neovim style quote panel */}
            <div className="border-2 border-on-surface bg-surface-container-high px-4 py-3 text-[11px] text-on-surface italic flex flex-col gap-2 relative">
              <div className="absolute top-1 right-2 text-[8px] opacity-30 font-bold uppercase select-none">nvim_buffer: log</div>
              <p>&ldquo;We chose PostgreSQL over MongoDB because patient records require strong relational integrity and transactional consistency (ACID properties) for billing purposes.&rdquo;</p>
            </div>
          </section>

          <section className="neo-card p-6 space-y-4">
            <h2 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider border-b border-border-custom pb-2 flex items-center gap-2">
              <span className="text-accent-golden">04.</span> Challenges & Learnings
            </h2>
            <p>
              Managing scheduling conflicts across multiple time-zones for consulting medical experts was a key challenge. This was solved by persisting schedules in UTC and performing dynamic local adjustments on the frontend side.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}

