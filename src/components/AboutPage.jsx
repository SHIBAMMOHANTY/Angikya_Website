import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users2,
  ArrowRight,
} from "lucide-react";
import ProfileCard from "./ui/ProfileCard";

// Team profile pictures from assets
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const teamMembers = [
  {
    name: "Shibam Mohanty",
    title: "Founder & Lead Architect",
    handle: "shibam",
    status: "Active",
    avatarUrl: user1,
    glow: "rgba(14, 165, 233, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
  {
    name: "Akash Panda",
    title: "Full-Stack & Cloud Engineer",
    handle: "akash",
    status: "Active",
    avatarUrl: user2,
    glow: "rgba(99, 102, 241, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
  {
    name: "Priyanka Mishra",
    title: "Healthcare Informatics Lead",
    handle: "priyanka",
    status: "Active",
    avatarUrl: user3,
    glow: "rgba(16, 185, 129, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
  {
    name: "Debasish Sahoo",
    title: "Senior DevOps & Infrastructure",
    handle: "debasish",
    status: "Active",
    avatarUrl: user4,
    glow: "rgba(236, 72, 153, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
  {
    name: "Ananya Das",
    title: "Clinical ERP Specialist (IOL & HMIS)",
    handle: "ananya",
    status: "Active",
    avatarUrl: user5,
    glow: "rgba(6, 182, 212, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
  {
    name: "Sourav Patra",
    title: "UI/UX & Product Design Lead",
    handle: "sourav",
    status: "Active",
    avatarUrl: user6,
    glow: "rgba(245, 158, 11, 0.7)",
    gradient: "linear-gradient(145deg, #0f172a 0%, #070c17 100%)",
  },
];



const AboutPage = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);

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

  return (
    <div className="relative w-full bg-[#070b14] text-white overflow-hidden">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── 70/30 PORTION HERO SECTION (EXACT HERO & SERVICES STYLE) ─ */}
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

          {/* Left Decorative Tag */}
          <div className="hidden lg:flex items-center gap-3 absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10">
            <div className="w-[3px] h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full shadow-sm" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-tight">
              <span className="text-slate-600">Architects</span>
              <span className="text-slate-400">Of Scale</span>
            </div>
          </div>

          {/* Right Decorative Tag */}
          <div className="hidden lg:flex flex-col items-center gap-1.5 absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10 text-center">
            <div className="w-7 h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-0.5" />
            <div className="flex flex-col text-[0.68rem] tracking-[0.25em] font-mono text-slate-500 font-semibold uppercase leading-relaxed text-center">
              <span className="text-slate-600">Bhubaneswar</span>
              <span className="text-slate-400">HQ • Odisha</span>
            </div>
          </div>

          {/* Centered Grand Display Headline */}
          <div className="max-w-5xl mx-auto text-center relative z-10 my-auto px-4">
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] text-slate-950 leading-[1.08]">
                Architects of Digital
              </h1>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-[-0.02em] leading-[1.08]">
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Healthcare & Momentum.
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
                    stroke="url(#about-swoosh-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="about-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We engineer specialized hospital operating systems (HMIS), clinical inventory ERPs, and cloud-scale software products with relentless focus on uptime and human impact.
            </p>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: Deep Dark Section with Kinetic Marquee (30vh portion) ─── */}
        <div className="relative h-[30vh] min-h-[200px] flex items-center bg-[#070b14] text-white overflow-hidden border-t border-slate-800/80 select-none">
          {/* Ambient Cosmic Lights in Dark Section */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Continuous Kinetic Marquee */}
          <div className="flex items-center w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 sm:gap-14 whitespace-nowrap font-display font-black tracking-[0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-none uppercase"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                WHO WE ARE
              </span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                CLINICAL HEALTHCARE
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                BHUBANESWAR HQ
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                OUR PURPOSE
              </span>
              <span className="text-cyan-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                THE SQUAD
              </span>
              <span className="text-amber-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                99.9% UPTIME
              </span>
              <span className="text-sky-400/80 font-light">•</span>

              {/* Loop Duplicate */}
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                WHO WE ARE
              </span>
              <span className="text-sky-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                CLINICAL HEALTHCARE
              </span>
              <span className="text-indigo-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                BHUBANESWAR HQ
              </span>
              <span className="text-emerald-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                OUR PURPOSE
              </span>
              <span className="text-cyan-400/80 font-light">•</span>
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                THE SQUAD
              </span>
              <span className="text-amber-400/80 font-light">•</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.75px rgba(255,255,255,0.75)" }}
              >
                99.9% UPTIME
              </span>
              <span className="text-sky-400/80 font-light">•</span>
            </motion.div>
          </div>

          {/* Minimal Bottom Status Line */}
          <div className="absolute bottom-3 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center text-[0.65rem] sm:text-[0.7rem] font-mono text-slate-500 z-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>HEADQUARTERED IN BHUBANESWAR // GLOBAL REACH</span>
            </span>
            <span>ANGIKYA TECHNOLOGY © 2026</span>
          </div>
        </div>
      </div>



      {/* ───────────────────────────────────────────────────────────── */}
      {/* ─── OUR TEAM MEMBERS: PROFILE CARDS (WHITE BACKGROUND) ─────── */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
        {/* Subtle Architectural Dot Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-100 text-slate-700 text-xs font-mono font-medium mb-4 shadow-sm">
              <Users2 className="w-3.5 h-3.5 text-sky-600" />
              <span>THE BUILDERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Core Team
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Senior software architects, clinical informatics leads, and full-stack engineers dedicated to building robust digital products.
            </p>
          </div>

          {/* Profile Cards Grid with 3D Tilt and Cursor Glow on White Background */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, i) => (
              <ProfileCard
                key={i}
                name={member.name}
                title={member.title}
                status={member.status}
                contactText="Connect"
                avatarUrl={member.avatarUrl}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  window.location.href = `/contact`;
                }}
                behindGlowColor={member.glow}
                behindGlowEnabled={true}
                innerGradient={member.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Project Callout (Clean White / Slate Theme) ── */}
      <section className="py-20 px-4 text-center border-t border-slate-200 bg-slate-50 text-slate-900">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            Ready to collaborate with our engineering team?
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Let's discuss your clinical workflow, enterprise software requirements, or custom cloud architecture.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/25"
              style={{
                background: "linear-gradient(135deg, #0284c7, #4f46e5)",
              }}
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
