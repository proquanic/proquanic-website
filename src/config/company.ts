/**
 * PROQUANIC (PVT) LTD — VERIFIED COMPANY CONFIGURATION
 * 
 * Strict compliance with verified company information:
 * - Company: Proquanic (Pvt) Ltd
 * - Business: B2B industrial procurement and supply, including machinery and industrial equipment
 * - Address: 7010 Gwabalanda, Bulawayo, Zimbabwe
 * - Email: proquanic@gmail.com
 * - Call: +263 79 042 0836
 * - WhatsApp: +263 79 042 0836
 * - Tagline: If you need it. We will find it.
 */

export const COMPANY = {
  name: "Proquanic (Pvt) Ltd",
  shortName: "Proquanic",
  legalName: "Proquanic (Pvt) Ltd",
  tagline: "If you need it. We will find it.",
  headline: "Industrial Supplies, Machinery and Engineering Solutions",
  subheadline:
    "B2B industrial procurement and supply for engineering facilities, workshops, mines, and industrial operations across Zimbabwe and Southern Africa.",
  
  // Physical and contact details
  address: {
    street: "7010 Gwabalanda",
    city: "Bulawayo",
    country: "Zimbabwe",
    full: "7010 Gwabalanda, Bulawayo, Zimbabwe",
  },
  
  contact: {
    email: "proquanic@gmail.com",
    phoneDisplay: "+263 79 042 0836",
    phoneTel: "+263790420836",
    whatsappDisplay: "+263 79 042 0836",
    whatsappNumber: "263790420836",
    whatsappDefaultText:
      "Hello Proquanic, I would like to enquire about an industrial product or equipment requirement. Please assist me with a quotation.",
  },

  /**
   * PROVISIONAL DESIGN PALETTE:
   * Brand identity: 'Pro' and 'Quanic' must be on the same baseline as one continuous word.
   * Pro: Primary brand colour (Deep Precision Navy)
   * Quanic: Secondary brand colour (Precision Industrial Amber)
   * Centralised here so they can be changed without editing component markup.
   */
  branding: {
    proColor: "#0F172A", // Deep Industrial Slate Navy
    proTextColorClass: "text-slate-900",
    quanicColor: "#D97706", // Precision Industrial Amber / Gold
    quanicTextColorClass: "text-amber-600",
  },

  /**
   * Verified social media status:
   * Configured centrally. Only publish verified handles.
   */
  socialMedia: [
    {
      platform: "LinkedIn",
      url: "",
      status: "pending_verification",
      note: "Company profile in verification",
    },
    {
      platform: "Facebook",
      url: "",
      status: "pending_verification",
      note: "Business page in verification",
    },
    {
      platform: "WhatsApp Direct",
      url: "https://wa.me/263790420836",
      status: "verified",
      note: "Active B2B Procurement Desk",
    },
  ],

  /**
   * Mandatory Catalogue Scope Statement
   */
  scopeStatement:
    "The products shown are illustrative examples of our industrial supply capabilities, not an exhaustive catalogue. If you cannot find the product, specification or equipment you need, contact us with your requirements for assessment and quotation.",
};
