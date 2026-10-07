import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/profile-pictures/angikya1.png";

const navLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Services",        href: "/service" },
  { label: "Careers",         href: "/careers" },
  { label: "Contact",         href: "/contact" },
  { label: "Privacy Policy",  href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com/company/ANGIKYA",  label: "LinkedIn",  color: "#0ea5e9" },
  { icon: FaTwitter,  href: "https://twitter.com/ANGIKYA",           label: "Twitter",   color: "#6366f1" },
  { icon: FaGithub,   href: "https://github.com/ANGIKYA",            label: "GitHub",    color: "#8b5cf6" },
  { icon: FaInstagram,href: "https://instagram.com/ANGIKYA",         label: "Instagram", color: "#ec4899" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #05090f 0%, #0a0f1e 50%, #080d1a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >

      {/* ── MAIN FOOTER GRID ── */}
      <div className="px-4 sm:px-6 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Brand Column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <a href="/" className="inline-block">
            <img src={logo} alt="Angikya" className="h-9 w-auto object-contain" />
          </a>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            A collective of senior engineers building next-gen digital products that solve mission-critical challenges at scale.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}22`;
                  e.currentTarget.style.border = `1px solid ${color}55`;
                  e.currentTarget.style.boxShadow = `0 0 14px ${color}44`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-5">Navigation</h4>
          <ul className="space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <span
                    className="w-0 group-hover:w-3 h-px transition-all duration-300 rounded-full"
                    style={{ background: "linear-gradient(90deg,#0ea5e9,#6366f1)" }}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-5">Services</h4>
          <ul className="space-y-3">
            {["Web Development", "Mobile Apps", "AI & Automation", "Cloud Architecture", "UI/UX Design", "Custom Software"].map(s => (
              <li key={s}>
                <a
                  href="/service"
                  className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <span
                    className="w-0 group-hover:w-3 h-px transition-all duration-300 rounded-full"
                    style={{ background: "linear-gradient(90deg,#8b5cf6,#6366f1)" }}
                  />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-5">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: "#0ea5e9" }} />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                5th Floor, Flat No-507,<br />
                Promod Heights,<br />
                Bhubaneswar, Odisha
              </p>
            </div>

            <a href="tel:+919777684484" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}>
                <Phone className="w-3.5 h-3.5" style={{ color: "#0ea5e9" }} />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors">+91 97776 84484</span>
            </a>

            <a href="mailto:connect@angikya.com" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <Mail className="w-3.5 h-3.5" style={{ color: "#6366f1" }} />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors">connect@angikya.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="px-4 sm:px-6 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Angikya Technology. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-500 font-mono">All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
