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
    "Hello Proquanic, I am reading your grinding stones specification guide and would like to submit a grinding stone RFQ."
  )}`;

  const articleHashtags = [
    "GrindingStones",
    "GrindingStonesZimbabwe",
    "IndustrialGrindingStones",
    "GrindingStoneSuppliers",
    "GrindingStoneColours",
    "GrindingStoneSpecifications",
    "Abrasives",
    "EngineeringSupplies",
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
              Grinding Stones: Colours, Grit Sizes &amp; Specifications
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
                  Abrasives · Grinding Products · Grinding Stones
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-15">Updated 15 November 2026</time>
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
                Grinding Stones: Colours, Grit Sizes, Specifications and How to Choose the Right One
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/grinding-stones-buying-guide.jpg"
                  alt="Different industrial grinding stones arranged on an engineering workshop inspection bench, showing their colours, thicknesses and centre bores."
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </figure>

            {/* Complete Revised Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-2">
                Choosing a grinding stone involves more than checking its size
              </h2>
              <p>
                When an engineering workshop needs a replacement grinding stone, the first details that usually come to mind are its dimensions and grit size.
              </p>
              <p>
                But those details alone do not establish whether the stone is suitable for the job.
              </p>
              <p>
                The colour, abrasive material, grade, bond, structure, machine speed and material being ground can all influence the correct selection.
              </p>
              <p>
                A grinding stone that fits the machine may still be unsuitable for the application.
              </p>
              <p>
                For procurement professionals, workshop managers, machinists and maintenance teams, understanding these details helps prevent incorrect orders, unnecessary replacement costs and avoidable workshop interruptions.
              </p>
              <p>
                This guide explains what to check when identifying and purchasing grinding stones.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                1. Why do grinding stones come in different colours?
              </h2>
              <p>
                Grinding stones are available in different colours, including grey, white, pink and green.
              </p>
              <p>
                These colours can be associated with different abrasive materials, manufacturing formulations and product specifications.
              </p>
              <p>
                However, there is no universal colour code that allows buyers to identify every grinding stone by colour alone.
              </p>
              <p>
                For example, conventional vitrified grinding stones may use different colours to distinguish abrasive formulations. A white stone is commonly associated with white aluminium oxide, while green stones are commonly associated with silicon carbide products.
              </p>
              <p>
                But colour is not sufficient proof of the abrasive type or intended application. Manufacturers may use different formulations, shades and identification systems.
              </p>
              <p>
                Always confirm the manufacturer&apos;s product designation and technical information.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Common grinding stone colours
              </h3>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Colour commonly encountered</th>
                      <th className="p-3.5">Possible association</th>
                      <th className="p-3.5">What to verify</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Grey</td>
                      <td className="p-3.5">Conventional aluminium oxide products</td>
                      <td className="p-3.5">Exact abrasive and application</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">White</td>
                      <td className="p-3.5">White aluminium oxide products</td>
                      <td className="p-3.5">Manufacturer&apos;s grade and intended material</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Pink</td>
                      <td className="p-3.5">Specialised aluminium oxide formulations</td>
                      <td className="p-3.5">Exact abrasive specification</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Green</td>
                      <td className="p-3.5">Commonly associated with silicon carbide stones</td>
                      <td className="p-3.5">Workpiece material and manufacturer&apos;s recommendation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are general market associations, not a universal colour standard or a substitute for the manufacturer&apos;s catalogue.
              </p>
              <div className="bg-orange-50/80 border-l-4 border-orange-500 p-4 rounded-r-lg text-sm sm:text-base text-slate-800">
                <strong className="text-slate-950">Important:</strong> If your workshop requires a particular colour, communicate that requirement to the supplier. Where possible, provide a photograph of the original grinding stone and its markings.
              </div>

              {/* Section 2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                2. What abrasive material is used in grinding stones?
              </h2>
              <p>
                The abrasive material determines important characteristics of the grinding stone, including its suitability for particular workpieces.
              </p>
              <p>Common abrasive types include:</p>

              <p className="font-bold text-slate-950 pt-1">Aluminium oxide</p>
              <p>
                Commonly used for grinding various ferrous metals, including steel. Different aluminium oxide formulations are available for different grinding applications.
              </p>

              <p className="font-bold text-slate-950 pt-1">White aluminium oxide</p>
              <p>
                A refined aluminium oxide abrasive used in applications where its particular cutting characteristics are required, including certain tool and precision grinding operations.
              </p>

              <p className="font-bold text-slate-950 pt-1">Silicon carbide</p>
              <p>
                A hard, sharp abrasive commonly used for grinding selected non-ferrous metals, cast iron, carbide and other suitable materials.
              </p>

              <p>
                The exact selection depends on the workpiece, operation and manufacturer&apos;s recommendations.
              </p>
              <p>
                Do not assume that every grinding stone of the same colour contains the same abrasive.
              </p>

              {/* Section 3 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                3. What does grit size mean?
              </h2>
              <p>
                Grit size refers to the relative size of the abrasive particles.
              </p>
              <p>
                It influences the grinding action and the finish produced.
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Grit selection</th>
                      <th className="p-3.5">General application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Coarse grit</td>
                      <td className="p-3.5">Faster stock removal and rough grinding</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Medium grit</td>
                      <td className="p-3.5">General-purpose grinding and sharpening</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Fine grit</td>
                      <td className="p-3.5">Finer finishing and more controlled material removal</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Very fine grit</td>
                      <td className="p-3.5">Specialised finishing and precision applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>Different grit sizes are available for different workshop requirements.</p>
              <p>
                For example, grit 60 is one of the available specifications used in grinding applications. It is not the only grit suitable for engineering workshops.
              </p>
              <p>
                The correct grit depends on the workpiece, material removal required, surface finish and grinding operation.
              </p>
              <p>
                <strong className="text-slate-950">Do not order a grinding stone based on grit alone.</strong> The abrasive type, grade, structure and bond must also be considered.
              </p>

              {/* Section 4 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                4. What is grinding stone grade?
              </h2>
              <p>
                The grade describes how firmly the bond holds the abrasive grains.
              </p>
              <p>
                It does not describe the hardness of the abrasive particles themselves.
              </p>
              <p>
                During grinding, abrasive grains gradually become blunt. The stone must release grains at an appropriate rate to expose fresh cutting edges.
              </p>
              <p>
                A stone that holds its grains too firmly for the application may become glazed. A stone that releases grains too easily may wear away unnecessarily quickly.
              </p>
              <p>The correct grade depends on factors such as:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Workpiece material and hardness.</li>
                <li>Grinding pressure.</li>
                <li>Contact area.</li>
                <li>Grinding operation.</li>
                <li>Machine conditions.</li>
                <li>Required finish.</li>
              </ul>
              <p>
                The grade designation should be confirmed against the manufacturer&apos;s specification.
              </p>

              {/* Section 5 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                5. What is the bond in a grinding stone?
              </h2>
              <p>
                The bond holds the abrasive grains together.
              </p>
              <p>
                Different bond systems influence the stone&apos;s strength, rigidity and grinding characteristics.
              </p>

              <p className="font-bold text-slate-950 pt-1">Vitrified bond</p>
              <p>
                A ceramic bond commonly used in conventional grinding stones. It is widely used in bench grinding and precision grinding applications.
              </p>

              <p className="font-bold text-slate-950 pt-1">Resinoid bond</p>
              <p>
                A resin-based bond used in selected grinding applications. Its characteristics differ from those of vitrified products.
              </p>

              <p>Other bond systems are available for specialised applications.</p>
              <p>
                The correct bond depends on the operation and the manufacturer&apos;s product design.
              </p>

              {/* Section 6 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                6. How to read grinding stone dimensions
              </h2>
              <p>Grinding stones are commonly specified using three principal dimensions:</p>
              <p className="font-bold text-slate-950">Outside diameter × Thickness × Bore</p>
              <p>For example:</p>
              <p className="font-bold text-slate-950 font-mono">250 × 40 × 39 mm</p>
              <p>This means:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Outside diameter: 250 mm</li>
                <li>Thickness: 40 mm</li>
                <li>Bore diameter: 39 mm</li>
              </ul>
              <p>
                These dimensions describe the physical size of the stone. They do not establish the abrasive type, grit, grade, bond or machine suitability.
              </p>
              <p>
                Before ordering, check the existing machine requirements and confirm that the replacement stone is suitable for the mounting arrangement.
              </p>
              <p>Never force a grinding stone onto a spindle or modify its bore to make it fit.</p>

              {/* Section 7 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                7. Check the machine speed before ordering
              </h2>
              <p>
                Grinding stones must be suitable for the rotational speed of the machine.
              </p>
              <p>Every product has a maximum permitted operating speed.</p>
              <p>Before ordering, establish:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Grinder manufacturer and model.</li>
                <li>Spindle speed in revolutions per minute (RPM).</li>
                <li>Required stone diameter.</li>
                <li>Maximum operating speed marked on the stone.</li>
                <li>Mounting and flange requirements.</li>
              </ul>
              <p>
                The machine must never operate a stone beyond its marked maximum permitted speed.
              </p>
              <p>A stone that fits the machine is not automatically safe or suitable for use.</p>

              {/* Section 8 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                8. What information should you provide when requesting grinding stones?
              </h2>
              <p>
                A request such as &ldquo;I need grinding stones&rdquo; is a starting point, but it does not provide enough information to identify the correct product.
              </p>
              <p>A useful enquiry should include:</p>

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
                      <td className="p-3.5">Grinding stone</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Colour</td>
                      <td className="p-3.5">Required colour or original manufacturer&apos;s marking, if specified</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Abrasive type</td>
                      <td className="p-3.5">Aluminium oxide, silicon carbide or other specified abrasive</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Grit</td>
                      <td className="p-3.5">Required grit size</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Grade</td>
                      <td className="p-3.5">Required grade, if known</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Structure</td>
                      <td className="p-3.5">Required structure, if specified</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Bond</td>
                      <td className="p-3.5">Vitrified, resinoid or another specified bond</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Dimensions</td>
                      <td className="p-3.5">Outside diameter × thickness × bore</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Application</td>
                      <td className="p-3.5">Grinding, sharpening, tool grinding or another operation</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Workpiece</td>
                      <td className="p-3.5">Material being ground</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Machine</td>
                      <td className="p-3.5">Grinder make, model and spindle speed</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Quantity</td>
                      <td className="p-3.5">Number of stones required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>You do not need to guess technical details that you do not know.</p>
              <p>
                If the original stone is available, send clear photographs showing its face, side markings, label and dimensions.
              </p>
              <p>
                The supplier can then use the information to identify the product and confirm the specification with the manufacturer where necessary.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                9. Why a complete specification matters
              </h2>
              <p>
                Consider a workshop requesting a grinding stone measuring 250 × 40 × 39 mm with grit 60.
              </p>
              <p>That information identifies the dimensions and one part of the specification.</p>
              <p>However, it does not establish:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>The required colour.</li>
                <li>The abrasive material.</li>
                <li>The grade.</li>
                <li>The structure.</li>
                <li>The bond.</li>
                <li>The intended workpiece material.</li>
                <li>The machine&apos;s permitted operating speed.</li>
              </ul>
              <p>
                A quotation that matches only the dimensions and grit may therefore describe a different product from the one the workshop actually needs.
              </p>
              <p>
                The best procurement practice is to establish the complete requirement before comparing supplier quotations.
              </p>

              {/* Section 10 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                10. Grinding stone safety
              </h2>
              <p>
                Grinding stones must be selected, mounted and operated according to the manufacturer&apos;s instructions and applicable workplace safety requirements.
              </p>
              <p>Important precautions include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Inspect the stone for damage before mounting.</li>
                <li>Verify its markings and maximum operating speed.</li>
                <li>Confirm machine compatibility.</li>
                <li>Ensure correct mounting and guarding.</li>
                <li>Use appropriate personal protective equipment.</li>
                <li>Follow manufacturer instructions for handling and storage.</li>
                <li>Ensure operators are appropriately trained.</li>
                <li>Never use a damaged stone or modify it to fit a machine.</li>
              </ul>
              <p>
                A ring test is only appropriate for certain types of grinding stones and must be performed according to the manufacturer&apos;s instructions. It is not a universal test for every abrasive product.
              </p>
              <p>Useful safety references:</p>
              <div className="space-y-3 text-sm bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div>
                  <strong className="text-slate-950">FEPA – Safety Publications</strong>
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
                </div>
                <div>
                  <strong className="text-slate-950">
                    OSHA – Abrasive Wheel Machinery, 29 CFR 1910.215
                  </strong>
                  <br />
                  <a
                    href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.215</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Section 11 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                11. Source grinding stones for your workshop
              </h2>
              <p>
                Proquanic (Pvt) Ltd supplies industrial products and engineering requirements to businesses in Zimbabwe.
              </p>
              <p>
                Our abrasive product scope includes grinding stones in different specifications to suit varying workshop requirements.
              </p>
              <p>
                Requirements may differ by colour, abrasive type, grit size, grade, bond, dimensions and intended application. The correct product must be established from the customer&apos;s actual technical requirements.
              </p>
              <p>
                When requesting a quotation, provide the dimensions, required colour where applicable, grit, workpiece material, machine details and quantity.
              </p>
              <p>
                Where available, photographs of the existing grinding stone help clarify the requirement.
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
                    What are grinding stones used for?
                  </h3>
                  <p>
                    Grinding stones are used for removing material, sharpening tools, cleaning surfaces and performing various grinding operations in engineering and manufacturing workshops.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Why are grinding stones different colours?
                  </h3>
                  <p>
                    Different colours may identify abrasive materials, formulations or manufacturer product ranges. Colour meanings are not universal, so always confirm the manufacturer&apos;s specification.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What is the difference between grey, white and green grinding stones?
                  </h3>
                  <p>
                    These colours are commonly associated with different abrasive formulations. Grey and white products are often associated with aluminium oxide, while green products are commonly associated with silicon carbide. The exact specification must be confirmed with the manufacturer.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What does grit 60 mean on a grinding stone?
                  </h3>
                  <p>
                    Grit 60 identifies the abrasive particle-size designation. It does not establish the abrasive material, grade, bond or complete product specification.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What do grinding stone dimensions 250 × 40 × 39 mm mean?
                  </h3>
                  <p>
                    They indicate the outside diameter, thickness and bore diameter, respectively.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Are all grinding stones suitable for steel?
                  </h3>
                  <p>
                    No. Different grinding stones are designed for different materials and operations. Confirm the abrasive type and manufacturer&apos;s application recommendations before ordering.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What should I provide when requesting a grinding stone quotation?
                  </h3>
                  <p>
                    Provide the colour or manufacturer&apos;s marking where relevant, dimensions, grit, intended application, workpiece material, machine details and quantity. Photographs of the original stone can also help identify the correct product.
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
                  <strong className="text-slate-950">Norton Abrasives – Grinding Wheel Basics</strong>
                  <br />
                  <span>Explains abrasive grains, grit size, grade, structure and bond.</span>
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
                  <strong className="text-slate-950">
                    Norton Abrasives – Seven Factors Used to Determine a Grinding Wheel Specification
                  </strong>
                  <br />
                  <span>Explains the factors involved in selecting a suitable grinding product.</span>
                  <br />
                  <a
                    href="https://www.nortonabrasives.com/en-us/resources/expertise/7-factors-used-determine-grinding-wheel-specification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>
                      https://www.nortonabrasives.com/en-us/resources/expertise/7-factors-used-determine-grinding-wheel-specification
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">TYROLIT – Bench Grinding Stones</strong>
                  <br />
                  <span>
                    Manufacturer technical information on abrasive types, grit sizes, grade and bond designations for bench grinding products.
                  </span>
                  <br />
                  <a
                    href="https://www.tyrolit.com/in-en/products/tools/floor-stand-grinding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.tyrolit.com/in-en/products/tools/floor-stand-grinding</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">FEPA – Safety Publications</strong>
                  <br />
                  <span>Industry safety guidance for abrasive products.</span>
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
                  <strong className="text-slate-950">OSHA – Abrasive Wheel Machinery</strong>
                  <br />
                  <span>Workplace requirements concerning abrasive wheel machinery.</span>
                  <br />
                  <a
                    href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.215</span>
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
                Submit a Grinding Stone or Abrasive RFQ
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Provide grinding stone dimensions (OD × thickness × bore), colour where applicable, grit, workpiece material, machine speed (RPM), and markings or photos for formal quotation. &ldquo;{COMPANY.tagline}&rdquo;
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
