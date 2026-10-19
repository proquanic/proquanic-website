import React from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import { Truck, MapPin, ShieldCheck, Clock, ArrowRight, ChevronRight, Phone } from "lucide-react";

export const SiteDeliveryPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Site Delivery</span>
      </nav>

      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Logistics & Fulfillment
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Site Delivery & Freight Arrangements
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Logistics and direct-to-site delivery arrangements for industrial products, raw materials, tooling, and machinery.
        </p>
      </div>

      {/* Primary Statement */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-orange-500 text-slate-950 rounded-lg">
            <Truck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">
            Delivery by Custom Arrangement
          </h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Site delivery is available by arrangement, confirmed according to the order requirements, cargo weight/volume, and delivery destination. Proquanic coordinates road freight and local delivery from our Bulawayo operations to workshops, mines, and industrial facilities across Zimbabwe.
        </p>
      </div>

      {/* Delivery Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
        <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
          <MapPin className="w-5 h-5 text-orange-600 mb-1" />
          <h3 className="font-bold text-slate-900 text-sm">Destination Assessment</h3>
          <p className="text-slate-600 leading-relaxed">
            Whether your site is in Bulawayo, Harare, Kwekwe, Gweru, Zvishavane, or regional mining centers, logistics routing is tailored to your location.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
          <ShieldCheck className="w-5 h-5 text-orange-600 mb-1" />
          <h3 className="font-bold text-slate-900 text-sm">Cargo & Offloading</h3>
          <p className="text-slate-600 leading-relaxed">
            Heavy steel rounds, bundles, and crated machinery require appropriate crane or forklift offloading facilities, agreed upon prior to dispatch.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-2">
          <Clock className="w-5 h-5 text-orange-600 mb-1" />
          <h3 className="font-bold text-slate-900 text-sm">Clear Lead Times</h3>
          <p className="text-slate-600 leading-relaxed">
            Quotation documents provide realistic transit schedules reflecting customs clearance and road freight timelines.
          </p>
        </div>
      </div>

      {/* Contact box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-bold text-slate-900 text-sm">Have Specific Delivery Inquiries?</h4>
          <p className="text-xs text-slate-600">
            Contact our logistics desk to discuss site delivery options for your upcoming order.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY.contact.phoneTel}`}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>Call {COMPANY.contact.phoneDisplay}</span>
          </a>
          <Link
            href="/request-a-quotation"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-bold whitespace-nowrap"
          >
            Request Quotation
          </Link>
        </div>
      </div>
    </div>
  );
};
