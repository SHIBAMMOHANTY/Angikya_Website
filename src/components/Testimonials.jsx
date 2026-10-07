import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const allTestimonials = [
  {
    user: "Dr. Rajesh Verma",
    role: "Chief Medical Director",
    company: "Apex Multi-Specialty Hospital",
    image: user1,
    rating: 5,
    tag: "Clinical HMIS",
    accent: "#0ea5e9",
    text: "Angikya transformed our OPD/IPD operations completely. Their HMIS platform cut patient check-in wait times by 65% and eradicated billing discrepancies across all departments.",
  },
  {
    user: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "FinTech Global Infrastructure",
    image: user2,
    rating: 5,
    tag: "Full-Stack & APIs",
    accent: "#6366f1",
    text: "The backend architecture delivered by Angikya handled our highest transaction concurrency without a hiccup. Clean code, comprehensive documentation, and shipped 3 weeks early.",
  },
  {
    user: "Ananya Swaroop",
    role: "Head of Hospital Operations",
    company: "VisionCare Eye Institute",
    image: user5,
    rating: 5,
    tag: "Ophthalmic IOL ERP",
    accent: "#06b6d4",
    text: "Their Intraocular Lens consignment module brought diopter verification to 100% precision. Surgical teams now access exact lens batches in seconds inside the operation theatre.",
  },
  {
    user: "Alexandre Moreau",
    role: "Founder & CTO",
    company: "CloudFlow Automations",
    image: user3,
    rating: 5,
    tag: "Microservices & DevOps",
    accent: "#10b981",
    text: "Partnering with Angikya was the best decision for our engineering team. Their microservice refactor effortlessly sustained a 10x traffic surge during our peak product launch.",
  },
  {
    user: "Dr. Sandeep Patnaik",
    role: "Director of Clinical Informatics",
    company: "Kalinga Health Systems",
    image: user4,
    rating: 5,
    tag: "EMR & Diagnostics",
    accent: "#ec4899",
    text: "Zero paper delays, instant encrypted analyzer report sync, and seamless NABH compliance. Angikya's clinical engineering team understands healthcare at a microscopic level.",
  },
  {
    user: "Marcus Chen",
    role: "Head of Product",
    company: "Aether AI Labs",
    image: user6,
    rating: 5,
    tag: "AI & Web Apps",
    accent: "#f59e0b",
    text: "The communication rhythm, technical discipline, and rapid sprint deliverables made them feel like an integral extension of our core team. Outstanding visual craftsmanship as well.",
  },
  {
    user: "Priya Mukherjee",
    role: "VP of Digital Health",
    company: "CareNext Telemedicine",
    image: user1,
    rating: 5,
    tag: "Mobile Telehealth",
    accent: "#8b5cf6",
    text: "They built our clinician mobile application with offline sync capabilities. Doctors in remote clinics can now chart patients seamlessly without losing a single record.",
  },
  {
    user: "David Miller",
    role: "Chief Technology Officer",
    company: "SaaS Scale Networks",
    image: user2,
    rating: 5,
    tag: "Cloud Scalability",
    accent: "#0ea5e9",
    text: "Angikya engineers possess exceptional architectural instinct. Their database indexing and queue pipelines saved us tens of thousands in monthly AWS infrastructure expenses.",
  },
];

const Testimonials = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Duplicate items for continuous seamless single-row loop
  const infiniteTestimonials = [...allTestimonials, ...allTestimonials];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden cursor-default select-none border-t border-slate-200"
    >
      {/* ── Ambient Gradient Glow Orbs ── */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-gradient-to-br from-sky-300/30 via-indigo-200/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-200/25 via-teal-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 bg-gradient-to-r from-violet-200/20 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md text-[0.72rem] font-mono text-slate-700 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">
            VERIFIED CLIENT REPUTATION
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">ANGIKYA TECHNOLOGY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 mb-4"
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Leaders.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
        >
          See how our mission-critical clinical systems, hospital ERPs, and cloud-native software empower healthcare facilities and modern technology companies.
        </motion.p>
      </div>

      {/* ── Single-Row Auto-Scrolled Marquee Track ── */}
      <div className="relative z-10 overflow-hidden">
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-hidden py-4"
        >
          <motion.div
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 42,
              repeat: Infinity,
            }}
            className="flex gap-6 shrink-0 pr-6"
          >
            {infiniteTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-[340px] sm:w-[420px] shrink-0 p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md shadow-slate-100 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Star rating & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <span
                      className="px-2.5 py-0.5 rounded-md text-[0.68rem] font-mono font-medium border"
                      style={{
                        backgroundColor: `${item.accent}12`,
                        color: item.accent,
                        borderColor: `${item.accent}30`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light mb-6">
                    "{item.text}"
                  </p>
                </div>

                {/* Bottom: Client Profile */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.user}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors flex items-center gap-1.5">
                        <span>{item.user}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      </h4>
                      <p className="text-[0.68rem] font-mono text-slate-500">
                        {item.role} • {item.company}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-sky-200 transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
