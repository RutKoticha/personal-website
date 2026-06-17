"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  isOngoing?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  github,
  isOngoing,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-sm border border-border-subtle bg-frosted p-6">
      <div>
        {/* Name and Ongoing Badge */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-sans text-sm font-bold text-on-surface">
            {title}
          </h4>
          {isOngoing && (
            <span className="inline-flex items-center rounded-sm bg-accent-golden/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-accent-golden/30 text-accent-golden select-none">
              Ongoing
            </span>
          )}
        </div>
        
        <p className="mt-3 font-sans text-xs text-on-surface-variant leading-relaxed min-h-[64px]">
          {description}
        </p>

        {/* Technology Badges (Unified Cyan style) */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-sm bg-frosted-high px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-border-subtle text-accent-cyan select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer (Link on left, square Github button on right) */}
      <div className="mt-8 pt-4 border-t border-border-subtle/50 flex items-center justify-between">
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center font-mono text-xs font-bold uppercase tracking-wider text-accent-golden hover:text-accent-golden/80 transition-colors focus-ring rounded"
        >
          Details
          <svg className="ml-1.5 h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        {github && (
          <Button href={github} target="_blank" rel="noopener noreferrer" className="p-2.5">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
}
