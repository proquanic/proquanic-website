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
import { ArticleHashtags } from "../components/ArticleHashtags";

export const PneumaticConnectorsGuidePage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl =
    "https://www.proquanic.co.zw/blog/pneumatic-connectors-types-sizes-buying-guide";

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
    "Hello Proquanic, I am reading your pneumatic connectors guide and would like to request a quotation for pneumatic fittings."
  )}`;

  const articleHashtags = [
    "PneumaticConnectors",
    "PneumaticFittings",
    "PneumaticConnectorsZimbabwe",
    "PneumaticFittingsZimbabwe",
    "CompressedAir",
    "IndustrialPneumatics",
    "AirHoseConnectors",
    "PneumaticAdapters",
    "PushInFittings",
    "EngineeringSupplies",
    "IndustrialSuppliesZimbabwe",
    "ManufacturingZimbabwe",
    "EngineeringWorkshop",
    "BulawayoBusiness",
    "Proquanic",
  ];

  const relatedInternalGuides = [
    {
      title: "Browse All Proquanic Industrial Product Categories",
      href: "/products",
    },
    {
      title: "Machinery & Workshop Equipment Supply",
      href: "/machinery-equipment",
    },
    {
      title: "Brass Plate: Choosing the Right Grade, Thickness and Size Before You Order",
      href: "/blog/brass-plate-grades-sizes-applications",
    },
    {
      title: "Grinding Stones: Colours, Grit Sizes, Specifications and How to Choose the Right One",
      href: "/blog/grinding-wheel-colours-specifications-buying-guide",
    },
    {
      title: "Buying Steel for a Workshop? 8 Details You Should Confirm Before Paying",
      href: "/blog/steel-buying-checklist-engineering-workshop",
    },
    {
      title: "Contact Proquanic Procurement Desk in Bulawayo",
      href: "/contact",
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
              href="/products/mechanical-components"
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Mechanical Components
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              Pneumatic Connectors: Types &amp; Sizes
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
                  href="/products/mechanical-components"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
                >
                  Mechanical Components · Pneumatic Connectors &amp; Fittings
                </Link>
                <span className="text-slate-300">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime="2026-11-15">15 November 2026</time>
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
                Pneumatic Connectors in Zimbabwe: Types, Sizes and How to Choose the Right Fittings
              </h1>
            </header>

            {/* Featured Image */}
            <figure className="max-w-3xl mx-auto">
              <div className="relative aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/blog/pneumatic-connectors-types-sizes-buying-guide.jpg"
                  alt="Different pneumatic connectors and fittings arranged with pneumatic tubing on an industrial workshop bench."
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </figure>

            {/* Complete Article Body */}
            <div className="max-w-3xl mx-auto space-y-5 text-slate-800 text-base sm:text-[17px] leading-[1.8]">
              <p>
                Pneumatic systems depend on reliable connections between compressed-air equipment, pipes, hoses, tubing, valves and cylinders. A poorly selected connector can cause air leaks, pressure loss, unnecessary compressor running costs and machine downtime.
              </p>
              <p>
                For engineering workshops, manufacturing plants and maintenance departments in Zimbabwe, choosing the correct pneumatic connector is about more than finding a fitting that physically connects two components. The connection must match the tubing, thread, operating pressure, environment and application.
              </p>
              <p>
                This guide explains the common types of pneumatic connectors, what distinguishes them and what information to confirm before ordering.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                1. What Are Pneumatic Connectors?
              </h2>
              <p>
                Pneumatic connectors, also commonly called pneumatic fittings, are components used to connect sections of a compressed-air system.
              </p>
              <p>They provide connections between components such as:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Compressed-air pipes and tubing.</li>
                <li>Air hoses and pneumatic equipment.</li>
                <li>Directional control valves.</li>
                <li>Pneumatic cylinders.</li>
                <li>Air preparation units.</li>
                <li>Manifolds and distribution points.</li>
                <li>Other compatible pneumatic components.</li>
              </ul>
              <p>
                Their job is to provide a secure connection while maintaining the required operating conditions of the pneumatic system.
              </p>
              <p>
                The correct connector depends on the connection design and the equipment being joined. Not every pneumatic fitting is interchangeable.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                2. Common Types of Pneumatic Connectors
              </h2>
              <p>
                Pneumatic systems use different connector designs depending on the installation and application.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Push-in fittings
              </h3>
              <p>
                Push-in fittings allow compatible pneumatic tubing to be inserted directly into a fitting. A gripping mechanism holds the tube, while an internal sealing arrangement helps prevent air leakage.
              </p>
              <p>
                They are commonly used where tubing needs to be connected or disconnected during installation and maintenance.
              </p>
              <p>
                Available configurations in manufacturer product ranges include straight, elbow, tee, bulkhead and other connection arrangements.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Threaded fittings
              </h3>
              <p>
                Threaded fittings connect pneumatic components through compatible threaded ports.
              </p>
              <p>
                The thread must match the equipment connection. A fitting that appears to screw into a port is not necessarily the correct fitting.
              </p>
              <p>
                Threaded connections may use different thread standards and sealing arrangements.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Elbow connectors
              </h3>
              <p>
                Elbow connectors change the direction of a pneumatic connection, often where space is limited or tubing needs to be routed around other machine components.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Tee connectors
              </h3>
              <p>
                Tee connectors provide a branch connection, allowing a pneumatic line to divide into two directions.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Straight connectors and adapters
              </h3>
              <p>
                Straight connectors join compatible components in a direct line. Adapters connect components that have different connection arrangements, provided the combination is technically compatible.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Pneumatic quick couplings
              </h3>
              <p>
                Quick couplings allow pneumatic equipment and air hoses to be connected and disconnected quickly.
              </p>
              <p>
                The plug and socket must belong to compatible coupling systems. Similar-looking couplings are not automatically interchangeable.
              </p>

              {/* Section 3 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                3. Understanding Pneumatic Connector Sizes
              </h2>
              <p>
                One of the most important checks when ordering pneumatic fittings is size compatibility.
              </p>
              <p>There are two measurements that buyers must not confuse:</p>
              <p>
                <strong className="text-slate-950">Tube outside diameter (OD):</strong> The external diameter of the tube that enters the fitting.
              </p>
              <p>
                <strong className="text-slate-950">Thread size:</strong> The size and standard of the threaded connection that screws into a component or port.
              </p>
              <p>
                For example, a pneumatic fitting may be specified for a 6 mm tube with a G1/8 threaded connection. The 6 mm measurement refers to the tubing outside diameter, while G1/8 identifies the threaded port connection.
              </p>
              <p>These measurements describe different parts of the fitting.</p>
              <div className="bg-orange-50/80 border-l-4 border-orange-500 p-4 rounded-r-lg text-sm sm:text-base text-slate-900 font-semibold">
                Never order a pneumatic connector based only on the tube diameter or the apparent size of the threaded end.
              </div>

              {/* Section 4 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                4. BSP, Metric and Other Thread Connections
              </h2>
              <p>
                Thread identification is essential when selecting pneumatic fittings.
              </p>
              <p>Common thread designations encountered in industrial pneumatic equipment include:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>
                  <strong className="text-slate-950">G threads:</strong> Parallel pipe threads commonly associated with BSPP connections.
                </li>
                <li>
                  <strong className="text-slate-950">R threads:</strong> Tapered pipe threads associated with BSPT connections.
                </li>
                <li>
                  <strong className="text-slate-950">Metric threads:</strong> Designated using metric measurements, such as M5.
                </li>
              </ul>
              <p>
                G and R threads have different thread forms and sealing arrangements. They should not be treated as interchangeable simply because their nominal sizes appear similar.
              </p>
              <p>
                Other thread standards may also be encountered in industrial equipment. The equipment manufacturer&apos;s documentation should determine the required connection.
              </p>
              <p>
                Where the thread marking is unknown, use the equipment model, manufacturer&apos;s drawing or a qualified measurement rather than guessing.
              </p>

              {/* Section 5 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                5. Pneumatic Connector Materials
              </h2>
              <p>
                Connector material affects suitability, durability and resistance to the operating environment.
              </p>
              <p>Common materials include:</p>
              <p>
                <strong className="text-slate-950">Brass and nickel-plated brass:</strong> Used in many general-purpose pneumatic fitting applications.
              </p>
              <p>
                <strong className="text-slate-950">Engineering plastics:</strong> Used in various push-in fittings and other pneumatic connection designs.
              </p>
              <p>
                <strong className="text-slate-950">Stainless steel:</strong> Used where corrosion resistance or particular environmental requirements make it suitable.
              </p>
              <p>
                <strong className="text-slate-950">Other metals and specialised materials:</strong> Selected according to the manufacturer&apos;s design and application requirements.
              </p>
              <p>
                The best material depends on the environment, temperature, operating medium, pressure and equipment requirements. Do not assume that a connector suitable for a normal workshop installation will also be suitable for a corrosive or high-temperature environment.
              </p>

              {/* Section 6 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                6. What Should You Check Before Ordering Pneumatic Connectors?
              </h2>
              <p>Before requesting a quotation, confirm the following information:</p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-800">
                <li>
                  <strong className="text-slate-950">Connector type:</strong> Push-in, threaded, elbow, tee, straight, adapter or quick coupling.
                </li>
                <li>
                  <strong className="text-slate-950">Tube outside diameter:</strong> The exact tubing diameter where applicable.
                </li>
                <li>
                  <strong className="text-slate-950">Thread designation:</strong> For example, G1/8, R1/4 or M5, where confirmed.
                </li>
                <li>
                  <strong className="text-slate-950">Connection arrangement:</strong> Male, female, tube-to-tube or another configuration.
                </li>
                <li>
                  <strong className="text-slate-950">Material:</strong> Brass, nickel-plated brass, plastic, stainless steel or another specified material.
                </li>
                <li>
                  <strong className="text-slate-950">Operating pressure:</strong> The required working pressure and any applicable pressure limitations.
                </li>
                <li>
                  <strong className="text-slate-950">Operating temperature:</strong> The temperature range in which the fitting will operate.
                </li>
                <li>
                  <strong className="text-slate-950">Application:</strong> The machine, equipment or pneumatic circuit where the connector will be installed.
                </li>
                <li>
                  <strong className="text-slate-950">Quantity:</strong> The number of fittings required.
                </li>
                <li>
                  <strong className="text-slate-950">Manufacturer or part number:</strong> Where an existing component needs to be replaced.
                </li>
              </ol>
              <p>
                A photograph of the existing fitting, its markings and the equipment connection can help with identification. However, a photograph alone may not establish thread size or technical compatibility.
              </p>

              {/* Section 7 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                7. Common Mistakes When Buying Pneumatic Fittings
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Confusing tube diameter with thread size
              </h3>
              <p>
                A 6 mm tube connection does not mean the threaded port is 6 mm. These are separate specifications.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Assuming all BSP connections are the same
              </h3>
              <p>
                Parallel and tapered thread connections have different sealing arrangements. Confirm the exact thread designation.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Buying based only on appearance
              </h3>
              <p>
                Two fittings can look almost identical but have different thread sizes, materials or connection designs.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Ignoring operating pressure
              </h3>
              <p>
                A fitting must be suitable for the system&apos;s operating conditions. Check the manufacturer&apos;s pressure rating and any temperature-related limitations.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Mixing incompatible quick couplings
              </h3>
              <p>
                Quick-coupling systems must be checked for compatibility. Do not assume that plugs and sockets from different systems will connect safely.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                Replacing a fitting without checking the equipment
              </h3>
              <p>
                The correct replacement must match the original connection and the equipment manufacturer&apos;s requirements.
              </p>

              {/* Section 8 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                8. Where Can You Get Pneumatic Connectors in Zimbabwe?
              </h2>
              <p>
                Engineering workshops, manufacturing plants and maintenance departments require pneumatic fittings for new installations, machine maintenance and replacement work.
              </p>
              <p>
                Proquanic (Pvt) Ltd supplies{" "}
                <Link
                  href="/products"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                >
                  industrial materials, engineering supplies
                </Link>{" "}
                and{" "}
                <Link
                  href="/machinery-equipment"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                >
                  machinery
                </Link>{" "}
                to clients in Zimbabwe.
              </p>
              <p>
                We assist with enquiries for pneumatic connectors and related industrial requirements, with product identification based on the required connection type, dimensions and application.
              </p>
              <p>
                The required product may differ from one machine to another. We therefore recommend confirming the actual specifications before ordering rather than selecting a fitting based on appearance alone.
              </p>
              <p>For pneumatic connector enquiries, provide:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>A photograph of the existing connector, where available.</li>
                <li>Tube outside diameter.</li>
                <li>Thread size and type.</li>
                <li>Connector configuration.</li>
                <li>Required material.</li>
                <li>Quantity.</li>
                <li>Machine or application details.</li>
              </ul>
              <p>
                This information helps establish the correct product specification for your requirement.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                9. Request a Quotation from Proquanic
              </h2>
              <p>
                Looking for pneumatic connectors, pneumatic fittings or other industrial supplies in Zimbabwe?
              </p>
              <p>
                <Link
                  href="/contact"
                  className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                >
                  Send your product requirements to Proquanic
                </Link>{" "}
                for assistance with identifying the required specification and obtaining a quotation.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-sm sm:text-base">
                <p className="font-bold text-slate-950">Proquanic (Pvt) Ltd</p>
                <p className="text-slate-800">Address: 7010 Gwabalanda, Bulawayo, Zimbabwe</p>
                <p className="text-slate-800">
                  Email:{" "}
                  <a
                    href="mailto:sales@proquanic.co.zw"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    sales@proquanic.co.zw
                  </a>
                </p>
                <p className="text-slate-800">
                  WhatsApp:{" "}
                  <a
                    href="tel:+263790420836"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    +263 790 420 836
                  </a>
                </p>
                <p className="text-slate-800">
                  Website:{" "}
                  <a
                    href="https://www.proquanic.co.zw"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    https://www.proquanic.co.zw
                  </a>
                </p>
                <p className="text-slate-800">
                  WhatsApp enquiries:{" "}
                  <a
                    href="https://wa.me/263790420836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2"
                  >
                    https://wa.me/263790420836
                  </a>
                </p>
                <p className="font-bold text-slate-950 pt-1">If you need it. We will find it.</p>
              </div>

              {/* FAQs */}
              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What is the difference between pneumatic connectors and pneumatic fittings?
                  </h3>
                  <p>
                    The terms are commonly used to describe components that connect pneumatic tubing, hoses and equipment. The exact product may be a push-in fitting, threaded fitting, adapter or quick coupling.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    How do I identify the correct pneumatic fitting size?
                  </h3>
                  <p>
                    Measure the tubing outside diameter and identify the threaded connection separately. Confirm the thread standard and sealing arrangement using the equipment documentation or a reliable measurement.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Are G1/8 and R1/8 pneumatic connectors the same?
                  </h3>
                  <p>
                    No. G and R identify different thread forms and sealing arrangements. They should not be assumed to be interchangeable.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Can I use any pneumatic fitting with compressed air?
                  </h3>
                  <p>
                    No. The fitting must be designed and rated for the operating pressure, temperature and application. Always check the manufacturer&apos;s technical specifications.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    What information should I send when requesting pneumatic connectors?
                  </h3>
                  <p>
                    Send the connector type, tube outside diameter, thread designation, material, quantity and application. Include photographs and manufacturer part numbers where available.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Does Proquanic supply different pneumatic connector sizes?
                  </h3>
                  <p>
                    Proquanic handles industrial supply enquiries according to the required product specification. Submit the required dimensions, connection type and application so that the correct product can be identified.
                  </p>
                </div>
              </div>

              {/* Technical References */}
              <hr className="border-slate-200 my-6" />

              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                <span>External Technical References</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Provided as technical specification references only. Proquanic does not claim manufacturer authorisation or imply confirmed stock of specific catalogue lines through these references.
              </p>

              <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-950">SMC – Pneumatic Fittings</strong>
                  <br />
                  <a
                    href="https://www.smc.eu/en-gb/products/fittings~20945~nav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>https://www.smc.eu/en-gb/products/fittings~20945~nav</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">
                    Festo – Pneumatic fittings system and technical specifications
                  </strong>
                  <br />
                  <a
                    href="https://media.festo.com/assets/attachment-files/7844fd435d563119177abf22da42e3e074514e6a47acc15ce671ccbcfdbe46e484dfa59230eb4f5809e38511bf1c9f7b7254c7f4be31f7095f6976e2201014c3/Volvo_Cars_Specification_2.5_EN_2025-10.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>
                      https://media.festo.com/assets/attachment-files/7844fd435d563119177abf22da42e3e074514e6a47acc15ce671ccbcfdbe46e484dfa59230eb4f5809e38511bf1c9f7b7254c7f4be31f7095f6976e2201014c3/Volvo_Cars_Specification_2.5_EN_2025-10.pdf
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
                <li>
                  <strong className="text-slate-950">
                    RS South Africa – Pneumatic connectors, fittings and hoses
                  </strong>
                  <br />
                  <a
                    href="https://za.rs-online.com/web/c/pneumatics-hydraulics/pneumatic-connectors-fittings-hose/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2 inline-flex items-center gap-1 break-all"
                  >
                    <span>
                      https://za.rs-online.com/web/c/pneumatics-hydraulics/pneumatic-connectors-fittings-hose/
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </article>

        {/* Topic Hashtags (Existing Website Mechanism) */}
        <ArticleHashtags hashtags={articleHashtags} />

        {/* Internal Links to Verified Related Pages & Guides */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Related Industrial Catalogue Pages &amp; Engineering Guides
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
            {relatedInternalGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-center justify-between gap-2 p-3 rounded-lg border border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 text-slate-800 hover:text-orange-700 font-medium transition-colors"
                >
                  <span className="line-clamp-2">{guide.title}</span>
                  <ChevronRight className="w-4 h-4 text-orange-600 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

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
            href="/products/mechanical-components"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Explore Mechanical Components</span>
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
                Request a Pneumatic Connectors Quotation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send connector type, tube outside diameter (OD), thread designation (G, R, or metric), material, quantity, and photos or machine details for formal identification and quotation. &ldquo;{COMPANY.tagline}&rdquo;
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
          currentSlug="/blog/pneumatic-connectors-types-sizes-buying-guide"
          count={3}
        />
      </div>
    </div>
  );
};
