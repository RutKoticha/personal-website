"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/info";

export default function SourceNodePage() {
  const project = PROJECTS.find((p) => p.id === "sourcenode") || PROJECTS[1];

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
            <p className="mt-1 text-txt-muted">Full-Stack Architect</p>
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
              SourceNode acts as an interactive dependency graph visualizer. It solves the critical developer pain point of exploring nested modular code imports and database relation maps without digging through complex config files.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">2. Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Interactive Canvas:</strong> Smooth panning, zooming, and nodes drag-and-drop mechanics using canvas libraries.</li>
              <li><strong>Import Parser:</strong> Automated scan script parsing file-based JavaScript/TypeScript dependency imports.</li>
              <li><strong>Query Filter:</strong> Find specific connections, upstream/downstream dependencies, and circular references instantly.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">3. Architecture & Tech Decisions</h2>
            <p>
              SourceNode utilizes <strong>Next.js</strong> and <strong>TypeScript</strong> for a fully typed codebase, with <strong>MongoDB</strong> as the storage layer for user canvas layouts and document metadata.
            </p>
            <blockquote className="border-l-4 border-brand bg-bg-alt px-4 py-3 text-sm text-txt-main italic rounded-r">
              "We chose MongoDB because graph connections and customized node styling schemas can vary significantly. A document storage model provides the necessary flexibility for unstructured layout schemas."
            </blockquote>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-txt-main">4. Challenges & Learnings</h2>
            <p>
              Rendering hundreds of DOM-based node connections resulted in low frame rates. Migrating the drawing mechanics to a customized Canvas-based rendering loop reduced re-render overhead, providing smooth 60fps interaction profiles.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
