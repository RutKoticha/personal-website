"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Equipped Stack", href: "#skills" },
    { name: "Player Stats", href: "#achievements" },
    { name: "Quest Log", href: "#education" },
    { name: "Completed Quests", href: "#projects" },
    { name: "Connect Interface", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4">
      {/* Neo-brutalist Terminal Header */}
      <div className="border-2 border-on-surface bg-surface-container shadow-neo-slate flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2">
        {/* Logo and Window Controls */}
        <div className="flex items-center justify-between h-10 w-full md:w-auto">
          <div className="flex items-center gap-3">
            {/* Terminal Window Action Dots */}
            <div className="flex gap-1.5 select-none">
              <span className="w-3 h-3 rounded-full border border-on-surface bg-[#ff5555]"></span>
              <span className="w-3 h-3 rounded-full border border-on-surface bg-[#f1fa8c]"></span>
              <span className="w-3 h-3 rounded-full border border-on-surface bg-[#50fa7b]"></span>
            </div>
            
            {/* Title Label */}
            <a 
              href="#home" 
              className="font-mono text-xs font-bold tracking-tight text-on-surface hover:text-accent-golden focus-ring px-2 py-1 select-none flex items-center gap-2"
            >
              <span className="text-accent-coral font-bold">&gt;_</span> 
              <span className="text-on-surface">rut@CE</span>
              <span className="bg-accent-golden text-[#1c2128] text-[9px] px-1 py-0.5 font-bold uppercase tracking-widest font-mono">LVL.20</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="neo-btn flex items-center justify-center p-2 bg-surface text-on-surface hover:text-accent-golden focus:outline-none focus-ring"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open navigation menu</span>
              {isOpen ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block mt-3 md:mt-0 w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="neo-btn block px-3 py-1 bg-surface font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant hover:text-[#1c2128] hover:bg-accent-golden focus-ring active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

