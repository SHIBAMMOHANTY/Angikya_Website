import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";

const corePillars = [
  {
    icon: Zap,
    title: "High Velocity Engineering",
    description:
      "Rapid agile iterations backed by automated testing pipelines ensure your products reach market months ahead of competitors.",
    accentFrom: "#0ea5e9",
    accentTo: "#2563eb",
    softBg: "rgba(14,165,233,0.07)",
    border: "rgba(14,165,233,0.18)",
    hoverShadow: "rgba(14,165,233,0.14)",
  },
  {
    icon: Shield,
    title: "Zero-Compromise Security",
    description:
      "Security is baked into every architecture layer from day one, adhering to OWASP, encryption, and strict data governance.",
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
    softBg: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.18)",
    hoverShadow: "rgba(139,92,246,0.14)",
  },
  {
    icon: Target,
    title: "Outcome-Driven Architecture",
    description:
      "We don't just write code; we design robust systems crafted to maximise conversion, operational efficiency, and ROI.",
    accentFrom: "#10b981",
    accentTo: "#0d9488",
    softBg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.18)",
    hoverShadow: "rgba(16,185,129,0.14)",
  },
];

const metrics = [
  { number: "50+",   label: "Global Deployments",   sub: "Enterprise & Clinical Systems" },
  { number: "99.9%", label: "System Uptime",         sub: "Built on resilient cloud architecture" },
  { number: "100%",  label: "Client Satisfaction",   sub: "Verified post-launch project success" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const AboutUs = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden cursor-default select-none border-t border-slate-200"
    >
      {/* ── Ambient Gradient Glow Orbs ── */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-sky-300/30 via-indigo-200/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-200/25 via-teal-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-l from-violet-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* ── Architectural Background Grid with Cursor Spotlight Mask ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isHovered ? 0.95 : 0.45,
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: isHovered
            ? `radial-gradient(circle 340px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
            : "radial-gradient(circle 500px at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 340px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
            : "radial-gradient(circle 500px at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center mx-auto">
          <span
            className="inline-flex items-center justify-center gap-2 text-[0.68rem] font-mono tracking-[0.22em] uppercase font-semibold mb-5 px-3 py-1 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm"
            style={{ color: "#0ea5e9" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse inline-block" />
            Who We Are
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-950 mb-5">
            Architects of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 55%, #8b5cf6 100%)" }}
            >
              Digital Momentum
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
            A collective of senior engineers, system architects, and UX designers building
            digital products that solve mission-critical challenges at scale.
          </p>
        </motion.div>

        {/* ── PILLAR CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {corePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-7 sm:p-8 flex flex-col gap-5 cursor-default bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md shadow-slate-100 hover:shadow-xl hover:border-sky-300 transition-all duration-300"
              >
                {/* Top accent bar (on hover) */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to right, ${pillar.accentFrom}, ${pillar.accentTo})` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ background: pillar.softBg, border: `1.5px solid ${pillar.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: pillar.accentFrom }} />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-slate-950 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── METRICS STRIP ── */}
        <motion.div
          {...fadeUp(0.35)}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-100"
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 px-6 text-center">
              <span
                className="text-3xl sm:text-5xl font-black tracking-tight mb-1 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                {m.number}
              </span>
              <p className="text-sm font-bold text-slate-800 mb-0.5">{m.label}</p>
              <p className="text-[0.72rem] text-slate-500 font-mono">{m.sub}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;