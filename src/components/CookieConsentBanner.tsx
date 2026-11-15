import React, { useEffect, useState } from "react";
import { ShieldCheck, SlidersHorizontal, X, Lock, BarChart3, Megaphone, Globe } from "lucide-react";
import { Link } from "../utils/router";
import { useConsent } from "../context/ConsentContext";
import { CONSENT_POLICY_VERSION, CONSENT_RETENTION_DAYS } from "../utils/consent";

export const CookieConsentBanner: React.FC = () => {
  const {
    consent,
    showBanner,
    isPreferencesOpen,
    acceptAll,
    rejectOptional,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useConsent();

  // Never preselect optional categories before explicit consent
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(
    consent?.analytics ?? false
  );
  const [marketingEnabled, setMarketingEnabled] = useState<boolean>(
    consent?.marketing ?? false
  );

  // Sync draft toggles whenever preference modal opens or stored consent changes
  useEffect(() => {
    setAnalyticsEnabled(consent?.analytics ?? false);
    setMarketingEnabled(consent?.marketing ?? false);
  }, [consent, isPreferencesOpen]);

  const handleSaveCustom = () => {
    savePreferences({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  };

  return (
    <>
      {/* First-Time Visitor Cookie Consent Banner */}
      {showBanner && !isPreferencesOpen && (
        <section
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-50 bg-[#0B192C] text-white border-t-2 border-orange-500 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Your Privacy Matters
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  Proquanic uses essential technologies to operate this website. With your permission, we may also use optional analytics and other technologies to understand website usage and improve your experience. You can manage your preferences at any time.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[11px] text-slate-400">
                  <Link
                    href="/cookie-policy"
                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 font-medium"
                  >
                    Cookie Policy
                  </Link>
                  <span aria-hidden="true">·</span>
                  <Link
                    href="/privacy-policy"
                    className="text-slate-300 hover:text-white underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Three Equally Clear Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={rejectOptional}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded border border-slate-600 transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-[#0B192C] text-xs font-bold rounded transition-colors cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Manage Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cookie Preferences Modal */}
      {isPreferencesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
        >
          <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#0B192C] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-orange-500/60">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <h2
                    id="cookie-preferences-title"
                    className="text-base sm:text-lg font-extrabold tracking-tight"
                  >
                    Cookie &amp; Privacy Preferences
                  </h2>
                  <p className="text-[11px] text-slate-300">
                    Policy version {CONSENT_POLICY_VERSION} · Preferences retained for {CONSENT_RETENTION_DAYS} days
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closePreferences}
                aria-label="Close cookie preferences"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed">
                Choose which optional technologies you allow on the Proquanic website. Essential storage remains active so core features such as navigation, your quotation basket, and privacy settings work properly.
              </p>

              {/* Category 1: Essential */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#0B192C] shrink-0" />
                    <h3 className="font-bold text-slate-950 text-sm">Essential Cookies &amp; Storage</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-slate-200 text-slate-800 font-semibold text-[11px] uppercase tracking-wide shrink-0">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Required for security, page navigation, and features you explicitly request—including your Request for Quotation (RFQ) basket (<code className="font-mono text-[11px]">localStorage: proquanic_rfq_requisition_items</code>), RFQ confirmation screen state (<code className="font-mono text-[11px]">sessionStorage: proquanic_last_rfq</code>), conversion deduplication state (<code className="font-mono text-[11px]">sessionStorage: proquanic_rfq_converted_*</code>), and storing your consent choice (<code className="font-mono text-[11px]">localStorage: proquanic_cookie_consent</code>, {CONSENT_RETENTION_DAYS} days).
                </p>
              </div>

              {/* Category 2: Analytics (Metricool) */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-orange-600 shrink-0" />
                    <h3 className="font-bold text-slate-950 text-sm">Analytics Technologies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      aria-label="Toggle Analytics Technologies"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-400 rounded-full peer peer-checked:bg-orange-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Used to measure page visits and understand how visitors use the website. Service configured in this site: <strong className="text-slate-900">Metricool</strong> (<code className="font-mono text-[11px]">tracker.metricool.com/resources/be.js</code>). Remains disabled and blocked from loading until you opt in.
                </p>
              </div>

              {/* Category 3: Marketing (Google Ads Tag) */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-4 h-4 text-orange-600 shrink-0" />
                    <h3 className="font-bold text-slate-950 text-sm">Marketing &amp; Advertising Technologies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      aria-label="Toggle Marketing and Advertising Technologies"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-400 rounded-full peer peer-checked:bg-orange-600 after:content-[''] after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Used to measure advertising campaign effectiveness when a visitor submits a confirmed RFQ. Service configured in this site: <strong className="text-slate-900">Google Ads Tag</strong> (<code className="font-mono text-[11px]">googletagmanager.com/gtag/js</code>, tag ID <code className="font-mono text-[11px]">AW-18472318190</code>, with Google Consent Mode). Remains disabled and blocked from loading until you opt in.
                </p>
              </div>

              {/* Third-Party Resources Disclosure */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-600 shrink-0" />
                  <h3 className="font-bold text-slate-950 text-xs uppercase tracking-wider">
                    Third-Party Resources &amp; External Links
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Typography stylesheets load from <strong className="text-slate-800">Google Fonts</strong> (<code className="font-mono text-[11px]">fonts.googleapis.com</code>) for page presentation. External links to WhatsApp (<code className="font-mono text-[11px]">wa.me</code>), LinkedIn, Facebook, Instagram, and technical references only open external platforms when you click them.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <Link
                  href="/cookie-policy"
                  onClick={closePreferences}
                  className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                >
                  Read Full Cookie Policy
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/privacy-policy"
                  onClick={closePreferences}
                  className="text-slate-600 hover:text-slate-900 underline underline-offset-2"
                >
                  Read Privacy Policy
                </Link>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={rejectOptional}
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded border border-slate-300 transition-colors cursor-pointer"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2.5 bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-bold rounded transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow-xs transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
