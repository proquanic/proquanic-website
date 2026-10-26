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
  BookOpen
} from "lucide-react";

export const EndMillsGuidePage: React.FC = () => {
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

  const handleAddEndMillToRfq = (type: "4-Flute Variable Helix" | "2-Flute Slot Drill" | "Roughing End Mill") => {
    if (type === "4-Flute Variable Helix") {
      addItem({
        title: "Solid Carbide 4-Flute Variable Helix End Mill (AlTiN Coated)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "Sub-Micrograin Carbide / AlTiN",
        quantity: "2",
        unit: "Pieces",
        specifications:
          "Diameter: Specify (e.g., 6mm, 10mm, 12mm, 16mm); Shank: h6 tolerance; Unequal pitch for chatter suppression; Side milling and profiling in alloy steels up to 55 HRC.",
      });
      setAddedItemName("4-Flute Variable Helix End Mill");
    } else if (type === "2-Flute Slot Drill") {
      addItem({
        title: "Solid Carbide 2-Flute Slot Drill / Center-Cutting End Mill",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "Solid Carbide / Bright or TiAlN",
        quantity: "2",
        unit: "Pieces",
        specifications:
          "Center cutting for direct ramping and plunge slotting; Large flute gullet space for rapid chip evacuation in aluminum and mild steels.",
      });
      setAddedItemName("2-Flute Center-Cutting Slot Drill");
    } else {
      addItem({
        title: "High-Performance Knuckle-Profile Roughing End Mill",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "Micrograin Carbide / TiSiN",
        quantity: "1",
        unit: "Piece",
        specifications:
          "Sinusoidal knuckle profile to break chips into short segments; High metal removal rates with reduced radial cutting pressure in heavy steel machining.",
      });
      setAddedItemName("Knuckle-Profile Roughing End Mill");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your End Mill Breakage Troubleshooting Guide and would like to request technical pricing and availability for milling cutters."
  )}`;

  const emailSubject = encodeURIComponent("End Mill Replacement Quotation Request — Proquanic");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for milling cutters based on your End Mill technical guide:\n\n- Cutting Diameter: [e.g., 10mm, 12mm, 16mm]\n- Overall Length & Cutting Length: [e.g., 75mm OAL, 25mm flute length]\n- Tool Construction & Coating: [e.g., Solid Carbide AlTiN coated, HSS-Co8]\n- Flute Count & Type: [e.g., 4-flute variable helix, 2-flute slot drill, ball nose]\n- Workpiece Material: [e.g., EN8, EN19, D2, Mild steel, 304 Stainless, Aluminum]\n- Operation: [e.g., Full slotting, shoulder profiling, pocketing, heavy roughing]\n- Machine & Holder Type: [e.g., BT40 ER32 collet chuck, hydraulic chuck, Weldon side-lock]\n- Quantity Needed:\n- Delivery Destination: [e.g., Bulawayo, Harare, Kwekwe, or other city in Zimbabwe]\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const faqs = [
    {
      q: "Why does an end mill keep breaking?",
      a: "Possible causes include excessive cutting load, unsuitable tool selection, chip packing, excessive overhang, poor workholding, vibration, toolpath issues or a worn cutter. The actual cause should be established from the tool and machining conditions.",
    },
    {
      q: "Does reducing the spindle speed always prevent end mill breakage?",
      a: "No. Cutting conditions must be appropriate for the specific cutter, material and operation. Reducing speed without checking feed and other parameters can fail to solve the problem.",
    },
    {
      q: "Can too much overhang break an end mill?",
      a: "Excessive overhang can reduce rigidity and increase deflection and vibration. Under unsuitable cutting conditions, these factors can contribute to tool damage or breakage.",
    },
    {
      q: "Why do chips cause problems during milling?",
      a: "Chips that cannot escape properly may accumulate in the cutting area or be recut. This can increase cutting loads, damage edges and affect the finished surface.",
    },
    {
      q: "Can I use the same end mill for slotting and side milling?",
      a: "Not automatically. Tool suitability depends on its design, geometry, material, chip space, cutting conditions and the operation. Check the manufacturer's guidance for the intended use.",
    },
    {
      q: "What information should I provide when ordering an end mill?",
      a: "Provide the diameter, cutting and overall lengths, tool material, coating where relevant, flute count or original part number, workpiece material, operation, holder requirements and quantity.",
    },
  ];

  // Article structured data for rich snippet & SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
    "description":
      "End mills chipping or breaking during machining? Learn seven possible causes involving tool selection, cutting conditions, chip evacuation and machine setup.",
    "image": [
      "https://www.proquanic.co.zw/src/assets/images/end_mill_inspection_1793005644754.jpg"
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
      "@id": "https://www.proquanic.co.zw/blog/why-end-mills-break"
    },
    "articleSection": "Cutting and Machining Tools",
    "inLanguage": "en-ZW",
    "keywords": [
      "why end mills break",
      "end mill breakage",
      "end mill chipping",
      "end mill troubleshooting",
      "milling cutter problems",
      "end mill tool life",
      "end mill selection",
      "chip evacuation",
      "CNC milling tools",
      "industrial cutting tools Zimbabwe"
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
    canonical.setAttribute("href", "https://www.proquanic.co.zw/blog/why-end-mills-break");
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
            <Link href="/products/cutting-machining-tools" className="hover:text-slate-900 transition-colors">
              Cutting & Machining Tools
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              End Mill Breakage Troubleshooting
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
              Technical Milling Guide
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Category: Cutting and Machining Tools → Milling Tools → End Mills</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Published by Proquanic Technical Desk</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools
          </h1>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl space-y-3">
            <p>
              An end mill can fail long before its expected service life if the tool, machine setup and machining operation are not working together properly.
            </p>
            <p>
              The result can be a broken cutter, damaged workpiece, wasted production time or an unexpected tooling expense. Replacing the end mill may get the machine running again, but unless the underlying cause is identified, the replacement could fail in the same way.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              End mills are designed for specific cutting operations and operating conditions. Their performance depends on the tool geometry, material, coating where applicable, cutting parameters, workpiece material, toolholding and machining strategy.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Here are seven areas to investigate when an end mill chips, wears prematurely or breaks.
            </p>
          </div>
        </header>

        {/* Hero Visual Block */}
        <figure className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/src/assets/images/end_mill_inspection_1793005644754.jpg"
              alt="Machinist inspecting an end mill and securely clamped workpiece in a milling workshop."
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 sm:p-6 text-white">
              <span className="text-xs uppercase tracking-wider font-mono text-orange-400 font-bold block mb-1">
                Setup Rigidity & Toolpath Optimization
              </span>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-snug">
                Minimizing tool overhang, ensuring rigid workpiece clamping, and controlling chip evacuation prevent sudden cutter deflection, edge chipping, and catastrophic tool failure.
              </p>
            </div>
          </div>
          <figcaption className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span>Visual reference: Precision vertical CNC milling machine with clamped workpiece and end mill.</span>
            <span className="font-mono text-slate-500">DIN 6527 Solid Carbide / Variable Helix Standards</span>
          </figcaption>
        </figure>

        {/* Quick RFQ Basket Action Banner */}
        <aside aria-label="Requisition quick action" className="bg-slate-900 text-white rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-orange-500 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-400">
                Need High-Performance Milling Tools for Your Machine Shop?
              </h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Proquanic coordinates procurement for precision solid carbide end mills, roughers, slot drills, and AlTiN/TiSiN coated tooling for CNC and manual milling across Zimbabwe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleAddEndMillToRfq("4-Flute Variable Helix")}
              className="w-full sm:w-auto px-4 py-2 bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Add End Mill to RFQ</span>
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

        {/* The 7 Areas to Investigate */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-orange-600">
              Systematic Investigation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              7 Machining Mistakes to Check When End Mills Chip or Break
            </h2>
          </div>

          {/* 1. Unsuitable Feed Rate or Cutting Conditions */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Feed Rate or Cutting Conditions Are Unsuitable
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Feed rate, spindle speed and depth of cut influence the load placed on an end mill.
              </p>
              <p>
                If the cutting load exceeds what the tool and setup can handle, the cutting edges may chip or the cutter may break. However, slowing everything down is not automatically the correct solution. Some tools and materials perform poorly when operated outside their recommended cutting conditions in either direction.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the workpiece material correctly identified?</li>
                <li>Are the spindle speed and feed rate suitable for the tool and material?</li>
                <li>Is the depth of cut appropriate for the cutter and machine?</li>
                <li>Has the tool manufacturer provided recommended cutting data?</li>
                <li>Has the machining operation changed from the original setup?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Use the manufacturer's recommendations as the starting point. Do not copy speed and feed figures from a different tool, diameter, material or machining operation without confirming that they apply.
            </p>
          </div>

          {/* 2. End Mill Not Suitable for the Operation */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The End Mill Is Not Suitable for the Operation
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                End mills differ in material, geometry, flute count, cutting-edge design, length and intended application.
              </p>
              <p>
                A cutter designed for one operation may not be suitable for another. For example, full-width slotting places different demands on an end mill from a light side-milling pass. A tool with limited chip space may be unsuitable for an operation that produces large volumes of chips in a confined area.
              </p>
              <p>
                The workpiece material also matters. A tool intended for general-purpose machining may not provide the required performance for a particular hard or difficult-to-machine material.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the cutter designed for the workpiece material?</li>
                <li>Is its geometry suitable for slotting, profiling, side milling or the intended operation?</li>
                <li>Is the flute count suitable for the chip-evacuation requirements?</li>
                <li>Is the cutter length appropriate for the required reach?</li>
                <li>Is the tool material and coating, if any, suitable for the application?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Do not select an end mill based on diameter alone. Confirm the tool specification and the operation it is expected to perform.
            </p>
          </div>

          {/* 3. Chips Packing Into Cutting Area */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Chips Are Packing Into the Cutting Area
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                During milling, the cutter must remove material while allowing chips to escape from the cutting zone.
              </p>
              <p>
                If chips accumulate in a slot, pocket or other confined area, the cutter may recut chips or become overloaded. Chip packing can contribute to edge damage, poor surface finish and tool breakage.
              </p>
              <p>
                The risk depends on the workpiece material, tool geometry, flute space, depth of cut, machining strategy and the way chips are removed.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Are chips accumulating in the slot or pocket?</li>
                <li>Is the cutter suitable for the amount of chip evacuation required?</li>
                <li>Is the machining strategy creating excessive tool engagement?</li>
                <li>Is the coolant or air delivery appropriate for the operation, where used?</li>
                <li>Are chips being safely and effectively removed from the cutting area?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                Follow the cutter manufacturer's guidance on chip evacuation and coolant or air use.
              </p>
              <p className="font-semibold text-slate-900">
                Never reach into a machine to remove chips while it is operating.
              </p>
            </div>
          </div>

          {/* 4. Cutter Has Too Much Overhang */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                4
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Cutter Has Too Much Overhang
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Overhang is the portion of the tool extending from its holder.
              </p>
              <p>
                Excessive overhang can reduce rigidity and increase the risk of deflection and vibration. This can affect dimensional accuracy, surface finish and tool life. Under heavy or unstable cutting conditions, it can contribute to cutter failure.
              </p>
              <p>
                A longer cutter is sometimes necessary to reach a feature, but using extra length without a genuine requirement can make the setup less rigid.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the cutter extending farther from the holder than necessary?</li>
                <li>Is the tool length appropriate for the required depth?</li>
                <li>Is the holder suitable and in good condition?</li>
                <li>Is there visible or audible vibration during machining?</li>
                <li>Can the setup achieve the required reach with a more suitable tool configuration?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                Use the shortest suitable tool and the minimum necessary overhang while maintaining safe clearance and access to the workpiece.
              </p>
              <p className="font-medium text-slate-900">
                Do not reduce overhang if doing so would cause the holder to contact the workpiece, fixture or machine. Verify the complete setup before making changes.
              </p>
            </div>
          </div>

          {/* 5. Workpiece or Toolholding Not Rigid Enough */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                5
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Workpiece or Toolholding Is Not Rigid Enough
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Milling produces cutting forces that must be resisted by the machine, toolholder, cutter and workholding arrangement.
              </p>
              <p>
                If the workpiece moves, the toolholder is not secure or the setup lacks rigidity, vibration and uneven cutting loads can result.
              </p>
              <p>
                These conditions may cause chipping, dimensional errors, poor surface finish or breakage.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the workpiece securely clamped?</li>
                <li>Is the fixture suitable for the shape and size of the part?</li>
                <li>Is the tool correctly secured in its holder?</li>
                <li>Are the holder and spindle interfaces clean and undamaged?</li>
                <li>Is there excessive vibration or chatter?</li>
                <li>Is the cutter extending unnecessarily far from the holder?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                A more expensive cutter will not necessarily solve a problem caused by an unstable fixture or worn toolholding system.
              </p>
              <p>
                If the spindle, holder or machine appears damaged, stop and arrange an appropriate inspection by qualified maintenance personnel.
              </p>
            </div>
          </div>

          {/* 6. Toolpath or Entry Too Aggressive */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                6
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Toolpath or Entry Into the Material Is Too Aggressive
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                The way an end mill enters and moves through the workpiece affects the cutting forces it experiences.
              </p>
              <p>
                Sudden engagement, excessive tool engagement, unsuitable entry moves or an overly aggressive depth of cut can overload the cutting edges.
              </p>
              <p>
                This is especially important when a machining program includes slots, pockets, corners or other features that cause abrupt changes in cutter engagement.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Does the cutter enter the material in a way permitted by its design?</li>
                <li>Is the toolpath creating sudden increases in engagement?</li>
                <li>Is the depth or width of cut appropriate?</li>
                <li>Is the cutter designed for the type of entry being used?</li>
                <li>Has the programmed toolpath been checked for collisions or unexpected movements?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                Not every end mill is designed for direct plunging into solid material. Confirm whether the selected cutter supports the intended entry method and follow the manufacturer's recommendations.
              </p>
              <p>
                For CNC work, the toolpath should be reviewed by a competent programmer or machinist before changing the machining strategy.
              </p>
            </div>
          </div>

          {/* 7. Worn Cutter Used Beyond Service Life */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                7
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                A Worn Cutter Is Being Used Beyond Its Suitable Service Life
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                An end mill does not need to break completely to have reached the end of its useful service life.
              </p>
              <p>
                Progressive wear, chipped edges, built-up material on the cutting edge or deteriorating surface finish can indicate that the tool needs inspection or replacement.
              </p>
              <p>
                Continuing to use a worn cutter may increase cutting forces and reduce part quality. Reconditioning may be possible for certain cutters, but it must be appropriate for the tool design and condition.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Are the cutting edges worn or chipped?</li>
                <li>Has the surface finish deteriorated?</li>
                <li>Are dimensions drifting outside the permitted limits?</li>
                <li>Is the cutter producing unusual vibration or cutting sounds?</li>
                <li>Is regrinding or reconditioning permitted for this tool?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Set inspection and replacement criteria appropriate to the operation. For critical parts, follow the approved quality requirements rather than waiting for a tool to fail.
            </p>
          </div>
        </section>

        {/* Quick End Mill Troubleshooting Guide Table */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Wrench className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              Quick End Mill Troubleshooting Guide
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Use this table to identify areas worth inspecting. These are diagnostic starting points, not proof of a single cause.
          </p>

          <div className="border border-slate-200 rounded-lg overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="py-3 px-4 border-b border-slate-800 w-1/3">Symptom</th>
                    <th className="py-3 px-4 border-b border-slate-800 w-2/3">Possible areas to investigate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      End mill breaks suddenly
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Excessive cutting load, toolpath, chip packing, overhang, runout or poor workholding
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Cutting edges chip
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Feed and depth of cut, vibration, tool suitability, entry method and cutting-edge condition
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Excessive vibration or chatter
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Setup rigidity, overhang, toolholding, spindle condition, cutting parameters and tool geometry
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Chips accumulate in a slot or pocket
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Chip space, flute count, tool engagement and chip-removal strategy
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Poor surface finish
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Tool wear, vibration, runout, cutting conditions and tool suitability
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Cutter wears unusually quickly
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Workpiece material, tool material, cutting conditions, coating suitability and application
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-600 pt-1">
            Several problems can produce similar symptoms. Investigate the tool, setup and operation together before deciding on a corrective action.
          </p>
        </section>

        {/* What to Check Before Ordering a Replacement End Mill */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckSquare className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              What to Check Before Ordering a Replacement End Mill
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            When requesting a replacement, provide enough information to identify a suitable tool.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">1</span>
                Diameter
              </h3>
              <p className="text-slate-600 pl-7">
                Specify the required cutting diameter and the units used in the original specification.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">2</span>
                Overall length and cutting length
              </h3>
              <p className="text-slate-600 pl-7">
                Confirm the required reach and the length of the cutting portion. Do not assume that two cutters with the same diameter have the same reach or application.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">3</span>
                Tool material and coating
              </h3>
              <p className="text-slate-600 pl-7">
                Identify whether the requirement specifies HSS, solid carbide or another tool construction. Include the coating specification where relevant and known.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">4</span>
                Flute count and geometry
              </h3>
              <p className="text-slate-600 pl-7">
                Provide the original tool specification or part number. Flute count and geometry can affect cutting performance and chip evacuation.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">5</span>
                Workpiece material
              </h3>
              <p className="text-slate-600 pl-7">
                Identify the material being machined and its grade or condition where known.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">6</span>
                Operation
              </h3>
              <p className="text-slate-600 pl-7">
                State whether the cutter is used for slotting, profiling, side milling, pocketing or another operation.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">7</span>
                Machine and toolholder
              </h3>
              <p className="text-slate-600 pl-7">
                Provide the machine type and the holder or shank requirements needed for compatibility.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">8</span>
                Quantity and supporting information
              </h3>
              <p className="text-slate-600 pl-7">
                Specify the quantity and include the original part number, drawing, catalogue reference or a clear photograph if available.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
            A photograph can help identify a tool, but it does not replace confirmation of its dimensions, material and compatibility.
          </p>
        </section>

        {/* Industrial Milling Tools in Bulawayo, Zimbabwe */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg border border-slate-800 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
            <MapPin className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Industrial Milling Tools in Bulawayo, Zimbabwe
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Proquanic (Pvt) Ltd supports industrial procurement and engineering supply requirements for businesses in Bulawayo and across Zimbabwe.
            </p>
            <p>
              For end mills and related cutting-tool enquiries, provide the required dimensions, tool specification, workpiece material, machining operation, machine or holder details and quantity.
            </p>
            <p className="text-slate-400 text-xs italic">
              Product suitability, availability, lead time and pricing should be confirmed for the specific requirement.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-lg p-5 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
              Need end mills or other industrial cutting tools?
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

        {/* Frequently Asked Questions */}
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
              An end mill that repeatedly chips or breaks is telling you that something in the tool, setup or machining process needs attention.
            </p>
            <p>
              Check cutting conditions, tool suitability, chip evacuation, overhang, workholding, toolpath and wear before assuming that a different cutter alone will solve the problem.
            </p>
            <p className="font-medium text-slate-900">
              Accurate identification and a stable, suitable machining setup help reduce avoidable tooling failures and support more reliable production.
            </p>
          </div>
        </section>

        {/* Technical References */}
        <section className="bg-slate-100 p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <h2 className="text-base font-bold text-slate-900">Technical references</h2>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            These references support general end-milling troubleshooting principles. Do not imply that the sources verify a specific product supplied by Proquanic.
          </p>

          <ul className="text-xs space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.maford.com/SiteContent/Documents/2024_catalog/MA%20Ford%20End%20Mill%20Troubleshooting%20Chart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>M.A. Ford — End Mills Technical Information and Troubleshooting Chart</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.am-ind.com/resources/industrial-insights-blog/end-mill-troubleshooting-end-mill-problems-and-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>A&M Industrial — End Mill Troubleshooting Guide</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.harveyperformance.com/in-the-loupe/end-mill-troubleshooting-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Harvey Performance Company — End Mill and Milling Troubleshooting Guide</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.ns-tool.com/en/download/pdf/CATALOG_Vol19_2203_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>NS Tool — Troubleshooting for End Mill Operation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* Action / Requisition Footer */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Submit Your End Mill & Tooling Requisition
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Contact Proquanic's procurement desk in Bulawayo with your cutting diameter, flute requirements, workpiece material, or machine details for itemized pricing and availability.
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
