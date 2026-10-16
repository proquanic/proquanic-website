import React from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import { MACHINERY_CATEGORIES, MACHINERY_DISCLAIMER } from "../data/machinery";
import { COMPANY } from "../config/company";
import {
  Cog,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  FileText,
  MessageSquare,
  Truck,
  Wrench,
  Search,
} from "lucide-react";

export const MachineryPage: React.FC = () => {
  const machineryWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am enquiring about sourcing industrial machinery or workshop equipment. Please assist me with technical assessment and quotation."
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Heavy Industrial Equipment
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Machinery & Industrial Equipment Supply
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          Proquanic facilitates B2B procurement and supply of heavy machine tools, CNC equipment, workshop saws, sheet metal fabrication machinery, and industrial utilities for operations in Zimbabwe and Southern Africa.
        </p>
      </div>

      {/* Scope and Disclaimer Box */}
      <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 space-y-4 shadow-sm border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Procurement Scope & Operational Model</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          {MACHINERY_DISCLAIMER}
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Factory pre-shipment inspection</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>International freight & customs logistics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Voltage & electrical frequency matching</span>
          </div>
        </div>
      </div>

      {/* Machinery Categories Grid */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Equipment Classes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Core Machine Tool & Plant Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MACHINERY_CATEGORIES.map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <SafeImage
                  src={machine.image}
                  alt={machine.title}
                  aspectRatioClass="aspect-16/9"
                  fallbackTitle={machine.title}
                />
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider block mb-1">
                      {machine.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {machine.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {machine.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs">
                    <span className="text-slate-500 font-semibold block mb-1">Capacity Range:</span>
                    <span className="font-mono text-slate-800 font-medium">
                      {machine.typicalCapacity}
                    </span>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Technical Parameters:
                    </span>
                    <div className="space-y-1 divide-y divide-slate-100">
                      {Object.entries(machine.specifications).map(([k, v]) => (
                        <div key={k} className="pt-1 flex flex-col sm:flex-row sm:justify-between text-[11px] gap-1">
                          <span className="text-slate-500">{k}:</span>
                          <span className="font-mono text-slate-800 text-right">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-1.5 text-xs pt-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Production Roles:
                    </span>
                    <ul className="space-y-1 text-slate-700 text-xs">
                      {machine.keyCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">·</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2 border-t border-slate-100 mt-4">
                <Link
                  href="/request-a-quotation"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Machinery Quotation</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Workflow Section */}
      <section className="bg-slate-50 rounded-xl p-8 sm:p-10 border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Reliable Machinery Procurement
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            How Proquanic Sources Your Machinery
          </h2>
          <p className="text-xs text-slate-600">
            A systematic engineering process designed to eliminate risks when importing heavy machinery into Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
          <div className="bg-white p-5 rounded border border-slate-200 space-y-2">
            <div className="w-7 h-7 bg-amber-500 text-slate-950 rounded-full font-bold flex items-center justify-center text-xs">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Specification & Capacity</h3>
            <p className="text-slate-600 leading-relaxed">
              We review your target workpiece drawings, production throughput, tolerances, bed lengths, and factory power supply.
            </p>
          </div>

          <div className="bg-white p-5 rounded border border-slate-200 space-y-2">
            <div className="w-7 h-7 bg-amber-500 text-slate-950 rounded-full font-bold flex items-center justify-center text-xs">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Global Channel Sourcing</h3>
            <p className="text-slate-600 leading-relaxed">
              We vet certified industrial manufacturers in international production hubs to locate machines matching your engineering criteria.
            </p>
          </div>

          <div className="bg-white p-5 rounded border border-slate-200 space-y-2">
            <div className="w-7 h-7 bg-amber-500 text-slate-950 rounded-full font-bold flex items-center justify-center text-xs">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Pre-Shipment QA</h3>
            <p className="text-slate-600 leading-relaxed">
              Spindle runout tests, geometric alignment protocols, and test piece cut verification conducted prior to ocean/air containerization.
            </p>
          </div>

          <div className="bg-white p-5 rounded border border-slate-200 space-y-2">
            <div className="w-7 h-7 bg-amber-500 text-slate-950 rounded-full font-bold flex items-center justify-center text-xs">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Port-to-Workshop Delivery</h3>
            <p className="text-slate-600 leading-relaxed">
              Full customs clearance, import documentation, and overland logistics directly to your workshop in Bulawayo, Harare, or regional sites.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/request-a-quotation"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded shadow transition-colors flex items-center gap-2"
          >
            <span>Submit Machine Enquiry</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
          <a
            href={machineryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Machinery Desk (+263 79 042 0836)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
