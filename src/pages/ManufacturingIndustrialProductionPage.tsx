import React from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { COMPANY } from "../config/company";
import {
  Factory,
  Layers,
  Wrench,
  Scissors,
  Disc,
  Cog,
  Hammer,
  Settings,
  Cpu,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const RELATED_ARTICLES = [
  {
    href: "/blog/en8-en19-mild-steel-comparison",
    topic: "Steel Selection",
    title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
  },
  {
    href: "/blog/spring-steel-properties-grades-applications",
    topic: "Springs & Flat Bar",
    title: "Spring Steel Isn't Just Another Steel Bar: What Buyers Need to Know",
  },
  {
    href: "/blog/why-end-mills-break",
    topic: "Milling Operations",
    title: "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
  },
  {
    href: "/blog/hss-cobalt-carbide-drills",
    topic: "Drilling Tooling",
    title: "HSS, Cobalt or Carbide Drills? Choosing the Right Drill for Steel",
  },
  {
    href: "/blog/why-metal-cutting-bandsaw-blade-breaks",
    topic: "Sawing Operations",
    title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
  },
  {
    href: "/blog/grinding-wheel-colours-specifications-buying-guide",
    topic: "Grinding & Abrasives",
    title: "Grinding Stones: Colours, Grit Sizes, Specifications and How to Choose the Right One",
  },
  {
    href: "/blog/how-to-choose-milling-machine-vice",
    topic: "Workholding",
    title: "How to Choose the Right Milling Machine Vice: A Practical Buying Guide",
  },
  {
    href: "/blog/supplier-you-want-vs-supplier-you-need",
    topic: "Procurement Strategy",
    title: "What If the Supplier You Want Isn't the Supplier Your Business Needs?",
  },
];

const QUOTATION_DETAILS = [
  "Product description and intended manufacturing or maintenance application",
  "Material grade, alloy specification, or standard (e.g., EN8, EN19, D2/K110, 304/316, DIN/ISO)",
  "Manufacturer brand preference and OEM part number or insert ISO designation",
  "Exact dimensions, thickness, bore, thread pitch, or blade length and TPI",
  "Required order quantity, unit of measure, and schedule",
  "Workshop electrical supply (380V/400V 50Hz 3-phase) or machine capacity details for equipment enquiries",
];

export const ManufacturingIndustrialProductionPage: React.FC = () => {
  const manufacturingWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, we are enquiring about manufacturing supplies, engineering steels, machining tools, maintenance components, or machinery procurement for our industrial production facility in Zimbabwe. Please assist us with a quotation."
  )}`;

  const manufacturingEmailUrl = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
    "Manufacturing & Industrial Production Supplies — Quotation Request"
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
          Manufacturing &amp; Industrial Production
        </span>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-slate-200 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <Factory className="w-4 h-4" />
            <span>Manufacturing &amp; Production Procurement · Zimbabwe</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Manufacturing Supplies Zimbabwe: Engineering Materials, Tooling &amp; Industrial Components
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Proquanic (Pvt) Ltd supports factories, processing plants, toolrooms, and production engineering workshops
            with <strong>manufacturing supplies in Zimbabwe</strong>. Operating from Bulawayo, we provide B2B{" "}
            <strong>industrial supplies in Zimbabwe</strong>—including verified engineering steels, precision cutting
            and machining tools, sawing blades, abrasives, bearings, mechanical components, and{" "}
            <strong>industrial machinery procurement in Zimbabwe</strong>.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether your facility is scheduling preventive plant maintenance, retooling an in-house machine shop, or
            sourcing raw materials and replacement components for production machinery, our procurement desk works with
            reputable suppliers primarily in South Africa to source items matched to your technical specifications.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href="/request-a-quotation"
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={manufacturingWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Procurement Desk</span>
            </a>
            <Link
              href="/industries"
              className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Back to Industries We Serve</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
            <SafeImage
              src="/images/categories/cutting-machining-tools.jpg"
              alt="Industrial machining tools, cutting inserts and engineering materials for manufacturing facilities in Zimbabwe"
              aspectRatioClass="aspect-16/10"
              fallbackTitle="Manufacturing & Industrial Engineering Supplies Zimbabwe"
            />
          </div>
        </div>
      </header>

      {/* Transparency & Stock Scope Notice */}
      <section aria-label="Procurement and availability notice" className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Procurement Model &amp; Availability Notice</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-5xl">
          Proquanic (Pvt) Ltd operates as a B2B industrial supply and procurement partner based in Bulawayo, Zimbabwe.
          The products described on this page illustrate the{" "}
          <strong>manufacturing engineering supplies</strong> and{" "}
          <strong>industrial maintenance supplies in Zimbabwe</strong> that we source for industrial clients. We do not
          claim universal showroom stockholding—availability, exact technical specifications, pricing, lead times, and
          delivery arrangements are verified and confirmed for each item during formal quotation.
        </p>
      </section>

      {/* Section 1: Relevance to Manufacturing Operations */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Supporting Production Continuity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Reliable Engineering &amp; Maintenance Supply Matters in Manufacturing
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Manufacturing and industrial production plants across Zimbabwe—including food and beverage processors,
            packaging plants, plastics extrusion and moulding lines, metal fabricators, brickworks, and component
            manufacturers—rely on steady supply coordination across production consumables, workshop spares, and
            machining inputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Continuous Production Line Uptime
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Drive belts, bearings, couplings, seals, and mechanical fasteners wear continuously across conveyors,
              mixers, extruders, and packaging lines. Timely sourcing of verified replacement parts keeps scheduled
              maintenance windows on track.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              In-House Toolroom &amp; Machine Shop Output
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Factory maintenance bays machine replacement shafts, rollers, dies, punches, and brackets in-house. Using
              the right engineering steel grades alongside reliable cutting tools, bandsaw blades, and abrasives reduces
              scrap and rework.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Single-Desk B2B Sourcing Coordination
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Procurement officers often manage multi-line bills of materials spanning steel bar, cutting inserts,
              power transmission spares, and workshop hardware. Proquanic consolidates technical requisitions into
              structured B2B quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Eight Core Supply Pillars for Manufacturing & Production */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Verified Supply Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Industrial Engineering Supplies, Tooling &amp; Components for Production Plants
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Explore the core material, tooling, and component categories supplied by Proquanic for manufacturing
            operations, production maintenance, and industrial engineering workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Engineering Steels & Steel Products */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Engineering Steels &amp; Steel Products
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                As a B2B partner among <strong>steel suppliers in Zimbabwe</strong>, Proquanic sources engineering
                steels, tool steels, stainless alloys, and structural profiles in full mill lengths or cut-to-size
                forms subject to specification and availability:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Engineering &amp; Alloy Steels:</strong> EN8 (080M40), EN19 / AISI 4140 (709M40), EN24 / AISI
                  4340 (817M40), and EN9 carbon steel round bars for drive shafts, rollers, gears, and machine pins.
                </li>
                <li>
                  <strong>Tool &amp; Die Steels:</strong> AISI D2 / 1.2379 (K110), AISI O1 / 1.2510 oil-hardening
                  steel, spring steel, and precision ground flat stock (gauge plate) for dies, punches, and knives.
                </li>
                <li>
                  <strong>Structural, Bright &amp; Stainless Steels:</strong> Bright mild steel round and hex bar,
                  hollow structural sections (SHS &amp; RHS), S275JR / S355JR steel plate, checker floor plate, brass
                  plate, and Grades 304, 316, 410, and 420 stainless steel bar and sheet.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/steel-products"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Steel Products Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/brass-plate-grades-sizes-applications"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Brass Plate Grades &amp; Sizes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 2. Cutting & Machining Tools */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Cutting &amp; Machining Tools
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Working alongside production machinists as trusted{" "}
                <strong>machining tools suppliers in Zimbabwe</strong>, we supply precision cutting tooling built for
                repeatability on CNC and conventional machine tools:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Turning &amp; Grooving Tooling:</strong> ISO 1832:2017 indexable turning inserts, external and
                  internal turning holders, and parting and grooving tools.
                </li>
                <li>
                  <strong>Milling Cutters:</strong> Solid carbide end mills (DIN 6527), high-speed steel end mills,
                  slot drills, face milling cutters, shoulder milling cutters, and chamfering cutters.
                </li>
                <li>
                  <strong>Drilling, Threading &amp; Reaming:</strong> HSS (DIN 338 / DIN 340), cobalt, solid carbide,
                  and indexable drills; centre and spot drills; machine and hand taps (DIN 371 / DIN 376); machine and
                  hand reamers; and boring tools.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/cutting-machining-tools"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Cutting &amp; Machining Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/why-drill-bits-burn-or-break"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Drill Bit Troubleshooting Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 3. Metal-Cutting Bandsaw Blades & Hacksaw Blades */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Metal-Cutting Bandsaw Blades &amp; Hacksaw Blades
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Raw material preparation and section cutting require tooth pitches and blade alloys matched to solid
                bars, structural tubes, and alloy billets:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Bi-Metal Bandsaw Blades:</strong> M42 (8% cobalt) variable-pitch bandsaw blades (such as 4/6,
                  3/4, and 2/3 TPI), M51 high-alloy blades, and carbide-tipped (TCT) bandsaw blades for structural
                  tubing and solid steel bar cut-off.
                </li>
                <li>
                  <strong>Hacksaw &amp; Circular Saw Blades:</strong> Power and hand hacksaw blades, HSS DMo5 circular
                  cold saw blades (VAPO and TiN coated), TCT ferrous metal-cutting circular blades, DIN 1837/1838
                  slitting saws, and segmental circular saw blades.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/sawing-products"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Sawing Products Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/why-metal-cutting-bandsaw-blade-breaks"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Bandsaw Blade Selection &amp; Care</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 4. Grinding Stones, Cutting Discs & Industrial Abrasives */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Disc className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Grinding Stones, Cutting Discs &amp; Industrial Abrasives
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                From precision toolroom surface finishing to fabrication bay weld dressing and cut-off work, we source
                abrasives manufactured to recognised industrial safety standards (such as EN 12413 and ISO 603):
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Grinding Stones &amp; Bonded Wheels:</strong> White Aluminium Oxide (WA) toolroom and surface
                  grinding wheels, Green Silicon Carbide (GC) carbide sharpening stones, and foundry snagging wheels.
                </li>
                <li>
                  <strong>Cutting Discs, Flap Discs &amp; Belts:</strong> 115mm and 230mm ultra-thin inox cut-off
                  discs, 355mm chop saw discs, 6.0mm depressed-centre grinding discs, Type 29 zirconia and ceramic flap
                  discs, and abrasive linisher sanding belts.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/abrasives"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Industrial Abrasives</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/grinding-wheel-colours-specifications-buying-guide"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Grinding Stones &amp; Grit Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 5. Bearings & Power Transmission Components */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Cog className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Bearings &amp; Power Transmission Components
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Rotating production equipment, conveyors, fans, gearboxes, and drive motors rely on accurate bearing
                clearances and matched power transmission assemblies:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Ball, Roller &amp; Housed Bearings:</strong> 6200 &amp; 6300 series deep groove ball bearings,
                  22200 &amp; 22300 spherical roller bearings, 30200/32200 tapered roller bearings, UCP/UCF pillow block
                  and flanged units, and SN/SNH/SNL plummer block housings.
                </li>
                <li>
                  <strong>Chains, Sprockets &amp; Belts:</strong> British Standard and ANSI roller chains (08B, 10B,
                  12B, 16B), taper lock bushes, bored-to-size steel sprockets, and heat- and oil-resistant wrapped
                  V-belts.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/bearings-power-transmission"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Bearings &amp; Power Transmission</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 6. Workshop Tools, Machine Tooling & Inspection */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Workshop Tools, Machine Tooling &amp; Inspection
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Supporting mechanical fitters, millwrights, and machinists with dependable tooling for setup, torque
                control, machine maintenance, and quality verification:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Machine Tooling &amp; Workholding:</strong> Hydraulic and modular CNC machine vises, 3-jaw
                  and 4-jaw lathe chucks, MAS 403 BT40/BT50 ER collet chucks, face mill arbors, and T-slot clamping
                  kits.
                </li>
                <li>
                  <strong>Workshop &amp; Metrology Tools:</strong> Calibrated click torque wrenches, impact sockets,
                  chrome-vanadium and slogging spanners, hydraulic presses and bearing pullers, digital calipers,
                  outside micrometers, dial indicators, and granite surface plates.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/machine-tooling-workholding"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Machine Tooling &amp; Workholding</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/workshop-tools"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Workshop Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/metrology-inspection"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Metrology &amp; Inspection</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 7. Mechanical Components: Springs, Pins, Keys, Bushes & Maintenance Supplies */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between lg:col-span-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Mechanical Components (Springs, Pins, Keys, Bushes) &amp; Plant Maintenance Supplies
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Reliable <strong>industrial components suppliers in Zimbabwe</strong> must support the smaller precision
                hardware and fluids that keep assemblies aligned, sealed, and running smoothly across multi-shift
                plants:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong>Hardware, Springs, Pins, Keys &amp; Bushes:</strong> Industrial springs, parallel and dowel
                    pins, key steel and shaft keys, taper-lock and bronze/engineered bushes, Grade 8.8, 10.9, and 12.9
                    high-tensile bolts, socket screws, all-thread studding, and linear motion rails and carriage blocks.
                  </li>
                  <li>
                    <strong>Couplings, Seals &amp; Pneumatics:</strong> HRC jaw and tire shaft couplings, NBR and Viton
                    rotary shaft oil seals, metric O-ring assortment kits, pneumatic push-in fittings, and adapters.
                  </li>
                </ul>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong>Fluids, Valves &amp; Safety PPE:</strong> Bio-stable soluble cutting fluids, ISO VG 68
                    slideway lubricants, lithium EP2 greases, stainless steel 316 ball valves, wafer butterfly valves,
                    webbing and chain lifting slings, and EN 388 cut-resistant safety gloves.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/mechanical-components"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Explore Mechanical Components</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/other-industrial-supplies"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Fluids, Valves &amp; Maintenance Supplies</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>View Full 10-Category Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Section 3: Industrial Machinery & Equipment Procurement */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Industrial Machinery &amp; Equipment Procurement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Engineering Machinery Sourced to Your Production Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In addition to consumables and spare components, Proquanic assists manufacturing plants and engineering
              workshops with sourcing industrial machinery and machine tools tailored to client drawings, part sizes,
              and 380V/400V 50Hz three-phase power infrastructure. Equipment classes covered include CNC vertical
              machining centres, heavy bed-type and turret milling machines, centre lathes, wire-cut EDM, precision
              hydraulic surface and cylindrical grinders, horizontal metal-cutting bandsaws, radial drills, hydraulic
              workshop presses, and plate press brakes or guillotines.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proquanic does not manufacture machinery and does not claim authorised OEM dealership status; instead, we
              facilitate structured procurement from established manufacturers and trusted regional or international
              supply channels, confirming technical specifications, availability, and delivery terms during formal
              quotation.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/machinery-equipment"
                className="px-5 py-3 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Machinery &amp; Equipment Page</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
              <Link
                href="/site-delivery"
                className="px-4 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Delivery Arrangements</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <SafeImage
                src="/images/categories/machinery-equipment.jpg"
                alt="Industrial CNC and conventional workshop machinery sourced for manufacturing operations in Zimbabwe"
                aspectRatioClass="aspect-16/10"
                fallbackTitle="Industrial Machinery Procurement Zimbabwe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Practical Quotation Preparation & Related Guides */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs">
          <div className="space-y-1">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Faster B2B Turnaround
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              What to Include in a Manufacturing RFQ
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sharing complete technical details allows our procurement team to verify compatibility and prepare an
            accurate quotation:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700">
            {QUOTATION_DETAILS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Technical Guides for Manufacturing Buyers
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 shrink-0"
            >
              <span>All Guides</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RELATED_ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-white rounded-lg border border-slate-200 p-4 space-y-1.5 hover:border-orange-500/60 transition-colors shadow-2xs group"
              >
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                  {article.topic}
                </span>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Prominent Request a Quotation & Direct Contact CTA */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-10 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
            Proquanic (Pvt) Ltd · {COMPANY.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Request a Quotation for Your Manufacturing Plant
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Submit your bill of materials, steel cut list, tooling specifications, or machinery requirements to our
            Bulawayo procurement desk ({COMPANY.address.full}). We support industrial production businesses across
            Bulawayo, Harare, Gweru, Kwekwe, Mutare, and nationwide Zimbabwe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
          <Link
            href="/request-a-quotation"
            className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors inline-flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Request a Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={manufacturingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp {COMPANY.contact.phoneDisplay}</span>
          </a>

          <a
            href={manufacturingEmailUrl}
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
            <span>Contact Sales Desk</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
