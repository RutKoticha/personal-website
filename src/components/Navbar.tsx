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
    <header className="sticky top-0 z-50 w-full border-b border-border-custom bg-surface/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Left Side: Brand Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="font-mono text-xl font-bold tracking-tight text-on-surface focus-ring rounded px-1 flex items-center gap-1 select-none"
            >
              <span className="text-accent-cyan">&gt;</span> RK<span className="text-accent-cyan animate-pulse">_</span>
            </a>
          </div>

          {/* Right Side: Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant hover:text-accent-cyan transition-colors duration-200 focus-ring rounded px-2 py-1"
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
              className="inline-flex items-center justify-center p-2 text-on-surface-variant hover:text-accent-cyan focus:outline-none focus-ring rounded"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border-custom bg-surface px-6 py-4" id="mobile-menu">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-sans text-sm uppercase tracking-wider font-semibold text-on-surface-variant hover:text-accent-cyan transition-colors duration-200 focus-ring rounded py-1"
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

