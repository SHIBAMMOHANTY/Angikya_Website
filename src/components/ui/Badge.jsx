import React from "react";

const variants = {
  primary: "bg-brand-primary/10 text-brand-primary border-brand-primary/30",
  secondary: "bg-brand-secondary/10 text-indigo-300 border-brand-secondary/30",
  accent: "bg-brand-accent/10 text-orange-400 border-brand-accent/30",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  glass: "bg-white/5 text-slate-300 border-white/10 backdrop-blur-md",
};

export const Badge = ({
  children,
  variant = "primary",
  dot = false,
  dotColor = "bg-emerald-400",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border uppercase tracking-wider ${variants[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
