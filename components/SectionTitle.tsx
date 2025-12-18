import React from "react";

interface SectionTitleProps {
  title: string;
  overtext?: string;
  subtitle?: string;
  underline?: string;
  align?: "left" | "center" | "right";
  variant?: "dark" | "light";
  size?: "small" | "large";
}

const alignmentMap = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  overtext,
  subtitle,
  underline,
  align = "left",
  variant = "light",
  size = "large"
}) => {
  const textColor = variant === "light" ? "text-foreground" : "text-white";
  return (
    <div className={`flex flex-col gap-2 ${alignmentMap[align]}`}>
      {overtext && (
        <span className="tracking-widest text-sm text-[#5729FF]">
          {overtext}
        </span>
      )}
      <h2 className={`text-3xl md:text-3xl font-bold ${textColor} max-w-2xl ${size === "small" ? "text-2xl md:text-2xl" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-md md:text-md ${textColor}/50 max-w-2xl ${size === "small" ? "text-sm md:text-sm" : ""}`}>
          {subtitle}
        </p>
      )}
      {underline && (
        <p className={`text-sm ${textColor}/50 max-w-2xl ${size === "small" ? "text-xs md:text-xs" : ""}`}>
          {underline}
        </p>
      )}

    </div>
  );
};

export default SectionTitle; 