import React from "react";

interface SectionTitleProps {
  title: string;
  overtext?: string;
  subtitle?: string;
  underline?: string;
  align?: "left" | "center" | "right";
  variant?: "dark" | "light";
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
}) => {
  const textColor = variant === "light" ? "text-foreground" : "text-white";
  return (
    <div className={`flex flex-col gap-2 mb-4 ${alignmentMap[align]}`}>  
      {overtext && (
        <span className="tracking-widest text-md text-[#9D5CFF] font-bold mb-1">
          {overtext}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl ${textColor} max-w-2xl`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-md md:text-lg ${textColor}/50 max-w-2xl`}>
          {subtitle}
        </p>
      )}
      {underline && (
        <p className={`text-sm ${textColor}/50 max-w-2xl`}>
          {underline}
        </p>
      )}

    </div>
  );
};

export default SectionTitle; 