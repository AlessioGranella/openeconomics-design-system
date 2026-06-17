// App.jsx — Stitches the components into an interactive homepage prototype.
// Includes a "Talk to an expert" modal driven by clicking any CTA.

const { useState } = React;

function ContactModal({ open, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <div className="oe-eyebrow" style={{ color: "var(--oe-bluette-700)", marginBottom: 16 }}>TALK TO AN EXPERT</div>
        <h3>How can we<br/>help you move forward?</h3>
        <p style={{ marginTop: 12, color: "var(--oe-gray-700)" }}>
          Tell us about your challenge — funding, impact, policy — and a senior consultant will reach out within 48h.
        </p>
        <div className="row">
          <div>
            <label>Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Maria Rossi" />
          </div>
          <div>
            <label>Work email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="maria@company.com" />
          </div>
        </div>
        <div className="row full">
          <div>
            <label>What's the challenge?</label>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="A project, a question, an idea …" />
          </div>
        </div>
        <div className="actions">
          <CtaButton label="send the request" variant="bluette" size="md" href="#" />
        </div>
        <div
          onClick={(e) => { e.preventDefault(); onSubmit && onSubmit({ name, email, msg }); }}
          style={{ position: "absolute", right: 48, bottom: 48, width: 280, height: 56, cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

function App() {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(null);

  const openModal = (e) => { if (e) e.preventDefault(); setModal(true); };
  const closeModal = () => setModal(false);
  const handleSubmit = ({ name }) => {
    setModal(false);
    setToast(name ? `Thanks ${name.split(" ")[0]} — we'll reach out within 48h.` : "Request sent — we'll reach out within 48h.");
    setTimeout(() => setToast(null), 3200);
  };

  // Capture all CTA clicks at the document level — links with href="#" pop the contact modal.
  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a.oe-cta");
      if (a) { e.preventDefault(); openModal(); }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Icon glyphs (Lucide-style, inline) ----------------------------------------
  const IconActivity = () => (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
  const IconCompare = () => (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3 4 7l4 4M16 21l4-4-4-4M4 7h16M20 17H4"/>
    </svg>
  );
  const IconCloud = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  );
  const IconBuild = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
  const IconZap = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  );
  const IconSunrise = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4"/>
    </svg>
  );
  const IconChart = () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2"/><circle cx="18" cy="9" r="3"/><circle cx="9" cy="17" r="2.5"/><circle cx="17" cy="18" r="1.5"/>
    </svg>
  );

  return (
    <main>
      <Header onCta={openModal} />
      <Hero />

      {/* "Be inspired by the most relevant projects" strip */}
      <section className="projects">
        <div className="projects-head">
          <h2>Be inspired by<br/>the most relevant projects</h2>
          <CtaButton label="Explore more" variant="lime" size="md" />
        </div>
        <div className="projects-grid">
          <ProjectCard
            image={(window.__resources && window.__resources.cardFeatured) || "../../assets/card-featured.png"}
            category="IMPACT ASSESSMENT"
            title="RFI — National Railway Infrastructure"
            subtitle="Cost-benefit and impact assessment, shaping a key investment of Italy's rail infrastructure."
          />
          <ProjectCard
            image={(window.__resources && window.__resources.newsCard) || "../../assets/news-card.jpg"}
            category="PUBLIC FUNDING"
            title="FIFA & WTO"
            subtitle="Goal: Economy in football. Study program, elevate football's economic and social footprint worldwide."
          />
          <ProjectCard
            image={(window.__resources && window.__resources.cardFeatured) || "../../assets/card-featured.png"}
            category="IMPACT ASSESSMENT"
            title="Tennis Nitto ATP Finals"
            subtitle="Measuring the GDP-positive impact of one of the world's biggest tennis tournaments."
          />
          <ProjectCard
            image={(window.__resources && window.__resources.newsCard) || "../../assets/news-card.jpg"}
            category="POLICY"
            title="Terna Driving Energy"
            subtitle="A 360° view on the energy transition: scenarios, externalities, and a path to 2030."
          />
        </div>
      </section>

      {/* Big intro — left text, right photo */}
      <section className="intro" style={{ paddingTop: 60 }}>
        <div>
          <h2>Navigate high-stakes choices with robust data, reliable insight, and a clear direction</h2>
          <div style={{ marginTop: 40 }}>
            <div className="bullet">Decide better</div>
            <div className="bullet">Engage effectively</div>
            <div className="bullet">Negotiate stronger</div>
            <div className="bullet">Mitigate risks</div>
          </div>
        </div>
        <div className="compass" />
      </section>

      {/* Solutions */}
      <section className="solutions">
        <h2>A unique blend of solutions<br/>built for adaptation.</h2>
        <div className="solutions-grid">
          <FeatureCard
            surface="white"
            icon={<IconActivity />}
            title={<span>Impact assessment<br/>Decisions backed by data.</span>}
            body="Quantify what matters: risks, externalities, returns for all the stakeholders. See beyond assumptions, with rigorous analysis you can trust."
          />
          <FeatureCard
            surface="white"
            icon={<IconCompare />}
            title={<span>Public funding<br/>End-to-end support</span>}
            body="From finding the right opportunities to reshaping projects, submitting applications, reporting, and getting funds disbursed — we're with you all the way."
          />
        </div>
        <CtaButton label="explore the solutions" variant="bluette" size="md" />
      </section>

      {/* Why us */}
      <section className="why-us">
        <div className="why-us-inner">
          <div>
            <h2>Built to deliver<br/>Powered by results</h2>
            <CtaButton label="discover OpenEconomics" variant="bluette" size="md" />
          </div>
          <div className="why-us-list">
            <div className="why-card">
              <div className="tile"><IconCloud /></div>
              <div>
                <p className="h">Super specialized competencies</p>
                <p className="d">We bring a rare mix of deep, specialist skills — from economics to policy, finance, and regulation.</p>
              </div>
            </div>
            <div className="why-card">
              <div className="tile"><IconBuild /></div>
              <div>
                <p className="h">Built to solve</p>
                <p className="d">We don't just advise — we solve. Every project is designed to address real business challenges.</p>
              </div>
            </div>
            <div className="why-card">
              <div className="tile"><IconZap /></div>
              <div>
                <p className="h">Maximum efficiency</p>
                <p className="d">We give you knowledge and tools that empower your team and speed up decisions, paired with prompt support when it counts.</p>
              </div>
            </div>
            <div className="why-card">
              <div className="tile"><IconSunrise /></div>
              <div>
                <p className="h">Trusted in high-stakes contexts</p>
                <p className="d">We've worked for years on complex projects and high-impact socio-economic scenarios, where decisions truly matter.</p>
              </div>
            </div>
            <div className="why-card">
              <div className="tile"><IconChart /></div>
              <div>
                <p className="h">Proven track record</p>
                <p className="d">We've worked with top institutions and major organizations in multiple industrial sectors and more than 30 countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <div className="clients">
        <span style={{ fontWeight: 700 }}>FIFA</span>
        <span>RFI</span>
        <span style={{ fontStyle: "italic" }}>Muzinich&amp;Co</span>
        <span style={{ letterSpacing: "0.18em" }}>FIT</span>
        <span style={{ fontFamily: "var(--oe-font-sans)", fontWeight: 700 }}>Terna</span>
        <span>Snam</span>
        <span>Enel</span>
      </div>

      {/* News */}
      <section className="news">
        <div className="news-head">
          <h2>Stay up to date with the latest<br/>news and resources from the OpenEconomics team.</h2>
          <CtaButton label="explore more news" variant="bluette" size="md" />
        </div>
        <div className="news-grid">
          <NewsCard
            image={(window.__resources && window.__resources.newsCard) || "../../assets/news-card.jpg"}
            category="INSIGHTS & OPINION"
            title="Bad data leads to bad policy. Discover how to avoid decision errors through impact assessment, scenario analysis, and public funds."
            date="05 / 11 / 2025"
          />
          <NewsCard
            image={(window.__resources && window.__resources.cardFeatured) || "../../assets/card-featured.png"}
            category="APPROFONDIMENTI & ANALYSIS"
            title="When football moves more than fans: the global economic footprint of the world's most-watched sport."
            date="04 / 06 / 2025"
          />
          <NewsCard
            image={(window.__resources && window.__resources.newsCard) || "../../assets/news-card.jpg"}
            category="APPROFONDIMENTI & OPINIONE"
            title="Fragile data generates inefficient policy. Avoid decision errors with impact assessment and scenario analysis."
            date="01 / 03 / 2025"
          />
        </div>
      </section>

      {/* Coinvest block */}
      <CoinvestBlock />

      <Footer />

      {/* Modal + toast */}
      <ContactModal open={modal} onClose={closeModal} onSubmit={handleSubmit} />
      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
