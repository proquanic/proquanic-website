import React from "react";
import { Link } from "../utils/router";
import { BrandWordmark } from "./BrandWordmark";
import { COMPANY } from "../config/company";
import { CATEGORIES } from "../data/categories";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  FileText,
} from "lucide-react";

// Platform icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const WhatsAppOfficialGlyph = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.83.497 3.618 1.442 5.184L2.046 22l4.928-1.373a9.99 9.99 0 0 0 5.057 1.404c5.534 0 10.031-4.496 10.031-10.031C22.062 6.496 17.565 2 12.031 2zm0 18.362c-1.574 0-3.111-.42-4.46-1.217l-.32-.188-3.313.923.94-3.235-.208-.332a8.318 8.318 0 0 1-1.275-4.313c0-4.603 3.738-8.341 8.341-8.341 4.603 0 8.341 3.738 8.341 8.341 0 4.603-3.738 8.362-8.341 8.362zm4.57-6.242c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.562.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.062-.125-.562-1.354-.771-1.854-.203-.488-.41-.422-.563-.43l-.479-.008c-.167 0-.438.063-.667.313-.23.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.76 2.688 4.266 3.771.596.258 1.062.412 1.425.528.6.191 1.146.164 1.577.1.48-.072 1.48-.605 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.167-.48-.292z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const rfqEmailSubject = encodeURIComponent("Industrial Products and Equipment — Quotation Request");
  const rfqEmailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI would like to request a quotation for industrial products / equipment:\n\n1. Company Name:\n2. Contact Person:\n3. Delivery Destination (City/Town):\n4. Required Items / Specifications / Quantities:\n\nPlease assist with formal pricing, availability and delivery arrangements.\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${rfqEmailSubject}&body=${rfqEmailBody}`;

  const whatsappMessage = encodeURIComponent(COMPANY.contact.whatsappDefaultText);
  const whatsappLink = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#0B192C] text-slate-300 text-sm border-t-2 border-orange-600/80">
      {/* Top Scope & Quotation Banner */}
      <div className="bg-[#081220] border-b border-slate-800 px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-1 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Industrial Procurement & Supply Notice
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY.scopeStatement}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/request-a-quotation"
              className="text-xs font-bold text-slate-950 bg-orange-500 hover:bg-orange-400 px-4 py-2.5 rounded shadow transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Submit RFQ Requisition</span>
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] px-3.5 py-2.5 rounded shadow transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <WhatsAppOfficialGlyph />
              <span>WhatsApp Sales</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 5-Column Industrial Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Column 1 — Proquanic */}
          <div className="space-y-4 lg:col-span-1">
            <div className="space-y-1">
              <Link href="/" className="inline-block group">
                <BrandWordmark size="lg" variant="light" withSubtitle={true} />
              </Link>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {COMPANY.procurementStatement}
            </p>

            <div className="space-y-2 pt-2 text-xs border-t border-slate-800 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${COMPANY.contact.phoneTel}`}
                  className="font-mono text-white hover:text-orange-400 transition-colors"
                >
                  {COMPANY.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-white hover:text-orange-400 transition-colors break-all"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Industrial Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-2">
              Industrial Products
            </h4>
            <ul className="space-y-1.5 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-orange-500/60 text-[10px]">›</span>
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link
                  href="/machinery-equipment"
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1.5 py-0.5"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Machinery & Equipment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Customer Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-2">
              Customer Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/request-a-quotation"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Request a Quotation (RFQ)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Products / Catalogue</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Industries We Serve</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>About Proquanic</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Contact Proquanic</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/site-delivery"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Site Delivery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-orange-500/60 text-[10px]">›</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              Site delivery arrangements confirmed according to order requirements, cargo profile and destination.
            </div>
          </div>

          {/* Column 4 — Industries We Serve */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-2">
              Industries We Serve
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {COMPANY.industries.map((ind, i) => (
                <li key={i} className="flex items-start gap-1.5 text-slate-300 leading-snug">
                  <span className="text-orange-500 font-bold text-[10px] mt-0.5">·</span>
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/industries"
                className="text-orange-400 hover:text-orange-300 text-xs font-semibold inline-flex items-center gap-1"
              >
                <span>Full Industries Overview</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 5 — Contact and Social Channels */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-2">
              Contact & Social Channels
            </h4>

            {/* Direct Quick Action Buttons */}
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY.contact.phoneTel}`}
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded border border-slate-700/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span className="font-medium">Call Proquanic</span>
                </div>
                <span className="font-mono text-[11px] text-slate-300">{COMPANY.contact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded border border-slate-700/80 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#25D366]">
                    <WhatsAppOfficialGlyph />
                  </span>
                  <span className="font-medium">WhatsApp Proquanic</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
              </a>

              <a
                href={emailQuotationLink}
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded border border-slate-700/80 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span className="font-medium">Email Sales Team</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
              </a>

              <Link
                href="/request-a-quotation"
                className="w-full flex items-center justify-center gap-2 p-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow transition-colors text-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request a Quotation</span>
              </Link>
            </div>

            {/* Official Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Connect With Proquanic
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com/in/proquanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-[#0077b5] text-slate-300 hover:text-white rounded border border-slate-700 transition-colors"
                  aria-label="Proquanic LinkedIn Profile"
                  title="LinkedIn: /in/proquanic"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://www.facebook.com/proquanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-[#1877f2] text-slate-300 hover:text-white rounded border border-slate-700 transition-colors"
                  aria-label="Proquanic Facebook Page"
                  title="Facebook: /proquanic"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/proquanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-[#e4405f] text-slate-300 hover:text-white rounded border border-slate-700 transition-colors"
                  aria-label="Proquanic Instagram Profile"
                  title="Instagram: @proquanic"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Professional Footer Finish */}
      <div className="border-t border-slate-800/80 bg-[#07101C] px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} Proquanic (Pvt) Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>7010 Gwabalanda, Bulawayo, Zimbabwe</span>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-400">
            Proudly serving businesses across Zimbabwe and Southern Africa
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/request-a-quotation" className="hover:text-orange-400 transition-colors">
              RFQ Terms
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
