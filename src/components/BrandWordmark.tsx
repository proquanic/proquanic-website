import React from "react";
import { COMPANY } from "../config/company";

export interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "header" | "footer";
  className?: string;
  variant?: "standard" | "light";
  withSubtitle?: boolean;
  showDescriptor?: boolean;
  orangeQ?: boolean;
}

/**
 * Official Proquanic Typographic Brand Identity
 * 
 * Strict compliance with brand specifications:
 * - Standalone P logo/icon completely removed
 * - Left-aligned lockup:
 *     Line 1: PROQUANIC (navy blue with accent Q in header, solid in footer/hero)
 *     Line 2: (PVT) LTD (directly beneath in neatly tracked uppercase lettering)
 *     Line 3: INDUSTRIAL SUPPLIES & ENGINEERING SOLUTIONS (smaller uppercase text, present in footer, absent in header/hero)
 * - Clean, compact, professional
 * - Never "ProQuanic"
 */
export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = "md",
  className = "",
  variant = "standard",
  withSubtitle,
  showDescriptor,
  orangeQ,
}) => {
  const isHeader = size === "header" || size === "md";
  const isFooter = size === "footer" || size === "lg";
  const isHero = size === "hero" || size === "xl";
  const isSm = size === "sm";

  // Descriptor appears in footer only, omitted in header and hero
  const shouldRenderDescriptor =
    showDescriptor !== undefined
      ? showDescriptor
      : withSubtitle !== undefined
      ? withSubtitle
      : !isHero && !isHeader;

  // Header wordmark enlarged by 15-20%
  const wordmarkClass = isHeader
    ? "text-[28px] xs:text-[30px] sm:text-4xl lg:text-[38px]"
    : isFooter
    ? "text-xl sm:text-2xl"
    : isHero
    ? "text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[76px]"
    : isSm
    ? "text-base"
    : "text-lg";

  const suffixClass = isHeader
    ? "text-[10.5px] xs:text-[11.5px] sm:text-[13px] lg:text-[14px] tracking-[0.24em] sm:tracking-[0.28em]"
    : isFooter
    ? "text-[8.5px] sm:text-[9.5px]"
    : isHero
    ? "text-[11px] xs:text-xs sm:text-sm lg:text-base tracking-[0.26em] sm:tracking-[0.3em]"
    : isSm
    ? "text-[7.5px]"
    : "text-[8.5px]";

  const descriptorClass = isHeader
    ? "text-[6px] xs:text-[6.5px] sm:text-[7.5px] lg:text-[8px]"
    : isFooter
    ? "text-[6.5px] sm:text-[7.5px]"
    : isHero
    ? "text-[8px] xs:text-[9.5px] sm:text-xs lg:text-[13px] tracking-[0.14em] sm:tracking-[0.18em]"
    : isSm
    ? "text-[5.5px]"
    : "text-[6.5px]";

  // Colours: Solid single-colour PROQUANIC wordmark
  // Deep Navy (#0C2340) for standard light backgrounds, Pure White (#FFFFFF) for dark navy footer/hero
  const primaryColor = variant === "light" ? "#FFFFFF" : "#0C2340";
  const suffixColor = variant === "light" ? "#E2E8F0" : "#0C2340";
  const descriptorColor = variant === "light" ? "#94A3B8" : "#0C2340";

  const shouldOrangeQ = orangeQ !== undefined ? orangeQ : isHeader;
  const qColor = COMPANY.branding.quanicColor;

  return (
    <div
      className={`inline-flex flex-col items-start text-left select-none ${className}`}
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
    >
      {/* Line 1: Company name wordmark (with orange Q for header) */}
      <span
        className={`font-black tracking-tight leading-none uppercase ${wordmarkClass}`}
        style={{
          letterSpacing: "-0.025em",
          color: primaryColor,
        }}
        aria-label="PROQUANIC"
      >
        {shouldOrangeQ ? (
          <>
            PRO<span style={{ color: qColor }}>Q</span>UANIC
          </>
        ) : (
          "PROQUANIC"
        )}
      </span>

      {/* Line 2: Company suffix directly beneath */}
      <span
        className={`font-bold leading-tight uppercase ${suffixClass} ${isHero ? "mt-1 sm:mt-2" : "mt-0.5 sm:mt-1 tracking-[0.24em]"}`}
        style={{
          color: suffixColor,
          opacity: variant === "light" ? 0.95 : 0.9,
        }}
      >
        (PVT) LTD
      </span>

      {/* Line 3: Supporting descriptor (only when enabled; absent in hero) */}
      {shouldRenderDescriptor && (
        <span
          className={`font-semibold leading-none uppercase ${descriptorClass} ${isHero ? "mt-1 sm:mt-2" : "mt-0.5 sm:mt-1 tracking-[0.12em] xs:tracking-[0.14em] sm:tracking-[0.16em]"} whitespace-nowrap`}
          style={{
            color: descriptorColor,
            opacity: variant === "light" ? 0.85 : 0.8,
          }}
        >
          {COMPANY.subtitle}
        </span>
      )}
    </div>
  );
};

/**
 * Kept for optional standalone reference if needed elsewhere;
 * completely omitted from header and footer brand lockups per user requirement.
 */
export const ProquanicSymbol: React.FC<{
  className?: string;
  variant?: "standard" | "light";
}> = ({ className = "w-8 h-8", variant = "standard" }) => {
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
      <path
        d="M 12 10 H 72 C 81 10 88 17 88 26 V 38 C 88 47 81 54 72 54 H 34 V 90 H 12 V 10 Z M 34 25 H 64 C 68 25 71 27.5 71 31.5 C 71 35.5 68 38 64 38 H 34 V 25 Z"
        fill={mainFill}
      />
      <path
        d="M 54 10 H 72 C 81 10 88 17 88 26 V 44 L 54 10 Z"
        fill={accentFill}
      />
    </svg>
  );
};
