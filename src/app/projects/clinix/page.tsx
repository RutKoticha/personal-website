"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function ClinixPage() {
  const project = PROJECTS.find((p) => p.id === "clinix") || PROJECTS[0];

  return (
    <div className="min-h-screen bg-bg-main py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-txt-muted hover:text-brand transition-colors mb-12 focus-ring rounded"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title & Tagline */}
        <div className="border-b border-border-line pb-8 mb-8">
          <span className="inline-flex items-center rounded bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand tracking-wider uppercase">
            Case Study Template
          </span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-txt-main sm:text-4xl mt-3">
            {project.title}
          </h1>
          <p className="mt-4 font-sans text-lg text-txt-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-border-line pb-8 mb-8 font-sans text-sm">
          <div>
            <h4 className="font-display font-bold text-txt-main uppercase tracking-wider text-xs">Role</h4>
            <p className="mt-1 text-txt-muted">Lead Software Developer</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-txt-main uppercase tracking-wider text-xs">Technologies</h4>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-txt-muted font-medium bg-bg-alt px-2 py-0.5 rounded border border-border-line/45 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-txt-main uppercase tracking-wider text-xs">Repository</h4>
            <p className="mt-1">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline font-semibold focus-ring rounded"
              >
                GitHub Link
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Sections (Edit here to populate info) */}
        <article className="space-y-12 font-sans text-base leading-relaxed text-txt-muted">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">1. Project Overview</h2>
            <p>
              {project.longDescription}
            </p>
            <p>
              This application was engineered with a primary focus on clean security standards, ensuring patient electronic health records (EHR) comply with medical database standards. It allows easy appointment creation, records management, and real-time medical billing modules.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">2. Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Patient EHR Module:</strong> Secure entry, search, and storage of patient diagnostics history and clinical vitals.</li>
              <li><strong>Doctor Scheduling:</strong> Dynamic calendars showing availability slots and managing booking collision handles.</li>
              <li><strong>Billing & Invoices:</strong> Direct generation of digital invoices detailing medicine prescriptions and service fees.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">3. Architecture & Tech Decisions</h2>
            <p>
              The application uses a <strong>React</strong> frontend coupled with a robust <strong>Spring Boot</strong> backend REST API, utilizing <strong>PostgreSQL</strong> as the primary database store.
            </p>
            <blockquote className="border-l-4 border-brand bg-bg-alt px-4 py-3 text-sm text-txt-main italic rounded-r">
              "We chose PostgreSQL over MongoDB because patient records require strong relational integrity and transactional consistency (ACID properties) for billing purposes."
            </blockquote>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">4. Challenges & Learnings</h2>
            <p>
              Managing scheduling conflicts across multiple time-zones for consulting medical experts was a key challenge. This was solved by persisting schedules in UTC and performing dynamic local adjustments on the frontend side.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
