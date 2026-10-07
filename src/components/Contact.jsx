import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { countryCodes } from "../countryCodes";
import {
  PhoneCall,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

const techOptions = [
  { value: "React.js", label: "React.js" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "Angular", label: "Angular" },
  { value: "Next.js", label: "Next.js" },
  { value: "Laravel", label: "Laravel" },
  { value: "Django", label: "Django" },
  { value: "Node.js", label: "Node.js" },
  { value: "Flutter", label: "Flutter" },
  { value: "React Native", label: "React Native" },
  { value: "Other", label: "Other" },
];

const budgetOptions = [
  { value: "10k-50k", label: "₹10,000 - ₹50,000" },
  { value: "50k-1L", label: "₹50,000 - ₹1,00,000" },
  { value: "1L-5L", label: "₹1,00,000 - ₹5,00,000" },
  { value: "5L+", label: "₹5,00,000+" },
  { value: "custom", label: "Custom Budget" },
];

const projectTypeOptions = [
  "Hospital / Clinical HMIS",
  "Static Website",
  "Dynamic Web Application",
  "Mobile App (iOS / Android)",
  "Desktop Software",
  "Custom Enterprise ERP",
  "AI & Chat Bot",
  "Portfolio / Corporate",
  "Other",
];

// Refined, Minimal react-select styling
const modernSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#ffffff" : "#f8fafc",
    borderColor: state.isFocused ? "#0ea5e9" : "#e2e8f0",
    borderRadius: "0.75rem",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(14, 165, 233, 0.12)" : "none",
    minHeight: "44px",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#0ea5e9",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#94a3b8",
    fontSize: "0.85rem",
  }),
  input: (provided) => ({
    ...provided,
    color: "#0f172a",
    fontSize: "0.85rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#0f172a",
    fontSize: "0.85rem",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    borderRadius: "0.375rem",
    border: "1px solid rgba(14, 165, 233, 0.2)",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#0284c7",
    fontSize: "0.75rem",
    fontWeight: "600",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#0284c7",
    ":hover": {
      backgroundColor: "rgba(14, 165, 233, 0.25)",
      color: "#0369a1",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#ffffff",
    borderRadius: "0.75rem",
    border: "1px solid #e2e8f0",
    boxShadow: "0 12px 36px -4px rgba(15, 23, 42, 0.12)",
    zIndex: 50,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "rgba(14, 165, 233, 0.12)"
      : state.isFocused
      ? "#f0f9ff"
      : "#ffffff",
    color: "#0f172a",
    fontSize: "0.85rem",
    borderRadius: "0.375rem",
    cursor: "pointer",
  }),
};

const Contact = () => {
  const [form, setForm] = useState({
    projectType: "",
    techStack: [],
    otherTech: "",
    budget: "",
    customBudget: "",
    name: "",
    email: "",
    company: "",
    mobile: "",
    requirements: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Real-time field validation
    if (name === "mobile") {
      setErrors({
        ...errors,
        mobile: value.length !== 10 ? "Phone number must be exactly 10 digits." : "",
      });
    }
    if (name === "email") {
      setErrors({
        ...errors,
        email: !value.includes("@") ? "Email must contain a valid '@' address." : "",
      });
    }
  };

  const handleTechStackChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map((opt) => opt.value) : [];
    setForm({
      ...form,
      techStack: values,
      otherTech: values.includes("Other") ? form.otherTech : "",
    });
  };

  const handleBudgetChange = (selectedOption) => {
    if (!selectedOption) return;
    if (selectedOption.value === "custom") {
      setForm({ ...form, budget: "custom", customBudget: "" });
    } else {
      setForm({ ...form, budget: selectedOption.value, customBudget: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (form.mobile.length !== 10) {
      newErrors.mobile = "Phone number must be exactly 10 digits.";
    }
    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain a valid '@' address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    const finalForm = {
      ...form,
      budget: form.budget === "custom" ? form.customBudget : form.budget,
    };

    emailjs
      .send(
        "service_3na0f5j",
        "template_ywdfmca",
        finalForm,
        "khTulBgT8kM_O_R84"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) {
            formRef.current.reset();
          }
          setForm({
            projectType: "",
            techStack: [],
            otherTech: "",
            budget: "",
            customBudget: "",
            name: "",
            email: "",
            company: "",
            mobile: "",
            requirements: "",
            message: "",
          });

          setTimeout(() => setSuccess(false), 4000);
        },
        (err) => {
          console.error("Failed to send email:", err);
          setLoading(false);
          setSuccess(false);
          alert("Oops! Something went wrong. Please try again or reach out directly via WhatsApp.");
        }
      );
  };

  const labelCls = "block text-[0.7rem] font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5";
  const inputCls =
    "w-full px-3.5 py-2.5 rounded-xl text-sm text-slate-900 placeholder-slate-400 border border-slate-200 bg-slate-50/70 hover:border-slate-300 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all duration-200";

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ── Subtle Background Architectural Grid & Ambient Blurs ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Page Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-950 mb-3"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Exceptional.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-light"
          >
            Have a project in mind or need enterprise assistance? Reach out through our direct channels or submit your requirements below.
          </motion.p>
        </div>

        {/* ── TOP CONTACT CARDS (SHOWN ON TOP SIDE) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {[
            {
              href: "tel:+919777684484",
              icon: PhoneCall,
              label: "Phone / Voice Call",
              value: "+91 97776 84484",
              accent: "#0ea5e9",
              subtext: "Mon - Sat, 9:30 AM - 7:00 PM IST",
            },
            {
              href: "https://wa.me/919777684484",
              icon: MessageCircle,
              label: "WhatsApp Direct",
              value: "+91 97776 84484",
              accent: "#10b981",
              subtext: "Instant chat & rapid scoping",
              external: true,
            },
            {
              href: "mailto:connect@angikya.com",
              icon: Mail,
              label: "Corporate Email",
              value: "connect@angikya.com",
              accent: "#6366f1",
              subtext: "Official proposals & inquiries",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${item.accent}12`,
                    borderColor: `${item.accent}30`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.68rem] font-mono text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                    {item.value}
                  </p>
                  <p className="text-[0.72rem] text-slate-500 mt-0.5">{item.subtext}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── PROPOSAL FORM (CENTERED BELOW) ── */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-100/60"
          >
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900">
                    Submit Project Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in the requirements below and our engineering architects will review your scope.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[0.7rem] font-mono text-sky-700">
                  <Sparkles className="w-3 h-3 text-sky-500" />
                  <span>Quick Scoping</span>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Project Type & Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>What do you want to build? *</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className={inputCls}
                    >
                      <option value="">Select project scope</option>
                      {projectTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Preferred Tech Stack</label>
                    <Select
                      options={techOptions}
                      isMulti
                      classNamePrefix="react-select"
                      onChange={handleTechStackChange}
                      placeholder="Select technologies..."
                      styles={modernSelectStyles}
                    />
                    {form.techStack.includes("Other") && (
                      <input
                        type="text"
                        name="otherTech"
                        value={form.otherTech}
                        onChange={handleChange}
                        placeholder="Specify other technology..."
                        className={`${inputCls} mt-2`}
                      />
                    )}
                  </div>
                </div>

                {/* 2. Budget Estimation */}
                <div>
                  <label className={labelCls}>Estimated Budget</label>
                  <Select
                    options={budgetOptions}
                    classNamePrefix="react-select"
                    onChange={handleBudgetChange}
                    placeholder="Select budget range..."
                    styles={modernSelectStyles}
                  />
                  {form.budget === "custom" && (
                    <input
                      type="text"
                      name="customBudget"
                      value={form.customBudget}
                      onChange={handleChange}
                      placeholder="Enter custom budget (in INR or USD)..."
                      className={`${inputCls} mt-2`}
                    />
                  )}
                </div>

                {/* 3. Client Contact Details (Name, Email, Company, Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className={labelCls}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Shibam Mohanty"
                      className={inputCls}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[0.7rem] font-mono mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Company / Hospital */}
                  <div>
                    <label className={labelCls}>Company / Hospital Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Care Hospital or Healthcorp"
                      className={inputCls}
                    />
                  </div>

                  {/* Mobile Number with Country Code */}
                  <div>
                    <label className={labelCls}>Mobile Number *</label>
                    <div className="flex gap-2">
                      <div className="w-[42%] shrink-0">
                        <Select
                          options={countryCodes}
                          classNamePrefix="react-select"
                          onChange={(s) => setSelectedCountryCode(s.value)}
                          value={countryCodes.find((c) => c.value === selectedCountryCode)}
                          formatOptionLabel={(o) => (
                            <div className="flex items-center gap-1.5 text-xs">
                              <img
                                src={o.flag}
                                alt={o.label}
                                className="w-4 h-3 object-cover rounded-sm shrink-0"
                              />
                              <span>{o.value}</span>
                            </div>
                          )}
                          styles={modernSelectStyles}
                        />
                      </div>
                      <input
                        type="text"
                        name="mobile"
                        required
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className={`${inputCls} flex-1`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-red-500 text-[0.7rem] font-mono mt-1">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                {/* 4. Project Requirements */}
                <div>
                  <label className={labelCls}>Project Requirements / Message</label>
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe your requirements, timeline, or any specific clinical modules needed..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* 5. Submit Button & Status Feed */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-95 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                      boxShadow: "0 4px 18px rgba(14, 165, 233, 0.3)",
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Proposal...</span>
                      </span>
                    ) : success ? (
                      <span className="flex items-center gap-2 text-emerald-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        <span>Proposal Sent Successfully!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Submit Project Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  {success && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs text-emerald-600 font-medium mt-3"
                    >
                      Thank you! Our solutions architect will review your proposal and respond within 2-4 hours.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Bottom Trust & Location Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Promod Heights, Mancheswar, Bhubaneswar</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Avg. Response: Under 2 Hours</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Strict NDA Compliant</span>
              </span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
