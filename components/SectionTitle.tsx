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
        <span className="tracking-widest text-md text-[#000000]/50 font-light mb-1">
          {overtext}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 