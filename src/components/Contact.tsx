"use client";

import React from "react";
import { PERSONAL_INFO } from "../data/info";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 border-t border-border-custom">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-mono text-xl uppercase tracking-wider font-bold text-accent-cyan">
            [05_] Connect_Interface
          </h2>
          <p className="mt-4 font-sans text-sm text-on-surface-variant leading-relaxed">
            Have an interesting opportunity, architecture challenge, or question? Feel free to reach out via email, phone, or find me on professional platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              
              {/* Email Detail Row */}
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-container-high text-accent-cyan border border-border-custom">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider">Email</h3>
                  <p className="mt-1">
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="font-mono text-sm text-accent-cyan hover:underline underline-offset-4 focus-ring rounded"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone Detail Row */}
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-container-high text-accent-cyan border border-border-custom">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-7.147-7.147c-.155-.441.011-.928.388-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider">Phone</h3>
                  <p className="mt-1">
                    <a 
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`} 
                      className="font-mono text-sm text-accent-cyan hover:underline underline-offset-4 focus-ring rounded"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Location Detail Row */}
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-container-high text-accent-cyan border border-border-custom">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider">Location</h3>
                  <p className="mt-1 font-sans text-sm text-on-surface-variant font-semibold">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Social links & Footer message */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-sm border border-border-custom bg-surface-container p-6">
            <div>
              <h3 className="font-sans text-sm font-bold text-on-surface uppercase tracking-wider">Connect Digitally</h3>
              <p className="mt-2 font-sans text-xs text-on-surface-variant leading-relaxed">
                Feel free to browse my open source repositories on GitHub or connect with me on LinkedIn to view my background and career updates.
              </p>
              
              <div className="mt-6 flex gap-4">
                {/* GitHub CTA */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-custom px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-on-surface-variant hover:text-accent-cyan hover:border-border-custom-active hover:bg-surface-container-high transition-all focus-ring cursor-pointer select-none"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                
                {/* LinkedIn CTA */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-custom px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-on-surface-variant hover:text-accent-cyan hover:border-border-custom-active hover:bg-surface-container-high transition-all focus-ring cursor-pointer select-none"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-border-custom/40 pt-4 font-mono text-[10px] text-on-surface-variant">
              © {new Date().getFullYear()} Rut Koticha.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

