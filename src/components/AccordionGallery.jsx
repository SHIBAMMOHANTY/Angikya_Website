import React, { useState, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AccordionGallery = ({
  items = [],
  defaultIndex = 3,
  expandRatio = 0.52,
  trigger = "hover",
  accentColor = "#38bdf8",
  overlayColor = "#070b14",
  textColor = "#ffffff",
  grayscale = false,
  showLabels = true,
  duration = 0.6,
  height = 480,
  gap = 10,
  radius = 18,
  orientation = "horizontal",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const containerRef = useRef(null);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full select-none">
      {/* Desktop / Tablet Horizontal Accordion Gallery */}
      <div
        ref={containerRef}
        className="hidden md:flex items-stretch w-full overflow-hidden p-2.5 rounded-3xl bg-slate-950/50 border border-white/10 backdrop-blur-2xl shadow-2xl"
        style={{
          height: `${height}px`,
          gap: `${gap}px`,
        }}
      >
        {items.map((item, index) => {
          const isExpanded = activeIndex === index;
          const Icon = item.icon;

          return (
            <div
              key={index}
              onMouseEnter={() => trigger === "hover" && handleInteraction(index)}
              onClick={() => handleInteraction(index)}
              style={{
                flex: isExpanded ? 5.2 : 1,
                borderRadius: `${radius}px`,
                transition: `flex ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
              className={`relative overflow-hidden cursor-pointer flex flex-col justify-between border transition-all duration-500 ${
                isExpanded
                  ? "border-sky-500/60 bg-[#090e1c] shadow-[0_0_40px_rgba(14,165,233,0.25)]"
                  : "border-white/10 bg-[#080d19]/80 hover:border-sky-500/40 hover:bg-[#0c1426]"
              }`}
            >
              {/* Background Image with Crisp High-Luminance Visibility */}
              {item.image && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title || item.label}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      isExpanded
                        ? "scale-105 opacity-100 brightness-110 contrast-[1.05]"
                        : grayscale
                        ? "grayscale opacity-60 scale-100"
                        : "opacity-75 brightness-105 scale-100"
                    }`}
                  />
                  {/* Lightweight bottom fade only behind text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/85 via-[#070b14]/20 to-transparent" />
                </div>
              )}

              {/* ─── COLLAPSED STATE (Vertical Sleek Pill) ─── */}
              <div
                className={`absolute inset-0 z-10 flex flex-col items-center justify-between py-6 px-2 transition-all duration-300 pointer-events-none ${
                  isExpanded ? "opacity-0 -translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                {/* Top Glowing Icon Badge */}
                {Icon && (
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/25 border border-sky-400/60 flex items-center justify-center text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.4)] backdrop-blur-md">
                    <Icon className="w-6 h-6" />
                  </div>
                )}

                {/* Rotated Vertical Label */}
                {showLabels && (
                  <div className="my-auto py-4 flex items-center justify-center">
                    <span
                      style={{ writingMode: "vertical-rl" }}
                      className="rotate-180 text-[0.72rem] font-mono font-bold tracking-[0.24em] text-white uppercase whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {item.label || item.title}
                    </span>
                  </div>
                )}
              </div>

              {/* ─── EXPANDED STATE (Rich Detailed Card) ─── */}
              <div
                className={`relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 transition-all duration-500 ${
                  isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {/* Header: Icon + Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="p-3.5 rounded-2xl bg-sky-500/30 border border-sky-400/60 text-sky-200 shadow-[0_0_22px_rgba(56,189,248,0.4)] backdrop-blur-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    {item.tag && (
                      <span className="px-3 py-1 rounded-full text-[0.68rem] font-mono font-semibold tracking-wider uppercase bg-slate-950/80 border border-white/20 text-sky-300 backdrop-blur-md shadow-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Middle: Title + Minimal Description */}
                <div className="my-auto py-3 max-w-lg">
                  <h3
                    style={{ color: textColor }}
                    className="text-2xl sm:text-[1.75rem] font-display font-bold tracking-tight mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {item.description}
                  </p>

                  {/* Feature Highlights Pills */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-0.5 rounded-md text-[0.7rem] font-medium bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={item.link || "/contact"}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
                  >
                    <span>Start This Service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="text-[0.7rem] font-mono text-slate-400">
                    SLA-Backed
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Stacked Responsive Accordion */}
      <div className="flex md:hidden flex-col gap-3">
        {items.map((item, index) => {
          const isExpanded = activeIndex === index;
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isExpanded ? -1 : index)}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-[#090e1c] border-sky-500/50 shadow-lg shadow-sky-500/10"
                  : "bg-[#080d19]/80 border-white/10"
              }`}
            >
              {/* Header Bar */}
              <div className="p-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className={`p-2.5 rounded-xl border ${
                      isExpanded
                        ? "bg-sky-500/25 border-sky-400/50 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                        : "bg-sky-500/10 border-sky-400/25 text-sky-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <span className="font-semibold text-sm text-white">
                    {item.title || item.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {item.tag && (
                    <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-white/10 text-sky-300 border border-white/15">
                      {item.tag}
                    </span>
                  )}
                  <div className={`w-2 h-2 rounded-full ${isExpanded ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]" : "bg-slate-600"}`} />
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-4 pb-5 pt-1 border-t border-white/5">
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[0.68rem] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    to={item.link || "/contact"}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    <span>Request Discovery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionGallery;
