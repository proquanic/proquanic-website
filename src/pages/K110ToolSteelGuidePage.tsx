import React, { useState, useEffect } from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import {
  ChevronRight,
  Share2,
  Check,
  Printer,
  ArrowLeft,
  FileText,
  MessageSquare,
  Mail,
  Calendar,
  Clock,
  User,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";
import { ArticleHashtags } from "../components/ArticleHashtags";

export const K110ToolSteelGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/k110-tool-steel-properties-applications";

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your K110 tool steel guide and would like to submit an enquiry for tool steel or engineering steel."
  )}`;

  const articleHashtags = [
    "K110ToolSteel",
    "ToolSteel",
    "EngineeringSteel",
    "ColdWorkToolSteel",
    "IndustrialEngineering",
    "Toolmaking",
    "ManufacturingZimbabwe",
    "Proquanic",
  ];

  const relatedInternalGuides = [
    {
      title: "EN8 vs EN19 Steel: Differences, Applications and How to Choose",
      href: "/guides/en8-vs-en19-steel",
    },
    {
      title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
      href: "/blog/en8-en19-mild-steel-comparison",
    },
    {
      title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
      href: "/blog/steel-buying-checklist-engineering-workshop",
    },
    {
      title: "Spring Steel Isn't Just Another Steel Bar: What Buyers Need to Know",
      href: "/blog/spring-steel-properties-grades-applications",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors shrink-0">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href="/products/steel-products"
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Steel Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              Why K110 Tool Steel Is Used for Punches, Dies and Industrial Knives
            </span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
        <article className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Article Header */}
            <header className="space-y-5 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/products/steel-products"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
                >
                  Steel Products · Engineering Steels · Tool Steel
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-14">14 November 2026</time>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>8 min read</span>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proquanic Technical Desk</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Why K110 Tool Steel Is Used for Punches, Dies and Industrial Knives
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/k110-tool-steel-properties-applications.jpg"
                  alt="K110 cold-work tool steel flat bar and precision-machined tooling components displayed on an industrial inspection bench."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </figure>

            {/* Complete Original Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                The steel behind demanding industrial tooling
              </h2>
              <p>
                A punch used repeatedly in a production line, a die exposed to continuous forming operations, or an industrial knife cutting abrasive material faces demanding working conditions.
              </p>
              <p>
                The steel selected for these components matters. Poor material selection can contribute to premature wear, dimensional problems, frequent maintenance and unnecessary production interruptions.
              </p>
              <p>
                One material commonly specified for demanding cold-work tooling is{" "}
                <strong className="text-slate-950">K110 tool steel</strong>, a high-carbon, high-chromium tool steel produced by BÖHLER.
              </p>
              <p>
                K110 is associated with the material designation 1.2379 and the EN designation X153CrMoV12. It is also associated with the AISI D2 designation.
              </p>
              <p>
                But what makes this material suitable for industrial tooling, and what should buyers confirm before ordering it?
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                1. What is K110 tool steel?
              </h2>
              <p>K110 is a 12% ledeburitic chromium cold-work tool steel.</p>
              <p>
                In practical terms, it is a tool steel developed for applications where components must withstand demanding working conditions, particularly wear during cold-working operations.
              </p>
              <p>
                According to BÖHLER's published technical information, K110 has a combination of wear resistance, compressive strength and toughness intended for a broad range of cold-work applications.
              </p>
              <p>Its principal material designations include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>BÖHLER grade: K110</li>
                <li>Material number: 1.2379</li>
                <li>EN designation: X153CrMoV12</li>
                <li>AISI designation: D2</li>
                <li>Standard referenced by BÖHLER: EN ISO 4957</li>
              </ul>
              <p>
                <strong className="text-slate-950">Important:</strong> These designations identify the material family and recognised grade relationships. Buyers should still confirm the actual manufacturer's specification, product certification and applicable requirements. Do not assume that every product advertised as D2 or 1.2379 has identical manufacturing quality or properties.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                2. What gives K110 its properties?
              </h2>
              <p>BÖHLER publishes the following average chemical composition for K110:</p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Element</th>
                      <th className="p-3.5 text-right">Average composition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Carbon (C)</td>
                      <td className="p-3.5 text-right font-mono">1.55%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Silicon (Si)</td>
                      <td className="p-3.5 text-right font-mono">0.30%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Manganese (Mn)</td>
                      <td className="p-3.5 text-right font-mono">0.30%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Chromium (Cr)</td>
                      <td className="p-3.5 text-right font-mono">11.30%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Molybdenum (Mo)</td>
                      <td className="p-3.5 text-right font-mono">0.75%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Vanadium (V)</td>
                      <td className="p-3.5 text-right font-mono">0.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The combination of high carbon and chromium, together with molybdenum and vanadium, contributes to the steel's characteristics.
              </p>
              <p>
                For buyers, the important point is not simply the chemical composition. It is how the material performs in the intended application and whether the supplied condition is suitable for the next manufacturing operation.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                3. Where is K110 tool steel used?
              </h2>
              <p>
                K110 is used in a range of cold-work tooling and wear-related applications.
              </p>
              <p>Examples listed in BÖHLER's product information include:</p>

              <p>
                <strong className="text-slate-950">Punching and blanking</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Punches</li>
                <li>Blanking tools</li>
                <li>Fine-blanking tooling</li>
                <li>Stamping tools</li>
              </ul>

              <p>
                <strong className="text-slate-950">Industrial cutting</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Industrial knives</li>
                <li>Shearing tools</li>
                <li>Machine knives</li>
              </ul>

              <p>
                <strong className="text-slate-950">Forming and shaping</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Cold-forming tools</li>
                <li>Thread-rolling tools</li>
                <li>Roll-forming components</li>
              </ul>

              <p>
                <strong className="text-slate-950">Other industrial applications</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Wear-resistant components</li>
                <li>Powder-pressing tooling</li>
                <li>Rolling equipment</li>
                <li>Selected mechanical engineering components</li>
              </ul>

              <p>
                The correct grade still depends on the working conditions. A material suitable for one punch or knife application is not automatically the best choice for every tooling requirement.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                4. Why is wear resistance important?
              </h2>
              <p>
                Tooling components can experience repeated contact, friction and loading during production.
              </p>
              <p>When a tool wears too quickly, the consequences may include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>More frequent tool replacement</li>
                <li>Increased maintenance requirements</li>
                <li>Reduced dimensional consistency</li>
                <li>Production interruptions</li>
                <li>Additional manufacturing costs</li>
              </ul>
              <p>
                K110 is selected for applications where wear resistance is an important requirement.
              </p>
              <p>
                However, wear resistance is not the only consideration. The component's geometry, loading conditions, manufacturing process, heat treatment and operating environment all influence service performance.
              </p>
              <p>
                A tool that needs greater toughness or resistance to impact may require a different material selection.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                5. Is K110 the same as D2 tool steel?
              </h2>
              <p>
                K110 is identified by BÖHLER as corresponding to material number 1.2379, EN designation X153CrMoV12 and AISI D2.
              </p>
              <p>
                This is why buyers and engineers may encounter these designations when searching for the material.
              </p>
              <p>
                However, there is an important distinction between a recognised grade designation and a verified product.
              </p>
              <p>When purchasing, confirm:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>The exact material designation required.</li>
                <li>The manufacturer's grade and technical datasheet.</li>
                <li>The applicable material standard.</li>
                <li>Chemical composition and material certification.</li>
                <li>Product condition and intended processing requirements.</li>
              </ul>
              <p>
                Do not rely on a supplier describing a material as an equivalent without supporting documentation.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                6. What should you confirm before buying K110?
              </h2>
              <p>
                A material enquiry should provide enough information for the supplier to identify the correct product.
              </p>
              <p>Before requesting a quotation, establish the following:</p>

              <p>
                <strong className="text-slate-950">1. Material grade</strong>
              </p>
              <p>
                Confirm whether the requirement specifically calls for BÖHLER K110, 1.2379, X153CrMoV12 or another approved designation.
              </p>

              <p>
                <strong className="text-slate-950">2. Product form</strong>
              </p>
              <p>Specify whether you need flat bar, round bar, plate or another form.</p>

              <p>
                <strong className="text-slate-950">3. Dimensions</strong>
              </p>
              <p>
                Provide the thickness, width and length for flat products, or diameter and length for round products.
              </p>

              <p>
                <strong className="text-slate-950">4. Supply condition</strong>
              </p>
              <p>
                Confirm whether the material is required in an annealed, hardened or another specified condition. The required condition must suit the planned machining and heat-treatment process.
              </p>

              <p>
                <strong className="text-slate-950">5. Quantity</strong>
              </p>
              <p>State the number of pieces or total required weight.</p>

              <p>
                <strong className="text-slate-950">6. Certification</strong>
              </p>
              <p>
                Establish whether a material test certificate or other traceability documentation is required.
              </p>

              <p>
                <strong className="text-slate-950">7. Application</strong>
              </p>
              <p>
                Explain whether the material is intended for a punch, die, industrial knife, wear component or another application.
              </p>

              <p>
                These details help prevent quotations for materials that have the correct general description but do not meet the actual engineering requirement.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                7. K110 is not the answer to every tooling problem
              </h2>
              <p>
                K110 is a specialised cold-work tool steel. Its suitability should be assessed against the application's actual requirements.
              </p>
              <p>For example:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>A component exposed to significant abrasive wear may prioritise wear resistance.</li>
                <li>A component exposed to impact may require greater toughness.</li>
                <li>A precision tooling component may require close attention to dimensional stability during heat treatment.</li>
                <li>A component exposed to elevated operating temperatures may require a different class of tool steel.</li>
              </ul>
              <p>
                The material should be selected according to the working conditions, not simply because it is a familiar or commonly requested grade.
              </p>
              <p>
                Technical confirmation from the material manufacturer or a qualified toolmaker is important where the application is demanding or safety-critical.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                8. Need K110 or another engineering steel?
              </h2>
              <p>
                Proquanic (Pvt) Ltd supplies industrial materials, engineering products and machinery to businesses in Zimbabwe.
              </p>
              <p>
                Our product scope includes{" "}
                <Link
                  href="/products/steel-products"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  engineering steels
                </Link>{" "}
                and other industrial requirements, subject to the specific grade, dimensions and supply requirements.
              </p>
              <p>
                When enquiring about K110 tool steel, provide the grade, product form, dimensions and quantity. This helps establish the correct material requirement before a quotation is prepared.
              </p>

              <p>
                <strong className="text-slate-950">Contact Proquanic (Pvt) Ltd</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>
                  Website:{" "}
                  <Link
                    href="/"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    https://www.proquanic.co.zw
                  </Link>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    sales@proquanic.co.zw
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/263790420836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 break-all"
                  >
                    https://wa.me/263790420836
                  </a>
                </li>
                <li>Location: Bulawayo, Zimbabwe</li>
              </ul>

              <p>
                <strong className="text-slate-950">If you need it. We will find it.</strong>
              </p>

              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                Frequently asked questions
              </h2>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What is K110 tool steel used for?
              </h3>
              <p>
                K110 is a cold-work tool steel used in applications such as punches, dies, blanking tools, industrial knives, thread-rolling tools and wear components.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What is the material number for K110?
              </h3>
              <p>
                BÖHLER identifies K110 with material number 1.2379 and EN designation X153CrMoV12.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is K110 equivalent to D2 steel?
              </h3>
              <p>
                BÖHLER identifies K110 with the AISI D2 designation. Buyers should verify the manufacturer's specification and material certification rather than relying on a generic equivalence claim.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is K110 suitable for punches and dies?
              </h3>
              <p>
                It is listed by BÖHLER for standard tooling components, including punches, and for blanking and stamping applications. Suitability depends on the specific tool design and operating conditions.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What information is needed to buy K110?
              </h3>
              <p>
                The essential details include the required grade, product form, dimensions, supply condition, quantity and certification requirements.
              </p>

              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Article references</span>
              </h2>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base">
                <li>
                  <span>BÖHLER – K110 product information:</span>
                  <br />
                  <a
                    href="https://www.bohler-edelstahl.com/en/products/k110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.bohler-edelstahl.com/en/products/k110/</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <span>BÖHLER – K110 technical datasheet:</span>
                  <br />
                  <a
                    href="https://www.us.bohler.com/app/uploads/sites/248/productdb/api/k110_en_us.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.us.bohler.com/app/uploads/sites/248/productdb/api/k110_en_us.pdf</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <span>BÖHLER – High-performance steels for punching and blanking:</span>
                  <br />
                  <a
                    href="https://www.bohler-edelstahl.com/en/products/k110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.bohler-edelstahl.com/en/products/k110/</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </article>

        {/* Topic Hashtags (Existing Website Mechanism) */}
        <ArticleHashtags hashtags={articleHashtags} />

        {/* Internal Links to Related Engineering Steel Guides */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Further Engineering Steel Reading
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
            {relatedInternalGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-center justify-between gap-2 p-3 rounded-lg border border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 text-slate-800 hover:text-orange-700 font-medium transition-colors"
                >
                  <span className="line-clamp-2">{guide.title}</span>
                  <ChevronRight className="w-4 h-4 text-orange-600 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Clear Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Proquanic Blog &amp; Technical Insights</span>
          </Link>
          <Link
            href="/products/steel-products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Explore Steel Products Category</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Enquiry CTA Bar */}
        <aside className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                Proquanic (Pvt) Ltd · Bulawayo, Zimbabwe
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Submit a Tool Steel or Engineering Steel Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send your required material grade, product form, dimensions, supply condition, and quantity directly to our procurement desk. &ldquo;{COMPANY.tagline}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/request-a-quotation"
                className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quotation</span>
              </Link>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Sales</span>
              </a>
              <Link
                href="/contact"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded border border-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Related Articles from Published Blog Registry */}
        <RelatedArticles
          currentSlug="/blog/k110-tool-steel-properties-applications"
          count={3}
        />
      </div>
    </div>
  );
};
