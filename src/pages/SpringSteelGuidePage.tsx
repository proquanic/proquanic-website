import React, { useState, useEffect } from "react";
import { Link } from "../utils/router";
import { COMPANY } from "../config/company";
import {
  ChevronRight,
  Share2,
  Check,
  Printer,
  ArrowLeft,
  FileText,
  MessageSquare,
  Mail,
  Calendar,
  Clock,
  User,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { RelatedArticles } from "../components/RelatedArticles";

export const SpringSteelGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/spring-steel-properties-grades-applications";

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Proquanic, I am reading your spring steel buying guide and would like to submit a spring steel or engineering steel enquiry."
  )}`;

  const technicalReferences = [
    {
      title: "thyssenkrupp Steel — Spring Steel for Industrial Springs",
      url: "https://www.thyssenkrupp-steel.com/en/products/hot-strip/c-steel/spring-steel/federstahl.html",
    },
    {
      title: "thyssenkrupp Steel — Product Information for Spring Steels (PDF)",
      url: "https://www.thyssenkrupp-steel.com/media/content_1/publikationen/produktinformationen/c_stahl/thyssenkrupp_c-staehle_product_information_steel_en.pdf",
    },
    {
      title: "Alleima — Springflex Stainless Spring Steel Datasheet (PDF)",
      url: "https://www.alleima.com/se/technical-center/material-datasheets/strip-steel/springflex/?show=pdf",
    },
    {
      title: "British Stainless Steel Association — Specifying Stainless Steel for Spring Applications",
      url: "https://bssa.org.uk/bssa_articles/specifying-stainless-steel-for-spring-applications/",
    },
    {
      title: "Spring Steel Stock — Spring Steel Product Forms and Grades",
      url: "https://springsteelstock.co.uk/our-stock-at-a-glance/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors shrink-0">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href="/products/steel-products"
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Steel Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              Spring Steel Isn't Just Another Steel Bar
            </span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors cursor-pointer"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
        <article className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Article Header */}
            <header className="space-y-5 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <Link
                  href="/products/steel-products"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
                >
                  Steel Products · Engineering Steels
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-14">14 November 2026</time>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>9 min read</span>
                </span>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proquanic Technical Desk</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Spring Steel Isn't Just Another Steel Bar: What Buyers Need to Know
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/spring-steel-properties-grades-applications.jpg"
                  alt="Spring steel flat bars and strips arranged for dimensional inspection on an engineering bench."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </figure>

            {/* Complete Original Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <p>Not all steel is intended to behave the same way.</p>
              <p>
                Some engineering steels are selected for strength, others for machinability, wear resistance or their response to heat treatment. Spring steel has a different purpose: it is designed for applications where a component must withstand repeated loading and recover its shape without permanently deforming under its intended operating conditions.
              </p>
              <p>That makes material selection particularly important.</p>
              <p>
                Whether you are purchasing spring steel for a replacement component, manufacturing a spring or maintaining industrial equipment, choosing the wrong grade or condition can affect the performance and service life of the finished product.
              </p>
              <p>
                Here is what engineering and procurement teams should understand before ordering spring steel.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                What Exactly Is Spring Steel?
              </h2>
              <p>
                Spring steel is a family of steels developed for applications requiring suitable elastic behaviour, strength and resistance to repeated loading.
              </p>
              <p>
                Unlike ordinary low-carbon steel used for general fabrication, spring steel is selected and processed to achieve properties appropriate for spring applications.
              </p>
              <p>
                These properties depend on the steel's chemical composition, manufacturing process, dimensions and heat-treatment condition.
              </p>
              <p>
                Spring steels include carbon and alloy grades. Some applications also use stainless spring steels where corrosion resistance is important.
              </p>
              <p>There is no single universal spring steel grade suitable for every application.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Why Does Spring Steel Return to Its Original Shape?
              </h2>
              <p>
                A spring works by storing and releasing mechanical energy as it deflects under an applied load.
              </p>
              <p>
                When a spring is loaded within its designed elastic range, it can return towards its original shape after the load is removed.
              </p>
              <p>
                If the material is stressed beyond its elastic limit, permanent deformation can occur. The spring may no longer return to its intended dimensions or deliver the required force.
              </p>
              <p>
                This is why spring steel selection involves more than simply choosing a material that bends.
              </p>
              <p>
                The required properties must be appropriate for the component's dimensions, loading, operating conditions and expected service life.
              </p>
              <p>
                An important distinction is that spring steel is not automatically stiffer than ordinary steel. Elastic modulus and resistance to permanent deformation are different material characteristics. Spring steel is selected primarily for its ability to withstand higher elastic stresses in the intended application.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Common Spring Steel Grades
              </h2>
              <p>
                Spring steel is available in different grades and material families. The correct selection depends on the application and the applicable specification.
              </p>
              <p>Some examples include:</p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                C55S, C60S, C67S and C75S
              </h3>
              <p>
                These are examples of carbon spring steel grades covered by relevant European material specifications.
              </p>
              <p>
                Their suitability depends on the required properties, dimensions and condition of supply.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                C100S
              </h3>
              <p>
                C100S is a higher-carbon spring steel grade used in applications where the specified material properties are suitable.
              </p>
              <p>
                Its selection must consider the intended processing and finished-component requirements.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                51CrV4
              </h3>
              <p>
                51CrV4 is an alloy spring steel containing chromium and vanadium.
              </p>
              <p>
                It is used in demanding spring applications where the required combination of mechanical properties and processing characteristics is specified.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                80CrV2
              </h3>
              <p>
                80CrV2 is another alloy spring steel grade containing chromium and vanadium.
              </p>
              <p>
                It is used in selected spring and tooling applications, subject to the relevant grade specification and material condition.
              </p>

              <p>
                These examples are not interchangeable grades. Their composition, properties, heat-treatment response and intended applications differ.
              </p>
              <p>
                Always verify the exact grade against the required standard and manufacturer's documentation.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Spring Steel Is Supplied in Different Forms
              </h2>
              <p>
                The form of spring steel matters because it influences manufacturing, dimensions and the way the material will be processed.
              </p>
              <p>Common product forms include:</p>

              <p>
                <strong className="text-slate-950">Spring steel flat bar and strip</strong>
              </p>
              <p>
                Used in the manufacture of flat springs, clips, spring components, retaining elements and other formed parts.
              </p>

              <p>
                <strong className="text-slate-950">Spring steel round bar</strong>
              </p>
              <p>
                Used in selected applications involving larger spring components and manufacturing processes requiring bar stock.
              </p>

              <p>
                <strong className="text-slate-950">Spring steel wire</strong>
              </p>
              <p>
                Commonly used for compression springs, extension springs, torsion springs and other wire-formed components.
              </p>

              <p>
                <strong className="text-slate-950">Spring steel sheet</strong>
              </p>
              <p>
                Used in applications requiring formed or stamped spring components, depending on the grade, thickness and condition.
              </p>

              <p>
                A material may be available in one product form but unsuitable for a manufacturing process requiring another.
              </p>
              <p>
                When requesting a quotation, specify the actual product form rather than simply asking for spring steel.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Why the Condition of Supply Matters
              </h2>
              <p>
                Two products carrying the same nominal steel grade may behave differently if supplied in different conditions.
              </p>
              <p>Spring steel may be supplied in conditions such as:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Annealed</li>
                <li>Hardened and tempered</li>
                <li>Cold worked or cold drawn, where applicable</li>
                <li>Other specified manufacturing or heat-treatment conditions</li>
              </ul>
              <p>
                The appropriate condition depends on how the component will be manufactured.
              </p>
              <p>
                For example, a manufacturing process involving forming may require a material condition that allows the intended forming operation before subsequent heat treatment.
              </p>
              <p>
                A finished spring component may instead require material already processed to achieve specified mechanical properties.
              </p>
              <p>
                Do not assume that annealed spring steel and hardened and tempered spring steel can be used interchangeably.
              </p>
              <p>
                Confirm the required condition with the engineering drawing, manufacturing specification or responsible technical person.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Where Is Spring Steel Used?
              </h2>
              <p>Spring steel is used in a wide range of industrial applications.</p>
              <p>Examples include:</p>

              <p>
                <strong className="text-slate-950">Mechanical springs</strong>
              </p>
              <p>
                Compression, extension and torsion springs designed to provide controlled force or movement.
              </p>

              <p>
                <strong className="text-slate-950">Flat springs and clips</strong>
              </p>
              <p>
                Components used to provide retaining force, positioning or mechanical movement.
              </p>

              <p>
                <strong className="text-slate-950">Spring washers</strong>
              </p>
              <p>
                Components designed for particular fastening and loading arrangements.
              </p>

              <p>
                <strong className="text-slate-950">Automotive components</strong>
              </p>
              <p>
                Selected suspension and other spring-related components requiring specified mechanical performance.
              </p>

              <p>
                <strong className="text-slate-950">Industrial machinery</strong>
              </p>
              <p>
                Spring elements used in mechanisms, assemblies and equipment where repeated movement or loading occurs.
              </p>

              <p>
                <strong className="text-slate-950">Saw blades and selected tooling</strong>
              </p>
              <p>
                Certain spring steel grades and conditions are used in blade and tooling applications. The exact material must match the intended design and manufacturing process.
              </p>

              <p>
                These applications do not mean that every spring steel grade is suitable for every component.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Spring Steel vs Mild Steel: What Is the Difference?
              </h2>
              <p>
                Spring steel and{" "}
                <Link
                  href="/blog/en8-en19-mild-steel-comparison"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  mild steel
                </Link>{" "}
                serve different material requirements.
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-2xs my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0B192C] text-white font-semibold">
                    <tr>
                      <th className="p-3.5">Consideration</th>
                      <th className="p-3.5">Spring steel</th>
                      <th className="p-3.5">Mild steel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">General purpose</td>
                      <td className="p-3.5">Designed for specified spring-related mechanical performance</td>
                      <td className="p-3.5">General fabrication and engineering applications</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Carbon content</td>
                      <td className="p-3.5">Often higher in carbon spring steel grades; alloy grades vary</td>
                      <td className="p-3.5">Generally lower-carbon steel</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Elastic performance</td>
                      <td className="p-3.5">Selected and processed for suitable elastic loading</td>
                      <td className="p-3.5">Depends on the specified grade and condition</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Heat treatment</td>
                      <td className="p-3.5">Frequently important to achieving the required spring properties</td>
                      <td className="p-3.5">Depends on grade and intended application</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Typical uses</td>
                      <td className="p-3.5">Springs, clips, spring washers and selected elastic components</td>
                      <td className="p-3.5">Brackets, supports, fabricated structures and general components</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">Substitution</td>
                      <td className="p-3.5">Must meet the spring component's design requirements</td>
                      <td className="p-3.5">Not automatically suitable as a replacement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                This is a general comparison. Actual properties depend on the exact material grade, specification, dimensions and condition of supply.
              </p>
              <p>
                Mild steel should not be substituted for a specified spring steel component simply because both materials are steel.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                What Should You Check Before Buying Spring Steel?
              </h2>
              <p>Before approving a spring steel purchase, confirm these details.</p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                1. Exact material grade
              </h3>
              <p>
                Identify the grade specified by the drawing, bill of materials or approved material specification.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                2. Product form
              </h3>
              <p>
                Confirm whether the requirement is for flat bar, strip, round bar, wire or sheet.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                3. Dimensions
              </h3>
              <p>
                Specify thickness, width, diameter and length as applicable.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                4. Condition of supply
              </h3>
              <p>
                Confirm whether the material must be annealed, hardened and tempered or supplied in another specified condition.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                5. Mechanical requirements
              </h3>
              <p>
                Check the required mechanical properties where they are defined by the design or material specification.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                6. Manufacturing process
              </h3>
              <p>
                Establish whether the material will be formed, machined, stamped, heat-treated or processed in another way.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                7. Certification and traceability
              </h3>
              <p>
                Determine whether a material test certificate or other documentation is required.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                8. Quantity and commercial requirements
              </h3>
              <p>
                Confirm the quantity, unit of measure, pricing, applicable taxes and delivery or collection arrangements.
              </p>

              <p>
                A quotation that simply says &ldquo;spring steel&rdquo; is not sufficient to establish that the correct product has been offered.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Common Mistakes When Ordering Spring Steel
              </h2>
              <p>Avoid these purchasing mistakes:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Assuming all spring steel grades are equivalent.</li>
                <li>Confusing spring steel with ordinary mild steel.</li>
                <li>Ordering without confirming the required product form.</li>
                <li>Ignoring thickness, width, diameter or length.</li>
                <li>Overlooking the condition of supply.</li>
                <li>Assuming a hardened material can be formed in the same way as an annealed material.</li>
                <li>Accepting a substitute grade without technical approval.</li>
                <li>Assuming a material certificate is included without confirming it.</li>
                <li>Selecting a grade without considering the intended operating conditions.</li>
              </ul>
              <p>
                A properly specified requirement reduces misunderstandings and makes supplier quotations easier to compare.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                How to Request a Spring Steel Quotation
              </h2>
              <p>When requesting a spring steel quotation, provide:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Exact grade or material specification</li>
                <li>Product form</li>
                <li>Thickness, width, diameter or other required dimensions</li>
                <li>Required length</li>
                <li>Condition of supply</li>
                <li>Quantity</li>
                <li>Certification requirements</li>
                <li>Intended application, where relevant</li>
              </ul>
              <p>
                Where possible, attach the engineering drawing, material specification or photograph of the existing component.
              </p>
              <p>
                If the grade is unknown, explain what is known about the component and have the material requirement established before accepting a proposed replacement.
              </p>
              <p>Do not identify a material grade solely from its appearance.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Spring Steel and Engineering Steel Enquiries in Zimbabwe
              </h2>
              <p>
                Proquanic (Pvt) Ltd supports{" "}
                <Link
                  href="/about"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  industrial procurement
                </Link>{" "}
                and industrial supply requirements for businesses in Bulawayo and across Zimbabwe.
              </p>
              <p>
                For spring steel enquiries, provide the grade, product form, dimensions, condition of supply and quantity required.
              </p>
              <p>
                Whether the requirement involves spring steel flat bar or another{" "}
                <Link
                  href="/products/steel-products"
                  className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-300 underline-offset-2 transition-colors"
                >
                  engineering steel product
                </Link>
                , the specification should be established before the purchasing decision is made.
              </p>
              <p>
                Product identity, suitability, availability, lead time and pricing must be confirmed for the specific enquiry.
              </p>

              <p>
                <strong className="text-slate-950">
                  Need spring steel or other{" "}
                  <Link
                    href="/products"
                    className="text-orange-600 hover:text-orange-700 underline decoration-orange-300 underline-offset-2 transition-colors"
                  >
                    engineering materials
                  </Link>
                  ?
                </strong>
              </p>
              <p>Contact Proquanic (Pvt) Ltd:</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                >
                  sales@proquanic.co.zw
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`tel:${COMPANY.contact.phoneTel}`}
                  className="text-slate-900 hover:text-orange-600 font-medium"
                >
                  +263 790 420 836
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/263790420836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 break-all"
                >
                  https://wa.me/263790420836
                </a>
              </p>
              <p>
                Website:{" "}
                <Link
                  href="/"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                >
                  https://www.proquanic.co.zw
                </Link>
              </p>
              <p>
                <em>If you need it. We will find it.</em>
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Frequently Asked Questions
              </h2>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What is spring steel used for?
              </h3>
              <p>
                Spring steel is used in components that require suitable elastic behaviour and resistance to repeated loading. Applications include mechanical springs, flat springs, clips, spring washers and selected industrial components.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is spring steel stronger than mild steel?
              </h3>
              <p>
                The answer depends on the exact grades and material conditions being compared. Spring steel is selected and processed to achieve the mechanical properties required for spring applications. Do not assume a universal strength comparison without checking the material specifications.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Can spring steel be bent?
              </h3>
              <p>
                It depends on the grade and condition. Annealed spring steel may be suitable for certain forming operations before heat treatment. Hardened and tempered spring steel can behave very differently and may be unsuitable for ordinary forming processes.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is 51CrV4 a spring steel?
              </h3>
              <p>
                Yes. 51CrV4 is an alloy spring steel grade used in applications requiring specified mechanical properties.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Is spring steel available as flat bar?
              </h3>
              <p>
                Spring steel is available in different product forms, including strip and bar products, depending on the grade and supplier's product range. Confirm the actual dimensions and specification before ordering.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                Can mild steel replace spring steel?
              </h3>
              <p>
                Not automatically. The replacement must satisfy the component's mechanical and design requirements. A material substitution should be assessed and approved by the responsible engineer.
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-1">
                What information do I need when ordering spring steel?
              </h3>
              <p>
                Provide the grade, product form, dimensions, condition of supply, quantity and any certification requirements. A drawing or material specification is useful when available.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                Final Thoughts
              </h2>
              <p>Spring steel is not simply another type of steel bar.</p>
              <p>
                Its value lies in the properties achieved through its material composition, manufacturing process and condition of supply.
              </p>
              <p>
                For engineering and procurement teams, the important task is to identify the exact requirement before placing an order.
              </p>
              <p>
                The right grade, dimensions and material condition help ensure that the supplied steel is suitable for the component and its intended application.
              </p>

              {/* Part 3 — Technical References */}
              <section className="pt-6 border-t border-slate-200 space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Technical references</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The external technical references below provide general background across carbon spring steels, alloy spring steels and stainless spring steels, which follow separate material standards. These references support general material understanding only and do not represent a specification or stock claim for any specific item supplied by Proquanic (Pvt) Ltd.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  {technicalReferences.map((ref) => (
                    <li key={ref.url}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1.5"
                      >
                        <span>{ref.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>

        {/* Clear Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Proquanic Blog &amp; Technical Insights</span>
          </Link>
          <Link
            href="/products/steel-products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Explore Steel Products Category</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Enquiry CTA Bar */}
        <aside className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                Proquanic (Pvt) Ltd · Bulawayo, Zimbabwe
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Submit a Spring Steel or Engineering Steel Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send your grade, product form, dimensions, condition of supply, and drawings directly to our procurement desk for formal quotation. &ldquo;{COMPANY.tagline}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/request-a-quotation"
                className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quotation</span>
              </Link>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded shadow transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Sales</span>
              </a>
              <Link
                href="/contact"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded border border-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Related Articles from Published Blog Registry */}
        <RelatedArticles
          currentSlug="/blog/spring-steel-properties-grades-applications"
          count={3}
        />
      </div>
    </div>
  );
};
