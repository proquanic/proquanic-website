import React from "react";
import { Link } from "../utils/router";
import {
  Pickaxe,
  Factory,
  Wrench,
  Layers,
  HardHat,
  Tractor,
  Truck,
  Zap,
  Hammer,
  ClipboardList,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

interface IndustryLink {
  href: string;
  label: string;
}

interface IndustryDetail {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  illustrativeExamples: string;
  isMiningFocus?: boolean;
  links: IndustryLink[];
}

const INDUSTRY_DETAILS: IndustryDetail[] = [
  {
    title: "Mining and mineral processing",
    icon: Pickaxe,
    isMiningFocus: true,
    summary:
      "Underground and open-cast mining operations, mineral processing plants, crushing circuits, and concentrators across Zimbabwe rely on durable mining engineering supplies and dependable mining maintenance consumables to maintain uptime in abrasive, high-load operating conditions. Proquanic supports mine engineering teams and plant maintenance workshops with verified sourcing against technical drawings, part numbers, and plant specifications—without claiming to manufacture components or hold exclusive mining supply contracts.",
    illustrativeExamples:
      "Illustrative mining engineering supplies and equipment include heavy wear plates, engineering and alloy steels including EN19 and EN24 for high-torque shafts and pins, spherical roller bearings, conveyor drive chains, slurry pump seals, and industrial valves, alongside relevant machinery and equipment procurement such as heavy-duty centre lathes, horizontal bandsaws, and hydraulic workshop presses.",
    links: [
      {
        href: "/products/steel-products",
        label: "Heavy Wear Plates & EN19 / EN24 Steels",
      },
      {
        href: "/products/bearings-power-transmission",
        label: "Spherical Roller Bearings & Conveyor Chains",
      },
      {
        href: "/products/mechanical-components",
        label: "Slurry Pump Seals & Industrial Valves",
      },
      {
        href: "/machinery-equipment",
        label: "Mining Workshop Machinery Procurement",
      },
    ],
  },
  {
    title: "Manufacturing and industrial production",
    icon: Factory,
    summary:
      "Continuous processing lines, food and beverage facilities, packaging operations, and industrial plants depend on scheduled preventive maintenance and timely replacement of mechanical and pneumatic drive parts to avoid costly line stoppages.",
    illustrativeExamples:
      "Illustrative examples include V-belts, precision bearings, pneumatic valves, machine tool spares, transmission sprockets, electric motor couplings, workshop consumables, and production equipment.",
    links: [
      {
        href: "/products/bearings-power-transmission",
        label: "Bearings, V-Belts, Sprockets & Couplings",
      },
      {
        href: "/products/mechanical-components",
        label: "Pneumatic Valves & Machine Tool Spares",
      },
      {
        href: "/products/other-industrial-supplies",
        label: "Plant Consumables & Maintenance Fluids",
      },
    ],
  },
  {
    title: "Engineering and machine shops",
    icon: Wrench,
    summary:
      "Precision jobbing workshops, toolrooms, and CNC or conventional machining facilities require consistent cutting performance on carbon and alloy steels, rigid workholding, and calibrated dimensional inspection tools for shaft turning, milling, boring, and die making.",
    illustrativeExamples:
      "Illustrative examples include solid carbide end mills, ISO turning and milling inserts, machine vises, ER collet sets, digital calipers, micrometers, and lathe chucks, plus CNC and conventional machine tools.",
    links: [
      {
        href: "/products/cutting-machining-tools",
        label: "Carbide End Mills & ISO Turning Inserts",
      },
      {
        href: "/products/machine-tooling-workholding",
        label: "Machine Vises, ER Collets & Lathe Chucks",
      },
      {
        href: "/products/metrology-inspection",
        label: "Digital Calipers & Precision Micrometers",
      },
      {
        href: "/machinery-equipment",
        label: "CNC Machining Centres, Lathes & Grinders",
      },
    ],
  },
  {
    title: "Metal fabrication and steel processing",
    icon: Layers,
    summary:
      "Structural steel fabricators, plate bending shops, boilermakers, and steel service yards require efficient sectioning of bar and structural profiles, clean weld preparation, heavy stock removal, and dependable clamping and bolting hardware.",
    illustrativeExamples:
      "Illustrative examples include bi-metal bandsaw blade loops, cold saw blades, abrasive cutting and grinding discs, magnetic clamping tools, structural fasteners, and industrial metal-cutting bandsaws.",
    links: [
      {
        href: "/products/sawing-products",
        label: "Bi-Metal Bandsaw & Cold Saw Blades",
      },
      {
        href: "/products/abrasives",
        label: "Abrasive Cutting & Grinding Discs",
      },
      {
        href: "/products/steel-products",
        label: "Structural Steels, Plate & Bright Bar",
      },
      {
        href: "/machinery-equipment",
        label: "Horizontal Bandsaws & Press Brakes",
      },
    ],
  },
  {
    title: "Construction and infrastructure",
    icon: HardHat,
    summary:
      "Civil engineering contractors, structural erectors, earthworks teams, and infrastructure developers require certified high-tensile fasteners, heavy lifting and rigging gear, and durable site maintenance tooling for demanding field installations.",
    illustrativeExamples:
      "Illustrative examples include high-tensile Grade 8.8 and 10.9 structural bolts, threaded rods, heavy rigging hardware, lifting slings, and site maintenance tooling.",
    links: [
      {
        href: "/products/mechanical-components",
        label: "Grade 8.8 & 10.9 Structural Bolts & Rods",
      },
      {
        href: "/products/workshop-tools",
        label: "Site Maintenance Tooling & Hand Tools",
      },
      {
        href: "/products/steel-products",
        label: "Structural Steel Sections & Baseplate",
      },
    ],
  },
  {
    title: "Agriculture and agricultural machinery",
    icon: Tractor,
    summary:
      "Commercial farming enterprises, irrigation schemes, sugar and grain estates, and agro-processing plants face strict seasonal operating windows where rapid replacement of drive chains, bearings, shafting, and hydraulic connections keeps tractors and implements working.",
    illustrativeExamples:
      "Illustrative examples include pillow block bearings (UCP, UCF), drive chains, agricultural implement pins, replacement shafting, hydraulic fittings, and industrial lubricants.",
    links: [
      {
        href: "/products/bearings-power-transmission",
        label: "Pillow Block Bearings (UCP/UCF) & Chains",
      },
      {
        href: "/products/steel-products",
        label: "Replacement Implement Pins & Shafting",
      },
      {
        href: "/products/other-industrial-supplies",
        label: "Agricultural Greases & Lubricants",
      },
    ],
  },
  {
    title: "Transport, fleet maintenance and automotive workshops",
    icon: Truck,
    summary:
      "Heavy haulage fleets, bus and rail maintenance depots, and commercial vehicle workshops require controlled fastening torque, high-capacity pulling and pressing equipment, and replacement wheel and axle hardware for safe turnaround.",
    illustrativeExamples:
      "Illustrative examples include calibrated industrial torque wrenches, heavy-duty impact sockets, wheel bearing sets, hydraulic pullers, and workshop shop floor presses.",
    links: [
      {
        href: "/products/workshop-tools",
        label: "Torque Wrenches, Impact Sockets & Pullers",
      },
      {
        href: "/products/bearings-power-transmission",
        label: "Heavy-Duty Wheel & Axle Bearing Sets",
      },
      {
        href: "/machinery-equipment",
        label: "Hydraulic Workshop Presses & Brake Lathes",
      },
    ],
  },
  {
    title: "Power generation and utilities",
    icon: Zap,
    summary:
      "Power generation plants, water and wastewater treatment utilities, and steam and boiler facilities require pressure-rated flow components, chemical- and heat-resistant sealing, and corrosion-resistant mechanical fasteners for reliable essential infrastructure.",
    illustrativeExamples:
      "Illustrative examples include high-pressure valves, pipe fittings, pump mechanical seals, vibration-resistant fasteners, and specialized electrical maintenance tooling.",
    links: [
      {
        href: "/products/mechanical-components",
        label: "High-Pressure Valves, Seals & Fasteners",
      },
      {
        href: "/products/steel-products",
        label: "Stainless & High-Tensile Alloy Steels",
      },
      {
        href: "/products/metrology-inspection",
        label: "Precision Utility Inspection Instruments",
      },
    ],
  },
  {
    title: "Industrial maintenance, repair and operations (MRO)",
    icon: Hammer,
    summary:
      "Plant engineering teams and factory stores manage day-to-day upkeep across rotating machinery, pipework, and fabrication bays, requiring consistent replenishment of lubricants, coolants, seals, abrasives, and personal protective equipment.",
    illustrativeExamples:
      "Illustrative examples include general plant maintenance consumables, semi-synthetic cutting fluids, slideway oils, EP greases, O-ring seal kits, coated abrasives, and safety PPE.",
    links: [
      {
        href: "/products/other-industrial-supplies",
        label: "Cutting Fluids, Lubricants & Safety PPE",
      },
      {
        href: "/products/abrasives",
        label: "Industrial Grinding & Conditioning Abrasives",
      },
      {
        href: "/products/mechanical-components",
        label: "O-Ring Seal Kits & Replacement Hardware",
      },
    ],
  },
  {
    title: "Procurement departments, contractors and industrial distributors",
    icon: ClipboardList,
    summary:
      "Corporate procurement offices, EPC project contractors, and regional industrial resellers often manage multi-line bills of materials requiring technical specification matching, consolidated supplier sourcing, and coordinated cross-border delivery into Zimbabwe.",
    illustrativeExamples:
      "Illustrative capabilities include consolidated multi-line requisitions, bill of materials quotation estimation, project supply scheduling, custom machinery sourcing, and cross-border freight coordination.",
    links: [
      {
        href: "/products",
        label: "Browse All 10 Industrial Product Categories",
      },
      {
        href: "/machinery-equipment",
        label: "Industrial Machinery & Equipment Procurement",
      },
      {
        href: "/site-delivery",
        label: "Nationwide Site Delivery Arrangements",
      },
    ],
  },
];

export const IndustriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Industries We Serve</span>
      </nav>

      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Market Sectors & Commercial Scope
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Industries We Serve
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-4xl leading-relaxed">
          Proquanic (Pvt) Ltd provides structured B2B <strong>industrial procurement</strong> and{" "}
          <strong>industrial supplies in Zimbabwe</strong> and the wider Southern African market. We supply{" "}
          <strong>engineering materials and components</strong>, precision cutting and measuring tools,{" "}
          <strong>industrial maintenance supplies</strong>, and{" "}
          <strong>industrial machinery and equipment</strong> to businesses operating across the sectors below.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          Operating from Bulawayo, we coordinate dependable <strong>engineering supplies in Zimbabwe</strong> by sourcing
          suitable products from reputable manufacturers and distribution channels—primarily in South Africa—tailored to
          verified client specifications, part numbers, and technical drawings.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:text-orange-700"
          >
            <span>Explore Industrial Product Categories</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/machinery-equipment"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:text-orange-700"
          >
            <span>Explore Industrial Machinery &amp; Equipment</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/request-a-quotation"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-orange-600"
          >
            <span>Submit a Sector Quotation Request</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="bg-slate-900 text-white p-6 rounded-lg border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Operational Scope Notice</span>
        </div>
        <p className="text-slate-300 leading-relaxed max-w-4xl">
          The sectors listed below represent our core target industrial markets and procurement scope across Zimbabwe and
          Southern Africa. The products named under each sector are illustrative examples of our supply capability rather
          than guaranteed showroom stock, exclusive supply agreements, or authorised dealership claims; we source and
          deliver verified items against confirmed client requisitions.
        </p>
      </div>

      {/* Industries Section */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Ten Core Industrial Sectors Supported Across Zimbabwe
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Review sector-specific engineering, maintenance, and procurement requirements below, with direct links to the
            relevant Proquanic product categories and machinery procurement pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRY_DETAILS.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.title}
                className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 hover:border-orange-500/50 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        {ind.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {ind.summary}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-100 rounded p-3">
                    {ind.illustrativeExamples}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] text-slate-500 font-mono block">
                    Relevant Supply Categories &amp; Equipment:
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {ind.links.map((link) => (
                      <Link
                        key={`${ind.title}-${link.href}-${link.label}`}
                        href={link.href}
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-slate-900">
          Have a Requisition for Your Industry?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Submit your part numbers, material grades, technical specifications, or bill of materials. Our procurement desk
          in Bulawayo will assess your requirement and prepare an itemized B2B quotation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/request-a-quotation"
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded shadow transition-colors flex items-center gap-2"
          >
            <span>Request a Quotation</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded transition-colors"
          >
            Contact Sales Desk
          </Link>
        </div>
      </section>
    </div>
  );
};
