export interface ArticleRecord {
  id: string;
  title: string;
  slug: string;
  aliases?: string[];
  category: string;
  categorySlug: string;
  description: string;
  readTime: string;
  date: string;
  publishDate: string; // ISO format YYYY-MM-DD for reliable chronological sorting
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  relatedSlugs: string[];
}

export const ARTICLES: ArticleRecord[] = [
  {
    id: "how-to-choose-milling-machine-vice",
    title: "How to Choose the Right Milling Machine Vice: A Practical Buying Guide",
    slug: "/blog/how-to-choose-milling-machine-vice",
    aliases: [
      "/guides/how-to-choose-milling-machine-vice",
      "/resources/how-to-choose-milling-machine-vice",
      "/blog/milling-machine-vice-guide",
    ],
    category: "Machine Tooling and Workholding",
    categorySlug: "/products/machine-tooling-workholding",
    description:
      "Learn how to choose a milling machine vice by jaw width, opening capacity, clamping force, accuracy, mounting and machining requirements.",
    readTime: "10 min read",
    date: "November 2026",
    publishDate: "2026-11-05",
    image: "/images/categories/machine-tooling-workholding.jpg",
    imageAlt: "Precision milling machine vice and workholding tooling set up for workshop machining",
    tags: [
      "Milling Machine Vice",
      "Machine Vise",
      "Workholding",
      "CNC Machining",
      "Milling",
      "Workshop Equipment",
    ],
    featured: true,
    relatedSlugs: [
      "/products/machine-tooling-workholding",
      "/blog/why-end-mills-break",
      "/blog/hss-cobalt-carbide-drills",
      "/products/cutting-machining-tools",
    ],
  },
  {
    id: "hss-cobalt-carbide-drills",
    title: "HSS, Cobalt or Carbide Drills? Understanding the Differences and Choosing the Right Drill for Steel",
    slug: "/blog/hss-cobalt-carbide-drills",
    aliases: [
      "/guides/hss-cobalt-carbide-drills",
      "/resources/hss-cobalt-carbide-drills",
      "/blog/drill-selection-guide",
    ],
    category: "Cutting and Machining Tools",
    categorySlug: "/products/cutting-machining-tools",
    description:
      "Understanding the differences between HSS, cobalt-alloyed, and solid carbide drills for industrial metalworking applications.",
    readTime: "7 min read",
    date: "November 2026",
    publishDate: "2026-11-01",
    image: "/images/blog/hss-cobalt-carbide-drills.jpg",
    imageAlt: "Comparative arrangement of HSS, cobalt-alloyed and solid carbide drill bits on a workshop bench",
    tags: [
      "Drill Bits",
      "HSS",
      "Cobalt",
      "Solid Carbide",
      "Metalworking",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/why-drill-bits-burn-or-break",
      "/products/cutting-machining-tools",
      "/blog/why-end-mills-break",
    ],
  },
  {
    id: "en8-en19-mild-steel-comparison",
    title: "EN8, EN19 or Mild Steel? How to Choose the Right Material for Your Job",
    slug: "/blog/en8-en19-mild-steel-comparison",
    aliases: [
      "/guides/en8-en19-mild-steel-comparison",
      "/resources/en8-en19-mild-steel-comparison",
      "/blog/en8-vs-en19-vs-mild-steel",
      "/guides/en8-vs-en19-vs-mild-steel",
    ],
    category: "Steel Products",
    categorySlug: "/products/steel-products",
    description:
      "Compare EN8, EN19 and mild steel for engineering applications. Learn what to check before choosing a material for shafts, brackets and machined components.",
    readTime: "8 min read",
    date: "March 2026",
    publishDate: "2026-03-25",
    image: "/images/blog/en8-en19-mild-steel-comparison.jpg",
    imageAlt: "Engineering steel round bar, flat bar and plate arranged for dimensional inspection.",
    tags: [
      "EN8 (080M40)",
      "EN19 (708M40)",
      "Mild Steel",
      "Steel Comparison",
      "Shafts & Machining",
      "Engineering Steels",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/steel-buying-checklist-engineering-workshop",
      "/guides/en8-vs-en19-steel",
      "/blog/why-end-mills-break",
    ],
  },
  {
    id: "steel-buying-checklist-engineering-workshop",
    title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
    slug: "/blog/steel-buying-checklist-engineering-workshop",
    aliases: [
      "/guides/steel-buying-checklist-engineering-workshop",
      "/resources/steel-buying-checklist-engineering-workshop",
      "/blog/steel-buying-checklist",
      "/guides/steel-buying-checklist",
    ],
    category: "Steel Products",
    categorySlug: "/products/steel-products",
    description:
      "Buying engineering steel for your workshop? Check the grade, dimensions, material condition, certification and other details before confirming your order.",
    readTime: "7 min read",
    date: "March 2026",
    publishDate: "2026-03-22",
    image: "/images/blog/steel-buying-checklist.jpg",
    imageAlt: "Workshop engineer inspecting engineering steel round bar dimensions with vernier calipers",
    tags: [
      "Engineering Steels",
      "EN8 (080M40)",
      "EN19 (708M40)",
      "MTC 3.1",
      "Machining Allowance",
      "Steel Procurement",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/en8-en19-mild-steel-comparison",
      "/guides/en8-vs-en19-steel",
      "/blog/why-end-mills-break",
    ],
  },
  {
    id: "why-end-mills-break",
    title: "Why Do End Mills Break? 7 Machining Mistakes That Can Destroy Cutting Tools",
    slug: "/blog/why-end-mills-break",
    aliases: [
      "/guides/why-end-mills-break",
      "/resources/why-end-mills-break",
      "/blog/end-mills-breakage",
      "/guides/end-mills-breakage",
    ],
    category: "Cutting and Machining Tools",
    categorySlug: "/products/cutting-machining-tools",
    description:
      "End mills chipping or breaking during machining? Learn seven possible causes involving tool selection, cutting conditions, chip evacuation, tool overhang, and machine setup.",
    readTime: "8 min read",
    date: "March 2026",
    publishDate: "2026-03-18",
    image: "/images/blog/why-end-mills-break.jpg",
    imageAlt: "Machinist inspecting solid carbide end mill wear and cutting flute integrity under workshop lighting",
    tags: [
      "End Mills",
      "Solid Carbide",
      "Tool Overhang",
      "Chip Evacuation",
      "CNC Milling",
      "Feeds & Speeds",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/how-to-choose-milling-machine-vice",
      "/blog/steel-buying-checklist-engineering-workshop",
      "/blog/why-drill-bits-burn-or-break",
      "/blog/hss-punches-how-to-choose-replacement",
    ],
  },
  {
    id: "why-drill-bits-burn-or-break",
    title: "Why Does Your Drill Bit Keep Burning or Breaking? 6 Mistakes to Check",
    slug: "/blog/why-drill-bits-burn-or-break",
    aliases: [
      "/guides/why-drill-bits-burn-or-break",
      "/resources/why-drill-bits-burn-or-break",
      "/blog/drill-bits-burning-breaking",
      "/guides/drill-bits-burning-breaking",
    ],
    category: "Cutting and Machining Tools",
    categorySlug: "/products/cutting-machining-tools",
    description:
      "Drill bits overheating, wearing quickly or breaking? Learn six possible causes, what to inspect on cutting lips and margins, and how to choose a suitable replacement for your workshop.",
    readTime: "7 min read",
    date: "March 2026",
    publishDate: "2026-03-15",
    image: "/images/blog/why-drill-bits-burn-or-break.jpg",
    imageAlt: "Close-up inspection of HSS and cobalt drill bit cutting lips, chisel edge, and margin wear",
    tags: [
      "Drill Bits",
      "HSS & Cobalt M35",
      "Cutting Speed (RPM)",
      "Feed Pressure",
      "Coolant & Lubrication",
      "Workpiece Clamping",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/hss-cobalt-carbide-drills",
      "/blog/why-end-mills-break",
      "/blog/why-metal-cutting-bandsaw-blade-breaks",
      "/blog/hss-punches-how-to-choose-replacement",
    ],
  },
  {
    id: "why-metal-cutting-bandsaw-blade-breaks",
    title: "Why Does Your Metal-Cutting Bandsaw Blade Keep Breaking? 6 Causes to Check",
    slug: "/blog/why-metal-cutting-bandsaw-blade-breaks",
    aliases: [
      "/guides/why-metal-cutting-bandsaw-blade-breaks",
      "/resources/why-metal-cutting-bandsaw-blade-breaks",
      "/blog/bandsaw-blade-breaking",
      "/guides/bandsaw-blade-breaking",
    ],
    category: "Sawing Products",
    categorySlug: "/products/sawing-products",
    description:
      "When metal-cutting blades keep breaking, stripping teeth, or wandering off cut lines, replacing blades without investigating the cause is an expensive cycle. Check tooth pitch, break-in, tension, and feed rates.",
    readTime: "8 min read",
    date: "March 2026",
    publishDate: "2026-03-12",
    image: "/images/blog/why-metal-cutting-bandsaw-blade-breaks.jpg",
    imageAlt: "Horizontal metal-cutting bandsaw blade tooth pitch and guide roller inspection",
    tags: [
      "Bandsaw Blades",
      "Tooth Pitch (TPI)",
      "Bi-Metal M42",
      "Blade Break-In",
      "Blade Tension",
      "Saw Guides",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/why-end-mills-break",
      "/blog/why-drill-bits-burn-or-break",
      "/guides/en8-vs-en19-steel",
    ],
  },
  {
    id: "hss-punches-how-to-choose-replacement",
    title: "HSS Punches Explained: 7 Mistakes to Avoid When Choosing a Replacement",
    slug: "/blog/hss-punches-how-to-choose-replacement",
    aliases: [
      "/guides/hss-punches-how-to-choose-replacement",
      "/resources/hss-punches-how-to-choose-replacement",
      "/guides/hss-punches",
      "/blog/hss-punches",
    ],
    category: "Cutting and Machining Tools",
    categorySlug: "/products/cutting-machining-tools",
    description:
      "Avoid 7 costly tooling errors when replacing HSS punches. Learn how to verify machine mounting compatibility, calculate die clearance, select suitable tool steel grades, and specify custom punch profiles.",
    readTime: "9 min read",
    date: "March 2026",
    publishDate: "2026-03-08",
    image: "/images/blog/hss-punches-how-to-choose-replacement.jpg",
    imageAlt: "Precision machined HSS punching tools, ironworker dies, and CNC turret tooling on inspection granite",
    tags: [
      "HSS Punches",
      "Die Clearance",
      "M2 Tool Steel",
      "Thick Turret",
      "Ironworker Punching",
      "Tooling Profiles",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/why-end-mills-break",
      "/guides/en8-vs-en19-steel",
      "/blog/why-drill-bits-burn-or-break",
    ],
  },
  {
    id: "en8-vs-en19-steel",
    title: "EN8 vs EN19 Steel: Differences, Applications and How to Choose",
    slug: "/guides/en8-vs-en19-steel",
    aliases: [
      "/guides/en8-vs-en19",
      "/resources/en8-vs-en19-steel",
      "/blog/en8-vs-en19-steel",
    ],
    category: "Steel Products",
    categorySlug: "/products/steel-products",
    description:
      "A comprehensive technical comparison between EN8 (080M40) unalloyed medium carbon steel and EN19 (708M40/709M40) chromium-molybdenum alloy steel for shafts, pins, gears, and machine components.",
    readTime: "12 min read",
    date: "February 2026",
    publishDate: "2026-02-15",
    image: "/images/blog/en8-vs-en19-steel.jpg",
    imageAlt: "Identifiable engineering steel round bars, turned shafts, splines and gears on workshop inspection bench",
    tags: [
      "EN8 (080M40)",
      "EN19 (708M40)",
      "Engineering Steels",
      "Tensile Strength",
      "Heat Treatment",
      "Shafts & Gears",
    ],
    featured: false,
    relatedSlugs: [
      "/blog/steel-buying-checklist-engineering-workshop",
      "/blog/why-end-mills-break",
      "/blog/why-drill-bits-burn-or-break",
    ],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Cutting and Machining Tools",
  "Machine Tooling and Workholding",
  "Sawing Products",
  "Steel Products",
] as const;

/**
 * Returns all articles sorted chronologically by publication date, newest first.
 * Permanent system requirement.
 */
export function getSortedArticles(): ArticleRecord[] {
  return [...ARTICLES].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/**
 * Returns the newest published articles, sorted chronologically newest first.
 * Used by the Homepage Latest Engineering Insights section.
 */
export function getLatestArticles(count = 3): ArticleRecord[] {
  return getSortedArticles().slice(0, count);
}

export function getArticleBySlug(slug: string): ArticleRecord | undefined {
  const normalized = slug.trim();
  return ARTICLES.find(
    (art) =>
      art.slug === normalized ||
      (art.aliases && art.aliases.includes(normalized))
  );
}

export function getRelatedArticles(currentSlug: string, count = 3): ArticleRecord[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) {
    return getLatestArticles(count);
  }

  // First try explicitly configured relatedSlugs
  const explicit = current.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is ArticleRecord => a !== undefined && a.slug !== current.slug);

  if (explicit.length >= count) {
    return explicit.slice(0, count);
  }

  // Fill in other articles sorted newest first
  const others = getSortedArticles().filter(
    (a) => a.slug !== current.slug && !explicit.some((e) => e.slug === a.slug)
  );

  return [...explicit, ...others].slice(0, count);
}
