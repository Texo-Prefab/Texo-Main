import { ShieldCheck, Star, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Star, label: "99% Client Satisfaction" },
  { icon: Award, label: "500+ Projects Delivered" },
  { icon: ShieldCheck, label: "24/7 Support" },
  { icon: Star, label: "Top Rated Provider" },
];

export default function MarqueeBanner() {
  const repeated = [...items, ...items, ...items];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
          gap: 0;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .glass-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px 8px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.3s ease, border-color 0.3s ease;
          cursor: default;
          white-space: nowrap;
          user-select: none;
        }

        .glass-pill:hover {
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(136, 108, 70, 0.55);
        }

        .glass-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(136,108,70,0.75), rgba(180,148,100,0.45));
          border: 1px solid rgba(136, 108, 70, 0.4);
          flex-shrink: 0;
        }

        .divider-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(136, 108, 70, 0.5);
          flex-shrink: 0;
          margin: 0 20px;
        }

        .marquee-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(240, 230, 215, 0.88);
        }
      `}</style>

      <div
        style={{
          overflow: "hidden",
          position: "relative",
          background: "linear-gradient(90deg, #0f0d0b 0%, #1a1510 50%, #0f0d0b 100%)",
          borderTop: "1px solid rgba(136,108,70,0.2)",
          borderBottom: "1px solid rgba(136,108,70,0.2)",
          padding: "10px 0",
        }}
      >
        {/* Soft edge fade */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to right, #0f0d0b 0%, transparent 8%, transparent 92%, #0f0d0b 100%)"
        }} />

        <div className="marquee-track">
          {repeated.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div className="glass-pill" style={{ marginLeft: i === 0 ? "24px" : "0" }}>
                <div className="glass-icon-wrap">
                  <item.icon size={14} color="rgba(240,215,175,0.9)" strokeWidth={2} />
                </div>
                <span className="marquee-label">{item.label}</span>
              </div>
              <div className="divider-dot" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}