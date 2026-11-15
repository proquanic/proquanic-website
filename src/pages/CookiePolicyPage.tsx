import React from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import { useConsent } from "../context/ConsentContext";
import { CONSENT_POLICY_VERSION, CONSENT_RETENTION_DAYS } from "../utils/consent";
import {
  ChevronRight,
  SlidersHorizontal,
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const CookiePolicyPage: React.FC = () => {
  const { consent, openPreferences, rejectOptional } = useConsent();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Cookie Policy</span>
      </nav>

      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Transparency &amp; Visitor Controls
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cookie Policy
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          Policy Version: {CONSENT_POLICY_VERSION} · Proquanic (Pvt) Ltd
        </p>
      </div>

      {/* Live Consent Status & Quick Control Card */}
      <div className="bg-[#0B192C] text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <h2 className="text-sm sm:text-base font-bold">Your Current Consent Settings</h2>
            </div>
            <p className="text-xs text-slate-300">
              {consent
                ? `Last updated on ${new Date(consent.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })} (Policy v${consent.version}).`
                : "You have not yet saved optional cookie preferences. Optional tracking technologies remain disabled."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={openPreferences}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Manage Cookie Preferences</span>
            </button>
            {(consent?.analytics || consent?.marketing) && (
              <button
                type="button"
                onClick={rejectOptional}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded border border-slate-600 transition-colors cursor-pointer"
              >
                Withdraw Optional Consent
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-2 bg-slate-900/70 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Essential Storage: Active</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/70 rounded-lg px-3 py-2">
            {consent?.analytics ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
            )}
            <span>Analytics (Metricool): {consent?.analytics ? "Enabled" : "Disabled"}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/70 rounded-lg px-3 py-2">
            {consent?.marketing ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
            )}
            <span>Marketing (Google Ads Tag): {consent?.marketing ? "Enabled" : "Disabled"}</span>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            1. What Cookies and Similar Technologies Are
          </h2>
          <p>
            Cookies are small text files stored in your web browser when you visit a website. Websites can also use browser storage mechanisms—specifically <code className="font-mono text-xs">localStorage</code> and <code className="font-mono text-xs">sessionStorage</code>—and client-side scripts to support core website functionality or, where permitted, measure website usage and advertising effectiveness.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            2. Why Proquanic Uses These Technologies
          </h2>
          <p>Proquanic (Pvt) Ltd uses browser technologies for two distinct purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Essential operation:</strong> Remembering items you add to your Request for Quotation (RFQ) basket, displaying confirmation details after submitting an RFQ, and saving your privacy preference choices.
            </li>
            <li>
              <strong>Optional measurement (only with your consent):</strong> Loading website traffic analytics and advertising conversion measurement scripts if you explicitly opt in.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            3. Verified Technologies &amp; Categories Used on This Website
          </h2>
          <p>
            Based on a direct audit of the Proquanic website codebase, the following categories apply:
          </p>

          <div className="space-y-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-bold text-slate-950">
                A. Essential Storage &amp; Functionality (Always Active)
              </h3>
              <p className="text-xs text-slate-700">
                These browser storage entries are strictly necessary for functions you request and cannot be switched off because core quotation features rely on them. They are stored locally in your browser rather than advertising networks.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-bold text-slate-950">
                B. Analytics Technologies (Optional — Disabled Until Consent)
              </h3>
              <p className="text-xs text-slate-700">
                <strong>Metricool</strong> (<code className="font-mono text-[11px]">https://tracker.metricool.com/resources/be.js</code>) is integrated into the codebase to measure page visits and traffic performance. It is blocked from loading until you grant Analytics consent.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
              <h3 className="text-sm font-bold text-slate-950">
                C. Marketing &amp; Advertising Technologies (Optional — Disabled Until Consent)
              </h3>
              <p className="text-xs text-slate-700">
                <strong>Google Ads Tag</strong> (<code className="font-mono text-[11px]">https://www.googletagmanager.com/gtag/js?id=AW-18472318190</code>) is configured with Google Consent Mode to measure confirmed RFQ submissions when a conversion label is active. It remains blocked until you grant Marketing consent.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg my-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B192C] text-white font-semibold">
                <tr>
                  <th className="p-3">Identifier / Script</th>
                  <th className="p-3">Mechanism</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Verified Purpose</th>
                  <th className="p-3">Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr>
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    proquanic_rfq_requisition_items
                  </td>
                  <td className="p-3">localStorage</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Preserves items added to your RFQ quotation basket across page views.</td>
                  <td className="p-3">Until basket cleared or browser storage cleared</td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    proquanic_last_rfq
                  </td>
                  <td className="p-3">sessionStorage</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Displays your RFQ reference and summary on the confirmation page.</td>
                  <td className="p-3">Current browser tab session</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    proquanic_rfq_converted_&lt;id&gt;
                  </td>
                  <td className="p-3">sessionStorage</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Prevents duplicate conversion event firing if the confirmation page is refreshed.</td>
                  <td className="p-3">Current browser tab session</td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    proquanic_cookie_consent
                  </td>
                  <td className="p-3">localStorage</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Stores your consent preferences, decision timestamp, and policy version.</td>
                  <td className="p-3">{CONSENT_RETENTION_DAYS} days (or until changed)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    Metricool (be.js)
                  </td>
                  <td className="p-3">External Script</td>
                  <td className="p-3">Analytics (Optional)</td>
                  <td className="p-3">Traffic and page-view analytics loaded only after Analytics consent.</td>
                  <td className="p-3">Governed by Metricool when active</td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="p-3 font-mono text-[11px] font-semibold text-slate-900">
                    Google tag (AW-18472318190)
                  </td>
                  <td className="p-3">External Script / Tag</td>
                  <td className="p-3">Marketing (Optional)</td>
                  <td className="p-3">Google Ads conversion measurement loaded only after Marketing consent.</td>
                  <td className="p-3">Governed by Google Ads when active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            4. Third-Party Resources and External Links
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Google Fonts:</strong> The website requests typography stylesheets from <code className="font-mono text-xs">fonts.googleapis.com</code> and <code className="font-mono text-xs">fonts.gstatic.com</code> to render site fonts cleanly.
            </li>
            <li>
              <strong>Outbound Communication &amp; Reference Links:</strong> Links to WhatsApp (<code className="font-mono text-xs">wa.me</code>), LinkedIn, Facebook, Instagram, and external technical standards or manufacturer pages only send you to those third-party services if you choose to click them.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            5. How to Manage or Withdraw Consent
          </h2>
          <p>
            You can change or withdraw your consent at any time using the{" "}
            <button
              type="button"
              onClick={openPreferences}
              className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Cookie Preferences
            </button>{" "}
            control available here and in the website footer. When you withdraw consent for Analytics or Marketing technologies, the site disables those categories, stops triggering optional tracking scripts, updates Google Consent Mode to denied, and removes accessible first-party tracking scripts and identifiers stored in your browser.
          </p>
          <p>
            You can also clear cookies and site storage directly through your web browser settings at any time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            6. How Long Preferences Are Retained
          </h2>
          <p>
            Your saved privacy decision is retained in <code className="font-mono text-xs">localStorage</code> under <code className="font-mono text-xs">proquanic_cookie_consent</code> for{" "}
            <strong>{CONSENT_RETENTION_DAYS} days</strong>, unless you update your preferences earlier, withdraw consent, clear browser storage, or a new policy version requires re-confirmation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            7. Related Privacy Policy &amp; Contact Information
          </h2>
          <p>
            For information on how Proquanic collects, stores, and handles RFQ business details and confidential technical drawings, please read our{" "}
            <Link
              href="/privacy-policy"
              className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>If you have questions about cookies or privacy practices, contact us at:</p>
          <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-1 font-mono text-xs text-slate-800">
            <p>
              <strong>Proquanic (Pvt) Ltd</strong>
            </p>
            <p>Address: 7010 Gwabalanda, Bulawayo, Zimbabwe</p>
            <p>Email: {COMPANY.contact.email}</p>
            <p>Phone / WhatsApp: {COMPANY.contact.phoneDisplay}</p>
          </div>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
        <Link href="/privacy-policy" className="text-orange-600 font-semibold hover:underline">
          View Privacy Policy
        </Link>
        <Link href="/" className="text-slate-700 font-semibold hover:underline">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
};
