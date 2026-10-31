import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../utils/router";
import { COMPANY } from "../config/company";
import { useRfq } from "../context/RfqContext";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Copy,
  Check,
  Share2,
  Printer,
  Phone,
  Mail,
  Wrench,
  CheckSquare,
  Sparkles,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowLeft,
  ShieldAlert,
  Layers,
  ArrowRight
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const SteelComparisonPage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // FAQ Accordion state (open by default for readability & SEO, toggleable)
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddSteelToRfq = (grade: "Mild Steel" | "EN8" | "EN19") => {
    if (grade === "Mild Steel") {
      addItem({
        title: "Mild Steel / Commercial Low-Carbon Steel (Bar / Plate)",
        category: "Steel Products",
        partNumberOrGrade: "S275JR / S355JR / AISI 1018",
        quantity: "1",
        unit: "Bar / Plate Length",
        specifications:
          "Form: Round bar, flat bar, or plate; For fabricated structures, brackets, supports and general engineering fabrication in Zimbabwe.",
      });
      setAddedItemName("Mild Steel (Commercial Low-Carbon)");
    } else if (grade === "EN8") {
      addItem({
        title: "EN8 (080M40) Medium-Carbon Unalloyed Engineering Steel",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 080M40 / AISI 1040",
        quantity: "1",
        unit: "Bar / Cut Length",
        specifications:
          "Condition: Normalized or As-Rolled; For shafts, spindles, axles, studs and general machined engineering components.",
      });
      setAddedItemName("EN8 (080M40) Engineering Steel");
    } else {
      addItem({
        title: "EN19 (708M40 / 709M40) Chromium-Molybdenum Alloy Steel",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 708M40 / 709M40 / AISI 4140",
        quantity: "1",
        unit: "Bar / Cut Length",
        specifications:
          "Condition: Quenched and Tempered ('T' condition) or Annealed; For high-stress shafts, gears, crankshafts, and heavy-duty mechanical components.",
      });
      setAddedItemName("EN19 (708M40/709M40) Alloy Steel");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your EN8, EN19 or Mild Steel Comparison Guide and would like to request technical pricing and availability for engineering steel."
  )}`;

  const emailSubject = encodeURIComponent("Engineering Steel Quotation Request — EN8 / EN19 / Mild Steel");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for steel based on your EN8, EN19 or Mild Steel selection guide:\n\n- Required Grade & Standard: [e.g., Mild Steel S275/S355, EN8 / 080M40, EN19 / 708M40 / 709M40]\n- Product Form: [e.g., Round bar, Flat bar, Plate, Square, Hex]\n- Dimensions (OD / Thickness x Width x Length): [e.g., Ø50mm round x 1500mm / 12mm plate x 500x500mm]\n- Required Condition of Supply: [e.g., As-rolled, Normalized, Annealed, Quenched & Tempered 'T', Bright Drawn]\n- Quantity Needed: [Number of bars, cut billets, or meters]\n- Certification: [e.g., Mill Test Certificate EN 10204 3.1 / Commercial certificate]\n- Intended Component: [e.g., Drive shaft, mounting bracket, machine spindle, gear]\n- Delivery Destination: [e.g., Bulawayo, Harare, Kwekwe, Gweru, or site delivery in Zimbabwe]\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const faqs = [
    {
      q: "Is EN8 better than mild steel?",
      a: "Not in every application. EN8 is a medium-carbon engineering steel, while mild steel generally refers to lower-carbon steel. The right material depends on the component's specified properties and intended use.",
    },
    {
      q: "Is EN19 always stronger than EN8?",
      a: "You should not make that comparison without checking the exact grades, supplied conditions and mechanical-property requirements. The material condition and section size can affect the actual properties.",
    },
    {
      q: "Can I use mild steel instead of EN8 for a shaft?",
      a: "Not automatically. The shaft's design requirements determine whether the proposed material is suitable. Any substitution should be assessed and approved by the responsible engineer.",
    },
    {
      q: "Are EN8 and EN19 interchangeable?",
      a: "No, not by default. They differ in composition and response to processing. Any substitution must be supported by the relevant engineering requirements and technical documentation.",
    },
    {
      q: "Does the material condition matter when buying steel?",
      a: "Yes. The condition of supply can affect mechanical properties and machining behaviour. Confirm the required condition against the drawing or specification.",
    },
    {
      q: "What should I send when requesting an engineering steel quotation?",
      a: "Provide the grade, applicable standard, product form, dimensions, length, quantity, required condition, certification requirements and delivery details. Include a drawing or specification where available.",
    },
  ];

  // Article structured data for rich snippet & SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
    "description":
      "Compare EN8, EN19 and mild steel for engineering applications. Learn what to check before choosing a material for shafts, brackets and machined components.",
    "image": [
      "https://www.proquanic.co.zw/images/blog/en8-en19-mild-steel-comparison.jpg"
    ],
    "datePublished": "2026-03-26T09:00:00+02:00",
    "dateModified": "2026-03-26T09:00:00+02:00",
    "author": {
      "@type": "Organization",
      "name": "Proquanic (Pvt) Ltd",
      "url": "https://www.proquanic.co.zw"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Proquanic (Pvt) Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.proquanic.co.zw/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.proquanic.co.zw/blog/en8-en19-mild-steel-comparison"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  useEffect(() => {
    const scriptArticle = document.createElement("script");
    scriptArticle.type = "application/ld+json";
    scriptArticle.text = JSON.stringify(articleSchema);
    document.head.appendChild(scriptArticle);

    const scriptFaq = document.createElement("script");
    scriptFaq.type = "application/ld+json";
    scriptFaq.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    return () => {
      document.head.removeChild(scriptArticle);
      document.head.removeChild(scriptFaq);
    };
  }, []);

  return (
    <article className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-slate-900 transition-colors font-medium text-orange-600">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products/steel-products" className="hover:text-slate-900 transition-colors">
            Steel Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            EN8, EN19 or Mild Steel Comparison
          </span>
        </nav>

        {/* Article Header Card */}
        <header className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Steel Products → Engineering Steels</span>
            </div>

            {/* Actions: Back to Blog, Share & Print */}
            <div className="flex items-center gap-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                title="Return to Blog & Technical Articles"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-orange-500" />
                <span>Back to Blog</span>
              </Link>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                title="Copy link to clipboard"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                title="Print this guide"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
              EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Compare EN8, EN19 and mild steel for engineering applications. Learn what to check before choosing a material for shafts, brackets and machined components.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-video">
            <img
              src="/images/blog/en8-en19-mild-steel-comparison.jpg"
              alt="Engineering steel round bar, flat bar and plate arranged for dimensional inspection."
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white text-xs">
              <span>Dimensional verification of engineering steel bar and plate forms in a mechanical workshop</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4 flex-wrap">
              <span>
                <strong>Publisher:</strong> Proquanic Technical Procurement Desk
              </span>
              <span>•</span>
              <span>
                <strong>Location:</strong> Bulawayo, Zimbabwe
              </span>
              <span>•</span>
              <span>
                <strong>Read Time:</strong> ~8 min read
              </span>
            </div>

            <Link
              href="/products/steel-products"
              className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Steel Products Catalogue</span>
            </Link>
          </div>
        </header>

        {/* Added Notification Toast */}
        {addedItemName && (
          <div className="sticky top-20 z-30 bg-emerald-700 text-white px-5 py-3 rounded-lg shadow-lg flex items-center justify-between transition-all animate-fade-in">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              <span>{addedItemName} added to your Quotation (RFQ) Basket!</span>
            </div>
            <Link
              href="/request-a-quotation"
              className="text-xs bg-white text-emerald-900 font-bold px-3 py-1.5 rounded hover:bg-emerald-50 transition-colors"
            >
              View RFQ Basket
            </Link>
          </div>
        )}

        {/* Section: Introduction */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Choosing steel for an engineering job is not simply a matter of picking the cheapest bar or the grade you have used before.
          </p>
          <p>
            The material needs to suit the component, its loading, the manufacturing process and the conditions in which it will operate. Choosing incorrectly can lead to unnecessary material costs, difficult machining or a component that does not meet its design requirements.
          </p>
          <p>
            Three material descriptions that often come up in engineering discussions are mild steel, EN8 and EN19. They are not interchangeable, and each has applications where it may be appropriate.
          </p>
          <p>
            Here is how to compare them and what to confirm before placing an order.
          </p>
        </section>

        {/* Section: First, Understand the Three Materials */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 border-b border-slate-200 pb-3">
            First, Understand the Three Materials
          </h2>

          <div className="space-y-6">
            {/* Mild Steel */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-slate-950">Mild steel</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                  Low-Carbon Steel
                </span>
              </div>
              <p className="text-slate-700">
                Mild steel is a general term commonly used for relatively low-carbon steel. The exact composition and properties depend on the particular grade and specification.
              </p>
              <p className="text-slate-700">
                It is widely used for fabricated structures, brackets, supports, plates and general engineering work where the specified strength and other properties are suitable.
              </p>
              <p className="text-slate-700">
                Its suitability depends on the actual grade, product form, thickness and design requirements. "Mild steel" alone is not a complete material specification for every engineering application.
              </p>
            </div>

            {/* EN8 Steel */}
            <div className="p-5 rounded-lg bg-amber-50/50 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-slate-950">EN8 steel</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                  BS 970: 080M40
                </span>
              </div>
              <p className="text-slate-700">
                EN8 is a medium-carbon, unalloyed engineering steel commonly associated with the designation 080M40 in relevant British steel specifications.
              </p>
              <p className="text-slate-700">
                It is used for general engineering components where its specified mechanical properties are suitable. Applications may include shafts, spindles, axles and other machined parts.
              </p>
              <p className="text-slate-700">
                EN8 can be supplied in different conditions, and its properties depend on the material condition, dimensions and processing.
              </p>
            </div>

            {/* EN19 Steel */}
            <div className="p-5 rounded-lg bg-orange-50/50 border border-orange-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-slate-950">EN19 steel</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-orange-100 text-orange-900">
                  BS 970: 708M40 / 709M40
                </span>
              </div>
              <p className="text-slate-700">
                EN19 is a chromium-molybdenum alloy engineering steel designation encountered in engineering applications. Designations such as 708M40 and 709M40 appear in relevant technical references, but they should not automatically be treated as identical without checking the applicable specification.
              </p>
              <p className="text-slate-700">
                Depending on the specified grade and condition, EN19 may be suitable for components requiring a combination of strength, toughness and hardenability.
              </p>
              <p className="text-slate-700">
                It is often considered for more demanding mechanical components, but the grade name alone does not guarantee the required mechanical properties.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Key Differences Table */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              EN8 vs EN19 vs Mild Steel: Key Differences
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A direct comparative overview of material characteristics, applications, and heat treatment:
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead className="bg-slate-900 text-white font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5 border-r border-slate-800 w-1/4">Feature</th>
                  <th className="p-3.5 border-r border-slate-800 w-1/4 text-slate-200">Mild steel</th>
                  <th className="p-3.5 border-r border-slate-800 w-1/4 text-amber-300">EN8</th>
                  <th className="p-3.5 w-1/4 text-orange-300">EN19</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/70 border-r border-slate-200">
                    General material type
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Relatively low-carbon steel; exact grade must be specified
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Medium-carbon, unalloyed engineering steel
                  </td>
                  <td className="p-3.5 text-slate-700 font-medium">
                    Chromium-molybdenum alloy engineering steel
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/70 border-r border-slate-200">
                    Common applications
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Fabricated structures, brackets, supports and general engineering work
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Shafts, spindles, axles and general machined components
                  </td>
                  <td className="p-3.5 text-slate-700">
                    More demanding mechanical components where specified properties are required
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/70 border-r border-slate-200">
                    Heat-treatment considerations
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Depend on the exact grade and intended process
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Can be heat-treated or surface-hardened in suitable applications
                  </td>
                  <td className="p-3.5 text-slate-700">
                    Commonly considered for hardening and tempering when required by the specification
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/70 border-r border-slate-200">
                    Main selection consideration
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Confirm that the exact grade meets design requirements
                  </td>
                  <td className="p-3.5 text-slate-700 border-r border-slate-200">
                    Confirm required properties and condition of supply
                  </td>
                  <td className="p-3.5 text-slate-700">
                    Confirm required strength, toughness, condition and applicable specification
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/70 border-r border-slate-200">
                    Can one automatically replace another?
                  </td>
                  <td className="p-3.5 text-slate-700 font-bold text-red-600 border-r border-slate-200">
                    No
                  </td>
                  <td className="p-3.5 text-slate-700 font-bold text-red-600 border-r border-slate-200">
                    No
                  </td>
                  <td className="p-3.5 text-slate-700 font-bold text-red-600">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic pt-1">
            This is a general comparison. Actual performance depends on the precise grade, product form, condition of supply, dimensions and applicable standard.
          </p>
        </section>

        {/* Section: When Is Mild Steel the Better Choice? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              When Is Mild Steel the Better Choice?
            </h2>
            <button
              onClick={() => handleAddSteelToRfq("Mild Steel")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-slate-300" />
              <span>Request Mild Steel Quote</span>
            </button>
          </div>

          <p>
            Mild steel may be suitable when the job involves general fabrication or a component whose design requirements can be met by the specified low-carbon steel grade.
          </p>
          <p>Examples may include:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-1">
            <li>Fabricated brackets and supports</li>
            <li>General structural or workshop components</li>
            <li>Plates and sections for fabrication</li>
            <li>Components where the drawing specifies a suitable mild-steel grade</li>
          </ul>
          <p>
            It may offer a practical and economical solution where the required properties do not justify a more specialised engineering steel.
          </p>
          <p className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-900 text-slate-800 text-xs sm:text-sm">
            However, do not choose mild steel solely because the component looks simple. The drawing, loading, applicable standards and operating environment still determine whether it is suitable.
          </p>
        </section>

        {/* Section: When Should You Consider EN8? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              When Should You Consider EN8?
            </h2>
            <button
              onClick={() => handleAddSteelToRfq("EN8")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Request EN8 Quote</span>
            </button>
          </div>

          <p>
            EN8 may be worth considering when the component requires the properties associated with a specified medium-carbon engineering steel.
          </p>
          <p>
            Examples include certain shafts, spindles, axles and machined components.
          </p>
          <p>Before selecting EN8, check:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-1">
            <li>The required strength and hardness</li>
            <li>The supplied material condition</li>
            <li>Whether heat treatment is required</li>
            <li>The dimensions and machining allowance</li>
            <li>The component's loading and service conditions</li>
          </ul>
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-md text-amber-950 text-xs sm:text-sm">
            Do not assume that every EN8 bar has the same mechanical properties or that EN8 is suitable for every shaft or pin.
          </div>
        </section>

        {/* Section: When Should You Consider EN19? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              When Should You Consider EN19?
            </h2>
            <button
              onClick={() => handleAddSteelToRfq("EN19")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Request EN19 Quote</span>
            </button>
          </div>

          <p>
            EN19 may be appropriate for applications requiring the mechanical properties available from a correctly specified chromium-molybdenum alloy steel in the required condition.
          </p>
          <p>
            It may be considered for more demanding shafts, gears and other highly loaded components, depending on the design.
          </p>
          <p>Before ordering, establish:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-1">
            <li>The exact grade and applicable specification</li>
            <li>The required mechanical properties</li>
            <li>The condition of supply</li>
            <li>The intended heat treatment, if applicable</li>
            <li>The component dimensions and loading</li>
            <li>Any certification or traceability requirements</li>
          </ul>
          <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-md text-orange-950 text-xs sm:text-sm">
            EN19 should not be selected merely because it is described as a stronger or more advanced steel. The material must meet the actual engineering requirements, and any substitution should be approved by the responsible engineer.
          </div>
        </section>

        {/* Section: What About Machining? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            What About Machining?
          </h2>

          <p>Machinability is affected by more than the grade name.</p>
          <p>
            Material condition, hardness, dimensions, tool selection, cutting conditions and the machine setup all influence machining performance.
          </p>
          <p>
            A steel supplied in one condition may behave differently from the same nominal grade supplied in another condition. The machining process and required finish also affect the choice of tooling and cutting parameters.
          </p>
          <p>
            When planning a job, confirm the material specification and supplied condition with the supplier. Use suitable cutting-tool and machine-manufacturer recommendations for the actual operation.
          </p>
          <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium">
            Do not assume that a single cutting speed or feed rate applies to every mild steel, EN8 or EN19 product.
          </div>
        </section>

        {/* Section: The Five Questions to Ask Before Choosing */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 border-b border-slate-200 pb-3">
            The Five Questions to Ask Before Choosing
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <span>What does the drawing specify?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-8">
                Start with the engineering drawing, bill of materials or approved material specification. If it names a particular grade and standard, use that as the starting point.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <span>What loads will the component experience?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-8">
                Consider the required strength, toughness, fatigue resistance, wear conditions and consequences of failure. These requirements should come from the component design, not guesswork.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <span>What condition must the steel be supplied in?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-8">
                Confirm whether the job requires a particular condition of supply or a defined heat-treatment process.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">
                  4
                </span>
                <span>What dimensions and product form are required?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-8">
                Specify round bar, flat bar, plate or another form, together with the dimensions, length and applicable tolerances.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">
                  5
                </span>
                <span>What documentation is required?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-8">
                Determine whether the job requires a material test certificate, traceability or other documentation. Confirm the requirement before placing the order.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Common Steel Selection Mistakes */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Common Steel Selection Mistakes</span>
          </h2>

          <p>Avoid these common errors:</p>

          <div className="bg-red-50/50 border border-red-200 rounded-lg p-5 space-y-2">
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Treating mild steel, EN8 and EN19 as direct substitutes.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Ordering from a grade name without checking the applicable specification.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Comparing properties from different material conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Assuming a historical designation proves complete equivalence with another designation.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Ignoring dimensions, tolerances and machining allowance.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Selecting material without considering the component's actual loading.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Accepting an alternative grade without engineering approval where approval is required.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span>Assuming certification is included without confirming it.</span>
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-slate-600">
            A complete material specification helps reduce confusion and makes supplier quotations easier to compare.
          </p>
        </section>

        {/* Section: How to Request a Steel Quotation */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            <span>How to Request a Steel Quotation</span>
          </h2>

          <p>When requesting a quotation for engineering steel, include:</p>

          <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-1 text-xs sm:text-sm">
            <li>Exact grade and applicable standard</li>
            <li>Product form</li>
            <li>Required dimensions and length</li>
            <li>Quantity and unit of measure</li>
            <li>Required condition of supply</li>
            <li>Certification or traceability requirements</li>
            <li>Delivery or collection requirements</li>
          </ul>

          <p>Where possible, attach the drawing, bill of materials or original material specification.</p>

          <p className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700">
            If the grade is uncertain, explain what is known about the component and seek the appropriate technical clarification before ordering. Do not ask a supplier to guess the grade based solely on appearance.
          </p>
        </section>

        {/* Section: Engineering Steel and Industrial Supply Enquiries */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Bulawayo Procurement Desk & Nationwide Zimbabwe
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Engineering Steel and Industrial Supply Enquiries
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Proquanic (Pvt) Ltd supports industrial procurement and engineering supply requirements for businesses in Bulawayo and across Zimbabwe.
            </p>
            <p>
              For mild steel, EN8, EN19 and other engineering steel enquiries, provide the exact grade, specification, product form, dimensions, quantity and required condition of supply.
            </p>
            <p className="text-slate-400 italic">
              Product identity, suitability, availability, lead time and pricing should be confirmed for the specific enquiry.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white">
              Need engineering steel or other industrial supplies?
            </h3>
            <p className="text-xs text-slate-300">
              Contact Proquanic (Pvt) Ltd:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a
                href={emailQuotationLink}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors flex items-center gap-2 text-xs"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <div>
                  <div className="text-slate-400 text-[10px]">Email Sales</div>
                  <div className="font-semibold text-white">sales@proquanic.co.zw</div>
                </div>
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-950/80 hover:bg-emerald-900/90 rounded border border-emerald-800 transition-colors flex items-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-emerald-300 text-[10px]">WhatsApp Sales</div>
                  <div className="font-semibold text-white">+263 790 420 836</div>
                </div>
              </a>

              <Link
                href="/request-a-quotation"
                className="p-3 bg-orange-600 hover:bg-orange-500 text-white rounded transition-colors flex items-center justify-center gap-2 text-xs font-bold"
              >
                <FileText className="w-4 h-4" />
                <span>Submit RFQ Requisition</span>
              </Link>
            </div>

            <p className="text-xs text-orange-400 font-medium italic pt-1">
              If you need it. We will find it.
            </p>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <HelpCircle className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-start justify-between gap-4 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-800 transition-colors shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pl-1 pr-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Final Thoughts */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Final Thoughts</span>
          </h2>

          <p>
            Mild steel, EN8 and EN19 serve different engineering needs. The best choice is not necessarily the cheapest grade or the one with the highest strength.
          </p>
          <p>
            Start with the drawing and required properties, confirm the exact specification and material condition, and make sure the supplied product matches the job.
          </p>
          <p className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-900 text-slate-800 text-xs sm:text-sm font-medium">
            A properly specified steel purchase helps reduce avoidable mistakes and supports more reliable manufacturing and maintenance work.
          </p>
        </section>

        {/* Section: Technical References */}
        <section className="bg-slate-100 p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Technical references</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            The following references provide further technical details on engineering steel specifications, chemical composition and mechanical properties:
          </p>

          <ul className="text-xs space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.smithmetal.com/en8.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Smiths Metal Centres — EN8 Steel</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.smithmetal.com/pdf/engineering/en8.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Smiths Metal Centres — EN8 Technical Datasheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://macsteel.co.za/wp-content/uploads/2023/06/709M40-EN19.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Macsteel — 709M40 / EN19 Technical Datasheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.tsmsteel.com/assets/pdf/alloy-steel/708m40.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>TSM Steel — 708M40 / EN19 Technical Datasheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 italic">
            * Disclaimer: These references support grade-specific information. Do not imply that Proquanic supplies a particular grade or that all historical and later designations are identical.
          </div>
        </section>

        {/* Related Technical Articles */}
        <RelatedArticles currentSlug="/blog/en8-en19-mild-steel-comparison" />

        {/* Final Conversion Contact Card */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Submit Your Steel Requisition or Request an Itemized Quotation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Contact Proquanic's procurement desk in Bulawayo with your required grades, cut lengths, and delivery destination. We provide clear, itemized quotations for your engineering steel requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/request-a-quotation"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>Submit RFQ Requisition</span>
            </Link>
            <a
              href={emailQuotationLink}
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs font-semibold rounded transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-orange-500" />
              <span>Email Technical Desk</span>
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp +263 790 420 836</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
