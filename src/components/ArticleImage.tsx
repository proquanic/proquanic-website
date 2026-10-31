import React, { useState } from "react";
import { BookOpen, Layers } from "lucide-react";

interface ArticleImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  aspectClassName?: string;
  loading?: "lazy" | "eager";
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
  category,
  aspectClassName = "aspect-16/10",
  loading = "lazy",
}) => {
  const [errorCount, setErrorCount] = useState<number>(0);

  const handleError = () => {
    // Notify developers in development environment without concealing errors
    if (import.meta.env.DEV) {
      console.warn(`[ArticleImage] Failed to load image asset: "${src}" for "${alt}"`);
    }
    setErrorCount((prev) => prev + 1);
  };

  // Determine fallback image based on category if first load fails
  const getCategoryFallback = (cat?: string) => {
    if (!cat) return "/images/categories/steel-products.jpg";
    const lower = cat.toLowerCase();
    if (lower.includes("steel")) return "/images/categories/steel-products.jpg";
    if (lower.includes("saw")) return "/images/categories/sawing-products.jpg";
    if (lower.includes("drill") || lower.includes("milling") || lower.includes("cutting"))
      return "/images/categories/cutting-machining-tools.jpg";
    return "/images/categories/steel-products.jpg";
  };

  const currentSrc = errorCount === 0 ? src : getCategoryFallback(category);

  // If even the category fallback fails (errorCount >= 2), render a structured industrial fallback
  if (errorCount >= 2) {
    return (
      <div
        className={`w-full ${aspectClassName} bg-gradient-to-br from-[#0B192C] to-[#1E3E62] flex flex-col items-center justify-center p-6 text-center text-slate-300 select-none relative overflow-hidden`}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400 mb-2">
          <BookOpen className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-white tracking-wide uppercase">
          {category || "Technical Guide"}
        </span>
        <span className="text-[11px] text-slate-400 mt-1 line-clamp-1 max-w-[80%]">
          Proquanic (Pvt) Ltd
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
};
