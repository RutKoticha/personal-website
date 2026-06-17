"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  download,
  target,
  rel,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const appliedStyle = `inline-flex items-center justify-center gap-2 rounded-sm border border-border-subtle bg-frosted px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-on-surface-variant hover:text-accent-golden hover:border-border-subtle-active hover:bg-frosted-high tactile-btn focus-ring cursor-pointer select-none transition-all duration-100 ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal && !download) {
      return (
        <Link href={href} className={appliedStyle} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={appliedStyle}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={appliedStyle} onClick={onClick}>
      {children}
    </button>
  );
}
