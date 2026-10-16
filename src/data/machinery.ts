import { MachineryItem } from "../types";

export const MACHINERY_DISCLAIMER =
  "Proquanic supplies new and quality-inspected industrial machinery and equipment to exact client engineering specifications. We do not maintain speculative retail showroom stock; rather, we assess operational requirements, source verified machine tools and equipment through established international manufacturing channels, handle freight logistics, and deliver to site. Submit your equipment requirements or target component drawings for comprehensive assessment and quotation.";

export const MACHINERY_CATEGORIES: MachineryItem[] = [
  {
    id: "cnc-lathes-turning",
    slug: "cnc-lathes-turning-centers",
    title: "CNC Lathes & Slant-Bed Turning Centers",
    category: "Metal Cutting Machinery",
    description:
      "Precision horizontal slant-bed CNC lathes and multi-axis turning centers with hydraulic chucking, programmable tailstocks, and 8 to 12-station servo tool turrets.",
    typicalCapacity: "Swing over bed 400mm to 800mm; turning length 500mm to 2000mm.",
    specifications: {
      "Spindle Bore Options": "Ø 52mm, Ø 66mm, Ø 86mm, Ø 105mm big-bore",
      "Control Systems Supported": "Fanuc, Siemens, or Syntec CNC controls",
      "Bed Construction": "Heavy one-piece 30° / 45° cast iron slant bed with high vibration dampening",
      "Chuck Sizes": "8-inch, 10-inch, 12-inch hydraulic 3-jaw chucks",
    },
    keyCapabilities: [
      "High-precision repetitive shaft and bushing turning",
      "Rigid threading, grooving, and contour profiling",
      "Live tooling options for cross-milling and off-center drilling",
      "Integrated automatic chip conveyor and high-pressure coolant",
    ],
    image: "/images/categories/machinery-equipment.jpg",
  },
  {
    id: "vertical-machining-centers",
    slug: "vertical-machining-centers-vmc",
    title: "Vertical Machining Centers (VMC 3-Axis & 4-Axis)",
    category: "CNC Milling Machinery",
    description:
      "Rigid C-frame vertical machining centers engineered for precision mold-making, production milling, pocketing, tapping, and complex fabrication.",
    typicalCapacity: "X-axis travel from 650mm to 1600mm; table loads up to 1500 kg.",
    specifications: {
      "Spindle Taper": "BT40 or BT50 with through-spindle coolant preparation",
      "Spindle Speed Range": "8,000 to 12,000 RPM direct-drive or belt-drive",
      "Tool Changer (ATC)": "24-tool arm-type automatic tool changer (1.8s tool-to-tool)",
      "Guideway Types": "Heavy roller linear guideways or hardened box ways",
    },
    keyCapabilities: [
      "Die and mold machining with high dynamic precision",
      "Rigid tapping in tough alloy and stainless steels",
      "Optional 4th-axis rotary table integration",
      "Full enclosure with safety interlocks and oil-water separator",
    ],
    image: "/images/categories/machine-tooling-workholding.jpg",
  },
  {
    id: "conventional-lathes",
    slug: "conventional-centre-lathes",
    title: "Conventional Heavy-Duty Centre Lathes",
    category: "Manual Machine Tools",
    description:
      "Rugged universal gap-bed centre lathes built for repair workshops, maintenance facilities, agricultural implement repair, and low-volume shaft manufacture.",
    typicalCapacity: "Swing over bed 360mm to 1000mm; distance between centres 1000mm to 4000mm.",
    specifications: {
      "Spindle Bore": "52mm to 130mm through-hole",
      "Bed Guideways": "Induction hardened and precision ground Meehanite bed ways (min 400mm width)",
      "Threading Capabilities": "Metric, Imperial Whitworth, Diametral, and Module thread cutting without change-gear swapping",
      "Readout": "2-Axis digital readout (DRO) with glass scales included",
    },
    keyCapabilities: [
      "Jobbing workshop maintenance and repair turning",
      "Large-diameter flange turning with removable gap piece",
      "Taper turning with integrated taper turning attachment",
      "Heavy stock removal with robust mechanical clutches",
    ],
    image: "/images/categories/steel-products.jpg",
  },
  {
    id: "industrial-bandsaws",
    slug: "heavy-duty-horizontal-bandsaws",
    title: "Heavy-Duty Horizontal Cut-Off Bandsaws",
    category: "Sawing Machinery",
    description:
      "Semi-automatic and fully automatic scissor-type and dual-column horizontal bandsaws engineered for fast, accurate sectioning of solid billets and structural bundles.",
    typicalCapacity: "Round cutting capacity Ø 280mm to Ø 600mm; rectangular up to 600 x 600mm.",
    specifications: {
      "Column Structure": "Dual-column rigid linear guide structure for vibration-free cutting",
      "Blade Tension": "Hydraulic blade tensioning with automatic shutoff on blade breakage",
      "Feed Control": "Stepless hydraulic cutting feed and infinitely variable blade speed (inverter controlled)",
      "Clamping System": "Full-stroke hydraulic vice clamping with bundle cutting attachments",
    },
    keyCapabilities: [
      "Production billet cutting of EN8, EN19, and alloy tool steels",
      "Square, burr-minimized cuts extending downstream tool life",
      "Automatic multi-stroke shuttle bar feed on CNC models",
      "Built-in powered blade cleaning wire brush and flood coolant",
    ],
    image: "/images/categories/sawing-products.jpg",
  },
  {
    id: "sheet-metal-machinery",
    slug: "press-brakes-and-shears",
    title: "CNC Hydraulic Press Brakes & Guillotine Shears",
    category: "Sheet Metal & Fabrication Equipment",
    description:
      "Hydraulic sheet metal fabrication machinery including swing-beam and variable rake guillotine shears and synchronized multi-axis press brakes.",
    typicalCapacity: "Press brakes 40-Ton to 400-Ton (1.5m to 4m bed); shears 4mm to 16mm plate thickness.",
    specifications: {
      "Bending Synchronization": "Proportional electro-hydraulic servo-valve control with linear glass scale feedback",
      "Backgauge Control": "CNC motorized multi-axis backgauge with ball screw and AC servo drives",
      "Tooling Included": "Segmented upper punch and multi-V bottom die block",
      "Safety Systems": "Laser guarding systems (DSP / Fiessler) compliant with international CE standards",
    },
    keyCapabilities: [
      "Precision structural bracket and enclosure folding",
      "Clean plate shearing without camber or bow distortion",
      "Fast angle setup with graphic touch-screen 2D/3D programming",
      "Crowing compensation for consistent bend angles across full length",
    ],
    image: "/images/categories/workshop-tools.jpg",
  },
  {
    id: "air-compressors-power",
    slug: "rotary-screw-air-compressors",
    title: "Industrial Rotary Screw Compressors & Air Treatment",
    category: "Workshop Plant Utilities",
    description:
      "Continuous-duty stationary rotary screw air compressors, refrigerated air dryers, and air receiver vessels built for industrial factory air demands.",
    typicalCapacity: "7.5 kW (10 HP) to 75 kW (100 HP); flow rates 1.0 to 13.0 m³/min at 8–10 bar.",
    specifications: {
      "Drive Type": "Direct drive or permanent magnet variable speed drive (VSD) for energy efficiency",
      "Cooling Method": "High-efficiency oversized air-cooled aluminum radiator for hot Southern African climates",
      "Noise Level": "Enclosed acoustic canopy (<70 dB(A)) suitable for workshop placement",
      "Filtration": "0.01 micron coalescing line filters and zero-loss condensate drains",
    },
    keyCapabilities: [
      "Uninterrupted 24/7 dry air delivery for CNC machines and pneumatic tooling",
      "Energy savings through VSD frequency modulation matching air demand",
      "Comprehensive digital controller monitoring pressure, temperature, and service intervals",
      "Built-in protection against phase reversal, overload, and high ambient temperatures",
    ],
    image: "/images/categories/other-industrial-supplies.jpg",
  },
];
