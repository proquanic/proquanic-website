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
  ArrowLeft
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const DrillBitsGuidePage: React.FC = () => {
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

  const handleAddDrillBitToRfq = (type: "Cobalt HSS-Co5" | "Standard HSS Jobber" | "Morse Taper Shank") => {
    if (type === "Cobalt HSS-Co5") {
      addItem({
        title: "Cobalt HSS-Co5 Heavy-Duty Drill Bits (DIN 338)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "HSS-Co 5% (DIN 338)",
        quantity: "5",
        unit: "Pieces / Set",
        specifications:
          "High heat resistance for tough alloy steels, stainless steel (304/316/3CR12) and high-tensile engineering steels; 135° split point geometry.",
      });
      setAddedItemName("Cobalt HSS-Co5 Drill Bits");
    } else if (type === "Morse Taper Shank") {
      addItem({
        title: "Morse Taper Shank HSS Twist Drill (DIN 345)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "HSS DIN 345 MT2/MT3/MT4",
        quantity: "2",
        unit: "Pieces",
        specifications:
          "Taper shank for direct spindle mounting in radial drills, pillar drill presses and lathe tailstocks; heavy-duty flute web.",
      });
      setAddedItemName("Morse Taper HSS Drill");
    } else {
      addItem({
        title: "Standard HSS Ground Flute Jobber Drill Bit Set (DIN 338)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "HSS Fully Ground (DIN 338)",
        quantity: "1",
        unit: "Set / Pack",
        specifications:
          "General engineering and workshop fabrication; 118° point; 1.0mm to 13.0mm by 0.5mm increments; steam tempered / bright finish.",
      });
      setAddedItemName("Standard HSS Jobber Drill Set");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your Drill Bit Troubleshooting Guide and would like to request technical pricing and availability for industrial drill bits."
  )}`;

  const emailSubject = encodeURIComponent("Drill Bit Replacement Quotation Request — Proquanic");
  const emailBody = encodeURIComponent(
    `Hello Proquanic Sales Team,\n\nI am requesting a quotation for industrial drill bits based on your technical guide:\n\n- Required Diameter(s): [e.g., 6.8mm, 8.5mm, 10.2mm, 12mm]\n- Drill Bit Type / Material: [e.g., Standard HSS, Cobalt HSS-Co5, Morse Taper DIN 345, Solid Carbide]\n- Workpiece Material: [e.g., Mild steel, EN8, EN19, 304 Stainless, Cast iron]\n- Hole Depth & Type: [e.g., 25mm blind hole / 12mm plate through-hole]\n- Overall Length & Shank: [e.g., Jobber length straight shank / MT2 taper shank]\n- Machine Type: [e.g., Pillar drill, CNC machining centre, magnetic base drill, lathe]\n- Quantity Required:\n- Delivery Destination: [e.g., Bulawayo, Harare, Kwekwe, or other city in Zimbabwe]\n\nCompany Name:\nContact Person:\nPhone Number:\n\nThank you.`
  );
  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const faqs = [
    {
      q: "Why does my drill bit get hot when drilling metal?",
      a: "Possible causes include unsuitable cutting speed, excessive or unsuitable feed, poor chip evacuation, an inappropriate drill bit or tool wear. The correct cause depends on the workpiece material, drill type and operating conditions.",
    },
    {
      q: "Should I use a higher speed to make drilling faster?",
      a: "Not automatically. Cutting speed must be suitable for the drill bit, workpiece material, diameter and machine. Consult the manufacturer's cutting-data recommendations before changing settings.",
    },
    {
      q: "Can a blunt drill bit break?",
      a: "A worn cutting edge can increase cutting forces and reduce drilling performance. Continued use under unsuitable conditions can contribute to tool damage or breakage. Inspect the tool and replace or recondition it appropriately.",
    },
    {
      q: "Are HSS drill bits suitable for all metals?",
      a: "No. HSS drill bits are used in many metal-drilling applications, but suitability depends on the particular drill specification, material being drilled and operating conditions.",
    },
    {
      q: "Why does a drill bit produce an oversized hole?",
      a: "Possible causes include drill runout, poor alignment, workpiece movement, damaged cutting edges or unsuitable drilling conditions. Inspect the setup before assuming the drill diameter alone is responsible.",
    },
    {
      q: "What should I provide when requesting a replacement drill bit?",
      a: "Provide the diameter, drill type and material, workpiece material, hole depth, shank or holder requirements, quantity and machine details where relevant. Include the original part number or drawing if available.",
    },
  ];

  // Article structured data for rich snippet & SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check",
    "description":
      "Drill bits overheating, wearing quickly or breaking? Learn six possible causes, what to inspect and how to choose a suitable replacement for your workshop.",
    "image": [
      "https://www.proquanic.co.zw/images/blog/why-drill-bits-burn-or-break.jpg"
    ],
    "datePublished": "2026-03-24T08:00:00+02:00",
    "dateModified": "2026-03-24T08:00:00+02:00",
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
      "@id": "https://www.proquanic.co.zw/blog/why-drill-bits-burn-or-break"
    },
    "articleSection": "Cutting and Machining Tools",
    "inLanguage": "en-ZW",
    "keywords": [
      "why drill bits burn or break",
      "HSS drill bits",
      "drill bit overheating",
      "broken drill bit",
      "drill bit wear",
      "metal drilling problems",
      "drill bit selection",
      "drilling speed and feed",
      "industrial drilling tools",
      "engineering workshop tools Zimbabwe",
      "industrial supplies Bulawayo"
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
    canonical.setAttribute("href", "https://www.proquanic.co.zw/blog/why-drill-bits-burn-or-break");
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
            <Link href="/blog" className="hover:text-slate-900 transition-colors font-medium text-orange-600">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products/cutting-machining-tools" className="hover:text-slate-900 transition-colors">
              Cutting & Machining Tools
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              Why Drill Bits Burn or Break
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded border border-slate-200 transition-colors font-medium"
              title="Return to Blog & Technical Articles"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-orange-500" />
              <span>Back to Blog</span>
            </Link>
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
              Technical Drilling Guide
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Category: Cutting and Machining Tools → Drilling Tools → Drill Bits</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Published by Proquanic Technical Desk</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check
          </h1>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl space-y-3">
            <p>
              A drill bit that overheats, wears out quickly or breaks during a job can waste time, damage a workpiece and interrupt production.
            </p>
            <p>
              Replacing the drill bit may solve the immediate problem, but it will not necessarily fix the reason it failed. The cause could involve the drill bit itself, the material being drilled, the machine setup, chip evacuation or the way the hole is being produced.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Before installing another drill bit, check these six areas. They can help narrow down the cause and give your maintenance team a better starting point for investigating repeated drilling problems.
            </p>
          </div>
        </header>

        {/* Hero Visual Block */}
        <figure className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/images/blog/why-drill-bits-burn-or-break.jpg"
              alt="Machinist inspecting a metal drill bit at an engineering workshop bench."
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 sm:p-6 text-white">
              <span className="text-xs uppercase tracking-wider font-mono text-orange-400 font-bold block mb-1">
                Precision Tool Inspection & Setup Rigidity
              </span>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-snug">
                Verifying drill point symmetry, cutting lip condition, chuck runout, and workpiece clamping prevents premature overheating, tool burn, and sudden fracture.
              </p>
            </div>
          </div>
          <figcaption className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span>Visual reference: Precision drill bit dimensional check at an engineering workshop bench.</span>
            <span className="font-mono text-slate-500">DIN 338 Jobber / DIN 345 Morse Taper Standards</span>
          </figcaption>
        </figure>

        {/* Quick RFQ Basket Action Banner */}
        <aside aria-label="Requisition quick action" className="bg-slate-900 text-white rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-orange-500 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-400">
                Need Replacement Industrial Drill Bits for Your Operation?
              </h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Proquanic coordinates procurement for heavy-duty Cobalt HSS-Co5, ground Jobber HSS, Morse Taper shank drills, and solid carbide tools across Zimbabwe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleAddDrillBitToRfq("Cobalt HSS-Co5")}
              className="w-full sm:w-auto px-4 py-2 bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Add Drill Bit to RFQ</span>
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

        {/* Section: What Does a Burning or Failing Drill Bit Look Like? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span>First, What Does a Burning or Failing Drill Bit Look Like?</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
            <p>
              Different symptoms can point towards different problems.
            </p>
            <p>
              A drill bit that becomes unusually hot, develops discoloured cutting edges, wears rapidly, produces poor-quality holes or breaks during drilling may be operating under unsuitable conditions.
            </p>
            <p>
              However, no single symptom proves a particular cause. Heat, wear and breakage can result from several interacting factors, so inspect the drill bit, workpiece, machine setup and drilling process together.
            </p>
          </div>
        </section>

        {/* The 6 Mistakes to Check */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-orange-600">
              Diagnostic Investigation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              6 Mistakes to Check When Drill Bits Overheat or Fail
            </h2>
          </div>

          {/* 1. Cutting Speed */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Cutting Speed Is Unsuitable
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Cutting speed affects the heat generated at the cutting edges and the rate at which the drill bit wears.
              </p>
              <p>
                If the speed is too high for the drill bit, workpiece material and operating conditions, excessive heat and accelerated wear may result. A speed that is too low can also cause problems in some applications, particularly when it contributes to poor cutting action or built-up material on the cutting edge.
              </p>
              <p>
                There is no single rotational speed that suits every drill bit.
              </p>
              <p>
                The appropriate setting depends on factors including:
              </p>
              <ul className="pl-4 space-y-1 list-disc text-slate-700">
                <li>Workpiece material and hardness</li>
                <li>Drill bit diameter</li>
                <li>Drill bit material and geometry</li>
                <li>Machine capability and rigidity</li>
                <li>Drilling depth and application</li>
                <li>Manufacturer-recommended cutting conditions</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>What material are you drilling?</li>
                <li>What is the drill bit diameter and type?</li>
                <li>What rotational speed is being used?</li>
                <li>Is the setting suitable according to the drill manufacturer's guidance?</li>
                <li>Has the workpiece material or drilling operation changed?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium text-slate-900">
              Do not respond to overheating by randomly changing the machine speed. Identify the tool and material first, then consult the relevant cutting-data recommendations.
            </p>
          </div>

          {/* 2. Feed Pressure */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Feed Pressure Is Too High or Too Low
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Feed is the rate at which the drill advances into the workpiece.
              </p>
              <p>
                Excessive feed can overload the cutting edges, particularly when the drill bit is not properly supported or the machine setup is unstable. Insufficient feed can also cause poor cutting behaviour in some applications, depending on the tool geometry and workpiece material.
              </p>
              <p>
                Simply pushing harder is not a reliable way to make a drill cut faster.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the drill advancing smoothly?</li>
                <li>Is excessive force being applied by the operator?</li>
                <li>Is the machine stable and suitable for the operation?</li>
                <li>Is the drill bit sharp and in good condition?</li>
                <li>Does the manufacturer's guidance specify a suitable feed range for the application?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              A drill that has become blunt may require more force, but applying more pressure can make the situation worse. Check the tool condition before trying to compensate with feed pressure.
            </p>
          </div>

          {/* 3. Chip Evacuation */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Chips Are Not Escaping Properly
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Drilling produces chips that need enough space to leave the cutting zone.
              </p>
              <p>
                When chips accumulate in the flutes or fail to evacuate effectively, they can interfere with cutting, increase friction and contribute to tool damage. The risk can be more significant in deeper holes or when drilling materials that produce long, difficult-to-manage chips.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Are chips escaping from the hole?</li>
                <li>Are the flutes becoming packed with material?</li>
                <li>Is the hole deeper than the drill's intended application?</li>
                <li>Is the drill type suitable for the required drilling depth?</li>
                <li>Does the operation require a manufacturer-recommended pecking procedure or suitable coolant delivery?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                Do not assume that every hole should be drilled using the same sequence. Peck drilling, continuous drilling and coolant requirements depend on the tool design, material, hole depth and machine.
              </p>
              <p className="font-medium text-slate-900">
                If chip packing is suspected, stop the machine safely and follow the manufacturer's procedure for clearing the obstruction. Never clear chips by hand while the machine is running.
              </p>
            </div>
          </div>

          {/* 4. Material Unsuitability */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                4
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Drill Bit Is Unsuitable for the Workpiece Material
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Drill bits are not all designed for the same materials or applications.
              </p>
              <p>
                High-speed steel (HSS) drill bits are widely used for general-purpose metal drilling. Other tool materials and designs, including cobalt-bearing HSS grades and solid carbide drills, may be appropriate for particular applications.
              </p>
              <p>
                The best choice depends on the workpiece material, hardness, hole depth, production requirements, machine capability and the manufacturer's recommendations.
              </p>
              <p>
                For example, drilling aluminium and drilling stainless steel can present different chip-formation and heat-management challenges. A drill bit that performs well in one material may not be suitable for another under the same settings.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the workpiece mild steel, stainless steel, aluminium, cast iron or another material?</li>
                <li>Is the drill bit designed for that material?</li>
                <li>Is the drill material appropriate for the operation?</li>
                <li>Is the drill geometry suitable for the hole and workpiece?</li>
                <li>Are the recommended cutting conditions being followed?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Do not assume that a drill bit labelled HSS is automatically suitable for every metal. Confirm the specific tool and application.
            </p>
          </div>

          {/* 5. Alignment and Clamping */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                5
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Drill Bit or Workpiece Is Not Properly Aligned and Secured
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                Drilling depends on suitable alignment and stability.
              </p>
              <p>
                If the drill does not run true, the workpiece moves, or the machine setup lacks rigidity, the cutting edges may experience uneven loading. This can contribute to oversized or irregular holes, vibration, edge damage and tool breakage.
              </p>
              <p>
                A drill bit that appears to be failing may therefore be affected by the machine setup rather than only by its material or sharpness.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Is the drill correctly secured in the chuck or holder?</li>
                <li>Is the drill running true?</li>
                <li>Is the workpiece firmly clamped?</li>
                <li>Is the machine suitable for the workpiece size and operation?</li>
                <li>Are there signs of vibration, runout or movement?</li>
                <li>Is the drill overhanging unnecessarily from its holder?</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-medium text-slate-900">
                Secure the workpiece using an appropriate clamping arrangement. Never hold a workpiece by hand as a substitute for proper clamping when operating drilling machinery.
              </p>
              <p>
                If the drill, chuck or spindle appears damaged, stop and have the equipment inspected by qualified maintenance personnel.
              </p>
            </div>
          </div>

          {/* 6. Wear and Over-use */}
          <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2.5 py-1 bg-slate-900 text-orange-400 font-mono font-bold text-xs rounded">
                6
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                The Drill Bit Is Worn, Damaged or Being Used Beyond Its Suitable Application
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>
                A worn drill bit can lose its ability to cut efficiently. Continued use may increase cutting forces, worsen hole quality and contribute to breakage.
              </p>
              <p>
                Damage can also result from poor handling, incorrect storage, unsuitable regrinding or a mismatch between the tool and the application.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">What to check:</span>
              <ul className="space-y-1.5 text-slate-700 pl-4 list-disc">
                <li>Are the cutting lips chipped, blunt or uneven?</li>
                <li>Is the point geometry damaged?</li>
                <li>Is the shank damaged or slipping in the holder?</li>
                <li>Is the drill bit suitable for the required hole depth?</li>
                <li>Has the tool been reconditioned according to an appropriate procedure?</li>
                <li>Is the replacement specification correct for the machine and operation?</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-slate-700">
              Do not continue using a visibly damaged drill bit simply because it can still be fitted into the machine. Confirm whether it can be safely reconditioned or should be replaced.
            </p>
          </div>
        </section>

        {/* Quick Troubleshooting Guide Table */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <Wrench className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              A Quick Troubleshooting Guide
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Use the following table as a starting point, not as a substitute for the tool manufacturer's instructions or a proper machine inspection.
          </p>

          <div className="border border-slate-200 rounded-lg overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="py-3 px-4 border-b border-slate-800 w-1/3">Observed problem</th>
                    <th className="py-3 px-4 border-b border-slate-800 w-2/3">Areas to investigate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Drill bit becomes unusually hot
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Cutting speed, feed, tool suitability, chip evacuation and coolant requirements
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Drill bit wears rapidly
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Tool material, cutting conditions, workpiece material and tool condition
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Drill bit breaks during drilling
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Chip packing, excessive loading, alignment, workpiece movement and tool suitability
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Hole is oversized or irregular
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Drill runout, tool condition, alignment, workpiece stability and cutting conditions
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Chips pack into the flutes
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Material chip behaviour, hole depth, drill geometry and the approved chip-evacuation procedure
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                      Drill bit slips in the holder
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                      Holder condition, shank condition, correct fit and proper securing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-600 pt-1">
            Several faults can produce similar symptoms. Inspect the full setup before concluding that one setting or one component is responsible.
          </p>
        </section>

        {/* What Information Do You Need Before Ordering a Replacement Drill Bit? */}
        <section className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <CheckSquare className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
              What Information Do You Need Before Ordering a Replacement Drill Bit?
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            If you need to replace a drill bit, collect the relevant details before requesting a quotation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">1</span>
                Drill bit diameter
              </h3>
              <p className="text-slate-600 pl-7">
                Specify the required diameter in millimetres or the unit used by the original specification.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">2</span>
                Drill bit type and material
              </h3>
              <p className="text-slate-600 pl-7">
                Confirm whether the requirement is for an HSS drill, a specified HSS alloy grade, a solid carbide drill or another type. Do not assume these are interchangeable.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">3</span>
                Workpiece material
              </h3>
              <p className="text-slate-600 pl-7">
                Identify the material being drilled, including its grade or condition where known.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">4</span>
                Hole depth and type
              </h3>
              <p className="text-slate-600 pl-7">
                State whether the requirement is for a shallow hole, a deeper hole, a through-hole or a blind hole. The application can affect the required tool design and operating procedure.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">5</span>
                Overall length and shank
              </h3>
              <p className="text-slate-600 pl-7">
                Where relevant, confirm the required drill length, shank type and compatibility with the chuck or toolholder.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">6</span>
                Machine and application
              </h3>
              <p className="text-slate-600 pl-7">
                Provide the machine type and relevant details about how the drill will be used.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5 sm:col-span-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">7</span>
                Quantity
              </h3>
              <p className="text-slate-600 pl-7">
                Specify how many drill bits are required.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
            If you have the original part number, manufacturer's catalogue reference or a clear photograph of the tool, include it with the enquiry. A photograph can help identify a product, but it does not replace verification of dimensions and specifications.
          </p>
        </section>

        {/* Industrial Drilling Tools and Engineering Supplies in Bulawayo */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg border border-slate-800 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
            <MapPin className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Industrial Drilling Tools and Engineering Supplies in Bulawayo
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Proquanic (Pvt) Ltd supports industrial procurement and engineering supply requirements for businesses in Bulawayo and across Zimbabwe.
            </p>
            <p>
              For HSS drill bits and other drilling-tool enquiries, provide the required diameter, drill type, workpiece material, machine or application details, quantity and any known manufacturer reference.
            </p>
            <p className="text-slate-400 text-xs italic">
              The exact product specification, compatibility, availability, lead time and price should be confirmed for the specific enquiry.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-lg p-5 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
              Need drill bits or other industrial tooling?
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
              A drill bit that burns, wears rapidly or breaks is a reason to investigate the complete drilling setup.
            </p>
            <p>
              Check the cutting conditions, feed, chip evacuation, tool suitability, alignment and tool condition before assuming the drill bit itself is the only problem.
            </p>
            <p className="font-medium text-slate-900">
              Once the requirement is understood, selecting a compatible replacement becomes a more informed procurement decision—and helps reduce avoidable interruptions in the workshop.
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
            These references support general drilling principles. They do not establish that Proquanic supplies a particular brand, drill grade or model.
          </p>

          <ul className="text-xs space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.dormerpramet.com/us/en/what-cutting-data-should-I-use-and-where-can-I-find-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Dormer Pramet — What cutting data should I use and where can I find it?</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.dormerpramet.com/se/en/Why-does-the-lip-of-a-Morse-taper-drill-break-off"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Dormer Pramet — Why does the lip of a Morse taper drill break off and what can I do about it?</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.sandvik.coromant.com/en-us/knowledge/drilling/safety-precautions-and-tool-maintenance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Sandvik Coromant — Drilling tool maintenance and safety precautions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://www.sandvik.coromant.com/en-us/knowledge/drilling/drilling-wear-and-troubleshooting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Sandvik Coromant — Drilling wear and troubleshooting</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <div>
                <a
                  href="https://guhring.com/ProductsServices/SeriesDetails?Series=6006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-orange-600 underline inline-flex items-center gap-1"
                >
                  <span>Guhring — Twist drills and product information</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* Related Technical Articles */}
        <RelatedArticles currentSlug="/blog/why-drill-bits-burn-or-break" />

        {/* Action / Requisition Footer */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Submit Your Drill Bit Requisition
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Contact Proquanic's procurement desk in Bulawayo with your drill diameter, material grade, or machine details for itemized pricing and availability.
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
