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
  Square,
  Sparkles,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowLeft,
  ShieldAlert,
  Layers,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const SteelBuyingChecklistPage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // Interactive Checklist State (8 items)
  const [checklist, setChecklist] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const toggleChecklistItem = (index: number) => {
    setChecklist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const resetChecklist = () => {
    setChecklist({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
    });
  };

  const completedChecksCount = Object.values(checklist).filter(Boolean).length;

  // FAQ Accordion state (all open by default for readability & SEO, toggleable)
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

  const handleAddSteelToRfq = (gradeType: "EN8 Bright Round" | "EN19 T Condition" | "Hollow Bar Mechanical Tube") => {
    if (gradeType === "EN8 Bright Round") {
      addItem({
        title: "EN8 (080M40) Bright Drawn Carbon Steel Round Bar",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 080M40 / AISI 1040 / EN8",
        quantity: "1",
        unit: "Bar / Cut Length",
        specifications:
          "Form: Bright Drawn Round Bar (h9 tolerance); Condition: Cold finished / normalized; Diameter: specify (e.g., 25mm, 40mm, 50mm, 75mm); For shafts, pins, studs and machine components.",
      });
      setAddedItemName("EN8 Bright Drawn Round Bar");
    } else if (gradeType === "EN19 T Condition") {
      addItem({
        title: "EN19 (708M40 / 709M40) High-Tensile Alloy Round Bar ('T' Condition)",
        category: "Steel Products",
        partNumberOrGrade: "BS 970: 708M40 / 709M40 / AISI 4140",
        quantity: "1",
        unit: "Bar / Cut Length",
        specifications:
          "Condition: Quenched and Tempered ('T' condition, 850-1000 MPa tensile); Chromium-Molybdenum alloy; High fatigue and shock resistance for drive shafts, gears, and axles.",
      });
      setAddedItemName("EN19 'T' Condition Alloy Round Bar");
    } else {
      addItem({
        title: "Mechanical Hollow Bar / Heavy-Wall Seamless Tube",
        category: "Steel Products",
        partNumberOrGrade: "Grade 20MnV6 / EN 10294-1",
        quantity: "1",
        unit: "Meter / Cut Length",
        specifications:
          "Heavy-wall seamless mechanical tube; OD x ID: specify dimensions; Guaranteed clean-up to finished turned bushings, spacers, hydraulic cylinders and sleeves.",
      });
      setAddedItemName("Mechanical Hollow Bar Tube");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your Steel Buying Checklist Guide and would like to request technical pricing and availability for engineering steel."
  )}`;

  const emailSubject = encodeURIComponent("Engineering Steel Quotation Request — Proquanic");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for engineering steel based on your Steel Buying Checklist Guide:\n\n- Steel Grade & Standard: [e.g., EN8 / 080M40, EN19 / 708M40/709M40 'T', EN24, Mild Steel, Hollow Bar]\n- Product Form: [e.g., Round bar, Square, Flat, Hex, Heavy-wall hollow bar, Plate]\n- Dimensions (OD / ID / Thickness x Length): [e.g., Ø60mm x 1200mm cut lengths]\n- Supply Condition: [e.g., As-rolled, Normalized, Annealed, Quenched & Tempered 'T', Bright Drawn h9]\n- Quantity Needed: [Number of bars, cut billets, or meters]\n- Certification: [e.g., Mill Test Certificate EN 10204 3.1 required / Standard commercial certificate]\n- End Application: [e.g., Conveyor drive shaft, pins, agricultural machinery axle]\n- Delivery Destination: [e.g., Bulawayo, Harare, Kwekwe, Gweru, or site delivery]\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const checklistItems = [
    {
      title: "1. Exact Steel Grade & Standard Specification",
      desc: "Cross-check the drawing or job card. Confirm whether the steel is an unalloyed medium carbon (e.g., EN8 / 080M40), an alloy through-hardening steel (e.g., EN19 / 708M40/709M40), or a case-hardening grade.",
    },
    {
      title: "2. Supply Condition & Heat Treatment State",
      desc: "Confirm whether you need the material as-rolled, normalized, annealed, or hardened and tempered (such as EN19 in 'T' condition). Never assume standard stock arrives pre-hardened.",
    },
    {
      title: "3. Cross-Section Dimensions & Machining Allowances",
      desc: "Verify that black hot-rolled bars have sufficient oversize allowance to machine away the decarburized surface layer and reach the final print diameter without black spots.",
    },
    {
      title: "4. Dimensional Tolerances, Ovality & Straightness",
      desc: "Ensure bar diameter tolerances (such as h9 for bright drawn or commercial mill tolerances for black bar) and straightness runout meet lathe collet and spindle requirements.",
    },
    {
      title: "5. Material Test Certificate (MTC) & Heat Number Traceability",
      desc: "If your client, QA team, or mine specification requires certified traceability, confirm before paying that an EN 10204 3.1 or 2.2 certificate matching the bar cast number is provided.",
    },
    {
      title: "6. Cut Lengths, Kerf Loss & Quantity Breakdown",
      desc: "Confirm whether you are buying full standard mill lengths (5.5m–6m) or cut billets. Account for saw kerf width (3mm–5mm per cut) when cutting multiple parts from a single piece.",
    },
    {
      title: "7. Surface Quality, Rust Protection & Storage Condition",
      desc: "Check that material has been stored indoors or properly oiled/wrapped. Confirm that there is no severe corrosion pitting that would exceed your planned machining depth.",
    },
    {
      title: "8. Total Itemized Costs, Delivery Terms & Offloading Plan",
      desc: "Verify what is included in the invoice: cutting charges, transport to Bulawayo or site delivery nationwide across Zimbabwe, and confirm who is responsible for crane or forklift offloading.",
    },
  ];

  const faqs = [
    {
      q: "Why is specifying the condition of supply just as important as the steel grade?",
      a: "The same engineering steel grade can exhibit completely different mechanical properties depending on heat treatment. For example, EN19 in the annealed condition has a tensile strength around 650–700 MPa and is soft enough for easy machining, whereas in the quenched and tempered 'T' condition it reaches 850–1000 MPa with high toughness. If you order without specifying condition, you may receive soft material that fails in high-torque service, or hardened material that exceeds your machine shop's tooling capabilities.",
    },
    {
      q: "What is the difference between black steel bar and bright steel bar for machining?",
      a: "Black steel bar is hot-rolled and retains a dark, rough mill scale on the outer diameter with looser dimensional tolerances and potential surface decarburization. It requires turning down to remove the outer skin. Bright steel bar is cold drawn or turned and polished, offering a smooth finish, precise diameter tolerances (such as ISO h9 or h11), and crisp edges, making it ideal for immediate use in collets, chucks, and precision shafts.",
    },
    {
      q: "What is a Mill Test Certificate (MTC 3.1) and do workshops always need one?",
      a: "A Mill Test Certificate according to EN 10204 Type 3.1 is an official inspection document validated by an authorized mill representative independent of manufacturing. It details the specific melt heat number, chemical composition, and verified mechanical test results (tensile, yield, elongation, hardness, and impact). Routine workshop brackets or spacers rarely require an MTC, but safety-critical shafts, mining plant components, and lifting equipment demand certified traceability.",
    },
    {
      q: "How much machining allowance should be added to raw black steel bar?",
      a: "As a general rule of thumb for engineering steels up to 100mm diameter, allow at least 3mm to 5mm on the diameter (1.5mm to 2.5mm per side) to clean up surface scale, decarburization, and any minor hot-rolling ovality. For larger diameters over 100mm or long shafts prone to slight mill camber, allow 6mm to 10mm on diameter to ensure full clean-up between lathe centers.",
    },
    {
      q: "Can EN8 carbon steel be welded directly without special procedures?",
      a: "EN8 contains approximately 0.36% to 0.44% carbon, which gives it higher hardenability than mild steel. Direct welding without preheating can cause rapid cooling in the heat-affected zone (HAZ), leading to brittle martensite formation and cracking under load. When welding EN8 is unavoidable, preheating to 150°C–250°C and using low-hydrogen electrodes or post-weld stress relieving is strongly recommended.",
    },
    {
      q: "What details should a workshop provide when requesting a steel quotation from Proquanic?",
      a: "Provide the exact steel grade and standard (e.g., EN8 / 080M40, EN19 / 708M40), the cross-section shape and dimensions (OD, ID, thickness, length), the required condition of supply (e.g., bright drawn, normalized, or 'T' condition), the quantity needed (in cut lengths or meters), whether a material test certificate is required, and your delivery destination in Bulawayo or nationwide across Zimbabwe.",
    },
  ];

  // Article structured data for rich snippet & SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
    "description":
      "Buying engineering steel for your workshop? Check the grade, dimensions, material condition, certification and other details before confirming your order.",
    "image": [
      "https://www.proquanic.co.zw/images/blog/steel-buying-checklist.jpg"
    ],
    "datePublished": "2026-03-26T08:00:00+02:00",
    "dateModified": "2026-03-26T08:00:00+02:00",
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
      "@id": "https://www.proquanic.co.zw/blog/steel-buying-checklist-engineering-workshop"
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
    // Inject Structured Data into Head
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
            Steel Buying Checklist: 8 Details to Confirm
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
              Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Ordering the wrong engineering steel can turn a routine maintenance job into an expensive problem. Check the grade, dimensions, material condition, certification and other details before confirming your order.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-video">
            <img
              src="/images/blog/steel-buying-checklist.jpg"
              alt="Engineering workshop professional measuring steel bar diameter with precision calipers in Bulawayo machine shop"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white text-xs">
              <span>Inspection of engineering steel bar stock in a Zimbabwean precision workshop</span>
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
                <strong>Read Time:</strong> ~7 min read
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

        {/* Section 1: Introduction */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Ordering the wrong engineering steel can turn a routine maintenance job into an expensive problem. The material might have the wrong dimensions, an unsuitable grade, an incompatible condition of supply or insufficient documentation for the job.
          </p>
          <p>
            For engineering workshops, manufacturers and maintenance teams, the purchase order is not the place to guess.
          </p>
          <p>
            Whether you are ordering round bar, hollow bar, plate or hex, here are eight critical details to verify before approving a purchase order or sending payment.
          </p>
          <div className="p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-md text-amber-900 text-sm">
            <strong>Workshop Procurement Tip:</strong> Because many carbon and alloy steels look identical in their raw, unmachined state, rigorous specification before purchase is your primary safeguard against premature mechanical failure and costly lathe rework.
          </div>
        </section>

        {/* Section 2: Interactive 8-Point Pre-Payment Checklist */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
                <CheckSquare className="w-5 h-5 text-orange-500" />
                <h2>Interactive Workshop Pre-Payment Checklist</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Tap each check item as you verify your supplier's quotation and material specs:
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                {completedChecksCount} of 8 Confirmed
              </div>
              {completedChecksCount > 0 && (
                <button
                  onClick={resetChecklist}
                  className="text-xs text-slate-500 hover:text-orange-600 flex items-center gap-1 transition-colors"
                  title="Reset checklist items"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                completedChecksCount === 8
                  ? "bg-emerald-500"
                  : completedChecksCount > 4
                  ? "bg-orange-500"
                  : "bg-amber-500"
              }`}
              style={{ width: `${(completedChecksCount / 8) * 100}%` }}
            />
          </div>

          {/* Checkboxes List */}
          <div className="space-y-3">
            {checklistItems.map((item, index) => {
              const isChecked = !!checklist[index];
              return (
                <div
                  key={index}
                  onClick={() => toggleChecklistItem(index)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                    isChecked
                      ? "bg-emerald-50/60 border-emerald-300 text-slate-900"
                      : "bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-slate-100/70"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isChecked ? "text-emerald-950" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {completedChecksCount === 8 && (
            <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-lg text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                All 8 verification checks satisfied! Your engineering steel requisition is fully specified and safe for purchase order release.
              </span>
            </div>
          )}
        </section>

        {/* Section 3: The 8 Checks Detailed Technical Guide */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
          {/* Check 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                The Exact Steel Grade and Standard Specification
              </h2>
            </div>
            <p className="text-slate-700">
              Never order steel by casual workshop nicknames or colloquial descriptions like "axle steel", "spring steel", or "tough steel". A designation must refer to an established engineering standard (such as BS 970, AISI/SAE, ISO 683, or EN 10083).
            </p>
            <p className="text-slate-700">
              For instance, unalloyed medium-carbon <strong>EN8</strong> (BS 970 designation <strong>080M40</strong>, comparable to AISI 1040) is an excellent general engineering carbon steel for shafts and studs. However, if a drawing requires high-tensile shock resistance, an alloy steel such as <strong>EN19</strong> (BS 970 designation <strong>708M40</strong> or <strong>709M40</strong>, comparable to AISI 4140) or <strong>EN24</strong> (817M40 / AISI 4340) is essential.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Specific grade number and issuing standard (e.g., 080M40 per BS 970:1991).</li>
                <li>Ensure that both the purchaser and vendor understand whether an equivalent grade is being proposed and obtain engineering approval before substitution.</li>
              </ul>
            </div>
          </div>

          {/* Check 2 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Supply Condition and Heat Treatment State
              </h2>
            </div>
            <p className="text-slate-700">
              Steel grade determines chemical composition, but <strong>condition of supply</strong> governs mechanical properties such as hardness, yield strength, and impact toughness.
            </p>
            <p className="text-slate-700">
              For example, alloy steels like EN19 (708M40/709M40) can be supplied in the <strong>annealed condition</strong> (soft, ready for extensive turning and subsequent hardening) or already in the <strong>quenched and tempered 'T' condition</strong> (delivering 850–1000 MPa tensile strength, ready for immediate finished component manufacture without post-machining heat treatment).
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Is the steel As-Rolled, Normalized, Annealed, or Hardened & Tempered (specify letter condition, e.g., 'R', 'S', or 'T')?</li>
                <li>Is surface hardening (induction or flame) or nitriding planned in-house?</li>
                <li>What is the expected delivery hardness (Brinell HB or Rockwell HRC)?</li>
              </ul>
            </div>
          </div>

          {/* Check 3 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Cross-Section Dimensions, Product Form, and Machining Allowances
              </h2>
            </div>
            <p className="text-slate-700">
              Ordering bar stock to nominal finished component dimensions will almost always result in scrap. Hot-rolled black steel bar features an outer decarburized skin and mill scale that must be skimmed off on a lathe or milling machine.
            </p>
            <p className="text-slate-700">
              If your finished shaft requires a diameter of 50.0mm, buying 50mm black bar leaves zero margin for clean-up or runout correction. For heavy-walled hollow parts like bushings or gear blanks, evaluating <strong>mechanical hollow bar</strong> instead of solid round bar can drastically reduce machining cycle times, swarf production, and tool wear.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Sufficient black bar diameter oversize (typically 3mm to 6mm over finished component diameter).</li>
                <li>Product form: Round, square, flat, hexagonal, plate, or seamless hollow bar.</li>
                <li>Hollow bar internal and external dimensions with guaranteed clean-up sizes.</li>
              </ul>
            </div>
          </div>

          {/* Check 4 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                4
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Dimensional Tolerances, Roundness, and Bar Straightness
              </h2>
            </div>
            <p className="text-slate-700">
              Dimensional tolerance requirements vary drastically between general structural fabrication and high-speed CNC turning. For bars fed through automatic CNC lathe bar loaders or clamped in precision collets, <strong>bright drawn round bar with ISO h9 or h11 tolerance</strong> is required to prevent collet jamming and bar rattle.
            </p>
            <p className="text-slate-700">
              Furthermore, bar straightness is vital. A bar with noticeable camber or banana-bend will cause severe spindle vibration at normal machining RPM, poor surface finishes, and rapid cutting tool wear.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Tolerance class (e.g., bright drawn h9 tolerance versus hot-rolled commercial tolerance).</li>
                <li>Straightness specification (e.g., maximum allowable camber per meter of length).</li>
                <li>Roundness / ovality limits on large diameter forgings and heavy rolled rounds.</li>
              </ul>
            </div>
          </div>

          {/* Check 5 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                5
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Material Test Certificate (MTC) and Heat Traceability
              </h2>
            </div>
            <p className="text-slate-700">
              For mining maintenance, structural fabrications, lifting machinery, and critical industrial plant, components must be accompanied by verified material traceability. If a failure occurs in service, insurance and regulatory audits require proof that the supplied steel complied with the engineering drawing.
            </p>
            <p className="text-slate-700">
              Verify whether an <strong>EN 10204 3.1 Mill Test Certificate (MTC)</strong> is required. Ensure the supplier guarantees that physical bar ends or bundles carry stamped cast or heat numbers that directly match the paperwork.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Certificate type: EN 10204 Type 3.1 (metallic test certificate) or 2.2 (declaration of compliance).</li>
                <li>Heat / melt number stamped or tagged on the steel stock.</li>
                <li>Chemical composition limits and mechanical test results matching the ordered standard.</li>
              </ul>
            </div>
          </div>

          {/* Check 6 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                6
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Cut Lengths, Kerf Loss, and Quantity Breakdown
              </h2>
            </div>
            <p className="text-slate-700">
              Steel bars are commonly rolled in standard commercial mill lengths between 5.5 and 6.5 meters. When requesting a cut billet or pre-cut pieces, confirm how the lengths are calculated and cut.
            </p>
            <p className="text-slate-700">
              Industrial horizontal bandsaws use blades that remove approximately 2.5mm to 4.5mm of material per cut (the blade kerf). If you need 10 billets of 600mm from a 6-meter bar, the cumulative kerf loss means you will only get 9 full billets. Confirm cut length tolerances (e.g., +3mm/-0mm) so pieces do not arrive undersized.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Supply form: Full standard lengths versus precision saw-cut billets.</li>
                <li>Cutting tolerance: Positive length allowance (e.g., +2mm to +4mm) for facing on lathe centers.</li>
                <li>Kerf loss allowances included in billet quantity calculations.</li>
              </ul>
            </div>
          </div>

          {/* Check 7 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                7
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Surface Quality, Storage Condition, and Packaging
              </h2>
            </div>
            <p className="text-slate-700">
              Steel stored in open outdoor yards exposed to rain and humidity can develop severe corrosion pitting. While light superficial flash rust can be turned away easily, deep localized pitting can penetrate deeper than your machining depth, ruining the finished workpiece.
            </p>
            <p className="text-slate-700">
              For bright drawn rounds, precision ground shafting, and tool steels, stock should be preserved in rust-preventative oil, wrapped in moisture-resistant packaging, and strapped securely to prevent bowing or transit damage during transport.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Absence of deep pitting, gouges, transit impact notches, or severe scaling.</li>
                <li>Corrosion protection: Protective oiling, wrapping, and strapping for bright and precision ground stock.</li>
                <li>Safe bundling for unloading and storage in your workshop racking.</li>
              </ul>
            </div>
          </div>

          {/* Check 8 */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0">
                8
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950">
                Total Itemized Costs, Delivery Terms, and Offloading Logistics
              </h2>
            </div>
            <p className="text-slate-700">
              Before approving payment, review the full quotation breakdown. Verify whether the quoted rate includes cutting charges per cut, packaging, value-added tax, and transport to your workshop or job site.
            </p>
            <p className="text-slate-700">
              Steel is exceptionally heavy and awkward to handle safely. A single 100mm diameter by 6-meter solid steel round weighs approximately 370 kg. Confirm whether delivery includes crane truck (hiab) offloading at your Bulawayo workshop or site destination, or if your facility must provide a forklift and rigging team.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm space-y-1">
              <strong className="text-slate-900">What to confirm:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pt-1">
                <li>Itemized invoice covering steel price, cutting fees, packaging, and taxes.</li>
                <li>Quotation validity period (steel markets fluctuate regularly).</li>
                <li>Delivery arrangement: Collection from warehouse versus site delivery to your facility.</li>
                <li>Offloading responsibility: Crane truck offloading or customer-provided offloading.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Quick RFQ Basket Addition Cards */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Itemized Quotation Basket
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Add Verified Steel Grades Directly to Your Requisition Basket
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a steel family below to add pre-configured technical specifications to your RFQ basket:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Medium Carbon Steel
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">
                  EN8 (080M40) Bright Drawn Round Bar
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Precision drawn h9 tolerance for immediate shaft turning, studs, pins, and mechanical components.
                </p>
              </div>
              <button
                onClick={() => handleAddSteelToRfq("EN8 Bright Round")}
                className="w-full py-2 px-3 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Add EN8 to RFQ</span>
              </button>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                  High-Tensile Alloy
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">
                  EN19 (708M40 / 709M40) 'T' Condition Bar
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Cr-Mo through-hardening steel in quenched and tempered 'T' condition (850-1000 MPa) for high-stress gears and drive axles.
                </p>
              </div>
              <button
                onClick={() => handleAddSteelToRfq("EN19 T Condition")}
                className="w-full py-2 px-3 text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-white" />
                <span>Add EN19 to RFQ</span>
              </button>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                  Machining Tube
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">
                  Heavy-Wall Mechanical Hollow Bar
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Heavy-wall seamless tube that eliminates core drilling for bushings, sleeves, hydraulic cylinders, and spacers.
                </p>
              </div>
              <button
                onClick={() => handleAddSteelToRfq("Hollow Bar Mechanical Tube")}
                className="w-full py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Add Hollow Bar to RFQ</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Procurement Assistance & Brand Commitment */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Proquanic Procurement Desk — Bulawayo & Nationwide
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Sourcing Engineering Steel for Workshop and Manufacturing Requirements
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Proquanic (Pvt) Ltd assists engineering workshops, machine shops, manufacturing plants, and mining maintenance teams in Bulawayo and throughout Zimbabwe with reliable industrial steel procurement. Guided by our operational commitment, <span className="text-orange-400 font-semibold">“If you need it. We will find it.”</span>, our procurement desk liaises with certified stockholders and mills to supply exact steel grades cut to your required dimensions.
            </p>
            <p>
              Whether your job card requires single replacement billets or batch quantities of EN8, EN19, EN24, mild steel, or mechanical hollow bar, we provide transparent, itemized quotations and coordinate secure site delivery across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3.5 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-white font-bold block mb-1">Bulawayo Commercial Desk</span>
              <p className="text-slate-400">
                Headquartered in Bulawayo with site delivery arrangements coordinated to workshops and operations nationwide.
              </p>
            </div>
            <div className="p-3.5 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-white font-bold block mb-1">Itemized Quotation Basket</span>
              <p className="text-slate-400">
                Add standard or cut steel items directly to our RFQ system for itemized pricing and availability review.
              </p>
            </div>
            <div className="p-3.5 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-white font-bold block mb-1">Direct Technical Support</span>
              <p className="text-slate-400">
                Send engineering drawings, bills of materials, or material specs via WhatsApp or email for rapid verification.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <HelpCircle className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Frequently Asked Questions: Buying Engineering Steel
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

        {/* Section 7: Final Thoughts and Procurement Advice */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Final Thoughts on Steel Procurement</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
            <p>
              Taking ten minutes to systematically verify these eight details before issuing payment protects your workshop from machining downtime, unexpected tooling expenses, and catastrophic component failure in the field.
            </p>
            <p>
              A professional purchase order with complete grade specifications, confirmed supply conditions, clear machining allowances, and itemized delivery arrangements ensures you receive the exact material your engineers designed for.
            </p>
          </div>
        </section>

        {/* Section 8: Technical References & Industry Citations */}
        <section className="bg-slate-100 p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Technical References & Engineering Resources</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            For further study into engineering steel metallurgy, mechanical properties, and heat treatment conditions, consult the following industry reference resources:
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
                  <span>Smiths Metal Centres — EN8 (080M40) Engineering Steel Technical Guide</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <span className="text-slate-500 block text-[11px]">
                  Technical data on unalloyed medium carbon engineering steel, chemical composition limits, and mechanical properties.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.smithmetal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Smiths Metal Centres — Medium Carbon Steel Engineering Datasheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <span className="text-slate-500 block text-[11px]">
                  Standard specifications, machinability ratings, and heat-treatment parameters for carbon steel stock.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://macsteel.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Macsteel — 709M40 / EN19 High Tensile Steel Technical Data Sheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <span className="text-slate-500 block text-[11px]">
                  Detailed ruling section mechanical property tables for quenched and tempered Cr-Mo alloy steel in conditions R through W.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="http://www.tsmsteel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>TSM Steel — 708M40 / EN19 Chromium-Molybdenum Steel Reference</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <span className="text-slate-500 block text-[11px]">
                  Comparative analysis of through-hardening alloy steels for high-torque mechanical engineering applications.
                </span>
              </div>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 italic">
            * Disclaimer: These references support general technical principles. Do not imply that they verify a particular product offered by Proquanic.
          </div>
        </section>

        {/* Related Technical Articles */}
        <RelatedArticles currentSlug="/blog/steel-buying-checklist-engineering-workshop" />

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
