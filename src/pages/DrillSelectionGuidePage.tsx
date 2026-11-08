import React, { useState, useEffect } from "react";
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
  ChevronDown,
  Printer,
  Sparkles,
  BookOpen,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";
import { ArticleHashtags } from "../components/ArticleHashtags";

export const DrillSelectionGuidePage: React.FC = () => {
  const { navigate } = useRouter();
  const { addItem } = useRfq();
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.proquanic.co.zw/blog/hss-cobalt-carbide-drills"
    );
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        "https://www.proquanic.co.zw/blog/hss-cobalt-carbide-drills"
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddDrillToRfq = (
    drillType: "HSS Jobber Drills (DIN 338)" | "HSCo 5% Cobalt Drills" | "Solid Carbide CNC Drills"
  ) => {
    if (drillType === "HSS Jobber Drills (DIN 338)") {
      addItem({
        title: "Standard HSS Metal-Cutting Jobber Drill Bits (DIN 338)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "High-Speed Steel M2 / 118° Point",
        quantity: "1",
        unit: "Set / Pcs",
        specifications:
          "General-purpose twist drills for mild steel, brass, aluminium, and structural steels. Specify diameters required (e.g. Ø1mm to Ø13mm in 0.5mm increments).",
      });
      setAddedItemName("HSS Jobber Drills");
    } else if (drillType === "HSCo 5% Cobalt Drills") {
      addItem({
        title: "HSCo / M35 5% Cobalt Heavy-Duty Drill Bits (DIN 338 / DIN 340)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "Cobalt Alloyed HSS-E (M35) / 135° Split Point",
        quantity: "1",
        unit: "Set / Pcs",
        specifications:
          "High hot-hardness cobalt alloy drills for high-tensile steels (EN19, EN24), stainless steel (304/316), and work-hardening materials. Self-centering split point.",
      });
      setAddedItemName("Cobalt M35 Drills");
    } else {
      addItem({
        title: "Solid Carbide Precision Metalworking Drills (Internal / External Coolant)",
        category: "Cutting and Machining Tools",
        partNumberOrGrade: "Micrograin Solid Carbide / TiAlN PVD Coated",
        quantity: "1",
        unit: "Pcs",
        specifications:
          "Production CNC drill for high-speed machining centers. Specify diameter, drill depth (3xD, 5xD, or 8xD), and whether through-tool coolant is required.",
      });
      setAddedItemName("Solid Carbide CNC Drills");
    }
    setTimeout(() => setAddedItemName(null), 3000);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your technical article on HSS, Cobalt, and Carbide drills. I would like to request technical advice and quotation for drilling tools for our workshop."
  )}`;

  const emailQuotationLink = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(
    "Quotation Enquiry: Industrial Drill Bits Requisition"
  )}&body=${encodeURIComponent(
    "Hello Proquanic Sales Desk,\n\nPlease provide quotation and availability for the following drilling tools:\n\n- Drill Type (HSS / Cobalt M35 / Solid Carbide):\n- Diameters & Quantities:\n- Workpiece Material being drilled:\n- Company Name & City (e.g. Bulawayo / Harare):\n\nThank you."
  )}`;

  const articleHashtags = [
    "MetalCuttingTools",
    "DrillBits",
    "EngineeringSuppliesBulawayo",
    "HSSDrills",
    "IndustrialSuppliesZimbabwe",
  ];

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
            <Link
              href="/products/cutting-machining-tools"
              className="hover:text-slate-900 transition-colors"
            >
              Cutting Tools
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              HSS vs Cobalt vs Carbide Drills
            </span>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors flex items-center gap-1 text-[11px]"
              title="Share article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? "Copied" : "Share"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors flex items-center gap-1 text-[11px]"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-10">
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
            <span className="bg-orange-100 px-2.5 py-0.5 rounded text-orange-700">
              Cutting Tools & Machining
            </span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Proquanic Technical Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            HSS, Cobalt or Carbide Drills? Understanding the Differences and Choosing the Right Drill for Steel
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Choosing a drill bit for metalworking involves more than selecting the correct diameter. Understand the metallurgical differences, hot hardness characteristics, and machine setup requirements before purchasing tools for your workshop.
          </p>
        </header>

        {/* Hero Visual Block */}
        <figure className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
            <img
              src="/images/blog/hss-cobalt-carbide-drills.jpg"
              alt="Comparative arrangement of HSS, cobalt-alloyed and solid carbide drill bits on a workshop bench"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-xs font-mono px-3 py-1 rounded">
              HSS (M2) vs Cobalt (M35) vs Solid Tungsten Carbide
            </div>
          </div>
        </figure>

        {/* Article Body */}
        <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-slate-700 leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">Introduction</h2>
            <p>
              Choosing a drill bit for metalworking in industrial workshops across Bulawayo, Harare, and the Midlands involves significantly more than selecting the correct hole diameter. The material used to manufacture the drill, the workpiece material, the machine type (manual pedestal drill vs. CNC machining centre), and the drilling conditions all directly determine the result.
            </p>
            <p>
              Three common options widely used in industrial metalworking are <strong>High-Speed Steel (HSS)</strong>, <strong>cobalt-alloyed High-Speed Steel (HSCo or HSS-E)</strong>, and <strong>solid carbide drills</strong>.
            </p>
            <p>
              Although all three are engineered to produce holes in metal, they possess fundamentally different metallurgical properties, thermal tolerances, and rigidity demands. Understanding these differences helps engineering workshops, fabricators, and procurement departments select suitable drilling tools rather than purchasing based on price or appearance alone.
            </p>
          </section>

          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs">
            <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-mono text-sm">1</span>
              <span>High-Speed Steel (HSS) Drills</span>
            </h2>
            <p>
              High-Speed Steel drills (typically manufactured from AISI M2 tool steel) are the workhorse of general engineering workshops. HSS offers a versatile combination of <strong>hardness and impact toughness</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Key Advantages:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li>High structural toughness tolerates vibration and handheld drilling</li>
                  <li>Can flex slightly without shattering when misalignment occurs</li>
                  <li>Cost-effective for general workshop maintenance and fabrication</li>
                  <li>Can be easily resharpened on standard workshop bench grinders</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Best Applications:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li>Mild steel (S275, S355, 1018) plates and structural hollow sections</li>
                  <li>Aluminium, brass, copper, and bronze non-ferrous alloys</li>
                  <li>Conventional pedestal drill presses, radial drills, and magnetic base drills</li>
                  <li>Low-volume maintenance and repair machining</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              Limitation: Standard HSS loses cutting edge hardness rapidly when temperatures exceed 500°C–550°C, leading to thermal softening and blunting when drilling tough alloy steels without copious flood coolant.
            </p>
          </section>

          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs">
            <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-mono text-sm">2</span>
              <span>Cobalt-Alloyed HSS Drills (HSCo / M35 / HSS-E)</span>
            </h2>
            <p>
              Cobalt-alloyed drills (most commonly <strong>M35 grade containing 5% cobalt</strong>, or M42 with 8% cobalt) represent a critical performance upgrade. Crucially, <strong>cobalt is incorporated directly into the steel matrix as an alloying element</strong> during molten manufacturing—it is not a surface coating that wears off.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-orange-50/50 border border-orange-200 rounded-lg space-y-2">
                <span className="font-bold text-orange-950 text-xs uppercase tracking-wider block">Key Advantages:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li>Superior <em>hot hardness</em>: maintains cutting hardness up to 600°C–650°C</li>
                  <li>Significantly higher resistance to abrasive flank wear</li>
                  <li>Usually supplied with 135° split points for immediate self-centering</li>
                  <li>Can drill high-tensile steels without premature burning</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50/50 border border-orange-200 rounded-lg space-y-2">
                <span className="font-bold text-orange-950 text-xs uppercase tracking-wider block">Recommended Uses:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li>Austenitic stainless steels (Grade 304, 316) that work-harden under pressure</li>
                  <li>Engineering alloy steels: EN19 (4140), EN24 (4340), and EN8 rounds</li>
                  <li>Cast iron, spring steels, and manganese wear plates</li>
                  <li>Drilling operations with limited coolant access or deep holes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs">
            <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-mono text-sm">3</span>
              <span>Solid Carbide Drills</span>
            </h2>
            <p>
              Solid carbide drills are sintered from tungsten carbide micrograins bonded with cobalt. They are fundamentally different from high-speed steels: they are ceramic-metallic composites with extreme hardness (often 1500–1800 HV, compared to 800–900 HV for HSS).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Key Advantages:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li>Can run at 3x to 5x higher cutting speeds (SFM / RPM) than HSS</li>
                  <li>Extreme rigidity produces superior hole tolerance (H7/H8) and straightness</li>
                  <li>Eliminates center drilling when using specialized 140° pyramid points</li>
                  <li>Often features internal through-coolant holes for rapid chip flushing</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Strict Requirements:</span>
                <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700">
                  <li><strong>Rigid CNC machine:</strong> Must not be used in hand drills or loose worn pillar drills</li>
                  <li><strong>Rigid workholding:</strong> Workpiece must be securely clamped in a precision vice or fixture</li>
                  <li><strong>Low runout toolholders:</strong> Hydraulic or precision collet chucks (runout &lt; 0.005mm)</li>
                  <li>Zero tolerance for deflection: lateral force will cause instantaneous tool fracture</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">4. Side-by-Side Comparison Matrix</h2>
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold font-mono">
                      <th className="p-3">Characteristic</th>
                      <th className="p-3">Standard HSS (M2)</th>
                      <th className="p-3">Cobalt HSS (M35 / 5% Co)</th>
                      <th className="p-3">Solid Carbide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Room Temp Hardness</td>
                      <td className="p-3">63 – 65 HRC</td>
                      <td className="p-3">65 – 67 HRC</td>
                      <td className="p-3">89 – 92 HRA (~75 HRC equiv)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Hot Hardness Limit</td>
                      <td className="p-3">~500°C – 550°C</td>
                      <td className="p-3">~600°C – 650°C</td>
                      <td className="p-3">Up to 900°C – 1000°C</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Impact Toughness</td>
                      <td className="p-3 text-emerald-700 font-bold">Highest (High flex tolerance)</td>
                      <td className="p-3 text-emerald-600">Moderate to High</td>
                      <td className="p-3 text-amber-700 font-medium">Low (Brittle under shock / vibration)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Operating Speeds (RPM)</td>
                      <td className="p-3">Baseline standard speeds</td>
                      <td className="p-3">20% – 40% faster than HSS</td>
                      <td className="p-3 font-bold text-slate-950">200% – 400% faster than HSS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Machine Suitability</td>
                      <td className="p-3">Manual drills, mag drills, radial drills, lathes</td>
                      <td className="p-3">Pedestal drills, radial drills, lathes, CNC</td>
                      <td className="p-3">Strictly rigid CNC & precision machine tools</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Workpiece Materials</td>
                      <td className="p-3">Mild steel, aluminium, plastics, soft brass</td>
                      <td className="p-3">Stainless steel, EN19, EN24, cast iron, structural steel</td>
                      <td className="p-3">Cast iron, hardened steels, aerospace alloys, mass production steels</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Initial Tool Cost</td>
                      <td className="p-3 font-mono">Lowest</td>
                      <td className="p-3 font-mono">Moderate (~1.5x - 2x HSS)</td>
                      <td className="p-3 font-mono">Highest (~4x - 8x HSS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">5. Considerations Before Confirming Your Drill Order</h2>
            <p>
              When requesting a quotation or selecting drilling tools for your workshop in Zimbabwe, review the following five parameters:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 text-sm block">1. Machine Spindle & Clamping Rigidity</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  If the operation will take place on a portable magnetic drill or an older workshop drill press with minor quill play, choose HSS or Cobalt. Never purchase expensive solid carbide drills for a setup that vibrates, flexes, or lacks positive mechanical feeds.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 text-sm block">2. Workpiece Material & Heat Sensitivity</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  For austenitic stainless steel (e.g. 304 food-grade tanks or 316 mining components), conventional HSS will quickly dull and glaze the hole surface. Cobalt M35 with a 135° split point is the recommended industrial standard.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 text-sm block">3. Hole Depth to Diameter Ratio (L/D)</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Standard jobber drills (DIN 338) are rated for depths up to 4x to 5x diameter. For deeper holes (e.g. lubrication channels in EN19 shafts), specify long series (DIN 340) or extra-length (DIN 1869) drills, and use appropriate pecking cycles to clear chips.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 text-sm block">4. Surface Coatings (TiN vs TiAlN)</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Titanium Nitride (TiN, gold) provides reduced friction for general steels. Titanium Aluminium Nitride (TiAlN, dark violet) forms a hard aluminium oxide layer under high drilling heat, making it ideal for CNC dry/semi-dry drilling and high-tensile steels.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              <span>Frequently Asked Questions About Industrial Drills</span>
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can I use solid carbide drills in a manual drill press or hand drill?",
                  a: "No. Solid carbide drills have virtually zero elasticity. Any deflection, vibration, hand wobble, or breakthrough backlash will immediately snap the cutting lips or fracture the tool body. Use high-toughness HSS or Cobalt M35 drills for manual machines.",
                },
                {
                  q: "How do I recognize genuine cobalt drill bits?",
                  a: "Genuine cobalt drills (HSCo / M35) are alloyed throughout, not coated. They typically have a bronze or dull gold heat-treated finish (or dark steam-tempered finish), an etched 'HSS-Co' or 'HSCo' stamp on the shank, and a 135° split point to eliminate walking.",
                },
                {
                  q: "Why do drill bits burn when drilling stainless steel in our workshop?",
                  a: "Stainless steel work-hardens when the drill rubs without biting. If spindle RPM is too high or feed pressure is hesitant, heat builds up rapidly, blunting the drill. Use a cobalt drill at 50% lower RPM than mild steel with steady, firm feed pressure and cutting oil.",
                },
                {
                  q: "Does Proquanic supply Morse Taper shank drills for radial arm drills?",
                  a: "Yes. In addition to straight shank jobber drills (DIN 338), Proquanic procures Morse Taper (MT1, MT2, MT3, MT4, MT5) shank twist drills according to DIN 345 for radial arm drills, heavy lathes, and pedestal drill presses across Zimbabwe.",
                },
              ].map((faq, idx) => {
                const isOpen = !!openFaqs[idx];
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-sm"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Topic Hashtags Section */}
          <div className="pt-4">
            <ArticleHashtags hashtags={articleHashtags} />
          </div>

          {/* Conclusion */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Conclusion & Procurement Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              For general mild steel fabrication, maintenance, and manual machine drilling, <strong>HSS (M2)</strong> provides the toughness needed to survive real-world workshop conditions. For high-tensile steels, EN19 shafting, and stainless steels, <strong>HSCo Cobalt (M35)</strong> delivers the essential thermal resistance to prevent burnt cutting edges. For high-volume production on rigid CNC machining centres, <strong>solid carbide</strong> delivers unmatched cycle times and hole precision.
            </p>
          </section>
        </div>

        {/* Cross-Category Navigation Links */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>Related Catalogue Categories & Technical Resources</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link
              href="/products/cutting-machining-tools"
              className="p-3.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Cutting & Machining Tools
                </div>
                <p className="text-slate-500 mt-1 text-[11px]">
                  Drill bits, solid carbide end mills, reamers, taps, and turning inserts.
                </p>
              </div>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1 text-[11px]">
                Explore Category <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/why-drill-bits-burn-or-break"
              className="p-3.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Why Drill Bits Burn or Break
                </div>
                <p className="text-slate-500 mt-1 text-[11px]">
                  6 common workshop mistakes: speed, feed, chisel edge, and cooling.
                </p>
              </div>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1 text-[11px]">
                Read Diagnostic Guide <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/why-end-mills-break"
              className="p-3.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Why End Mills Break Guide
                </div>
                <p className="text-slate-500 mt-1 text-[11px]">
                  Troubleshooting tool overhang, chatter suppression, and milling feeds.
                </p>
              </div>
              <span className="text-orange-600 font-semibold mt-2 inline-flex items-center gap-1 text-[11px]">
                Read Guide <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Requisition Call to Action Box */}
        <aside className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-md border border-slate-800">
          <div className="space-y-2">
            <span className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider block">
              Direct B2B Procurement Desk · Bulawayo
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Source Industrial Drills for Your Workshop
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Proquanic procures jobber drills, long series drills, Morse taper drills, and solid carbide tools from verified manufacturing channels. We supply engineering workshops across Bulawayo, Harare, and nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => handleAddDrillToRfq("HSS Jobber Drills (DIN 338)")}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors text-left flex flex-col justify-between"
            >
              <span className="font-bold">Add HSS Drills (DIN 338)</span>
              <span className="text-[10px] text-slate-400 mt-1">General mild steel drilling</span>
            </button>
            <button
              onClick={() => handleAddDrillToRfq("HSCo 5% Cobalt Drills")}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors text-left flex flex-col justify-between"
            >
              <span className="font-bold">Add Cobalt M35 Drills</span>
              <span className="text-[10px] text-slate-400 mt-1">For EN19 & Stainless steel</span>
            </button>
            <button
              onClick={() => handleAddDrillToRfq("Solid Carbide CNC Drills")}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors text-left flex flex-col justify-between"
            >
              <span className="font-bold">Add Carbide CNC Drills</span>
              <span className="text-[10px] text-slate-400 mt-1">High-speed production machining</span>
            </button>
          </div>

          {addedItemName && (
            <div className="p-3 bg-emerald-900/60 border border-emerald-500/60 text-emerald-200 text-xs font-semibold rounded-lg flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Added {addedItemName} to RFQ basket!</span>
              <Link href="/request-a-quotation" className="underline font-bold text-white ml-2">
                View RFQ Form →
              </Link>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quotation"
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </Link>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded shadow transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Technical Sourcing</span>
              </a>
            </div>

            <span className="text-[11px] text-slate-400 font-mono">
              Delivery to Bulawayo & all Zimbabwe centres
            </span>
          </div>
        </aside>

        {/* Related Technical Articles */}
        <div className="pt-6 border-t border-slate-200">
          <RelatedArticles
            currentSlug="/blog/hss-cobalt-carbide-drills"
            count={3}
          />
        </div>
      </article>
    </div>
  );
};
