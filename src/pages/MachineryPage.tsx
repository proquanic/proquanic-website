import React, { useState, useMemo } from "react";
import { Link } from "../utils/router";
import { SafeImage } from "../components/SafeImage";
import {
  MACHINERY_CATEGORIES,
  MACHINERY_DISCLAIMER,
  INDUSTRY_SECTORS,
} from "../data/machinery";
import { COMPANY } from "../config/company";
import { MachineryItem } from "../types";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  MessageSquare,
  Building2,
  Wrench,
  Truck,
  Factory,
  Layers,
  Check,
  Info,
  Maximize2,
  X,
  Gauge,
  Cpu,
  BookOpen,
  HardHat,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

// Authentic Bulawayo engineering workshop documentary photography
const WORKSHOP_GALLERY = [
  {
    id: "lathe-turning",
    image: "/images/machinery/zim_machinist_lathe.jpg",
    title: "Heavy Turning on Conventional Centre Lathe",
    subtitle: "Belmont Industrial Area, Bulawayo",
    description:
      "Skilled machinist turning an EN19 alloy steel pump shaft on a heavy-duty centre lathe. Continuous flood coolant delivery and controlled feeds prevent work-hardening and maintain concentricity on long shafts for mining slurry pumps.",
    equipmentType: "Heavy-Duty Gap-Bed Centre Lathe (1,500mm Bed)",
    workpiece: "EN19 / 709M40T Hardened Alloy Steel Pump Shaft",
  },
  {
    id: "cnc-toolroom",
    image: "/images/machinery/zim_cnc_technician.jpg",
    title: "CNC Toolroom Setup & Alignment Dialing",
    subtitle: "Precision Toolroom, Bulawayo",
    description:
      "CNC technician setting up a dial test indicator (DTI) on a vertical machining centre to verify workpiece squareness and datum references before executing an automated contouring cycle on an alloy steel valve manifold.",
    equipmentType: "CNC Vertical Machining Centre (BT40 Spindle)",
    workpiece: "Hydraulic Manifold Block (Alloy Steel)",
  },
  {
    id: "edm-wire-cut",
    image: "/images/machinery/zim_edm_operator.jpg",
    title: "Precision Wire-Cut EDM Spark Erosion Setup",
    subtitle: "Precision Tool & Die Facility, Bulawayo",
    description:
      "Toolroom technician carefully inspecting brass EDM wire threading and workpiece alignment on a submerged CNC wire-cut EDM machine, cutting hardened D2 punch and die tooling without tool pressure or edge deformation.",
    equipmentType: "CNC Submerged Wire-Cut EDM Machine",
    workpiece: "Hardened D2 Tool Steel Press-Tool Blanking Die",
  },
  {
    id: "metrology-inspection",
    image: "/images/machinery/zim_engineers_inspection.jpg",
    title: "Engineering Metrology & Blueprint Verification",
    subtitle: "Machining & Maintenance Workshop, Bulawayo",
    description:
      "Mechanical engineering technicians checking finished shaft diameters with a calibrated outside micrometer against technical workshop fabrication drawings, ensuring strict ISO bearing-fit tolerances before delivery.",
    equipmentType: "Precision Inspection Workbench & Micrometers",
    workpiece: "Bearing Journal Sleeve & Technical Drawing Review",
  },
  {
    id: "bandsaw-cutting",
    image: "/images/machinery/zim_bandsaw_operator.jpg",
    title: "Raw Material Preparation on Industrial Bandsaw",
    subtitle: "Steel Service Yard, Bulawayo",
    description:
      "Workshop operator adjusting vice clamping and roller feeds on a heavy-duty horizontal metal-cutting bandsaw, preparing a 150mm solid round EN8 engineering steel bar for subsequent lathe turning operations.",
    equipmentType: "Heavy-Duty Semi-Automatic Horizontal Bandsaw",
    workpiece: "150mm Solid Round EN8 Engineering Steel Bar",
  },
  {
    id: "surface-grinder",
    image: "/images/machinery/zim_surface_grinder.jpg",
    title: "Toolroom Surface Grinding on Hydraulic Grinder",
    subtitle: "Industrial Tool & Die Facility, Bulawayo",
    description:
      "Experienced toolmaker grinding a hardened tool steel die plate on a precision hydraulic surface grinder with electromagnetic chuck, achieving sub-micron surface flatness and mirror-finish parallelism for a stamping die.",
    equipmentType: "Precision Hydraulic Surface Grinder",
    workpiece: "Hardened D2 Tool Steel Press-Tool Die Plate",
  },
  {
    id: "turret-mill",
    image: "/images/machinery/zim_turret_mill.jpg",
    title: "Keyway Slotting on Conventional Turret Mill",
    subtitle: "Mechanical Fitting Machine Shop, Bulawayo",
    description:
      "Machinist in protective workshop coat monitoring digital readout (DRO) coordinates while milling a keyway slot into an alloy steel transmission shaft on a heavy knee-type turret milling machine.",
    equipmentType: "Variable-Speed Turret Milling Machine with 3-Axis DRO",
    workpiece: "Keyway Milling in EN8 Drive Shaft",
  },
  {
    id: "radial-drill",
    image: "/images/machinery/zim_radial_drill.jpg",
    title: "Heavy Radial Arm Drilling on Structural Baseplate",
    subtitle: "Structural Metal Fabrication Workshop, Bulawayo",
    description:
      "Workshop artisan positioning the geared drill spindle of a heavy radial arm drilling machine over a thick mild steel baseplate clamped on the box table, preparing high-diameter mounting bolt holes.",
    equipmentType: "Heavy-Duty Geared Radial Arm Drilling Machine (MT5)",
    workpiece: "50mm Thick Mild Steel Structural Baseplate",
  },
  {
    id: "hydraulic-press",
    image: "/images/machinery/zim_hydraulic_press.jpg",
    title: "Heavy Bearing Press-Fitting on 100-Ton H-Frame Press",
    subtitle: "Heavy Mining Fleet Maintenance Shop, Bulawayo",
    description:
      "Two mechanical maintenance fitters pressing a heavy spherical roller bearing onto a mining equipment shaft using a motorized hydraulic H-frame press with calibrated pressure monitoring.",
    equipmentType: "100-Ton Motorized Hydraulic Workshop H-Frame Press",
    workpiece: "Mining Crusher Shaft & Spherical Roller Bearing Fit",
  },
  {
    id: "press-brake",
    image: "/images/machinery/zim_press_brake.jpg",
    title: "Precision Plate Bending on Hydraulic Press Brake",
    subtitle: "Steel Fabrication Facility, Bulawayo",
    description:
      "Fabrication artisan aligning an engineering steel plate between precision top punch and multi-V bottom die on a heavy hydraulic press brake, executing uniform 90-degree channel bends.",
    equipmentType: "CNC Hydraulic Downstroking Press Brake",
    workpiece: "Mild Steel Chute & Hopper Wear Liner Section",
  },
];

// Engineering Knowledge Guide tabs
type GuideTab = "principles" | "materials" | "purchasing" | "rfq-checklist";

export const MachineryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [activeGuideTab, setActiveGuideTab] = useState<GuideTab>("principles");
  const [activeGalleryModal, setActiveGalleryModal] = useState<(typeof WORKSHOP_GALLERY)[0] | null>(null);

  // Extract unique categories for filter tabs
  const categories = useMemo(() => {
    const set = new Set<string>();
    MACHINERY_CATEGORIES.forEach((m) => set.add(m.category));
    return ["all", ...Array.from(set)];
  }, []);

  // Filter logic
  const filteredMachinery = useMemo(() => {
    return MACHINERY_CATEGORIES.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Industry filter
      if (selectedIndustry !== "all") {
        if (!item.industryRelevance || !item.industryRelevance.includes(selectedIndustry)) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchBrand = item.brand?.toLowerCase().includes(q) ?? false;
        const matchModel = item.modelSeries?.toLowerCase().includes(q) ?? false;
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCaps = item.keyCapabilities.some((c) => c.toLowerCase().includes(q));
        const matchApps = item.applications?.some((a) => a.toLowerCase().includes(q)) ?? false;
        const matchSpecs = Object.entries(item.specifications).some(
          ([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q)
        );
        const matchMats = item.materialsProcessed?.some((m) => m.toLowerCase().includes(q)) ?? false;
        return matchTitle || matchBrand || matchModel || matchDesc || matchCaps || matchApps || matchSpecs || matchMats;
      }

      return true;
    });
  }, [selectedCategory, selectedIndustry, searchQuery]);

  const generalMachineryWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am enquiring about sourcing industrial machinery and workshop machine tools for our operations in Zimbabwe. Please assist me with technical specifications, pricing, and procurement timelines."
  )}`;

  const getItemWhatsAppUrl = (item: MachineryItem) => {
    const brandPrefix = item.brand ? `${item.brand} ` : "";
    const modelText = item.modelSeries ? ` [${item.modelSeries}]` : "";
    const msg = `Hello Proquanic, I am enquiring about the ${brandPrefix}${item.title}${modelText}. We would like to request technical specifications, pricing, and delivery arrangements to our workshop in Zimbabwe.`;
    return `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const getItemRfqUrl = (item: MachineryItem) => {
    const params = new URLSearchParams({
      product: `${item.brand ? item.brand + " " : ""}${item.title}`,
      brand: item.brand || "Specified / Equivalent",
      model: item.modelSeries || "",
      specs: `${item.typicalCapacity}. Standard Zimbabwean 380V/400V 50Hz 3-phase supply.`,
    });
    return `/request-a-quotation?${params.toString()}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
          <Factory className="w-4 h-4" />
          <span>Industrial Plant & Workshop Machine Tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Machinery & Industrial Workshop Equipment
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-4xl leading-relaxed">
          Proquanic facilitates structured B2B supply of heavy-duty machine tools, CNC vertical machining centres,
          heavy bed-type universal milling machines, precision wire-cut EDM, precision hydraulic surface grinders,
          horizontal bandsaws, and conventional workshop lathes and drills. Sourced directly from established machine-tool
          manufacturers and trusted distribution channels in South Africa and overseas for engineering, mining, and
          manufacturing operations across Bulawayo and Zimbabwe.
        </p>
      </div>

      {/* Sourcing Transparency & Procurement Model Box */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-sm border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            <span>Procurement Scope & Operational Transparency</span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Direct Procurement Desk: {COMPANY.contact.phoneDisplay}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-5xl">
          {MACHINERY_DISCLAIMER}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
          <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block">Pre-Shipment QA</span>
              <span className="text-slate-400">Spindle runout, alignment & test cut checks</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block">Electrical Standards</span>
              <span className="text-slate-400">380V/400V 50Hz 3-phase matching for Zimbabwe</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block">Overland Freight</span>
              <span className="text-slate-400">Customs clearance & transport direct to workshop</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-slate-800/60 p-3 rounded border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block">Verified Builders</span>
              <span className="text-slate-400">DAHLIH, Mazak, SANCO, AccuteX, Powersaw</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: AUTHENTIC BULAWAYO WORKSHOP PHOTOGRAPHY & PRACTICE SHOWCASE */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <HardHat className="w-4 h-4" />
            <span>Industrial Field Practice · Bulawayo & Regional Hubs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Representative Workshop Operations & Engineering Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
            Practical engineering, toolroom machining, plate fabrication, and industrial maintenance in Bulawayo's
            established industrial corridors—including Belmont, Kelvin, and Donnington. Proquanic sources and delivers
            the machine tools, tooling packages, and engineering steels that empower workshops of this calibre.
          </p>
        </div>

        {/* Operational Context & Disclaimer Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Representative Workshop Environments Notice:</span>
            <p className="text-amber-800 text-[11px] leading-relaxed">
              These documentary photographs illustrate real-world machine-shop operations, precision toolrooms, and
              fabrication departments operating in Bulawayo and Southern Africa. Personnel shown are representative skilled
              local machinists, technicians, and engineers engaged in daily workshop practice, not named Proquanic staff.
              Proquanic acts as an engineered procurement facilitator supplying machine tools to workshops across Zimbabwe.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
                idx === 0 || idx === 1 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="relative aspect-16/9 bg-slate-950 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    aspectRatioClass="aspect-16/9"
                    fallbackTitle={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700">
                    {item.subtitle}
                  </div>
                  <button
                    onClick={() => setActiveGalleryModal(item)}
                    className="absolute bottom-3 right-3 bg-slate-900/80 hover:bg-orange-600 text-white p-1.5 rounded transition-colors text-xs flex items-center gap-1 shadow"
                    title="Expand details"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] pr-1">Examine</span>
                  </button>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Machine Class:</span>
                      <span className="font-mono text-slate-900">{item.equipmentType}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="font-semibold text-slate-700">Workpiece / Task:</span>
                      <span className="text-slate-800 text-right">{item.workpiece}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/request-a-quotation?product=${encodeURIComponent(item.equipmentType)}&specs=${encodeURIComponent(item.workpiece)}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold rounded transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-600" />
                  <span>Request Equivalent Equipment RFQ</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Manufacturer Spotlight Bar */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Established Machine-Tool Builders
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Prioritised Industrial Manufacturers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We source genuine equipment from reputable machine-tool builders recognised for heavy cutting rigidity,
            dependable build quality, and enduring workshop reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>DAHLIH</span>
              <span className="text-[10px] text-slate-400 font-normal">Taiwan</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              MCV-1450 & MCV-1450B box-way & geared VMCs for heavy cutting.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>Mazak</span>
              <span className="text-[10px] text-slate-400 font-normal">Japan</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              VCN series high-performance VMCs with Mazatrol conversational CNC.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>SANCO</span>
              <span className="text-[10px] text-slate-400 font-normal">Taiwan</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              SBM heavy bed-type universal mills & SHM horizontal borers.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>AccuteX</span>
              <span className="text-[10px] text-slate-400 font-normal">Taiwan</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              AU series submerged CNC wire-cut EDM with automatic wire threading.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>Powersaw</span>
              <span className="text-[10px] text-slate-400 font-normal">Industrial</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Heavy-duty semi-automatic and mitre horizontal metal-cutting bandsaws.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>Workshop Tools</span>
              <span className="text-[10px] text-slate-400 font-normal">Heavy Series</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Centre lathes, radial drills, turret mills, presses & guillotines.
            </p>
          </div>
        </div>
      </section>

      {/* Bulawayo & Regional Industrial Application Focus */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Local Operating Context
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Machinery Sized for Bulawayo & Southern African Industry
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Click a sector to filter matching machinery:
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INDUSTRY_SECTORS.map((sector) => {
            const isSelected = selectedIndustry === sector.name;
            return (
              <button
                key={sector.name}
                onClick={() => setSelectedIndustry(isSelected ? "all" : sector.name)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`text-xs font-bold ${isSelected ? "text-orange-400" : "text-slate-900"}`}>
                    {sector.name}
                  </h3>
                  {isSelected && <Check className="w-3.5 h-3.5 text-orange-400" />}
                </div>
                <p className={`text-[11px] leading-relaxed ${isSelected ? "text-slate-300" : "text-slate-600"}`}>
                  {sector.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: TECHNICAL MACHINING & PURCHASING GUIDE */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Engineering Reference & Purchasing Intelligence</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              Machinery Selection, Machinability & Sourcing Guide
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Expert knowledge for workshop engineers and procurement teams
          </span>
        </div>

        {/* Guide Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveGuideTab("principles")}
            className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors ${
              activeGuideTab === "principles"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            1. Machining Principles & Class Comparison
          </button>
          <button
            onClick={() => setActiveGuideTab("materials")}
            className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors ${
              activeGuideTab === "materials"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            2. Regional Steel & Material Machinability
          </button>
          <button
            onClick={() => setActiveGuideTab("purchasing")}
            className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors ${
              activeGuideTab === "purchasing"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            3. Essential Purchasing Considerations
          </button>
          <button
            onClick={() => setActiveGuideTab("rfq-checklist")}
            className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors ${
              activeGuideTab === "rfq-checklist"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            4. What to Include in Your Machinery RFQ
          </button>
        </div>

        {/* Tab Content 1: Principles */}
        {activeGuideTab === "principles" && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              Choosing the correct machine tool requires balancing part geometry, structural mass, spindle torque,
              and process dynamics. Below is a practical operational comparison for Zimbabwean workshop applications:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">CNC Vertical Machining Centres (VMC)</span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Principle:</strong> Rotating cutter on a vertical spindle travelling over a fixed-axis table (X/Y/Z).
                  Ideal for complex prism parts, multi-pocketing, drilled hole patterns, and valve manifolds.
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Best for:</span> Mining pump volutes, automotive flanges, gearboxes, bearing housings.
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">Bed Mills & Horizontal Boring Machines</span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Principle:</strong> Massive rigid casting where the table sits directly on the machine base.
                  Handles massive workpieces (up to 4–8 tonnes) without table deflection or loss of perpendicularity.
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Best for:</span> Jaw crusher frames, mining trommel mounts, locomotive bogies, slurry pump housings.
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">CNC Wire-Cut EDM (AccuteX)</span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  <strong>Principle:</strong> Non-contact electro-thermal spark erosion using a continuously travelling brass or coated wire submerged in dielectric deionized water.
                  Cuts through hardened steels (60+ HRC) with zero cutting tool force.
                </p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Best for:</span> Extrusion dies, punch & die tooling, internal keyways, spline profiles, PCD inserts.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Materials */}
        {activeGuideTab === "materials" && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              Industrial machinery supplied for Zimbabwe must cope with typical Southern African material grades.
              Spindle power, feed rigidity, and vibration damping must match the metallurgical properties:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200 text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                    <th className="p-3 border-r border-slate-200">Material Grade</th>
                    <th className="p-3 border-r border-slate-200">Typical Applications in Zimbabwe</th>
                    <th className="p-3 border-r border-slate-200">Machinability Characteristics</th>
                    <th className="p-3">Required Machine Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-[11px] text-slate-700">
                  <tr>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">EN8 / 080M40</td>
                    <td className="p-3 border-r border-slate-200">General shafts, conveyor rollers, agricultural pins, studs</td>
                    <td className="p-3 border-r border-slate-200">Good machinability (approx. 60–65%). Produces manageable stringy swarf requiring chip breakers.</td>
                    <td className="p-3">Standard BT40 VMC, conventional lathe or turret mill with flood coolant.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">EN19 / 709M40T</td>
                    <td className="p-3 border-r border-slate-200">High-torque shafts, mining pump shafts, gears, bolts, crane pins</td>
                    <td className="p-3 border-r border-slate-200">Medium-tough alloy. Often machined in hardened & tempered 'T' condition (248–302 HB). Work-hardens if tool rubs.</td>
                    <td className="p-3">High-torque geared spindle or BT50 drive; rigid box-way casting to suppress chatter.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">EN24 / 817M40T</td>
                    <td className="p-3 border-r border-slate-200">High-stress gearboxes, crusher eccentric shafts, railway components</td>
                    <td className="p-3 border-r border-slate-200">Nickel-chromium-molybdenum alloy with high yield strength. Requires positive rake carbide tooling and rigid setups.</td>
                    <td className="p-3">Heavy-duty centre lathe or bed mill with minimum 11kW–18kW spindle drive.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">D2 / O1 Tool Steel</td>
                    <td className="p-3 border-r border-slate-200">Metal-stamping dies, guillotine shear blades, punching tools</td>
                    <td className="p-3 border-r border-slate-200">Extremely abrasive, high chromium content. Hardens up to 58–62 HRC. Conventional cutting tools wear rapidly.</td>
                    <td className="p-3">AccuteX Wire-Cut EDM for complex shapes; precision hydraulic surface grinder for die faces.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Cast Iron (GG25 / Ductile)</td>
                    <td className="p-3 border-r border-slate-200">Pump casings, motor housings, machine beds, brake drums</td>
                    <td className="p-3 border-r border-slate-200">Generates abrasive granular graphite dust. Dry or mist cutting preferred with adequate workshop extraction.</td>
                    <td className="p-3">Enclosed CNC machining centre with robust way-covers and telescopic bellows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 3: Purchasing */}
        {activeGuideTab === "purchasing" && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              Procuring machine tools in Zimbabwe requires looking beyond the basic machine price. Consider these 6
              essential engineering criteria before confirming your capital expenditure:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Gauge className="w-4 h-4 text-orange-600" />
                  <span>1. Electrical Specification (380V/400V 50Hz)</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Zimbabwe industrial power is 380V–400V 3-phase, 50Hz. Machinery originating from the USA or Japan
                  often requires stepped transformers. We ensure machines are configured for Southern African grid
                  standards and recommend industrial voltage stabilizers where supply fluctuates.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Cpu className="w-4 h-4 text-orange-600" />
                  <span>2. Spindle Taper & Guide Type</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  For heavy roughing in tough alloys (EN19/EN24), box-way slideways and BT50 spindle tapers provide
                  superior dampening. For rapid batch production in mild steel or aluminum, roller linear guideways
                  and high-speed BT40 spindles offer faster cycle times.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Building2 className="w-4 h-4 text-orange-600" />
                  <span>3. Floor Loading & Overhead Crane</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Machines such as the SANCO bed mill (12+ tonnes) or large centre lathes require reinforced concrete
                  slabs (minimum 250mm–350mm thickness) to prevent settling. Ensure workshop doorway clearances and
                  gantry crane capacities are verified before dispatch.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Wrench className="w-4 h-4 text-orange-600" />
                  <span>4. Tooling & Spare Parts Availability</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  A machine is only as productive as the tooling on its spindle. Proquanic provides complete starter
                  tooling packages including collet sets, machine vices, boring heads, coolant pumps, and replacement
                  filter cartridges sourced from reliable regional channels.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>5. CNC Controller Selection</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Standardise on CNC controllers with strong local operator familiarity (such as Fanuc, Siemens, or
                  Mazatrol). Conversational programming reduces programming time for one-off jobbing work common in
                  Bulawayo workshops.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <Truck className="w-4 h-4 text-orange-600" />
                  <span>6. Pre-Shipment Inspection & Freight</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Every machine undergoes spindle runout testing, slideway geometric inspection, and test cuts prior
                  to loading. We coordinate cross-border transport, customs clearance, and direct delivery to site.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: RFQ Checklist */}
        {activeGuideTab === "rfq-checklist" && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              To enable Proquanic to source the most accurate machine tool at competitive pricing with minimal lead times,
              please provide as much technical detail as possible when submitting your enquiry:
            </p>
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 text-sm block">What to Include in Your Machinery RFQ:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Component Drawings / Part Dimensions:</strong>
                    <span className="block text-slate-600 text-[11px]">Maximum workpiece diameter, length, height, and overall weight.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Material Grade & Hardness:</strong>
                    <span className="block text-slate-600 text-[11px]">E.g., EN8, EN19, EN24, mild steel, cast iron, or hardened tool steel.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Required Tolerances & Surface Finish:</strong>
                    <span className="block text-slate-600 text-[11px]">Critical dimensional limits (e.g. ±0.01mm) and Ra surface roughness targets.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Production Volume & Duty Cycle:</strong>
                    <span className="block text-slate-600 text-[11px]">One-off jobbing repair vs continuous multi-shift production batches.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Workshop Infrastructure:</strong>
                    <span className="block text-slate-600 text-[11px]">Available 3-phase power capacity (kVA), floor slab thickness, and crane capacity.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Delivery Location & Timeline:</strong>
                    <span className="block text-slate-600 text-[11px]">Workshop destination in Bulawayo, Harare, Midlands, or regional mine site.</span>
                  </div>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 font-mono">
                  Need direct assistance with an RFQ? Call +263 790 420 836
                </span>
                <Link
                  href="/request-a-quotation"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  <span>Open Official RFQ Form</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Machinery Catalogue Filters & Search */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Equipment Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Machinery & Machine Tool Catalogue ({filteredMachinery.length})
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by brand, machine type, or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg border border-slate-200 text-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const label = cat === "all" ? "All Equipment Classes" : cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-medium rounded transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Active Filter Indicators */}
        {(selectedCategory !== "all" || selectedIndustry !== "all" || searchQuery.trim()) && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">Active filters:</span>
            {selectedCategory !== "all" && (
              <span className="bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded text-[11px] flex items-center gap-1.5">
                Class: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-red-600 font-bold ml-1"
                  aria-label="Clear category filter"
                >
                  ×
                </button>
              </span>
            )}
            {selectedIndustry !== "all" && (
              <span className="bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded text-[11px] flex items-center gap-1.5">
                Sector: {selectedIndustry}
                <button
                  onClick={() => setSelectedIndustry("all")}
                  className="hover:text-red-600 font-bold ml-1"
                  aria-label="Clear sector filter"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery.trim() && (
              <span className="bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded text-[11px] flex items-center gap-1.5">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="hover:text-red-600 font-bold ml-1"
                  aria-label="Clear search"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedIndustry("all");
                setSearchQuery("");
              }}
              className="text-xs text-orange-600 hover:underline font-semibold ml-2"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Machinery Cards Grid */}
        {filteredMachinery.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              No matching machinery found
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              We could not find machinery matching your specific search or filter criteria. Contact our
              procurement desk directly with your machine requirements or target drawings.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedIndustry("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Clear all filters
              </button>
              <Link
                href="/request-a-quotation"
                className="px-4 py-2 bg-orange-600 text-white rounded text-xs font-semibold hover:bg-orange-700 transition-colors"
              >
                Submit Custom Equipment Request
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredMachinery.map((machine) => {
              const whatsappUrl = getItemWhatsAppUrl(machine);
              const rfqUrl = getItemRfqUrl(machine);

              return (
                <div
                  key={machine.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Machine Photograph with Caption */}
                    <div className="relative group bg-slate-950">
                      <SafeImage
                        src={machine.image}
                        alt={machine.title}
                        aspectRatioClass="aspect-16/9"
                        fallbackTitle={machine.title}
                      />
                      {/* Brand & Sourcing Watermark Tag */}
                      <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                        {machine.brand && (
                          <span className="px-2.5 py-1 bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-bold rounded tracking-wider uppercase border border-slate-700">
                            {machine.brand}
                          </span>
                        )}
                        {machine.modelSeries && (
                          <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-xs text-orange-400 text-[10px] font-mono rounded border border-slate-700">
                            {machine.modelSeries}
                          </span>
                        )}
                      </div>

                      {/* Image Caption overlay on bottom */}
                      {machine.imageCaption && (
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 pt-6 text-[10px] text-slate-300">
                          <span className="font-semibold text-white">Visual Reference: </span>
                          <span>{machine.imageCaption}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-5">
                      {/* Meta header */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1 text-xs text-slate-500">
                          <span className="font-semibold text-orange-600 uppercase tracking-wider text-[11px]">
                            {machine.category}
                          </span>
                          {machine.sourcingChannels && (
                            <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                              {machine.sourcingChannels}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                          {machine.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {machine.description}
                        </p>
                      </div>

                      {/* Capacity highlight box */}
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-1">
                          Standard Capacity Envelope:
                        </span>
                        <div className="font-mono text-slate-900 font-semibold text-xs sm:text-[13px]">
                          {machine.typicalCapacity}
                        </div>
                      </div>

                      {/* Verified Technical Parameters Table */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <span>Verified Technical Specifications:</span>
                          <span className="text-[10px] text-slate-400 font-normal">Factory Parameters</span>
                        </div>
                        <div className="bg-slate-50/70 rounded border border-slate-200 overflow-hidden divide-y divide-slate-200 text-xs">
                          {Object.entries(machine.specifications).map(([key, value]) => (
                            <div
                              key={key}
                              className="px-3 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px]"
                            >
                              <span className="font-semibold text-slate-700 shrink-0 sm:max-w-[45%]">
                                {key}
                              </span>
                              <span className="font-mono text-slate-900 sm:text-right">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Capabilities */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Operational Capabilities & Tooling:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {machine.keyCapabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-orange-500 font-bold shrink-0">·</span>
                              <span className="leading-relaxed">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Materials Processed */}
                      {machine.materialsProcessed && machine.materialsProcessed.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                            Suitable Workpiece Materials:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {machine.materialsProcessed.map((mat, i) => (
                              <span
                                key={i}
                                className="inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-mono border border-slate-200"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Selection Considerations */}
                      {machine.selectionConsiderations && machine.selectionConsiderations.length > 0 && (
                        <div className="bg-amber-50/60 rounded-lg border border-amber-200 p-3.5 space-y-1.5 text-xs">
                          <div className="flex items-center gap-1.5 text-amber-900 font-bold text-[11px] uppercase tracking-wider">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Selection & Sizing Considerations:</span>
                          </div>
                          <ul className="space-y-1 text-[11px] text-amber-900">
                            {machine.selectionConsiderations.map((consideration, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-amber-600 font-bold shrink-0">·</span>
                                <span className="leading-relaxed">{consideration}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* RFQ Required Details */}
                      {machine.rfqRequirements && machine.rfqRequirements.length > 0 && (
                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-3.5 space-y-1.5 text-xs">
                          <div className="flex items-center gap-1.5 text-slate-900 font-bold text-[11px] uppercase tracking-wider">
                            <FileText className="w-3.5 h-3.5 text-orange-600" />
                            <span>Details to Provide for Quotation (RFQ):</span>
                          </div>
                          <ul className="space-y-1 text-[11px] text-slate-600">
                            {machine.rfqRequirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <ChevronRight className="w-3 h-3 text-orange-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Typical Regional Applications */}
                      {machine.applications && machine.applications.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                            Typical Zimbabwean Industry Applications:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {machine.applications.map((app, i) => (
                              <span
                                key={i}
                                className="inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] border border-slate-200"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions (Quotation + WhatsApp) */}
                  <div className="p-6 pt-0 space-y-2.5 border-t border-slate-100 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                      <Link
                        href={rfqUrl}
                        className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded transition-colors shadow-2xs"
                      >
                        <FileText className="w-3.5 h-3.5 text-orange-400" />
                        <span>Request Machinery Quotation</span>
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded transition-colors shadow-2xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Enquiry</span>
                      </a>
                    </div>

                    <div className="text-[10px] text-slate-500 text-center pt-1 font-mono">
                      Supply model: Sourced to client specification · Delivery to site in Zimbabwe
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Sourcing & Import Logistics Workflow */}
      <section className="bg-slate-50 rounded-xl p-8 sm:p-10 border border-slate-200 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Engineered Sourcing Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How Proquanic Assists With Your Machinery Procurement
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Acquiring heavy machine tools requires exact engineering validation. Proquanic assists with identifying
            suitable machinery, assessing technical requirements, obtaining quotations, and coordinating procurement
            and delivery arrangements for Zimbabwean workshops and industrial plants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
          <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-8 h-8 bg-orange-600 text-white rounded font-bold flex items-center justify-center text-xs">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Specification & Duty Assessment
            </h3>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              We evaluate your component drawings, workpiece dimensions, material grades, required accuracy,
              workshop electrical supply, and available footprint to define the technical requirements.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-8 h-8 bg-orange-600 text-white rounded font-bold flex items-center justify-center text-xs">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Manufacturer Quotations
            </h3>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              We obtain verified competitive quotations directly from established machine-tool builders in South Africa
              and reputable international manufacturers (including Taiwan, Japan, and Europe).
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-8 h-8 bg-orange-600 text-white rounded font-bold flex items-center justify-center text-xs">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Technical Verification & Pre-Shipment QA
            </h3>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Spindle taper runout verification, bedway geometric alignments, electrical frequency checks, and
              test cut reports are reviewed prior to containerization or dispatch.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-8 h-8 bg-orange-600 text-white rounded font-bold flex items-center justify-center text-xs">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Logistics & Workshop Delivery
            </h3>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              We coordinate international freight, customs clearance, and delivery arrangements direct to your
              workshop floor in Bulawayo, Harare, Kwekwe, Gweru, or regional mining sites.
            </p>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/request-a-quotation"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded shadow transition-colors flex items-center justify-center gap-2"
          >
            <span>Submit Custom Machinery Enquiry</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
          <a
            href={generalMachineryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded shadow transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Machinery Desk (+263 790 420 836)</span>
          </a>
        </div>
      </section>

      {/* Gallery Detail Modal */}
      {activeGalleryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-16/9 bg-slate-950">
              <SafeImage
                src={activeGalleryModal.image}
                alt={activeGalleryModal.title}
                aspectRatioClass="aspect-16/9"
                fallbackTitle={activeGalleryModal.title}
              />
              <button
                onClick={() => setActiveGalleryModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/80 hover:bg-orange-600 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[11px] px-2.5 py-1 rounded font-mono">
                {activeGalleryModal.subtitle}
              </div>
            </div>
            <div className="p-6 space-y-4 text-xs">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{activeGalleryModal.title}</h3>
                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  {activeGalleryModal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px]">
                <div>
                  <span className="font-semibold text-slate-700 block">Equipment Class:</span>
                  <span className="text-slate-900 font-mono">{activeGalleryModal.equipmentType}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Workpiece & Material:</span>
                  <span className="text-slate-900">{activeGalleryModal.workpiece}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveGalleryModal(null)}
                  className="px-4 py-2 border border-slate-300 rounded text-slate-700 text-xs font-semibold hover:bg-slate-100"
                >
                  Close
                </button>
                <Link
                  href={`/request-a-quotation?product=${encodeURIComponent(activeGalleryModal.equipmentType)}&specs=${encodeURIComponent(activeGalleryModal.workpiece)}`}
                  className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  <span>Request RFQ for This Machine Class</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
