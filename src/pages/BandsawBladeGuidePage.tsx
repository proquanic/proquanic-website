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
  Layers,
  ArrowRight
} from "lucide-react";

export const BandsawBladeGuidePage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

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

  const handleAddBandsawBladeToRfq = (bladeType: "Bi-Metal M42" | "Variable Pitch Structural" | "Carbide Tipped") => {
    if (bladeType === "Bi-Metal M42") {
      addItem({
        title: "Bi-Metal M42 Metal-Cutting Bandsaw Blade (Continuous Welded Loop)",
        category: "Sawing Products",
        partNumberOrGrade: "M42 Bi-Metal (8% Cobalt)",
        quantity: "2",
        unit: "Blades",
        specifications:
          "Tooth Pitch: Specify variable TPI (e.g., 4/6 or 5/8 TPI); Blade Dimensions: Length x Width x Thickness (e.g. 2750 x 27 x 0.9mm); For solid steel billets, bar stock & profiles.",
      });
      setAddedItemName("M42 Bi-Metal Bandsaw Blade");
    } else if (bladeType === "Variable Pitch Structural") {
      addItem({
        title: "Variable Pitch Structural Bandsaw Blade for Tubes & Channels",
        category: "Sawing Products",
        partNumberOrGrade: "Bi-Metal Structural Geometry",
        quantity: "2",
        unit: "Blades",
        specifications:
          "Tooth Pitch: Fine variable TPI (e.g., 8/12 or 10/14 TPI); Reinforced tooth back to prevent tooth stripping on interrupted cuts & hollow sections.",
      });
      setAddedItemName("Structural Variable Pitch Blade");
    } else {
      addItem({
        title: "Carbide-Tipped High-Performance Bandsaw Blade",
        category: "Sawing Products",
        partNumberOrGrade: "Carbide Tipped (TCT)",
        quantity: "1",
        unit: "Blade",
        specifications:
          "High wear resistance for abrasive tool steels, titanium alloys, induction-hardened bars, and stainless materials.",
      });
      setAddedItemName("Carbide-Tipped Bandsaw Blade");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your Bandsaw Blade Breakage Troubleshooting Guide and would like to request technical pricing and availability for replacement metal-cutting bandsaw blades."
  )}`;

  const emailSubject = encodeURIComponent("Bandsaw Blade Replacement Quotation Request — Proquanic");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for replacement metal-cutting bandsaw blades based on your technical troubleshooting guide:\n\n- Machine Make / Model: [e.g., Everising, Cosen, Rong Fu, Way Train, Amada]\n- Blade Dimensions (Length x Width x Thickness): [e.g., 3660 x 27 x 0.9mm]\n- Material Being Cut: [e.g., EN8, EN19, Mild Steel, Stainless, Structural Tubing]\n- Workpiece Shape & Dimensions: [e.g., 80mm solid round / 50x50x3mm box section]\n- Current Tooth Pitch / Specification: [e.g., 4/6 TPI Bi-Metal M42]\n- Quantity Needed: [number of blades]\n- Delivery Destination: [Bulawayo, Harare, Kwekwe, or other city in Zimbabwe]\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const faqs = [
    {
      q: "Why do metal-cutting bandsaw blades keep breaking?",
      a: "Possible causes include unsuitable tooth pitch, incorrect cutting conditions, an inadequate break-in procedure, tension or guide problems, poor workpiece clamping and an unsuitable or damaged blade. The actual cause must be investigated rather than assumed.",
    },
    {
      q: "Can the wrong tooth pitch damage a bandsaw blade?",
      a: "Yes. Tooth pitch must suit the workpiece dimensions and profile. An unsuitable pitch can contribute to tooth damage, vibration, poor cutting performance and premature blade failure.",
    },
    {
      q: "Should I increase feed pressure when the blade cuts slowly?",
      a: "Not automatically. First check blade condition, tooth selection, operating settings and machine condition. Increasing pressure without identifying the cause may worsen the problem.",
    },
    {
      q: "Does a new bandsaw blade need a break-in procedure?",
      a: "Many metal-cutting blade manufacturers recommend a controlled break-in procedure. Follow the instructions for the specific blade rather than applying one universal procedure.",
    },
    {
      q: "How do I know which replacement bandsaw blade to order?",
      a: "Confirm the machine model, required blade dimensions, material being cut, workpiece profile, tooth pitch and blade type. Use the machine and blade manufacturers' specifications to verify compatibility.",
    },
    {
      q: "Can I use the same blade for solid bars and thin-walled tubing?",
      a: "Not necessarily. Solid bars and thin-walled sections present different cutting conditions. Select the tooth pitch and blade type using the manufacturer's recommendations for the actual material dimensions and profile.",
    },
  ];

  // Article structured data for rich snippet & SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
    "description":
      "A metal-cutting bandsaw blade should run steadily and deliver a reasonable service life. Discover 6 critical causes of repeated blade breakage, wandering cuts, and tooth stripping, with diagnostics and an ordering checklist.",
    "image": [
      "https://www.proquanic.co.zw/src/assets/images/bandsaw_blade_breakage_1793004061855.jpg"
    ],
    "datePublished": "2026-03-20T08:00:00+02:00",
    "dateModified": "2026-03-20T08:00:00+02:00",
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
      "@id": "https://www.proquanic.co.zw/blog/why-metal-cutting-bandsaw-blade-breaks"
    },
    "articleSection": "Sawing Products",
    "inLanguage": "en-ZW",
    "keywords": [
      "bandsaw blade breaking",
      "metal cutting bandsaw troubleshooting",
      "bi-metal bandsaw blade",
      "tooth pitch TPI",
      "bandsaw blade break-in",
      "bandsaw guide adjustment",
      "industrial sawing supplies Zimbabwe",
      "Bulawayo bandsaw blades"
    ]
  };

  // FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  useEffect(() => {
    // Inject canonical link dynamically if not present
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.proquanic.co.zw/blog/why-metal-cutting-bandsaw-blade-breaks");
  }, []);

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb & Metadata Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products/sawing-products" className="hover:text-slate-900 transition-colors">
              Sawing Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              Bandsaw Blade Failure Troubleshooting
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-200 transition-colors"
              title="Share or copy article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? "Link Copied" : "Share"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-200 transition-colors"
              title="Print technical troubleshooting guide"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
        {/* Article Header & Main Title */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded font-mono font-semibold bg-orange-100 text-orange-900 border border-orange-200">
              Technical Troubleshooting Guide
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Category: Sawing Products → Metal-Cutting Blades</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Published by Proquanic Technical Desk</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check
          </h1>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl space-y-3">
            <p>
              A metal-cutting bandsaw blade should do more than cut through material. It needs to run steadily, produce an acceptable cut and deliver a reasonable service life.
            </p>
            <p>
              When blades keep breaking, losing teeth or wandering away from the intended cutting line, replacing the blade without investigating the cause can become an expensive cycle.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              The problem may involve blade selection, machine condition, operating settings or how the workpiece is secured. Here are six areas to investigate before installing another replacement blade.
            </p>
          </div>
        </header>

        {/* Hero Visual Block */}
        <figure className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/src/assets/images/bandsaw_blade_breakage_1793004061855.jpg"
              alt="Machinist inspecting horizontal metal-cutting bandsaw blade, guide bearings, and coolant system during industrial cutting operation."
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 sm:p-6 text-white">
              <span className="text-xs uppercase tracking-wider font-mono text-orange-400 font-bold block mb-1">
                Machine Setup & Cutting Conditions
              </span>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-snug">
                Inspecting guide bearings, blade tracking, tooth pitch compatibility, and clamping stability prevents repeated blade snapping and wandering cuts.
              </p>
            </div>
          </div>
          <figcaption className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span>Visual reference: Horizontal bandsaw blade inspection and structural section cutting.</span>
            <span className="font-mono text-slate-500">Bi-Metal M42 / Carbide-Tipped Bandsaw Blades</span>
          </figcaption>
        </figure>

        {/* Quick RFQ Basket Action Banner */}
        <aside aria-label="Requisition quick action" className="bg-slate-900 text-white rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-orange-500 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-400">
                Need Replacement Metal-Cutting Bandsaw Blades?
              </h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Proquanic coordinates procurement for custom-welded bi-metal M42 and carbide-tipped bandsaw blades matched to your horizontal or vertical bandsaw across Zimbabwe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleAddBandsawBladeToRfq("Bi-Metal M42")}
              className="w-full sm:w-auto px-4 py-2 bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Add Bandsaw Blade to RFQ</span>
            </button>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </aside>

        {addedItemName && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>{addedItemName}</strong> added to your RFQ Requisition Basket. You can review and submit your list anytime.
            </span>
          </div>
        )}

        {/* The 6 Causes Section */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-orange-600">
              Systematic Troubleshooting
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              6 Key Causes to Investigate Before Installing Another Blade
            </h2>
          </div>

          {/* Cause 1 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Tooth Pitch Does Not Match the Material
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                One of the first things to check is the blade's tooth pitch, commonly expressed as TPI, meaning teeth per inch.
              </p>
              <p>
                The appropriate tooth pitch depends on the shape and dimensions of the material being cut. A thin-walled tube presents a different cutting condition from a large solid steel bar.
              </p>
              <p>
                If the tooth pitch is unsuitable, the teeth may not engage the material correctly. An inappropriate pitch can contribute to tooth damage, vibration, poor cutting performance or chips accumulating between the teeth.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the material solid bar, tube, box section or another profile?</li>
                <li>What is the material's diameter, width or wall thickness?</li>
                <li>Does the blade manufacturer's selection chart recommend the installed tooth pitch for this section?</li>
                <li>Is the blade intended for the material and cutting operation?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Do not select a blade simply because it worked on a previous job. A blade suitable for thick solid stock may not be suitable for thin-walled sections.
            </p>

            <div className="bg-orange-50 border-l-2 border-orange-500 p-3 text-xs text-orange-950">
              <strong>Practical tip:</strong> Check the blade manufacturer's tooth-pitch chart using the actual material dimensions and profile. Treat general rules as starting points, not universal specifications.
            </div>
          </div>

          {/* Cause 2 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Feed Rate or Cutting Speed Is Unsuitable
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                A bandsaw blade must operate within the cutting conditions specified for the blade, material and machine.
              </p>
              <p>
                Excessive feed pressure can overload the teeth, while an unsuitable cutting speed can contribute to poor cutting performance and premature wear. The correct settings depend on the workpiece material, its dimensions, the blade specification and the saw's design.
              </p>
              <p>
                Simply forcing the blade through the material is not a reliable way to increase production.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Are the cutting speed and feed settings suitable for the material?</li>
                <li>Has the feed been increased to compensate for a dull blade?</li>
                <li>Does the blade show signs of damaged or missing teeth?</li>
                <li>Are the machine settings consistent with the blade manufacturer's recommendations?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              If a blade suddenly starts cutting slowly, investigate its condition and the machine setup rather than automatically increasing the feed pressure.
            </p>
          </div>

          {/* Cause 3 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Blade Was Not Properly Run In
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                A new blade may need a controlled break-in procedure before it is used under normal production conditions.
              </p>
              <p>
                Manufacturer guidance explains that the sharp tooth tips of a new blade can be damaged if they are immediately subjected to aggressive cutting conditions. A suitable break-in process allows the cutting edges to settle into service.
              </p>
              <p>
                The exact procedure depends on the blade manufacturer's instructions and the blade type.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Was the blade installed according to the manufacturer's instructions?</li>
                <li>Was the initial feed reduced as specified?</li>
                <li>Was the break-in process followed for the required cutting conditions?</li>
                <li>Was the blade immediately used on demanding production work?</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-2 border-orange-500 p-3 text-xs text-orange-950">
              <strong>Practical tip:</strong> Keep the blade manufacturer's break-in instructions with the machine's operating information. Do not assume every blade uses the same procedure.
            </div>
          </div>

          {/* Cause 4 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 4
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Blade Tension, Guides or Machine Condition Are Incorrect
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Blade performance depends on more than the blade itself. Tensioning arrangements, guides, wheels and other machine components all influence how the blade runs.
              </p>
              <p>
                Incorrect tension or worn and damaged guide components can contribute to instability, tracking problems and premature blade failure. Excessive tension should not be used as a substitute for proper machine maintenance.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is blade tension set according to the machine and blade manufacturers' specifications?</li>
                <li>Are the blade guides worn, damaged or incorrectly adjusted?</li>
                <li>Are the wheels and tracking arrangements in good condition?</li>
                <li>Are there unusual vibrations, noises or signs of abnormal blade movement?</li>
                <li>Is the blade damaged at a particular point along its length?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Do not guess a tension value or adjust machine components beyond your training. Use the equipment manual and have faults inspected by qualified maintenance personnel.
            </p>
          </div>

          {/* Cause 5 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 5
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Workpiece Is Not Properly Secured
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                The workpiece must be supported and clamped appropriately for the cutting operation.
              </p>
              <p>
                Movement during cutting can disturb the blade's engagement with the material. Thin-walled profiles, bundled stock and irregular sections may require particular attention to support and clamping.
              </p>
              <p>
                An incorrectly positioned workpiece can also affect cut quality and place unnecessary stress on the blade.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the workpiece firmly secured in the machine vice?</li>
                <li>Is the material supported appropriately along its length?</li>
                <li>Can the section rotate, shift or vibrate during the cut?</li>
                <li>Is the clamping arrangement suitable for the material's shape?</li>
                <li>Are multiple pieces being cut together only where the machine and process permit it?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Always follow the machine's safe-work procedures. Never hold material by hand in place of the required clamping system.
            </p>
          </div>

          {/* Cause 6 */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                Cause 6
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Blade Type Is Unsuitable or the Blade Is Worn
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Not every metal-cutting blade is designed for the same material, machine or operating conditions.
              </p>
              <p>
                Blade construction, tooth material, tooth geometry, dimensions and pitch all influence suitability. For example, bi-metal blades are widely used for industrial metal cutting, while carbide-tipped blades serve particular applications requiring their specific cutting characteristics.
              </p>
              <p>
                A blade that is unsuitable for the job may wear rapidly or suffer tooth damage. A worn blade can also encourage operators to apply excessive feed pressure, making the problem worse.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the blade type recommended for the workpiece material?</li>
                <li>Are the blade dimensions correct for the machine?</li>
                <li>Is the tooth geometry appropriate for the section being cut?</li>
                <li>Is the blade worn, damaged or missing teeth?</li>
                <li>Does the blade manufacturer's guidance support its use for the application?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Do not replace one blade type with another simply because the dimensions appear similar. Confirm machine compatibility and application suitability first.
            </p>
          </div>
        </section>

        {/* Diagnostic Table Section */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              How to Diagnose Repeated Bandsaw Blade Failure
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Before ordering another blade, record what happened and inspect the machine safely.
          </p>

          <div className="border border-slate-200 rounded-lg overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="py-3 px-4 border-b border-slate-800 w-1/3">What you observe</th>
                    <th className="py-3 px-4 border-b border-slate-800 w-2/3">Areas to investigate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Teeth are missing or damaged
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Tooth pitch, feed conditions, workpiece profile and blade selection
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Blade repeatedly wanders from the cut line
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Blade condition, tension, guides, tracking and workpiece support
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Blade fails unusually early
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Blade suitability, break-in procedure, machine settings and maintenance condition
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Cut quality deteriorates
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Blade wear, tooth selection, alignment and operating conditions
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Blade breaks at a similar location repeatedly
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Inspect the blade and machine for recurring damage or abnormal loading; obtain qualified maintenance assessment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-2 pt-2">
            <p>
              These observations are diagnostic clues, not proof of a single cause. Several problems can produce similar symptoms, and more than one fault may be present at the same time.
            </p>
            <p className="font-semibold text-slate-800">
              Before inspecting, removing or adjusting a blade, isolate the machine according to its safety procedures and follow the manufacturer's instructions.
            </p>
          </div>
        </section>

        {/* 8-Point Ordering Checklist */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckSquare className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Before You Order a Replacement Bandsaw Blade
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            To help identify a suitable replacement, prepare the following information:
          </p>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-800 list-none p-0">
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="block text-slate-900">Machine details:</strong>
                <span className="text-slate-600">Manufacturer, model and the required blade length.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="block text-slate-900">Blade dimensions:</strong>
                <span className="text-slate-600">Length, width and thickness as specified for the machine.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="block text-slate-900">Material being cut:</strong>
                <span className="text-slate-600">Steel grade or material type, where known.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong className="block text-slate-900">Workpiece shape:</strong>
                <span className="text-slate-600">Solid bar, tube, box section, structural profile or another form.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                5
              </span>
              <div>
                <strong className="block text-slate-900">Material dimensions:</strong>
                <span className="text-slate-600">Diameter, width, height or wall thickness, as applicable.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                6
              </span>
              <div>
                <strong className="block text-slate-900">Current blade specification:</strong>
                <span className="text-slate-600">Blade construction, tooth pitch and tooth geometry, where known.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                7
              </span>
              <div>
                <strong className="block text-slate-900">Failure symptoms:</strong>
                <span className="text-slate-600">Whether the blade loses teeth, wanders, wears quickly or breaks.</span>
              </div>
            </li>
            <li className="p-3.5 bg-slate-50 rounded border border-slate-200 flex items-start gap-2.5">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                8
              </span>
              <div>
                <strong className="block text-slate-900">Quantity required:</strong>
                <span className="text-slate-600">The number of replacement blades needed.</span>
              </div>
            </li>
          </ol>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
            Where possible, include the existing blade's specification and the machine manual's recommended requirements. If you are unsure which specification applies, state that clearly rather than guessing.
          </p>
        </section>

        {/* Industrial Sawing Supplies in Bulawayo, Zimbabwe */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg border border-slate-800 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
            <MapPin className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Industrial Sawing Supplies in Bulawayo, Zimbabwe
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Proquanic (Pvt) Ltd supports industrial procurement and engineering supply requirements for businesses in Bulawayo and across Zimbabwe.
            </p>
            <p>
              For metal-cutting bandsaw blade enquiries, provide the machine details, blade dimensions, workpiece material and cutting application. This information helps establish the requirement before a replacement is selected.
            </p>
            <p className="text-slate-400 text-xs italic">
              Product suitability, availability, lead time and pricing should be confirmed for the specific enquiry.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-lg p-5 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
              Need metal-cutting bandsaw blades or other industrial supplies?
            </span>
            <p className="text-xs text-slate-300">
              Contact Proquanic (Pvt) Ltd:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <a
                href={emailQuotationLink}
                className="p-3 bg-slate-900 rounded border border-slate-700 hover:border-orange-500 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="truncate">sales@proquanic.co.zw</span>
              </a>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>+263 790 420 836</span>
              </a>
              <a
                href="https://www.proquanic.co.zw"
                className="p-3 bg-slate-900 rounded border border-slate-700 hover:border-orange-500 transition-colors flex items-center gap-2"
              >
                <span className="font-mono text-orange-400">🌐</span>
                <span className="truncate">https://www.proquanic.co.zw</span>
              </a>
            </div>
            <div className="pt-2 text-center sm:text-left">
              <span className="text-xs font-medium text-white italic">
                “If you need it. We will find it.”
              </span>
            </div>
          </div>
        </section>

        {/* 6 Frequently Asked Questions (Accordion) */}
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

        {/* Final Thoughts */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Final Thoughts</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
            <p>
              Repeated bandsaw blade failure should be treated as a troubleshooting problem, not just a replacement-purchase problem.
            </p>
            <p>
              Checking tooth pitch, cutting conditions, break-in procedure, machine condition, workpiece clamping and blade suitability can help narrow down the cause. Use the machine and blade manufacturers' guidance, and involve qualified maintenance personnel when machine faults or unsafe conditions are suspected.
            </p>
            <p className="font-medium text-slate-900">
              The goal is to identify a suitable blade, correct the underlying problem and reduce avoidable interruptions to production.
            </p>
          </div>
        </section>

        {/* Action / Requisition Footer */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Submit Your Bandsaw Blade Requisition
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Contact Proquanic's procurement desk in Bulawayo with your machine brand, blade dimensions, or workpiece details for itemized pricing and availability.
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
              <span>Email Sales Desk</span>
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
