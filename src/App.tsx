import React, { useEffect } from "react";
import { RouterProvider, useRouter } from "./utils/router";
import { RfqProvider } from "./context/RfqContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CategoryPage } from "./pages/CategoryPage";
import { MachineryPage } from "./pages/MachineryPage";
import { RfqPage } from "./pages/RfqPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { SiteDeliveryPage } from "./pages/SiteDeliveryPage";
import { En8VsEn19GuidePage } from "./pages/En8VsEn19GuidePage";
import { HssPunchesGuidePage } from "./pages/HssPunchesGuidePage";
import { BandsawBladeGuidePage } from "./pages/BandsawBladeGuidePage";
import { DrillBitsGuidePage } from "./pages/DrillBitsGuidePage";
import { EndMillsGuidePage } from "./pages/EndMillsGuidePage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { CATEGORIES } from "./data/categories";

const AppContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Dynamic SEO Title and Meta Description synchronization
  useEffect(() => {
    let title = "Proquanic (Pvt) Ltd — Industrial Supplies & Machinery";
    let metaDescription =
      "B2B industrial procurement and supply catalogue for steel products, cutting tools, machinery, and engineering equipment in Zimbabwe.";

    if (currentPath === "/") {
      title = "Proquanic (Pvt) Ltd — Industrial Procurement, Machinery & Steel Supply";
      metaDescription =
        "B2B industrial procurement for engineering steels, cutting tools, tooling, machinery, and industrial supplies in Bulawayo, Zimbabwe.";
    } else if (currentPath === "/products") {
      title = "Industrial Products Catalogue — Proquanic (Pvt) Ltd";
      metaDescription =
        "Explore all 10 industrial supply categories: engineering steels, cutting tools, sawing, abrasives, workholding, metrology, and bearings.";
    } else if (currentPath.startsWith("/products/")) {
      const slug = currentPath.replace("/products/", "").split("/")[0];
      const category = CATEGORIES.find((c) => c.slug === slug);
      if (category) {
        title = `${category.title} — Proquanic Industrial Supply`;
        metaDescription = category.shortDescription;
      }
    } else if (currentPath === "/machinery-equipment") {
      title = "Machinery & Industrial Equipment Supply — Proquanic (Pvt) Ltd";
      metaDescription =
        "Procurement and supply of CNC lathes, machining centers, horizontal bandsaws, and sheet metal fabrication equipment.";
    } else if (currentPath === "/request-a-quotation") {
      title = "Request a Quotation (RFQ) — Proquanic (Pvt) Ltd";
      metaDescription =
        "Submit product lists, engineering drawings, steel specifications, or machinery requirements for itemized quotation.";
    } else if (currentPath === "/industries") {
      title = "Industries We Serve — Proquanic (Pvt) Ltd";
      metaDescription =
        "Serving mining, manufacturing, machine shops, steel fabrication, construction, and agriculture across Zimbabwe and Southern Africa.";
    } else if (currentPath === "/site-delivery") {
      title = "Site Delivery Arrangements — Proquanic (Pvt) Ltd";
      metaDescription =
        "Direct-to-site delivery arrangements confirmed according to order requirements, cargo weight, and destination across Zimbabwe.";
    } else if (currentPath === "/about") {
      title = "About Proquanic (Pvt) Ltd — Bulawayo, Zimbabwe";
      metaDescription =
        "Learn about Proquanic (Pvt) Ltd, our operational commitment 'If you need it. We will find it.', and technical supply capabilities.";
    } else if (currentPath === "/contact") {
      title = "Contact Procurement Desk — Proquanic (Pvt) Ltd";
      metaDescription =
        "Direct contact details: Phone +263 790 420 836, WhatsApp, and 7010 Gwabalanda, Bulawayo, Zimbabwe.";
    } else if (currentPath === "/privacy-policy") {
      title = "Privacy Policy — Proquanic (Pvt) Ltd";
      metaDescription =
        "Confidentiality and privacy terms for technical drawings, customer requisition specifications, and quotation data.";
    } else if (
      currentPath === "/guides/en8-vs-en19-steel" ||
      currentPath === "/guides/en8-vs-en19" ||
      currentPath === "/resources/en8-vs-en19-steel" ||
      currentPath === "/blog/en8-vs-en19-steel"
    ) {
      title = "EN8 vs EN19 Steel: Differences, Applications & How to Choose — Proquanic";
      metaDescription =
        "Comprehensive technical guide comparing EN8 (080M40) and EN19 (708M40/709M40) engineering steels for shafts, pins, gears, and machine components in Zimbabwe.";
    } else if (
      currentPath === "/blog/hss-punches-how-to-choose-replacement" ||
      currentPath === "/guides/hss-punches-how-to-choose-replacement" ||
      currentPath === "/resources/hss-punches-how-to-choose-replacement" ||
      currentPath === "/guides/hss-punches" ||
      currentPath === "/blog/hss-punches"
    ) {
      title = "HSS Punches: 7 Replacement Mistakes to Avoid | Proquanic";
      metaDescription =
        "Learn how to identify HSS punches, verify dimensions and tooling compatibility, avoid common replacement mistakes and prepare a better industrial tooling enquiry.";
    } else if (
      currentPath === "/blog/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/guides/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/resources/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/blog/bandsaw-blade-breaking" ||
      currentPath === "/guides/bandsaw-blade-breaking"
    ) {
      title = "Why Metal-Cutting Bandsaw Blades Break: 6 Causes | Proquanic";
      metaDescription =
        "Discover 6 critical causes of metal-cutting bandsaw blade breakage, tooth stripping, and cut wandering. Diagnostic guide and replacement ordering checklist for workshops.";
    } else if (
      currentPath === "/blog/why-drill-bits-burn-or-break" ||
      currentPath === "/guides/why-drill-bits-burn-or-break" ||
      currentPath === "/resources/why-drill-bits-burn-or-break" ||
      currentPath === "/blog/drill-bits-burning-breaking" ||
      currentPath === "/guides/drill-bits-burning-breaking"
    ) {
      title = "Why Drill Bits Burn or Break: 6 Causes | Proquanic";
      metaDescription =
        "Drill bits overheating, wearing quickly or breaking? Learn six possible causes, what to inspect and how to choose a suitable replacement for your workshop.";
    } else if (
      currentPath === "/blog/why-end-mills-break" ||
      currentPath === "/guides/why-end-mills-break" ||
      currentPath === "/resources/why-end-mills-break" ||
      currentPath === "/blog/end-mills-breakage" ||
      currentPath === "/guides/end-mills-breakage"
    ) {
      title = "Why End Mills Break: 7 Causes to Check | Proquanic";
      metaDescription =
        "End mills chipping or breaking during machining? Learn seven possible causes involving tool selection, cutting conditions, chip evacuation and machine setup.";
    } else if (
      currentPath === "/blog" ||
      currentPath === "/guides" ||
      currentPath === "/resources"
    ) {
      title = "Technical Articles & Engineering Guides — Proquanic (Pvt) Ltd";
      metaDescription =
        "In-depth technical guides on engineering steels (EN8 vs EN19), HSS tooling punches, bandsaw blade troubleshooting, drill bits, end mills, and industrial procurement in Zimbabwe.";
    }

    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute("content", metaDescription);
    }
  }, [currentPath]);

  // Route Resolver
  const renderCurrentView = () => {
    if (currentPath === "/" || currentPath === "") {
      return <HomePage />;
    }

    if (currentPath === "/products") {
      return <ProductsPage />;
    }

    if (currentPath.startsWith("/products/")) {
      const categorySlug = currentPath.replace("/products/", "").split("/")[0];
      return <CategoryPage slug={categorySlug} />;
    }

    if (
      currentPath === "/guides/en8-vs-en19-steel" ||
      currentPath === "/guides/en8-vs-en19" ||
      currentPath === "/resources/en8-vs-en19-steel" ||
      currentPath === "/blog/en8-vs-en19-steel"
    ) {
      return <En8VsEn19GuidePage />;
    }

    if (
      currentPath === "/blog/hss-punches-how-to-choose-replacement" ||
      currentPath === "/guides/hss-punches-how-to-choose-replacement" ||
      currentPath === "/resources/hss-punches-how-to-choose-replacement" ||
      currentPath === "/guides/hss-punches" ||
      currentPath === "/blog/hss-punches"
    ) {
      return <HssPunchesGuidePage />;
    }

    if (
      currentPath === "/blog/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/guides/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/resources/why-metal-cutting-bandsaw-blade-breaks" ||
      currentPath === "/blog/bandsaw-blade-breaking" ||
      currentPath === "/guides/bandsaw-blade-breaking"
    ) {
      return <BandsawBladeGuidePage />;
    }

    if (
      currentPath === "/blog/why-drill-bits-burn-or-break" ||
      currentPath === "/guides/why-drill-bits-burn-or-break" ||
      currentPath === "/resources/why-drill-bits-burn-or-break" ||
      currentPath === "/blog/drill-bits-burning-breaking" ||
      currentPath === "/guides/drill-bits-burning-breaking"
    ) {
      return <DrillBitsGuidePage />;
    }

    if (
      currentPath === "/blog/why-end-mills-break" ||
      currentPath === "/guides/why-end-mills-break" ||
      currentPath === "/resources/why-end-mills-break" ||
      currentPath === "/blog/end-mills-breakage" ||
      currentPath === "/guides/end-mills-breakage"
    ) {
      return <EndMillsGuidePage />;
    }

    if (
      currentPath === "/blog" ||
      currentPath === "/guides" ||
      currentPath === "/resources"
    ) {
      return <BlogIndexPage />;
    }

    if (currentPath === "/machinery-equipment") {
      return <MachineryPage />;
    }

    if (currentPath === "/request-a-quotation") {
      return <RfqPage />;
    }

    if (currentPath === "/industries") {
      return <IndustriesPage />;
    }

    if (currentPath === "/site-delivery") {
      return <SiteDeliveryPage />;
    }

    if (currentPath === "/about") {
      return <AboutPage />;
    }

    if (currentPath === "/contact") {
      return <ContactPage />;
    }

    if (currentPath === "/privacy-policy") {
      return <PrivacyPolicyPage />;
    }

    // 404 Fallback
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900">404</h1>
        <h2 className="text-lg font-bold text-slate-800">Page Not Found</h2>
        <p className="text-xs text-slate-600">
          The requested page could not be located in the Proquanic catalogue.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-5 py-2.5 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">{renderCurrentView()}</main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <RfqProvider>
        <AppContent />
      </RfqProvider>
    </RouterProvider>
  );
}
