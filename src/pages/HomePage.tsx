import React from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { COMPANY } from "../config/company";
import { CATEGORIES } from "../data/categories";
import { MACHINERY_CATEGORIES, MACHINERY_DISCLAIMER } from "../data/machinery";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  FileText,
  Search,
  Cog,
  Wrench,
  Layers,
  ChevronRight,
  Send,
} from "lucide-react";

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 z-10">
            {/* 1. Location and Southern African B2B supply badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-800/90 border border-slate-700/80 rounded-full text-xs font-medium text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Bulawayo, Zimbabwe · Southern African B2B Supply</span>
            </div>

            {/* 2. Dominant Brand Name Lockup & 3. Supporting Headline */}
            <div className="space-y-4 sm:space-y-5">
              {/* 2. Hero Brand Lockup: Large PROQUANIC wordmark with (PVT) LTD directly beneath */}
              <div
                className="inline-flex flex-col items-start text-left select-none"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
              >
                <span
                  className="font-black tracking-tight leading-none uppercase text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] text-white"
                  style={{ letterSpacing: "-0.025em" }}
                  aria-label="PROQUANIC"
                >
                  PROQUANIC
                </span>
                <span className="font-bold leading-tight uppercase text-[11px] xs:text-xs sm:text-sm lg:text-base tracking-[0.26em] sm:tracking-[0.3em] text-slate-200 opacity-95 mt-1 sm:mt-2">
                  (PVT) LTD
                </span>
              </div>

              {/* 3. Supporting headline — prominent yet clearly secondary to the brand name */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 leading-snug sm:leading-tight max-w-2xl">
                {COMPANY.headline}
              </h1>
            </div>

            {/* 4. Concise introductory paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specialized procurement and supply of engineering steels, precision cutting tools, machine tooling, and industrial workshop machinery for manufacturing, mining, and fabrication operations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/request-a-quotation"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Request a Quotation</span>
              </Link>

              <Link
                href="/machinery-equipment"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 rounded border border-slate-700 transition-colors whitespace-nowrap"
              >
                <Cog className="w-4 h-4 text-slate-400" />
                <span>Enquire About Machinery</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Verified Material Specs</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct Site Delivery</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Order Sourcing to Spec</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <SafeImage
                src="/images/hero/hero-industrial.jpg"
                alt="Proquanic Industrial Warehouse and Engineering Procurement Facility"
                aspectRatioClass="aspect-4/3"
                fallbackTitle="Industrial Engineering Facility"
                priority={true}
              />
              <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Central Operations</span>
                  <span className="font-mono text-amber-400">7010 Gwabalanda, Bulawayo</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Coordinating industrial supply and machinery logistics for engineering enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATALOGUE SCOPE STATEMENT (F)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Proquanic Catalogue Scope Statement</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed max-w-4xl">
              {COMPANY.scopeStatement}
            </p>
          </div>
          <Link
            href="/request-a-quotation"
            className="shrink-0 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded shadow-sm transition-colors whitespace-nowrap"
          >
            Submit Custom Specification
          </Link>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT CATEGORY CATALOGUE (C) — EXACT 10 ORDER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Industrial Product Catalogue
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Our Supply Categories
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Ten structured industrial product categories covering raw engineering materials, precision cutting tools, machine tooling, inspection equipment, and plant maintenance supplies.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 whitespace-nowrap"
          >
            <span>View Full Catalogue Grid</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid - All 10 in exact order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group bg-white rounded-lg border border-slate-200 hover:border-slate-400 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden bg-slate-100 aspect-4/3">
                  <SafeImage
                    src={category.image}
                    alt={category.title}
                    fallbackTitle={category.title}
                    className="group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                    0{category.order}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-amber-700">
                <span>Explore Category</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCT FAMILY SHOWCASE (D) — STEEL & CUTTING TOOLS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Technical Product Families
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Engineered Raw Materials & Machine Tooling
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Selected product families illustrating standard supply dimensions, alloy specifications, and tooling grades commonly requested by industrial workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steel Showcase Card */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/9 bg-slate-100">
                <SafeImage
                  src="/images/categories/steel-products.jpg"
                  alt="Engineering and Alloy Steel Rounds"
                  aspectRatioClass="aspect-16/9"
                  fallbackTitle="Engineering Steels"
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 font-bold text-xs px-2.5 py-1 rounded">
                  Core Steel Supply
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Engineering, Alloy & Tool Steels
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Supplying EN8 (080M40), EN19 (4140), EN24 (4340), D2 cold work tool steel, and structural bright bars. Cut-to-length billets and full bar lengths delivered with heat certification.
                  </p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded border border-slate-200 space-y-2 text-xs">
                  <span className="font-semibold text-slate-800 block">Common Diameters & Profiles:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Ø 20mm", "Ø 32mm", "Ø 50mm", "Ø 75mm", "Ø 100mm", "Ø 150mm", "Ø 200mm", "Gauge Plates", "D2 Flats"].map((size) => (
                      <span key={size} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-[11px] font-mono">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between">
              <Link
                href="/products/steel-products"
                className="text-xs font-bold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1.5"
              >
                <span>Browse Steel Product Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/request-a-quotation"
                className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition-colors"
              >
                Quote Steel
              </Link>
            </div>
          </div>

          {/* Cutting Tools Showcase Card */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/9 bg-slate-100">
                <SafeImage
                  src="/images/categories/cutting-machining-tools.jpg"
                  alt="Carbide End Mills and Turning Inserts"
                  aspectRatioClass="aspect-16/9"
                  fallbackTitle="Carbide Cutting Tools"
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 font-bold text-xs px-2.5 py-1 rounded">
                  Precision Tooling
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Solid Carbide & Indexable Machining Tools
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    High-performance end mills (AlTiN coated), ISO turning inserts (CNMG, WNMG, DNMG), milling cutters (APMT), and cobalt drill sets for CNC and conventional machine shops.
                  </p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded border border-slate-200 space-y-2 text-xs">
                  <span className="font-semibold text-slate-800 block">Workpiece Materials Handled:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Carbon Steels (P)", "Alloy Steels (P)", "Stainless Steels (M)", "Cast Irons (K)", "Hardened Steels up to 55 HRC"].map((mat) => (
                      <span key={mat} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-[11px]">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between">
              <Link
                href="/products/cutting-machining-tools"
                className="text-xs font-bold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1.5"
              >
                <span>Browse Cutting Tool Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/request-a-quotation"
                className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition-colors"
              >
                Quote Tooling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MACHINERY & INDUSTRIAL EQUIPMENT SECTION (E)
          ========================================================================= */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Industrial Plant & Workshop Equipment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Machinery Sourcing & Supply
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                We supply new and quality-inspected machine tools, CNC lathes, machining centers, horizontal bandsaws, and sheet metal fabrication equipment matched to your operational capacity.
              </p>
            </div>
            <Link
              href="/machinery-equipment"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore Machinery Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Machinery Transparency Disclaimer */}
          <div className="bg-slate-800/80 border border-slate-700 rounded p-4 text-xs text-slate-300">
            <span className="font-semibold text-amber-400">Procurement Process Note: </span>
            {MACHINERY_DISCLAIMER}
          </div>

          {/* Machinery Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MACHINERY_CATEGORIES.slice(0, 3).map((machine) => (
              <div
                key={machine.id}
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <SafeImage
                    src={machine.image}
                    alt={machine.title}
                    aspectRatioClass="aspect-16/9"
                    fallbackTitle={machine.title}
                  />
                  <div className="p-5 space-y-3">
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                      {machine.category}
                    </span>
                    <h3 className="font-bold text-white text-base">
                      {machine.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {machine.description}
                    </p>
                    <div className="text-xs font-mono text-slate-400 pt-1">
                      <span className="text-slate-500">Typical Scope: </span>
                      {machine.typicalCapacity}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/request-a-quotation`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-semibold transition-colors"
                  >
                    <span>Enquire About This Machine Class</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENQUIRY CALL TO ACTION (G)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8 sm:p-12 border border-slate-700 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Fast B2B Quotations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Specific Part Number, Drawing or Bill of Materials?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Send us your requisition list, engineering drawings, required steel grades, or machine specifications. Our procurement team in Bulawayo will assess your requirement and return a formal itemized quotation.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-product quotation support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Technical spec verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp & Email dispatch</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/request-a-quotation"
              className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded shadow text-center flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Open Request for Quotation Form</span>
            </Link>

            <a
              href="https://wa.me/263790420836"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded text-center flex items-center justify-center gap-2 transition-colors"
            >
              <span>Instant Chat on WhatsApp (+263 790 420 836)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
