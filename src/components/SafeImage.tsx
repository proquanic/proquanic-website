import React, { useState } from "react";
import { Wrench } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatioClass = "aspect-4/3",
  fallbackTitle = "Industrial Supply",
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${aspectRatioClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          referrerPolicy="no-referrer"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        /* Styled Engineering Fallback */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 text-center">
          <Wrench className="w-8 h-8 text-amber-500 mb-2 opacity-80" />
          <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider line-clamp-1">
            {fallbackTitle}
          </span>
          <span className="text-[10px] text-slate-400 mt-1">
            Proquanic Industrial Procurement
          </span>
        </div>
      )}

      {/* Loading Skeleton Indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-slate-300 border-t-amber-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
