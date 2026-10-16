import React from "react";
import { Link } from "../utils/router";
import { BrandWordmark } from "./BrandWordmark";
import { COMPANY } from "../config/company";
import { CATEGORIES } from "../data/categories";
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Scope Disclaimer Banner */}
      <div className="bg-slate-900 border-b border-slate-800/80 px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider block">
              Catalogue Scope Statement
            </span>
            <p className="text-xs text-slate-300 max-w-4xl leading-relaxed">
              {COMPANY.scopeStatement}
            </p>
          </div>
          <Link
            href="/request-a-quotation"
            className="shrink-0 text-xs font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            Submit Enquiry / Drawings
          </Link>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Col 1: Identity & Location (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <BrandWordmark size="lg" variant="light" />
          <p className="text-slate-300 text-sm font-medium">
            {COMPANY.tagline}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            B2B industrial procurement and supply partner specializing in engineering steels, precision cutting tools, machine tooling, and industrial machinery across Zimbabwe and Southern Africa.
          </p>

          <div className="space-y-2.5 pt-2 text-xs">
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{COMPANY.address.full}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`tel:${COMPANY.contact.phoneTel}`} className="hover:text-white transition-colors font-mono">
                {COMPANY.contact.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
              <a
                href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors font-mono"
              >
                WhatsApp: {COMPANY.contact.whatsappDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Top Product Categories */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
            Industrial Categories
          </h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: More Categories & Equipment */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
            Equipment & Tools
          </h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.slice(5, 10).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="hover:text-amber-400 transition-colors block py-0.5"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
            <li className="pt-1 border-t border-slate-800">
              <Link
                href="/machinery-equipment"
                className="text-amber-400 hover:text-amber-300 transition-colors block py-0.5 font-medium"
              >
                Machinery & Equipment →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate & Connectivity */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
            Navigation & Legal
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/products" className="hover:text-white transition-colors">
                All Products (10 Categories)
              </Link>
            </li>
            <li>
              <Link href="/machinery-equipment" className="hover:text-white transition-colors">
                Machinery Sourcing Portal
              </Link>
            </li>
            <li>
              <Link href="/request-a-quotation" className="hover:text-white transition-colors">
                Request a Quotation (RFQ)
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Proquanic
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Logistics
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy & Data Policy
              </Link>
            </li>
          </ul>

          <div className="pt-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Verified Business Profiles
            </span>
            <div className="space-y-1.5 text-xs">
              {COMPANY.socialMedia.map((sm) => (
                <div key={sm.platform} className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{sm.platform}</span>
                  {sm.status === "verified" ? (
                    <a
                      href={sm.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-mono"
                    >
                      <span>Active</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-500 italic">In Verification</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-slate-900 bg-black/60 px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Proquanic (Pvt) Ltd. All rights reserved. 7010 Gwabalanda, Bulawayo, Zimbabwe.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/request-a-quotation" className="hover:text-slate-300 transition-colors">
              RFQ Terms
            </Link>
            <span>·</span>
            <a href="https://wa.me/263790420836" className="text-emerald-400 hover:underline">
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
