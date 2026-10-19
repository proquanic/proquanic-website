import React from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import { ShieldCheck, FileText, Lock, Mail, ChevronRight } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Legal & Data Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          Last Updated: October 2026 · Proquanic (Pvt) Ltd
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Introduction & Scope</h2>
          <p>
            Proquanic (Pvt) Ltd ("Proquanic", "we", "us", or "our"), located at 7010 Gwabalanda, Bulawayo, Zimbabwe, respects the privacy of our business clients, procurement managers, engineers, and website visitors. This Privacy Policy details how we collect, store, and process corporate contact information, RFQ requisition specifications, and technical communications submitted through our website and digital desks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            As a B2B industrial procurement and supply business, we collect information strictly necessary to provide pricing, technical feasibility assessments, and supply fulfillment. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Client Identity:</strong> Contact person name, official title, company or trading business name.</li>
            <li><strong>Contact Details:</strong> Business email address, telephone and WhatsApp numbers, delivery workshop address or site destination.</li>
            <li><strong>Procurement Requirements:</strong> Required material grades, product types, quantities, tolerances, part numbers, and associated technical notes.</li>
            <li><strong>Technical Documentation:</strong> Engineering drawings, specification sheets, CAD references, or tender documents submitted for quotation estimation.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Confidentiality of Technical Drawings & Proprietary Specs</h2>
          <p>
            We recognize that manufacturing drawings, machining tolerances, and custom tool profiles often represent confidential proprietary intellectual property. Proquanic treats all submitted engineering drawings, CAD files, and technical requisition sheets with strict commercial confidence. These materials are utilized solely to assess manufacturing feasibility, source materials, and calculate commercial quotations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. How We Use Information</h2>
          <p>We process the information we collect for the following legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preparing formal itemized Requests for Quotation (RFQs) and proforma invoices.</li>
            <li>Verifying material certifications, heat numbers, and machine specifications with manufacturers.</li>
            <li>Coordinating freight forwarding, customs clearance, and delivery to your industrial facility.</li>
            <li>Responding to customer service, technical queries, or urgent breakdown inquiries.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Data Sharing & Third Parties</h2>
          <p>
            We do not sell, rent, or trade your personal or business data to advertisers or unrelated third parties. Information may only be shared with verified logistics partners, freight carriers, or manufacturing mills strictly to the extent required to execute your shipment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Data Retention & Security</h2>
          <p>
            We implement administrative and technical measures to protect quotation data and corporate communications against unauthorized access, loss, or misuse. Requisition records are archived according to standard commercial and statutory accounting requirements in Zimbabwe.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">7. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request the update or deletion of your business contact information, please contact our data desk at:
          </p>
          <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-1 font-mono text-xs text-slate-800">
            <p><strong>Proquanic (Pvt) Ltd</strong></p>
            <p>Address: 7010 Gwabalanda, Bulawayo, Zimbabwe</p>
            <p>Email: {COMPANY.contact.email}</p>
            <p>Phone: {COMPANY.contact.phoneDisplay}</p>
          </div>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
        <Link href="/" className="text-amber-700 font-semibold hover:underline">
          ← Back to Homepage
        </Link>
        <span>Proquanic (Pvt) Ltd · Bulawayo, Zimbabwe</span>
      </div>
    </div>
  );
};
