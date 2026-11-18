import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  href?: string;
  className?: string;
}

export default function Logo({
  variant = 'auto',
  size = 'md',
  showSubtitle = true,
  href = '/',
  className = '',
}: LogoProps) {
  const markSize = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const subtitleSize = {
    sm: 'text-[8px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]',
    xl: 'text-[12px]',
  }[size];

  const dawatColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subtitleColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const markBg = variant === 'dark' 
    ? 'bg-[#11141c] text-white border-white/10' 
    : 'bg-white text-[#181b22] border-slate-200 shadow-sm';

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Cloche Emblem */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full border p-1 ${markSize} ${markBg}`}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Ring */}
          <path
            d="M 169.5 91 A 78 78 0 1 0 166 126"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinecap="butt"
          />
          {/* Horizontal Center Bar */}
          <line
            x1="15"
            y1="108.5"
            x2="158"
            y2="108.5"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinecap="butt"
          />
          {/* Cloche Dome Arch */}
          <path
            d="M 56 99 A 43 40 0 0 1 92 57.5 C 94 49 104 49 106 57.5 A 43 40 0 0 1 142 99"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinecap="butt"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Handle Knob */}
          <path d="M 92 57.5 C 94 49 104 49 106 57.5 Z" fill="currentColor" />
          {/* Golden Amber Crescent */}
          <path
            d="M 68 99 C 69 88.5 74 78.5 80.5 73 C 84 70 88 68 92.5 66.5 C 89 71.5 86 78.5 84 86 C 82.5 90.5 81.8 95 81.5 99 Z"
            fill="#c5982f"
          />
          {/* Stylized 'D' */}
          <path
            d="M 72 114.5 V 137 C 72 147.5 78.5 147.5 89 147.5 H 106 C 124 147.5 134 135 134 114.5"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinecap="butt"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Golden Amber Dot at 3 o'clock */}
          <circle cx="176.5" cy="108.5" r="9.8" fill="#c5982f" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className={`flex items-baseline tracking-tight font-display font-extrabold ${titleSize}`}>
          <span className={dawatColor}>Dawat</span>
          <span className="text-[#c89b3c] ml-[2px]">Desk</span>
        </div>
        {showSubtitle && (
          <span
            className={`uppercase tracking-[0.24em] font-semibold mt-0.5 ${subtitleSize} ${subtitleColor}`}
          >
            Kitchen & Table
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none hover:opacity-95 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
