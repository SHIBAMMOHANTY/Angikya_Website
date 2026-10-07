import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import logo from "../assets/profile-pictures/angikya1.png";
import { navItems } from "../constants";
import Button from "./ui/Button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const innerRef = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  // GSAP scroll-driven shrink + rounded animation
  useEffect(() => {
    const nav = navRef.current;
    const inner = innerRef.current;
    if (!nav || !inner) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 40;

      if (scrolled !== hasScrolled) {
        setHasScrolled(scrolled);
      }

      const isMobile = window.innerWidth < 768;

      if (scrolled) {
        // Scrolled → transparent blurry frosted white glass pill
        gsap.to(nav, {
          paddingTop: isMobile ? "0.5rem" : "0.75rem",
          paddingBottom: isMobile ? "0.5rem" : "0.75rem",
          duration: 0.4,
          ease: "power3.out",
        });

        // Frosted glass blur on the pill only
        inner.style.backdropFilter = "blur(20px) saturate(180%)";
        inner.style.webkitBackdropFilter = "blur(20px) saturate(180%)";

        gsap.to(inner, {
          width: isMobile ? "92%" : "75%",
          maxWidth: "960px",
          borderRadius: "9999px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: isMobile ? "1rem" : "1.75rem",
          paddingRight: isMobile ? "1rem" : "1.75rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderColor: "rgba(226, 232, 240, 0.9)",
          boxShadow:
            "0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        // Top → 100% full width, completely transparent, no blur anywhere
        gsap.to(nav, {
          paddingTop: isMobile ? "0.75rem" : "1.25rem",
          paddingBottom: isMobile ? "0.75rem" : "1.25rem",
          duration: 0.4,
          ease: "power3.out",
        });

        // Remove blur from pill
        inner.style.backdropFilter = "none";
        inner.style.webkitBackdropFilter = "none";

        gsap.to(inner, {
          width: "100%",
          maxWidth: "1240px",
          borderRadius: "0px",
          paddingTop: "0.625rem",
          paddingBottom: "0.625rem",
          paddingLeft: isMobile ? "1rem" : "1.5rem",
          paddingRight: isMobile ? "1rem" : "1.5rem",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderColor: "rgba(226, 232, 240, 0)",
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hasScrolled]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Mobile link animation variants
  const drawerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { opacity: 0, y: -20, filter: "blur(6px)" },
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 py-5"
      style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
    >
      <div
        ref={innerRef}
        className="mx-auto flex justify-between items-center"
        style={{
          width: "100%",
          maxWidth: "1240px",
          padding: "0.625rem 1.5rem",
          borderRadius: "0px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src={logo}
            alt="ANGIKYA SOFTWARE"
          />
        </Link>

        {/* Center Navigation Links — Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive =
              location.pathname.toLowerCase() === item.href.toLowerCase();

            const textColor = isActive ? "#0284c7" : "#334155";

            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className="relative px-4 py-2 text-[0.8125rem] font-medium tracking-wide rounded-full transition-all duration-300 group"
                  style={{ color: textColor }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#0f172a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = textColor;
                    }
                  }}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(14, 165, 233, 0.12)",
                        border: "1px solid rgba(14, 165, 233, 0.25)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover background */}
                  {!isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-slate-200/50 transition-colors duration-300"
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA — Desktop */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2 text-[0.8125rem] font-semibold text-white rounded-full overflow-hidden group transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #4f46e5)",
              boxShadow: "0 0 20px -5px rgba(14, 165, 233, 0.4)",
            }}
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
            <span className="relative z-10">Let's Talk</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          className="lg:hidden relative p-2.5 rounded-full transition-all duration-300"
          style={{
            background: mobileDrawerOpen
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <AnimatePresence mode="wait">
            {mobileDrawerOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-slate-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ─── Mobile Fullscreen Drawer ─── */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 lg:hidden"
            style={{ top: "0", zIndex: 9999 }}
          >
            {/* Backdrop — fully opaque */}
            <div
              className="absolute inset-0"
              style={{
                background: "#070b14",
              }}
            />
            {/* Subtle ambient gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 20%, rgba(14,165,233,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(79,70,229,0.06) 0%, transparent 60%)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8">
              {/* Close button at top right */}
              <button
                onClick={toggleNavbar}
                className="absolute top-6 right-6 p-3 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Nav links */}
              <motion.ul
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2"
              >
                {navItems.map((item, index) => {
                  const isActive =
                    location.pathname.toLowerCase() ===
                    item.href.toLowerCase();
                  return (
                    <motion.li key={index} variants={linkVariants}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className="relative block py-3 px-4 rounded-2xl transition-all duration-300 group"
                        style={{
                          background: isActive
                            ? "rgba(14, 165, 233, 0.08)"
                            : "transparent",
                          borderLeft: isActive
                            ? "3px solid #0ea5e9"
                            : "3px solid transparent",
                        }}
                      >
                        <span
                          className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300"
                        />
                        <div className="relative flex items-center justify-between">
                          <span
                            className="text-3xl sm:text-4xl font-display font-bold tracking-tight transition-colors duration-300"
                            style={{
                              color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                            }}
                          >
                            {item.label}
                          </span>
                          <ArrowRight
                            className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                          />
                        </div>
                        {/* Subtle number indicator */}
                        <span
                          className="text-xs font-mono mt-0.5 block"
                          style={{ color: "rgba(255,255,255,0.2)" }}
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 pt-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #4f46e5)",
                    boxShadow: "0 0 30px -5px rgba(14, 165, 233, 0.3)",
                  }}
                >
                  Start A Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
