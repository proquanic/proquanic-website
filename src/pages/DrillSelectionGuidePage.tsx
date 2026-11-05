import React, { useState } from "react";
import { Link, useRouter } from "../utils/router";
import { COMPANY } from "../config/company";
import { useRfq } from "../context/RfqContext";
import {
  FileText,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check,
  ChevronRight,
  Printer,
  Sparkles,
} from "lucide-react";

export const DrillSelectionGuidePage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleAddDrillToRfq = (drillType: "HSS" | "Cobalt" | "Carbide") => {
    const specs =
      drillType === "HSS"
        ? "General purpose, jobber length, DIN 338"
        : drillType === "Cobalt"
        ? "High-performance, HSCo, DIN 338/340"
        : "Production grade, solid carbide, CNC optimized";

    addItem({
      title: `${drillType} Metal-Cutting Drill Bit`,
      category: "Cutting and Machining Tools",
      partNumberOrGrade: drillType,
      quantity: "1",
      unit: "Piece",
      specifications: specs,
    });
    setAddedItemName(`${drillType} Drill Bit`);
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your article on HSS, Cobalt, and Carbide drills and would like to request technical pricing and availability for industrial drilling tools."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Drill Bit Selection Guide</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 space-y-10">
        <header className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <span className="bg-orange-100 px-2 py-0.5 rounded">Technical Guide</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            HSS, Cobalt or Carbide Drills? Understanding the Differences and Choosing the Right Drill for Steel
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Choosing a drill bit for metalworking involves more than selecting the correct diameter. Understand the material differences and application requirements to make the right choice for your workshop.
          </p>
        </header>

        {/* Hero Visual Block */}
        <figure className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/images/blog/hss-cobalt-carbide-drills.jpg"
              alt="Comparison of HSS, cobalt-alloyed and solid carbide drill bits on a workshop bench"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </figure>

        {/* Article Content */}
        <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-slate-700 leading-relaxed">
          <h2>Introduction</h2>
          <p>
            Choosing a drill bit for metalworking involves more than selecting the correct diameter. The material used to manufacture the drill, the workpiece material, the machine, and the drilling conditions all influence the result.
          </p>
          <p>
            Three common options used in industrial metalworking are High-Speed Steel (HSS), cobalt-alloyed High-Speed Steel (HSCo or HSS-E), and solid carbide drills. Although all three are designed to produce holes, they have different characteristics and application requirements.
          </p>

          <h2>1. High-Speed Steel (HSS) Drills</h2>
          <p>
            High-Speed Steel drills are widely used for general-purpose metal drilling. HSS offers a useful combination of hardness and toughness. This makes it suitable for many conventional drilling applications, including work on mild steel and other materials within the drill manufacturer's recommended application range.
          </p>
          
          <h2>2. Cobalt-Alloyed HSS Drills</h2>
          <p>
            Cobalt-alloyed HSS drills are commonly identified as HSCo or HSS-E. The important distinction is that cobalt is incorporated into the tool material as an alloying element. It is not simply a surface coating. Cobalt-alloyed HSS provides improved hot hardness compared with conventional HSS, helping cutting edges retain hardness at elevated operating temperatures.
          </p>

          <h2>3. Solid Carbide Drills</h2>
          <p>
            Solid carbide drills are manufactured from cemented carbide, a hard cutting-tool material. They offer high hardness and wear resistance and are commonly used in production machining and CNC applications where the machine and workholding provide sufficient stability.
          </p>

          <h2>4. Summary Comparison</h2>
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="p-2 text-left">Characteristic</th>
                <th className="p-2 text-left">HSS</th>
                <th className="p-2 text-left">Cobalt-alloyed HSS</th>
                <th className="p-2 text-left">Solid carbide</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">Typical use</td>
                <td className="p-2 border-b">General workshop</td>
                <td className="p-2 border-b">Demanding applications</td>
                <td className="p-2 border-b">Production / CNC</td>
              </tr>
            </tbody>
          </table>

          <h2>Considerations Before Buying</h2>
          <p>Before selecting a drill, consider: Workpiece material, hole diameter, hole depth, machine type, production requirements, coatings, and cutting data.</p>
        </div>

        {/* RFQ Call to Action */}
        <aside className="bg-white rounded-xl border border-orange-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Need Industrial Drilling Tools?</h3>
            <p className="text-sm text-slate-600">
              Proquanic supplies a comprehensive range of industrial HSS, cobalt-alloyed, and solid carbide drilling tools tailored to your workshop requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => handleAddDrillToRfq("HSS")} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded text-xs font-bold transition-colors">Add HSS Drill to RFQ</button>
            <button onClick={() => handleAddDrillToRfq("Cobalt")} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded text-xs font-bold transition-colors">Add Cobalt Drill to RFQ</button>
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <a href={directWhatsAppUrl} className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-xs transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquire</span>
            </a>
            <Link href="/request-a-quotation" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded shadow-xs transition-colors">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Request Quotation</span>
            </Link>
          </div>
          {addedItemName && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Added {addedItemName} to RFQ basket!</span>
            </div>
          )}
        </aside>
      </article>
    </div>
  );
};
