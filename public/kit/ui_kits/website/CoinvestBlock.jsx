// CoinvestBlock.jsx — Bluette-700 panel near the bottom of the homepage:
// "Let's coinvest in your next move" — two-column with copy on the left, photo on the right.

function CoinvestBlock() {
  return (
    <section
      style={{
        background: "var(--oe-bluette-700)",
        borderRadius: 0,
        color: "#fff",
        margin: "0 var(--oe-page-pad)",
        padding: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        minHeight: 540,
        backgroundImage: "radial-gradient(circle at 85% 50%, var(--oe-bluette-500) 0%, var(--oe-bluette-700) 35%, var(--oe-bluette-900) 80%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div className="oe-eyebrow" style={{ color: "var(--oe-lime-400)" }}>LET'S COINVEST</div>
        <h2
          style={{
            fontFamily: "var(--oe-font-serif)",
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: "-0.005em",
            margin: 0,
            color: "#fff",
            textWrap: "balance",
          }}
        >
          A session with a senior consultant who — understanding your challenge — can help you move forward.
        </h2>
        <p style={{ fontFamily: "var(--oe-font-sans)", fontWeight: 300, fontSize: 20, lineHeight: 1.35, margin: 0, color: "#fff", maxWidth: 520 }}>
          Need funding but don't know where to start? Want to make your narrative bulletproof? Your sustainability report feels flat? Fighting for a policy but missing insights to support it?
        </p>
        <div style={{ marginTop: 8 }}>
          <CtaButton label="talk to an expert" variant="lime" size="md" />
        </div>
      </div>
      <div
        style={{
          height: 400,
          borderRadius: 0,
          backgroundImage: "url('../../assets/compass.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1) contrast(1.05)",
        }}
      />
    </section>
  );
}

Object.assign(window, { CoinvestBlock });
