import React from "react";
import { COMPANY } from "../config/company";

export interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "header" | "footer";
  className?: string;
  variant?: "standard" | "light";
  withSubtitle?: boolean;
}

/**
 * Official Proquanic Stylised Capital 'P' Logo Symbol
 * Based on the official Cutting & Machining Tools catalogue branding:
 * - Main Body: Solid Dark Navy Blue (#0C2340)
 * - Distinctive Angled Accent: Bright Industrial Orange (#EA580C)
 */
export const ProquanicSymbol: React.FC<{
  className?: string;
  variant?: "standard" | "light";
}> = ({ className = "w-10 h-10", variant = "standard" }) => {
  const mainFill = variant === "light" ? "#FFFFFF" : "#0C2340";
  const accentFill = "#EA580C";

  return (
    <svg
      viewBox="0 0 100 100"
      className={`shrink-0 select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Dark Navy Capital P Main Body with internal counter */}
      <path
        d="M 14 10 H 74 C 82.8 10 90 17.2 90 26 V 42 C 90 50.8 82.8 58 74 58 H 36 V 90 H 14 V 10 Z M 36 26 H 66 C 70.4 26 74 29.6 74 34 C 74 38.4 70.4 42 66 42 H 36 V 26 Z"
        fill={mainFill}
      />
      {/* Distinctive Bright Industrial Orange Angled Accent on Upper-Right Shoulder */}
      <path
        d="M 54 10 H 74 C 82.8 10 90 17.2 90 26 V 44 L 54 10 Z"
        fill={accentFill}
      />
    </svg>
  );
};

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = "md",
  className = "",
  variant = "standard",
  withSubtitle = false,
}) => {
  const isHeader = size === "header" || size === "md";
  const isFooter = size === "footer" || size === "lg";

  const symbolClass = isHeader
    ? "w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
    : isFooter
    ? "w-10 h-10 sm:w-11 sm:h-11"
    : size === "hero"
    ? "w-12 h-12 sm:w-16 sm:h-16"
    : "w-8 h-8";

  const wordmarkClass = isHeader
    ? "text-lg sm:text-2xl lg:text-[26px]"
    : isFooter
    ? "text-xl sm:text-2xl"
    : size === "hero"
    ? "text-3xl sm:text-5xl"
    : "text-lg sm:text-xl";

  const suffixClass = isHeader
    ? "text-[8px] sm:text-[9.5px] lg:text-[10px]"
    : isFooter
    ? "text-[8.5px] sm:text-[9.5px]"
    : "text-[8px] sm:text-[9px]";

  const descriptorClass = isHeader
    ? "text-[6.5px] sm:text-[8px] lg:text-[8.5px]"
    : isFooter
    ? "text-[7px] sm:text-[8px]"
    : "text-[7px]";

  const textColor = variant === "light" ? "#FFFFFF" : "#0C2340";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Stylised P Symbol (Two-colour navy and orange) */}
      <ProquanicSymbol className={symbolClass} variant={variant} />

      {/* Official Corporate Typography Stack */}
      <div className="flex flex-col justify-center text-left">
        {/* Company Name: Solid Dark Navy Blue PROQUANIC (never two colours, never mixed case) */}
        <span
          className={`font-black tracking-tight leading-none uppercase ${wordmarkClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            letterSpacing: "-0.025em",
            color: textColor,
          }}
          aria-label="PROQUANIC (PVT) LTD"
        >
          PROQUANIC
        </span>

        {/* Company Suffix: (PVT) LTD in carefully spaced uppercase lettering */}
        <span
          className={`font-bold tracking-[0.24em] leading-tight uppercase mt-0.5 sm:mt-1 ${suffixClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            color: textColor,
          }}
        >
          (PVT) LTD
        </span>

        {/* Supporting Descriptor: INDUSTRIAL SUPPLIES & ENGINEERING SOLUTIONS in smaller, widely spaced lettering */}
        <span
          className={`font-bold tracking-[0.14em] sm:tracking-[0.18em] leading-none uppercase mt-0.5 whitespace-nowrap ${descriptorClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            color: variant === "light" ? "rgba(255, 255, 255, 0.85)" : "#0C2340",
            opacity: 0.9,
          }}
        >
          {COMPANY.subtitle}
        </span>
      </div>
    </div>
  );
};
