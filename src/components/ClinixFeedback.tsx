"use client";

import React, { useState, useEffect } from "react";

export default function ClinixFeedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="mt-12 text-left">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-border-subtle" />
        <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-golden">
          Production Endorsement
        </h2>
        <div className="h-px flex-1 bg-border-subtle" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Testimonial & Highlights Card */}
        <div className="md:col-span-7 flex flex-col justify-between rounded-sm border border-border-subtle bg-frosted p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            {/* Quote Icon / Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-sm bg-accent-cyan/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider border border-accent-cyan/20 text-accent-cyan select-none">
                Deployment Feedback
              </span>
              <svg className="h-8 w-8 text-border-subtle-active" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="border-l-2 border-accent-golden bg-frosted-high/50 p-4 rounded-r-sm">
              <p className="font-sans text-sm italic leading-relaxed text-on-surface">
                "Moving to this system made our daily work much easier. The software is very simple to understand. Finding a patient's history now takes seconds instead of digging through files. It has saved us a massive amount of time and made the whole clinic run smoother."
              </p>
            </blockquote>
            
            <div className="pl-1">
              <p className="font-mono text-xs font-semibold text-accent-golden">Dr. Yogesh Trivedi</p>
              <p className="font-sans text-[11px] text-on-surface-variant">
                M.D.S. Operative &bull; Aditya Dental Clinic (Est. 1986)
              </p>
            </div>
          </div>

          {/* Key Deliverables & Achievements from the Certificate */}
          <div className="pt-6 border-t border-border-subtle space-y-3">
            <h4 className="font-mono text-[10px] font-bold text-accent-cyan uppercase tracking-wider">
              Verified Production Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-on-surface-variant">
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-accent-golden flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>3+ Simultaneous Doctors</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-accent-golden flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Prescription Tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-accent-golden flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Secure Patient EHR</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-accent-golden flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Form 3C IT Auditing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certificate Preview Card */}
        <div className="md:col-span-5 flex flex-col justify-between rounded-sm border border-border-subtle bg-frosted p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold text-accent-purple uppercase tracking-wider">
              Verification Scan
            </span>
            <span className="text-[10px] font-mono text-on-surface-variant">
              Ahmedabad &bull; 15/06/2026
            </span>
          </div>

          {/* Scanned Document Thumb */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer overflow-hidden rounded-sm border border-border-subtle bg-frosted-high aspect-[3/4] flex items-center justify-center transition-all duration-300 hover:border-border-subtle-active hover:shadow-[0_0_15px_rgba(241,250,140,0.1)]"
          >
            <img 
              src="/clinix-feedback.jpeg" 
              alt="Aditya Dental Clinic Endorsement Certificate" 
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-surface/90 border border-border-subtle rounded-full text-accent-golden shadow-lg">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-on-surface tracking-widest bg-surface/80 px-2 py-0.5 rounded border border-border-subtle">
                Expand Document
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-center font-mono text-[10px] font-bold uppercase tracking-wider text-accent-golden hover:text-accent-golden/80 hover:underline transition-colors focus-ring rounded py-1"
          >
            Inspect Compliance Letter
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div 
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-surface/95 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center justify-center z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Close controls at top */}
            <div className="absolute -top-10 right-0 flex items-center gap-3 select-none">
              <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                [ESC to Close]
              </span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-sm border border-border-subtle bg-frosted hover:border-accent-golden hover:text-accent-golden focus-ring transition-colors"
                aria-label="Close document viewer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* High-res Image Wrapper */}
            <div 
              className="bg-white rounded-sm border border-border-subtle overflow-y-auto max-h-[82vh] max-w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/clinix-feedback.jpeg" 
                alt="Aditya Dental Clinic Endorsement Certificate - Full" 
                className="w-full h-auto max-h-[80vh] object-contain block"
              />
            </div>
            
            <p className="mt-3 font-sans text-xs text-on-surface-variant text-center tracking-wide">
              Official Deployment Certificate issued by Aditya Dental Clinic &bull; Ahmedabad, India
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
