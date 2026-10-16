import React from "react";
import { Link } from "../utils/router";
import { BrandWordmark } from "../components/BrandWordmark";
import { SafeImage } from "../components/SafeImage";
import { COMPANY } from "../config/company";
import {
  Building2,
  ShieldCheck,
  Target,
  Truck,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
          Company Background & Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          About Proquanic (Pvt) Ltd
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          A dedicated B2B industrial procurement and supply company based in Bulawayo, Zimbabwe, delivering engineering steels, precision machine tooling, workshop consumables, and industrial equipment to enterprises across Southern Africa.
        </p>
      </div>

      {/* Narrative Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Industrial Supply Built on Technical Integrity
            </h2>
            <p>
              Operating from <strong className="text-slate-900">{COMPANY.address.full}</strong>, Proquanic (Pvt) Ltd was established to serve the demanding operational requirements of modern manufacturing plants, machine shops, fabricators, agricultural processors, and mining facilities.
            </p>
            <p>
              In a region where equipment downtime carries heavy financial costs, engineering operations require dependable access to verified raw materials and tooling. Our mission is encapsulated in our core operational commitment:
            </p>
            <blockquote className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r text-base font-bold text-slate-900 italic">
              "{COMPANY.tagline}"
            </blockquote>
            <p>
              Whether an operation requires standard engineering steel rounds (such as EN8, EN19, and EN24), specialized D2 tool steels for stamping dies, solid carbide spiral end mills for CNC machining centers, heavy-duty bandsaw blades, or complete new machine tools, Proquanic coordinates technical verification and reliable delivery directly to site.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-4 rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-sm">Specification Rigor</span>
              <p className="text-slate-600">
                Every requisition is cross-checked against international standards (ISO, DIN, AISI, BS) to ensure dimensional and metallurgical compliance.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-sm">Transparent Quoting</span>
              <p className="text-slate-600">
                Detailed itemized quotations with clear lead times, cut-to-length capabilities, and established commercial terms.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-900">
            <SafeImage
              src="/images/categories/steel-products.jpg"
              alt="Engineering Steel Warehouse Facility"
              aspectRatioClass="aspect-4/3"
              fallbackTitle="Proquanic Industrial Facility"
            />
            <div className="p-5 text-white space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Operational Headquarters
              </span>
              <p className="text-xs text-slate-300">
                7010 Gwabalanda, Bulawayo, Zimbabwe
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400 border-t border-slate-800 flex justify-between">
                <span>Call: +263 79 042 0836</span>
                <span>Email: proquanic@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scope Statement Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-2 text-xs text-slate-700">
        <span className="font-bold text-slate-900 uppercase tracking-wider block">
          Catalogue & Supply Transparency:
        </span>
        <p className="leading-relaxed">
          {COMPANY.scopeStatement}
        </p>
      </div>

      {/* Company Values */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Operational Pillars
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Why Industrial Buyers Partner with Proquanic
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-xs">
            <div className="p-2.5 bg-amber-50 rounded-lg text-amber-600 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Verified Technical Standards
            </h3>
            <p className="leading-relaxed">
              We understand that substituting a grade or supplying out-of-tolerance steel leads to catastrophic tool wear or machine failure. We ensure materials match the precise mechanical properties requested.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-xs">
            <div className="p-2.5 bg-amber-50 rounded-lg text-amber-600 w-fit">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Reliable Regional Logistics
            </h3>
            <p className="leading-relaxed">
              From our Bulawayo hub, we manage freight and direct dispatch to workshops and industrial sites throughout Matabeleland, the Midlands, Harare, and across Zimbabwe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-xs">
            <div className="p-2.5 bg-amber-50 rounded-lg text-amber-600 w-fit">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Multi-Product Requisitions
            </h3>
            <p className="leading-relaxed">
              Consolidate your purchasing: order raw engineering steel billets, the cutting tools to machine them, coolant for the machine sump, and replacement bearings all through a single accountable supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Ready to Discuss Your Supply Requirements?</h3>
          <p className="text-xs text-slate-300">
            Submit your bill of materials or connect directly with our procurement team.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/request-a-quotation"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-colors whitespace-nowrap"
          >
            Request a Quotation
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded border border-slate-700 transition-colors whitespace-nowrap"
          >
            Contact Information
          </Link>
        </div>
      </div>
    </div>
  );
};
