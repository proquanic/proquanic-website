/**
 * GOOGLE ADS & CONVERSION TRACKING CONFIGURATION
 * 
 * Google Ads Conversion ID: AW-18472318190
 * 
 * Conversion Label Configuration:
 * In accordance with Google Ads guidelines, the actual conversion label must be
 * obtained directly from your Google Ads account under:
 * Goals > Conversions > Summary > [Conversion Action Name] > Tag setup.
 * 
 * You can supply the conversion label via:
 * 1. Environment variable: VITE_GOOGLE_ADS_RFQ_CONVERSION_LABEL
 * 2. Or configure `rfqConversionLabel` directly below.
 * 
 * When unconfigured or left as a placeholder (e.g., 'CONVERSION_LABEL'), the
 * tracking system safely prevents sending invalid conversion calls to Google Ads
 * while logging clear diagnostics for verification and testing.
 */

export const GOOGLE_ADS_CONFIG = {
  conversionId: "AW-18472318190",
  // Set the actual conversion label string from Google Ads here or in environment:
  rfqConversionLabel: (import.meta.env.VITE_GOOGLE_ADS_RFQ_CONVERSION_LABEL as string) || "",
};
