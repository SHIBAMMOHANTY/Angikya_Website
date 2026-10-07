import React, { useRef, useState, useEffect } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const ProfileCard = ({
  name = "Team Member",
  title = "Software Engineer",
  status = "Active",
  contactText = "Connect",
  avatarUrl = "",
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick = () => {},
  behindGlowColor = "rgba(125, 190, 255, 0.6)",
  iconUrl = "",
  behindGlowEnabled = true,
  innerGradient = "linear-gradient(155deg, #0d1527 0%, #060913 100%)",
}) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Relative percentage (0 to 100%)
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setGlowPos({ x: xPercent, y: yPercent });

    // 3D Tilt calculation (-10deg to +10deg)
    if (enableTilt && (!isTouchDevice || enableMobileTilt)) {
      const xOffset = (x / rect.width - 0.5) * 2;
      const yOffset = (y / rect.height - 0.5) * 2;
      setRotate({
        x: -yOffset * 10,
        y: xOffset * 10,
      });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      className="relative flex items-center justify-center p-2 w-full max-w-[310px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      {/* ── Behind Card Cursor Radial Glow ── */}
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl"
          style={{
            opacity: isHovered ? 0.75 : 0.2,
            background: `radial-gradient(circle 240px at ${glowPos.x}% ${glowPos.y}%, ${behindGlowColor}, transparent 75%)`,
            filter: "blur(26px)",
            transform: "scale(1.08)",
            zIndex: 0,
          }}
        />
      )}

      {/* ── Main Card Container with Fixed Identical Width & 3D Tilt ── */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[285px] sm:w-[295px] rounded-3xl overflow-hidden cursor-pointer select-none transition-all duration-200 shrink-0"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: isHovered
            ? "0 25px 45px -12px rgba(15, 23, 42, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)"
            : "0 12px 28px -10px rgba(15, 23, 42, 0.22), inset 0 1px 0 rgba(255,255,255,0.1)",
          zIndex: 1,
        }}
      >
        {/* Inner Card Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: innerGradient }}
        />

        {/* Optional Icon / Texture Pattern Overlay */}
        {iconUrl && (
          <div
            className="absolute inset-0 opacity-10 pointer-events-none z-0"
            style={{
              backgroundImage: `url(${iconUrl})`,
              backgroundSize: "60px 60px",
            }}
          />
        )}

        {/* Dynamic Surface Sheen Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 0.3 : 0,
            background: `linear-gradient(${115 + rotate.y * 3}deg, rgba(255,255,255,0.35) 0%, transparent 60%)`,
          }}
        />

        {/* Card Body */}
        <div className="relative z-20 p-6 flex flex-col items-center text-center">
          {/* Top Status Indicator */}
          <div className="w-full flex items-center justify-between mb-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[0.68rem] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{status}</span>
            </span>

            <span className="text-[0.65rem] font-mono text-slate-400 uppercase tracking-widest">
              LEADERSHIP
            </span>
          </div>

          {/* Avatar with Refined Border Ring */}
          <div className="relative mb-4 group/avatar">
            <div
              className="w-24 h-24 rounded-full p-[2px] transition-transform duration-300 group-hover/avatar:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.6) 0%, rgba(99,102,241,0.6) 100%)",
                boxShadow: `0 0 24px ${behindGlowColor}`,
              }}
            >
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover rounded-full bg-slate-900"
                loading="lazy"
              />
            </div>
          </div>

          {/* Member Name */}
          <h4 className="text-lg font-display font-bold text-white tracking-tight leading-snug">
            {name}
          </h4>

          {/* Role / Title */}
          <p className="text-xs sm:text-[0.8rem] text-sky-400 font-medium leading-relaxed mt-1 min-h-[38px] flex items-center justify-center text-center">
            {title}
          </p>

          {/* Sleek Action Button */}
          <button
            type="button"
            onClick={onContactClick}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-sky-400/50 hover:text-white transition-all duration-300 group/btn shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400 group-hover/btn:scale-110 transition-transform" />
            <span>{contactText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
