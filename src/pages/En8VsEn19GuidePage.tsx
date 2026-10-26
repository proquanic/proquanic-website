import React, { useState } from "react";
import { Link, useRouter } from "../utils/router";
import { COMPANY } from "../config/company";
import { useRfq } from "../context/RfqContext";
import {
  FileText,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Layers,
  HelpCircle,
  Copy,
  Check,
  Share2,
  Printer,
  Sparkles,
  Phone,
  Mail,
  ShieldAlert,
  ArrowLeft,
  BookOpen
} from "lucide-react";

export const En8VsEn19GuidePage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // FAQ Accordion state (all open by default for readability and SEO, but toggleable)
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

  const handleQuickAddRfq = (grade: "EN8" | "EN19") => {
    if (grade === "EN8") {
      addItem({
        title: "EN8 (080M40) Unalloyed Medium Carbon Steel Bar",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 080M40 / AISI 1040",
        quantity: "1",
        unit: "Meters / Cut Length",
        specifications: "Condition: Normalized or As Rolled; Carbon ~0.40%; For shafts, spindles, pins, bolts",
      });
      setAddedItemName("EN8 (080M40)");
    } else {
      addItem({
        title: "EN19 (708M40 / 709M40) Chromium-Molybdenum High-Tensile Steel Bar",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 708M40 / 709M40 / AISI 4140",
        quantity: "1",
        unit: "Meters / Cut Length",
        specifications: "Condition: Hardened & Tempered (T condition) or Annealed; Cr-Mo alloy; High tensile & shock resistance",
      });
      setAddedItemName("EN19 (708M40/709M40)");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your EN8 vs EN19 Steel Selection Guide and would like to request technical pricing and availability for engineering steel."
  )}`;

  const emailSubject = encodeURIComponent("Engineering Steel Quotation Request — EN8 / EN19");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for engineering steel based on the EN8 vs EN19 selection guide:\n\n- Required Grade: [EN8 (080M40) or EN19 (708M40/709M40)]\n- Required Dimensions (Diameter x Length):\n- Material Condition (e.g., Normalized, Annealed, Quenched & Tempered 'T'):\n- Quantity (pieces / meters / kg):\n- Application / Component: [e.g., drive shaft, pin, gear]\n- Delivery Destination (City/Town in Zimbabwe):\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const faqs = [
    {
      q: "Is EN8 a mild steel?",
      a: "No. EN8 is a medium-carbon, unalloyed engineering steel. It is generally selected where better mechanical properties than ordinary mild steel are required.",
    },
    {
      q: "Is EN19 an alloy steel?",
      a: "Yes. EN19 is a chromium-molybdenum alloy engineering steel. Confirm the exact designation and specification when ordering.",
    },
    {
      q: "Can EN8 replace EN19?",
      a: "Not automatically. Whether EN8 is suitable depends on the component's design requirements, loading, heat treatment and required mechanical properties. Any substitution should be approved by the responsible engineer.",
    },
    {
      q: "Is EN19 always supplied hardened?",
      a: "No. EN19 can be supplied in different conditions. The required condition and mechanical properties must be specified and confirmed with the supplier.",
    },
    {
      q: "Are 708M40 and 709M40 exactly the same?",
      a: "They should not automatically be treated as identical. Both designations appear in engineering steel references, and differences in specification or composition can matter. Confirm the precise grade required by the drawing or material standard.",
    },
    {
      q: "What information should I provide when requesting a quotation?",
      a: "Provide the grade and specification, dimensions, product form, quantity, required material condition, certification requirements and delivery location. Include a drawing or material specification if available.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-slate-900 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products/steel-products" className="hover:text-slate-900 transition-colors">
            Steel Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">EN8 vs EN19 Steel Guide</span>
        </nav>

        {/* Article Header Card */}
        <header className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Engineering Steel Technical Guide</span>
            </div>

            {/* Actions: Share & Print */}
            <div className="flex items-center gap-2">
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
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              EN8 vs EN19 Steel: Differences, Applications and How to Choose
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              A comprehensive technical guide for engineers, machinists, maintenance teams, and procurement professionals in Zimbabwe for specifying shafts, pins, gears, and machine components.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>
                <strong>Publisher:</strong> Proquanic Technical Procurement Desk
              </span>
              <span>•</span>
              <span>
                <strong>Location:</strong> Bulawayo, Zimbabwe
              </span>
              <span>•</span>
              <span>
                <strong>Scope:</strong> B2B Engineering Steels
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
          <div className="sticky top-24 z-30 bg-emerald-700 text-white px-5 py-3 rounded-lg shadow-lg flex items-center justify-between transition-all animate-fade-in">
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

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed font-normal">
                Choosing the right engineering steel is important for component strength, machining performance, service life and overall manufacturing cost. Two grades commonly encountered in engineering applications are <strong>EN8</strong> and <strong>EN19</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Although both are used to manufacture mechanical components, they differ in chemical composition, heat-treatment response and the types of service conditions they are suited to.
              </p>
              <div className="p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-md text-amber-900 text-sm">
                <strong>Zimbabwe Engineering Context:</strong> For engineers, machinists, maintenance teams and procurement professionals in Zimbabwe, understanding these differences can help when specifying replacement shafts, pins, gears and other machine components.
              </div>
            </div>

            {/* Section: What Is EN8 Steel? */}
            <section id="what-is-en8" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What Is EN8 Steel?
                </h2>
                <button
                  onClick={() => handleQuickAddRfq("EN8")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request EN8 Quote</span>
                </button>
              </div>

              <p className="text-slate-700">
                <strong>EN8</strong> is a medium-carbon, unalloyed engineering steel. It is commonly associated with the designation <strong>080M40</strong> under later British steel specifications (BS 970).
              </p>
              <p className="text-slate-700">
                Compared with mild steel, EN8 can offer greater strength and can be heat-treated to achieve improved surface hardness in suitable applications.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2.5">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-xs">
                  Typical applications include:
                </h3>
                <ul className="space-y-1.5 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Shafts and spindles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Axles and general engineering components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Connecting rods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Studs and bolts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Components requiring moderate strength and machinability</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700">
                EN8 is often considered where a component needs better mechanical properties than mild steel, without necessarily requiring a more highly alloyed engineering steel.
              </p>
              <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded border border-slate-200">
                <strong>Key Note:</strong> Its actual performance depends on the supplied condition, component dimensions and any heat treatment carried out.
              </p>
            </section>

            {/* Section: What Is EN19 Steel? */}
            <section id="what-is-en19" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What Is EN19 Steel?
                </h2>
                <button
                  onClick={() => handleQuickAddRfq("EN19")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Request EN19 Quote</span>
                </button>
              </div>

              <p className="text-slate-700">
                <strong>EN19</strong> is a chromium-molybdenum alloy engineering steel associated with the British designation <strong>708M40</strong> in relevant historical specifications. The designation <strong>709M40</strong> is also encountered in engineering steel references, so the exact grade and specification should always be confirmed.
              </p>
              <p className="text-slate-700">
                The chromium and molybdenum alloying elements help the steel respond to hardening and tempering processes. Properly specified and heat-treated EN19 can provide a combination of strength and toughness for more demanding mechanical applications.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2.5">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-xs">
                  Typical applications include:
                </h3>
                <ul className="space-y-1.5 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>High-strength shafts and axles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Crankshafts and connecting rods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Gears and other loaded machine components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>High-tensile studs and similar engineering parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                    <span>Components requiring a suitable combination of strength and toughness</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700">
                EN19 may be appropriate where EN8 does not provide the required mechanical performance. However, the grade name alone does not guarantee a particular strength or hardness: the condition of supply, section size and heat-treatment specification matter.
              </p>
            </section>

            {/* Section: Main Differences Table */}
            <section id="main-differences" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                EN8 vs EN19: What Are the Main Differences?
              </h2>

              <p className="text-slate-700">
                The fundamental differences between EN8 and EN19 lie in alloy composition, heat treatment response, tensile capacity, and typical operating stress:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-semibold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-3.5 border-r border-slate-800">Feature</th>
                      <th className="p-3.5 border-r border-slate-800 bg-slate-800/90 text-amber-300">
                        EN8 (080M40)
                      </th>
                      <th className="p-3.5 text-orange-300">
                        EN19 (708M40 / 709M40)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Steel type
                      </td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">
                        Medium-carbon, unalloyed steel
                      </td>
                      <td className="p-3.5 text-slate-700 font-medium">
                        Chromium-molybdenum alloy steel
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Common associated designation
                      </td>
                      <td className="p-3.5 text-slate-700 font-mono text-xs border-r border-slate-200">
                        080M40 (AISI 1040)
                      </td>
                      <td className="p-3.5 text-slate-700 font-mono text-xs">
                        708M40; 709M40 is also encountered (AISI 4140)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Typical role
                      </td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">
                        General engineering components requiring moderate strength
                      </td>
                      <td className="p-3.5 text-slate-700">
                        More demanding components requiring higher strength and toughness
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Heat treatment
                      </td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">
                        Can be flame or induction hardened in suitable applications
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Can be hardened and tempered; other surface-hardening treatments may be suitable for specific applications
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Typical components
                      </td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">
                        Shafts, spindles, axles and general machine parts
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Highly loaded shafts, gears, crankshafts and similar components
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60 border-r border-slate-200">
                        Selection priority
                      </td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">
                        Required properties at an appropriate cost
                      </td>
                      <td className="p-3.5 text-slate-700">
                        More demanding strength, toughness or hardenability requirements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 italic">
                *These are general comparisons, not guarantees for every bar or finished component. Mechanical properties vary with the material condition, dimensions and applicable specification.
              </p>
            </section>

            {/* Section: Which Steel Is Stronger? */}
            <section id="which-is-stronger" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Which Steel Is Stronger: EN8 or EN19?
              </h2>

              <p className="text-slate-700">
                <strong>EN19 is generally the stronger candidate</strong> when a component requires higher strength and a suitable combination of toughness and hardenability, particularly when supplied and heat-treated to the required condition.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-sm text-slate-700">
                <p>
                  However, it is not accurate to compare the two grades using a single strength figure without identifying their conditions of supply.
                </p>
                <p>
                  For example, the properties of <strong>normalized EN8</strong> cannot automatically be compared with those of <strong>quenched-and-tempered EN19</strong> as if both materials had undergone the same processing.
                </p>
              </div>

              <p className="text-slate-700">
                Before choosing a grade, check the required tensile strength, yield strength, hardness, toughness and operating conditions against the manufacturer's material data.
              </p>
            </section>

            {/* Section: Can EN8 and EN19 Be Heat-Treated? */}
            <section id="heat-treatment" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Can EN8 and EN19 Be Heat-Treated?
              </h2>

              <p className="text-slate-700">
                Yes, but the appropriate process depends on the grade and the properties required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-900" />
                    <span>EN8 Heat Treatment</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Depending on the starting condition and component requirements, EN8 can be used in normalized or other specified conditions. Flame or induction hardening can improve surface hardness for suitable applications.
                  </p>
                </div>

                <div className="p-5 bg-orange-50/60 border border-orange-200 rounded-lg space-y-2">
                  <span className="font-bold text-orange-950 text-sm flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-orange-600" />
                    <span>EN19 Heat Treatment</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    EN19 is commonly used in applications involving hardening and tempering (e.g. 'T' condition). The selected treatment must be appropriate for the section size and the required mechanical properties. Specific surface-hardening processes may also be considered where the application and specification support them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 text-xs sm:text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Caution:</strong> Heat treatment should not be selected by grade name alone. An incorrect process can produce unsuitable hardness, distortion or cracking. Use a qualified heat-treatment provider and the relevant material specification for critical components.
                </p>
              </div>
            </section>

            {/* Section: How to Choose Between EN8 and EN19 */}
            <section id="how-to-choose" className="space-y-6 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How to Choose Between EN8 and EN19
              </h2>

              <p className="text-slate-700">
                Before ordering material for a new component or maintenance repair, work through the following 6-step checklist:
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Identify the component's job
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Is the material being used for a shaft, pin, gear, spindle or another part? Consider the loads, shock, wear, operating speed and consequences of failure.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Establish the required mechanical properties
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Use the drawing, engineering specification or responsible engineer's requirements to identify the necessary strength, hardness and toughness. Do not select a grade based on the component name alone.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Confirm the supplied condition
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Find out whether the material is supplied as rolled, normalized, annealed, quenched and tempered, or in another specified condition. The condition affects how the steel can be machined and how it will perform.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Check dimensions and machining allowance
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Confirm the required diameter, thickness, length and product form. Where machining is required, allow for the material that must be removed to achieve the finished dimensions and surface condition.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Verify the exact grade and documentation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Check the material designation against the drawing or specification. Where required, request a material test certificate and verify that it corresponds to the supplied material. Do not assume that two grades are interchangeable simply because a supplier lists them as equivalents.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    6
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Consider the total cost
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Compare the cost of the specified material, machining, heat treatment and any additional processing. A lower initial material price does not necessarily mean a lower finished-component cost.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Common Mistakes */}
            <section id="common-mistakes" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Common Mistakes When Ordering Engineering Steel
              </h2>

              <p className="text-slate-700">
                Several avoidable mistakes can lead to rework, delays or components that fail to meet their intended requirements:
              </p>

              <div className="bg-red-50/50 border border-red-200 rounded-lg p-5 space-y-2.5">
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Ordering by a familiar grade name without checking the full specification.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Comparing mechanical properties from different heat-treatment conditions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Assuming EN8 and EN19 are interchangeable.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Treating historical grade designations and modern standards as automatically identical.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Forgetting to specify the product form and finished dimensions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Omitting material certification when the job requires traceability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Selecting a grade without considering the component's actual loading and service conditions.</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 text-sm">
                A clear material enquiry helps suppliers identify the correct product and reduces the risk of receiving unsuitable material.
              </p>
            </section>

            {/* Section: Sourcing with Proquanic */}
            <section id="sourcing-proquanic" className="space-y-5 pt-4 border-t border-slate-100">
              <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Procurement Desk — Bulawayo & Nationwide Zimbabwe
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    Sourcing Engineering Steel for Workshop and Manufacturing Requirements
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong>Proquanic (Pvt) Ltd</strong> supports industrial procurement and engineering supply requirements for businesses in Bulawayo and across Zimbabwe.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When enquiring about EN8, EN19 or another engineering steel, provide the grade, applicable specification, dimensions, product form, required material condition, quantity and any certification requirements. A drawing or existing material specification can help clarify the requirement.
                </p>

                <p className="text-xs text-slate-400 italic">
                  Availability, lead time and pricing should be confirmed for the specific enquiry rather than assumed from the grade name.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-white">
                    Need engineering steel or other industrial supplies?
                  </h3>
                  <p className="text-xs text-slate-300">
                    Contact Proquanic (Pvt) Ltd to discuss your requirement:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <a
                      href={emailQuotationLink}
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors flex items-center gap-2 text-xs"
                    >
                      <Mail className="w-4 h-4 text-orange-400" />
                      <div>
                        <div className="text-slate-400 text-[10px]">Email Sales</div>
                        <div className="font-semibold text-white">{COMPANY.contact.email}</div>
                      </div>
                    </a>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-emerald-950/80 hover:bg-emerald-900/90 rounded border border-emerald-800 transition-colors flex items-center gap-2 text-xs"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-emerald-300 text-[10px]">WhatsApp Sales</div>
                        <div className="font-semibold text-white">{COMPANY.contact.phoneDisplay}</div>
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

                  <p className="text-xs text-orange-400 font-medium italic pt-2 text-center sm:text-left">
                    "If you need it. We will find it."
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = !!openFaqs[index];
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left font-bold text-sm sm:text-base text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>{faq.q}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section: Final Thoughts */}
            <section id="final-thoughts" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Final Thoughts
              </h2>

              <p className="text-slate-700">
                <strong>EN8 and EN19 both have important roles in engineering</strong>, but they are not direct substitutes in every application. EN8 is commonly used for general engineering components requiring moderate strength, while EN19 is often considered for more demanding applications where strength, toughness and hardenability are important.
              </p>

              <div className="p-4 bg-slate-100 border-l-4 border-slate-900 rounded-r-md text-slate-800 text-sm font-medium">
                The best choice is the grade that meets the component's documented engineering requirements—not simply the grade with the higher reputation or the lower purchase price.
              </div>

              {/* Bottom Quick Action CTAs */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuickAddRfq("EN8")}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Add EN8 to RFQ Basket</span>
                  </button>

                  <button
                    onClick={() => handleQuickAddRfq("EN19")}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-white" />
                    <span>Add EN19 to RFQ Basket</span>
                  </button>
                </div>

                <Link
                  href="/products/steel-products"
                  className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Explore All Steel Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                </Link>
              </div>
            </section>
          </article>

          {/* Sticky Sidebar (Desktop) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Table of Contents */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                <span>Guide Navigation</span>
              </h3>
              <nav className="text-xs space-y-1.5 text-slate-600">
                <a
                  href="#what-is-en8"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  1. What Is EN8 Steel?
                </a>
                <a
                  href="#what-is-en19"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  2. What Is EN19 Steel?
                </a>
                <a
                  href="#main-differences"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  3. EN8 vs EN19 Main Differences
                </a>
                <a
                  href="#which-is-stronger"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  4. Which Steel Is Stronger?
                </a>
                <a
                  href="#heat-treatment"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  5. Heat Treatment Considerations
                </a>
                <a
                  href="#how-to-choose"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  6. 6-Step Selection Checklist
                </a>
                <a
                  href="#common-mistakes"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  7. Common Ordering Mistakes
                </a>
                <a
                  href="#sourcing-proquanic"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  8. Sourcing in Zimbabwe
                </a>
                <a
                  href="#faqs"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  9. Frequently Asked Questions
                </a>
                <a
                  href="#final-thoughts"
                  className="block p-1.5 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  10. Final Thoughts
                </a>
              </nav>
            </div>

            {/* Quick Sourcing Action Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 shadow-xs space-y-4">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Direct Sourcing Assistance
              </span>
              <h4 className="text-sm font-bold text-white">
                Request EN8 or EN19 Quotation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supply rounds in normalized, annealed, or quenched & tempered condition cut to your exact length in Bulawayo or delivered nationwide.
              </p>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => handleQuickAddRfq("EN8")}
                  className="w-full py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 rounded border border-slate-700 transition-colors flex items-center justify-between"
                >
                  <span>Add EN8 (080M40)</span>
                  <span className="text-[10px] text-slate-400">+ RFQ</span>
                </button>

                <button
                  onClick={() => handleQuickAddRfq("EN19")}
                  className="w-full py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-orange-400 rounded border border-slate-700 transition-colors flex items-center justify-between"
                >
                  <span>Add EN19 (708M40/709M40)</span>
                  <span className="text-[10px] text-slate-400">+ RFQ</span>
                </button>

                <Link
                  href="/request-a-quotation"
                  className="w-full py-2 px-3 text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white rounded transition-colors flex items-center justify-center gap-1.5 text-center mt-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Full RFQ Form</span>
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span className="font-mono">{COMPANY.contact.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>{COMPANY.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Related Catalogue Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Related Steel Grades & Products
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-semibold text-slate-900">EN24 (817M40 / 4340)</div>
                    <div className="text-[11px] text-slate-500">Nickel-Chrome-Moly High-Tensile</div>
                  </div>
                  <Link href="/products/steel-products" className="text-orange-600 hover:underline">
                    View
                  </Link>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-semibold text-slate-900">D2 / 1.2379 Tool Steel</div>
                    <div className="text-[11px] text-slate-500">Cold Work High Chrome Die Steel</div>
                  </div>
                  <Link href="/products/steel-products" className="text-orange-600 hover:underline">
                    View
                  </Link>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div>
                    <div className="font-semibold text-slate-900">Bright Mild Steel</div>
                    <div className="text-[11px] text-slate-500">Precision Drawn Rounds & Hex</div>
                  </div>
                  <Link href="/products/steel-products" className="text-orange-600 hover:underline">
                    View
                  </Link>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/products/steel-products"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                >
                  <span>All 4 Steel Families</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
