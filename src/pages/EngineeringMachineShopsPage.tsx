import React from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { COMPANY } from "../config/company";
import {
  Wrench,
  Layers,
  Scissors,
  Cog,
  Gauge,
  Cpu,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  BookOpen,
  CheckCircle2,
  Building2,
} from "lucide-react";

const WORKSHOP_RFQ_CHECKLIST = [
  {
    field: "1. Exact Product Description",
    detail:
      "Clear description of the material, cutting tool, holding device, bearing, or component required (for example: solid carbide 4-flute end mill, round EN19 bar, hydraulic machine vice, or vitrified grinding stone).",
  },
  {
    field: "2. Manufacturer & Brand Preference",
    detail:
      "Specify your preferred manufacturer where brand consistency matters, or indicate whether verified industrial equivalents may be evaluated and quoted.",
  },
  {
    field: "3. Part Number or ISO Designation",
    detail:
      "Include OEM part codes, insert ISO designations, DIN standard numbers, or bearing series codes wherever applicable.",
  },
  {
    field: "4. Material Grade & Condition",
    detail:
      "State the required steel or non-ferrous grade (such as EN8, EN19, K110, bright mild steel, stainless, or brass plate) and any heat-treatment condition required.",
  },
  {
    field: "5. Dimensions & Tolerances",
    detail:
      "Provide exact sizes—outside diameter, bore, thickness, length, flute length, pitch, TPI, shank diameter, or finished cut dimensions and critical tolerances.",
  },
  {
    field: "6. Machine or Holder Compatibility",
    detail:
      "Note spindle taper (such as BT40, BT50, MT4), collet system (ER32/ER40), chuck backplate fitting, saw machine blade length, or grinder wheel bore.",
  },
  {
    field: "7. Machining Operation & Workpiece Material",
    detail:
      "Describe the operation (rough turning, keyway milling, deep-hole drilling, surface grinding) and workpiece alloy so cutting geometry and grade suitability can be checked.",
  },
  {
    field: "8. Quantity & Delivery Location",
    detail:
      "Confirm exact order quantity, unit of measure, and delivery destination in Bulawayo, Harare, Midlands, or across Zimbabwe.",
  },
];

const WORKSHOP_GUIDES = [
  {
    href: "/blog/en8-en19-mild-steel-comparison",
    topic: "Engineering Steels",
    title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
  },
  {
    href: "/guides/en8-vs-en19-steel",
    topic: "Shafting Grades",
    title: "EN8 vs EN19 Steel: Differences, Applications and How to Choose",
  },
  {
    href: "/blog/k110-tool-steel-properties-applications",
    topic: "Tool & Die Steels",
    title: "Why K110 Tool Steel Is Used for Punches, Dies and Industrial Knives",
  },
  {
    href: "/blog/steel-buying-checklist-engineering-workshop",
    topic: "Material Orders",
    title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
  },
  {
    href: "/blog/brass-plate-grades-sizes-applications",
    topic: "Non-Ferrous Metals",
    title: "Brass Plate: Choosing the Right Grade, Thickness and Size Before You Order",
  },
  {
    href: "/blog/how-to-choose-milling-machine-vice",
    topic: "Workholding",
    title: "How to Choose the Right Milling Machine Vice: A Practical Buying Guide",
  },
  {
    href: "/blog/hss-cobalt-carbide-drills",
    topic: "Holemaking",
    title: "HSS, Cobalt or Carbide Drills? Choosing the Right Drill for Steel",
  },
  {
    href: "/blog/why-end-mills-break",
    topic: "Milling Tooling",
    title: "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
  },
  {
    href: "/blog/why-drill-bits-burn-or-break",
    topic: "Drilling Practice",
    title: "Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check",
  },
  {
    href: "/blog/why-metal-cutting-bandsaw-blade-breaks",
    topic: "Sawing Operations",
    title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
  },
  {
    href: "/blog/grinding-wheel-colours-specifications-buying-guide",
    topic: "Grinding Stones",
    title: "Grinding Stones: Colours, Grit Sizes, Specifications and How to Choose the Right One",
  },
  {
    href: "/blog/hss-punches-how-to-choose-replacement",
    topic: "Press Tooling",
    title: "HSS Punches Explained: 7 Mistakes to Avoid When Choosing a Replacement",
  },
];

export const EngineeringMachineShopsPage: React.FC = () => {
  const workshopWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, we are an engineering workshop / machine shop in Zimbabwe looking for a quotation on engineering steels, machining tools, workholding, mechanical components, or machine tools. Please assist us."
  )}`;

  const workshopEmailUrl = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
    "Engineering Workshop & Machine Shop Supplies — Quotation Request"
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
          Engineering &amp; Machine Shops
        </span>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-slate-200 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Precision Engineering &amp; Machine Shop Procurement · Zimbabwe</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineering Supplies Zimbabwe: Machine Shop Tooling, Steels &amp; Workshop Equipment
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Proquanic (Pvt) Ltd provides B2B <strong>engineering supplies in Zimbabwe</strong> for precision machine
            shops, jobbing engineering workshops, toolrooms, and equipment maintenance departments. Based in Bulawayo,
            we work as a dedicated procurement desk supplying <strong>machine shop supplies in Zimbabwe</strong>—from
            verified engineering steels and precision cutting tools to bandsaw blades, grinding stones, workholding,
            mechanical spares, and <strong>engineering machinery procurement</strong>.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            As one of the industrial procurement partners supporting{" "}
            <strong>engineering tools suppliers in Zimbabwe</strong> and workshop buyers, we source verified tooling
            and engineering materials from reputable regional and international supply channels—primarily in South
            Africa—matched to your workshop drawings and machine specifications.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href="/request-a-quotation"
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Workshop Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={workshopWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Technical Desk</span>
            </a>
            <Link
              href="/industries"
              className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>All Industries We Serve</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
            <SafeImage
              src="/images/machinery/zim_machinist_lathe.jpg"
              alt="Machinist turning an EN19 alloy steel shaft on a centre lathe in a Zimbabwean engineering machine shop"
              aspectRatioClass="aspect-16/10"
              fallbackTitle="Engineering & Machine Shop Supplies Zimbabwe"
            />
          </div>
        </div>
      </header>

      {/* Commercial Accuracy & Scope Notice */}
      <section aria-label="Commercial scope notice" className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>B2B Procurement Scope &amp; Technical Verification</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-5xl">
          Proquanic (Pvt) Ltd operates as a B2B industrial supply and machinery procurement company in Bulawayo,
          Zimbabwe—not as a machine-tool manufacturer or authorised OEM dealership. Product categories listed on this
          page represent illustrative examples of <strong>industrial engineering supplies</strong> we source against
          customer specifications. Exact product identity, material grades, technical suitability, holder compatibility,
          availability, and delivery terms are confirmed formally during quotation.
        </p>
      </section>

      {/* Section 1: Procurement Requirements of Engineering Workshops & Machine Shops */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Machining, Fabrication &amp; Maintenance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Procurement Requirements of Engineering Workshops and Machine Shops
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            General engineering workshops, toolrooms, and CNC machine shops handle wide-ranging jobbing and batch work—
            spanning turning, milling, drilling, boring, surface and cylindrical grinding, steel fabrication,
            plant maintenance repairs, and machine replacement. Each stage depends on accurately matched stock
            materials, <strong>precision machining tools</strong>, workholding, and metrology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Turning, Milling, Drilling, Boring &amp; Grinding
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From roughing alloy steel shafts on gap-bed centre lathes to finishing precision dies on CNC vertical
              machining centres and surface grinders, tooling geometry, carbide grade, and chuck rigidity directly affect
              dimensional tolerances and surface finish.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Material Preparation, Sawing &amp; Fabrication
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Before parts reach the lathe or mill, bars and structural sections must be cleanly parted using
              correctly pitched bandsaw or hacksaw blades, dressed with industrial abrasives, and verified against
              the required metallurgical grade.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2.5 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Rebuilds, Maintenance &amp; Equipment Replacement
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Machine shops supporting Zimbabwe&apos;s{" "}
              <Link href="/industries/mining-mineral-processing" className="text-orange-600 font-semibold hover:underline">
                mining and mineral processing
              </Link>{" "}
              and{" "}
              <Link href="/industries/manufacturing-industrial-production" className="text-orange-600 font-semibold hover:underline">
                manufacturing production
              </Link>{" "}
              sectors require reliable bearings, seals, springs, pins, keys, bushes, and replacement workshop machinery.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Supply Categories for Machine Shops */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Workshop Supply Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Engineering Steels, Machining Tools, Workholding &amp; Mechanical Components
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Review the primary material, tooling, abrasive, and component categories that Proquanic sources for machine
            shops and engineering facilities across Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Engineering Steels and Materials */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Engineering Steels &amp; Workshop Materials
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Working alongside buyers seeking dependable{" "}
                <strong>engineering steel suppliers in Zimbabwe</strong>, Proquanic supplies verified steel grades and
                forms suited to shaft turning, tooling manufacture, and structural fabrication:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>EN8 &amp; EN19 Engineering Steels:</strong> EN8 (080M40) medium-carbon steel and EN19 / AISI
                  4140 (709M40) high-tensile alloy steel, alongside EN24 (817M40) and EN9 where specified.
                </li>
                <li>
                  <strong>Tool Steels (Including K110):</strong> Cold-work tool steels such as K110 (1.2379 / D2),
                  AISI O1 (1.2510), spring steel, and precision ground flat stock where applicable for dies, punches, and
                  industrial knives.
                </li>
                <li>
                  <strong>Bright Mild Steel &amp; Steel Profiles:</strong> Bright mild steel round and hex bars, steel
                  flat bars, round bars, structural hollow sections (SHS &amp; RHS), S275JR/S355JR heavy plates, checker
                  floor plates, and stainless steel grades (304, 316, 410, 420).
                </li>
                <li>
                  <strong>Non-Ferrous Enquiries (Brass Plate, Bronze &amp; Copper Alloys):</strong> Brass plate grades
                  and dimensions are covered in our non-ferrous guide, while bronze or copper-alloy bush and component
                  enquiries can be evaluated subject to exact alloy grade, size, and availability.
                </li>
              </ul>
              <p className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded p-3">
                <strong>Important Confirmation Step:</strong> Required material grade, dimensions, dimensional
                tolerances, cut lengths, and intended application must be confirmed before quotation.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
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
                <span>EN8, EN19 &amp; Mild Steel</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/k110-tool-steel-properties-applications"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>K110 Tool Steel</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/brass-plate-grades-sizes-applications"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Brass Plate Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 2. Cutting and Machining Tools */}
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
                Accurate metal removal depends on matching cutter material and tool geometry to the machine spindle and
                workpiece alloy. Proquanic sources comprehensive <strong>machining tools in Zimbabwe</strong>:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Turning Tools &amp; Inserts:</strong> External and internal turning toolholders, ISO
                  indexable carbide inserts, and parting and grooving tools.
                </li>
                <li>
                  <strong>Milling Cutters &amp; End Mills:</strong> Solid carbide end mills (DIN 6527), high-speed
                  steel end mills, slot drills, face and shoulder milling cutters, and chamfer cutters.
                </li>
                <li>
                  <strong>Drills, Taps &amp; Reamers:</strong> HSS, cobalt, solid carbide, and indexable drill bits;
                  centre and spot drills; machine and hand taps; and machine or hand reamers.
                </li>
                <li>
                  <strong>Boring, Threading &amp; Toolholders:</strong> Precision boring bars and tools, thread
                  milling and thread-cutting tools, countersinks, and compatible spindle toolholders.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/cutting-machining-tools"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Cutting &amp; Machining Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/hss-cobalt-carbide-drills"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>HSS vs Cobalt vs Carbide Drills</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/why-end-mills-break"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Why End Mills Break</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 3. Sawing and Abrasives */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Sawing Products &amp; Industrial Abrasives
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Clean sectioning of raw stock and controlled grinding of hardened tooling and weldments require blades
                and abrasives matched to section thickness and alloy hardness:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Metal-Cutting Bandsaw &amp; Hacksaw Blades:</strong> M42 (8% cobalt) and M51 bi-metal
                  bandsaw blades, carbide-tipped (TCT) bandsaw blades, hand and power hacksaw blades, HSS DMo5 cold saw
                  blades, and segmental saw blades.
                </li>
                <li>
                  <strong>Grinding Stones &amp; Bonded Wheels:</strong> White Aluminium Oxide (WA) toolroom grinding
                  stones, Green Silicon Carbide (GC) carbide sharpening stones, and foundry snagging wheels.
                </li>
                <li>
                  <strong>Cutting &amp; Grinding Discs &amp; Belts:</strong> 115mm and 230mm ultra-thin inox cut-off
                  discs, 355mm chop saw metal-cutting discs, 6.0mm depressed-centre grinding discs, Type 29 zirconia
                  and ceramic flap discs, and abrasive sanding belts.
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link
                href="/products/sawing-products"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Sawing Products Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/abrasives"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Abrasives Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/grinding-wheel-colours-specifications-buying-guide"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Grinding Stones Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 4. Workshop Tools and Machine Tooling */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Workshop Tools, Workholding &amp; Metrology Instruments
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Supporting <strong>workshop tools suppliers in Zimbabwe</strong> and precision machine shops with rigid
                clamping, verified measuring tools, and durable mechanical hand tooling:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Machine Vices, Chucks &amp; Collets:</strong> Hydraulic machine vises (150mm &amp; 200mm),
                  modular CNC vises, tilting/swivel vises, 3-jaw self-centering and 4-jaw independent lathe chucks,
                  and BT40/BT50 ER collet chucks and collet sets.
                </li>
                <li>
                  <strong>Arbors &amp; Workholding Accessories:</strong> Face mill arbors (22mm &amp; 27mm spigot),
                  reversible hard and machinable soft jaws, and 58-piece T-slot clamping kits.
                </li>
                <li>
                  <strong>Measuring &amp; Inspection Instruments:</strong> Digital vernier calipers, outside micrometer
                  sets, plunger and lever dial indicators, magnetic base stands, Grade 0 granite surface plates, and
                  steel gauge block sets.
                </li>
                <li>
                  <strong>Workshop Hand Tools:</strong> Click torque wrenches, deep impact socket sets, combination
                  and slogging spanners, pipe wrenches, hydraulic bearing pullers, and workshop presses.
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
                href="/products/metrology-inspection"
                className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
              >
                <span>Metrology &amp; Inspection</span>
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
                href="/blog/how-to-choose-milling-machine-vice"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Machine Vice Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* 5. Bearings and Mechanical Components */}
          <article className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between lg:col-span-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                  <Cog className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Bearings, Seals, Springs, Pins, Keys &amp; Mechanical Components
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In addition to machining consumables, workshops rebuilding gearboxes, spindles, pumps, and assembly
                fixtures require precision mechanical spares and power transmission parts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong>Bearings &amp; Housings:</strong> Deep groove ball bearings, spherical roller bearings,
                    tapered roller bearings, UCP/UCF pillow block and flanged units, and SN/SNH/SNL plummer block
                    housings.
                  </li>
                  <li>
                    <strong>Seals &amp; Fastening Hardware:</strong> Rotary shaft seals, metric O-ring assortment kits,
                    Grade 8.8, 10.9, and 12.9 high-tensile bolts, socket head cap screws, and all-thread studding.
                  </li>
                </ul>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong>Compression Springs, Pins, Keys &amp; Bushes:</strong> Industrial compression springs,
                    parallel and dowel pins, key steel and shaft keys, taper lock bushes, shaft couplings, roller
                    chains, sprockets, wrapped V-belts, and linear guide rails.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2 text-xs">
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
                <span>Mechanical Components Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products"
                className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
              >
                <span>Browse All Supply Categories</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Section 3: Engineering Machinery Procurement */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Engineering Machinery Procurement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Machine Tools &amp; Workshop Machinery Supplied to Client Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              When machine shops expand machining capacity or replace ageing plant, Proquanic handles{" "}
              <strong>engineering machinery procurement</strong> according to your workpiece dimensions, target
              tolerances, floor footprint, and Zimbabwean 380V/400V 50Hz three-phase power requirements. Equipment
              sourced through established channels includes CNC vertical machining centres, heavy bed-type and turret
              milling machines, conventional centre lathes, CNC wire-cut EDM, hydraulic surface and cylindrical
              grinders, horizontal metal-cutting bandsaws, radial drills, workshop presses, and plate fabrication
              machinery.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proquanic does not manufacture machinery and does not hold authorised OEM dealership appointments. We act
              strictly as a B2B procurement partner, verifying technical specifications, pricing, and delivery logistics
              before order placement.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/machinery-equipment"
                className="px-5 py-3 bg-[#0B192C] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-lg shadow-xs transition-colors inline-flex items-center gap-2"
              >
                <span>View Machinery &amp; Equipment Page</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
              <Link
                href="/site-delivery"
                className="px-4 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Site Delivery Information</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <SafeImage
                src="/images/categories/machine-tooling-workholding.jpg"
                alt="Precision machine vices, lathe chucks, collets and workshop tooling supplied for machine shops in Zimbabwe"
                aspectRatioClass="aspect-16/10"
                fallbackTitle="Machine Tooling & Workshop Machinery Zimbabwe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Practical Procurement Guidance (8-Point Workshop RFQ Checklist) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <ClipboardCheck className="w-4 h-4" />
            <span>Quotation Preparation Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Information Engineering Workshops Should Provide When Requesting Quotations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Accurate input details prevent costly machining delays and tool mismatches. Include the following eight
            specifications when submitting an enquiry—our desk confirms exact product identity, technical suitability,
            compatibility, availability, and delivery terms formally during quotation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKSHOP_RFQ_CHECKLIST.map((item) => (
            <div
              key={item.field}
              className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-2xs"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{item.field}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="leading-relaxed">
            <strong>Confirmation Policy:</strong> Product identity, technical suitability, machine/holder
            compatibility, current availability, pricing, and delivery timelines are verified and confirmed on your
            formal Proquanic quotation.
          </p>
          <Link
            href="/request-a-quotation"
            className="shrink-0 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded inline-flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Open RFQ Form</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
          </Link>
        </div>
      </section>

      {/* Section 5: Related Technical Articles & Cross-Sector Links */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Machine Shop Knowledge Hub</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Practical Engineering Materials &amp; Machining Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 shrink-0"
          >
            <span>All Blog &amp; Technical Guides</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKSHOP_GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-lg border border-slate-200 p-4 space-y-2 hover:border-orange-500/60 transition-colors shadow-2xs flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                  {guide.topic}
                </span>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {guide.title}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-orange-600 inline-flex items-center gap-1 pt-2">
                <span>Read Guide</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* Related Sectors Strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Building2 className="w-4 h-4 text-orange-600 shrink-0" />
            <span>Related Industrial Sectors Served by Proquanic:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/industries/mining-mineral-processing"
              className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
            >
              <span>Mining &amp; Mineral Processing</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/industries/manufacturing-industrial-production"
              className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
            >
              <span>Manufacturing &amp; Production</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/industries"
              className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-1"
            >
              <span>All 10 Industrial Sectors</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Prominent Request a Quotation & Direct Contact CTA */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-10 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
            Proquanic (Pvt) Ltd · {COMPANY.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Request a Quotation for Your Engineering Workshop
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Submit your tool list, steel dimensions, workholding requirements, or workshop machinery specifications to
            our procurement desk at {COMPANY.address.full}, serving machine shops across Bulawayo, Harare, Gweru,
            Kwekwe, Mutare, and nationwide Zimbabwe.
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
            href={workshopWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp {COMPANY.contact.phoneDisplay}</span>
          </a>

          <a
            href={workshopEmailUrl}
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
