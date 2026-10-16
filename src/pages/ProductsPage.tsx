import React, { useState } from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { CATEGORIES } from "../data/categories";
import { COMPANY } from "../config/company";
import { Search, ArrowRight, Layers, CheckCircle2, ChevronRight } from "lucide-react";

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = CATEGORIES.filter((category) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = category.title.toLowerCase().includes(q);
    const matchesDesc = category.shortDescription.toLowerCase().includes(q);
    const matchesFamilies = category.families.some(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.representativeItems.some((item) => item.toLowerCase().includes(q))
    );
    const matchesProducts = category.sampleProducts.some((p) =>
      p.name.toLowerCase().includes(q)
    );
    return matchesTitle || matchesDesc || matchesFamilies || matchesProducts;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              B2B Industrial Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industrial Products & Supplies
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Explore our core supply categories. All items are procured to verified industrial standards for workshops, engineering plants, fabricators, and mining operations across Southern Africa.
            </p>
          </div>

          <Link
            href="/request-a-quotation"
            className="shrink-0 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded shadow transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Request Custom Quotation
          </Link>
        </div>

        {/* Live Filter Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by steel grade, tool type, bearing, or part name..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-500 hover:text-slate-800 underline self-start sm:self-center"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* Scope Disclaimer */}
      <div className="bg-slate-100 border border-slate-200 rounded p-4 text-xs text-slate-700 leading-relaxed">
        <strong className="text-slate-900">Catalogue Scope: </strong>
        {COMPANY.scopeStatement}
      </div>

      {/* Categories Grid — Exact 10 order */}
      <div className="space-y-10">
        {filteredCategories.map((category) => (
          <div
            key={category.slug}
            id={category.slug}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Category Image */}
            <div className="lg:col-span-4 relative bg-slate-100">
              <SafeImage
                src={category.image}
                alt={category.title}
                aspectRatioClass="aspect-4/3 lg:aspect-auto lg:h-full"
                fallbackTitle={category.title}
                className="h-full"
              />
              <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-mono px-2.5 py-1 rounded font-bold">
                Category 0{category.order}
              </div>
            </div>

            {/* Category Details */}
            <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                  <Link
                    href={`/products/${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <span>View Detailed Category Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {category.shortDescription}
                </p>

                {/* Families Grid */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Product Families Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {category.families.map((fam) => (
                      <div
                        key={fam.id}
                        className="bg-slate-50 border border-slate-200/80 rounded p-2.5 space-y-1"
                      >
                        <span className="font-semibold text-slate-900 block">
                          {fam.name}
                        </span>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {fam.representativeItems.slice(0, 3).join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Standards/Grades */}
                {category.commonStandards && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="text-slate-500 text-[11px] font-semibold">Typical Standards:</span>
                    {category.commonStandards.map((std) => (
                      <span
                        key={std}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-mono border border-slate-200"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Cut-to-size & tailored procurement available.
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 py-1.5 px-3 border border-slate-300 rounded"
                  >
                    Technical Specifications
                  </Link>
                  <Link
                    href={`/request-a-quotation`}
                    className="text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white py-1.5 px-4 rounded shadow-xs transition-colors"
                  >
                    Request Quotation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 space-y-3">
            <p className="text-slate-700 font-semibold text-base">
              No direct matches found for "{searchQuery}".
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Our capability is not limited to published items. Contact our Bulawayo procurement desk with your exact part number or specification.
            </p>
            <Link
              href="/request-a-quotation"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold"
            >
              <span>Submit Custom Requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
