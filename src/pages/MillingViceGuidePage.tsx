import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../utils/router";
import { COMPANY } from "../config/company";
import { useRfq } from "../context/RfqContext";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Copy,
  Check,
  Share2,
  Printer,
  Phone,
  Mail,
  Wrench,
  CheckSquare,
  Sparkles,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowLeft,
  ShieldCheck,
  Layers,
  Sliders,
  Scale,
  Award,
  Zap,
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const MillingViceGuidePage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // FAQ Accordion state (all open by default for readability & SEO, toggleable)
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    // Canonical link management
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.proquanic.co.zw/blog/how-to-choose-milling-machine-vice"
    );
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        "https://www.proquanic.co.zw/blog/how-to-choose-milling-machine-vice"
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddViceToRfq = (
    viceType:
      | "150mm (6\") Precision AngLock Milling Vice"
      | "150mm CNC Matched Pair Milling Vices"
      | "Hydraulic Precision Milling Machine Vice"
  ) => {
    if (viceType === "150mm (6\") Precision AngLock Milling Vice") {
      addItem({
        title: "150mm (6\") Precision AngLock Style Milling Machine Vice",
        category: "Machine Tooling and Workholding",
        partNumberOrGrade: "80,000 PSI Ductile Iron / Flame Hardened Bed",
        quantity: "1",
        unit: "Piece",
        specifications:
          "Jaw width: 150mm (6 inch); Jaw opening: 220mm+ (external jaw mounting); Bed parallelism within 0.015mm; Downward pull-down jaw mechanism to eliminate jaw lift; Complete with swivel base or rigid base.",
      });
      setAddedItemName("6\" AngLock Precision Milling Vice");
    } else if (viceType === "150mm CNC Matched Pair Milling Vices") {
      addItem({
        title: "Matched Pair Precision CNC Milling Machine Vices (150mm / 6\")",
        category: "Machine Tooling and Workholding",
        partNumberOrGrade: "Precision Ground CNC Series / Matched Bed Height",
        quantity: "1",
        unit: "Pair",
        specifications:
          "Bed height matched within ±0.01mm for dual-vice long workpiece setups; Ground flat sides for multi-vice gang mounting on CNC VMC beds; Hardened jaws and alignment tenons.",
      });
      setAddedItemName("Matched Pair CNC Vices");
    } else {
      addItem({
        title: "Hydraulic Precision Heavy-Duty Machine Vice (150mm / 200mm)",
        category: "Machine Tooling and Workholding",
        partNumberOrGrade: "Hydro-Mechanical Booster Clamping System",
        quantity: "1",
        unit: "Piece",
        specifications:
          "Mechanical leadscrew pre-clamping with internal hydraulic pressure intensifier; Clamping force adjustable up to 45 kN (4,500 kgf); Anti-lift spherical jaw design for heavy milling.",
      });
      setAddedItemName("Hydraulic Precision Machine Vice");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your guide 'How to Choose the Right Milling Machine Vice' and would like to request technical specifications and pricing for workshop machine vices."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id":
                  "https://www.proquanic.co.zw/blog/how-to-choose-milling-machine-vice#article",
                isPartOf: {
                  "@type": "WebSite",
                  "@id": "https://www.proquanic.co.zw/#website",
                  name: "Proquanic (Pvt) Ltd",
                  url: "https://www.proquanic.co.zw",
                },
                headline:
                  "How to Choose the Right Milling Machine Vice: A Practical Buying Guide",
                description:
                  "Learn how to choose a milling machine vice by jaw width, opening capacity, clamping force, accuracy, mounting and machining requirements.",
                image:
                  "https://www.proquanic.co.zw/images/categories/machine-tooling-workholding.jpg",
                datePublished: "2026-11-05T08:00:00+02:00",
                dateModified: "2026-11-05T08:00:00+02:00",
                author: {
                  "@type": "Organization",
                  name: "Proquanic (Pvt) Ltd Technical Procurement Desk",
                  url: "https://www.proquanic.co.zw",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Proquanic (Pvt) Ltd",
                  url: "https://www.proquanic.co.zw",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.proquanic.co.zw/favicon.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.proquanic.co.zw/blog/how-to-choose-milling-machine-vice",
                },
                articleSection: "Machine Tooling and Workholding",
                keywords:
                  "milling machine vice, machine vice, milling machine vise, CNC milling vice, machine vice types, workholding equipment, milling machine workholding",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.proquanic.co.zw/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog & Engineering Guides",
                    item: "https://www.proquanic.co.zw/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "How to Choose a Milling Machine Vice",
                    item:
                      "https://www.proquanic.co.zw/blog/how-to-choose-milling-machine-vice",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors">
              Blog & Engineering Guides
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              How to Choose a Milling Machine Vice
            </span>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
              title="Share or copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
        {/* Header Block */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <Link
              href="/products/machine-tooling-workholding"
              className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-bold px-2.5 py-1 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Machine Tooling and Workholding</span>
            </Link>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 font-medium">10 min read</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 font-medium">Published November 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How to Choose the Right Milling Machine Vice: A Practical Buying Guide
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
            Choosing a milling machine vice involves more than checking its jaw opening. Understand the differences in vice types, clamping capacity, accuracy, mounting and application before purchasing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-slate-600 border-t border-slate-200">
            <span className="font-semibold text-slate-800">Primary Technical Topics:</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              Jaw Lift Elimination
            </span>
            <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              AngLock vs CNC vs Hydraulic
            </span>
            <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              Clamping Tonnage
            </span>
            <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              Bed Parallelism Tolerances
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs space-y-2">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/images/categories/machine-tooling-workholding.jpg"
              alt="Precision milling machine vice and workholding tooling set up for workshop machining"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <figcaption className="px-4 py-2.5 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
            <span>
              Industrial precision milling machine vice with flame-hardened bed ways and pull-down anti-lift clamping mechanism.
            </span>
            <span className="font-mono text-slate-400 text-[11px] hidden sm:inline">
              Workholding Accuracy Standard: ±0.01mm
            </span>
          </figcaption>
        </figure>

        {/* Action Callout Box */}
        <aside className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Workshop Tooling & Machine Vices in Stock</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
              Proquanic supplies precision 4&quot;, 6&quot;, and 8&quot; AngLock style milling vices, matched CNC sets, and heavy-duty hydraulic vices to engineering workshops across Zimbabwe.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/request-a-quotation"
              className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow transition-colors"
            >
              Request Vice Quotation
            </Link>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded shadow transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </aside>

        {/* Body Content */}
        <div className="space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              Introduction: Why Workholding Dictates Machining Accuracy
            </h2>
            <p>
              In any milling operation—whether conducted on a traditional knee-type turret mill or a multi-axis CNC machining centre—the machine tool, the cutting tool, and the workholding form an interdependent structural circuit. You can invest in a high-rigidity machine casting and premium carbide cutting tools, but if your workpiece moves by even 0.02 mm under cutting loads, dimensional precision, surface finish, and tool life are immediately compromised.
            </p>
            <p>
              The milling machine vice is by far the most ubiquitous workholding fixture in industrial engineering workshops. However, purchasing departments and machine operators frequently treat vice selection as an afterthought, simply asking for &ldquo;a 6-inch vice&rdquo; without evaluating clamping dynamics, bed parallelism, body tensile strength, or jaw lift mitigation.
            </p>
            <p>
              This comprehensive engineering guide examines how milling machine vices function, breaks down the key vice designs used across modern workshops, details critical technical selection criteria, and provides practical checklists for selecting the correct unit for your specific machining requirements.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              1. The Physics of Clamping: Understanding &ldquo;Jaw Lift&rdquo;
            </h2>
            <p>
              The single greatest technical challenge inherent to mechanical machine vices is <strong>movable jaw lift</strong>. Understanding this phenomenon is essential before comparing vice models.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-lg space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>The Mechanical Cause of Jaw Lift</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                When a conventional vice screw pushes against the movable jaw, the contact point of the leadscrew is located <em>below</em> the clamping face of the jaw where the workpiece is held. This geometric offset creates a severe rotational bending moment (torque). The movable jaw tries to rotate upwards and backwards, lifting the workpiece off the precision parallels resting on the vice bed.
              </p>
            </div>

            <p>
              When a workpiece lifts during clamping:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Loss of Parallelism:</strong> The top milled face is no longer parallel to the bottom clamped face. Even if the part was tapped down firmly before tightening, high clamping torque lifts it several hundredths of a millimetre.
              </li>
              <li>
                <strong>Workpiece Vibration and Chatter:</strong> Because the bottom of the workpiece is no longer seated flat against the hardened bed or parallels, the workpiece resonates under cutter impact, leaving chatter marks on the finished surfaces.
              </li>
              <li>
                <strong>Catastrophic End Mill Breakage:</strong> Sudden harmonic vibration and workpiece slippage are primary drivers of micro-chipping and shank fracture on solid carbide cutters. (See our detailed guide on{" "}
                <Link
                  href="/blog/why-end-mills-break"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                >
                  Why End Mills Break: 7 Machining Mistakes That Can Destroy Cutting Tools
                </Link>
                ).
              </li>
            </ul>

            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900">Drill Press Vices vs Milling Vices:</strong> Under no circumstances should a standard drill press vice or fabricated bench vice be mounted to a milling machine table. Drill press vices lack hardened ways, precision ground reference faces, and anti-lift geometries. Milling cutting forces are predominantly lateral and dynamic; mounting a fabricated or drill vice invites catastrophic workpiece ejection and operator hazard.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              2. Major Types of Milling Machine Vices
            </h2>
            <p>
              Different machining environments demand distinct vice architectures. Selecting the right vice category depends on whether you run low-volume repair work on a manual knee mill or high-volume production on a CNC vertical machining centre (VMC).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1: AngLock */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                    Industry Benchmark
                  </span>
                  <Award className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  AngLock / Pull-Type Precision Vices
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pioneered by Kurt Workholding and now manufactured by top tooling builders worldwide, AngLock vices incorporate a precision ground spherical segment inside the movable jaw. As horizontal force is applied through the screw, the spherical segment directs a substantial component of force (typically 1 lb of downward force for every 2 lbs of forward force) downwards at approximately 45 degrees.
                </p>
                <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-100">
                  <div><strong>Best for:</strong> General workshop milling, toolrooms, and heavy manual/CNC milling.</div>
                  <div><strong>Key advantage:</strong> Reduces movable jaw lift to under 0.0005&quot; (0.01 mm).</div>
                </div>
              </div>

              {/* Card 2: CNC Precision Production Vices */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    High Production
                  </span>
                  <Sliders className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  CNC Precision Production Vices
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered specifically for CNC beds. Unlike manual vices that feature wide side hold-down flanges and integral swivel bases, CNC vices have precision ground flat sides and narrow footprints. This enables multiple vices to be mounted side-by-side (gang mounting) without wasting table travel.
                </p>
                <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-100">
                  <div><strong>Best for:</strong> CNC machining centres, multi-part fixturing, tombstone setups.</div>
                  <div><strong>Key advantage:</strong> Matched bed heights (within ±0.01mm) allow long components to bridge across two vices.</div>
                </div>
              </div>

              {/* Card 3: Hydraulic & Hydro-Mechanical Vices */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Maximum Clamping Tonnage
                  </span>
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Hydraulic & Hydro-Mechanical Vices
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  These vices use an internal hydraulic booster or cylinder to amplify mechanical screw torque. The operator winds the screw until the jaw contacts the workpiece, after which the hydraulic mechanism engages to produce uniform clamping forces between 30 kN and 80 kN with minimal physical effort.
                </p>
                <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-100">
                  <div><strong>Best for:</strong> Heavy-duty roughing, tough alloy steels (EN19, 4140), repeat batch work.</div>
                  <div><strong>Key advantage:</strong> Consistent clamping force prevents operator fatigue and part movement.</div>
                </div>
              </div>

              {/* Card 4: Double-Station Vices */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                    Dual Part Capacity
                  </span>
                  <Layers className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Double-Station & Multi-Station Vices
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Featuring a central fixed jaw and two independent movable jaws, double-station vices allow two workpieces to be clamped simultaneously on a single vice body. Advanced models equalise clamping pressure even when raw stock dimensions vary by several millimetres between the two stations.
                </p>
                <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-100">
                  <div><strong>Best for:</strong> Maximising spindle run-time per cycle on CNC vertical mills.</div>
                  <div><strong>Key advantage:</strong> Doubles part density per table setup.</div>
                </div>
              </div>
            </div>

            {/* Note on Swivel Bases */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">
                Engineering Perspective on Swivel Bases
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Many conventional milling vices are sold with an optional 360-degree graduated swivel base. While a swivel base provides convenience for angular milling on manual knee mills, it introduces a major structural trade-off: each additional joint interface diminishes overall setup rigidity by 20% to 35% and consumes valuable Z-axis spindle daylight (stack-up height). In modern CNC workshops, angular toolpaths and rotated work coordinate systems (G68) make swivel bases largely obsolete. For maximum rigidity, mount the vice body directly to the mill table.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              3. Critical Technical Parameters & Sizing Criteria
            </h2>
            <p>
              When evaluating technical specification sheets from manufacturers like Kurt, Gerardi, Bison, or Vertex, pay close attention to the following parameters:
            </p>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  Jaw Width: 100 mm (4&quot;), 150 mm (6&quot;), or 200 mm (8&quot;)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  <strong>150 mm (6-inch)</strong> is the undisputed universal standard for 90% of engineering workshops. It fits standard knee mills (like Bridgeport, King Rich, or Turret Mills) and 40-taper CNC vertical machining centres without hanging excessively over table edges. 100 mm (4-inch) vices suit smaller toolroom mills and drill/mill machines, whereas 200 mm (8-inch) vices are reserved for large 50-taper bed mills and heavy fabrication machining.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  Jaw Opening Capacity (Internal vs External Positions)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Always verify both internal and external jaw mounting capacities. On quality precision vices, the hardened jaw plates can be dismounted and reattached to the outer steps of the jaw bodies. For example, a 6-inch vice with a 220 mm standard internal opening can frequently clamp plates up to 350 mm or 400 mm wide when configured in the external positions.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  Body Material & Tensile Strength: 80,000 PSI Ductile Iron vs Grey Cast Iron
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Budget vices are often cast from grade 20/25 grey cast iron (20,000–30,000 PSI tensile strength), which cracks or flexes permanently under high tightening loads. Premium vices are cast from <strong>80,000 PSI Ductile / Nodular Iron (Spheroidal Graphite Iron)</strong>. Ductile iron provides up to three times greater rigidity and energy absorption, dampening cutting vibrations and preventing bed bow when clamping heavy steel components.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  Flame Hardened & Ground Slideways
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  During daily workshop operation, chips, abrasive swarf, and hardened burrs inevitably lodge between the movable jaw and the vice bed. If the slideways are soft unhardened iron, chips gall the surface, destroying bed flatness. Look for vices with slideways flame-hardened or induction-hardened to <strong>45–55 HRC</strong> and ground to mirror tolerances.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  Table Mounting Tenons (Keyways)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Quality vices feature precision-ground 14 mm, 16 mm, or 18 mm keyway slots machined into the underside of the bed. Fitting hardened alignment keys (tenons) allows the operator to drop the vice into the machine table&apos;s T-slot and instantly achieve alignment within 0.02 mm across the X-axis without spending 20 minutes with a dial indicator.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              4. Technical Comparison: Machine Vice Types Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare vice categories across key engineering metrics to align with your shop floor requirements:
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-3">Vice Architecture</th>
                    <th className="p-3">Clamping Force</th>
                    <th className="p-3">Bed Repeatability</th>
                    <th className="p-3">Jaw Lift Resistance</th>
                    <th className="p-3">Primary Machine Type</th>
                    <th className="p-3">Relative Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">Standard Mechanical Vice</td>
                    <td className="p-3 text-slate-600">15 – 25 kN</td>
                    <td className="p-3 text-slate-600">±0.03 mm</td>
                    <td className="p-3 text-red-600 font-semibold">Poor (Significant lift)</td>
                    <td className="p-3 text-slate-600">Manual Turret Mills</td>
                    <td className="p-3 font-mono text-emerald-700">Economy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-orange-50/30">
                    <td className="p-3 font-bold text-slate-900 flex items-center gap-1.5">
                      <span>AngLock Style Precision</span>
                      <span className="text-[10px] bg-orange-200 text-orange-800 px-1.5 py-0.2 rounded font-mono">Recommended</span>
                    </td>
                    <td className="p-3 text-slate-600">25 – 45 kN</td>
                    <td className="p-3 text-slate-600 font-semibold">±0.010 mm</td>
                    <td className="p-3 text-emerald-600 font-semibold">Excellent (&lt;0.01 mm)</td>
                    <td className="p-3 text-slate-600">Manual Mills &amp; CNC VMCs</td>
                    <td className="p-3 font-mono text-slate-800">Moderate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">CNC Matched Production</td>
                    <td className="p-3 text-slate-600">30 – 50 kN</td>
                    <td className="p-3 text-slate-600 font-semibold">±0.005 mm (Matched)</td>
                    <td className="p-3 text-emerald-600 font-semibold">Superior (&lt;0.005 mm)</td>
                    <td className="p-3 text-slate-600">CNC Machining Centres</td>
                    <td className="p-3 font-mono text-slate-800">Mid to High</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">Hydro-Mechanical Heavy-Duty</td>
                    <td className="p-3 text-slate-600 font-semibold">45 – 80 kN</td>
                    <td className="p-3 text-slate-600">±0.015 mm</td>
                    <td className="p-3 text-emerald-600 font-semibold">Excellent</td>
                    <td className="p-3 text-slate-600">Heavy Bed Mills &amp; CNCs</td>
                    <td className="p-3 font-mono text-amber-700">High</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">Double-Station CNC Vice</td>
                    <td className="p-3 text-slate-600">20 – 35 kN / station</td>
                    <td className="p-3 text-slate-600">±0.010 mm</td>
                    <td className="p-3 text-emerald-600 font-semibold">Very High</td>
                    <td className="p-3 text-slate-600">High-Volume CNC Production</td>
                    <td className="p-3 font-mono text-amber-700">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Practical Buying Checklist Table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              5. The Workshop Vice Selection Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Before submitting a quotation request or purchasing order, verify these seven mechanical specifications:
            </p>

            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>1. Table Travel vs Vice Length</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Ensure vice body does not collide with machine column or bellows at full Y-axis travel.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>2. T-Slot Size &amp; Keyway Width</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Measure machine table T-slots (standard 14mm, 16mm, or 18mm) and match alignment tenons.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>3. Vertical Daylight (Z-Axis Clearance)</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Calculate total stack-up height: Table + Vice bed + Workpiece + Tool length at maximum tool change clearance.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>4. Material Hardness &amp; Cutting Torques</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    If milling pre-hardened steels (e.g., EN19T or Hardox), ensure clamping force exceeds 35 kN to prevent part shifting.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>5. Soft Jaw Availability</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Ensure the vice accepts standard bolt-on machinable soft jaws (aluminium or mild steel) for holding complex contoured parts.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>6. Bed Height Matching (Multi-Vice Setup)</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    If purchasing two vices for holding long shafts or plates, order them as a certified factory-matched pair within ±0.01 mm.
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>7. Swarf Protection &amp; Fully Enclosed Leadscrew</span>
                  </div>
                  <span className="text-slate-600 text-xs">
                    Check that the leadscrew is covered by a brass or telescopic metal shield to prevent chip accumulation and screw seizing.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Setup & Maintenance */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              6. Setup, Tramming & Maintenance Best Practices
            </h2>
            <p>
              Even the highest-precision vice will produce out-of-square parts if installed incorrectly on the mill table. Follow these standard engineering shop procedures:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-orange-600" />
                  <span>Deburr and Stone Both Surfaces</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Before mounting, sweep both the mill table and the vice bottom with a precision Arkansas oil stone. Even a microscopic 0.02 mm raised burr or embedded chip can tip the vice bed out of square by several tenths of a degree.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-orange-600" />
                  <span>Clocking the Fixed Jaw</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Always indicate (clock) the <strong>fixed jaw</strong>, never the movable jaw. Snug down the left mounting clamp lightly, place a dial test indicator (DTI) on the spindle, traverse along X-axis, and tap the right side with a brass or lead mallet until needle movement is under 0.005 mm across the jaw width. Then torque clamps sequentially.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Parallels &amp; Deadblow Seating</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  When clamping stock on precision parallels, tighten the vice handle and then strike the top of the workpiece with a copper or deadblow hammer. Test the parallels underneath by hand: both must be trapped tight and unmoveable. If a parallel wiggles, the workpiece has lifted and must be reclamped.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Corrosion &amp; Swarf Maintenance</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Water-soluble synthetic coolants can migrate beneath the vice bed and cause galvanic corrosion if left bolted for months. Dismount the vice every 4 to 6 weeks, stone surfaces clean, and apply a light film of ISO VG 68 slideway oil before re-indicating.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: External Resources */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              7. Authoritative Industry References &amp; Technical Manuals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              For engineers, toolroom foremen, and CNC programmers seeking in-depth manufacturer data sheets and workholding engineering principles, we recommend consulting these primary resources:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <a
                href="https://www.kurtworkholding.com/wp-content/uploads/2020/05/2015-Kurt-Vise-Selection-Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white border border-slate-200 hover:border-orange-400 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                    <span>Kurt Vise Selection &amp; Application Guide</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Comprehensive engineering treatise covering AngLock force vectors, deflection calculations, and jaw lift test data from the original inventor of precision pull-type vices.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-orange-600 font-semibold pt-2">
                  PDF Technical Manual · kurtworkholding.com
                </span>
              </a>

              <a
                href="https://haascnc.com/service/online-manuals/haas-tooling---service-manual/mill-workholding.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white border border-slate-200 hover:border-orange-400 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                    <span>Haas Automation Mill Workholding Manual</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Official Haas CNC service manual on manual vise mounting, table T-slot torque specifications, pneumatic booster integration, and preventative maintenance schedules.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-orange-600 font-semibold pt-2">
                  Service Documentation · haascnc.com
                </span>
              </a>

              <a
                href="https://www.kurtworkholding.com/product/kurt-manual-vise-10-w-9-75-opening/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white border border-slate-200 hover:border-orange-400 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                    <span>Kurt D100 Heavy-Duty Manual Vise Specifications</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dimensional drawing and clamping tonnage charts for high-capacity 10-inch manual vices engineered for large machining centres and heavy production.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-orange-600 font-semibold pt-2">
                  Product Blueprint · kurtworkholding.com
                </span>
              </a>

              <a
                href="https://www.haascnc.com/video/workholding.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white border border-slate-200 hover:border-orange-400 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                    <span>Haas CNC Workholding Best Practices Video</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Demonstration of clocking vices on CNC tables, avoiding cantilever clamp deflections, and setting work coordinate datums accurately.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-orange-600 font-semibold pt-2">
                  Video Demonstration · haascnc.com
                </span>
              </a>
            </div>
          </section>

          {/* Section 8: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-3">
              {/* FAQ 1 */}
              <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>Can I mount two vices on one machine table to hold long steel plates?</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaqs[0] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqs[0] && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    Yes, but only if the vices are purchased as a certified <strong>factory-matched pair</strong> or ground together after purchase. If one vice bed is 0.05 mm higher than the other, clamping a flat plate across them will bow the plate or create severe vibration. Both vices must also be trammed in line using a single long straightedge or dial indicator swept along the full X-travel.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>What is the difference between hard jaws and soft jaws?</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaqs[1] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqs[1] && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    Hard jaws are hardened steel plates (55–60 HRC) ground parallel, intended for clamping square raw stock, billets, and standard rectangular workpieces. Soft jaws are made from unhardened mild steel or 6061-T6 aluminium. Machinists machine pockets or negative profiles directly into soft jaws on the mill, providing 100% conformal clamping for irregularly shaped castings, turned shafts, or fragile parts without leaving clamp marks.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>How much clamping torque should be applied to a 150mm (6-inch) vice?</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaqs[2] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqs[2] && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    Most 150mm mechanical vices are designed for a handle torque of 55 to 65 Nm (40 to 48 ft-lbs), generating approximately 25 to 35 kN (2,500 to 3,500 kgf) of clamping force. Never use an extension pipe (&ldquo;cheater bar&rdquo;) or hammer on a vice handle; doing so strips leadscrew threads, cracks ductile iron body nuts, and bows the vice bed permanently. If higher holding force is required, upgrade to a hydraulic vice.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>Does Proquanic supply spare jaws, swivel bases, and replacement leadscrews?</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaqs[3] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqs[3] && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    Yes. Under our{" "}
                    <Link
                      href="/products/machine-tooling-workholding"
                      className="text-orange-600 font-semibold hover:underline"
                    >
                      Machine Tooling and Workholding catalogue
                    </Link>
                    , Proquanic supplies precision hardened replacement jaws, aluminium soft jaws, precision parallels sets, swivel bases, thrust bearings, and alignment tenon keys tailored to industrial workshop needs across Zimbabwe.
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Section 9: RFQ Quick-Add Section */}
          <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6 border border-slate-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                Industrial Workholding Procurement
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Request Specifications or Pricing for Workshop Vices
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Select your required machine vice configuration below to add it directly to your Request for Quotation (RFQ), or submit your custom machine bed dimensions.
              </p>
            </div>

            {/* Quick Add Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() =>
                  handleAddViceToRfq("150mm (6\") Precision AngLock Milling Vice")
                }
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500 rounded text-left transition-all group"
              >
                <div className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                  6&quot; (150mm) AngLock Vice
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  80k PSI Ductile Iron · Anti-Lift · Standard Knee Mill
                </div>
                <div className="mt-3 text-xs font-semibold text-orange-400 flex items-center gap-1">
                  <span>Add to RFQ</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={() =>
                  handleAddViceToRfq("150mm CNC Matched Pair Milling Vices")
                }
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500 rounded text-left transition-all group"
              >
                <div className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                  150mm Matched CNC Pair
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Ground Sides · Height Matched ±0.01mm · CNC VMC
                </div>
                <div className="mt-3 text-xs font-semibold text-orange-400 flex items-center gap-1">
                  <span>Add to RFQ</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={() =>
                  handleAddViceToRfq("Hydraulic Precision Milling Machine Vice")
                }
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500 rounded text-left transition-all group"
              >
                <div className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                  Hydraulic Heavy Vice
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  45 kN Booster · Heavy Roughing · Tough Steels
                </div>
                <div className="mt-3 text-xs font-semibold text-orange-400 flex items-center gap-1">
                  <span>Add to RFQ</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {addedItemName && (
              <div className="p-3 bg-emerald-900/80 border border-emerald-500 text-emerald-200 text-xs rounded flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong>{addedItemName}</strong> successfully added to your quotation requisition list!
                  </span>
                </span>
                <Link
                  href="/request-a-quotation"
                  className="font-bold text-white underline hover:text-emerald-300 ml-3"
                >
                  View RFQ
                </Link>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/request-a-quotation"
                className="w-full sm:w-auto px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded shadow text-center transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Go to Formal RFQ Form</span>
              </Link>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded shadow text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Instant WhatsApp Technical Enquiry (+263 790 420 836)</span>
              </a>
            </div>
          </section>
        </div>

        {/* Cross-Category Navigation Links */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>Related Catalogue Categories &amp; Technical Guides</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link
              href="/products/machine-tooling-workholding"
              className="p-3 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
            >
              <div className="font-bold text-slate-900">
                Machine Tooling &amp; Workholding
              </div>
              <p className="text-slate-500 mt-1 text-[11px]">
                Milling vices, rotary tables, chucks, collet chucks, and clamping kits.
              </p>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1">
                Explore Category <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/products/cutting-machining-tools"
              className="p-3 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
            >
              <div className="font-bold text-slate-900">
                Cutting &amp; Machining Tools
              </div>
              <p className="text-slate-500 mt-1 text-[11px]">
                Solid carbide end mills, indexable face mills, drills, and turning inserts.
              </p>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1">
                Explore Category <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/why-end-mills-break"
              className="p-3 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
            >
              <div className="font-bold text-slate-900">
                Why End Mills Break Guide
              </div>
              <p className="text-slate-500 mt-1 text-[11px]">
                Troubleshooting tool overhang, chatter suppression, and setup rigidity.
              </p>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1">
                Read Guide <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Related Articles Component */}
        <div className="pt-6 border-t border-slate-200">
          <RelatedArticles
            currentSlug="/blog/how-to-choose-milling-machine-vice"
            count={3}
          />
        </div>
      </article>
    </div>
  );
};
