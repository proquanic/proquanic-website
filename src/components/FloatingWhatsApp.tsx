import React from "react";
import { COMPANY } from "../config/company";

export const FloatingWhatsApp: React.FC = () => {
  const prefilledMessage =
    "Hello Proquanic, I would like to enquire about your industrial products, engineering supplies, machinery and equipment. Please assist me with product information and a quotation. My requirements are:";

  const encodedUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 select-none print:hidden"
    >
      <a
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Proquanic on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] min-w-[48px] min-h-[48px] justify-center"
      >
        {/* Official WhatsApp Vector Emblem */}
        <svg
          className="w-6 h-6 fill-white shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.83.497 3.618 1.442 5.184L2.046 22l4.928-1.373a9.99 9.99 0 0 0 5.057 1.404c5.534 0 10.031-4.496 10.031-10.031C22.062 6.496 17.565 2 12.031 2zm0 18.362c-1.574 0-3.111-.42-4.46-1.217l-.32-.188-3.313.923.94-3.235-.208-.332a8.318 8.318 0 0 1-1.275-4.313c0-4.603 3.738-8.341 8.341-8.341 4.603 0 8.341 3.738 8.341 8.341 0 4.603-3.738 8.362-8.341 8.362zm4.57-6.242c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.562.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.062-.125-.562-1.354-.771-1.854-.203-.488-.41-.422-.563-.43l-.479-.008c-.167 0-.438.063-.667.313-.23.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.76 2.688 4.266 3.771.596.258 1.062.412 1.425.528.6.191 1.146.164 1.577.1.48-.072 1.48-.605 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.167-.48-.292z" />
        </svg>

        {/* Text for desktop / larger viewports */}
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
