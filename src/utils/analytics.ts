import { GOOGLE_ADS_CONFIG } from "../config/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __testGoogleAdsConversion?: (mockLabel?: string) => unknown;
  }
}

/**
 * Checks if the Google tag (gtag.js) is available on the window object.
 */
export const isGtagAvailable = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

/**
 * Validates whether a conversion label is a legitimate Google Ads label string
 * and not an empty value or unedited placeholder.
 */
export const isValidConversionLabel = (label?: string): boolean => {
  if (!label || typeof label !== "string") return false;
  const trimmed = label.trim();
  const placeholders = [
    "CONVERSION_LABEL",
    "YOUR_CONVERSION_LABEL",
    "LABEL_HERE",
    "INSERT_LABEL_HERE",
    "YOUR_LABEL",
    "",
  ];
  return trimmed.length > 0 && !placeholders.includes(trimmed.toUpperCase());
};

export interface TrackRfqConversionOptions {
  submissionId?: string;
  transactionValue?: number;
  currency?: string;
  customLabel?: string;
  forceTest?: boolean;
}

export interface TrackConversionResult {
  status: "fired" | "skipped_duplicate" | "skipped_no_label" | "skipped_no_gtag";
  sendTo?: string;
  message: string;
}

/**
 * Tracks a successful RFQ submission conversion event in Google Ads.
 * 
 * Strict Conversion Requirements Handled:
 * 1. Only fires upon backend acceptance of an RFQ requisition.
 * 2. Does NOT count visiting the RFQ page.
 * 3. Does NOT count validation errors or failed submissions.
 * 4. Deduplication: Ensures conversion is fired only once per successful submission ID.
 * 5. Prevents duplicate conversions when customers refresh or revisit the confirmation screen.
 * 6. Never dispatches invalid placeholder labels to Google Ads.
 */
export const trackRfqConversion = (
  options: TrackRfqConversionOptions = {}
): TrackConversionResult => {
  const { submissionId, transactionValue, currency = "USD", customLabel, forceTest } = options;

  // 1. Duplicate check via sessionStorage if submissionId is provided
  const dedupKey = submissionId ? `proquanic_rfq_converted_${submissionId}` : null;
  if (dedupKey && typeof window !== "undefined" && window.sessionStorage) {
    try {
      if (window.sessionStorage.getItem(dedupKey) === "true") {
        const dupMessage = `Google Ads conversion for RFQ submission (${submissionId}) has already been recorded in this session. Duplicate conversion prevented.`;
        if (typeof console !== "undefined") {
          console.info(`[Google Ads] ${dupMessage}`);
        }
        return {
          status: "skipped_duplicate",
          message: dupMessage,
        };
      }
    } catch {
      // Ignore sessionStorage access errors in sandboxed environments
    }
  }

  // 2. Resolve conversion label
  const label = (customLabel || GOOGLE_ADS_CONFIG.rfqConversionLabel || "").trim();

  // 3. Verify label validity
  if (!isValidConversionLabel(label)) {
    const diagnosticMsg =
      `[Google Ads] Google tag (${GOOGLE_ADS_CONFIG.conversionId}) is loaded globally. ` +
      `The RFQ was successfully submitted and confirmed. However, the conversion event was paused because no active Google Ads conversion label is configured. ` +
      `To activate live tracking in Google Ads, set the VITE_GOOGLE_ADS_RFQ_CONVERSION_LABEL environment variable or configure 'rfqConversionLabel' in src/config/analytics.ts with your genuine label from Google Ads.`;

    if (typeof console !== "undefined") {
      console.warn(diagnosticMsg);
    }

    return {
      status: "skipped_no_label",
      message: diagnosticMsg,
    };
  }

  const sendTo = `${GOOGLE_ADS_CONFIG.conversionId}/${label}`;

  // 4. Verify gtag availability
  if (!isGtagAvailable()) {
    const warningMsg = `[Google Ads] window.gtag function not found. Verify the Google tag script is running.`;
    if (typeof console !== "undefined") {
      console.warn(warningMsg);
    }
    return {
      status: "skipped_no_gtag",
      message: warningMsg,
    };
  }

  // 5. Build conversion parameters
  const eventParams: Record<string, unknown> = {
    send_to: sendTo,
  };

  if (typeof transactionValue === "number" && !isNaN(transactionValue)) {
    eventParams.value = transactionValue;
    eventParams.currency = currency;
  }

  if (submissionId) {
    eventParams.transaction_id = submissionId;
  }

  // 6. Fire Google Ads conversion event
  try {
    window.gtag!("event", "conversion", eventParams);

    // 7. Mark as tracked in sessionStorage to prevent duplicate fires on refresh
    if (dedupKey && typeof window !== "undefined" && window.sessionStorage) {
      try {
        window.sessionStorage.setItem(dedupKey, "true");
      } catch {
        // Ignore quota/sandbox errors
      }
    }

    const successMsg = `Google Ads conversion event sent to ${sendTo}`;
    if (typeof console !== "undefined" && (forceTest || import.meta.env.DEV)) {
      console.log(`[Google Ads] Conversion Dispatched:`, eventParams);
    }

    return {
      status: "fired",
      sendTo,
      message: successMsg,
    };
  } catch (err) {
    const errorMsg = `Error dispatching gtag conversion: ${String(err)}`;
    if (typeof console !== "undefined") {
      console.error(`[Google Ads] ${errorMsg}`);
    }
    return {
      status: "skipped_no_gtag",
      message: errorMsg,
    };
  }
};

// Expose testing helper in browser window during development or for QA verification
if (typeof window !== "undefined") {
  window.__testGoogleAdsConversion = (mockLabel?: string) => {
    return trackRfqConversion({
      submissionId: `TEST-${Date.now()}`,
      customLabel: mockLabel || "TEST_LABEL_VERIFICATION",
      forceTest: true,
    });
  };
}
