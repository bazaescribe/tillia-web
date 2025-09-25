import React from "react";

interface SectionTitleProps {
  title: string;
  overtext?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
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
  align = "left",
}) => {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${alignmentMap[align]}`}>  
      {overtext && (
        <span className="tracking-widest text-md text-[#FB0069] font-light mb-1">
          {overtext}
        </span>
      )}
      <h2 className="text-4xl md:text-4xl text-foreground max-w-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/50 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 