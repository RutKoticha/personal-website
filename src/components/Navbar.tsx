"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="frosted-card bg-[#1c2128]/95 backdrop-blur-md rounded-full px-6 py-2.5 flex items-center justify-between shadow-lg">
        {/* Left Side: Brand Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#home" 
            className="font-mono text-base font-bold tracking-tight text-on-surface focus-ring rounded-full px-2 py-0.5 flex items-center gap-1 select-none"
          >
            <span className="text-accent-golden">&gt;</span> RK<span className="text-accent-golden animate-pulse">_</span>
          </a>
        </div>

        {/* Right Side: Desktop Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider font-bold text-on-surface-variant hover:text-accent-golden transition-colors duration-200 focus-ring rounded px-2.5 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-1.5 text-on-surface-variant hover:text-accent-golden focus:outline-none focus-ring rounded-full"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className="md:hidden mt-2 frosted-card rounded-2xl px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200" 
          id="mobile-menu"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-mono text-xs uppercase tracking-wider font-bold text-on-surface-variant hover:text-accent-golden transition-colors duration-200 focus-ring rounded py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
