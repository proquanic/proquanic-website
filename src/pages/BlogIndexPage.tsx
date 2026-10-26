import React from "react";
import { Link } from "../utils/router";
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  Calendar,
  Clock,
  Wrench,
  FileText
} from "lucide-react";

export const BlogIndexPage: React.FC = () => {
  const articles = [
    {
      id: "end-mills-breakage",
      title: "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
      slug: "/blog/why-end-mills-break",
      category: "Cutting & Machining Tools",
      categorySlug: "/products/cutting-machining-tools",
      description:
        "End mills chipping or breaking during machining? Learn seven possible causes involving tool selection, cutting conditions, chip evacuation and machine setup.",
      readTime: "8 min read",
      date: "March 2026",
      image: "/src/assets/images/end_mill_inspection_1793005644754.jpg",
      tags: ["End Mills", "Solid Carbide", "Tool Overhang", "Chip Evacuation", "CNC Milling"],
      featured: true,
    },
    {
      id: "drill-bits-burning-breaking",
      title: "Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check",
      slug: "/blog/why-drill-bits-burn-or-break",
      category: "Cutting & Machining Tools",
      categorySlug: "/products/cutting-machining-tools",
      description:
        "Drill bits overheating, wearing quickly or breaking? Learn six possible causes, what to inspect and how to choose a suitable replacement for your workshop.",
      readTime: "7 min read",
      date: "March 2026",
      image: "/src/assets/images/drill_bit_inspection_1793004830548.jpg",
      tags: ["Drill Bits", "HSS & Cobalt", "Cutting Speed", "Chip Evacuation", "Feed Pressure"],
      featured: false,
    },
    {
      id: "bandsaw-blade-breakage",
      title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
      slug: "/blog/why-metal-cutting-bandsaw-blade-breaks",
      category: "Sawing Products",
      categorySlug: "/products/sawing-products",
      description:
        "When metal-cutting blades keep breaking, losing teeth, or wandering, replacing without investigating becomes expensive. Investigate tooth pitch, feed rate, break-in, tension, and clamping.",
      readTime: "8 min read",
      date: "March 2026",
      image: "/src/assets/images/bandsaw_blade_breakage_1793004061855.jpg",
      tags: ["Bandsaw Blades", "Tooth Pitch TPI", "Bi-Metal M42", "Blade Break-In", "Diagnostics"],
      featured: false,
    },
    {
      id: "hss-punches-replacement",
      title: "HSS Punches Explained: 7 Mistakes to Avoid When Choosing a Replacement",
      slug: "/blog/hss-punches-how-to-choose-replacement",
      category: "Cutting & Machining Tools",
      categorySlug: "/products/cutting-machining-tools",
      description:
        "Learn how to identify HSS punches, verify dimensions and tooling compatibility, avoid common replacement mistakes, calculate die clearances, and prepare a better industrial tooling enquiry.",
      readTime: "9 min read",
      date: "March 2026",
      image: "/src/assets/images/hss_punches_hero_1793003218607.jpg",
      tags: ["HSS Punches", "Die Clearance", "M2 Tool Steel", "Thick Turret", "Ironworker"],
      featured: false,
    },
    {
      id: "en8-vs-en19-steel",
      title: "EN8 vs EN19 Steel: Differences, Applications and How to Choose",
      slug: "/guides/en8-vs-en19-steel",
      category: "Steel Products",
      categorySlug: "/products/steel-products",
      description:
        "Comprehensive technical guide comparing EN8 (080M40) unalloyed medium carbon steel and EN19 (708M40/709M40) chromium-molybdenum alloy steel for shafts, pins, gears, and machine components.",
      readTime: "12 min read",
      date: "February 2026",
      image: "/images/categories/steel-products.jpg",
      tags: ["EN8 (080M40)", "EN19 (708M40)", "Tensile Strength", "Heat Treatment", "Shafts & Gears"],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Technical Articles & Engineering Guides</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-10">
        {/* Page Title */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Proquanic Technical Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Industrial Engineering Guides & Technical Articles
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Practical technical insights, material selection guides, and tooling procurement specifications prepared for engineers, machinists, maintenance teams, and industrial procurement professionals in Zimbabwe.
          </p>
        </div>

        {/* Featured / Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <Link href={art.slug} className="block relative aspect-16/9 bg-slate-100 overflow-hidden group">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-mono font-semibold px-2.5 py-1 rounded">
                    {art.category}
                  </div>
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-950 hover:text-orange-600 transition-colors leading-snug">
                    <Link href={art.slug}>{art.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {art.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {art.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-mono border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  href={art.slug}
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-500 transition-colors"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Industrial Procurement Notice */}
        <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
              Procurement & Technical Advisory
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Have a Specific Material or Tooling Requirement?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If your facility requires a specific steel grade, custom punch and die profile, or specialized cutting tool not listed in standard catalogues, submit your technical drawings or part specifications.
            </p>
          </div>
          <Link
            href="/request-a-quotation"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold rounded transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Submit Quotation Request</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
