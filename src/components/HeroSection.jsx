import React, { useRef, useState } from "react";
import { ArrowUpRight, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const containerRef = useRef(null);
  
  // White section mouse tracking for grid illumination
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // Short, fast scroll progress for the pinned scroll section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Short horizontal travel distance so scrolling is quick and effortless
  const xDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const xMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Mouse move handler for top white section
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Entrance animations for top white section
  const lineVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <div ref={containerRef} className="relative h-[145vh] sm:h-[155vh] bg-white">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* ─── TOP SECTION: Ultra-Minimal White Hero with Interactive Spotlight (70vh) ─── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[70vh] min-h-[420px] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 bg-white text-slate-900 pt-24 pb-3 overflow-hidden cursor-default select-none"
        >
          {/* Top-Left Floating Animated Corner Orb (Compact) */}
          <motion.div
            animate={{
              x: [0, 8, -5, 4, 0],
              y: [0, -6, 5, -3, 0],
              scale: [1, 1.05, 0.97, 1.03, 1],
              rotate: [0, 5, -4, 2, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-sky-400/85 via-blue-500/75 to-indigo-600/55 shadow-[0_8px_25px_rgba(14,165,233,0.3)] pointer-events-none z-0 overflow-hidden"
          >
            {/* Inner 3D Sphere Highlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-white/50" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-sky-300/40 blur-sm" />
          </motion.div>

          {/* Bottom-Right Floating Animated Corner Orb (Half Size) */}
          <motion.div
            animate={{
              x: [0, -12, 8, -6, 0],
              y: [0, 10, -8, 5, 0],
              scale: [1, 0.95, 1.05, 0.98, 1],
              rotate: [0, -6, 7, -3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-gradient-to-tl from-blue-600/90 via-sky-500/80 to-indigo-500/60 shadow-[0_10px_40px_rgba(37,99,235,0.4)] pointer-events-none z-0 overflow-hidden"
          >
            {/* Inner 3D Sphere Highlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/35 via-white/10 to-transparent" />
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-sky-300/40 blur-md" />
          </motion.div>

          {/* Base Ambient Subtle Architectural Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
              backgroundSize: "2.75rem 2.75rem",
            }}
          />

          {/* Interactive Illuminated Grid on Hover (Follows Mouse Cursor) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
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
              opacity: isHovered ? 1 : 0.3,
              background: `radial-gradient(circle 420px at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.12), rgba(79, 70, 229, 0.03) 65%, transparent 85%)`,
            }}
          />

          {/* Left Decorative Tag: IDEAS TO IMPACT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:flex items-center gap-3 absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10"
          >
            <div className="w-[3px] h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full shadow-sm" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-tight">
              <span className="text-slate-600">Ideas</span>
              <span className="text-slate-400">To Impact</span>
            </div>
          </motion.div>

          {/* Right Decorative Tag: BUILDING SMARTER TOMORROW */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:flex flex-col items-center gap-1.5 absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10 text-center"
          >
            <div className="w-7 h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-0.5" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-relaxed text-center">
              <span className="text-slate-600">Building</span>
              <span className="text-slate-400">Smarter</span>
              <span className="text-slate-400">Tomorrow</span>
            </div>
          </motion.div>

          {/* Centered Grand Headline with Smooth, Minimal Hover Transitions */}
          <div className="max-w-5xl mx-auto text-center relative z-10 my-auto">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="overflow-hidden py-1">
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] text-slate-950 leading-[1.08] transition-all duration-500 ease-out hover:tracking-[-0.01em]"
                >
                  Engineering Next-Gen
                </motion.h1>
              </div>

              <div className="overflow-hidden py-1">
                <motion.h1
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] leading-[1.08] transition-all duration-500 ease-out hover:tracking-[-0.01em]"
                >
                  <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-500 hover:opacity-90">
                    Digital Products.
                  </span>
                </motion.h1>
              </div>

              {/* Decorative Gradient Swoosh Underline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                className="flex justify-center -mt-1 sm:-mt-0.5"
              >
                <svg
                  className="w-48 sm:w-72 md:w-84 h-3 sm:h-3.5 overflow-visible"
                  viewBox="0 0 320 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C75 2 245 2 317 10"
                    stroke="url(#hero-swoosh-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hero-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ─── PREMIUM AGENCY START PROJECT BUTTON ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative z-20 mb-1"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 pl-4 sm:pl-5 pr-2 py-2 rounded-full bg-slate-950 text-white shadow-xl shadow-slate-950/20 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/60 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] hover:scale-[1.02]"
            >
              {/* Rocket Icon */}
              <Rocket className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />

              {/* Main Button Text */}
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100 group-hover:text-white transition-colors">
                Start A Project
              </span>

              {/* Divider and Year */}
              <span className="hidden sm:inline-block text-[0.7rem] font-mono text-slate-400 pl-2 border-l border-slate-800">
                2026
              </span>

              {/* Circular / Rounded Arrow Indicator Badge */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sky-500/20 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 text-sky-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-sky-400/20 group-hover:border-transparent">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* ─── BOTTOM SECTION: Deep Dark Section with Short Punchy Kinetic Text (30vh) ─── */}
        <div className="relative h-[30vh] min-h-[200px] flex items-center bg-[#070b14] text-white overflow-hidden border-t border-slate-800/80 select-none">
          {/* Ambient Cosmic Lights in Dark Section */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Desktop Horizontal Scroll Track (Short, Punchy & Quick) */}
          <div className="hidden md:flex items-center w-full pl-8 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: xDesktop }}
              className="flex items-center gap-10 lg:gap-16 whitespace-nowrap font-display font-black tracking-[0.02em] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] leading-none uppercase"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Software Architecture
              </span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                Bespoke AI
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Cloud Scale
              </span>
            </motion.div>
          </div>

          {/* Mobile Horizontal Scroll Track (Short & Quick) */}
          <div className="flex md:hidden items-center w-full pl-4">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: xMobile }}
              className="flex items-center gap-6 whitespace-nowrap font-display font-black tracking-[0.02em] text-5xl sm:text-6xl leading-none uppercase"
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Software
              </span>
              <span className="text-sky-400">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.25px rgba(255,255,255,0.85)" }}
              >
                Bespoke AI
              </span>
              <span className="text-indigo-400">•</span>
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Cloud Scale
              </span>
            </motion.div>
          </div>

          {/* Minimal Bottom Status Line */}
          <div className="absolute bottom-3 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center text-[0.65rem] sm:text-[0.7rem] font-mono text-slate-500 z-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>CORE DISCIPLINES</span>
            </span>
            <span>ANGIKYA © 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
