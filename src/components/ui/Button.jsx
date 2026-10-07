import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow hover:shadow-cyan-500/50 hover:brightness-110 border border-cyan-400/30",
  secondary:
    "bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-brand-primary/40 backdrop-blur-md",
  accent:
    "bg-gradient-to-r from-brand-accent to-rose-500 text-white shadow-glowAccent hover:brightness-110 border border-orange-400/30",
  outline:
    "bg-transparent hover:bg-brand-primary/10 text-brand-primary border border-brand-primary/40 hover:border-brand-primary",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent",
};

const sizes = {
  sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base font-bold rounded-xl gap-2.5",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  icon: Icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center font-sans transition-all duration-300 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} className="inline-block">
        <Link to={to} className={`group ${baseClasses}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} className="inline-block">
        <a href={href} className={`group ${baseClasses}`} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
