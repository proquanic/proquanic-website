import React, { useEffect } from "react";
import { RouterProvider, useRouter } from "./utils/router";
import { RfqProvider } from "./context/RfqContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CookieConsentBanner } from "./components/CookieConsentBanner";
import { ConsentProvider } from "./context/ConsentContext";
import { trackAnalyticsPageViewIfConsented } from "./utils/consent";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CategoryPage } from "./pages/CategoryPage";
import { MachineryPage } from "./pages/MachineryPage";
import { RfqPage } from "./pages/RfqPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { MiningMineralProcessingPage } from "./pages/MiningMineralProcessingPage";
import { SiteDeliveryPage } from "./pages/SiteDeliveryPage";
import { En8VsEn19GuidePage } from "./pages/En8VsEn19GuidePage";
import { HssPunchesGuidePage } from "./pages/HssPunchesGuidePage";
import { BandsawBladeGuidePage } from "./pages/BandsawBladeGuidePage";
import { DrillBitsGuidePage } from "./pages/DrillBitsGuidePage";
import { EndMillsGuidePage } from "./pages/EndMillsGuidePage";
import { SteelBuyingChecklistPage } from "./pages/SteelBuyingChecklistPage";
import { SteelComparisonPage } from "./pages/SteelComparisonPage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { DrillSelectionGuidePage } from "./pages/DrillSelectionGuidePage";
import { MillingViceGuidePage } from "./pages/MillingViceGuidePage";
import { SupplierSelectionGuidePage } from "./pages/SupplierSelectionGuidePage";
import { SpringSteelGuidePage } from "./pages/SpringSteelGuidePage";
import { K110ToolSteelGuidePage } from "./pages/K110ToolSteelGuidePage";
import { GrindingWheelGuidePage } from "./pages/GrindingWheelGuidePage";
import { BrassPlateGuidePage } from "./pages/BrassPlateGuidePage";
import { PneumaticConnectorsGuidePage } from "./pages/PneumaticConnectorsGuidePage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { CATEGORIES } from "./data/categories";

import { getSeoForPath, buildSchemaLdJson } from "./utils/seo";

const AppContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Dynamic SEO Title, Meta Description, OpenGraph, Canonical, and Schema.org synchronization
  useEffect(() => {
    const seo = getSeoForPath(currentPath);

    // 1. Document Title
    document.title = seo.title;

    // 2. Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.description);

    // 3. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.canonical);

    // 4. OpenGraph tags
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOgTag("og:title", seo.ogTitle || seo.title);
    setOgTag("og:description", seo.ogDescription || seo.description);
    setOgTag("og:url", seo.canonical);
    setOgTag("og:type", seo.ogType);
    setOgTag("og:image", seo.ogImage);
    setOgTag("og:site_name", "Proquanic (Pvt) Ltd");

    // 5. Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setTwitterTag("twitter:title", seo.ogTitle || seo.title);
    setTwitterTag("twitter:description", seo.ogDescription || seo.description);
    setTwitterTag("twitter:image", seo.ogImage);
    setTwitterTag("twitter:card", "summary_large_image");

    // 6. Robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", seo.noindex ? "noindex, nofollow" : "index, follow");

    // 6b. Keywords meta tag (when specified)
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (seo.keywords) {
      if (!keywordsMeta) {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.setAttribute("name", "keywords");
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute("content", seo.keywords);
    } else if (keywordsMeta) {
      keywordsMeta.remove();
    }

    // 7. Inject Schema.org JSON-LD Structured Data
    const schemas = buildSchemaLdJson(seo);
    let schemaScript = document.getElementById("proquanic-schema-ldjson") as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "proquanic-schema-ldjson";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemas);

    // 8. Notify Analytics tracker on SPA navigation only if Analytics consent is granted
    trackAnalyticsPageViewIfConsented();
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

    if (currentPath === "/blog/pneumatic-connectors-types-sizes-buying-guide") {
      return <PneumaticConnectorsGuidePage />;
    }

    if (currentPath === "/blog/brass-plate-grades-sizes-applications") {
      return <BrassPlateGuidePage />;
    }

    if (currentPath === "/blog/grinding-wheel-colours-specifications-buying-guide") {
      return <GrindingWheelGuidePage />;
    }

    if (currentPath === "/blog/k110-tool-steel-properties-applications") {
      return <K110ToolSteelGuidePage />;
    }

    if (currentPath === "/blog/spring-steel-properties-grades-applications") {
      return <SpringSteelGuidePage />;
    }

    if (currentPath === "/blog/supplier-you-want-vs-supplier-you-need") {
      return <SupplierSelectionGuidePage />;
    }

    if (
      currentPath === "/blog/how-to-choose-milling-machine-vice" ||
      currentPath === "/guides/how-to-choose-milling-machine-vice" ||
      currentPath === "/resources/how-to-choose-milling-machine-vice" ||
      currentPath === "/blog/milling-machine-vice-guide"
    ) {
      return <MillingViceGuidePage />;
    }

    if (
      currentPath === "/blog/hss-cobalt-carbide-drills" ||
      currentPath === "/guides/hss-cobalt-carbide-drills" ||
      currentPath === "/resources/hss-cobalt-carbide-drills" ||
      currentPath === "/blog/drill-selection-guide"
    ) {
      return <DrillSelectionGuidePage />;
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
      currentPath === "/blog/steel-buying-checklist-engineering-workshop" ||
      currentPath === "/guides/steel-buying-checklist-engineering-workshop" ||
      currentPath === "/resources/steel-buying-checklist-engineering-workshop" ||
      currentPath === "/blog/steel-buying-checklist" ||
      currentPath === "/guides/steel-buying-checklist"
    ) {
      return <SteelBuyingChecklistPage />;
    }

    if (
      currentPath === "/blog/en8-en19-mild-steel-comparison" ||
      currentPath === "/guides/en8-en19-mild-steel-comparison" ||
      currentPath === "/resources/en8-en19-mild-steel-comparison" ||
      currentPath === "/blog/en8-vs-en19-vs-mild-steel" ||
      currentPath === "/guides/en8-vs-en19-vs-mild-steel"
    ) {
      return <SteelComparisonPage />;
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

    if (currentPath === "/industries/mining-mineral-processing") {
      return <MiningMineralProcessingPage />;
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

    if (currentPath === "/cookie-policy") {
      return <CookiePolicyPage />;
    }

    if (currentPath === "/thank-you") {
      return <ThankYouPage />;
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
      <CookieConsentBanner />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <ConsentProvider>
        <RfqProvider>
          <AppContent />
        </RfqProvider>
      </ConsentProvider>
    </RouterProvider>
  );
}
