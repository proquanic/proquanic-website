import React, { useState, useMemo, useEffect } from "react";
import { Link } from "../utils/router";
import { ARTICLES, BLOG_CATEGORIES, ArticleRecord, getSortedArticles, getAllHashtags } from "../data/articles";
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  Clock,
  Search,
  X,
  FileText,
  Filter,
  Sparkles,
  Layers,
  ArrowUpRight,
  Hash,
  Tag,
} from "lucide-react";
import { ArticleImage } from "../components/ArticleImage";

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [topicsExpanded, setTopicsExpanded] = useState<boolean>(false);

  useEffect(() => {
    // Read query params from URL (e.g. ?tag=SteelProductsZimbabwe or ?category=Steel Products)
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const tagParam = searchParams.get("tag") || searchParams.get("hashtag");
      const catParam = searchParams.get("category");

      if (tagParam) {
        setSelectedHashtag(tagParam.replace(/^#/, ""));
      }
      if (catParam && BLOG_CATEGORIES.includes(catParam as any)) {
        setSelectedCategory(catParam);
      }
    }

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.proquanic.co.zw/blog");
  }, []);

  const allHashtags = useMemo(() => getAllHashtags(), []);

  const handleSelectHashtag = (tag: string | null) => {
    setSelectedHashtag(tag);
    if (typeof window !== "undefined" && window.history) {
      const newUrl = tag ? `/blog?tag=${encodeURIComponent(tag)}` : "/blog";
      window.history.replaceState({}, "", newUrl);
    }
  };

  const filteredArticles = useMemo(() => {
    const sorted = getSortedArticles();
    return sorted.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      if (!matchesCategory) return false;

      if (selectedHashtag) {
        const cleanTarget = selectedHashtag.toLowerCase();
        const matchesHashtag =
          article.hashtags?.some((ht) => ht.replace(/^#/, "").toLowerCase() === cleanTarget) ||
          article.tags?.some((t) => t.toLowerCase() === cleanTarget);
        if (!matchesHashtag) return false;
      }

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = article.title.toLowerCase().includes(q);
      const inDesc = article.description.toLowerCase().includes(q);
      const inCategory = article.category.toLowerCase().includes(q);
      const inTags = article.tags.some((tag) => tag.toLowerCase().includes(q));
      const inHashtags = article.hashtags?.some((ht) => ht.toLowerCase().includes(q));

      return inTitle || inDesc || inCategory || inTags || inHashtags;
    });
  }, [selectedCategory, selectedHashtag, searchQuery]);

  const featuredArticle = useMemo(() => {
    const sorted = getSortedArticles();
    return sorted.find((a) => a.featured) || sorted[0];
  }, []);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedHashtag(null);
    setSearchQuery("");
    if (typeof window !== "undefined" && window.history) {
      window.history.replaceState({}, "", "/blog");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Blog & Engineering Guides</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-slate-500 text-[11px] font-mono">
            <span>{ARTICLES.length} Technical Publications</span>
          </div>
        </div>
      </div>

      {/* Hero / Header Section */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-11 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Proquanic Technical Knowledge Hub</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Insights for Engineering and Industry
            </h1>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Practical technical insights, tooling troubleshooting, material selection guides, and procurement specifications prepared for engineers, machinists, maintenance teams, and manufacturing professionals across Zimbabwe.
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-1 max-w-2xl">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, tooling type, steel grade, or keyword..."
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-slate-800/90 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 text-slate-400 hover:text-white rounded transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-7 space-y-4 sm:space-y-6">
        {/* Category Filters Bar — Single Horizontal Scrollable Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 border-b border-slate-200 pb-3 sm:pb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto flex-nowrap pb-1 -mx-1 px-1 [scrollbar-width:thin]">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1.5 hidden lg:inline shrink-0">
              Categories:
            </span>
            {BLOG_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? ARTICLES.length
                  : ARTICLES.filter((a) => a.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-orange-600 text-white shadow-xs font-semibold"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? "bg-orange-800 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 shrink-0 font-mono">
            Showing {filteredArticles.length} of {ARTICLES.length} articles
          </div>
        </div>

        {/* Compact Collapsible Explore Topics Bar */}
        <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                <Hash className="w-3.5 h-3.5 shrink-0" />
                <span>Explore Topics</span>
              </span>
              {selectedHashtag && (
                <button
                  onClick={() => handleSelectHashtag(null)}
                  className="text-[11px] text-orange-600 hover:text-orange-700 underline font-sans font-semibold cursor-pointer truncate"
                >
                  Clear Filter
                </button>
              )}
            </div>

            {allHashtags.length > 6 && (
              <button
                type="button"
                onClick={() => setTopicsExpanded((prev) => !prev)}
                aria-expanded={topicsExpanded}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-700 hover:text-orange-600 bg-slate-100 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 transition-colors shrink-0 cursor-pointer"
              >
                <span>{topicsExpanded ? "Collapse Topics" : "View All Topics"}</span>
                <span className="text-[10px] font-mono text-slate-500">
                  ({allHashtags.length})
                </span>
                {topicsExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 items-center">
            {(topicsExpanded ? allHashtags : allHashtags.slice(0, 6)).map(({ tag, count }) => {
              const isActive = selectedHashtag?.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => handleSelectHashtag(isActive ? null : tag)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : "bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-700 border border-slate-200 hover:border-orange-300"
                  }`}
                  title={`Filter articles by #${tag}`}
                >
                  <span className={isActive ? "text-orange-400 font-bold" : "text-orange-500"}>#</span>
                  <span>{tag}</span>
                  <span
                    className={`text-[10px] px-1 rounded-full ${
                      isActive ? "bg-slate-800 text-slate-300" : "bg-white text-slate-500 border border-slate-200"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Indicator & Contextual Category Link */}
        {selectedHashtag && (
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-orange-600 text-white rounded-md">
                <Hash className="w-4 h-4" />
              </span>
              <div>
                <span className="font-bold text-slate-900 block text-sm">
                  Topic: #{selectedHashtag}
                </span>
                <span className="text-slate-600">
                  Showing {filteredArticles.length} publication{filteredArticles.length === 1 ? "" : "s"} focused on this technical subject.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => handleSelectHashtag(null)}
                className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded font-semibold transition-colors cursor-pointer"
              >
                Clear Topic
              </button>
              <Link
                href="/products"
                className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition-colors inline-flex items-center gap-1"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4 max-w-xl mx-auto my-12 shadow-xs">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No articles found</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We couldn't find any articles matching &ldquo;{searchQuery}&rdquo;
              {selectedCategory !== "All" && ` in ${selectedCategory}`}. Try a different term or clear your filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Media Header */}
                  <Link
                    href={article.slug}
                    className="block relative aspect-16/10 bg-slate-100 overflow-hidden"
                  >
                    <ArticleImage
                      src={article.image}
                      alt={article.imageAlt}
                      category={article.category}
                      aspectClassName="aspect-16/10"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-mono font-semibold px-2.5 py-1 rounded shadow-xs">
                      {article.category}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-orange-600 transition-colors leading-snug">
                      <Link href={article.slug}>{article.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-mono border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-slate-400 text-[10px] font-mono">
                          +{article.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-500 transition-colors"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={article.categorySlug}
                    className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors hidden sm:inline"
                    title={`View all ${article.category}`}
                  >
                    Explore Category
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Industrial Procurement Notice & Technical Advisory */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm border border-slate-800 mt-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Requisitions & Sourcing Desk</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need a Specific Tooling Specification or Steel Profile?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If your workshop requires specialized end mill coatings, custom punch and die clearances, bi-metal bandsaw blade configurations, or certified engineering steels (EN8 / EN19), submit your engineering specifications or drawings to Proquanic in Bulawayo.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/request-a-quotation"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold rounded shadow transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              <span>Submit RFQ Requisition</span>
            </Link>
            <Link
              href="/products"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded border border-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Layers className="w-4 h-4 text-orange-400" />
              <span>View Product Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
