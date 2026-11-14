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

export const GrindingWheelGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/grinding-wheel-colours-specifications-buying-guide";

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
    "Hello Proquanic, I am reading your grinding wheel colours and specification guide and would like to submit a grinding wheel RFQ."
  )}`;

  const articleHashtags = [
    "GrindingWheels",
    "GrindingWheelSelection",
    "AbrasiveProducts",
    "IndustrialAbrasives",
    "Metalworking",
    "EngineeringWorkshop",
    "ManufacturingZimbabwe",
    "Proquanic",
  ];

  const relatedInternalGuides = [
    {
      title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
      href: "/blog/why-metal-cutting-bandsaw-blade-breaks",
    },
    {
      title: "Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check",
      href: "/blog/why-drill-bits-burn-or-break",
    },
    {
      title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
      href: "/blog/steel-buying-checklist-engineering-workshop",
    },
    {
      title: "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
      href: "/blog/why-end-mills-break",
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
              href="/products/abrasives"
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Abrasives
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              Grinding Wheel Colours Explained
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
                  href="/products/abrasives"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
                >
                  Abrasives · Grinding Products · Grinding Wheels
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-14">14 November 2026</time>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>10 min read</span>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proquanic Technical Desk</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Grinding Wheel Colours Explained: What Buyers Must Check Before Sending an RFQ
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/grinding-wheel-colours-specifications-buying-guide.jpg"
                  alt="Industrial grinding wheels with different manufacturer identification markings arranged on an engineering inspection bench."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </figure>

            {/* Complete Original Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                A grinding wheel's colour can tell you something important. But it cannot tell you everything.
              </h2>
              <p>
                When requesting a grinding wheel, many buyers concentrate on the dimensions, grit size and price.
              </p>
              <p>
                Those details matter. However, there is another detail that should not be overlooked:{" "}
                <strong className="text-slate-950">the colour identification used by the manufacturer.</strong>
              </p>
              <p>
                Industrial abrasive manufacturers use colour coding on certain product ranges to help identify the materials for which their wheels are intended.
              </p>
              <p>
                For example, PFERD uses colour coding to distinguish applications such as steel, stainless steel, cast iron and non-ferrous metals in specified product lines.
              </p>
              <p>
                But there is an important warning: colour codes are not universal across all manufacturers and product ranges.
              </p>
              <p>
                A blue wheel from one manufacturer does not automatically have the same specification or application as a blue wheel from another.
              </p>
              <p>
                For procurement professionals, workshop managers and engineers, understanding this distinction can help prevent incomplete enquiries and incorrect product orders.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                1. What do grinding wheel colours mean?
              </h2>
              <p>
                Colour coding is a visual identification system used by abrasive manufacturers to indicate the intended material application of particular products.
              </p>
              <p>The following examples are taken from published manufacturer information.</p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                PFERD colour coding
              </h3>
              <p>
                PFERD's product literature uses the following colour identification for specified grinding wheel product lines:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Colour</th>
                      <th className="p-3.5">Material/application indicated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Black</td>
                      <td className="p-3.5">Steel</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Blue</td>
                      <td className="p-3.5">Stainless steel (INOX)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Red</td>
                      <td className="p-3.5">Cast iron or specified steel/cast-iron applications</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Silver</td>
                      <td className="p-3.5">Non-ferrous metals, including aluminium</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Green</td>
                      <td className="p-3.5">Stone in specified product lines</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The exact coding depends on the PFERD product line. Some products also use combinations of colours.
              </p>
              <p>
                For example, PFERD's SG-ELASTIC range identifies steel with black, stainless steel with blue, cast iron with red, and certain combined applications with two-colour markings.
              </p>
              <p>
                <strong className="text-slate-950">Manufacturer reference:</strong> PFERD Grinding and Cut-Off Wheels Catalogue
                <br />
                <a
                  href="https://dg4mbxs1iwj25.cloudfront.net/userfiles/documents/products/pferd_61026_brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://dg4mbxs1iwj25.cloudfront.net/userfiles/documents/products/pferd_61026_brochure.pdf</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                TYROLIT colour coding
              </h3>
              <p>
                TYROLIT publishes a different colour identification system for specified grinding wheel products:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Colour</th>
                      <th className="p-3.5">Material/application indicated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Blue</td>
                      <td className="p-3.5">Steel</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Red</td>
                      <td className="p-3.5">Stainless steel</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Orange</td>
                      <td className="p-3.5">Non-ferrous metals</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Purple</td>
                      <td className="p-3.5">Cast iron</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Green</td>
                      <td className="p-3.5">Stone</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                This is an important example of why buyers should never assume that a colour has the same meaning across different manufacturers.
              </p>
              <p>
                <strong className="text-slate-950">Manufacturer reference:</strong> TYROLIT – Grinding Wheels
                <br />
                <a
                  href="https://www.tyrolit.com/ca-en/products?subApplications=GRWH&type=T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://www.tyrolit.com/ca-en/products?subApplications=GRWH&amp;type=T</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>
              <p>
                <strong className="text-slate-950">Procurement rule:</strong> Always confirm the colour identification against the specific manufacturer's catalogue and product range. Do not order a wheel based on colour alone.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                2. Does the colour of the actual abrasive wheel matter?
              </h2>
              <p>
                Yes, when the manufacturer uses colour as part of its product identification system.
              </p>
              <p>However, buyers must distinguish between:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>The colour coding printed on the product label.</li>
                <li>A coloured identification marking on the wheel.</li>
                <li>The actual colour or appearance of the abrasive material.</li>
                <li>The technical specification of the wheel.</li>
              </ul>
              <p>These are not necessarily the same thing.</p>
              <p>
                A wheel may have a manufacturer's coloured label or marking without the entire abrasive body being that colour.
              </p>
              <p>
                When a customer requests a particular wheel colour, establish whether they mean the manufacturer's application colour code, the physical colour of the wheel, or a particular product specification.
              </p>
              <p>
                If the original wheel is available, photographs of its face, side markings and label can help identify the requirement.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                3. Colour is not a substitute for the grinding wheel specification
              </h2>
              <p>This is where many incomplete enquiries begin.</p>
              <p>
                Two wheels may have the same colour but differ in abrasive grain, grit size, grade, structure, bond, dimensions and permitted operating speed.
              </p>
              <p>A proper grinding wheel specification contains several important elements.</p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Abrasive type
              </h3>
              <p>
                The abrasive grain determines the cutting characteristics and suitability for different materials.
              </p>
              <p>Common abrasive types include:</p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Abrasive</th>
                      <th className="p-3.5">General description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Aluminium oxide</td>
                      <td className="p-3.5">Commonly used for grinding various steels</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Silicon carbide</td>
                      <td className="p-3.5">Used for selected non-ferrous materials, cast iron and other applications</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Zirconia alumina</td>
                      <td className="p-3.5">Used in certain demanding grinding applications</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Ceramic abrasive</td>
                      <td className="p-3.5">Used in specialised products designed for particular grinding performance requirements</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Diamond</td>
                      <td className="p-3.5">Used for suitable hard, non-metallic and other specialised materials</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Cubic boron nitride (CBN)</td>
                      <td className="p-3.5">Used for selected demanding grinding applications, including hardened ferrous materials</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are broad descriptions. The manufacturer's product recommendations must determine suitability for the actual workpiece and grinding operation.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Grit size
              </h3>
              <p>Grit describes the relative size of the abrasive particles.</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Coarse grit is generally associated with faster stock removal.</li>
                <li>Medium grit is used in many general-purpose grinding applications.</li>
                <li>Fine grit is generally used where a finer finish or more controlled material removal is required.</li>
              </ul>
              <p>
                A grit 60 wheel, for example, identifies a particular abrasive particle-size range. It does not independently establish the abrasive type, grade or bond.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Wheel grade
              </h3>
              <p>
                Grade describes the relative strength with which the bond holds the abrasive grains.
              </p>
              <p>It is not the same as abrasive hardness.</p>
              <p>
                The appropriate grade depends on factors such as the workpiece material, grinding contact, operating conditions and wheel design.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Structure
              </h3>
              <p>
                Structure relates to the spacing and distribution of abrasive grains within the wheel.
              </p>
              <p>It influences the wheel's porosity and grinding characteristics.</p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Bond
              </h3>
              <p>The bond holds the abrasive grains together.</p>
              <p>Common bond types include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Vitrified bond.</li>
                <li>Resinoid bond.</li>
                <li>Rubber bond.</li>
              </ul>
              <p>The correct bond depends on the product design and intended operation.</p>
              <p>
                <strong className="text-slate-950">Technical reference:</strong> Norton Abrasives – Grinding Wheel Basics
                <br />
                <a
                  href="https://www.nortonabrasives.com/en-us/grinding-wheel-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://www.nortonabrasives.com/en-us/grinding-wheel-basics</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                4. How to read grinding wheel dimensions
              </h2>
              <p>Grinding wheels are commonly described using three principal dimensions:</p>
              <p>
                <strong className="text-slate-950">Outside diameter × Thickness × Bore</strong>
              </p>
              <p>Consider this example:</p>
              <p>
                <strong className="text-slate-950">250 × 40 × 39 mm</strong>
              </p>
              <p>It means:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Outside diameter: 250 mm</li>
                <li>Thickness: 40 mm</li>
                <li>Bore diameter: 39 mm</li>
              </ul>
              <p>These measurements identify the physical dimensions of the wheel.</p>
              <p>
                They do not tell you whether the wheel is suitable for the material being ground or the machine on which it will operate.
              </p>
              <p>
                Also confirm the wheel shape and mounting arrangement. A straight wheel, cup wheel and depressed-centre wheel are not interchangeable simply because some dimensions appear similar.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                5. Why machine speed must be confirmed
              </h2>
              <p>Grinding wheels operate under significant rotational forces.</p>
              <p>Every wheel must be suitable for the operating speed of the machine.</p>
              <p>Before ordering, establish:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Machine manufacturer and model.</li>
                <li>Spindle speed in revolutions per minute (RPM).</li>
                <li>Required wheel diameter.</li>
                <li>Maximum operating speed marked on the proposed wheel.</li>
                <li>Required wheel shape and mounting arrangement.</li>
              </ul>
              <p>
                The wheel's maximum permitted operating speed must not be lower than the machine's operating speed.
              </p>
              <p>
                Never assume that a wheel is suitable simply because it fits the spindle.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                6. What information should you include in a grinding wheel RFQ?
              </h2>
              <p>
                A request for quotation should provide enough information for the supplier to identify the correct product.
              </p>
              <p>Use this checklist:</p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Requirement</th>
                      <th className="p-3.5">Information to provide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Product</td>
                      <td className="p-3.5">Grinding wheel</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Manufacturer/brand</td>
                      <td className="p-3.5">Required brand, if specified</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Product range</td>
                      <td className="p-3.5">Exact range or product reference, if known</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Colour identification</td>
                      <td className="p-3.5">Required manufacturer's colour code or original wheel marking, if applicable</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Application</td>
                      <td className="p-3.5">What operation the wheel will perform</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Workpiece material</td>
                      <td className="p-3.5">Steel, stainless steel, cast iron, aluminium or another material</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Abrasive type</td>
                      <td className="p-3.5">Required abrasive, if established</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Grit</td>
                      <td className="p-3.5">Required grit size</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Grade</td>
                      <td className="p-3.5">Required wheel grade, if established</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Structure</td>
                      <td className="p-3.5">Required structure, if established</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Bond</td>
                      <td className="p-3.5">Required bond, if established</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Dimensions</td>
                      <td className="p-3.5">Outside diameter × thickness × bore</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Shape</td>
                      <td className="p-3.5">Required wheel shape</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Machine</td>
                      <td className="p-3.5">Manufacturer, model and spindle speed</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Maximum speed</td>
                      <td className="p-3.5">Required operating-speed compatibility</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Quantity</td>
                      <td className="p-3.5">Number of wheels required</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Certification</td>
                      <td className="p-3.5">Applicable product documentation and traceability requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>Not every buyer will know all these technical details.</p>
              <p>
                Where the specification is incomplete, provide the original wheel's markings and clear photographs, the machine details, the workpiece material and the intended operation.
              </p>
              <p>
                Ask the manufacturer or technically competent supplier to confirm the correct specification before placing an order.
              </p>
              <p>
                <strong className="text-slate-950">Do not invent a colour, grade, bond or abrasive type to complete an RFQ.</strong>
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                7. A practical example: why an incomplete enquiry creates problems
              </h2>
              <p>Consider a workshop requesting:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Grinding wheel</li>
                <li>Dimensions: 250 × 40 × 39 mm</li>
                <li>Grit: 60</li>
              </ul>
              <p>
                This is useful information, but it does not establish the complete product requirement.
              </p>
              <p>The supplier may still need to confirm:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Intended workpiece material.</li>
                <li>Manufacturer and product range.</li>
                <li>Colour identification, where applicable.</li>
                <li>Abrasive type.</li>
                <li>Grade.</li>
                <li>Structure.</li>
                <li>Bond.</li>
                <li>Machine operating speed.</li>
                <li>Wheel shape and mounting requirements.</li>
              </ul>
              <p>
                A supplier could quote a wheel matching the dimensions and grit while missing another important requirement.
              </p>
              <p>
                That is why procurement should not treat dimensions and grit as a complete specification.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                8. Grinding wheel safety and inspection
              </h2>
              <p>
                Abrasive wheels must be handled, mounted and operated according to the manufacturer's instructions and applicable safety requirements.
              </p>
              <p>Important precautions include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Check the wheel for damage before use.</li>
                <li>Verify its markings and maximum operating speed.</li>
                <li>Confirm compatibility with the machine.</li>
                <li>Ensure correct mounting and guarding.</li>
                <li>Use the appropriate personal protective equipment.</li>
                <li>Follow the manufacturer's storage and handling instructions.</li>
                <li>Ensure workers are appropriately trained.</li>
              </ul>
              <p>Do not use a damaged wheel or modify it to fit a machine.</p>
              <p>
                A ring test is applicable only to suitable wheel types and must be performed according to the manufacturer's instructions. It is not a universal test for every abrasive product.
              </p>
              <p>Useful safety references:</p>
              <p>
                <strong className="text-slate-950">FEPA – Safety Instructions for Abrasive Products</strong>
                <br />
                <a
                  href="https://fepa-abrasives.org/safety/safety-publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://fepa-abrasives.org/safety/safety-publications/</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>
              <p>
                <strong className="text-slate-950">FEPA – Use of Bonded Wheels on Angle Grinders</strong>
                <br />
                <a
                  href="https://fepa-abrasives.org/safety/safety-publications/leaflet-for-bonded-abrasives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://fepa-abrasives.org/safety/safety-publications/leaflet-for-bonded-abrasives/</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>
              <p>
                <strong className="text-slate-950">SafeWork NSW – Safe Use of Abrasive Wheels</strong>
                <br />
                <a
                  href="https://www.safework.nsw.gov.au/resource-library/manufacturing/abrasive-wheels-fact-sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                >
                  <span>https://www.safework.nsw.gov.au/resource-library/manufacturing/abrasive-wheels-fact-sheet</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                9. Source the correct grinding wheels for your workshop
              </h2>
              <p>
                Proquanic (Pvt) Ltd supplies industrial products and engineering requirements to businesses in Zimbabwe.
              </p>
              <p>
                Our product scope includes{" "}
                <Link
                  href="/products/abrasives"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  grinding wheels
                </Link>
                , cutting wheels and other abrasive products, subject to the specific product and technical requirements.
              </p>
              <p>
                When requesting a quotation, provide the wheel dimensions, grit, intended application, workpiece material, machine details and any manufacturer-specific colour identification.
              </p>
              <p>
                Where the original wheel is available, photographs of its markings and label can help establish the required product.
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
                <li>Location: 7010 Gwabalanda, Bulawayo, Zimbabwe</li>
              </ul>

              <p>
                <strong className="text-slate-950">If you need it. We will find it.</strong>
              </p>

              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                Frequently asked questions
              </h2>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What do the colours on grinding wheels mean?
              </h3>
              <p>
                Some manufacturers use colour coding to identify the intended material application of particular product ranges. The meaning varies by manufacturer and product line.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is a blue grinding wheel always for stainless steel?
              </h3>
              <p>
                No. PFERD uses blue for stainless steel in specified product lines, while TYROLIT uses blue for steel in its published colour coding for specified grinding wheels. Always check the manufacturer's catalogue.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Does a grinding wheel's colour identify its grit?
              </h3>
              <p>
                No. Colour coding and grit size serve different purposes. Grit must be established from the product specification or manufacturer documentation.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What does grit 60 mean?
              </h3>
              <p>
                It identifies the abrasive particle-size designation. It does not independently identify the abrasive type, grade, structure or bond.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What do the dimensions 250 × 40 × 39 mm mean?
              </h3>
              <p>
                They indicate the outside diameter, thickness and bore diameter, respectively.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Can two grinding wheels of the same colour be different?
              </h3>
              <p>
                Yes. They may have different abrasive grains, grit sizes, grades, structures, bonds, dimensions and operating-speed ratings.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What should I send a supplier when requesting a grinding wheel quotation?
              </h3>
              <p>
                Provide the dimensions, grit, material being ground, application, machine details, quantity and any known manufacturer or colour identification. Include photographs of the original wheel where possible.
              </p>

              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Professional references</span>
              </h2>
              <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base">
                <li>
                  <strong className="text-slate-950">PFERD – Grinding and Cut-Off Wheels Catalogue</strong>
                  <br />
                  <span>Manufacturer catalogue explaining product specifications, ordering information and colour coding.</span>
                  <br />
                  <a
                    href="https://dg4mbxs1iwj25.cloudfront.net/userfiles/documents/products/pferd_61026_brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://dg4mbxs1iwj25.cloudfront.net/userfiles/documents/products/pferd_61026_brochure.pdf</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">TYROLIT – Grinding Wheels</strong>
                  <br />
                  <span>Manufacturer product information, applications and colour identification.</span>
                  <br />
                  <a
                    href="https://www.tyrolit.com/ca-en/products?subApplications=GRWH&type=T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.tyrolit.com/ca-en/products?subApplications=GRWH&amp;type=T</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">Norton Abrasives – Grinding Wheel Basics</strong>
                  <br />
                  <span>Technical explanation of abrasive grains, grit, grade, structure and bond.</span>
                  <br />
                  <a
                    href="https://www.nortonabrasives.com/en-us/grinding-wheel-basics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.nortonabrasives.com/en-us/grinding-wheel-basics</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">FEPA – Safety Instructions</strong>
                  <br />
                  <span>Industry safety guidance for bonded, coated and superabrasive products.</span>
                  <br />
                  <a
                    href="https://fepa-abrasives.org/safety/safety-publications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://fepa-abrasives.org/safety/safety-publications/</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">SafeWork NSW – Safe Use of Abrasive Wheels</strong>
                  <br />
                  <span>Workplace safety guidance covering selection, compatibility, mounting and operation.</span>
                  <br />
                  <a
                    href="https://www.safework.nsw.gov.au/resource-library/manufacturing/abrasive-wheels-fact-sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.safework.nsw.gov.au/resource-library/manufacturing/abrasive-wheels-fact-sheet</span>
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
            Related Workshop &amp; Procurement Guides
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
            href="/products/abrasives"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Explore Abrasives Category</span>
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
                Submit a Grinding Wheel or Abrasive RFQ
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Provide wheel dimensions (OD × thickness × bore), grit, workpiece material, machine speed (RPM), and markings or photos for formal quotation. &ldquo;{COMPANY.tagline}&rdquo;
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
          currentSlug="/blog/grinding-wheel-colours-specifications-buying-guide"
          count={3}
        />
      </div>
    </div>
  );
};
