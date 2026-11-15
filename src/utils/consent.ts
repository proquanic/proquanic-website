export const CONSENT_POLICY_VERSION = "2026-11-15";
export const CONSENT_STORAGE_KEY = "proquanic_cookie_consent";
export const CONSENT_RETENTION_DAYS = 180;

export const METRICOOL_TRACKING_HASH = "4e577ab6a41fb23d97b8232025e682d5";
export const GOOGLE_ADS_TAG_ID = "AW-18472318190";

const METRICOOL_SCRIPT_ID = "proquanic-metricool-script";
const GTAG_SCRIPT_ID = "proquanic-gtag-script";

export interface CookieConsentRecord {
  version: string;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  decisionType: "accept_all" | "reject_optional" | "custom";
  updatedAt: string;
  expiresAt: string;
}

declare global {
  interface Window {
    beTracker?: {
      t: (opts: { hash: string }) => void;
    };
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

/**
 * Reads and validates the saved consent record from localStorage.
 * Returns null if no decision exists, if the policy version changed, or if it has expired.
 */
export function getStoredConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsentRecord>;
    if (
      !parsed ||
      parsed.version !== CONSENT_POLICY_VERSION ||
      parsed.essential !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.expiresAt !== "string"
    ) {
      return null;
    }
    const expiresMs = Date.parse(parsed.expiresAt);
    if (Number.isNaN(expiresMs) || Date.now() > expiresMs) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed as CookieConsentRecord;
  } catch {
    return null;
  }
}

/**
 * Persists the visitor's consent decision in localStorage for CONSENT_RETENTION_DAYS.
 */
export function saveConsentRecord(
  analytics: boolean,
  marketing: boolean,
  decisionType: CookieConsentRecord["decisionType"]
): CookieConsentRecord {
  const now = new Date();
  const expires = new Date(now.getTime() + CONSENT_RETENTION_DAYS * 24 * 60 * 60 * 1000);
  const record: CookieConsentRecord = {
    version: CONSENT_POLICY_VERSION,
    essential: true,
    analytics,
    marketing,
    decisionType,
    updatedAt: now.toISOString(),
    expiresAt: expires.toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Ignore storage errors if blocked by strict browser privacy mode
    }
  }
  return record;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent()?.analytics === true;
}

export function hasMarketingConsent(): boolean {
  return getStoredConsent()?.marketing === true;
}

/**
 * Expires accessible first-party cookies matching optional analytics/marketing prefixes.
 * Never removes essential RFQ or consent storage keys.
 */
function clearAccessibleOptionalCookies(prefixes: string[]): void {
  if (typeof document === "undefined" || !document.cookie) return;
  const cookies = document.cookie.split(";");
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  const domainParts = hostname ? hostname.split(".") : [];

  for (const cookie of cookies) {
    const eqIndex = cookie.indexOf("=");
    const name = (eqIndex > -1 ? cookie.slice(0, eqIndex) : cookie).trim();
    if (!name) continue;

    const matchesPrefix = prefixes.some(
      (prefix) => name === prefix || name.startsWith(prefix)
    );
    if (!matchesPrefix) continue;

    // Expire on root path and current host/domain variants where accessible via JS
    const domainsToTry: (string | null)[] = [null];
    if (hostname && hostname !== "localhost") {
      domainsToTry.push(hostname, `.${hostname}`);
      if (domainParts.length >= 2) {
        const rootDomain = domainParts.slice(-2).join(".");
        domainsToTry.push(rootDomain, `.${rootDomain}`);
      }
    }

    for (const domain of domainsToTry) {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}; SameSite=Lax`;
    }
  }
}

function removeScriptById(id: string): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function ensureGtagStub(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

function enableMetricool(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  if (typeof window.beTracker?.t === "function") {
    try {
      window.beTracker.t({ hash: METRICOOL_TRACKING_HASH });
    } catch {
      // Ignore tracker execution error
    }
    return;
  }

  if (document.getElementById(METRICOOL_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = METRICOOL_SCRIPT_ID;
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://tracker.metricool.com/resources/be.js";
  const fireTracker = () => {
    if (hasAnalyticsConsent() && typeof window.beTracker?.t === "function") {
      try {
        window.beTracker.t({ hash: METRICOOL_TRACKING_HASH });
      } catch {
        // Ignore tracker execution error
      }
    }
  };
  script.onload = fireTracker;
  document.head.appendChild(script);
}

function disableMetricool(): void {
  removeScriptById(METRICOOL_SCRIPT_ID);
  if (typeof window !== "undefined") {
    try {
      delete window.beTracker;
    } catch {
      window.beTracker = undefined;
    }
    try {
      for (const key of Object.keys(window.localStorage)) {
        if (key.toLowerCase().includes("metricool") || key.startsWith("beTracker")) {
          window.localStorage.removeItem(key);
        }
      }
      for (const key of Object.keys(window.sessionStorage)) {
        if (key.toLowerCase().includes("metricool") || key.startsWith("beTracker")) {
          window.sessionStorage.removeItem(key);
        }
      }
    } catch {
      // Ignore storage access errors
    }
  }
  clearAccessibleOptionalCookies(["_metricool", "metricool", "beTracker"]);
}

function enableGoogleAdsTag(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  window[`ga-disable-${GOOGLE_ADS_TAG_ID}`] = false;
  ensureGtagStub();

  window.gtag!("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  if (!document.getElementById(GTAG_SCRIPT_ID)) {
    window.gtag!("js", new Date());
    window.gtag!("config", GOOGLE_ADS_TAG_ID);

    const script = document.createElement("script");
    script.id = GTAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`;
    document.head.appendChild(script);
  }
}

function disableGoogleAdsTag(): void {
  if (typeof window !== "undefined") {
    window[`ga-disable-${GOOGLE_ADS_TAG_ID}`] = true;
    if (typeof window.gtag === "function") {
      try {
        window.gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
        });
      } catch {
        // Ignore gtag error on revocation
      }
    }
    try {
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.length = 0;
      }
    } catch {
      // Ignore dataLayer error
    }
  }

  removeScriptById(GTAG_SCRIPT_ID);
  clearAccessibleOptionalCookies(["_gcl_", "_ga", "_gid", "_gat"]);
}

/**
 * Technically enforces consent choices in the browser:
 * - Never loads optional scripts before explicit consent.
 * - Loads only consented categories.
 * - Stops tracking scripts and clears accessible optional cookies/identifiers upon revocation.
 */
export function applyConsentPreferences(record: CookieConsentRecord | null): void {
  if (typeof window === "undefined") return;

  if (record?.analytics) {
    enableMetricool();
  } else {
    disableMetricool();
  }

  if (record?.marketing) {
    enableGoogleAdsTag();
  } else {
    disableGoogleAdsTag();
  }
}

/**
 * Triggers a Metricool pageview only if Analytics consent is actively granted.
 */
export function trackAnalyticsPageViewIfConsented(): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  if (typeof window.beTracker?.t === "function") {
    try {
      window.beTracker.t({ hash: METRICOOL_TRACKING_HASH });
    } catch {
      // Ignore tracker execution error
    }
  }
}
