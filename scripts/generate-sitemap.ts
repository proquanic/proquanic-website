/**
 * PROQUANIC (PVT) LTD — DYNAMIC XML SITEMAP BUILDER
 *
 * Dynamically builds the canonical XML sitemap from the live route configuration,
 * product category catalogue (src/data/categories.ts), and published blog articles
 * (src/data/articles.ts), excluding noindex, thank-you, draft, 404, and alias URLs.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { buildSitemapXml, getSitemapEntries } from "../src/utils/sitemap";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const publicSitemapPath = path.join(projectRoot, "public", "sitemap.xml");
const distDir = path.join(projectRoot, "dist");
const distSitemapPath = path.join(distDir, "sitemap.xml");

const entries = getSitemapEntries();
const xml = buildSitemapXml();

fs.writeFileSync(publicSitemapPath, xml, "utf8");
console.log(`[PASS] Generated public/sitemap.xml (${entries.length} canonical URLs)`);

if (fs.existsSync(distDir)) {
  fs.writeFileSync(distSitemapPath, xml, "utf8");
  console.log(`[PASS] Synced dist/sitemap.xml (${entries.length} canonical URLs)`);
}
