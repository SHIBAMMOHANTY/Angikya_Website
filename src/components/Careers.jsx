import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  X,
  ChevronRight,
  Code2,
  Bug,
} from "lucide-react";

const jobListings = [
  {
    id: "ENG-FS01",
    department: "Engineering",
    code: "DEV // FS-01",
    title: "Full-Stack Developer",
    icon: Code2,
    location: "Bhubaneswar HQ / Hybrid",
    workType: "Full-time",
    experience: "1-3 Years",
    accent: "#6366f1",
    summary:
      "Design and develop responsive user interfaces, real-time clinical dashboards, and high-performance backend APIs across modern React, Node.js, and database ecosystems.",
    skills: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL / MongoDB", "REST APIs", "TailwindCSS"],
    responsibilities: [
      "Develop reusable, modular, and accessible React UI components with responsive layouts.",
      "Architect and maintain robust RESTful APIs, microservices, and asynchronous event pipelines.",
      "Collaborate with QA testers and design leads to ship clean, high-performance features.",
    ],
    qualifications: [
      "Strong proficiency in modern JavaScript (ES6+), React hooks, and Node.js runtime.",
      "Hands-on experience with relational (PostgreSQL) or document (MongoDB) databases.",
      "Familiarity with Git version control, clean code standards, and agile sprint delivery.",
    ],
  },
  {
    id: "QA-TST02",
    department: "Quality Assurance",
    code: "QA // TST-02",
    title: "Software Tester / QA Engineer",
    icon: Bug,
    location: "Bhubaneswar HQ / Hybrid",
    workType: "Full-time",
    experience: "1-3 Years",
    accent: "#06b6d4",
    summary:
      "Ensure zero-defect reliability across hospital ERP modules and web applications by designing test cases, performing API validation, and executing manual and automated regression tests.",
    skills: ["Manual Testing", "API Testing (Postman)", "Automation (Selenium / Cypress)", "Bug Tracking (Jira)", "STLC", "SQL Basics"],
    responsibilities: [
      "Design, write, and execute comprehensive test scenarios, test cases, and regression suites.",
      "Validate REST API endpoints, payload data integrity, and response status codes using Postman.",
      "Log, track, and verify software defects to resolution in Jira alongside developers.",
      "Verify clinical hospital operational flows to safeguard 100% data accuracy.",
    ],
    qualifications: [
      "Solid knowledge of Software Testing Life Cycle (STLC), defect management, and test documentation.",
      "Hands-on experience in manual testing of web applications and REST API verification.",
      "Familiarity with test automation frameworks (Cypress, Playwright, or Selenium) is an advantage.",
      "Strong attention to detail, analytical mindset, and clear bug communication.",
    ],
  },
];

const CareerPage = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalJob, setActiveModalJob] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Application form state inside modal
  const [applicantData, setApplicantData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolioUrl: "",
    coverNote: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const departments = ["All", "Engineering", "Quality Assurance"];
  const locations = ["All", "Bhubaneswar", "Hybrid"];

  // Filter logic
  const filteredJobs = jobListings.filter((job) => {
    const matchDept = selectedDept === "All" || job.department === selectedDept;
    const matchLoc =
      selectedLocation === "All" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchQuery =
      searchQuery.trim() === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchDept && matchLoc && matchQuery;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveModalJob(null);
      setApplicantData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        portfolioUrl: "",
        coverNote: "",
      });
    }, 2800);
  };

  return (
    <div className="relative w-full bg-[#070b14] text-white overflow-hidden">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── 70/30 PORTION HERO SECTION (EXACT WHITE/BLACK SIGNATURE) ─ */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full">
        {/* ─── TOP SECTION: Ultra-Minimal White Hero (70vh portion) ──── */}
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

          {/* Subtle Ambient 3D Gradient Orbs */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-sky-300/30 via-indigo-200/25 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-200/25 via-teal-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-l from-violet-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Architectural Background Grid with Cursor Spotlight Mask */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{
              opacity: isHeroHovered ? 0.95 : 0.45,
              backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
              maskImage: isHeroHovered
                ? `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
                : "radial-gradient(circle 480px at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage: isHeroHovered
                ? `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
                : "radial-gradient(circle 480px at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10 max-w-4xl text-center space-y-5">


            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.08]"
            >
              Build the Future of{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Clinical Software.
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-sky-500/40 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,7 Q50,0 100,7"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Refined Descriptive Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Join our agile engineering squads in Bhubaneswar to engineer mission-critical healthcare systems, hospital ERPs, and high-impact digital platforms.
            </motion.p>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: High-Contrast Dark Bar (30vh portion) ─── */}
        <div className="relative h-[30vh] min-h-[200px] flex flex-col justify-center items-center bg-[#070b14] text-white border-y border-slate-800/80 overflow-hidden">
          {/* Subtle Hairline Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Deep Ambient Glow Spot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-gradient-to-r from-sky-500/10 via-indigo-500/15 to-purple-500/10 blur-3xl pointer-events-none" />

          {/* Kinetic Infinite Marquee */}
          <div className="w-full overflow-hidden whitespace-nowrap relative z-10 py-3">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 26,
                repeat: Infinity,
              }}
              className="flex items-center gap-10 sm:gap-14 whitespace-nowrap font-display font-black tracking-[0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-none uppercase"
            >
              <span className="text-white">JOIN OUR SQUAD</span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                FULL-STACK & QA TESTER
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                HIGH AUTONOMY
              </span>
              <span className="text-purple-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                BHUBANESWAR HQ & HYBRID
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span className="text-white">99.98% UPTIME ARCHITECTURE</span>
              <span className="text-cyan-400/80 font-light">•</span>

              {/* Duplicate loop */}
              <span className="text-white">JOIN OUR SQUAD</span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                FULL-STACK & QA TESTER
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                HIGH AUTONOMY
              </span>
              <span className="text-purple-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                BHUBANESWAR HQ & HYBRID
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span className="text-white">99.98% UPTIME ARCHITECTURE</span>
              <span className="text-cyan-400/80 font-light">•</span>
            </motion.div>
          </div>

          {/* Minimal Bottom Status Line */}
          <div className="absolute bottom-3 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center text-[0.65rem] sm:text-[0.7rem] font-mono text-slate-500 z-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE OPENINGS // BHUBANESWAR DEVELOPMENT CENTER</span>
            </span>
            <span>ANGIKYA TECHNOLOGY © 2026</span>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── SHOWCASE SECTION: REFINED 2 JOB POSTING CARDS ──────────── */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-400 text-xs font-mono font-medium mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>OPEN POSITIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Explore Opportunities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Showing {filteredJobs.length} of {jobListings.length} available roles in our squads.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by role, skill, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="space-y-4 mb-10">
          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">DEPARTMENT:</span>
            {departments.map((dept) => {
              const active = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                    active
                      ? "bg-sky-500 text-white border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                      : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Location Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">LOCATION:</span>
            {locations.map((loc) => {
              const active = selectedLocation === loc;
              return (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                    active
                      ? "bg-indigo-500/20 text-indigo-300 border-indigo-400 font-bold"
                      : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {loc}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Cards Grid (2 Column Balanced Layout for 2 Positions) ── */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No matching job openings found</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting filters or searching with different keywords.</p>
            <button
              onClick={() => {
                setSelectedDept("All");
                setSelectedLocation("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/40 text-xs font-mono cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatePresence>
              {filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                const RoleIcon = job.icon;
                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-slate-900/95 via-[#091021] to-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl"
                  >
                    {/* Ambient Accent Flare on Hover */}
                    <div
                      className="w-56 h-56 rounded-full absolute -top-12 -right-12 blur-3xl pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity"
                      style={{ backgroundColor: job.accent }}
                    />

                    <div className="relative z-10 space-y-5">
                      {/* Top Bar: Code, Role Icon, & Active Status */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-sm"
                            style={{
                              background: `${job.accent}15`,
                              borderColor: `${job.accent}40`,
                            }}
                          >
                            <RoleIcon className="w-4 h-4" style={{ color: job.accent }} />
                          </div>
                          <span
                            className="px-2.5 py-1 rounded-md text-[0.68rem] font-mono font-medium border"
                            style={{
                              background: `${job.accent}12`,
                              color: job.accent,
                              borderColor: `${job.accent}35`,
                            }}
                          >
                            {job.code}
                          </span>
                        </div>

                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[0.68rem] font-mono text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>ACTIVE HIRING</span>
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-white leading-snug">
                        {job.title}
                      </h3>

                      {/* Metadata Chips: Location, Experience, WorkType */}
                      <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-mono text-slate-300">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/5">
                          <MapPin className="w-3.5 h-3.5 text-sky-400" />
                          <span>{job.location}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/5">
                          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{job.experience}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/5">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{job.workType}</span>
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light">
                        {job.summary}
                      </p>

                      {/* Skills Stack Chips */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[0.68rem] font-mono text-slate-400 uppercase tracking-wider block">
                          Key Skills & Tech Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[0.68rem] font-mono text-slate-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Accordion for Details */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-slate-800/80 space-y-4 text-xs"
                        >
                          <div>
                            <span className="font-bold text-white block mb-2 text-xs font-mono uppercase text-sky-400">
                              Core Responsibilities:
                            </span>
                            <ul className="space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                              {job.responsibilities.map((r, rIdx) => (
                                <li key={rIdx} className="leading-relaxed">{r}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="font-bold text-white block mb-2 text-xs font-mono uppercase text-indigo-400">
                              Required Qualifications:
                            </span>
                            <ul className="space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                              {job.qualifications.map((q, qIdx) => (
                                <li key={qIdx} className="leading-relaxed">{q}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Action Buttons Strip */}
                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3 relative z-10">
                      <button
                        type="button"
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        className="text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Details" : "Role Details"}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "-rotate-90" : "rotate-90"}`} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveModalJob(job)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${job.accent}, #4f46e5)`,
                          boxShadow: `0 0 18px ${job.accent}35`,
                        }}
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>



      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── INTERACTIVE ROLE APPLICATION MODAL ─────────────────────── */}
      {/* ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeModalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalJob(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1 pr-8">
                <span className="text-[0.65rem] font-mono text-sky-400 uppercase tracking-widest font-semibold">
                  APPLICATION // {activeModalJob.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalJob.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeModalJob.location} • {activeModalJob.workType} • {activeModalJob.experience}
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received!</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Thank you for applying. Our talent squad will review your profile and reach out within 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1 font-mono">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={applicantData.fullName}
                      onChange={(e) => setApplicantData({ ...applicantData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1 font-mono">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@domain.com"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1 font-mono">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-mono">
                      Portfolio / GitHub / LinkedIn URL *
                    </label>
                    <input
                      required
                      type="url"
                      placeholder="https://github.com/username or linkedin.com/in/..."
                      value={applicantData.portfolioUrl}
                      onChange={(e) => setApplicantData({ ...applicantData, portfolioUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-mono">
                      Brief Note / Highlights
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share a sentence or two about your relevant projects or tech stack expertise..."
                      value={applicantData.coverNote}
                      onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 resize-none"
                    />
                  </div>

                  <p className="text-[0.65rem] text-slate-500 leading-normal">
                    * Resume files can also be mailed with your Job ID to{" "}
                    <span className="text-sky-400">hr@angikya.com</span>.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-semibold text-white transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                    }}
                  >
                    Submit Application for {activeModalJob.code}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerPage;