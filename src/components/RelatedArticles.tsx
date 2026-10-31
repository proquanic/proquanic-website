import React from "react";
import { Link } from "../utils/router";
import { getRelatedArticles, ArticleRecord } from "../data/articles";
import { BookOpen, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { ArticleImage } from "./ArticleImage";

interface RelatedArticlesProps {
  currentSlug: string;
  count?: number;
  title?: string;
  subtitle?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentSlug,
  count = 3,
  title = "Related Engineering Guides & Technical Articles",
  subtitle = "Explore more practical guides, tooling diagnostics, and steel selection references from Proquanic.",
}) => {
  const related = getRelatedArticles(currentSlug, count);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Knowledge Base</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-950">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {subtitle}
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors shrink-0"
        >
          <span>All Technical Articles</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((art) => (
          <article
            key={art.id}
            className="flex flex-col justify-between bg-slate-50/80 rounded-lg border border-slate-200/90 overflow-hidden hover:border-slate-300 hover:shadow-xs transition-all group"
          >
            <div>
              <Link href={art.slug} className="block relative aspect-16/9 overflow-hidden bg-slate-200">
                <ArticleImage
                  src={art.image}
                  alt={art.imageAlt}
                  category={art.category}
                  aspectClassName="aspect-16/9"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {art.category}
                </div>
              </Link>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{art.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
                  <Link href={art.slug}>{art.title}</Link>
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {art.description}
                </p>
              </div>
            </div>

            <div className="px-4 pb-4 pt-2 border-t border-slate-200/60">
              <Link
                href={art.slug}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-600 hover:text-orange-500 transition-colors"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
