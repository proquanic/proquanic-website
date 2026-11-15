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

export const BrassPlateGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/brass-plate-grades-sizes-applications";

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
    "Hello Proquanic, I am reading your brass plate specification guide and would like to submit a brass plate RFQ."
  )}`;

  const articleHashtags = [
    "BrassPlate",
    "BrassPlateZimbabwe",
    "BrassMetal",
    "BrassSheet",
    "EngineeringMaterials",
    "NonFerrousMetals",
    "IndustrialSupplies",
    "EngineeringWorkshop",
    "ManufacturingZimbabwe",
    "Proquanic",
  ];

  const relatedInternalGuides = [
    {
      title: "Spring Steel Isn't Just Another Steel Bar: What Buyers Need to Know",
      href: "/blog/spring-steel-properties-grades-applications",
    },
    {
      title: "Why K110 Tool Steel Is Used for Punches, Dies and Industrial Knives",
      href: "/blog/k110-tool-steel-properties-applications",
    },
    {
      title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
      href: "/blog/en8-en19-mild-steel-comparison",
    },
    {
      title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
      href: "/blog/steel-buying-checklist-engineering-workshop",
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
              Brass Plate: Grades, Thickness &amp; Size
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
                  Steel Products · Non-Ferrous Metals · Brass Plate
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-15">15 November 2026</time>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>9 min read</span>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proquanic Technical Desk</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Brass Plate: Choosing the Right Grade, Thickness and Size Before You Order
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/brass-plate-grades-sizes-applications.jpg"
                  alt="Brass plate sheets in different thicknesses arranged on an industrial engineering inspection bench."
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </figure>

            {/* Complete Verbatim Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                A brass plate quotation is only as accurate as the material specification
              </h2>
              <p>
                When a workshop requests brass plate, specifying the thickness, length and width is an important starting point.
              </p>
              <p>
                But there is another detail that can make a significant difference:{" "}
                <strong className="text-slate-950">the brass grade</strong>.
              </p>
              <p>
                Brass is a family of copper-zinc alloys. Different grades have different compositions and characteristics. They are not automatically interchangeable simply because they look similar.
              </p>
              <p>
                The wrong grade can affect machining, forming, strength, corrosion performance and the suitability of the finished component.
              </p>
              <p>
                For procurement professionals, engineers and workshop managers, the objective is to identify the correct material before comparing supplier quotations.
              </p>
              <p>This guide explains what to consider when buying brass plate.</p>

              {/* Section 1 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                1. What is brass plate?
              </h2>
              <p>Brass is an alloy made primarily from copper and zinc.</p>
              <p>
                Brass plate is supplied in flat, rectangular material form and is used in engineering, manufacturing, fabrication and other industrial applications.
              </p>
              <p>Depending on the grade and specification, brass products may be used for:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Machined engineering components.</li>
                <li>Electrical and electronic components.</li>
                <li>Fabricated parts.</li>
                <li>Industrial fittings.</li>
                <li>Decorative and architectural components.</li>
                <li>Components requiring particular forming or machining characteristics.</li>
              </ul>
              <p>The application determines which brass grade is appropriate.</p>
              <p>
                Do not assume that every brass plate has the same mechanical properties or chemical composition.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                2. Why does the brass grade matter?
              </h2>
              <p>
                The word &ldquo;brass&rdquo; identifies a family of materials, not one exact specification.
              </p>
              <p>
                For example, ASTM B36/B36M-23 covers specified brass plate, sheet, strip and rolled bar alloys, including C21000, C22000, C22600, C23000, C24000, C26000, C26800, C27200 and C28000.
              </p>
              <p>Some recognised designations include:</p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">UNS grade</th>
                      <th className="p-3.5">Common name</th>
                      <th className="p-3.5 text-right">Nominal copper content</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C21000</td>
                      <td className="p-3.5">Gilding metal</td>
                      <td className="p-3.5 text-right font-mono">95%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C22000</td>
                      <td className="p-3.5">Commercial bronze</td>
                      <td className="p-3.5 text-right font-mono">90%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C23000</td>
                      <td className="p-3.5">Red brass</td>
                      <td className="p-3.5 text-right font-mono">85%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C24000</td>
                      <td className="p-3.5">Low brass</td>
                      <td className="p-3.5 text-right font-mono">80%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C26000</td>
                      <td className="p-3.5">Cartridge brass</td>
                      <td className="p-3.5 text-right font-mono">70%</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C26800</td>
                      <td className="p-3.5">Yellow brass</td>
                      <td className="p-3.5 text-right font-mono">66%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono font-semibold text-slate-900">C28000</td>
                      <td className="p-3.5">Muntz metal</td>
                      <td className="p-3.5 text-right font-mono">60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are nominal compositions identified in the referenced ASTM specification. Zinc makes up the balance, subject to the standard&apos;s chemical requirements and permitted limits for other elements.
              </p>
              <p>
                The table is not a recommendation to substitute one grade for another. The required grade must be established from the component&apos;s engineering requirements.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm">
                <strong className="text-slate-950">Reference:</strong> ASTM International – ASTM B36/B36M-23
                <br />
                <a
                  href="https://store.astm.org/b0036_b0036m-23.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://store.astm.org/b0036_b0036m-23.html</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Section 3 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                3. What is the difference between brass plate and brass sheet?
              </h2>
              <p>
                The terms plate and sheet describe flat metal products, but the distinction can depend on the applicable material standard, thickness and industry terminology.
              </p>
              <p>For procurement purposes, do not rely on the product name alone.</p>
              <p>Specify the actual thickness, width, length, grade and applicable standard.</p>
              <p>
                A supplier may describe a product as brass sheet even when a customer has requested brass plate. The important issue is whether the supplied material meets the required dimensions, grade, condition and specification.
              </p>
              <p>
                If the application requires a particular product form, state that clearly in the enquiry.
              </p>

              {/* Section 4 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                4. How does brass thickness affect your order?
              </h2>
              <p>
                Thickness is one of the most important details when requesting brass plate.
              </p>
              <p>
                The required thickness depends on the component design, machining allowance, forming operation and finished dimensions.
              </p>
              <p>
                A thicker plate may be required where the component needs more material for machining or structural requirements. A thinner product may be appropriate for applications involving forming or fabrication.
              </p>
              <p>However, thickness alone does not determine suitability.</p>
              <p>Before ordering, establish:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Required nominal thickness.</li>
                <li>Permitted thickness tolerance.</li>
                <li>Required finished dimensions.</li>
                <li>Whether machining allowance is needed.</li>
                <li>Whether the material will be cut, drilled, milled, turned or formed.</li>
              </ul>
              <p>
                Do not assume that a plate advertised as 6 mm thick will have exactly the same measured thickness at every point. Confirm the supplier&apos;s dimensional tolerances.
              </p>

              {/* Section 5 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                5. What dimensions should you specify?
              </h2>
              <p>A brass plate enquiry should state:</p>
              <p className="font-bold text-slate-950">Thickness × Width × Length</p>
              <p>For example:</p>
              <p className="font-bold text-slate-950 font-mono">6 × 1,000 × 1,500 mm</p>
              <p>This describes:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Thickness: 6 mm</li>
                <li>Width: 1,000 mm</li>
                <li>Length: 1,500 mm</li>
              </ul>
              <p>
                These are example enquiry dimensions, not a restriction on the range of brass plate specifications that may be required.
              </p>
              <p>
                Other dimensions and thicknesses should be specified according to the customer&apos;s actual requirement.
              </p>
              <p>
                Also confirm whether the supplier is quoting a full plate or a cut piece. Do not assume that the quoted dimensions include cutting or machining services.
              </p>

              {/* Section 6 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                6. What is brass temper, and why should buyers care?
              </h2>
              <p>
                Temper describes the material&apos;s condition resulting from manufacturing and processing.
              </p>
              <p>It can influence properties such as hardness, strength and formability.</p>
              <p>
                Depending on the grade and product form, brass may be supplied in conditions such as annealed or cold-worked tempers.
              </p>
              <p>For example:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Softer or annealed material may be required for certain forming operations.</li>
                <li>
                  Harder or cold-worked material may be required where different mechanical properties are specified.
                </li>
              </ul>
              <p>The available tempers depend on the particular alloy and product form.</p>
              <p>
                ASTM B36/B36M-23 includes requirements relating to material tempers, tensile strength, hardness and grain size for the products within its scope.
              </p>
              <p>
                If the engineering drawing or customer specification identifies a particular temper, include it in the enquiry.
              </p>
              <p>
                Do not select a temper simply because it is described as harder or softer. Confirm that it is suitable for the intended manufacturing process.
              </p>

              {/* Section 7 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                7. What information should you provide when requesting a brass plate quotation?
              </h2>
              <p>
                A quotation request should contain enough information for the supplier to identify the correct material.
              </p>
              <p>Use this checklist:</p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Requirement</th>
                      <th className="p-3.5">What to specify</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Product</td>
                      <td className="p-3.5">Brass plate</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Grade</td>
                      <td className="p-3.5">Exact grade or material designation</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Standard</td>
                      <td className="p-3.5">Applicable material standard, where specified</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Thickness</td>
                      <td className="p-3.5">Required thickness in mm</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Width</td>
                      <td className="p-3.5">Required width in mm</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Length</td>
                      <td className="p-3.5">Required length in mm</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Temper</td>
                      <td className="p-3.5">Required material condition, if specified</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Tolerances</td>
                      <td className="p-3.5">Required dimensional tolerances</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Quantity</td>
                      <td className="p-3.5">Number of plates or required weight</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Certification</td>
                      <td className="p-3.5">Material certificate or traceability requirements</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Application</td>
                      <td className="p-3.5">Intended component or manufacturing process</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                If the grade is not known, provide the engineering drawing, component description or application details.
              </p>
              <p>
                The supplier or a qualified materials professional can then help establish the appropriate material specification.
              </p>
              <div className="bg-orange-50/80 border-l-4 border-orange-500 p-4 rounded-r-lg text-sm sm:text-base text-slate-900 font-semibold">
                Do not ask a supplier to quote an unspecified brass grade and assume that every quotation will represent the same material.
              </div>

              {/* Section 8 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                8. Why comparing brass plate quotations requires more than comparing prices
              </h2>
              <p>
                Two quotations may describe brass plate with identical dimensions but different grades or supply conditions.
              </p>
              <p>That makes a direct price comparison unreliable.</p>
              <p>Before comparing quotations, check:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Whether both suppliers quoted the same grade.</li>
                <li>Whether the material standard is the same.</li>
                <li>Whether the thickness and dimensions match.</li>
                <li>Whether the temper is correct.</li>
                <li>Whether the quoted quantity is the same.</li>
                <li>Whether material certification is included where required.</li>
                <li>Whether the supplier has stated any dimensional tolerances or exclusions.</li>
              </ul>
              <p>
                A cheaper quotation is not necessarily the better commercial decision if it covers a different material specification.
              </p>
              <p>
                The correct approach is to establish a like-for-like comparison before evaluating price.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                9. Source brass plate for your engineering requirements
              </h2>
              <p>
                Proquanic (Pvt) Ltd supplies industrial materials, engineering products and machinery to businesses in Zimbabwe.
              </p>
              <p>
                Our product scope includes brass plate and other non-ferrous engineering materials in different specifications according to customer requirements.
              </p>
              <p>
                Requirements may vary by grade, thickness, dimensions, temper, quantity and intended application.
              </p>
              <p>
                When requesting a quotation, provide the material grade where known, required dimensions, quantity and application. Where the grade is uncertain, provide the drawing or technical requirement so that the material can be properly identified.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5 text-sm sm:text-base">
                <p className="font-bold text-slate-950">Contact Proquanic (Pvt) Ltd</p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-800">
                  <li>
                    Website:{" "}
                    <a
                      href="https://www.proquanic.co.zw"
                      className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                    >
                      https://www.proquanic.co.zw
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:sales@proquanic.co.zw"
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
                      className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                    >
                      https://wa.me/263790420836
                    </a>
                  </li>
                  <li>Location: 7010 Gwabalanda, Bulawayo, Zimbabwe</li>
                </ul>
                <p className="font-bold text-slate-950 pt-1">If you need it. We will find it.</p>
              </div>

              {/* FAQs */}
              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Frequently asked questions
              </h2>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What is brass plate used for?
                  </h3>
                  <p>
                    Brass plate is used in engineering, manufacturing, machining, fabrication, electrical applications and architectural work. The appropriate grade depends on the intended application.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Are all brass plates the same?
                  </h3>
                  <p>
                    No. Brass grades differ in chemical composition and material properties. The exact grade and product specification should be confirmed before ordering.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What does C26000 mean?
                  </h3>
                  <p>
                    C26000 is a copper-zinc alloy commonly known as cartridge brass. Under ASTM B36/B36M, its nominal composition is 70% copper and 30% zinc, subject to the standard&apos;s chemical requirements.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What is the difference between brass plate and brass sheet?
                  </h3>
                  <p>
                    The terminology can depend on product thickness, industry practice and the applicable standard. Specify the exact dimensions, grade and material standard rather than relying on the product name alone.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What dimensions should I provide when buying brass plate?
                  </h3>
                  <p>
                    Provide thickness, width and length in millimetres, together with the required grade, quantity and any applicable tolerances.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Does brass plate need a material certificate?
                  </h3>
                  <p>
                    Where traceability, chemical composition or mechanical properties are important to the application, request the appropriate material test certificate and confirm that it corresponds to the supplied material.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Can one brass grade replace another?
                  </h3>
                  <p>
                    Not automatically. Different brass grades have different compositions and properties. Any substitution should be technically approved against the component&apos;s requirements.
                  </p>
                </div>
              </div>

              {/* Technical References */}
              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Professional technical references</span>
              </h2>

              <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-950">
                    ASTM International – ASTM B36/B36M-23: Standard Specification for Brass Plate, Sheet, Strip and Rolled Bar
                  </strong>
                  <br />
                  <span>Official standard scope and covered alloy designations.</span>
                  <br />
                  <a
                    href="https://store.astm.org/b0036_b0036m-23.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://store.astm.org/b0036_b0036m-23.html</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">
                    KME Germany – Engineering Copper Solutions: Sheets, Plates and Discs
                  </strong>
                  <br />
                  <span>
                    Manufacturer technical reference covering copper and brass products, alloy designations and applications.
                  </span>
                  <br />
                  <a
                    href="https://www.kme.com/fileadmin/DOWNLOADCENTER/COPPER%20DIVISON/4%20Industrial%20Rolled/1%20Rolled%20Copper%20for%20the%20Industry/2020_KME_Handout_e_HP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>
                      https://www.kme.com/fileadmin/DOWNLOADCENTER/COPPER%20DIVISON/4%20Industrial%20Rolled/1%20Rolled%20Copper%20for%20the%20Industry/2020_KME_Handout_e_HP.pdf
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">
                    Copper Development Association – Copper and Copper Alloy Technical Resources
                  </strong>
                  <br />
                  <span>
                    Technical information on copper alloys, material designations and engineering applications.
                  </span>
                  <br />
                  <a
                    href="https://www.copper.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.copper.org/</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </article>

        {/* Topic Hashtags (Existing Website Mechanism) */}
        <ArticleHashtags hashtags={articleHashtags} />

        {/* Internal Links to Verified Related Engineering Guides */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Related Engineering Materials &amp; Procurement Guides
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
            <span>Explore Engineering Metals &amp; Steel Products</span>
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
                Request a Brass Plate Quotation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Provide your required brass grade (or engineering drawing/application), thickness × width × length, temper if specified, and quantity for an itemized quotation. &ldquo;{COMPANY.tagline}&rdquo;
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
          currentSlug="/blog/brass-plate-grades-sizes-applications"
          count={3}
        />
      </div>
    </div>
  );
};
