// ProjectCard.jsx — image-anchored case study card
// Photo background with Bluette-700-to-transparent vertical gradient overlay,
// lime category chip pinned top-left, white title pinned bottom-left,
// lime square arrow tile in bottom-left corner.

function ProjectCard({ image, category, title, subtitle, href = "#" }) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        aspectRatio: "410 / 552",
        borderRadius: 0,
        overflow: "hidden",
        textDecoration: "none",
        backgroundImage: `linear-gradient(180deg, rgba(39,0,101,0.7) 0%, rgba(39,0,101,0.2) 40%, rgba(0,0,0,0.55) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Category chip */}
      <div
        style={{
          position: "absolute",
          left: 20,
          top: 20,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          height: 31,
          padding: "0 16px",
          background: "var(--oe-lime-400)",
          color: "var(--oe-bluette-700)",
          fontFamily: "var(--oe-font-mono)",
          fontWeight: 500,
          fontSize: 14,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          borderRadius: 0,
        }}
      >
        <span style={{ width: 6, height: 6, background: "var(--oe-bluette-700)" }} />
        {category}
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: 24,
          right: 24,
          bottom: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          color: "#fff",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--oe-font-sans)",
            fontWeight: 500,
            fontSize: 32,
            lineHeight: 1.15,
            letterSpacing: "-0.005em",
            color: "#fff",
            textShadow: "0 1px 6px rgba(0,0,0,0.35)",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              margin: 0,
              fontFamily: "var(--oe-font-sans)",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.35,
              color: "#fff",
              textShadow: "0 1px 4px rgba(0,0,0,0.45)",
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--oe-lime-400)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--oe-bluette-700)" strokeWidth="2.2" strokeLinecap="square">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { ProjectCard });
