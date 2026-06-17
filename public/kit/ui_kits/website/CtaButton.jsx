// CtaButton.jsx — OpenEconomics primary CTA
// Arrow tile + label block, side by side with a 4px gap.
// Per brand guidance: the arrow tile background matches the button background,
// with the icon stroked in the opposite of the button's text color.
// Variants: "lime" (over dark), "bluette" (over light), "ghost" (outline on dark).

function CtaButton({ label = "talk to an expert", href = "#", variant = "bluette", size = "md" }) {
  const heights = { sm: 36, md: 52, lg: 60 };
  const fontSizes = { sm: 13, md: 16, lg: 18 };
  const h = heights[size] || heights.md;
  const fs = fontSizes[size] || fontSizes.md;

  const v = ({
    lime:    { bg: "var(--oe-lime-400)",    fg: "var(--oe-bluette-700)", icon: "var(--oe-bluette-700)" },
    bluette: { bg: "var(--oe-bluette-700)", fg: "var(--oe-lime-400)",    icon: "var(--oe-lime-400)"    },
    ghost:        { bg: "transparent", fg: "#fff",                 icon: "#fff",                  border: "1px solid #fff" },
    "ghost-dark": { bg: "transparent", fg: "var(--oe-bluette-700)",icon: "var(--oe-bluette-700)", border: "1px solid var(--oe-bluette-700)" },
  })[variant] || {};

  const tileStyle = {
    width: h,
    height: h,
    background: v.bg,
    border: v.border || "none",
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };
  const lblStyle = {
    background: v.bg,
    color: v.fg,
    padding: `0 ${h / 2}px`,
    display: "inline-flex",
    alignItems: "center",
    border: v.border || "none",
    boxSizing: "border-box",
  };

  return (
    <a
      href={href}
      className="oe-cta"
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        gap: 4,
        height: h,
        fontFamily: "var(--oe-font-sans)",
        fontSize: fs,
        fontWeight: 500,
        textDecoration: "none",
        textTransform: "uppercase",
        letterSpacing: "0.02em",
        lineHeight: 1,
      }}
    >
      <span style={tileStyle}>
        <svg viewBox="0 0 24 24" width={h * 0.42} height={h * 0.42} fill="none" stroke={v.icon} strokeWidth="2.2" strokeLinecap="square">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
      <span style={lblStyle}>{label}</span>
    </a>
  );
}

Object.assign(window, { CtaButton });
