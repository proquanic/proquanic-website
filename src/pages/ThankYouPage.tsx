import React, { useEffect, useState } from "react";
import { Link, useRouter } from "../utils/router";
import { COMPANY } from "../config/company";
import { trackRfqConversion } from "../utils/analytics";
import {
  CheckCircle2,
  MessageSquare,
  Mail,
  ArrowRight,
  ArrowLeft,
  FileText,
  Clock,
  Building2,
  Phone,
  Copy,
  Printer,
  ShieldCheck,
  Check,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

interface LastRfqSession {
  referenceNumber: string;
  submittedAt: number;
  companyName?: string;
  contactName?: string;
  summary?: string;
  requiresTracking?: boolean;
}

export const ThankYouPage: React.FC = () => {
  const { navigate } = useRouter();
  const [rfqSession, setRfqSession] = useState<LastRfqSession | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 1. Retrieve the latest successful submission session from sessionStorage
    if (typeof window !== "undefined" && window.sessionStorage) {
      try {
        const stored = window.sessionStorage.getItem("proquanic_last_rfq");
        if (stored) {
          const parsed: LastRfqSession = JSON.parse(stored);
          setRfqSession(parsed);

          // 2. Trigger Google Ads conversion ONLY for a confirmed, genuine RFQ submission
          if (parsed.requiresTracking && parsed.referenceNumber) {
            trackRfqConversion({
              submissionId: parsed.referenceNumber,
            });

            // Mark as tracked immediately in sessionStorage to prevent duplicate fires on refresh
            parsed.requiresTracking = false;
            window.sessionStorage.setItem("proquanic_last_rfq", JSON.stringify(parsed));
          }
        }
      } catch (e) {
        console.error("Error reading RFQ session details", e);
      }
    }
  }, []);

  const handleCopyManifest = () => {
    if (rfqSession?.summary) {
      navigator.clipboard.writeText(rfqSession.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // WhatsApp link: with requisition summary if available, otherwise general RFQ reference
  const whatsappUrl = rfqSession?.summary
    ? `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
        `Hello Proquanic, I have submitted RFQ Reference ${rfqSession.referenceNumber}:\n\n${rfqSession.summary}`
      )}`
    : `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
        `Hello Proquanic, I am following up on my Request for Quotation${
          rfqSession?.referenceNumber ? ` (Ref: ${rfqSession.referenceNumber})` : ""
        }. Please assist with pricing and availability.`
      )}`;

  // Email link
  const emailUrl = rfqSession?.summary
    ? `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
        `Proquanic RFQ Confirmation — Ref: ${rfqSession.referenceNumber}`
      )}&body=${encodeURIComponent(rfqSession.summary)}`
    : `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
        `Quotation Enquiry — Proquanic (Pvt) Ltd`
      )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/request-a-quotation" className="hover:text-slate-900 transition-colors">
              Request a Quotation
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Thank You</span>
          </nav>
          <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
            Proquanic Procurement Desk
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-8">
        {/* Main Success Confirmation Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Top Banner Accent */}
          <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

          <div className="p-6 sm:p-10 space-y-8">
            {/* Header / Checkmark Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Submission Status: Successfully Received
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Thank You! Your Quotation Request Has Been Received.
                </h1>
              </div>
            </div>

            {/* Supporting Message */}
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-900">
                Your RFQ has been successfully submitted to Proquanic (Pvt) Ltd.
              </p>
              <p className="text-slate-600">
                Our procurement team will review your requirements, specifications and quantities before preparing your quotation.
              </p>
              <p className="text-slate-600">
                We appreciate the opportunity to serve your business.
              </p>
            </div>

            {/* Prominent RFQ Reference Box (When Available) */}
            {rfqSession?.referenceNumber && (
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    Requisition Reference Number
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold tracking-wide text-white">
                    {rfqSession.referenceNumber}
                  </div>
                  <p className="text-xs text-slate-300">
                    Quote this reference number when contacting our team for expedited status updates.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(rfqSession.referenceNumber);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied" : "Copy Ref"}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>
            )}

            {/* Official Confirmation Details Grid */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4">
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Official Procurement Desk Particulars</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium block">Submission Status</span>
                  <div className="font-semibold text-emerald-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Successfully Received</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium block">Company</span>
                  <div className="font-semibold text-slate-900">
                    Proquanic (Pvt) Ltd
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium block">Official Quotations Email</span>
                  <a
                    href="mailto:sales@proquanic.co.zw"
                    className="font-mono font-semibold text-slate-900 hover:text-amber-600 transition-colors block truncate"
                  >
                    sales@proquanic.co.zw
                  </a>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium block">Direct WhatsApp Desk</span>
                  <a
                    href="https://wa.me/263790420836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-emerald-700 hover:text-emerald-800 transition-colors block"
                  >
                    +263 790 420 836
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  Physical Address: 7010 Gwabalanda, Bulawayo, Zimbabwe · Operational Hours: Mon–Fri 08:00–17:00
                </span>
              </div>
            </div>

            {/* Customer Primary Action Buttons */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Direct Communication & Navigation
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Proquanic</span>
                </a>

                {/* Email Button */}
                <a
                  href={emailUrl}
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 text-center"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Email Proquanic</span>
                </a>

                {/* Submit Another RFQ */}
                <Link
                  href="/request-a-quotation"
                  className="px-4 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2 text-center"
                >
                  <FileText className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Submit Another RFQ</span>
                </Link>

                {/* Return to Homepage */}
                <Link
                  href="/"
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 text-center"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>Return to Homepage</span>
                </Link>
              </div>
            </div>

            {/* Optional Requisition Manifest Accordion / Viewer (if session available) */}
            {rfqSession?.summary && (
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Your Submitted Requisition Summary</span>
                  </span>
                  <button
                    onClick={handleCopyManifest}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-medium px-2 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? "Copied!" : "Copy Summary"}</span>
                  </button>
                </div>
                <pre className="p-4 bg-slate-900 text-amber-400 text-xs font-mono leading-relaxed overflow-x-auto max-h-64 whitespace-pre-wrap">
                  {rfqSession.summary}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* 3-Step What Happens Next Overview */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              Quotation Workflow
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              What Happens Next?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="text-amber-600 font-mono">01.</span>
                <span>Technical Review</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our technical team examines your material grades, dimensions, part drawings, or machinery specifications to ensure complete compatibility.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-slate-400 pl-4">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="text-slate-600 font-mono">02.</span>
                <span>Sourcing & Lead Time</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We check certified mill stock, warehouse availability, and freight schedules to Bulawayo, Harare, or direct-to-site across Zimbabwe.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="text-emerald-600 font-mono">03.</span>
                <span>Formal Quotation</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                An itemised quotation with unit pricing, valid payment terms, and estimated delivery dates is issued directly to your email and WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Need Urgent Assistance Callout */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">
              Have an Urgent Breakdown or Time-Sensitive Project?
            </h4>
            <p className="text-xs text-slate-300">
              Contact our Bulawayo desk directly by telephone or WhatsApp for immediate expedited sourcing.
            </p>
          </div>
          <a
            href="https://wa.me/263790420836"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call / WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
