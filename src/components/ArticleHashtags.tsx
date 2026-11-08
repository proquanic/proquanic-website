import React from "react";
import { Link } from "../utils/router";
import { Hash, Tag } from "lucide-react";

interface ArticleHashtagsProps {
  hashtags: string[];
  className?: string;
  title?: string;
}

export const ArticleHashtags: React.FC<ArticleHashtagsProps> = ({
  hashtags,
  className = "",
  title = "Topic Hashtags & Related Focus Areas:",
}) => {
  if (!hashtags || hashtags.length === 0) return null;

  return (
    <div className={`p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
        <Hash className="w-3.5 h-3.5 text-orange-600" />
        <span>{title}</span>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {hashtags.map((tag) => {
          const cleanTag = tag.replace(/^#/, "");
          return (
            <Link
              key={cleanTag}
              href={`/blog?tag=${encodeURIComponent(cleanTag)}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-400 rounded-full text-xs font-mono font-semibold text-slate-800 hover:text-orange-700 transition-all shadow-2xs hover:shadow-xs group"
              title={`Explore Proquanic publications tagged #${cleanTag}`}
            >
              <span className="text-orange-500 font-bold group-hover:scale-110 transition-transform">#</span>
              <span>{cleanTag}</span>
            </Link>
          );
        })}
      </div>
      <p className="text-[11px] text-slate-500">
        Click any topic hashtag to browse filtered technical publications and procurement resources.
      </p>
    </div>
  );
};
