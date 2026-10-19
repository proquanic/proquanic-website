import React from "react";
import { COMPANY } from "../config/company";

interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  variant?: "standard" | "light";
  withSubtitle?: boolean;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = "md",
  className = "",
  variant = "standard",
  withSubtitle = false,
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
    hero: "text-4xl sm:text-5xl md:text-6xl",
  };

  const proColor = variant === "light" ? "#FFFFFF" : COMPANY.branding.proColor;
  const quanicColor = COMPANY.branding.quanicColor;

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Connected Brand Name Wordmark on same baseline */}
      <span
        className={`font-black tracking-tight inline-flex items-baseline select-none whitespace-nowrap leading-none ${sizeClasses[size]}`}
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.03em",
        }}
        aria-label="Proquanic"
      >
        <span style={{ color: proColor }}>Pro</span>
        <span style={{ color: quanicColor }}>quanic</span>
      </span>

      {withSubtitle && (
        <div className="mt-1.5 space-y-0.5">
          <span
            className={`block text-[10px] sm:text-[11px] font-bold tracking-widest uppercase ${
              variant === "light" ? "text-orange-400" : "text-orange-600"
            }`}
          >
            {COMPANY.subtitle}
          </span>
          <span
            className={`block text-xs font-medium italic ${
              variant === "light" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {COMPANY.tagline}
          </span>
        </div>
      )}
    </div>
  );
};
