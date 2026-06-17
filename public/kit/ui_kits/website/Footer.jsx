// Footer.jsx — OpenEconomics website footer
// Bluette-900 background, white wordmark, multiple link columns,
// big serif slogan at the bottom + addresses + social icons.

function Footer() {
  const colA = ["Home", "Solutions", "Open Rep", "Externalytics", "About Us", "Contact Us"];
  const colB = ["OpenRep", "Externalytics", "Insight Wall", "FAQs"];
  const colC = [
    "Modello di organizzazione e di gestione (ex D.Lgs. 231/01)",
    "Code of ethics",
    "Whistleblowing",
    "Informativa candidati",
    "Politica parità di genere",
    "Politica per la qualità e la sicurezza delle informazioni",
    "Report di sostenibilità",
  ];
  const colD = [
    "Politica di Responsabilità Sociale SA8000 – 2014",
    "ISO 9001:2015 : 39508/20/S",
    "ISO 14001:2015 : EMS-9855/S",
    "ISO 45001:2018 : OHS-5304",
    "ISO 27001:2022",
    "UniPdr 125",
  ];

  const linkStyle = {
    fontFamily: "var(--oe-font-sans)",
    fontSize: 14,
    lineHeight: 1.45,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 400,
  };
  const headStyle = {
    fontFamily: "var(--oe-font-sans)",
    fontWeight: 500,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    color: "var(--oe-lime-400)",
    marginBottom: 14,
    display: "block",
  };

  return (
    <footer
      style={{
        background: "var(--oe-bluette-900)",
        color: "#fff",
        padding: "80px var(--oe-page-pad)",
      }}
    >
      <div style={{ maxWidth: "var(--oe-max-width)", margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        {/* Wordmark */}
        <img src={(window.__resources && window.__resources.logoWhite) || "../../assets/logo-white.svg"} alt="OpenEconomics" style={{ height: 64, alignSelf: "flex-start" }} />

        {/* Links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "auto auto 1.4fr 1.2fr auto", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={headStyle}>Explore</span>
            {colA.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={headStyle}>Products</span>
            {colB.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={headStyle}>Compliance &amp; policy</span>
            {colC.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={headStyle}>Quality &amp; security</span>
            {colD.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-end" }}>
            <CtaButton label="talk to an expert" variant="lime" size="sm" />
            <div style={{ border: "1px solid #fff", padding: "10px 14px", display: "inline-flex", gap: 10, alignItems: "center", fontFamily: "var(--oe-font-sans)", fontSize: 13 }}>
              Rating di legalità <strong style={{ fontFamily: "var(--oe-font-sans)", fontWeight: 700 }}>★★★+</strong>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.5)" }} />

        {/* Slogan + addresses + social */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr auto", gap: 48, alignItems: "start" }}>
          <p
            style={{
              fontFamily: "var(--oe-font-serif)",
              fontSize: 32,
              lineHeight: 1.05,
              margin: 0,
              textWrap: "balance",
              color: "#fff",
            }}
          >
            Enabling adaptation. Empowering impact.<br />
            With platforms, strategy, and trust.
          </p>
          <div style={{ fontFamily: "var(--oe-font-sans)", fontSize: 14, lineHeight: 1.5, fontWeight: 400, color: "#fff" }}>
            Via J. F. Kennedy, 57/59<br />
            87036 Rende (CS)<br />
            +39 0984 302539
          </div>
          <div style={{ fontFamily: "var(--oe-font-sans)", fontSize: 14, lineHeight: 1.5, fontWeight: 400, color: "#fff" }}>
            Via Nino Bixio, 7<br />
            20129 Milano (MI)
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 36, height: 36, border: "1px solid #fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.6 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H7.82V8z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" style={{ width: 36, height: 36, border: "1px solid #fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>
            </a>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.5)" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--oe-font-sans)", fontSize: 13, fontWeight: 400, color: "#fff" }}>
          <div style={{ display: "flex", gap: 32 }}>
            <span>© 2025 OpenEconomics S.p.A.</span>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Cookie Policy</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Termini e Condizioni</a>
          </div>
          <a href="#" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>ENG ▾</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
