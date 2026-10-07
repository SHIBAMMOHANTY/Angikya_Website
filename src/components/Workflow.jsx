import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Code2,
  Rocket,
  Layout,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";


const executionSteps = [
  {
    step: "01",
    phase: "PHASE 01",
    icon: Compass,
    title: "Discovery & Architecture",
    description: "Define scalable system blueprints, business logic, and select the optimal modern stack.",
    milestone: "Blueprint & Stack Locked"
  },
  {
    step: "02",
    phase: "PHASE 02",
    icon: Layout,
    title: "UI/UX & Prototyping",
    description: "High-converting user journeys and interactive Figma prototypes validated with real workflows.",
    milestone: "Figma Prototypes Ready"
  },
  {
    step: "03",
    phase: "PHASE 03",
    icon: Code2,
    title: "Full-Stack Agile Sprints",
    description: "Clean, modular engineering with continuous integration, automated testing, and bi-weekly demos.",
    milestone: "Automated CI/CD Tested"
  },
  {
    step: "04",
    phase: "PHASE 04",
    icon: Rocket,
    title: "Cloud Deployment & Scale",
    description: "Zero-downtime production launch, elastic cloud automation, telemetry, and 99.9% uptime SLAs.",
    milestone: "Live with 99.9% Uptime"
  },
];

// Redesigned Premium Execution Step Card
const ExecutionCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = step.icon;

  // Per-card accent colors
  const accents = [
    { from: "from-sky-400", to: "to-blue-600", glow: "rgba(14,165,233,0.35)", border: "rgba(56,189,248,0.5)", soft: "rgba(14,165,233,0.18)" },
    { from: "from-violet-400", to: "to-indigo-600", glow: "rgba(139,92,246,0.35)", border: "rgba(167,139,250,0.5)", soft: "rgba(99,102,241,0.18)" },
    { from: "from-emerald-400", to: "to-teal-600", glow: "rgba(52,211,153,0.35)", border: "rgba(52,211,153,0.5)", soft: "rgba(16,185,129,0.18)" },
    { from: "from-rose-400", to: "to-orange-500", glow: "rgba(251,113,133,0.35)", border: "rgba(251,113,133,0.5)", soft: "rgba(239,68,68,0.18)" },
  ];
  const a = accents[index % accents.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col group cursor-default"
      style={{
        background: "linear-gradient(160deg, #0d1526 0%, #0a0f1e 100%)",
        border: `1px solid ${isHovered ? a.border : "rgba(255,255,255,0.08)"}`,
        boxShadow: isHovered ? `0 24px 60px -12px ${a.glow}` : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "border 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 260px at ${mousePos.x}px ${mousePos.y}px, ${a.soft}, transparent 80%)`,
        }}
      />

      {/* Top accent bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${a.from} ${a.to} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

      {/* Card body */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1">
        {/* Step number + icon row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.6rem] font-mono tracking-[0.22em] uppercase font-semibold"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              {step.phase}
            </span>
            <span
              className={`text-4xl font-black font-mono bg-gradient-to-br ${a.from} ${a.to} bg-clip-text text-transparent leading-none select-none`}
            >
              {step.step}
            </span>
          </div>

          {/* Icon bubble */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 shrink-0"
            style={{
              background: isHovered
                ? `linear-gradient(135deg, ${a.soft.replace("0.18", "0.35")}, ${a.soft})`
                : "rgba(255,255,255,0.05)",
              border: `1px solid ${isHovered ? a.border : "rgba(255,255,255,0.1)"}`,
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: isHovered ? "#fff" : "rgba(148,163,184,0.9)" }}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug group-hover:text-slate-50 transition-colors">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[0.82rem] text-slate-400 leading-relaxed flex-1">
          {step.description}
        </p>

        {/* Milestone footer */}
        <div
          className="mt-6 pt-4 flex items-center gap-2.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
            style={{ background: `linear-gradient(135deg, ${a.from.replace("from-","")}, ${a.to.replace("to-","")})`, boxShadow: `0 0 8px ${a.glow}` }}
          />
          <span className="text-[0.68rem] font-mono tracking-wide text-slate-400 group-hover:text-slate-200 transition-colors truncate">
            {step.milestone}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Workflow = () => {
  // Section-level mouse follower state
  const sectionRef = useRef(null);
  const [sectionMouse, setSectionMouse] = useState({ x: -1000, y: -1000 });
  const [sectionHovered, setSectionHovered] = useState(false);

  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setSectionMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Proven Engineering Process */}
      <div>
        <SectionHeader
          badgeVariant="primary"
          badgeDot={true}
          title="From Blueprint to Scaled Reality:"
          gradientWord="How We Execute"
          subtitle="A battle-tested 4-stage engineering lifecycle designed for velocity, total transparency, and flawless delivery."
        />

        {/* Cards grid — section-level mouse follower wrapping the whole area */}
        <div
          ref={sectionRef}
          className="relative"
          onMouseMove={handleSectionMouseMove}
          onMouseEnter={() => setSectionHovered(true)}
          onMouseLeave={() => setSectionHovered(false)}
        >
          {/* ── Section-Wide Mouse Follower Ambient Glow ── */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              opacity: sectionHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
              background: `radial-gradient(circle 580px at ${sectionMouse.x}px ${sectionMouse.y}px,
                rgba(56,189,248,0.22) 0%,
                rgba(99,102,241,0.14) 40%,
                rgba(168,85,247,0.08) 65%,
                transparent 82%)`,
            }}
          />
          {/* Tight bright core — snaps directly under cursor tip */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              opacity: sectionHovered ? 1 : 0,
              transition: "opacity 0.15s ease",
              background: `radial-gradient(circle 150px at ${sectionMouse.x}px ${sectionMouse.y}px,
                rgba(56,189,248,0.55) 0%,
                rgba(14,165,233,0.20) 50%,
                transparent 80%)`,
            }}
          />

          {/* Connecting dashed line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px z-0"
            style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.25) 20%, rgba(56,189,248,0.25) 80%, transparent)" }}>
            {/* Animated dot on the line */}
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {executionSteps.map((step, index) => (
              <ExecutionCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Have a Custom Technical Challenge? */}
        <div className="mt-14 sm:mt-18 relative z-10">
          <div className="w-full max-w-3xl lg:max-w-[72%] mx-auto relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 bg-white text-slate-900 border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.09)]">
            {/* Subtle Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-gradient-to-br from-sky-400/20 via-blue-500/15 to-transparent blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
              {/* Minimal Text Column */}
              <div className="space-y-1.5 max-w-lg">
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-display font-bold text-slate-950 tracking-tight leading-snug">
                  Have a Custom Technical Challenge?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our architects are ready to evaluate your stack and build your roadmap.
                </p>
              </div>

              {/* Action Button (Navbar Gradient & Hover Shine Effect) */}
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #4f46e5)",
                    boxShadow: "0 0 24px -4px rgba(14, 165, 233, 0.45)",
                  }}
                >
                  {/* Shine sweep on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                  <span className="relative z-10">Schedule Consultation</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Workflow;