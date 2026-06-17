// FeatureCard.jsx — flat card (no border, sharp corners) with icon + heading + body.
// Three typologies, picked by the background the card sits on (`surface`):
//   surface="white" → on #FFFFFF bg → card #F1F1F1, dark text
//   surface="gray"  → on #F1F1F1 bg → card #FFFFFF, dark text
//   surface="dark"  → on #270065 bg → card #4400B3, white text
// Icon square is always #270065 with an #F1F1F1 glyph.

function FeatureCard({ icon, title, body, surface = "white" }) {
  const isDark = surface === "dark";
  const isGray = surface === "gray";
  const cardBg = isDark ? "#4400B3" : isGray ? "#FFFFFF" : "#F1F1F1";
  const tileBg = "#270065";
  const iconColor = "#F1F1F1";
  const titleColor = isDark ? "#fff" : "var(--oe-black)";
  const bodyColor = isDark ? "rgba(255,255,255,0.88)" : "var(--oe-gray-700)";

  return (
    <div
      style={{
        border: "none",
        borderRadius: 0,
        background: cardBg,
        padding: "32px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          background: tileBg,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: iconColor,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--oe-font-sans)",
          fontWeight: 400,
          fontSize: 28,
          lineHeight: 1.2,
          letterSpacing: "-0.005em",
          color: titleColor,
          margin: 0,
          textWrap: "balance",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--oe-font-sans)",
          fontWeight: 300,
          fontSize: 22,
          lineHeight: 1.3,
          color: bodyColor,
          letterSpacing: "0.01em",
          margin: 0,
          textWrap: "pretty",
        }}
      >
        {body}
      </p>
    </div>
  );
}

Object.assign(window, { FeatureCard });
