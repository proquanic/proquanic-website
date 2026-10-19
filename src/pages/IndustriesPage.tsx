import React from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
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

const INDUSTRY_DETAILS = [
  {
    title: "Mining and mineral processing",
    icon: Pickaxe,
    description:
      "Heavy wear plates, alloy shafting steels (EN19, EN24), spherical roller bearings, conveyor drive chains, slurry pump seals, and industrial valves.",
  },
  {
    title: "Manufacturing and industrial production",
    icon: Factory,
    description:
      "V-belts, precision bearings, pneumatic valves, machine tool spares, transmission sprockets, electric motor couplings, and workshop consumables.",
  },
  {
    title: "Engineering and machine shops",
    icon: Wrench,
    description:
      "Solid carbide end mills, ISO turning and milling inserts, machine vises, ER collet sets, digital calipers, micrometers, and lathe chucks.",
  },
  {
    title: "Metal fabrication and steel processing",
    icon: Layers,
    description:
      "Bi-metal bandsaw blade loops, cold saw blades, abrasive cutting and grinding discs, magnetic clamping tools, and structural fasteners.",
  },
  {
    title: "Construction and infrastructure",
    icon: HardHat,
    description:
      "High-tensile Grade 8.8 and 10.9 structural bolts, threaded rods, heavy rigging hardware, lifting slings, and site maintenance tooling.",
  },
  {
    title: "Agriculture and agricultural machinery",
    icon: Tractor,
    description:
      "Pillow block bearings (UCP, UCF), drive chains, agricultural implement pins, replacement shafting, hydraulic fittings, and lubricants.",
  },
  {
    title: "Transport, fleet maintenance and automotive workshops",
    icon: Truck,
    description:
      "Calibrated industrial torque wrenches, heavy-duty impact sockets, wheel bearing sets, hydraulic pullers, and workshop shop floor presses.",
  },
  {
    title: "Power generation and utilities",
    icon: Zap,
    description:
      "High-pressure valves, pipe fittings, pump mechanical seals, vibration-resistant fasteners, and specialized electrical maintenance tooling.",
  },
  {
    title: "Industrial maintenance, repair and operations (MRO)",
    icon: Hammer,
    description:
      "General plant maintenance consumables, semi-synthetic cutting fluids, slideway oils, EP greases, O-ring seal kits, and safety PPE.",
  },
  {
    title: "Procurement departments, contractors and industrial distributors",
    icon: ClipboardList,
    description:
      "Consolidated multi-line requisitions, bill of materials quotation estimation, project supply scheduling, and cross-border freight coordination.",
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
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          Proquanic (Pvt) Ltd supports industrial procurement by sourcing suitable engineering products, materials, tooling, and machinery from reputable suppliers, primarily in South Africa, tailored to customer specifications.
        </p>
      </div>

      {/* Transparency Note */}
      <div className="bg-slate-900 text-white p-6 rounded-lg border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Operational Scope Notice</span>
        </div>
        <p className="text-slate-300 leading-relaxed max-w-4xl">
          The sectors listed below represent our core target industrial markets and procurement scope across Zimbabwe and Southern Africa. We do not claim exclusive supply contracts or universal stockholding; rather, we source and deliver verified components against verified client requirements.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INDUSTRY_DETAILS.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 hover:border-orange-500/50 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {ind.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-1">
                {ind.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-slate-900">
          Have a Requisition for Your Industry?
        </h3>
        <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
          Submit your part numbers, technical specifications, or bill of materials. Our sales desk in Bulawayo will assess your requirement and provide an itemized quotation.
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
      </div>
    </div>
  );
};
