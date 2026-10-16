import React, { useState } from "react";
import { COMPANY } from "../config/company";
import { Link } from "../utils/router";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const [quickContact, setQuickContact] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickContact.name || !quickContact.email || !quickContact.message) return;

    // Build mailto action
    const subject = `Proquanic Contact Inquiry from ${quickContact.name} (${quickContact.company || "General"})`;
    const body = `Name: ${quickContact.name}\nCompany: ${quickContact.company}\nEmail: ${quickContact.email}\nPhone: ${quickContact.phone}\n\nMessage:\n${quickContact.message}`;

    window.location.href = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Direct Procurement Desk
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact Proquanic (Pvt) Ltd
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          Get in touch with our industrial procurement team in Bulawayo for product availability, cutting tool recommendations, steel billet orders, and machinery supply.
        </p>
      </div>

      {/* 3 Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Telephone Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="p-3 bg-amber-50 rounded-lg text-amber-600 w-fit">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Direct Telephone Line
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 font-mono">
              {COMPANY.contact.phoneDisplay}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Speak directly with our technical procurement officers during business hours.
            </p>
          </div>
          <a
            href={`tel:${COMPANY.contact.phoneTel}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 pt-2"
          >
            <span>Dial Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600 w-fit">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              WhatsApp Business Desk
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 font-mono">
              {COMPANY.contact.whatsappDisplay}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Ideal for sending drawings, photos of part number tags, or urgent requisition lists.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-2"
          >
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600 w-fit">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Official Requisition Email
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 break-all">
              {COMPANY.contact.email}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Send formal tender documents, purchase orders, and PDF technical specifications.
            </p>
          </div>
          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 pt-2"
          >
            <span>Compose Email</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Grid: Location details and Quick Message */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Physical Address & Operating Profile (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Physical Operations & Address
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Bulawayo Logistics Center
              </h2>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Address</span>
                  <p>{COMPANY.address.street}</p>
                  <p>{COMPANY.address.city}, {COMPANY.address.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Operating Hours</span>
                  <p>Monday – Friday: 08:00 – 17:00 (CAT)</p>
                  <p>Saturday: 08:30 – 12:30 (CAT)</p>
                  <p className="text-slate-500">Sunday & Public Holidays: Closed (WhatsApp requisitions logged for next business day)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Registered Entity</span>
                  <p>Proquanic (Pvt) Ltd</p>
                  <p className="italic text-slate-500">Tagline: "{COMPANY.tagline}"</p>
                </div>
              </div>
            </div>

            {/* Scope Statement */}
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Notice: </strong>
              {COMPANY.scopeStatement}
            </div>
          </div>
        </div>

        {/* Quick Message Form (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold text-slate-900">
              Send a General Enquiry
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              For structured quotations and multiple line items, use our dedicated{" "}
              <Link href="/request-a-quotation" className="text-amber-600 font-semibold underline">
                RFQ Portal
              </Link>
              .
            </p>
          </div>

          {sent ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded p-6 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-sm">Enquiry Prepared in Your Email Client</h4>
              <p className="text-xs text-slate-600">
                If your email client did not open automatically, send directly to:{" "}
                <strong className="text-slate-900 font-mono">{COMPANY.contact.email}</strong>.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-xs font-semibold text-amber-700 underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={quickContact.name}
                    onChange={(e) => setQuickContact({ ...quickContact, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Company Name</label>
                  <input
                    type="text"
                    value={quickContact.company}
                    onChange={(e) => setQuickContact({ ...quickContact, company: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500"
                    placeholder="Business / Workshop"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={quickContact.email}
                    onChange={(e) => setQuickContact({ ...quickContact, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500"
                    placeholder="email@company.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Phone / Mobile</label>
                  <input
                    type="tel"
                    value={quickContact.phone}
                    onChange={(e) => setQuickContact({ ...quickContact, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                    placeholder="+263 ..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Message / Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={quickContact.message}
                  onChange={(e) => setQuickContact({ ...quickContact, message: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:ring-1 focus:ring-amber-500"
                  placeholder="Tell us what industrial material, tooling, or machinery you need..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Transmit General Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
