import React, { useState } from "react";
import { Link, useRouter } from "../utils/router";
import { BrandWordmark } from "./BrandWordmark";
import { useRfq } from "../context/RfqContext";
import { COMPANY } from "../config/company";
import { Phone, Menu, X, FileText, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { totalItemsCount } = useRfq();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Machinery & Equipment", href: "/machinery-equipment" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Bulawayo, Zimbabwe</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-orange-400 font-medium">{COMPANY.tagline}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.contact.phoneTel}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono text-slate-200">{COMPANY.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="hover:text-white transition-colors hidden md:inline"
            >
              {COMPANY.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[72px] sm:min-h-[80px] py-2 sm:py-2.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Official Brand Identity & Wordmark */}
        <div className="shrink-0 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center group focus:outline-none"
            aria-label="Proquanic (Pvt) Ltd — Home"
          >
            <BrandWordmark size="header" />
          </Link>
        </div>

        {/* Zone 2: Navigation Links (single-line, clean text) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href || (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isActive
                    ? "text-amber-600 font-semibold border-b-2 border-amber-600"
                    : "hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & RFQ Requisition Cart */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href="/request-a-quotation"
            className="relative inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors whitespace-nowrap"
            title="View Quotation Requisition List"
          >
            <FileText className="w-4 h-4 text-slate-700" />
            <span>RFQ Basket</span>
            {totalItemsCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-amber-600 text-white rounded-full">
                {totalItemsCount}
              </span>
            )}
          </Link>

          <Link
            href="/request-a-quotation"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded shadow-sm transition-all whitespace-nowrap"
          >
            <span>Request Quotation</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/request-a-quotation"
            className="p-2 text-slate-700 hover:text-slate-900 relative"
            aria-label="RFQ Basket"
          >
            <FileText className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold bg-amber-600 text-white rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-150">
          <div className="py-2 space-y-1">
            <button
              onClick={() => handleLinkClick("/")}
              className={`w-full text-left px-3 py-2.5 rounded font-medium text-sm ${
                currentPath === "/" ? "bg-amber-50 text-amber-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== "/" && currentPath.startsWith(link.href));
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`w-full text-left px-3 py-2.5 rounded font-medium text-sm ${
                    isActive ? "bg-amber-50 text-amber-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick("/request-a-quotation")}
              className="w-full py-2.5 px-4 bg-slate-900 text-white rounded text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Request a Quotation</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-500 text-slate-950 text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItemsCount} items
                </span>
              )}
            </button>

            <a
              href={`tel:${COMPANY.contact.phoneTel}`}
              className="w-full py-2.5 px-4 border border-slate-300 text-slate-800 rounded text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {COMPANY.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
