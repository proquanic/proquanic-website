import React from "react";
import { COMPANY } from "../config/company";

interface BrandWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  variant?: "standard" | "light";
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = "md",
  className = "",
  variant = "standard",
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
    hero: "text-4xl sm:text-5xl md:text-6xl",
  };

  const proColor = variant === "light" ? "#F8FAFC" : COMPANY.branding.proColor;
  const quanicColor = COMPANY.branding.quanicColor;

  return (
    <span
      className={`font-extrabold tracking-tight inline-flex items-baseline select-none ${sizeClasses[size]} ${className}`}
      style={{ letterSpacing: "-0.03em" }}
      aria-label="Proquanic"
    >
      <span style={{ color: proColor }}>Pro</span>
      <span style={{ color: quanicColor }}>Quanic</span>
    </span>
  );
};
