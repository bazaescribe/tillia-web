import Section from "./atoms/section";

export default function Logos() {
  const logos = [
    "/logos/microsoft.png",
    "/logos/google.png",
    "/logos/DEVF.png",
    "/logos/chain.png",
    "/logos/brw.png",
    "/logos/rb.png",
    "/logos/maxehual.png",
    "/logos/careme.png",
  ];
  return (
    <Section>
      <div className="content">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {logos.map((src, i) => {
            const isFirstColMobile = i % 2 === 0;
            const isFirstRowMobile = i < 2;
            const isFirstColMd = i % 4 === 0;
            const isFirstRowMd = i < 4;

            const borderClasses = [
              // base (mobile) interior borders
              !isFirstColMobile ? "border-l" : "",
              !isFirstRowMobile ? "border-t" : "",
              // remove mobile top border on desktop when item becomes first row
              isFirstRowMd && !isFirstRowMobile ? "md:border-t-0" : "",
              // desktop interior borders
              !isFirstColMd ? "md:border-l" : "",
              !isFirstRowMd ? "md:border-t" : "",
              // safety: remove mobile left border on desktop if it becomes first col
              isFirstColMd && !isFirstColMobile ? "md:border-l-0" : "",
              "border-gray-200",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={src}
                className={`flex items-center justify-center p-4 ${borderClasses}`}
              >
                <img
                  src={src}
                  alt="logo"
                  style={{ height: "144px", width: 'auto'}}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}