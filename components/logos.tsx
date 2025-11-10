import Section from "./atoms/section";

export default function Logos() {
  const logos = [
    "/logos/careme.png",
    "/logos/microsoft.png",
    "/logos/google.png",
    "/logos/DEVF.png",
    "/logos/chain.png",
    "/logos/brw.png",
    "/logos/rb.png",
    "/logos/maxehual.png",
  ];
  const marqueeLogos = [...logos, ...logos];

  return (
    <Section>
      <div className="marquee">
        <div className="marquee__track">
          {marqueeLogos.map((src, i) => (
            <div key={`${src}-${i}`} className="flex items-center justify-center px-6">
              <img src={src} alt="logo" style={{ height: "128px", width: "auto" }} />
            </div>
          ))}
        </div>

        <div className="marquee__track marquee__track--2" aria-hidden="true">
          {marqueeLogos.map((src, i) => (
            <div key={`${src}-dup-${i}`} className="flex items-center justify-center px-6">
              <img src={src} alt="" style={{ height: "128px", width: "auto" }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
          /* Optional soft edge mask (comment out if not desired) */
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee__track {
          display: flex;
          align-items: center;
          gap: 2rem;
          /* Smooth infinite scroll */
          animation: marquee 80s linear infinite;
          will-change: transform;
          /* Ensure the track is only as wide as its contents */
          width: max-content;
        }
        .marquee__track--2 {
          position: absolute;
          top: 0;
          left: 0;
          animation-name: marquee2;
          animation-duration: 80s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Section>
  );
}