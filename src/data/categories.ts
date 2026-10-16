import { Category } from "../types";

export const CATEGORIES: Category[] = [
  {
    order: 1,
    id: "steel-products",
    slug: "steel-products",
    title: "Steel Products",
    shortDescription:
      "Engineering steels, alloy steels, tool steels, bright mild steel, structural hollow sections, plates, and ground flat stock for manufacturing and fabrication.",
    overview:
      "Steel is an established core pillar of Proquanic's supply operations. We procure and deliver structural and engineering grade steels tailored to industrial workshops, precision machining facilities, structural fabricators, and mining operations across Zimbabwe and the region.",
    image: "/images/categories/steel-products.jpg",
    commonStandards: ["EN8 / 080M40", "EN19 / 709M40 (4140)", "EN24 / 817M40 (4340)", "Mild Steel (S275/S355)", "D2 / O1 Tool Steel", "304 / 316 Stainless"],
    procurementNote:
      "Supplied in full mill lengths or cut-to-size upon request. Mill test certificates, heat numbers, and dimensional tolerances verified per client requisition.",
    families: [
      {
        id: "engineering-steels",
        name: "Engineering & Alloy Steels",
        slug: "engineering-steels",
        description:
          "High-tensile and heat-treatable alloy steels designed for shafts, gears, pins, high-stress machine components, and mechanical engineering.",
        representativeItems: ["EN8 (080M40) Carbon Steel Rounds", "EN19 / AISI 4140 Chrome-Moly Rounds", "EN24 / AISI 4340 Nickel-Chrome-Moly Rounds", "EN9 High Carbon Steel"],
        typicalSpecs: "Diameters 16mm to 450mm; normalized, annealed, or quenched & tempered condition.",
      },
      {
        id: "tool-steels",
        name: "Tool & Die Steels",
        slug: "tool-steels",
        description:
          "Cold work and hot work tool steels engineered for punching dies, shear blades, forming rolls, injection molds, and heavy wear resistance.",
        representativeItems: ["AISI D2 / 1.2379 High Carbon High Chrome", "AISI O1 / 1.2510 Oil Hardening Steel", "Precision Ground Flat Stock (Gauge Plate)"],
        typicalSpecs: "Supplied annealed for ease of machining prior to heat treatment.",
      },
      {
        id: "structural-sections",
        name: "Structural & Bright Steels",
        slug: "structural-sections",
        description:
          "Structural beams, channels, angles, square and rectangular hollow sections, and bright drawn mild steel for precision fabrication.",
        representativeItems: ["Bright Mild Steel Round & Hex Bar", "Hollow Structural Sections (SHS & RHS)", "Heavy Steel Plate (S275JR / S355JR)", "Checker Floor Plate"],
        typicalSpecs: "Standard mill lengths (6m / 12m) or custom cut billet pieces.",
      },
      {
        id: "stainless-steels",
        name: "Stainless Steel & Specialty Alloys",
        slug: "stainless-steels",
        description:
          "Corrosion-resistant austenitic and martensitic stainless steels for food processing, chemical, mining slurry, and marine environments.",
        representativeItems: ["Grade 304 / 304L Round Bar & Sheet", "Grade 316 / 316L Acid-Resistant Bar", "Grade 410 / 420 High-Strength Stainless"],
        typicalSpecs: "Polished, peeled, or rough-turned rounds; mill finish sheet and plate.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-en19-bar",
        name: "EN19 / 4140 High-Tensile Alloy Steel Round Bar",
        code: "STL-EN19-RND",
        family: "Engineering & Alloy Steels",
        categorySlug: "steel-products",
        shortDescription:
          "Medium carbon alloy steel with chromium and molybdenum, offering high tensile strength, shock resistance, and good wear properties.",
        specifications: {
          "Material Grade": "BS 970: 709M40 / AISI 4140 / DIN 1.7225",
          "Condition": "Supplied 'T' Condition (850-1000 N/mm²) or Annealed",
          "Available Diameters": "20mm to 350mm round bar",
          "Tensile Strength": "850 – 1000 MPa (T Condition)",
          "Yield Strength": "Min 680 MPa",
          "Hardness": "248 – 302 HB",
        },
        commonGradesOrSizes: ["Ø 25mm", "Ø 40mm", "Ø 50mm", "Ø 75mm", "Ø 100mm", "Ø 150mm", "Ø 200mm", "Custom cut lengths"],
        applications: ["Axles and crankshafts", "Connecting rods & high-stress pins", "Heavy-duty drive shafts", "Pinions and machine gears", "Mining equipment pins"],
        unitOfMeasure: "Meters / Kilograms / Cut Piece",
      },
      {
        id: "prod-en8-bar",
        name: "EN8 / 080M40 Unalloyed Medium Carbon Steel Bar",
        code: "STL-EN8-RND",
        family: "Engineering & Alloy Steels",
        categorySlug: "steel-products",
        shortDescription:
          "Versatile general-purpose engineering steel with good machinability and moderate tensile properties for general engineering.",
        specifications: {
          "Material Grade": "BS 970: 080M40 / AISI 1040 / DIN 1.0511",
          "Condition": "Normalized or As Rolled",
          "Available Diameters": "12mm to 400mm round; square & hex profiles",
          "Tensile Strength": "550 – 700 MPa",
          "Machinability": "Excellent general turning and milling characteristics",
        },
        commonGradesOrSizes: ["Ø 20mm", "Ø 32mm", "Ø 50mm", "Ø 80mm", "Ø 120mm", "Custom length"],
        applications: ["General shafts and spindles", "Keys and studs", "Stressed automotive & agricultural pins", "Flanges and couplings"],
        unitOfMeasure: "Meters / Kilograms",
      },
      {
        id: "prod-d2-tool-steel",
        name: "AISI D2 / 1.2379 High-Carbon High-Chromium Cold Work Tool Steel",
        code: "STL-D2-BAR",
        family: "Tool & Die Steels",
        categorySlug: "steel-products",
        shortDescription:
          "Air-hardening tool steel with exceptional abrasive wear resistance, high dimensional stability, and edge-holding capability.",
        specifications: {
          "Material Grade": "AISI D2 / DIN 1.2379 / JIS SKD11",
          "Condition": "Soft Annealed max 255 HB",
          "Achievable Hardness": "58 – 62 HRC after heat treatment",
          "Profiles": "Precision flats, blocks, and round bars",
        },
        commonGradesOrSizes: ["Flats 20x100mm to 100x300mm", "Rounds Ø 25mm to Ø 250mm"],
        applications: ["Blanking and stamping dies", "Shear blades and slitter knives", "Cold forming rolls", "Heavy-duty thread rolling dies"],
        unitOfMeasure: "Kilograms / Billet Piece",
      },
    ],
  },
  {
    order: 2,
    id: "cutting-machining-tools",
    slug: "cutting-machining-tools",
    title: "Cutting and Machining Tools",
    shortDescription:
      "Solid carbide end mills, titanium-coated indexable inserts, high-performance drills, threading taps, dies, and precision reamers for CNC and manual machining.",
    overview:
      "Proquanic procures precision cutting tools engineered to maximize metal removal rates, optimize surface finishes, and extend tool life across tough materials including structural steels, stainless grades, cast iron, and non-ferrous metals.",
    image: "/images/categories/cutting-machining-tools.jpg",
    commonStandards: ["ISO Turning Inserts", "DIN 6527 End Mills", "DIN 338 / DIN 340 Drills", "DIN 371 / 376 Machine Taps"],
    procurementNote:
      "Tell us your target workpiece material and machine spindle capacity. We supply exact insert geometry, chipbreaker, and grade recommendations.",
    families: [
      {
        id: "solid-carbide-end-mills",
        name: "Solid Carbide End Mills",
        slug: "solid-carbide-end-mills",
        description:
          "Micro-grain carbide square end mills, ball nose, corner radius, and roughing cutters with advanced AlTiN / TiSiN PVD coatings.",
        representativeItems: ["4-Flute Variable Helix Solid Carbide End Mills", "2-Flute Slot Drills for Aluminum", "Ball Nose End Mills for 3D Profiling", "Roughing End Mills with Knuckle Profile"],
        typicalSpecs: "Diameters 1.0mm to 25.0mm; h6 shank tolerances; standard and long reach.",
      },
      {
        id: "indexable-inserts",
        name: "Indexable Carbide Inserts",
        slug: "indexable-inserts",
        description:
          "Standard ISO turning, facing, grooving, parting, and milling inserts with engineered chipbreakers for steel, stainless, and hard alloys.",
        representativeItems: ["CNMG / WNMG / DNMG Turning Inserts", "APMT / APKT 1135 & 1604 Milling Inserts", "CCMT / DCMT Positive Finishing Inserts", "Parting-Off & Grooving Inserts (MGMN)"],
        typicalSpecs: "CVD and PVD coated grades for general steels, stainless steels, and cast iron.",
      },
      {
        id: "drilling-threading",
        name: "Drilling & Threading Tools",
        slug: "drilling-threading",
        description:
          "High-speed steel (HSS-Co) and solid carbide jobber and taper shank drills, machine spiral point taps, spiral flute taps, and die nuts.",
        representativeItems: ["Cobalt HSS-Co5 Drill Bits (DIN 338)", "Morse Taper Shank Drills (DIN 345)", "Spiral Flute Blind Hole Machine Taps", "Spiral Point Through Hole Machine Taps"],
        typicalSpecs: "Metric M2 to M36; Unified UNC/UNF; British BSP/BSPT threads.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-carbide-endmill-set",
        name: "4-Flute Variable Helix Solid Carbide End Mill (AlTiN Coated)",
        code: "CUT-EM4-ALTIN",
        family: "Solid Carbide End Mills",
        categorySlug: "cutting-machining-tools",
        shortDescription:
          "Anti-vibration variable pitch solid carbide end mill optimized for aggressive side milling, slotting, and profiling in carbon and alloy steels up to 55 HRC.",
        specifications: {
          "Substrate": "Sub-micrograin tungsten carbide (0.6µm grain size)",
          "Coating": "AlTiN (Aluminum Titanium Nitride) nano-coating",
          "Flute Count": "4 flutes with unequal helix angle (38° / 41°)",
          "Workpiece Hardness": "Up to 55 HRC",
          "Coolant": "Wet or dry / MQL suitable",
        },
        commonGradesOrSizes: ["Ø 3mm", "Ø 6mm", "Ø 8mm", "Ø 10mm", "Ø 12mm", "Ø 16mm", "Ø 20mm"],
        applications: ["CNC vertical machining centers", "Heavy shoulder milling", "Pocketing in engineering steels", "Die and mold machining"],
        unitOfMeasure: "Piece / Set",
      },
      {
        id: "prod-cnmg-insert",
        name: "CNMG 120408 Double-Sided 80° Rhombic Turning Inserts",
        code: "CUT-CNMG-120408",
        family: "Indexable Carbide Inserts",
        categorySlug: "cutting-machining-tools",
        shortDescription:
          "Industry-standard negative rake turning inserts with molded chipbreaker for medium to heavy roughing of steel shafts, forgings, and castings.",
        specifications: {
          "Insert Designation": "CNMG 120408 (IC 12.7mm, Thickness 4.76mm, Nose Radius 0.8mm)",
          "Rake Geometry": "Negative rake, 8 cutting edges per insert",
          "Coating Technology": "Multi-layer CVD TiCN + Al2O3 + TiN coating",
          "Chipbreaker Type": "Medium roughing / general turning (PM/MA)",
        },
        commonGradesOrSizes: ["Box of 10 inserts", "Grades for Steel (P25-P35) and Stainless (M20-M30)"],
        applications: ["CNC lathe production turning", "Conventional lathe facing & turning", "Medium-to-heavy roughing cuts"],
        unitOfMeasure: "Box (10 Pieces)",
      },
    ],
  },
  {
    order: 3,
    id: "sawing-products",
    slug: "sawing-products",
    title: "Sawing Products",
    shortDescription:
      "Bimetal M42 and carbide-tipped bandsaw blades, high-speed steel circular cold saw blades, and heavy-duty power hacksaw blades.",
    overview:
      "Cut-off operations dictate the pace of downstream fabrication. We supply industrial bandsaw and circular saw blades engineered with high tooth hardness, fatigue-resistant backing steel, and tooth geometries tailored for solid bars, structural tubes, and bundle cutting.",
    image: "/images/categories/sawing-products.jpg",
    commonStandards: ["Bi-Metal M42 (8% Cobalt)", "Bi-Metal M51", "Carbide Tipped (TCT)", "DIN 1837 / 1838 HSS"],
    procurementNote:
      "Custom welded-to-length continuous bandsaw loops supplied to fit your exact machine model (Everising, Amada, Cosen, Rong Fu, Kasto, etc.).",
    families: [
      {
        id: "bimetal-bandsaw-blades",
        name: "Bimetal M42 Bandsaw Blades",
        slug: "bimetal-bandsaw-blades",
        description:
          "Continuous loops featuring 8% cobalt high-speed steel tooth tips electron-beam welded to spring alloy backing steel for general and production cutting.",
        representativeItems: ["M42 Variable Pitch Bandsaw Blades (4/6 TPI, 3/4 TPI, 2/3 TPI)", "Bandsaw Blades for Structural Tubing & Channels", "Heavy Section Solid Bar Cut-off Blades"],
        typicalSpecs: "Widths 13mm, 20mm, 27mm, 34mm, 41mm, 54mm; custom length welds.",
      },
      {
        id: "circular-cold-saw-blades",
        name: "HSS Circular Cold Saw Blades",
        slug: "circular-cold-saw-blades",
        description:
          "High-speed steel (DMo5 / M2) circular saw blades with vapor-treated (VAPO) or TiN coatings for burr-free cut-off of tubes, profiles, and solid bars.",
        representativeItems: ["HSS DMo5 Cold Saw Blades (250mm to 400mm)", "TCT Ferrous Metal Cutting Blades", "Segmental Saw Blades & Spare Segments"],
        typicalSpecs: "Drive pin hole patterns: 32mm, 40mm, 50mm center bore.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-m42-blade-27mm",
        name: "M42 Bi-Metal Bandsaw Blade Loop (27mm x 0.9mm)",
        code: "SAW-M42-27",
        family: "Bimetal M42 Bandsaw Blades",
        categorySlug: "sawing-products",
        shortDescription:
          "Premium industrial welded bandsaw blade with M42 cobalt tooth tips for cutting solid engineering steels, stainless bars, and structural sections.",
        specifications: {
          "Blade Width": "27mm (1-1/16\")",
          "Thickness": "0.9mm (0.035\")",
          "Tooth Material": "M42 High-Speed Steel (8% Cobalt, 68-69 HRC)",
          "Backing Material": "High-fatigue spring alloy steel",
          "Pitch Options": "3/4 TPI, 4/6 TPI, 5/8 TPI variable pitch",
        },
        commonGradesOrSizes: ["Length to customer machine spec (e.g., 2480mm, 3035mm, 3160mm, 3660mm)"],
        applications: ["Horizontal workshop bandsaws", "Cutting solid EN8, EN19, mild steel rounds", "Tubing and structural angle cutting"],
        unitOfMeasure: "Welded Loop",
      },
    ],
  },
  {
    order: 4,
    id: "abrasives",
    slug: "abrasives",
    title: "Abrasives",
    shortDescription:
      "Vitrified and resinoid grinding wheels, ceramic flap discs, reinforced cutting and grinding discs, coated abrasive belts, and wire wheels.",
    overview:
      "From precision surface grinding and tool sharpening to aggressive weld seam removal and edge deburring, Proquanic supplies bonded and coated abrasives built for safety, longevity, and high stock removal.",
    image: "/images/categories/abrasives.jpg",
    commonStandards: ["EN 12413 Safety Standards", "ANSI B7.1", "ISO 603", "oSa Certified"],
    procurementNote:
      "All abrasive products comply with international safety speed ratings (max RPM clearly stamped). Industrial bulk quantities available.",
    families: [
      {
        id: "bonded-grinding-wheels",
        name: "Bonded Grinding Wheels",
        slug: "bonded-grinding-wheels",
        description:
          "Precision aluminum oxide, white aluminum oxide, and silicon carbide wheels for bench grinders, surface grinders, and tool & cutter grinders.",
        representativeItems: ["White Aluminum Oxide (WA) Toolroom Wheels", "Green Silicon Carbide (GC) Carbide Sharpening Wheels", "Snagging Wheels for Foundry Work"],
        typicalSpecs: "Diameters 150mm to 350mm; grit sizes 36 to 120; hardness grade J to M.",
      },
      {
        id: "cutting-grinding-discs",
        name: "Reinforced Cutting & Grinding Discs",
        slug: "cutting-grinding-discs",
        description:
          "Fiberglass-reinforced ultra-thin cutting discs (1.0mm/1.6mm) and heavy depressed center grinding wheels for angle grinders.",
        representativeItems: ["115mm & 230mm Ultra-Thin Inox Cut-Off Discs", "Depressed Center Grinding Wheels (6.0mm)", "Chop Saw Metal Cutting Discs (355mm)"],
        typicalSpecs: "Iron/Sulfur/Chlorine-free (<0.1%) formulations for stainless steel contamination prevention.",
      },
      {
        id: "flap-discs-belts",
        name: "Flap Discs & Sanding Belts",
        slug: "flap-discs-belts",
        description:
          "Zirconia and ceramic grain flap discs on fiberglass or plastic backings for cool grinding, blending, and finishing.",
        representativeItems: ["Conical (Type 29) Zirconia Flap Discs", "Ceramic Self-Sharpening Flap Discs", "Narrow & Wide Abrasive Belts for Linishers"],
        typicalSpecs: "Grit 40, 60, 80, 120; 115mm & 125mm diameters; 22.23mm arbor.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-thin-cut-disc-115",
        name: "115mm x 1.0mm Inox Ultra-Thin Metal Cutting Disc",
        code: "ABR-CUT-115X1",
        family: "Reinforced Cutting & Grinding Discs",
        categorySlug: "abrasives",
        shortDescription:
          "Fast, cool-cutting reinforced disc providing minimal material loss and burr-free cuts in mild steel, stainless steel, and sheet metal.",
        specifications: {
          "Diameter": "115mm (4.5\")",
          "Thickness": "1.0mm (0.040\")",
          "Bore Size": "22.23mm",
          "Max Operating Speed": "13,300 RPM (80 m/s)",
          "Specification": "A 60 R-BF (Aluminum Oxide, Resinoid Bond)",
          "Standard": "EN 12413",
        },
        commonGradesOrSizes: ["Pack of 25 discs", "Carton of 100 discs"],
        applications: ["Cutting thin-walled tubes and profiles", "Sheet metal fabrication", "Stainless steel fabrication with no burn marks"],
        unitOfMeasure: "Pack (25 Pieces)",
      },
    ],
  },
  {
    order: 5,
    id: "machine-tooling-workholding",
    slug: "machine-tooling-workholding",
    title: "Machine Tooling and Workholding",
    shortDescription:
      "Precision machine vises, lathe chucks, ER collet systems, CNC toolholders (BT40, BT50, MT), modular clamping kits, and rotary tables.",
    overview:
      "Rigid, repeatable workholding is the foundation of machining accuracy. We supply mechanical, hydraulic, and pneumatic clamping systems, precision collet chucks, and spindle tooling to keep workpieces and cutting tools solidly locked during high-load cuts.",
    image: "/images/categories/machine-tooling-workholding.jpg",
    commonStandards: ["MAS 403 BT40 / BT50", "DIN 69871 (SK40/SK50)", "DIN 6499 (ER Collets)", "DIN 6350 (Lathe Chucks)"],
    procurementNote:
      "Direct spindle mounts (D1-4, D1-5, D1-6, D1-8 Camlock, threaded, and A2 mounts) verified before quotation.",
    families: [
      {
        id: "machine-vises",
        name: "Precision Machine Vises",
        slug: "machine-vises",
        description:
          "Hydraulic, mechanical angledown, and self-centering precision milling vises with hardened, ground jaws preventing jaw lift.",
        representativeItems: ["Hydraulic Machine Vises (150mm & 200mm)", "Precision Modular CNC Vises", "Tilting & 3-Way Swivel Machine Vises"],
        typicalSpecs: "Clamping forces up to 50 kN; parallelism and squareness within 0.01mm/100mm.",
      },
      {
        id: "lathe-chucks",
        name: "Lathe Chucks & Jaws",
        slug: "lathe-chucks",
        description:
          "Self-centering 3-jaw scroll chucks, independent 4-jaw chucks, soft jaws, and hard reversible jaws for manual and CNC lathes.",
        representativeItems: ["3-Jaw Self-Centering Chucks (160mm to 400mm)", "4-Jaw Independent Heavy Duty Chucks", "Reversible Hard Jaws & Machinable Soft Jaws"],
        typicalSpecs: "Direct Camlock D-type mounting or rear plain backplate mounting.",
      },
      {
        id: "collets-toolholders",
        name: "Collets, Chucks & Toolholders",
        slug: "collets-toolholders",
        description:
          "ER16 to ER40 precision collet chuck sets, side-lock Weldon holders, face mill arbors, Morse taper reduction sleeves, and pull studs.",
        representativeItems: ["BT40 & BT50 ER Collet Chucks & Complete Sets", "Face Mill Arbors (22mm & 27mm spigot)", "58-Piece Workshop T-Slot Clamping Kit"],
        typicalSpecs: "Balanced to 15,000–20,000 RPM (G2.5); runout <0.005mm.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-er32-collet-set",
        name: "ER32 Precision Spring Collet Set (18-Piece, 3mm – 20mm)",
        code: "WKH-ER32-SET",
        family: "Collets, Chucks & Toolholders",
        categorySlug: "machine-tooling-workholding",
        shortDescription:
          "Ground alloy spring steel collet set for CNC milling spindles, toolholders, and lathe collet chucks with exceptional gripping force and concentricity.",
        specifications: {
          "Collet Series": "ER32 (DIN 6499B)",
          "Range": "3mm to 20mm in 1mm increments (18 collets)",
          "Runout Accuracy": "Within 0.008mm (Standard Precision) or 0.005mm (Ultra)",
          "Material": "Heat treated 65Mn spring alloy steel",
        },
        commonGradesOrSizes: ["Standard 18-piece set in fitted aluminum case"],
        applications: ["CNC vertical machining centers", "Milling machine spindle tooling", "Rigid toolholding for end mills and drills"],
        unitOfMeasure: "Set (18 Pieces in Case)",
      },
    ],
  },
  {
    order: 6,
    id: "metrology-inspection",
    slug: "metrology-inspection",
    title: "Metrology and Inspection",
    shortDescription:
      "Precision digital and vernier calipers, external micrometers, dial test indicators, bore gauges, height gauges, and granite surface plates.",
    overview:
      "Quality assurance requires reliable, calibrated inspection equipment. Proquanic supplies dimensional metrology tools trusted in machine shops, inspection departments, and fabrication facilities to verify tight tolerances.",
    image: "/images/categories/metrology-inspection.jpg",
    commonStandards: ["DIN 862 (Calipers)", "DIN 863 (Micrometers)", "DIN 878 (Dial Gauges)", "DIN 876 (Surface Plates)"],
    procurementNote:
      "Supplied with manufacturer inspection certificate / certificate of conformance. Calibration standard traceable sets available.",
    families: [
      {
        id: "calipers-micrometers",
        name: "Calipers & Micrometers",
        slug: "calipers-micrometers",
        description:
          "IP67 coolant-proof digital calipers, traditional vernier calipers, outside ratchet micrometers, depth micrometers, and micrometer stand accessories.",
        representativeItems: ["Digital Electronic Vernier Calipers (150mm & 300mm)", "Outside Micrometer Sets (0-25mm, 25-50mm, 50-75mm)", "Carbide-Tipped Anvil Micrometers"],
        typicalSpecs: "Resolution: 0.01mm / 0.0005\" or 0.001mm; hardened stainless steel measuring faces.",
      },
      {
        id: "indicators-gauges",
        name: "Dial Indicators, Bore Gauges & Height Gauges",
        slug: "indicators-gauges",
        description:
          "Plunger dial indicators, lever dial test indicators (DTI), magnetic base articulated stands, cylinder bore gauges, and digital height gauges.",
        representativeItems: ["0-10mm Plunger Dial Indicator (0.01mm resolution)", "Lever Dial Test Indicator with Dovetail Clamps", "Universal Hydraulic Arm Magnetic Base Stand"],
        typicalSpecs: "Jeweled bearings; anti-magnetic mechanism; lug-back and flat-back options.",
      },
      {
        id: "reference-standards",
        name: "Reference Standards & Surface Plates",
        slug: "reference-standards",
        description:
          "Black granite surface plates, precision gauge block sets (Grade 0 and Grade 1), optical flats, and feeler gauge sets.",
        representativeItems: ["Grade 0 Granite Inspection Plates with Stand", "47-Piece / 87-Piece Steel Gauge Block Sets", "Thread Pitch Gauges & Radius Gauges"],
        typicalSpecs: "Granite Grade 0 per DIN 876; zero residual stress, high thermal stability.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-digital-caliper-150",
        name: "150mm (6\") IP67 Electronic Digital Vernier Caliper",
        code: "MET-DVC-150",
        family: "Calipers & Micrometers",
        categorySlug: "metrology-inspection",
        shortDescription:
          "Workshop-rugged digital caliper with IP67 protection against coolant spray, cutting oil, and grinding dust, featuring hardened stainless steel jaws.",
        specifications: {
          "Measuring Range": "0 – 150mm / 0 – 6 inch",
          "Resolution": "0.01mm / 0.0005 inch",
          "Accuracy": "±0.02mm (DIN 862)",
          "Ingress Protection": "IP67 (Immersion & coolant resistant)",
          "Functions": "Zero-set at any point, metric/inch conversion, auto power off",
        },
        commonGradesOrSizes: ["150mm (6\")", "200mm (8\")", "300mm (12\")"],
        applications: ["Machine shop floor inspection", "Turning and milling verification", "Internal, external, step, and depth measurement"],
        unitOfMeasure: "Piece in Protective Case",
      },
    ],
  },
  {
    order: 7,
    id: "workshop-tools",
    slug: "workshop-tools",
    title: "Workshop Tools",
    shortDescription:
      "Calibrated industrial torque wrenches, heavy impact socket sets, combination spanners, pneumatic tools, hydraulic workshop presses, and bearing pullers.",
    overview:
      "High-stress maintenance and assembly environments require heavy-duty tools that deliver safety and leverage. We procure industrial-grade hand, pneumatic, and hydraulic workshop tooling designed to withstand continuous plant and field service.",
    image: "/images/categories/workshop-tools.jpg",
    commonStandards: ["ISO 6789 (Torque Tools)", "DIN 3113 (Spanners)", "DIN 3129 (Impact Sockets)"],
    procurementNote:
      "Torque equipment supplied with calibration certificate. Heavy workshop equipment supplied with load testing compliance.",
    families: [
      {
        id: "torque-fastening",
        name: "Torque Wrenches & Drive Sockets",
        slug: "torque-fastening",
        description:
          "Micrometer adjustable click-type torque wrenches (1/4\", 1/2\", 3/4\", 1\" drive), chrome-molybdenum impact sockets, and torque multipliers.",
        representativeItems: ["1/2\" Drive Reversible Click Torque Wrench (40-200 Nm)", "3/4\" Drive Heavy Torque Wrench (100-600 Nm)", "1/2\" Deep Impact Socket Set (10mm - 32mm)"],
        typicalSpecs: "Accuracy ±3% or ±4% of reading; CW/CCW ratcheting heads.",
      },
      {
        id: "wrenches-hand-tools",
        name: "Spanners, Wrenches & Hand Tools",
        slug: "wrenches-hand-tools",
        description:
          "Drop-forged chrome vanadium combination spanners, jumbo open-end spanners, slogging spanners, heavy pipe wrenches, and circlip pliers.",
        representativeItems: ["Chrome Vanadium Combination Spanner Sets (6mm - 32mm)", "Heavy Slogging Ring Spanners (32mm - 85mm)", "Rigid Heavy-Duty Cast Iron Pipe Wrenches"],
        typicalSpecs: "High-grade Cr-V and Cr-Mo alloy steel; satin or black phosphate finishes.",
      },
      {
        id: "hydraulic-pulling",
        name: "Hydraulic Presses, Pullers & Jacks",
        slug: "hydraulic-pulling",
        description:
          "Hydraulic workshop floor presses, 2-jaw and 3-jaw mechanical and hydraulic gear pullers, porta-power repair kits, and bottle jacks.",
        representativeItems: ["20-Ton & 50-Ton Hydraulic Workshop Floor Presses", "Hydraulic Bearing Puller Sets with Separate Ram", "10-Ton Porta-Power Hydraulic Body Repair Kits"],
        typicalSpecs: "Pressure relief valves; dual-speed manual hydraulic pumps.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-torque-wrench-half",
        name: "1/2\" Drive Industrial Click-Type Torque Wrench (40–210 Nm)",
        code: "WKS-TRQ-40210",
        family: "Torque Wrenches & Drive Sockets",
        categorySlug: "workshop-tools",
        shortDescription:
          "Calibrated micrometer click-type torque wrench with dual Nm/ft-lb scales, positive locking ring, and 45-tooth reversible ratchet mechanism.",
        specifications: {
          "Drive Size": "1/2\" Square Drive",
          "Torque Range": "40 – 210 Nm (30 – 150 ft-lbs)",
          "Accuracy": "±4% per ISO 6789 standard",
          "Graduation": "1.0 Nm scale increments",
          "Certification": "Supplied with individual factory calibration certificate",
        },
        commonGradesOrSizes: ["Standard 1/2\" drive; 540mm overall length"],
        applications: ["Plant maintenance bolting", "Cylinder head and manifold torquing", "Mining vehicle maintenance", "Gearbox assembly"],
        unitOfMeasure: "Piece in Blow-Molded Case",
      },
    ],
  },
  {
    order: 8,
    id: "bearings-power-transmission",
    slug: "bearings-power-transmission",
    title: "Bearings and Power Transmission",
    shortDescription:
      "Deep groove ball bearings, spherical roller bearings, tapered roller bearings, cast iron pillow block units, industrial roller chains, and V-belts.",
    overview:
      "Rotating machinery reliability depends on genuine, precision-manufactured bearings and robust drive elements. Proquanic procures original industrial bearings, transmission chains, pulleys, and sprockets for conveyors, pumps, gearboxes, and electric motors.",
    image: "/images/categories/bearings-power-transmission.jpg",
    commonStandards: ["ISO 15 (Metric Bearings)", "DIN 625 (Ball Bearings)", "DIN 8187 (British Standard Chain)", "DIN 8188 (American Standard Chain)", "DIN 2215 (V-Belts)"],
    procurementNote:
      "Clearances (C2, Normal, C3, C4) and seal configurations (2RS, 2Z, Open) confirmed during quotation to prevent premature plant failure.",
    families: [
      {
        id: "rolling-bearings",
        name: "Ball & Roller Bearings",
        slug: "rolling-bearings",
        description:
          "Deep groove ball bearings, self-aligning spherical roller bearings for vibratory screens, cylindrical roller bearings, and tapered roller bearing sets.",
        representativeItems: ["6200 & 6300 Series Deep Groove Ball Bearings (C3 clearance)", "22200 & 22300 Series Spherical Roller Bearings", "Tapered Roller Bearing Cones & Cups (30200 / 32200)"],
        typicalSpecs: "Pressed steel, machined brass, or polyamide cages; metric and imperial shafts.",
      },
      {
        id: "mounted-bearing-units",
        name: "Pillow Block & Flanged Units",
        slug: "mounted-bearing-units",
        description:
          "Cast iron and ductile iron housed bearing units (UCP, UCF, UCFL) with set-screw or eccentric locking collars and grease nipples.",
        representativeItems: ["UCP 200 & UCP 300 Series 2-Bolt Pillow Blocks", "UCF 4-Bolt Square Flange Bearing Units", "SN / SNH / SNL Plummer Block Housings"],
        typicalSpecs: "Shaft diameters 20mm to 100mm; relubricatable with grease nipple.",
      },
      {
        id: "chains-belts-drives",
        name: "Roller Chains, Sprockets & V-Belts",
        slug: "chains-belts-drives",
        description:
          "Simplex, duplex, and triplex industrial drive chains, taper-lock sprockets, classic V-belts (A, B, C, D), and wedge belts (SPZ, SPA, SPB, SPC).",
        representativeItems: ["BS / ANSI Heavy Roller Chains (08B, 10B, 12B, 16B)", "Taper Lock Bushes & Bored-to-Size Steel Sprockets", "Heat & Oil Resistant Wrapped V-Belts"],
        typicalSpecs: "Pre-stressed drive chain; precision tooth induction-hardened sprockets.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-spherical-bearing-22216",
        name: "22216 CC/W33 Spherical Roller Bearing (80mm x 140mm x 33mm)",
        code: "BRG-22216-W33",
        family: "Ball & Roller Bearings",
        categorySlug: "bearings-power-transmission",
        shortDescription:
          "Self-aligning heavy-load roller bearing featuring two rows of symmetrical rollers, lubrication groove and three holes in outer ring (W33).",
        specifications: {
          "Bore Diameter (d)": "80mm",
          "Outer Diameter (D)": "140mm",
          "Width (B)": "33mm",
          "Dynamic Load Rating (C)": "240 kN",
          "Static Load Rating (C0)": "270 kN",
          "Internal Clearance": "Standard or C3 (increased clearance)",
        },
        commonGradesOrSizes: ["Standard straight bore or tapered bore (K) for adapter sleeve mount"],
        applications: ["Heavy industrial conveyors", "Mining vibrating screens and crushers", "Industrial gearboxes and reduction units", "Centrifugal slurry pumps"],
        unitOfMeasure: "Piece",
      },
    ],
  },
  {
    order: 9,
    id: "mechanical-components",
    slug: "mechanical-components",
    title: "Mechanical Components",
    shortDescription:
      "High-tensile fasteners (Grade 8.8, 10.9, 12.9), flexible shaft couplings, linear guideways, ball screws, circlips, O-rings, and oil seals.",
    overview:
      "From high-stress structural bolting to precision motion transfer and fluid sealing, Proquanic supplies standardized and specialized mechanical components that keep mechanical systems aligned and leak-free.",
    image: "/images/categories/mechanical-components.jpg",
    commonStandards: ["ISO 4014 / 4017 (Bolts)", "DIN 912 (Socket Head Caps)", "DIN 74324 (Couplings)", "ISO 3601 (O-Rings)"],
    procurementNote:
      "Fasteners supplied in black oxide, zinc plated, or hot-dip galvanized. Metric coarse, metric fine, and UNC/UNF threads.",
    families: [
      {
        id: "fasteners-hardware",
        name: "High-Tensile Bolts & Industrial Fasteners",
        slug: "fasteners-hardware",
        description:
          "Grade 8.8, 10.9, and 12.9 hex head bolts, socket head cap screws (DIN 912), threaded rods, heavy hex nuts, spring washers, and dowel pins.",
        representativeItems: ["Grade 8.8 & 10.9 Metric Hex Head Bolts & Sets", "Grade 12.9 High-Tensile Socket Head Cap Screws", "All-Thread Studding (1-meter and 3-meter lengths)"],
        typicalSpecs: "Diameters M6 to M36; lengths up to 300mm; plain, electro-galvanized, or HDG.",
      },
      {
        id: "shaft-couplings",
        name: "Shaft Couplings & Universal Joints",
        slug: "shaft-couplings",
        description:
          "Flexible jaw couplings (Lovejoy/Rotex type), tire couplings, gear couplings, and rigid sleeve couplings for motor-to-pump/gearbox connection.",
        representativeItems: ["HRC Flexible Jaw Couplings with Rubber Star Element", "Tire Couplings for Shock Dampening", "Taper-Lock Bush Couplings"],
        typicalSpecs: "Accommodates angular, parallel, and axial misalignment.",
      },
      {
        id: "seals-linear-motion",
        name: "Seals, Gaskets & Linear Motion",
        slug: "seals-linear-motion",
        description:
          "Rotary shaft oil seals (TC double lip), NBR and Viton O-ring assortment kits, linear guide rails with recirculating ball runner blocks.",
        representativeItems: ["Rotary Shaft Oil Seals (NBR & FKM / Viton)", "Comprehensive Metric O-Ring Assortment Kits", "Linear Motion Guide Rails & Bearing Carriage Blocks (15mm to 35mm)"],
        typicalSpecs: "Temperature ratings -30°C to +200°C depending on polymer grade.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-fastener-grade109",
        name: "Grade 10.9 High-Tensile Metric Hex Head Bolts (Zinc / Black)",
        code: "MEC-BOLT-109",
        family: "High-Tensile Bolts & Industrial Fasteners",
        categorySlug: "mechanical-components",
        shortDescription:
          "Heavy-duty quench-and-tempered alloy steel structural bolts engineered for high clamp loads in heavy machinery and structural assemblies.",
        specifications: {
          "Strength Grade": "Class 10.9 (Tensile 1040 MPa, Yield 940 MPa)",
          "Standard": "DIN 931 (Partially Threaded) / DIN 933 (Fully Threaded)",
          "Thread Specification": "Metric coarse ISO 965",
          "Finish": "Self-color black oxide or bright zinc plated",
        },
        commonGradesOrSizes: ["M10 to M30 diameters; lengths 30mm to 200mm"],
        applications: ["Heavy machinery mounting", "Gearbox and pump base bolting", "Mining equipment assembly", "Structural steelwork joints"],
        unitOfMeasure: "Pack of 100 / Box / Kilogram",
      },
    ],
  },
  {
    order: 10,
    id: "other-industrial-supplies",
    slug: "other-industrial-supplies",
    title: "Other Industrial Supplies",
    shortDescription:
      "Water-soluble metalworking coolants, heavy gear oils, industrial ball and butterfly valves, workshop PPE, and certified lifting equipment.",
    overview:
      "To complement primary tooling and mechanical hardware, Proquanic procures essential plant maintenance consumables, lubricants, fluid control valves, workshop safety equipment, and rigging accessories.",
    image: "/images/categories/other-industrial-supplies.jpg",
    commonStandards: ["ISO VG (Lubricants)", "EN 388 (Safety Gloves)", "EN 1492-1 (Lifting Slings)", "API 6D (Valves)"],
    procurementNote:
      "If you need an industrial consumable, maintenance part, or specialized workshop item not categorized elsewhere, submit your specifications.",
    families: [
      {
        id: "cutting-fluids-lubricants",
        name: "Metalworking Fluids & Lubricants",
        slug: "cutting-fluids-lubricants",
        description:
          "Semi-synthetic water-soluble CNC coolant, neat cutting oils, slideway oils (ISO VG 68), heavy gear oils (ISO VG 220/320), and lithium EP greases.",
        representativeItems: ["Bio-Stable Soluble Cutting Fluid (20L & 210L)", "ISO VG 68 Slideway Lubricant", "Heavy-Duty Lithium EP2 Grease Cartridges & Pails"],
        typicalSpecs: "Superior EP anti-wear additives, bacterial resistance, corrosion inhibitors.",
      },
      {
        id: "valves-fluid-control",
        name: "Industrial Valves & Pipe Fittings",
        slug: "valves-fluid-control",
        description:
          "Stainless steel and cast iron ball valves, wafer butterfly valves, check valves, flanges, and malleable iron threaded pipe fittings.",
        representativeItems: ["3-Piece Stainless Steel 316 Ball Valves (1/2\" to 3\")", "Cast Iron Wafer Butterfly Valves (DN50 to DN200)", "Malleable Iron Galvanized Pipe Fittings"],
        typicalSpecs: "Pressure ratings PN16, PN25, PN40, 1000 WOG.",
      },
      {
        id: "safety-lifting",
        name: "Workshop Safety PPE & Rigging",
        slug: "safety-lifting",
        description:
          "Certified duplex webbing lifting slings, bow shackles, eye bolts, impact-resistant safety spectacles, welding helmets, and heavy cut-resistant gloves.",
        representativeItems: ["Duplex Polyester Webbing Slings (1-Ton to 10-Ton)", "Grade 80 / Grade 100 Chain Slings & Master Links", "EN 388 Level 5 Cut-Resistant Handling Gloves"],
        typicalSpecs: "Safety factor 7:1 for polyester webbing; 4:1 for chain slings.",
      },
    ],
    sampleProducts: [
      {
        id: "prod-sol-coolant-20l",
        name: "High-Performance Semi-Synthetic Soluble Cutting Fluid (20L Drum)",
        code: "IND-COOL-20L",
        family: "Metalworking Fluids & Lubricants",
        categorySlug: "other-industrial-supplies",
        shortDescription:
          "Chlorine-free biostable water-mix coolant formulated for CNC milling, turning, and sawing of carbon steels, stainless steels, and cast iron.",
        specifications: {
          "Appearance": "Amber concentrate / translucent milky emulsion",
          "Recommended Dilution": "4% – 8% for general turning; 8% – 12% for heavy milling & sawing",
          "Corrosion Protection": "Passes DIN 51360 corrosion test at 4%",
          "Biostability": "Extended sump life, resistant to bacterial degradation",
        },
        commonGradesOrSizes: ["20-Liter Pail", "210-Liter Drum"],
        applications: ["CNC machining centers", "Surface grinding machines", "Horizontal and vertical metal bandsaws", "Lathe coolant systems"],
        unitOfMeasure: "Drum (20 Liters)",
      },
    ],
  },
];
