import React from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import {
  Pickaxe,
  Layers,
  Wrench,
  Cog,
  Gauge,
  Factory,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  BookOpen,
  Truck,
  CheckCircle2,
} from "lucide-react";

const RFQ_REQUIRED_DETAILS = [
  {
    field: "1. Exact Product Description",
    detail:
      "Clear description of the item required (for example: spherical roller bearing, solid round alloy steel bar, flanged gate valve, bi-metal bandsaw blade loop, or hydraulic workshop press).",
  },
  {
    field: "2. Manufacturer",
    detail:
      "Preferred OEM or equipment manufacturer where specific compatibility is required, or confirmation of whether verified equivalent industrial brands may be quoted.",
  },
  {
    field: "3. Part Number or Reference Code",
    detail:
      "Exact manufacturer part number, bearing designation, seal code, insert ISO code, or workshop drawing number to eliminate ambiguity during technical matching.",
  },
  {
    field: "4. Dimensions & Tolerances",
    detail:
      "Full physical dimensions such as shaft diameter, bore, outside diameter, width, length, plate thickness, pitch, thread standard (BSP, NPT, metric), or cutting blade length and TPI.",
  },
  {
    field: "5. Material Grade & Standard",
    detail:
      "Required metallurgy or material class—such as EN8, EN19, K110, stainless steel (304/316), abrasion-resistant plate, cast steel body, brass, or elastomer seal compound.",
  },
  {
    field: "6. Quantity & Unit of Measure",
    detail:
      "Exact order quantity and unit (individual pieces, sets, boxes, metre lengths, or machine units), including whether partial deliveries or consolidated batches are required.",
  },
  {
    field: "7. Application & Operating Conditions",
    detail:
      "Intended service context (crusher shaft, slurry pump line, conveyor drive, toolroom lathe, or structural fabrication), operating pressure, speed, and electrical supply (e.g., 380V/400V 50Hz 3-phase).",
  },
];

const RELATED_ENGINEERING_GUIDES = [
  {
    href: "/blog/en8-en19-mild-steel-comparison",
    title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
    topic: "Engineering Steels",
  },
  {
    href: "/guides/en8-vs-en19-steel",
    title: "EN8 vs EN19 Steel: Differences, Applications and How to Choose",
    topic: "Alloy Shafting Comparison",
  },
  {
    href: "/blog/k110-tool-steel-properties-applications",
    title: "Why K110 Tool Steel Is Used for Punches, Dies and Industrial Knives",
    topic: "Cold-Work Tool Steel",
  },
  {
    href: "/blog/steel-buying-checklist-engineering-workshop",
    title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
    topic: "Steel Procurement",
  },
  {
    href: "/blog/grinding-wheel-colours-specifications-buying-guide",
    title: "Grinding Stones: Colours, Grit Sizes, Specifications and How to Choose the Right One",
    topic: "Abrasives & Grinding",
  },
  {
    href: "/blog/why-metal-cutting-bandsaw-blade-breaks",
    title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
    topic: "Sawing Operations",
  },
  {
    href: "/blog/hss-cobalt-carbide-drills",
    title: "HSS, Cobalt or Carbide Drills? Choosing the Right Drill for Steel",
    topic: "Cutting Tools",
  },
  {
    href: "/blog/pneumatic-connectors-types-sizes-buying-guide",
    title: "Pneumatic Connectors in Zimbabwe: Types, Sizes and How to Choose the Right Fittings",
    topic: "Fittings & Valves",
  },
];

export const MiningMineralProcessingPage: React.FC = () => {
  const miningWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, we are enquiring about mining supplies, engineering materials, maintenance components, or workshop machinery for our mining / mineral processing operation in Zimbabwe. Please assist with product information and a quotation."
  )}`;

  const miningEmailUrl = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
    "Mining & Mineral Processing Supply — Quotation Request"
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-14">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link href="/industries" className="hover:text-slate-900 transition-colors">
          Industries We Serve
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 font-semibold">
          Mining &amp; Mineral Processing Supplies
        </span>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-slate-200 pb-8 space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
          <Pickaxe className="w-4 h-4" />
          <span>Mining &amp; Mineral Processing Procurement · Zimbabwe</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Mining Supplies Zimbabwe: Engineering Materials, Maintenance Components &amp; Machinery
        </h1>

        <p className="text-sm sm:text-base text-slate-700 max-w-4xl leading-relaxed">
          Proquanic (Pvt) Ltd is a Bulawayo-based B2B industrial supply and machinery procurement company supporting{" "}
          <strong>mining supplies in Zimbabwe</strong> for extraction sites, mineral processing plants, engineering
          contractors, and mine maintenance workshops. We provide{" "}
          <strong>mining engineering supplies in Zimbabwe</strong>,{" "}
          <strong>mining maintenance supplies</strong>, precision workshop tooling, mechanical power transmission
          components, and industrial machinery sourced against verified technical requirements.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          Whether your procurement team is sourcing raw engineering materials for mining rebuilds, replacement wear and
          drive components for processing plants, or machine tools for on-site repair bays, our procurement desk works
          with reputable regional and international suppliers—primarily in South Africa—to assemble accurate, itemized
          quotations tailored to your specifications.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
          <Link
            href="/request-a-quotation"
            className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request a Mining Supply Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={miningWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Procurement Desk (+263 790 420 836)</span>
          </a>
          <Link
            href="/industries"
            className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>All Industries We Serve</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>
      </header>

      {/* Business Accuracy & Operational Scope Notice */}
      <section aria-label="Operational scope and verification notice" className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Commercial Scope &amp; Specification Confirmation</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-5xl">
          Proquanic (Pvt) Ltd operates strictly as an industrial supply and machinery procurement business in Bulawayo,
          Zimbabwe—not as a mining equipment manufacturer, mining contractor, or authorised OEM dealer. Product mentions
          below illustrate the engineering materials, maintenance consumables, components, and machinery we can source on
          request. All exact product specifications, technical compatibility, stock availability, lead times, and site
          delivery arrangements are confirmed formally during the quotation process.
        </p>
      </section>

      {/* Section 1: Procurement Requirements of Mining & Mineral Processing Operations */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Operational Reality &amp; Plant Uptime
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Procurement Requirements of Mining and Mineral Processing Operations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Mining and mineral processing operations across Zimbabwe—from crushing and screening circuits to milling,
            flotation, thickening, tailings pumping, and underground haulage—operate under severe abrasion, impact
            shock, continuous moisture, and heavy mechanical loading. Effective{" "}
            <strong>mining equipment procurement</strong> and planned maintenance rely on accurate component
            identification and dependable supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Minimising Unplanned Circuit Downtime
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a primary jaw crusher shaft, conveyor drive, or slurry pump fails, stoppages impact the entire plant
              throughput. Mine engineers and buyers need responsive{" "}
              <strong>industrial supplies for mines</strong> that match OEM part references, metallurgy, and dimensional
              fitment on the first delivery.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              On-Site Machine Shop &amp; Fabrication Self-Reliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Remote mine engineering workshops frequently machine replacement pins, sleeves, flanges, and wear liners
              in-house. Reliable access to <strong>engineering materials for mining</strong>—paired with correct
              cutting tools, bandsaw blades, and grinding consumables—keeps internal repair bays productive.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Consolidated Cross-Border B2B Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mining requisitions often combine steels, bearings, seals, valves, and workshop consumables on a single
              bill of materials. Proquanic consolidates multi-line enquiries across trusted suppliers primarily in South
              Africa and coordinates structured delivery to your Bulawayo depot or mine site.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Supply Categories (Requirements 2, 3, 4, 5) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Product Scope Across Engineering &amp; Maintenance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Engineering Materials, Maintenance Supplies &amp; Mechanical Components
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Explore the core product groups supplied by Proquanic as illustrative examples of our capability as one of
            Zimbabwe&apos;s specialist <strong>mining consumables suppliers</strong> and engineering procurement desks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Engineering Steels (Req 2) */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Engineering Steels (EN8, EN19, K110) &amp; Heavy Plate
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Mining repairs and plant fabrication require steel grades matched to mechanical load, shock, and wear,
                subject to application and verified client specification. Proquanic sources round bars, hollow sections,
                flat stock, and heavy wear plates across key grades:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>EN8 (080M40) Medium-Carbon Steel:</strong> Suited to general-purpose mine shafts, conveyor
                  rollers, axles, studs, and pins where moderate strength and clean machinability are required.
                </li>
                <li>
                  <strong>EN19 (709M40 / 4140) High-Tensile Alloy Steel:</strong> Specified for high-torque pump shafts,
                  crusher drive spindles, heavy-duty gears, and stressed mechanical couplings requiring toughness and
                  fatigue resistance.
                </li>
                <li>
                  <strong>K110 (1.2379 / D2) Cold-Work Tool Steel:</strong> High-carbon, high-chromium tool steel used
                  for abrasive cutting knives, punch and die tooling, scraper blades, and high-wear forming parts where
                  edge retention is critical.
                </li>
                <li>
                  <strong>Additional Grades &amp; Structural Profiles:</strong> Mild steel, EN24 alloy steel, abrasion-resistant
                  wear plates, and bright bar, supplied in standard mill lengths or cut-to-size upon confirmation.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/steel-products"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Steel Products Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/en8-en19-mild-steel-comparison"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>EN8, EN19 &amp; Mild Steel Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/k110-tool-steel-properties-applications"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>K110 Tool Steel Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 2: Cutting Tools, Grinding Stones, Bandsaw Blades & Consumables (Req 3) */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Cutting Tools, Grinding Stones, Bandsaw Blades &amp; Workshop Consumables
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Mine engineering workshops and boilermaking bays depend on consistent tooling and{" "}
                <strong>mining maintenance supplies</strong> to cut, drill, grind, and finish tough alloys without
                excessive tool breakage:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Cutting &amp; Machining Tools:</strong> Solid carbide end mills, HSS and cobalt drill bits for
                  tough alloy steels, ISO indexable turning and milling inserts, machine taps, reamers, and boring bars.
                </li>
                <li>
                  <strong>Grinding Stones &amp; Abrasives:</strong> Vitrified bench and surface{" "}
                  <strong>grinding stones</strong> matched by abrasive type, grit size, grade, and bond, plus heavy-duty
                  cutting discs, depressed-centre grinding discs, and flap discs for weld preparation.
                </li>
                <li>
                  <strong>Metal-Cutting Bandsaw Blades:</strong> Welded-to-length M42 bi-metal bandsaw blades, cold saw
                  blades, and hacksaw blades tailored to solid alloy bars, pipes, and structural steel sections.
                </li>
                <li>
                  <strong>Workshop Consumables &amp; Tooling:</strong> Semi-synthetic cutting fluids, EP lubricants,
                  anti-seize compounds, precision metrology gauges, machine vises, collets, and hand tools.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/cutting-machining-tools"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Cutting &amp; Machining Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/abrasives"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Abrasives &amp; Grinding Stones</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/sawing-products"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Bandsaw Blades &amp; Sawing</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/other-industrial-supplies"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Consumables &amp; PPE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 3: Bearings, Housings, Conveyor Chains, Sprockets & Seals (Req 4) */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Cog className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Bearings, Housings, Conveyor Chains, Sprockets &amp; Seals
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ore handling conveyors, vibrating screens, crushers, and slurry pumps depend on heavy-duty power
                transmission and sealing assemblies built for dusty, high-load processing environments:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Industrial Bearings &amp; Plummer Housings:</strong> Spherical roller bearings, tapered roller
                  bearings, deep groove ball bearings, split plummer block housings, pillow blocks (UCP/UCF), and
                  adapter sleeves.
                </li>
                <li>
                  <strong>Conveyor Chains, Sprockets &amp; Drives:</strong> Heavy-duty transmission and conveyor roller
                  chains, connecting links, hardened steel sprockets, wedge V-belts, taper-lock bushes, and shaft
                  couplings.
                </li>
                <li>
                  <strong>Slurry Pump Seals &amp; Sealing Kits:</strong> Mechanical pump seals, rotary shaft oil seals,
                  hydraulic cylinder rod and piston seals, Viton/nitrile O-ring kits, and gland packing.
                </li>
                <li>
                  <strong>Fasteners &amp; Hardware:</strong> High-tensile Grade 8.8 and 10.9 structural bolts, stainless
                  fasteners, retaining circlips, dowel pins, and key steel.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/bearings-power-transmission"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Bearings &amp; Power Transmission</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/mechanical-components"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Seals, Fasteners &amp; Mechanical Components</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 4: Industrial Valves & Engineering Components (Req 5) */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Industrial Valves, Pneumatic Fittings &amp; Engineering Components
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Process water lines, tailings pipelines, reagent dosing systems, and compressed-air networks across mine
                plants require dependable isolation, control, and instrumentation hardware matched to pressure ratings
                and fluid media:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Industrial Valves:</strong> Isolation gate valves, ball valves, wafer and lug butterfly
                  valves, non-return check valves, and slurry or process-line valve requirements quoted to pressure class
                  and flange standard.
                </li>
                <li>
                  <strong>Pneumatic &amp; Hydraulic Connectors:</strong> Compressed-air push-in fittings, BSP/NPT brass
                  and stainless adapters, quick couplings, manifold fittings, and high-pressure line hardware.
                </li>
                <li>
                  <strong>Workholding, Metrology &amp; Site Tools:</strong> Calibrated micrometers, vernier calipers,
                  dial test indicators, hydraulic pullers, torque wrenches, and heavy workshop hand tools.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/mechanical-components"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Valves &amp; Mechanical Components</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/metrology-inspection"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Metrology &amp; Inspection</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/workshop-tools"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Workshop Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/pneumatic-connectors-types-sizes-buying-guide"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Pneumatic Connectors Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Section 3: Mining Machinery & Workshop Equipment Procurement (Req 6) */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Factory className="w-4 h-4" />
              <span>Capital Plant &amp; Mine Workshop Equipment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Supplying Industrial Machinery According to Customer Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Alongside consumable and component sourcing, Proquanic acts as a B2B{" "}
              <strong>mining machinery supplier</strong> and engineering equipment procurement partner. Rather than
              carrying speculative showroom inventory, we source verified workshop machinery and plant equipment
              according to your component drawings, capacity requirements, and Zimbabwean 380V/400V 50Hz three-phase
              electrical standards.
            </p>
          </div>
          <Link
            href="/machinery-equipment"
            className="w-full lg:w-auto shrink-0 px-5 py-3 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Explore Machinery &amp; Equipment</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm">Heavy Turning &amp; Milling</h3>
            <p className="text-slate-600 leading-relaxed">
              Gap-bed centre lathes, CNC vertical machining centres, bed mills, and turret mills for reconditioning
              crusher shafts, pump housings, and bearing pedestals.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm">Sawing &amp; Drilling</h3>
            <p className="text-slate-600 leading-relaxed">
              Semi-automatic horizontal metal-cutting bandsaws, radial arm drilling machines, and geared-head pedestal
              drills for steel bar preparation and baseplate drilling.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm">Presses &amp; Plate Fabrication</h3>
            <p className="text-slate-600 leading-relaxed">
              Motorized hydraulic H-frame workshop presses for heavy bearing fitment, plus hydraulic press brakes and
              guillotines for chute and wear liner fabrication.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm">Grinding &amp; Tooling Support</h3>
            <p className="text-slate-600 leading-relaxed">
              Precision hydraulic surface grinders, cylindrical grinders, and starter workholding/tooling packages
              aligned to your workshop floor capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Practical Mining RFQ Guide (Req 7 & 8) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <ClipboardCheck className="w-4 h-4" />
            <span>Procurement Efficiency Checklist</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What Mining Procurement Departments Should Include in an RFQ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Providing complete technical information up front helps prevent ordering errors and shortens quotation
            turnaround. Include the following seven details whenever submitting a mining supply requisition:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RFQ_REQUIRED_DETAILS.map((item) => (
            <div
              key={item.field}
              className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-2xs"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>{item.field}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}

          {/* Confirmation & Delivery Notice Card */}
          <div className="bg-[#0B192C] text-white rounded-lg border border-slate-800 p-5 space-y-2.5 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>Quotation Confirmation Process</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Specifications, Compatibility, Availability &amp; Delivery Confirmed During Quotation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Because mining operations depend on exact dimensional and metallurgical fit, Proquanic verifies every
                item before order confirmation. Exact product specifications, equipment compatibility, supplier
                availability, pricing, lead times, and direct-to-site delivery arrangements across Zimbabwe are all
                confirmed formally on your itemized quotation.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <Link
                href="/site-delivery"
                className="font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
              >
                <span>Review Site Delivery Arrangements</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/request-a-quotation"
                className="font-semibold text-white hover:text-orange-300 inline-flex items-center gap-1"
              >
                <span>Open Official RFQ Submission Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Related Engineering Articles & Resources (Req 10) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Technical Knowledge Hub</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Relevant Engineering Materials &amp; Procurement Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Engineering Guides</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RELATED_ENGINEERING_GUIDES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="bg-white rounded-lg border border-slate-200 p-4 space-y-2 hover:border-orange-500/60 transition-colors shadow-2xs flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                  {article.topic}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-orange-600 inline-flex items-center gap-1 pt-2">
                <span>Read Technical Guide</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 6: Final Quotation & Direct Contact CTA (Req 9 & 10) */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-10 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
            Bulawayo B2B Procurement Desk · {COMPANY.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Submit Your Mining Requisition or Bill of Materials
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Send your part numbers, steel grades, engineering drawings, or machinery requirements to Proquanic (Pvt) Ltd
            at {COMPANY.address.full}. Our procurement desk serves mining operations across Bulawayo, Matabeleland,
            Midlands, Mashonaland, and nationwide Zimbabwe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
          <Link
            href="/request-a-quotation"
            className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors inline-flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request a Quotation (RFQ)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={miningWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Mining Desk ({COMPANY.contact.phoneDisplay})</span>
          </a>

          <a
            href={miningEmailUrl}
            className="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-orange-400" />
            <span>{COMPANY.contact.email}</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>Contact Procurement Desk</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
