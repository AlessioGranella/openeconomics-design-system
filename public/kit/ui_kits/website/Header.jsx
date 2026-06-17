// Header.jsx — OpenEconomics website header
// Props:
//   onNavigate  – callback for primary nav clicks
//   onCta       – callback for CTA click
//   subnav      – optional array of { label, anchor } for inner-page secondary nav
//                 e.g. [{ label: "Overview", anchor: "#overview" }, ...]
//                 When provided, a gray #F1F1F1 strip renders below the primary bar.
//   activeAnchor – the currently active anchor string (highlights matching subnav item)

function Header({ onNavigate, onCta, subnav, activeAnchor }) {
  const links = ["What we offer", "Who we are", "Insight wall"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* ── Primary bar ── */}
      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: subnav ? "none" : "1px solid var(--oe-gray-200)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--oe-max-width)",
            margin: "0 auto",
            padding: "20px var(--oe-page-pad)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }} style={{ display: "inline-flex" }}>
            <img src={(window.__resources && window.__resources.logoBlack) || "../../assets/logo-black.svg"} alt="OpenEconomics" style={{ height: 26, display: "block" }} />
          </a>
          <nav style={{ display: "flex", gap: 36 }}>
            {links.map((l) => (
              <a
                key={l}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }}
                style={{
                  fontFamily: "var(--oe-font-sans)",
                  fontSize: 16,
                  color: "var(--oe-black)",
                  textDecoration: "none",
                  fontWeight: 400,
                  letterSpacing: "0.005em",
                }}
              >
                {l}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <CtaButton label="Talk to an expert" variant="bluette" size="sm" href="#" />
            <span style={{ fontFamily: "var(--oe-font-sans)", fontWeight: 500, fontSize: 12, color: "var(--oe-gray-700)", letterSpacing: "0.02em" }}>
              ENG ▾
            </span>
          </div>
        </div>
      </div>

      {/* ── Secondary nav (inner pages only) ── */}
      {subnav && subnav.length > 0 && (
        <div
          style={{
            background: "#F1F1F1",
            borderBottom: "1px solid var(--oe-gray-200)",
          }}
        >
          <div
            style={{
              maxWidth: "var(--oe-max-width)",
              margin: "0 auto",
              padding: "0 var(--oe-page-pad)",
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            {subnav.map(({ label, anchor }) => {
              const isActive = activeAnchor === anchor;
              return (
                <a
                  key={anchor}
                  href={anchor}
                  style={{
                    fontFamily: "var(--oe-font-sans)",
                    fontSize: 14,
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "var(--oe-bluette-700)" : "#2C2C2C",
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderBottom: isActive ? "2px solid var(--oe-bluette-700)" : "2px solid transparent",
                    letterSpacing: "0.005em",
                    transition: "color 0.15s ease, border-color 0.15s ease",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--oe-bluette-700)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#2C2C2C"; }}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Header });
