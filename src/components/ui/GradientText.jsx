import React from "react";

const variants = {
  primary: "from-brand-primary via-blue-400 to-brand-secondary",
  accent: "from-brand-accent via-rose-400 to-brand-primary",
  fire: "from-amber-400 via-orange-500 to-rose-600",
  silver: "from-white via-slate-200 to-slate-400",
};

export const GradientText = ({
  children,
  variant = "primary",
  className = "",
  as: Component = "span",
  ...props
}) => {
  return (
    <Component
      className={`bg-gradient-to-r ${variants[variant]} bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientText;
