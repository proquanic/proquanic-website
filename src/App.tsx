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
