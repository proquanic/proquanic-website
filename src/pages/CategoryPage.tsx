import React, { useState } from "react";
import { Link, useRouter } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { CATEGORIES } from "../data/categories";
import { COMPANY } from "../config/company";
import { useRfq } from "../context/RfqContext";
import { ProductRecord } from "../types";
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Check,
  FileText,
  MessageSquare,
  ShieldAlert,
  ChevronRight,
  Layers,
  Wrench,
} from "lucide-react";

interface CategoryPageProps {
  slug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Category Not Found</h1>
        <p className="text-sm text-slate-600">
          The requested category does not exist in our catalogue.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Categories</span>
        </Link>
      </div>
    );
  }

  const handleAddToRfq = (product: ProductRecord) => {
    addItem({
      title: product.name,
      category: category.title,
      partNumberOrGrade: product.code || "",
      quantity: "1",
      unit: product.unitOfMeasure || "Piece",
      specifications: Object.entries(product.specifications)
        .map(([k, v]) => `${k}: ${v}`)
        .join("; "),
    });

    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  // Find adjacent categories for internal linking
  const currentIndex = CATEGORIES.findIndex((c) => c.slug === slug);
  const prevCategory = currentIndex > 0 ? CATEGORIES[currentIndex - 1] : null;
  const nextCategory = currentIndex < CATEGORIES.length - 1 ? CATEGORIES[currentIndex + 1] : null;

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Proquanic, I am enquiring about your ${category.title} industrial supply category. Please provide availability and a quotation.`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/products" className="hover:text-slate-900">Products</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">{category.title}</span>
      </nav>

      {/* Category Hero Header */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-5 relative bg-slate-100">
          <SafeImage
            src={category.image}
            alt={category.title}
            aspectRatioClass="aspect-4/3 lg:aspect-auto lg:h-full"
            fallbackTitle={category.title}
            className="h-full"
            priority={true}
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-mono px-3 py-1 rounded font-bold">
            Category 0{category.order} of 10
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Industrial Product Scope
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {category.overview}
            </p>

            {category.commonStandards && (
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Applicable Specifications & Grades:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.commonStandards.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded text-xs font-mono font-medium"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {category.procurementNote && (
              <p className="text-xs text-slate-500 italic pt-1">
                Note: {category.procurementNote}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <Link
              href="/request-a-quotation"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded shadow-xs transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Request Quotation for {category.title}</span>
            </Link>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded shadow-xs transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquire</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scope Disclaimer Box */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded p-4 text-xs text-slate-800">
        <strong className="text-amber-900">Catalogue Notice: </strong>
        {COMPANY.scopeStatement}
      </div>

      {/* Product Families Breakdown */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Category Breakdown
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Product Families in {category.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.families.map((family) => (
            <div
              key={family.id}
              className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base">
                  {family.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {family.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Typical Items Supplied:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {family.representativeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                <span className="text-slate-400">Standard Scope: </span>
                {family.typicalSpecs}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Representative Product Records */}
      {category.sampleProducts.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Technical Specifications
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Representative Product Records
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Example verified configurations. Custom dimensions, alternate tolerances, and volume requisitions quoted upon enquiry.
            </p>
          </div>

          <div className="space-y-8">
            {category.sampleProducts.map((product) => {
              const isAdded = !!addedItemIds[product.id];
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {product.code && (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-mono text-xs rounded font-semibold border border-slate-200">
                            {product.code}
                          </span>
                        )}
                        <span className="text-xs text-slate-500">{product.family}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToRfq(product)}
                      className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold transition-all ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to RFQ Basket</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Quotation Basket</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Specifications Table */}
                  <div className="border border-slate-200 rounded overflow-hidden">
                    <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-800 border-b border-slate-200">
                      Technical Parameters & Properties
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs">
                      <div className="divide-y divide-slate-100">
                        {Object.entries(product.specifications)
                          .slice(0, Math.ceil(Object.keys(product.specifications).length / 2))
                          .map(([param, val]) => (
                            <div key={param} className="p-3 flex justify-between gap-4">
                              <span className="text-slate-500 font-medium">{param}</span>
                              <span className="font-mono text-slate-900 text-right font-medium">
                                {val}
                              </span>
                            </div>
                          ))}
                      </div>
                      <div className="divide-y divide-slate-100">
                        {Object.entries(product.specifications)
                          .slice(Math.ceil(Object.keys(product.specifications).length / 2))
                          .map(([param, val]) => (
                            <div key={param} className="p-3 flex justify-between gap-4">
                              <span className="text-slate-500 font-medium">{param}</span>
                              <span className="font-mono text-slate-900 text-right font-medium">
                                {val}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Sizes and Applications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {product.commonGradesOrSizes && (
                      <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                        <span className="font-semibold text-slate-800 block">
                          Standard Sizes / Available Profiles:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.commonGradesOrSizes.map((sz) => (
                            <span
                              key={sz}
                              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-[11px] font-mono"
                            >
                              {sz}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.applications && (
                      <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                        <span className="font-semibold text-slate-800 block">
                          Verified Industrial Applications:
                        </span>
                        <ul className="space-y-1 text-slate-700">
                          {product.applications.map((app, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="text-amber-500">✓</span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Internal Category Navigation Footer */}
      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {prevCategory ? (
          <Link
            href={`/products/${prevCategory.slug}`}
            className="inline-flex items-center gap-2 text-slate-700 hover:text-amber-600 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevCategory.title}</span>
          </Link>
        ) : <div />}

        {nextCategory ? (
          <Link
            href={`/products/${nextCategory.slug}`}
            className="inline-flex items-center gap-2 text-slate-700 hover:text-amber-600 font-medium"
          >
            <span>Next: {nextCategory.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};
