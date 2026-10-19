import React from "react";
import { COMPANY } from "../config/company";

export interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "header" | "footer";
  className?: string;
  variant?: "standard" | "light";
  withSubtitle?: boolean;
}

/**
 * Official Proquanic Geometric Capital 'P' Logo Symbol
 * Faithful to the official catalogue branding:
 * - Main Body: Solid Dark Navy Blue (#0C2340) in standard mode, Clean White (#FFFFFF) in light mode
 * - Precise Upper-Right Shoulder Accent: Bright Industrial Orange (#EA580C)
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
      {/* Capital P Main Body with inner counter cutout */}
      <path
        d="M 12 10 H 72 C 81 10 88 17 88 26 V 38 C 88 47 81 54 72 54 H 34 V 90 H 12 V 10 Z M 34 25 H 64 C 68 25 71 27.5 71 31.5 C 71 35.5 68 38 64 38 H 34 V 25 Z"
        fill={mainFill}
      />
      {/* Precise Industrial Orange Angled Accent on Upper-Right Shoulder */}
      <path
        d="M 54 10 H 72 C 81 10 88 17 88 26 V 44 L 54 10 Z"
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
  const isHero = size === "hero" || size === "xl";

  const symbolClass = isHeader
    ? "w-8 h-8 sm:w-10 sm:h-10"
    : isFooter
    ? "w-9 h-9 sm:w-10 sm:h-10"
    : isHero
    ? "w-10 h-10 sm:w-12 sm:h-12"
    : "w-8 h-8";

  const wordmarkClass = isHeader
    ? "text-base sm:text-xl lg:text-[22px]"
    : isFooter
    ? "text-lg sm:text-xl"
    : isHero
    ? "text-xl sm:text-2xl lg:text-[26px]"
    : "text-base sm:text-lg";

  const suffixClass = isHeader
    ? "text-[7.5px] sm:text-[8.5px] lg:text-[9px]"
    : isFooter
    ? "text-[8px] sm:text-[8.5px]"
    : isHero
    ? "text-[8.5px] sm:text-[9.5px]"
    : "text-[7.5px] sm:text-[8px]";

  const descriptorClass = isHeader
    ? "text-[5.5px] sm:text-[7px] lg:text-[7.5px]"
    : isFooter
    ? "text-[6.5px] sm:text-[7px]"
    : isHero
    ? "text-[7px] sm:text-[8px]"
    : "text-[6px] sm:text-[6.5px]";

  const textColor = variant === "light" ? "#FFFFFF" : "#0C2340";
  const descriptorColor = variant === "light" ? "#CBD5E1" : "#0C2340";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 1. Official Geometric P Symbol */}
      <ProquanicSymbol className={symbolClass} variant={variant} />

      {/* 2. Coherent Corporate Typography Lockup */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Company Name: Solid single-colour PROQUANIC (never split, never mixed-case) */}
        <span
          className={`font-black tracking-tight leading-none uppercase ${wordmarkClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            letterSpacing: "-0.02em",
            color: textColor,
          }}
          aria-label="PROQUANIC (PVT) LTD"
        >
          PROQUANIC
        </span>

        {/* Company Suffix: (PVT) LTD centred directly beneath wordmark */}
        <span
          className={`font-bold tracking-[0.24em] leading-tight uppercase mt-0.5 sm:mt-1 ${suffixClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            color: textColor,
          }}
        >
          (PVT) LTD
        </span>

        {/* Supporting Descriptor: INDUSTRIAL SUPPLIES & ENGINEERING SOLUTIONS */}
        <span
          className={`font-semibold tracking-[0.14em] sm:tracking-[0.16em] leading-none uppercase mt-0.5 whitespace-nowrap ${descriptorClass}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            color: descriptorColor,
            opacity: variant === "light" ? 0.9 : 0.85,
          }}
        >
          {COMPANY.subtitle}
        </span>
      </div>
    </div>
  );
};
