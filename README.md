# Proquanic (Pvt) Ltd — Industrial Procurement & Supply Website

Production website and digital product catalogue for **Proquanic (Pvt) Ltd**, a B2B industrial procurement and supply company specializing in engineering steels, precision cutting tools, machine tooling, and heavy industrial machinery in Bulawayo, Zimbabwe and Southern Africa.

---

## 1. Verified Company Identity

- **Company Name:** Proquanic (Pvt) Ltd
- **Tagline:** *"If you need it. We will find it."*
- **Physical Address:** 7010 Gwabalanda, Bulawayo, Zimbabwe
- **Official Email:** `proquanic@gmail.com`
- **Telephone Desk:** `+263 79 042 0836`
- **WhatsApp Desk:** `+263 79 042 0836` (Direct link: `https://wa.me/263790420836`)

---

## 2. Project Architecture & Directory Structure

```text
/
├── public/
│   ├── _redirects               # Netlify SPA routing fallback rule (/* /index.html 200)
│   ├── robots.txt               # Search crawler permissions
│   ├── sitemap.xml              # Structured XML sitemap
│   └── images/
│       ├── hero/
│       │   └── hero-industrial.jpg
│       └── categories/
│           ├── steel-products.jpg
│           ├── cutting-machining-tools.jpg
│           ├── sawing-products.jpg
│           ├── abrasives.jpg
│           ├── machine-tooling-workholding.jpg
│           ├── metrology-inspection.jpg
│           ├── workshop-tools.jpg
│           ├── bearings-power-transmission.jpg
│           ├── mechanical-components.jpg
│           ├── other-industrial-supplies.jpg
│           └── machinery-equipment.jpg
├── scripts/
│   └── verify-assets.js         # Automated build-time asset verification script
├── src/
│   ├── assets/                  # Bundled assets
│   ├── components/
│   │   ├── BrandWordmark.tsx    # Single-word continuous baseline brand mark
│   │   ├── FloatingWhatsApp.tsx # Persistent accessible floating WhatsApp action
│   │   ├── Footer.tsx           # Comprehensive footer with scope notice
│   │   ├── Navbar.tsx           # 3-Zone top bar contract + mobile drawer
│   │   └── SafeImage.tsx        # Zero-broken-image fallback container
│   ├── config/
│   │   └── company.ts           # Central company, brand colors, and contact config
│   ├── context/
│   │   └── RfqContext.tsx       # Multi-item persistent quotation requisition cart
│   ├── data/
│   │   ├── categories.ts        # The 10 main categories in exact specified order
│   │   └── machinery.ts         # Machinery & industrial equipment specifications
│   ├── pages/
│   │   ├── AboutPage.tsx        # Company background and values
│   │   ├── CategoryPage.tsx     # Deep category & product technical parameter views
│   │   ├── ContactPage.tsx      # Contact cards and message dispatch
│   │   ├── HomePage.tsx         # Complete industrial homepage
│   │   ├── MachineryPage.tsx    # Dedicated heavy equipment sourcing portal
│   │   ├── PrivacyPolicyPage.tsx# Commercial confidentiality and drawing privacy
│   │   ├── ProductsPage.tsx     # Full catalogue list with live filter
│   │   └── RfqPage.tsx          # Multi-channel RFQ requisition engine
│   ├── utils/
│   │   └── router.ts            # History API client router with deep-link support
│   ├── App.tsx                  # Application layout and dynamic SEO meta tags
│   ├── index.css                # Tailwind CSS + print styling rules
│   └── main.tsx                 # React entry point
├── netlify.toml                 # Netlify build and redirect configuration
├── package.json
└── vite.config.ts
```

---

## 3. Local Development & Installation

### Install Dependencies
```bash
npm install
```

### Verify Assets
Run the automated image verification check:
```bash
npm run verify-assets
```

### Run Local Development Server
```bash
npm run dev
```
The site runs at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
This executes the asset verification script followed by `vite build`. Output is written cleanly to `/dist`.

---

## 4. Where Product Images are Stored & Why Deployment Paths are Reliable

All product and hero images are stored in the local project repository under:
```text
/public/images/
```

- When built with Vite, files in `/public` are copied directly into the `/dist` root without path alteration.
- Assets are referenced using root-relative paths (`/images/categories/...`), ensuring they resolve identically on local dev, preview sandboxes, nested routes (e.g. `/products/steel-products`), and production Netlify URLs.
- The automated `scripts/verify-assets.js` script verifies that every required image exists and has a valid file size prior to building.

---

## 5. Maintenance & Configuration Guide

### How to Update Company Details & Contact Numbers
Open `src/config/company.ts`:
- Update `COMPANY.contact.phoneDisplay`, `phoneTel`, or `whatsappNumber`.
- Update `COMPANY.contact.email`.
- Update `COMPANY.address`.

### How to Add or Edit a Product Record
Open `src/data/categories.ts`:
- Locate the relevant category (e.g., `steel-products`).
- Add an entry to the `sampleProducts` array with `name`, `code`, `specifications`, `applications`, and `unitOfMeasure`.

### How to Update Social Media Links
Open `src/config/company.ts` under `COMPANY.socialMedia`:
- Set the `url` and update `status: "verified"` once official company handles are established.

### How to Configure RFQ Delivery
The RFQ form (`src/pages/RfqPage.tsx`) implements a multi-channel delivery architecture:
1. **Netlify Forms:** Submits form data via POST with `data-netlify="true"` and honeypot spam filtering. When deployed on Netlify, submissions appear in the Netlify Dashboard under **Forms**. You can configure Netlify to forward every submission directly to `proquanic@gmail.com`.
2. **Direct Email (mailto):** Instant one-click button pre-filling the full itemized requisition into the user's email client addressed to `proquanic@gmail.com`.
3. **WhatsApp Desk:** Direct transmission to `+263 79 042 0836` with the complete structured RFQ breakdown.
4. **Print / PDF Sheet:** Formatted print requisition sheet for internal procurement archiving.

---

## 6. How to Export to GitHub and Deploy to Netlify (Free Plan)

### Step 1: Push to GitHub
1. Create a new GitHub repository (e.g., `proquanic-website`).
2. Initialize git and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Proquanic industrial catalogue website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/proquanic-website.git
   git push -u origin main
   ```

### Step 2: Deploy on Netlify
1. Log in to your [Netlify account](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and choose the `proquanic-website` repository.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.
6. Under **Site Configuration** > **Forms**, enable email notifications to `proquanic@gmail.com` for new submissions.

### Step 3: Connecting a Custom Domain Later (e.g., `.co.zw`)
1. In the Netlify dashboard, navigate to **Site configuration** > **Domain management**.
2. Click **Add a domain** and enter your registered domain (e.g., `proquanic.co.zw`).
3. Follow Netlify's DNS instructions (point DNS A Record and CNAME to Netlify's load balancer).
4. Netlify will automatically provision a free Let's Encrypt SSL certificate once DNS propagates.
