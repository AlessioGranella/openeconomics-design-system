// Hero.jsx — OpenEconomics homepage hero
// Full-bleed photographic background. White text. Subtle bottom-edge fade so
// the strip into the next section feels seamless (matches the figma source).

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 760,
        background: `linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(255,255,255,0.95) 100%), url("${(window.__resources && window.__resources.heroBg) || '../../assets/hero-bg.png'}") center / cover no-repeat`,
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--oe-max-width)",
          margin: "0 auto",
          padding: "140px var(--oe-page-pad) 80px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 40 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--oe-font-serif)",
              fontWeight: 400,
              fontSize: 80,
              lineHeight: 1.05,
              letterSpacing: "-0.005em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Mitigate risks,<br />
            adapt with confidence
          </h1>
          <p
            style={{
              fontFamily: "var(--oe-font-sans)",
              fontWeight: 300,
              fontSize: 28,
              lineHeight: 1.2,
              color: "#fff",
              margin: 0,
              maxWidth: 760,
            }}
          >
            Mitigate risks. Decide mindfully. Negotiate from a stronger position. Communicate effectively.
          </p>
          <div>
            <CtaButton label="find the right path" variant="lime" size="md" />
          </div>
        </div>

        {/* Floating "new analysis" pill */}
        <div
          style={{
            position: "absolute",
            right: "var(--oe-page-pad)",
            top: 140,
            background: "#fff",
            border: "1px solid var(--oe-gray-200)",
            borderRadius: 0,
            padding: "18px 22px",
            width: 320,
            boxShadow: "0 4px 12px rgba(39,0,101,0.18)",
          }}
        >
          <div className="oe-eyebrow" style={{ marginBottom: 12, color: "var(--oe-bluette-700)" }}>NEW ANALYSIS</div>
          <p style={{ margin: 0, fontFamily: "var(--oe-font-sans)", fontSize: 18, fontWeight: 500, color: "var(--oe-black)", lineHeight: 1.25 }}>
            Nuova guida alla rendicontazione dei fondi pubblici
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: 12,
              fontFamily: "var(--oe-font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "var(--oe-bluette-700)",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            See more →
          </a>
        </div>

        {/* Scroll down */}
        <div
          style={{
            position: "absolute",
            left: "var(--oe-page-pad)",
            bottom: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#fff",
            fontFamily: "var(--oe-font-sans)",
            fontWeight: 500,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="18" height="30" rx="9" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none">
              <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          Scroll down
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
