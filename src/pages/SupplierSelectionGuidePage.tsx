import React, { useState, useEffect } from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import {
  ChevronRight,
  Share2,
  Check,
  Printer,
  ArrowLeft,
  FileText,
  MessageSquare,
  Mail,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const SupplierSelectionGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/supplier-you-want-vs-supplier-you-need";

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I would like to discuss industrial procurement and quotation requirements for our business."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors shrink-0">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href="/blog?category=Procurement%20Insights"
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Procurement Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              What If the Supplier You Want Isn't the Supplier Your Business Needs?
            </span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
        <article className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Article Header */}
            <header className="space-y-5 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/blog?category=Procurement%20Insights"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
                >
                  Procurement Insights
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-14">14 November 2026</time>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>5 min read</span>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proquanic Technical Desk</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                What If the Supplier You Want Isn't the Supplier Your Business Needs?
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The suppliers we chase, the value we overlook, and why the cheapest quotation doesn't always lead to the best business decision.
              </p>
            </header>

            {/* Featured Image — No caption, no text overlays, preserves subject */}
            <div className="max-w-3xl mx-auto">
              <div className="relative aspect-[3/2] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/assets/aistudio/proquanic-industrial-procurement-supplier-selection-zimbabwe_96b08ed3.png"
                  alt="Industrial procurement professional reviewing a purchasing document in an engineering supply environment."
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            {/* Complete Original Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <p>
                Every business wants reliable suppliers. Someone who offers competitive prices, delivers on time, understands technical requirements and makes procurement easier.
              </p>
              <p>
                Ideally, we want a supplier who has everything we need, whenever we need it, at a price that fits our budget.
              </p>
              <p>
                It sounds reasonable.
              </p>
              <p>
                But how often do businesses stop to examine whether the suppliers they pursue are actually the ones best positioned to solve their problems?
              </p>
              <p>
                In procurement, expectations and reality don't always agree.
              </p>
              <p>
                We become attached to familiar brands, established suppliers, attractive quotations and promises of availability. Sometimes, we spend so much time chasing what we believe is the perfect supplier that we overlook other opportunities to get the job done.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                The cheapest quotation isn't always the best deal.
              </h2>
              <p>
                A low purchase price can be attractive, particularly when procurement departments are under pressure to reduce expenditure.
              </p>
              <p>
                But what happens when the cutting tool has a shorter service life? What happens when the replacement arrives late, the specifications are incorrect or the product fails to deliver the expected performance?
              </p>
              <p>
                The original saving can quickly become an expensive mistake.
              </p>
              <p>
                For engineering and manufacturing businesses, the real cost of a purchase extends beyond the amount appearing on a quotation.
              </p>
              <p>
                There are production delays, machine downtime, replacement costs, lost working hours and the additional effort required to resolve supplier problems.
              </p>
              <p>
                A better purchasing decision considers the value delivered over the product's working life, not simply its initial price.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                Sometimes, the supplier you overlook is the one who solves your problem.
              </h2>
              <p>
                Businesses often develop long-standing relationships with familiar suppliers. There is nothing wrong with loyalty, particularly when a supplier consistently delivers.
              </p>
              <p>
                However, familiarity should never become a limitation.
              </p>
              <p>
                The industrial supply market is broad. Different suppliers specialise in different products, manufacturers and technical requirements.
              </p>
              <p>
                A business looking for a particular{" "}
                <Link
                  href="/products/cutting-machining-tools"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  industrial cutting tool
                </Link>
                , machining consumable or engineering component may discover that its usual supplier cannot provide the required specification or competitive pricing.
              </p>
              <p>
                That doesn't necessarily mean the product is unavailable.
              </p>
              <p>
                It may simply mean the business needs a better sourcing approach.
              </p>
              <p>
                Having access to additional suppliers creates opportunities to compare specifications, prices, brands and availability before making a purchasing decision.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                A supplier's promises mean very little without execution.
              </h2>
              <p>
                A professional quotation is important, but procurement doesn't end when the purchase order is issued.
              </p>
              <p>
                The real test begins afterwards.
              </p>
              <p>
                Can the supplier obtain the correct product? Are the specifications accurate? Are the costs transparent? Is the delivery arrangement clear? Does the supplier communicate when circumstances change?
              </p>
              <p>
                These questions matter because procurement is ultimately about ensuring that businesses obtain the right products under the right commercial conditions.
              </p>
              <p>
                A supplier who communicates honestly and manages expectations can be more valuable than one who makes impressive promises but struggles to deliver.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                Overcommitment can be just as expensive as poor purchasing.
              </h2>
              <p>
                Businesses sometimes commit to suppliers, products or purchasing arrangements without adequately considering their actual requirements.
              </p>
              <p>
                They may purchase quantities they don't immediately need, accept unsuitable alternatives or commit to products simply because they are available.
              </p>
              <p>
                In other cases, procurement teams spend excessive time trying to secure a particular brand when an equally suitable alternative could meet the technical requirements.
              </p>
              <p>
                This doesn't mean compromising on quality.
              </p>
              <p>
                It means understanding the application, checking the specifications and evaluating alternatives before making a decision.
              </p>
              <p>
                Good procurement is not about buying whatever is available. It is about finding the most suitable solution for the job.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                The value of a sourcing partner
              </h2>
              <p>
                Modern procurement requires more than collecting quotations.
              </p>
              <p>
                Businesses need access to reliable manufacturers, competitive supply channels, accurate product information and practical sourcing solutions.
              </p>
              <p>
                This is particularly important for{" "}
                <Link
                  href="/machinery-equipment"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  engineering and manufacturing operations
                </Link>{" "}
                where the wrong product can affect productivity, quality and operating costs.
              </p>
              <p>
                At Proquanic, our focus is on helping businesses source industrial cutting tools, machining consumables and{" "}
                <Link
                  href="/products"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  engineering supplies
                </Link>
                .
              </p>
              <p>
                We believe that finding the right product should begin with understanding the customer's actual requirement.
              </p>
              <p>
                That means considering the application, specifications, preferred brands, budget and sourcing requirements before recommending a purchasing solution.
              </p>
              <p>
                Because sometimes, the answer isn't finding another supplier who sells the same product.
              </p>
              <p>
                It's finding a better way to meet the requirement.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4">
                A final thought for procurement professionals and business owners:
              </h2>
              <p>
                Before placing your next order, ask yourself:
              </p>
              <p>
                Are you choosing a supplier because they are genuinely the best fit for your business, or simply because they are the supplier you have always used?
              </p>
              <p>
                The difference could have a significant impact on your purchasing costs, operational efficiency and long-term business performance.
              </p>
              <p>
                At the end of the day, successful procurement isn't about finding the supplier with the most impressive promises.
              </p>
              <p>
                It's about finding the right solution and ensuring it delivers value where your business needs it most.
              </p>
            </div>
          </div>
        </article>

        {/* Clear Link Back to Blog */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Proquanic Blog &amp; Technical Insights</span>
          </Link>
        </div>

        {/* Existing Website Enquiry & Contact Component */}
        <aside className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                Proquanic (Pvt) Ltd · Bulawayo, Zimbabwe
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Discuss Your Industrial Supply Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Submit product specifications, drawings, or quotation enquiries directly to our Bulawayo procurement desk. &ldquo;{COMPANY.tagline}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/request-a-quotation"
                className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quotation</span>
              </Link>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Sales</span>
              </a>
              <Link
                href="/contact"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded border border-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Related Articles from Published Blog Registry */}
        <RelatedArticles
          currentSlug="/blog/supplier-you-want-vs-supplier-you-need"
          count={3}
        />
      </div>
    </div>
  );
};
