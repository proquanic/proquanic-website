/**
 * PROQUANIC (PVT) LTD — STATIC ROUTE & GITHUB PAGES ENTRY GENERATOR
 *
 * Generates standalone dist/<route>/index.html entry files for all public SPA routes
 * (including /machinery-equipment) plus dist/404.html so direct URL access, Google Ads
 * sitelinks, and browser refreshes on GitHub Pages return HTTP 200 with accurate route SEO
 * metadata and never fall back to a GitHub Pages 404 error.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getSeoForPath, buildSchemaLdJson } from "../src/utils/seo";
import { CATEGORIES } from "../src/data/categories";
import { ARTICLES } from "../src/data/articles";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const distIndexPath = path.join(distDir, "index.html");
const sitemapPath = path.join(projectRoot, "public", "sitemap.xml");

if (!fs.existsSync(distIndexPath)) {
  console.error("[FAIL] dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(distIndexPath, "utf8");

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function upsertMetaTag(
  html: string,
  attrName: "name" | "property",
  attrValue: string,
  content: string
): string {
  const escapedAttr = attrValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attrName}=["']${escapedAttr}["'][^>]*>`,
    "i"
  );
  const replacement = `<meta ${attrName}="${attrValue}" content="${escapeHtmlAttr(content)}" />`;

  if (pattern.test(html)) {
    return html.replace(pattern, () => replacement);
  }

  return html.replace("</head>", () => `    ${replacement}\n  </head>`);
}

function applyRouteSeoToHtml(templateHtml: string, routePath: string): string {
  const seo = getSeoForPath(routePath);
  const ogTitle = seo.ogTitle || seo.title;
  const ogDesc = seo.ogDescription || seo.description;
  const schemas = buildSchemaLdJson(seo);

  let html = templateHtml;

  // Title
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    () => `<title>${escapeHtmlText(seo.title)}</title>`
  );

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${escapeHtmlAttr(seo.canonical)}" />`;
  if (/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i, () => canonicalTag);
  } else {
    html = html.replace("</head>", () => `    ${canonicalTag}\n  </head>`);
  }

  // Standard, OpenGraph, Twitter & Robots meta tags
  html = upsertMetaTag(html, "name", "description", seo.description);
  html = upsertMetaTag(html, "name", "robots", seo.noindex ? "noindex, nofollow" : "index, follow");

  if (seo.keywords) {
    html = upsertMetaTag(html, "name", "keywords", seo.keywords);
  }

  html = upsertMetaTag(html, "property", "og:title", ogTitle);
  html = upsertMetaTag(html, "property", "og:description", ogDesc);
  html = upsertMetaTag(html, "property", "og:url", seo.canonical);
  html = upsertMetaTag(html, "property", "og:type", seo.ogType);
  html = upsertMetaTag(html, "property", "og:image", seo.ogImage);
  html = upsertMetaTag(html, "property", "og:site_name", "Proquanic (Pvt) Ltd");

  html = upsertMetaTag(html, "name", "twitter:card", "summary_large_image");
  html = upsertMetaTag(html, "name", "twitter:title", ogTitle);
  html = upsertMetaTag(html, "name", "twitter:description", ogDesc);
  html = upsertMetaTag(html, "name", "twitter:image", seo.ogImage);

  // Structured data JSON-LD
  const ldJsonScript = `<script id="proquanic-schema-ldjson" type="application/ld+json">${JSON.stringify(
    schemas
  )}</script>`;
  if (/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i.test(html)) {
    html = html.replace(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i,
      () => ldJsonScript
    );
  } else {
    html = html.replace("</head>", () => `    ${ldJsonScript}\n  </head>`);
  }

  return html;
}

function collectRoutes(): string[] {
  const routes = new Set<string>([
    "/",
    "/products",
    "/machinery-equipment",
    "/request-a-quotation",
    "/industries",
    "/about",
    "/contact",
    "/site-delivery",
    "/privacy-policy",
    "/cookie-policy",
    "/thank-you",
    "/blog",
    "/guides",
    "/resources",
    // Legacy/alias article routes supported by src/App.tsx
    "/guides/en8-vs-en19",
    "/resources/en8-vs-en19-steel",
    "/blog/en8-vs-en19-steel",
    "/guides/hss-punches-how-to-choose-replacement",
    "/resources/hss-punches-how-to-choose-replacement",
    "/guides/hss-punches",
    "/blog/hss-punches",
    "/guides/how-to-choose-milling-machine-vice",
    "/resources/how-to-choose-milling-machine-vice",
    "/blog/milling-machine-vice-guide",
    "/guides/hss-cobalt-carbide-drills",
    "/resources/hss-cobalt-carbide-drills",
    "/blog/drill-selection-guide",
    "/guides/why-metal-cutting-bandsaw-blade-breaks",
    "/resources/why-metal-cutting-bandsaw-blade-breaks",
    "/blog/bandsaw-blade-breaking",
    "/guides/bandsaw-blade-breaking",
    "/guides/why-drill-bits-burn-or-break",
    "/resources/why-drill-bits-burn-or-break",
    "/blog/drill-bits-burning-breaking",
    "/guides/drill-bits-burning-breaking",
    "/guides/why-end-mills-break",
    "/resources/why-end-mills-break",
    "/blog/end-mills-breakage",
    "/guides/end-mills-breakage",
    "/guides/steel-buying-checklist-engineering-workshop",
    "/resources/steel-buying-checklist-engineering-workshop",
    "/blog/steel-buying-checklist",
    "/guides/steel-buying-checklist",
    "/guides/en8-en19-mild-steel-comparison",
    "/resources/en8-en19-mild-steel-comparison",
    "/blog/en8-vs-en19-vs-mild-steel",
    "/guides/en8-vs-en19-vs-mild-steel",
  ]);

  // All category routes
  for (const cat of CATEGORIES) {
    routes.add(`/products/${cat.slug}`);
  }

  // All published articles and configured aliases
  for (const article of ARTICLES) {
    routes.add(article.slug);
    if (article.aliases) {
      for (const alias of article.aliases) {
        routes.add(alias);
      }
    }
  }

  // Include all URLs from public/sitemap.xml
  if (fs.existsSync(sitemapPath)) {
    const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
    const matches = sitemapXml.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/gi);
    for (const match of matches) {
      const cleanPath = (match[1] || "/").replace(/\/+$/, "") || "/";
      routes.add(cleanPath);
    }
  }

  return Array.from(routes);
}

const allRoutes = collectRoutes();
let generatedCount = 0;

console.log("--- Proquanic GitHub Pages Static Route Generation ---");

// Update root dist/index.html with synchronized homepage SEO
fs.writeFileSync(distIndexPath, applyRouteSeoToHtml(baseHtml, "/"), "utf8");
console.log("[PASS] Updated: dist/index.html (/)");

// Generate static entry files for every non-root route (e.g. dist/machinery-equipment/index.html)
for (const route of allRoutes) {
  if (route === "/") continue;

  const relDir = route.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!relDir) continue;

  const targetDir = path.join(distDir, relDir);
  const targetFile = path.join(targetDir, "index.html");

  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetFile, applyRouteSeoToHtml(baseHtml, route), "utf8");
  generatedCount += 1;

  if (route === "/machinery-equipment") {
    console.log("[PASS] Generated priority landing route: dist/machinery-equipment/index.html");
  }
}

// Generate dist/404.html fallback for GitHub Pages SPA support on unlisted subpaths
const fallback404Path = path.join(distDir, "404.html");
fs.writeFileSync(fallback404Path, baseHtml, "utf8");
console.log("[PASS] Generated GitHub Pages SPA fallback: dist/404.html");

// Also ensure dist/.nojekyll exists so GitHub Pages never ignores underscore-prefixed files
fs.writeFileSync(path.join(distDir, ".nojekyll"), "", "utf8");
console.log("[PASS] Generated: dist/.nojekyll");

console.log(`\n>>> GENERATED ${generatedCount} STATIC ROUTE ENTRY PAGES IN dist/ FOR GITHUB PAGES. <<<\n`);
