import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
import GradientText from "./GradientText";

export const SectionHeader = ({
  badge,
  badgeVariant = "primary",
  badgeDot = false,
  title,
  gradientWord,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} dot={badgeDot}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
        {title}{" "}
        {gradientWord && <GradientText>{gradientWord}</GradientText>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
