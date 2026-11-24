import { CATEGORIES } from "../data/categories";
import { ARTICLES } from "../data/articles";
import { getSeoForPath } from "./seo";

export const CANONICAL_SITE_ORIGIN = "https://www.proquanic.co.zw";

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

interface CoreRouteDefinition {
  path: string;
  changefreq: SitemapEntry["changefreq"];
  priority: string;
  lastmod?: string;
}

const CORE_PUBLIC_ROUTES: CoreRouteDefinition[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/products", changefreq: "weekly", priority: "0.95" },
  { path: "/machinery-equipment", changefreq: "weekly", priority: "0.9" },
  { path: "/request-a-quotation", changefreq: "monthly", priority: "0.9" },
  { path: "/industries", changefreq: "monthly", priority: "0.85" },
  { path: "/industries/mining-mineral-processing", changefreq: "weekly", priority: "0.9" },
  { path: "/industries/manufacturing-industrial-production", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.85" },
  { path: "/site-delivery", changefreq: "monthly", priority: "0.75" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.4" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.4", lastmod: "2026-11-15" },
];

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function normalizeRoutePath(rawPath: string): string {
  const withoutHash = (rawPath || "/").split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  let clean = withoutQuery.trim() || "/";
  if (!clean.startsWith("/")) clean = `/${clean}`;
  if (clean.length > 1) {
    clean = clean.replace(/\/+$/, "") || "/";
  }
  return clean;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isPublicCanonicalRoute(routePath: string): boolean {
  const normalized = normalizeRoutePath(routePath);
  if (
    normalized === "/thank-you" ||
    normalized === "/404" ||
    normalized.startsWith("/_") ||
    normalized.startsWith("/api")
  ) {
    return false;
  }

  const seo = getSeoForPath(normalized);
  if (seo.noindex) {
    return false;
  }

  const expectedCanonical = `${CANONICAL_SITE_ORIGIN}${normalized}`;
  return seo.canonical === expectedCanonical;
}

function isRecordDraft(record: unknown): boolean {
  if (!record || typeof record !== "object") return false;
  const r = record as {
    draft?: boolean;
    isDraft?: boolean;
    published?: boolean;
    status?: string;
  };
  return (
    r.draft === true ||
    r.isDraft === true ||
    r.published === false ||
    (typeof r.status === "string" && r.status.toLowerCase() === "draft")
  );
}

/**
 * Dynamically collects all canonical, public, indexable URLs from the
 * application route registry, product category catalogue, and blog articles.
 */
export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const seenCanonicalUrls = new Set<string>();

  const addEntry = (
    routePath: string,
    changefreq: SitemapEntry["changefreq"],
    priority: string,
    lastmod?: string
  ) => {
    const normalized = normalizeRoutePath(routePath);
    if (!isPublicCanonicalRoute(normalized)) return;

    const loc = `${CANONICAL_SITE_ORIGIN}${normalized}`;
    if (seenCanonicalUrls.has(loc)) return;
    seenCanonicalUrls.add(loc);

    entries.push({
      loc,
      changefreq,
      priority,
      ...(lastmod && ISO_DATE_RE.test(lastmod) ? { lastmod } : {}),
    });
  };

  // 1. Core Brand, Machinery, Procurement & Policy Pages
  for (const route of CORE_PUBLIC_ROUTES) {
    addEntry(route.path, route.changefreq, route.priority, route.lastmod);
  }

  // 2. All Published Product Category Pages (from src/data/categories.ts)
  for (const category of CATEGORIES) {
    if (isRecordDraft(category)) continue;
    const priority =
      category.slug === "steel-products" || category.slug === "cutting-machining-tools"
        ? "0.9"
        : category.slug === "other-industrial-supplies"
          ? "0.8"
          : "0.85";

    addEntry(`/products/${category.slug}`, "weekly", priority);
  }

  // 3. Engineering Knowledge Hub & Published Blog Articles (from src/data/articles.ts)
  const publishedArticles = ARTICLES.filter((article) => !isRecordDraft(article));
  const latestArticleDate = publishedArticles
    .map((a) => a.publishDate)
    .filter((d) => ISO_DATE_RE.test(d))
    .sort()
    .at(-1);

  addEntry("/blog", "weekly", "0.85", latestArticleDate);

  for (const article of publishedArticles) {
    const articleLastMod = ISO_DATE_RE.test(article.publishDate) ? article.publishDate : undefined;
    addEntry(article.slug, "monthly", "0.85", articleLastMod);
  }

  return entries;
}

/**
 * Generates a standards-compliant XML sitemap string using the canonical
 * https://www.proquanic.co.zw domain.
 */
export function buildSitemapXml(): string {
  const entries = getSitemapEntries();

  const urlNodes = entries.map((entry) => {
    const lines = [
      "  <url>",
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      ...(entry.lastmod ? [`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`] : []),
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      "  </url>",
    ];
    return lines.join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlNodes,
    "</urlset>",
    "",
  ].join("\n");
}
