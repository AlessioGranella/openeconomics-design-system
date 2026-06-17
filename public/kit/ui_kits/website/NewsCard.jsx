// NewsCard.jsx — Insight Wall list card
// No border, no radius.

function NewsCard({ image, category, title, date, href = "#" }) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "none",
        borderRadius: 0,
        overflow: "hidden",
        background: "#fff",
        textDecoration: "none",
        color: "var(--oe-fg)",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          backgroundImage: `linear-gradient(rgba(68,0,179,0.4) 0%, rgba(68,0,179,0) 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div style={{ padding: "28px 28px 36px", display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 10,
            height: 31,
            padding: "0 16px",
            background: "var(--oe-lime-400)",
            color: "var(--oe-bluette-700)",
            fontFamily: "var(--oe-font-mono)",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            borderRadius: 0,
          }}
        >
          <span style={{ width: 6, height: 6, background: "var(--oe-bluette-700)" }} />
          {category}
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--oe-font-sans)",
            fontWeight: 300,
            fontSize: 22,
            lineHeight: 1.25,
            letterSpacing: "-0.005em",
            color: "var(--oe-black)",
            textWrap: "pretty",
          }}
        >
          {title}
        </p>
        <div
          style={{
            fontFamily: "var(--oe-font-sans)",
            fontSize: 13,
            color: "var(--oe-gray-500)",
            letterSpacing: "0.01em",
          }}
        >
          {date}
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { NewsCard });
