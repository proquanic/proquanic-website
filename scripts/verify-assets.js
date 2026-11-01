/**
 * PROQUANIC (PVT) LTD — IMAGE ASSET VERIFICATION SCRIPT
 *
 * Verifies that all local image paths referenced in the catalogue exist
 * in the public/ directory, have non-zero file sizes, and are ready for
 * deployment to GitHub and Netlify.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const REQUIRED_IMAGES = [
  'images/hero/hero-industrial.jpg',
  'images/categories/steel-products.jpg',
  'images/categories/cutting-machining-tools.jpg',
  'images/categories/sawing-products.jpg',
  'images/categories/abrasives.jpg',
  'images/categories/machine-tooling-workholding.jpg',
  'images/categories/metrology-inspection.jpg',
  'images/categories/workshop-tools.jpg',
  'images/categories/bearings-power-transmission.jpg',
  'images/categories/mechanical-components.jpg',
  'images/categories/other-industrial-supplies.jpg',
  'images/categories/machinery-equipment.jpg',
  // Blog article featured images
  'images/blog/en8-en19-mild-steel-comparison.jpg',
  'images/blog/steel-buying-checklist.jpg',
  'images/blog/why-end-mills-break.jpg',
  'images/blog/why-drill-bits-burn-or-break.jpg',
  'images/blog/why-metal-cutting-bandsaw-blade-breaks.jpg',
  'images/blog/hss-punches-how-to-choose-replacement.jpg',
  'images/blog/en8-vs-en19-steel.jpg',
  // Machinery & workshop equipment catalogue images
  'images/machinery/dahlih-mcv-cnc-machining-centre.jpg',
  'images/machinery/mazak-vcn-cnc-machining-centre.jpg',
  'images/machinery/sanco-heavy-duty-bed-mill.jpg',
  'images/machinery/accutex-au500ia-wire-cut-edm.jpg',
  'images/machinery/harp-precision-surface-grinder.jpg',
  'images/machinery/universal-cylindrical-grinding-machine.jpg',
  'images/machinery/powersaw-industrial-horizontal-bandsaw.jpg',
  'images/machinery/heavy-duty-centre-lathe.jpg',
  'images/machinery/conventional-turret-milling-machine.jpg',
  'images/machinery/radial-arm-drilling-machine.jpg',
  'images/machinery/geared-head-pedestal-drill.jpg',
  'images/machinery/hydraulic-workshop-press.jpg',
  'images/machinery/hydraulic-press-brake-guillotine.jpg',
  // Representative Zimbabwean workshop documentary images
  'images/machinery/zim_machinist_lathe.jpg',
  'images/machinery/zim_cnc_technician.jpg',
  'images/machinery/zim_engineers_inspection.jpg',
  'images/machinery/zim_bandsaw_operator.jpg',
  'images/machinery/zim_surface_grinder.jpg',
  'images/machinery/zim_edm_operator.jpg',
  'images/machinery/zim_turret_mill.jpg',
  'images/machinery/zim_radial_drill.jpg',
  'images/machinery/zim_hydraulic_press.jpg',
  'images/machinery/zim_press_brake.jpg',
];

console.log('--- Proquanic Asset Integrity Verification ---');
let hasError = false;

for (const imgRelPath of REQUIRED_IMAGES) {
  const fullPath = path.join(projectRoot, 'public', imgRelPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`[FAIL] Missing image file: public/${imgRelPath}`);
    hasError = true;
  } else {
    const stats = fs.statSync(fullPath);
    if (stats.size === 0) {
      console.error(`[FAIL] Image file is empty (0 bytes): public/${imgRelPath}`);
      hasError = true;
    } else {
      console.log(`[PASS] Verified: public/${imgRelPath} (${Math.round(stats.size / 1024)} KB)`);
    }
  }
}

// Check _redirects
const redirectsPath = path.join(projectRoot, 'public', '_redirects');
if (!fs.existsSync(redirectsPath)) {
  console.error('[FAIL] Missing public/_redirects file (Required for Netlify SPA routing)');
  hasError = true;
} else {
  console.log('[PASS] Verified: public/_redirects');
}

// Check netlify.toml
const netlifyToml = path.join(projectRoot, 'netlify.toml');
if (!fs.existsSync(netlifyToml)) {
  console.error('[FAIL] Missing netlify.toml configuration file');
  hasError = true;
} else {
  console.log('[PASS] Verified: netlify.toml');
}

if (hasError) {
  console.error('\n>>> ASSET VERIFICATION FAILED. DO NOT DEPLOY UNTIL FIXED. <<<');
  process.exit(1);
} else {
  console.log('\n>>> ALL 12 REQUIRED ASSETS AND CONFIGURATIONS VERIFIED SUCCESSFULLY. <<<\n');
  process.exit(0);
}
