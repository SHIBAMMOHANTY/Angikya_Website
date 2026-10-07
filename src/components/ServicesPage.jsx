import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  Users,
  Boxes,
  Eye,
  Pill,
  CheckSquare,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// The 7 Flagship Enterprise Systems & Services with Curated Professional Imagery
const servicesData = [
  {
    id: "hmis",
    category: "Healthcare",
    code: "SYS // HMIS-01",
    shortName: "HMIS",
    title: "Hospital Management Information System",
    badge: "NABH / HL7 Compliant",
    icon: Activity,
    accentFrom: "#0ea5e9",
    accentTo: "#2563eb",
    glowColor: "rgba(14, 165, 233, 0.35)",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description:
      "A clinical operating system connecting OPD, IPD, emergency triage, electronic health records (EHR), pathology diagnostic labs, and automated insurance claims.",
    features: [
      "OPD, IPD & Real-time Bed Allocation Management",
      "Electronic Health Records (EHR / EMR) with Audit Trail",
      "Laboratory (LIS) & Radiology Diagnostic Sync",
      "Automated TPA & Cashless Insurance Invoicing Engine",
    ],
    techTags: ["HL7 / FHIR", "EHR Interoperable", "NABH Standards", "Role RBAC"],
  },
  {
    id: "hrms",
    category: "Enterprise",
    code: "SYS // HRMS-02",
    shortName: "HRMS",
    title: "Human Resource Management System",
    badge: "Automated Payroll & Biometrics",
    icon: Users,
    accentFrom: "#6366f1",
    accentTo: "#4f46e5",
    glowColor: "rgba(99, 102, 241, 0.35)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description:
      "Modern employee lifecycle intelligence from onboarding to settlement. Unifies biometric attendance, tax slabs, automated payroll disbursement, and appraisal KPIs.",
    features: [
      "Biometric & Geofenced Mobile Attendance Tracking",
      "1-Click Automated Payroll & Statutory Tax Calculations",
      "Leave Balances & Dynamic Shift Rostering Engine",
      "Employee Self-Service (ESS) & KPI Performance Reviews",
    ],
    techTags: ["Biometric Sync", "Statutory Compliance", "Multi-Branch", "Tax Slabs"],
  },
  {
    id: "inventory",
    category: "Logistics",
    code: "SYS // INV-03",
    shortName: "Inventory ERP",
    title: "Inventory Management System",
    badge: "Real-time Multi-Warehouse Sync",
    icon: Boxes,
    accentFrom: "#10b981",
    accentTo: "#059669",
    glowColor: "rgba(16, 185, 129, 0.35)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description:
      "High-precision supply chain and asset tracking with barcode/QR scanning, multi-godown transfers, low-stock reorder triggers, automated POs, and FIFO/LIFO audits.",
    features: [
      "Multi-Godown & Centralized Warehouse Stock Sync",
      "Barcode & QR Code Instant Stock Auditing Engine",
      "Automated Reordering & Min-Max Threshold Alerts",
      "FIFO / LIFO Batch Valuation & Wastage Tracking",
    ],
    techTags: ["Barcode / QR API", "Multi-Warehouse", "FIFO / LIFO", "Auto POs"],
  },
  {
    id: "iol",
    category: "Healthcare",
    code: "SYS // IOL-04",
    shortName: "IOL Management",
    title: "IOL Management System",
    badge: "Intraocular Lens & Ophthalmic ERP",
    icon: Eye,
    accentFrom: "#06b6d4",
    accentTo: "#0284c7",
    glowColor: "rgba(6, 182, 212, 0.35)",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    description:
      "Specialized clinical inventory solution for ophthalmic hospitals and eye institutes. Accurately manages consignment lens stocks, power/diopter matrices, and OT implants.",
    features: [
      "Diopter Power, Cylinder & Lens Model Mapping Matrix",
      "Vendor Consignment Stock Reconciliations & Audits",
      "OT Surgery Issue, Implant & Lens Consumption Logging",
      "Batch Expiry Tracking & Real-Time Patient Implant Log",
    ],
    techTags: ["Diopter Matrix", "Consignment ERP", "OT Integrated", "Lens Traceability"],
  },
  {
    id: "medicine",
    category: "Healthcare",
    code: "SYS // MED-05",
    shortName: "Medicine Management",
    title: "Medicine & Pharmacy Management System",
    badge: "Batch & Expiry Controlled",
    icon: Pill,
    accentFrom: "#ec4899",
    accentTo: "#d946ef",
    glowColor: "rgba(236, 72, 153, 0.35)",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    description:
      "Retail and hospital pharmacy automation with early expiry alerts, generic salt substitution mapping, doctor e-prescription auto-dispensing, and GST invoicing.",
    features: [
      "Batch & Expiry Date Radar with Early Proactive Warnings",
      "Generic Salt & Alternative Medicine Suggestion Engine",
      "Direct Doctor e-Prescription Auto-Fetch & Dispense",
      "Wholesale & Retail GST Invoicing with Barcode Scanning",
    ],
    techTags: ["Salt Mapping", "Batch Radar", "e-Rx Sync", "GST Compliant"],
  },
  {
    id: "task-manager",
    category: "Productivity",
    code: "SYS // TSK-06",
    shortName: "Task Manager",
    title: "Enterprise Task & Workflow Manager",
    badge: "Agile Kanban & Sprint Intelligence",
    icon: CheckSquare,
    accentFrom: "#f59e0b",
    accentTo: "#d97706",
    glowColor: "rgba(245, 158, 11, 0.35)",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    description:
      "Collaborative project execution system for high-velocity teams. Features custom Kanban workflows, sprint backlogs, SLA milestones, workload balance, and team chat.",
    features: [
      "Interactive Kanban, List & Gantt Timeline Views",
      "Sprint Backlogs, Story Points & Milestone Tracking",
      "Team Workload Allocation & Capacity Heatmaps",
      "Real-time Automated SLA & Overdue Escalations",
    ],
    techTags: ["Kanban & Sprints", "Gantt Timeline", "Workload Analytics", "SLA Monitors"],
  },
  {
    id: "custom-web-app",
    category: "Bespoke",
    code: "SYS // DEV-07",
    shortName: "Custom Web & App",
    title: "Custom Web & Mobile App Development",
    badge: "Cloud-Native & High Performance",
    icon: Code2,
    accentFrom: "#8b5cf6",
    accentTo: "#7c3aed",
    glowColor: "rgba(139, 92, 246, 0.35)",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    description:
      "Tailor-made software engineered from the ground up for unique business logic. Fast Next.js/React web platforms, native-quality iOS/Android apps, and resilient cloud backends.",
    features: [
      "Next.js, React & Node.js Scalable Architecture",
      "Cross-Platform iOS & Android Apps (Flutter / React Native)",
      "High-Throughput Microservices & Secure REST/GraphQL APIs",
      "Elastic Cloud Infrastructure on AWS / GCP with CI/CD",
    ],
    techTags: ["Next.js / React", "Flutter / Native", "Microservices", "AWS / GCP"],
  },
];

const categories = ["All Solutions", "Healthcare", "Enterprise", "Logistics", "Productivity", "Bespoke"];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All Solutions") return servicesData;
    return servicesData.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full bg-[#070b14] overflow-hidden">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── 70/30 PORTION HERO SECTION (EXACT HERO PORTIONS) ──────── */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full">

        {/* ─── TOP SECTION: Ultra-Minimal White Hero (70vh portion, No Button) ──── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHeroHovered(true)}
          onMouseLeave={() => setIsHeroHovered(false)}
          className="relative h-[70vh] min-h-[460px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-white text-slate-900 pt-20 pb-8 overflow-hidden cursor-default select-none"
        >
          {/* Top-Left Floating Animated Corner Orb */}
          <motion.div
            animate={{
              x: [0, 8, -5, 4, 0],
              y: [0, -6, 5, -3, 0],
              scale: [1, 1.05, 0.97, 1.03, 1],
              rotate: [0, 5, -4, 2, 0],
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-sky-400/85 via-blue-500/75 to-indigo-600/55 shadow-[0_8px_25px_rgba(14,165,233,0.3)] pointer-events-none z-0 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-white/50" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-sky-300/40 blur-sm" />
          </motion.div>

          {/* Bottom-Right Floating Animated Corner Orb */}
          <motion.div
            animate={{
              x: [0, -12, 8, -6, 0],
              y: [0, 10, -8, 5, 0],
              scale: [1, 0.95, 1.05, 0.98, 1],
              rotate: [0, -6, 7, -3, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-gradient-to-tl from-blue-600/90 via-sky-500/80 to-indigo-500/60 shadow-[0_10px_40px_rgba(37,99,235,0.4)] pointer-events-none z-0 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/35 via-white/10 to-transparent" />
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-sky-300/40 blur-md" />
          </motion.div>

          {/* Base Ambient Architectural Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
              backgroundSize: "2.75rem 2.75rem",
            }}
          />

          {/* Interactive Illuminated Grid on Hover (Follows Cursor) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHeroHovered ? 1 : 0,
              backgroundImage:
                "linear-gradient(to right, rgba(14, 165, 233, 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.22) 1px, transparent 1px)",
              backgroundSize: "2.75rem 2.75rem",
              maskImage: `radial-gradient(circle 360px at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
              WebkitMaskImage: `radial-gradient(circle 360px at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
            }}
          />

          {/* Soft Cursor Ambient Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: isHeroHovered ? 1 : 0.3,
              background: `radial-gradient(circle 420px at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.12), rgba(79, 70, 229, 0.03) 65%, transparent 85%)`,
            }}
          />

          {/* Left Decorative Tag: SPECIALIZED SYSTEMS */}
          <div className="hidden lg:flex items-center gap-3 absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10">
            <div className="w-[3px] h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full shadow-sm" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-tight">
              <span className="text-slate-600">Specialized</span>
              <span className="text-slate-400">Systems</span>
            </div>
          </div>

          {/* Right Decorative Tag: ENTERPRISE SERVICES */}
          <div className="hidden lg:flex flex-col items-center gap-1.5 absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10 text-center">
            <div className="w-7 h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-0.5" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-relaxed text-center">
              <span className="text-slate-600">Enterprise</span>
              <span className="text-slate-400">Services</span>
            </div>
          </div>

          {/* Centered Grand Headline with Text According to Service */}
          <div className="max-w-5xl mx-auto text-center relative z-10 my-auto px-4">
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] text-slate-950 leading-[1.08]">
                Enterprise Systems &
              </h1>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] leading-[1.08]">
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Services.
                </span>
              </h1>

              {/* Decorative Gradient Swoosh Underline */}
              <div className="flex justify-center -mt-1 sm:-mt-0.5">
                <svg
                  className="w-48 sm:w-72 md:w-84 h-3 sm:h-3.5 overflow-visible"
                  viewBox="0 0 320 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C75 2 245 2 317 10"
                    stroke="url(#services-swoosh-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="services-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Clinical hospital management (HMIS), workforce operations (HRMS), multi-warehouse logistics, ophthalmic inventory, and custom cloud software engineered for scale.
            </p>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: Deep Dark Section with Kinetic Marquee (30vh portion) ─── */}
        <div className="relative h-[30vh] min-h-[200px] flex items-center bg-[#070b14] text-white overflow-hidden border-t border-slate-800/80 select-none">
          {/* Ambient Cosmic Lights in Dark Section */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Continuous Kinetic Marquee with Services Text */}
          <div className="flex items-center w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 sm:gap-14 whitespace-nowrap font-display font-black tracking-[0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-none uppercase"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                HMIS HOSPITAL
              </span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                HRMS WORKFORCE
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                INVENTORY ERP
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                IOL SUITE
              </span>
              <span className="text-cyan-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                MEDICINE ERP
              </span>
              <span className="text-amber-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                TASK FLOW
              </span>
              <span className="text-purple-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                CUSTOM APPS
              </span>
              <span className="text-sky-400/80 font-light">•</span>

              {/* Loop Duplicate */}
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                HMIS HOSPITAL
              </span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                HRMS WORKFORCE
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                INVENTORY ERP
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                IOL SUITE
              </span>
              <span className="text-cyan-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                MEDICINE ERP
              </span>
              <span className="text-amber-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                TASK FLOW
              </span>
              <span className="text-purple-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                CUSTOM APPS
              </span>
              <span className="text-sky-400/80 font-light">•</span>
            </motion.div>
          </div>

          {/* Minimal Bottom Status Line */}
          <div className="absolute bottom-3 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center text-[0.65rem] sm:text-[0.7rem] font-mono text-slate-500 z-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>CORE SYSTEMS & PLATFORMS</span>
            </span>
            <span>ANGIKYA © 2026</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── SHOWCASE SECTION: PROFESSIONAL IMAGE-ENHANCED CARDS ─────── */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative bg-[#070b14] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        {/* Ambient Cosmic Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-3/4 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-800/80 mb-8">
            <div>
              <span className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold mb-1 block">
                FLAGSHIP DEPLOYMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Enterprise Product Catalogue
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Showing {filteredServices.length} of {servicesData.length} Solutions
            </p>
          </div>

          {/* ─── FILTER TABS (Dark Section Only) ─── */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-sky-500 text-white border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.45)] scale-105"
                      : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ── The 7 Compact Professional Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300"
                    style={{
                      background: "linear-gradient(180deg, #0e1526 0%, #070c17 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${service.accentFrom}55`;
                      e.currentTarget.style.boxShadow = `0 14px 35px -8px ${service.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.boxShadow = "0 8px 25px -8px rgba(0, 0, 0, 0.5)";
                    }}
                  >
                    {/* Top Accent Gradient Bar on Hover */}
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-20"
                      style={{
                        background: `linear-gradient(90deg, ${service.accentFrom}, ${service.accentTo})`,
                      }}
                    />

                    {/* ── Compact Header Image Banner (h-28 / 112px) ── */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.72] contrast-[1.05]"
                        loading="lazy"
                      />

                      {/* Deep Dark Gradient Vignette */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(7, 11, 20, 0.35) 0%, rgba(7, 11, 20, 0.2) 35%, #0e1526 100%)",
                        }}
                      />

                      {/* Badges on Top of Image */}
                      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                        <span className="px-2 py-0.5 rounded-md text-[0.6rem] font-mono font-semibold tracking-wider uppercase bg-black/65 backdrop-blur-md text-slate-300 border border-white/10 shadow-sm">
                          {service.code}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded-md text-[0.62rem] font-mono font-medium backdrop-blur-md border shadow-sm truncate max-w-[55%]"
                          style={{
                            background: "rgba(0, 0, 0, 0.65)",
                            color: service.accentFrom,
                            borderColor: `${service.accentFrom}45`,
                          }}
                        >
                          {service.badge}
                        </span>
                      </div>

                      {/* Floating Icon Box */}
                      <div className="absolute -bottom-2.5 left-4 z-10">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          style={{
                            background: `#0b1120`,
                            border: `1.5px solid ${service.accentFrom}55`,
                            boxShadow: `0 4px 14px ${service.glowColor}`,
                          }}
                        >
                          <Icon className="w-4 h-4" style={{ color: service.accentFrom }} />
                        </div>
                      </div>
                    </div>

                    {/* ── Compact Card Content Body ── */}
                    <div className="p-4 pt-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Short Tag & Title */}
                        <div className="text-[0.68rem] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                          {service.shortName}
                        </div>
                        <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors mb-2 line-clamp-1">
                          {service.title}
                        </h3>

                        {/* Description (2 lines clamp) */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features Bullet List (Compact) */}
                        <div className="space-y-1.5 mb-3.5 pt-2.5 border-t border-slate-800/80">
                          {service.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-[0.72rem] text-slate-300">
                              <CheckCircle2
                                className="w-3 h-3 shrink-0 mt-0.5"
                                style={{ color: service.accentFrom }}
                              />
                              <span className="leading-tight truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Area: Tech Tags & CTA */}
                      <div className="pt-2.5 border-t border-slate-800/80">
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {service.techTags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                          to={`/contact?service=${service.id}`}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[0.75rem] font-semibold text-white transition-all duration-300 group/btn"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, ${service.accentFrom}, ${service.accentTo})`;
                            e.currentTarget.style.borderColor = "transparent";
                            e.currentTarget.style.boxShadow = `0 0 15px ${service.glowColor}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
