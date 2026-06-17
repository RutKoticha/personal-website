import React from "react";
import { getProjectById } from "@/data/projects";
import { marked } from "marked";
import Button from "@/components/Button";
import "../markdown.css";

export default function SourceNodePage() {
  const project = getProjectById("sourcenode");
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-sm text-on-surface-variant">
        Project not found.
      </div>
    );
  }

  const parsedHtml = marked.parse(project.content) as string;

  return (
    <div className="min-h-screen bg-transparent py-12 sm:py-16 md:py-24 text-on-surface">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Back Button */}
        <Button 
          href="/" 
          className="mb-12"
        >
          <svg className="mr-2 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Portfolio
        </Button>

        {/* Title & Tagline (Frosted header) */}
        <div className="rounded-sm border border-border-subtle bg-frosted p-8 mb-8 text-left">
          <h1 className="font-mono text-2xl font-bold tracking-tight text-on-surface sm:text-3xl uppercase leading-none">
            {project.title}
          </h1>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-sm border border-border-subtle bg-frosted p-6 mb-8 font-sans text-xs text-left">
          <div>
            <h4 className="font-mono font-bold text-accent-golden uppercase tracking-wider text-[10px]">Technologies</h4>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-sm bg-frosted-high px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-border-subtle text-accent-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono font-bold text-accent-golden uppercase tracking-wider text-[10px]">Repository</h4>
            <p className="mt-1">
              {project.github ? (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-accent-golden hover:underline focus-ring rounded"
                >
                  git://github/{project.id}
                </a>
              ) : (
                <span className="font-mono text-on-surface-variant italic">No repository linked</span>
              )}
            </p>
          </div>
        </div>

        {/* Detailed Sections parsed from Markdown */}
        <article 
          className="markdown-content rounded-sm border border-border-subtle bg-frosted p-8 sm:p-12 space-y-12 font-sans text-sm leading-relaxed text-on-surface-variant text-left"
          dangerouslySetInnerHTML={{ __html: parsedHtml }}
        />

      </div>
    </div>
  );
}
