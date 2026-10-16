import React from "react";
import { COMPANY } from "../config/company";
import { useRouter } from "../utils/router";
import { CATEGORIES } from "../data/categories";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const { currentPath } = useRouter();

  // Generate context-aware prefill message based on current route
  let message = COMPANY.contact.whatsappDefaultText;

  if (currentPath.startsWith("/products/")) {
    const slug = currentPath.replace("/products/", "").split("/")[0];
    const category = CATEGORIES.find((c) => c.slug === slug);
    if (category) {
      message = `Hello Proquanic, I am enquiring about your ${category.title} industrial supply category. Please assist me with availability, specifications, and a quotation.`;
    }
  } else if (currentPath === "/machinery-equipment") {
    message =
      "Hello Proquanic, I am enquiring about industrial machinery and workshop equipment. Please assist me with technical assessment and a quotation.";
  } else if (currentPath === "/request-a-quotation") {
    message =
      "Hello Proquanic, I have an industrial procurement quotation requirement. Please connect me with your sales desk.";
  }

  const encodedUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside
      aria-label="Contact Proquanic via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center group select-none"
    >
      <a
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Proquanic on WhatsApp (+263 79 042 0836)"
        className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white fill-white/20" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-medium leading-none text-emerald-100 uppercase tracking-wider">
            WhatsApp Desk
          </span>
          <span className="text-xs font-bold leading-tight font-mono text-white">
            +263 79 042 0836
          </span>
        </div>
      </a>
    </aside>
  );
};
