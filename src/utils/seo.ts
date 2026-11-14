import { CATEGORIES } from "../data/categories";
import { ARTICLES, getArticleBySlug } from "../data/articles";
import { COMPANY } from "../config/company";

export interface PageSeoConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical: string;
  ogType: "website" | "article";
  ogImage: string;
  keywords?: string;
  noindex?: boolean;
  breadcrumbs: { name: string; url: string }[];
  articleData?: {
    schemaType?: "Article" | "BlogPosting";
    headline: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    image: string;
    description: string;
    articleSection?: string;
    keywords?: string;
  };
}

const BASE_URL = "https://www.proquanic.co.zw";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero/hero-industrial.jpg`;

export function getSeoForPath(currentPath: string): PageSeoConfig {
  const cleanPath = currentPath.split("?")[0].replace(/\/+$/, "") || "/";

  // 1. Homepage
  if (cleanPath === "/") {
    return {
      title: "Proquanic (Pvt) Ltd | Industrial Suppliers & Machinery Bulawayo",
      description:
        "B2B industrial procurement & supply in Bulawayo, Zimbabwe: engineering steels, cutting tools, machinery, abrasives, and workshop equipment.",
      canonical: `${BASE_URL}/`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [{ name: "Home", url: `${BASE_URL}/` }],
    };
  }

  // 2. Products Catalogue Root
  if (cleanPath === "/products") {
    return {
      title: "Industrial Supplies Catalogue | Engineering Materials Bulawayo",
      description:
        "Explore all 10 industrial supply categories: engineering steels, cutting tools, bandsaw blades, abrasives, workholding, and workshop equipment.",
      canonical: `${BASE_URL}/products`,
      ogType: "website",
      ogImage: `${BASE_URL}/images/categories/cutting-machining-tools.jpg`,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Products", url: `${BASE_URL}/products` },
      ],
    };
  }

  // 3. Category Pages
  if (cleanPath.startsWith("/products/")) {
    const slug = cleanPath.replace("/products/", "");
    const category = CATEGORIES.find((c) => c.slug === slug);

    if (category) {
      let customTitle = `${category.title} Suppliers Bulawayo | Proquanic`;
      let customDesc = category.shortDescription;

      if (slug === "steel-products") {
        customTitle = "Steel Suppliers Bulawayo | Engineering & Alloy Steels Zimbabwe";
        customDesc =
          "Source engineering steels in Bulawayo, Zimbabwe: EN8, EN19, EN24, mild steel, tool steels, hollow sections and plate. Cut-to-size with fast delivery.";
      } else if (slug === "cutting-machining-tools") {
        customTitle = "Cutting Tools Suppliers Bulawayo | End Mills, Drills & Inserts";
        customDesc =
          "Industrial cutting tools suppliers in Bulawayo, Zimbabwe: solid carbide end mills, HSS and cobalt drill bits, indexable turning inserts, and reamers.";
      } else if (slug === "sawing-products") {
        customTitle = "Bandsaw Blades Suppliers Zimbabwe | Bi-Metal M42 | Proquanic";
        customDesc =
          "Bi-metal M42 bandsaw blades, power hacksaw blades, cold saw blades, and cutting lubricants for metal fabrication workshops in Bulawayo and Zimbabwe.";
      } else if (slug === "abrasives") {
        customTitle = "Industrial Abrasives Suppliers Bulawayo | Grinding Wheels & Discs";
        customDesc =
          "Industrial abrasives procurement in Zimbabwe: bonded grinding wheels, flap discs, cutting discs, surface conditioning belts, and coated abrasives.";
      } else if (slug === "machine-tooling-workholding") {
        customTitle = "Machine Tooling & Workholding Equipment Suppliers Zimbabwe";
        customDesc =
          "Precision milling machine vices, lathe chucks, collet chucks, clamping kits, and magnetic chucks for CNC and conventional machine shops in Zimbabwe.";
      } else if (slug === "metrology-inspection") {
        customTitle = "Metrology & Precision Inspection Tools Bulawayo | Proquanic";
        customDesc =
          "Precision measuring instruments in Zimbabwe: vernier calipers, digital micrometers, dial gauges, height gauges, and bore gauges for machine shops.";
      } else if (slug === "workshop-tools") {
        customTitle = "Engineering Workshop Tools Suppliers Zimbabwe | Proquanic";
        customDesc =
          "Industrial hand tools, impact sockets, torque wrenches, pullers, and pneumatic tools for engineering facilities and vehicle workshops in Bulawayo.";
      } else if (slug === "bearings-power-transmission") {
        customTitle = "Bearings & Power Transmission Suppliers Bulawayo, Zimbabwe";
        customDesc =
          "Deep groove ball bearings, roller bearings, pillow blocks, V-belts, roller chains, and couplings for industrial machinery and mining plants in Zimbabwe.";
      } else if (slug === "mechanical-components") {
        customTitle = "Fasteners & Mechanical Components Zimbabwe | Proquanic";
        customDesc =
          "High-tensile fasteners (Grade 8.8, 10.9), socket screws, circlips, dowel pins, hydraulic seals, and o-rings supplied to engineering works in Zimbabwe.";
      } else if (slug === "other-industrial-supplies") {
        customTitle = "Industrial Consumables & Maintenance Supplies Zimbabwe";
        customDesc =
          "Industrial maintenance lubricants, cutting fluids, anti-seize pastes, threadlockers, and engineering safety PPE for manufacturing facilities in Zimbabwe.";
      }

      return {
        title: customTitle,
        description: customDesc,
        canonical: `${BASE_URL}/products/${category.slug}`,
        ogType: "website",
        ogImage: `${BASE_URL}${category.image}`,
        breadcrumbs: [
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Products", url: `${BASE_URL}/products` },
          { name: category.title, url: `${BASE_URL}/products/${category.slug}` },
        ],
      };
    }
  }

  // 4. Machinery & Equipment
  if (cleanPath === "/machinery-equipment") {
    return {
      title: "Industrial Machinery Suppliers Zimbabwe | Machine Tool Procurement",
      description:
        "Procurement of industrial machinery in Zimbabwe: CNC machining centres, lathes, horizontal bandsaws, surface grinders, turret mills, and hydraulic presses.",
      canonical: `${BASE_URL}/machinery-equipment`,
      ogType: "website",
      ogImage: `${BASE_URL}/images/categories/machinery-equipment.jpg`,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Machinery & Equipment", url: `${BASE_URL}/machinery-equipment` },
      ],
    };
  }

  // 5. Industries We Serve
  if (cleanPath === "/industries") {
    return {
      title: "Industries We Serve | Mining, Manufacturing & Engineering Zimbabwe",
      description:
        "Supplying precision machine shops, mining operations, structural fabricators, foundries, and agricultural processing plants across Zimbabwe from Bulawayo.",
      canonical: `${BASE_URL}/industries`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Industries We Serve", url: `${BASE_URL}/industries` },
      ],
    };
  }

  // 6. About Proquanic
  if (cleanPath === "/about") {
    return {
      title: "About Proquanic (Pvt) Ltd | Industrial Procurement Bulawayo",
      description:
        "Bulawayo-based B2B industrial procurement and engineering supply partner. Our operational commitment: If you need it. We will find it. Serving all of Zimbabwe.",
      canonical: `${BASE_URL}/about`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "About Proquanic", url: `${BASE_URL}/about` },
      ],
    };
  }

  // 7. Request a Quotation (RFQ)
  if (cleanPath === "/request-a-quotation") {
    return {
      title: "Request a Quotation (RFQ) | Industrial Supplies Bulawayo, Zimbabwe",
      description:
        "Submit technical drawings, steel specifications, or tooling lists for itemized quotation. B2B procurement desk based in Bulawayo, serving Zimbabwe.",
      canonical: `${BASE_URL}/request-a-quotation`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Request a Quotation", url: `${BASE_URL}/request-a-quotation` },
      ],
    };
  }

  // 8. Contact Desk
  if (cleanPath === "/contact") {
    return {
      title: "Contact Proquanic (Pvt) Ltd | Industrial Suppliers Bulawayo",
      description:
        "Contact our Bulawayo procurement desk: +263 790 420 836, sales@proquanic.co.zw, 7010 Gwabalanda, Bulawayo. Direct WhatsApp and email quotation assistance.",
      canonical: `${BASE_URL}/contact`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Contact Procurement Desk", url: `${BASE_URL}/contact` },
      ],
    };
  }

  // 9. Site Delivery
  if (cleanPath === "/site-delivery") {
    return {
      title: "Site Delivery Arrangements | Nationwide Zimbabwe Industrial Freight",
      description:
        "Direct-to-site industrial delivery arrangements confirmed according to order requirements, cargo weight, and destination across Zimbabwe.",
      canonical: `${BASE_URL}/site-delivery`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Site Delivery Arrangements", url: `${BASE_URL}/site-delivery` },
      ],
    };
  }

  // 10. Privacy Policy
  if (cleanPath === "/privacy-policy") {
    return {
      title: "Privacy Policy | Technical Drawing Confidentiality | Proquanic",
      description:
        "Confidentiality and privacy terms for technical drawings, customer requisition specifications, and commercial quotation data at Proquanic (Pvt) Ltd.",
      canonical: `${BASE_URL}/privacy-policy`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Privacy Policy", url: `${BASE_URL}/privacy-policy` },
      ],
    };
  }

  // 11. Thank You (Conversion page - Noindex)
  if (cleanPath === "/thank-you") {
    return {
      title: "Quotation Request Received | Proquanic (Pvt) Ltd",
      description:
        "Thank you for submitting your Request for Quotation. Our procurement team will review your specifications and prepare an itemized quotation.",
      canonical: `${BASE_URL}/thank-you`,
      ogType: "website",
      ogImage: DEFAULT_IMAGE,
      noindex: true,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Thank You", url: `${BASE_URL}/thank-you` },
      ],
    };
  }

  // 12. Blog Index Hub
  if (cleanPath === "/blog" || cleanPath === "/guides" || cleanPath === "/resources") {
    return {
      title: "Engineering Insights & Technical Guides | Proquanic Bulawayo",
      description:
        "Practical technical insights, tooling troubleshooting, engineering steel comparisons, and procurement advice for Zimbabwean machinists and workshops.",
      canonical: `${BASE_URL}/blog`,
      ogType: "website",
      ogImage: `${BASE_URL}/images/categories/cutting-machining-tools.jpg`,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Engineering Knowledge Hub", url: `${BASE_URL}/blog` },
      ],
    };
  }

  // 13. Check all Articles by Slug
  const matchedArticle = getArticleBySlug(cleanPath);
  if (matchedArticle) {
    if (matchedArticle.id === "grinding-wheel-colours-specifications-buying-guide") {
      const seoDescription =
        "Understand grinding wheel colour coding, abrasive types, grit, grade, bond and dimensions. Learn what to specify when requesting industrial grinding wheels.";
      const grindingKeywords =
        "grinding wheel colour coding, grinding wheel colours, grinding wheel specifications, grinding wheel selection, abrasive wheel colour codes, grinding wheel grit 60, industrial grinding wheels, grinding wheel dimensions, grinding wheel RFQ, grinding wheel safety, PFERD grinding wheel colour code, TYROLIT grinding wheel colour code, grinding wheel abrasive types, grinding wheel grade and bond, industrial grinding wheels Zimbabwe";
      return {
        title: "Grinding Wheel Colours, Specifications and How to Choose the Right Wheel",
        description: seoDescription,
        ogTitle: matchedArticle.title,
        ogDescription: seoDescription,
        canonical: `${BASE_URL}${matchedArticle.slug}`,
        ogType: "article",
        ogImage: `${BASE_URL}${matchedArticle.image}`,
        keywords: grindingKeywords,
        breadcrumbs: [
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
          { name: "Abrasives", url: `${BASE_URL}/products/abrasives` },
          { name: matchedArticle.title, url: `${BASE_URL}${matchedArticle.slug}` },
        ],
        articleData: {
          schemaType: "Article",
          headline: matchedArticle.title,
          datePublished: matchedArticle.publishDate,
          dateModified: matchedArticle.publishDate,
          author: "Proquanic Technical Desk",
          image: `${BASE_URL}${matchedArticle.image}`,
          description: seoDescription,
          articleSection: "Abrasives",
          keywords: grindingKeywords,
        },
      };
    }

    if (matchedArticle.id === "k110-tool-steel-properties-applications") {
      const seoDescription =
        "Understand K110 tool steel, its properties, applications and material designations. Learn what to confirm before purchasing K110 for industrial tooling.";
      const k110Keywords =
        "K110 tool steel, K110 steel properties, 1.2379 tool steel, X153CrMoV12 steel, D2 tool steel, Cold work tool steel, Tool steel for punches, Tool steel for dies, Industrial knife steel, Engineering steel suppliers Zimbabwe, Tool steel Zimbabwe";
      return {
        title: "K110 Tool Steel: Properties, Applications and Buying Guide",
        description: seoDescription,
        ogTitle: matchedArticle.title,
        ogDescription: seoDescription,
        canonical: `${BASE_URL}${matchedArticle.slug}`,
        ogType: "article",
        ogImage: `${BASE_URL}${matchedArticle.image}`,
        keywords: k110Keywords,
        breadcrumbs: [
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
          { name: "Steel Products", url: `${BASE_URL}/products/steel-products` },
          { name: matchedArticle.title, url: `${BASE_URL}${matchedArticle.slug}` },
        ],
        articleData: {
          schemaType: "Article",
          headline: matchedArticle.title,
          datePublished: matchedArticle.publishDate,
          dateModified: matchedArticle.publishDate,
          author: "Proquanic Technical Desk",
          image: `${BASE_URL}${matchedArticle.image}`,
          description: seoDescription,
          articleSection: "Steel Products",
          keywords: k110Keywords,
        },
      };
    }

    if (matchedArticle.id === "spring-steel-properties-grades-applications") {
      const seoDescription =
        "Understand spring steel grades, properties, applications and supply conditions. Learn what to check before ordering spring steel for industrial and engineering work.";
      return {
        title: "Spring Steel: Grades, Properties and Industrial Applications | Proquanic",
        description: seoDescription,
        ogTitle: matchedArticle.title,
        ogDescription: seoDescription,
        canonical: `${BASE_URL}${matchedArticle.slug}`,
        ogType: "article",
        ogImage: `${BASE_URL}${matchedArticle.image}`,
        breadcrumbs: [
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
          { name: "Steel Products", url: `${BASE_URL}/products/steel-products` },
          { name: matchedArticle.title, url: `${BASE_URL}${matchedArticle.slug}` },
        ],
        articleData: {
          schemaType: "BlogPosting",
          headline: matchedArticle.title,
          datePublished: matchedArticle.publishDate,
          dateModified: matchedArticle.publishDate,
          author: "Proquanic Technical Desk",
          image: `${BASE_URL}${matchedArticle.image}`,
          description: seoDescription,
          articleSection: "Steel Products",
          keywords:
            "spring steel, spring steel properties, spring steel grades, spring steel flat bar, spring steel applications, spring steel material, spring steel dimensions, hardened and tempered spring steel, spring steel for engineering, industrial steel suppliers Zimbabwe, spring steel Bulawayo, engineering steel procurement, spring steel material specifications",
        },
      };
    }

    if (matchedArticle.id === "supplier-you-want-vs-supplier-you-need") {
      return {
        title: "Choosing the Right Industrial Supplier: Beyond the Cheapest Quote | Proquanic",
        description:
          "The cheapest industrial supplier isn't always the best choice. Discover how engineering and manufacturing businesses can assess supplier value, reliability and procurement decisions.",
        ogTitle: matchedArticle.title,
        ogDescription: matchedArticle.description,
        canonical: `${BASE_URL}${matchedArticle.slug}`,
        ogType: "article",
        ogImage: `${BASE_URL}${matchedArticle.image}`,
        breadcrumbs: [
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
          {
            name: "Procurement Insights",
            url: `${BASE_URL}/blog?category=Procurement%20Insights`,
          },
          { name: matchedArticle.title, url: `${BASE_URL}${matchedArticle.slug}` },
        ],
        articleData: {
          schemaType: "BlogPosting",
          headline: matchedArticle.title,
          datePublished: matchedArticle.publishDate,
          dateModified: matchedArticle.publishDate,
          author: "Proquanic Technical Desk",
          image: `${BASE_URL}${matchedArticle.image}`,
          description: matchedArticle.description,
          articleSection: matchedArticle.category,
          keywords:
            "choosing the right industrial supplier, industrial supplier selection, supplier evaluation, procurement best practices, supplier reliability, cheapest supplier vs best supplier, industrial procurement Zimbabwe, engineering supplies Zimbabwe, manufacturing procurement, supplier performance, procurement cost management, industrial sourcing, Bulawayo industrial supplies",
        },
      };
    }

    let customTitle = `${matchedArticle.title} | Proquanic`;
    if (customTitle.length > 65) {
      if (matchedArticle.id === "how-to-choose-milling-machine-vice") {
        customTitle = "How to Choose a Milling Machine Vice: Practical Buying Guide";
      } else if (matchedArticle.id === "hss-cobalt-carbide-drills") {
        customTitle = "HSS vs Cobalt vs Carbide Drills: Which Drill for Steel?";
      } else if (matchedArticle.id === "en8-en19-mild-steel-comparison") {
        customTitle = "EN8 vs EN19 vs Mild Steel: Comparison & Selection Guide";
      } else if (matchedArticle.id === "steel-buying-checklist-engineering-workshop") {
        customTitle = "Buying Engineering Steel: 8 Checks Before Ordering";
      } else if (matchedArticle.id === "why-end-mills-break") {
        customTitle = "Why Do End Mills Break? 7 Machining Mistakes to Avoid";
      } else if (matchedArticle.id === "why-drill-bits-burn-or-break") {
        customTitle = "Why Drill Bits Burn or Break: 6 Causes to Check";
      } else if (matchedArticle.id === "why-metal-cutting-bandsaw-blade-breaks") {
        customTitle = "Why Metal-Cutting Bandsaw Blades Break: 6 Causes";
      } else if (matchedArticle.id === "hss-punches-how-to-choose-replacement") {
        customTitle = "HSS Punches: 7 Replacement Mistakes to Avoid";
      } else if (matchedArticle.id === "en8-vs-en19-steel") {
        customTitle = "EN8 vs EN19 Steel: Differences, Properties & Applications";
      }
    }

    return {
      title: `${customTitle} | Proquanic`,
      description: matchedArticle.description,
      canonical: `${BASE_URL}${matchedArticle.slug}`,
      ogType: "article",
      ogImage: `${BASE_URL}${matchedArticle.image}`,
      breadcrumbs: [
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Blog", url: `${BASE_URL}/blog` },
        { name: matchedArticle.title, url: `${BASE_URL}${matchedArticle.slug}` },
      ],
      articleData: {
        headline: matchedArticle.title,
        datePublished: matchedArticle.publishDate,
        author: "Proquanic Technical Advisory Desk",
        image: `${BASE_URL}${matchedArticle.image}`,
        description: matchedArticle.description,
      },
    };
  }

  // 14. Fallback Default
  return {
    title: "Proquanic (Pvt) Ltd — Industrial Procurement & Supplies Bulawayo",
    description:
      "B2B industrial procurement and supply catalogue for steel products, cutting tools, machinery, and engineering equipment in Zimbabwe.",
    canonical: `${BASE_URL}${cleanPath}`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [{ name: "Home", url: `${BASE_URL}/` }],
  };
}

/**
 * Builds JSON-LD Schema.org structured data script contents for a page
 */
export function buildSchemaLdJson(seo: PageSeoConfig): object[] {
  const schemas: object[] = [];

  // 1. Organization / LocalBusiness
  schemas.push({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Proquanic (Pvt) Ltd",
    "legalName": "Proquanic (Pvt) Ltd",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/hero/hero-industrial.jpg`,
    "image": `${BASE_URL}/images/hero/hero-industrial.jpg`,
    "description":
      "B2B industrial procurement and supply of engineering steels, cutting tools, machinery, and workshop equipment in Bulawayo, Zimbabwe.",
    "telephone": "+263790420836",
    "email": "sales@proquanic.co.zw",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7010 Gwabalanda",
      "addressLocality": "Bulawayo",
      "addressCountry": "ZW",
    },
    "slogan": "If you need it. We will find it.",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Zimbabwe",
      },
      {
        "@type": "City",
        "name": "Bulawayo",
      },
      {
        "@type": "City",
        "name": "Harare",
      },
      {
        "@type": "City",
        "name": "Kwekwe",
      },
      {
        "@type": "City",
        "name": "Gweru",
      },
    ],
  });

  // 2. BreadcrumbList
  if (seo.breadcrumbs && seo.breadcrumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": seo.breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url,
      })),
    });
  }

  // 3. Article / BlogPosting Schema (if article)
  if (seo.ogType === "article" && seo.articleData) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": seo.articleData.schemaType || "Article",
      "headline": seo.articleData.headline,
      "description": seo.articleData.description,
      "image": [seo.articleData.image],
      "datePublished": seo.articleData.datePublished,
      "dateModified": seo.articleData.dateModified || seo.articleData.datePublished,
      ...(seo.articleData.articleSection
        ? { "articleSection": seo.articleData.articleSection }
        : {}),
      ...(seo.articleData.keywords ? { "keywords": seo.articleData.keywords } : {}),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": seo.canonical,
      },
      "author": {
        "@type": "Organization",
        "name": seo.articleData.author,
        "url": BASE_URL,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Proquanic (Pvt) Ltd",
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/favicon.png`,
        },
      },
    });
  }

  return schemas;
}
