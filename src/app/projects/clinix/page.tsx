"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function ClinixPage() {
  const project = PROJECTS.find((p) => p.id === "clinix") || PROJECTS[0];
  const isCoralTech = (tech: string) => 
    ["Postgres", "PostgreSQL", "Docker", "Fast API", "Node.js", "Express.js", "MongoDB", "Express"].includes(tech);

  return (
    <div className="min-h-screen bg-surface py-12 sm:py-16 md:py-24 dot-grid text-on-surface">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center font-mono text-xs uppercase tracking-wider font-bold text-on-surface-variant hover:text-accent-cyan transition-colors mb-12 focus-ring rounded"
        >
          <svg className="mr-2 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l-7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title & Tagline */}
        <div className="border-b border-border-custom pb-8 mb-8 text-left">
          <span className="inline-flex items-center rounded bg-surface-container border border-border-custom px-2.5 py-0.5 font-mono text-[9px] font-semibold text-accent-cyan tracking-wider uppercase">
            Case Study
          </span>
          <h1 className="font-mono text-2xl font-bold tracking-tight text-on-surface sm:text-3xl mt-3 uppercase leading-none">
            {project.title}
          </h1>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-border-custom pb-8 mb-8 font-sans text-xs text-left">
          <div>
            <h4 className="font-mono font-bold text-accent-cyan uppercase tracking-wider text-[10px]">Role</h4>
            <p className="mt-1 text-on-surface-variant">Lead Software Developer</p>
          </div>
          <div>
            <h4 className="font-mono font-bold text-accent-cyan uppercase tracking-wider text-[10px]">Technologies</h4>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center rounded-full bg-surface-container-high px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-border-custom ${
                    isCoralTech(tech) ? "text-accent-coral" : "text-accent-cyan"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono font-bold text-accent-cyan uppercase tracking-wider text-[10px]">Repository</h4>
            <p className="mt-1">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-accent-cyan hover:underline focus-ring rounded"
              >
                git://github/clinix
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <article className="space-y-12 font-sans text-sm leading-relaxed text-on-surface-variant text-left">
          
          <section className="space-y-4">
            <h2 className="font-sans text-base font-bold text-on-surface uppercase tracking-wide">1. Project Overview</h2>
            <p>
              {project.longDescription}
            </p>
            <p>
              This application was engineered with a primary focus on clean security standards, ensuring patient electronic health records (EHR) comply with medical database standards. It allows easy appointment creation, records management, and real-time medical billing modules.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-base font-bold text-on-surface uppercase tracking-wide">2. Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Patient EHR Module:</strong> Secure entry, search, and storage of patient diagnostics history and clinical vitals.</li>
              <li><strong>Doctor Scheduling:</strong> Dynamic calendars showing availability slots and managing booking collision handles.</li>
              <li><strong>Billing & Invoices:</strong> Direct generation of digital invoices detailing medicine prescriptions and service fees.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-base font-bold text-on-surface uppercase tracking-wide">3. Architecture & Tech Decisions</h2>
            <p>
              The application uses an <strong>Angular</strong> frontend coupled with a robust <strong>Spring Boot</strong> backend REST API, utilizing <strong>Postgres</strong> as the primary database store, containerized via <strong>Docker</strong>.
            </p>
            <blockquote className="border-l-2 border-accent-cyan bg-surface-container px-4 py-3 font-mono text-xs text-on-surface italic rounded-r">
              &ldquo;We chose PostgreSQL over MongoDB because patient records require strong relational integrity and transactional consistency (ACID properties) for billing purposes.&rdquo;
            </blockquote>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-base font-bold text-on-surface uppercase tracking-wide">4. Challenges & Learnings</h2>
            <p>
              Managing scheduling conflicts across multiple time-zones for consulting medical experts was a key challenge. This was solved by persisting schedules in UTC and performing dynamic local adjustments on the frontend side.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}

