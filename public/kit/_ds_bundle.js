/* @ds-bundle: {"format":3,"namespace":"OpenEconomicsDesignSystem_8aab03","components":[{"name":"Components","sourcePath":"ui_kits/dashboard/Components.tsx"}],"sourceHashes":{"ui_kits/dashboard/Components.tsx":"793f2c0a84d0","ui_kits/website/App.jsx":"be289546c365","ui_kits/website/CoinvestBlock.jsx":"755cf0991f22","ui_kits/website/CtaButton.jsx":"8b8782d9829c","ui_kits/website/FeatureCard.jsx":"bbf0298de26e","ui_kits/website/Footer.jsx":"7d2a041db8d7","ui_kits/website/Header.jsx":"ea43abec6628","ui_kits/website/Hero.jsx":"9dbcbd5cef63","ui_kits/website/NewsCard.jsx":"3b574456b8b2","ui_kits/website/ProjectCard.jsx":"d5af02cc4e25","utils/format-number.js":"d8cdc966da79"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpenEconomicsDesignSystem_8aab03 = window.OpenEconomicsDesignSystem_8aab03 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/dashboard/Components.tsx
try { (() => {
// Components.tsx — stub implementation for Components.bundle.js
// The real compiled output lives in Components.bundle.js (plain JS, no Babel needed).
// This file exists so the design-system compiler recognises the .d.ts catalog.
// Load via: <script src="Components.bundle.js"></script>

const Components = {};
Object.assign(__ds_scope, { Components });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Components.tsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// App.jsx — Stitches the components into an interactive homepage prototype.
// Includes a "Talk to an expert" modal driven by clicking any CTA.

const {
  useState
} = React;
function ContactModal({
  open,
  onClose,
  onSubmit
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      position: "relative"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "oe-eyebrow",
    style: {
      color: "var(--oe-bluette-700)",
      marginBottom: 16
    }
  }, "TALK TO AN EXPERT"), /*#__PURE__*/React.createElement("h3", null, "How can we", /*#__PURE__*/React.createElement("br", null), "help you move forward?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      color: "var(--oe-gray-700)"
    }
  }, "Tell us about your challenge \u2014 funding, impact, policy \u2014 and a senior consultant will reach out within 48h."), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Maria Rossi"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "maria@company.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row full"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "What's the challenge?"), /*#__PURE__*/React.createElement("textarea", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    rows: 4,
    placeholder: "A project, a question, an idea \u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "send the request",
    variant: "bluette",
    size: "md",
    href: "#"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.preventDefault();
      onSubmit && onSubmit({
        name,
        email,
        msg
      });
    },
    style: {
      position: "absolute",
      right: 48,
      bottom: 48,
      width: 280,
      height: 56,
      cursor: "pointer"
    }
  })));
}
function App() {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(null);
  const openModal = e => {
    if (e) e.preventDefault();
    setModal(true);
  };
  const closeModal = () => setModal(false);
  const handleSubmit = ({
    name
  }) => {
    setModal(false);
    setToast(name ? `Thanks ${name.split(" ")[0]} — we'll reach out within 48h.` : "Request sent — we'll reach out within 48h.");
    setTimeout(() => setToast(null), 3200);
  };

  // Capture all CTA clicks at the document level — links with href="#" pop the contact modal.
  React.useEffect(() => {
    const handler = e => {
      const a = e.target.closest("a.oe-cta");
      if (a) {
        e.preventDefault();
        openModal();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Icon glyphs (Lucide-style, inline) ----------------------------------------
  const IconActivity = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "38",
    height: "38",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }));
  const IconCompare = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "38",
    height: "38",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3 4 7l4 4M16 21l4-4-4-4M4 7h16M20 17H4"
  }));
  const IconCloud = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
  }));
  const IconBuild = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }));
  const IconZap = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
  }));
  const IconSunrise = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4"
  }));
  const IconChart = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "32",
    height: "32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "17",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "1.5"
  }));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Header, {
    onCta: openModal
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("section", {
    className: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "projects-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Be inspired by", /*#__PURE__*/React.createElement("br", null), "the most relevant projects"), /*#__PURE__*/React.createElement(CtaButton, {
    label: "Explore more",
    variant: "lime",
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    className: "projects-grid"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    image: window.__resources && window.__resources.cardFeatured || "../../assets/card-featured.png",
    category: "IMPACT ASSESSMENT",
    title: "RFI \u2014 National Railway Infrastructure",
    subtitle: "Cost-benefit and impact assessment, shaping a key investment of Italy's rail infrastructure."
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    image: window.__resources && window.__resources.newsCard || "../../assets/news-card.jpg",
    category: "PUBLIC FUNDING",
    title: "FIFA & WTO",
    subtitle: "Goal: Economy in football. Study program, elevate football's economic and social footprint worldwide."
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    image: window.__resources && window.__resources.cardFeatured || "../../assets/card-featured.png",
    category: "IMPACT ASSESSMENT",
    title: "Tennis Nitto ATP Finals",
    subtitle: "Measuring the GDP-positive impact of one of the world's biggest tennis tournaments."
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    image: window.__resources && window.__resources.newsCard || "../../assets/news-card.jpg",
    category: "POLICY",
    title: "Terna Driving Energy",
    subtitle: "A 360\xB0 view on the energy transition: scenarios, externalities, and a path to 2030."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "intro",
    style: {
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Navigate high-stakes choices with robust data, reliable insight, and a clear direction"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bullet"
  }, "Decide better"), /*#__PURE__*/React.createElement("div", {
    className: "bullet"
  }, "Engage effectively"), /*#__PURE__*/React.createElement("div", {
    className: "bullet"
  }, "Negotiate stronger"), /*#__PURE__*/React.createElement("div", {
    className: "bullet"
  }, "Mitigate risks"))), /*#__PURE__*/React.createElement("div", {
    className: "compass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "solutions"
  }, /*#__PURE__*/React.createElement("h2", null, "A unique blend of solutions", /*#__PURE__*/React.createElement("br", null), "built for adaptation."), /*#__PURE__*/React.createElement("div", {
    className: "solutions-grid"
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    surface: "white",
    icon: /*#__PURE__*/React.createElement(IconActivity, null),
    title: /*#__PURE__*/React.createElement("span", null, "Impact assessment", /*#__PURE__*/React.createElement("br", null), "Decisions backed by data."),
    body: "Quantify what matters: risks, externalities, returns for all the stakeholders. See beyond assumptions, with rigorous analysis you can trust."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    surface: "white",
    icon: /*#__PURE__*/React.createElement(IconCompare, null),
    title: /*#__PURE__*/React.createElement("span", null, "Public funding", /*#__PURE__*/React.createElement("br", null), "End-to-end support"),
    body: "From finding the right opportunities to reshaping projects, submitting applications, reporting, and getting funds disbursed \u2014 we're with you all the way."
  })), /*#__PURE__*/React.createElement(CtaButton, {
    label: "explore the solutions",
    variant: "bluette",
    size: "md"
  })), /*#__PURE__*/React.createElement("section", {
    className: "why-us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-us-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Built to deliver", /*#__PURE__*/React.createElement("br", null), "Powered by results"), /*#__PURE__*/React.createElement(CtaButton, {
    label: "discover OpenEconomics",
    variant: "bluette",
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    className: "why-us-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement(IconCloud, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h"
  }, "Super specialized competencies"), /*#__PURE__*/React.createElement("p", {
    className: "d"
  }, "We bring a rare mix of deep, specialist skills \u2014 from economics to policy, finance, and regulation."))), /*#__PURE__*/React.createElement("div", {
    className: "why-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement(IconBuild, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h"
  }, "Built to solve"), /*#__PURE__*/React.createElement("p", {
    className: "d"
  }, "We don't just advise \u2014 we solve. Every project is designed to address real business challenges."))), /*#__PURE__*/React.createElement("div", {
    className: "why-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement(IconZap, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h"
  }, "Maximum efficiency"), /*#__PURE__*/React.createElement("p", {
    className: "d"
  }, "We give you knowledge and tools that empower your team and speed up decisions, paired with prompt support when it counts."))), /*#__PURE__*/React.createElement("div", {
    className: "why-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement(IconSunrise, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h"
  }, "Trusted in high-stakes contexts"), /*#__PURE__*/React.createElement("p", {
    className: "d"
  }, "We've worked for years on complex projects and high-impact socio-economic scenarios, where decisions truly matter."))), /*#__PURE__*/React.createElement("div", {
    className: "why-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement(IconChart, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h"
  }, "Proven track record"), /*#__PURE__*/React.createElement("p", {
    className: "d"
  }, "We've worked with top institutions and major organizations in multiple industrial sectors and more than 30 countries.")))))), /*#__PURE__*/React.createElement("div", {
    className: "clients"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "FIFA"), /*#__PURE__*/React.createElement("span", null, "RFI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "Muzinich&Co"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "0.18em"
    }
  }, "FIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 700
    }
  }, "Terna"), /*#__PURE__*/React.createElement("span", null, "Snam"), /*#__PURE__*/React.createElement("span", null, "Enel")), /*#__PURE__*/React.createElement("section", {
    className: "news"
  }, /*#__PURE__*/React.createElement("div", {
    className: "news-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Stay up to date with the latest", /*#__PURE__*/React.createElement("br", null), "news and resources from the OpenEconomics team."), /*#__PURE__*/React.createElement(CtaButton, {
    label: "explore more news",
    variant: "bluette",
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    className: "news-grid"
  }, /*#__PURE__*/React.createElement(NewsCard, {
    image: window.__resources && window.__resources.newsCard || "../../assets/news-card.jpg",
    category: "INSIGHTS & OPINION",
    title: "Bad data leads to bad policy. Discover how to avoid decision errors through impact assessment, scenario analysis, and public funds.",
    date: "05 / 11 / 2025"
  }), /*#__PURE__*/React.createElement(NewsCard, {
    image: window.__resources && window.__resources.cardFeatured || "../../assets/card-featured.png",
    category: "APPROFONDIMENTI & ANALYSIS",
    title: "When football moves more than fans: the global economic footprint of the world's most-watched sport.",
    date: "04 / 06 / 2025"
  }), /*#__PURE__*/React.createElement(NewsCard, {
    image: window.__resources && window.__resources.newsCard || "../../assets/news-card.jpg",
    category: "APPROFONDIMENTI & OPINIONE",
    title: "Fragile data generates inefficient policy. Avoid decision errors with impact assessment and scenario analysis.",
    date: "01 / 03 / 2025"
  }))), /*#__PURE__*/React.createElement(CoinvestBlock, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactModal, {
    open: modal,
    onClose: closeModal,
    onSubmit: handleSubmit
  }), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, toast));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CoinvestBlock.jsx
try { (() => {
// CoinvestBlock.jsx — Bluette-700 panel near the bottom of the homepage:
// "Let's coinvest in your next move" — two-column with copy on the left, photo on the right.

function CoinvestBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
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
      backgroundImage: "radial-gradient(circle at 85% 50%, var(--oe-bluette-500) 0%, var(--oe-bluette-700) 35%, var(--oe-bluette-900) 80%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oe-eyebrow",
    style: {
      color: "var(--oe-lime-400)"
    }
  }, "LET'S COINVEST"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--oe-font-serif)",
      fontWeight: 400,
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: "-0.005em",
      margin: 0,
      color: "#fff",
      textWrap: "balance"
    }
  }, "A session with a senior consultant who \u2014 understanding your challenge \u2014 can help you move forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 1.35,
      margin: 0,
      color: "#fff",
      maxWidth: 520
    }
  }, "Need funding but don't know where to start? Want to make your narrative bulletproof? Your sustainability report feels flat? Fighting for a policy but missing insights to support it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "talk to an expert",
    variant: "lime",
    size: "md"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 400,
      borderRadius: 0,
      backgroundImage: "url('../../assets/compass.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "saturate(1.1) contrast(1.05)"
    }
  }));
}
Object.assign(window, {
  CoinvestBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CoinvestBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaButton.jsx
try { (() => {
// CtaButton.jsx — OpenEconomics primary CTA
// Arrow tile + label block, side by side with a 4px gap.
// Per brand guidance: the arrow tile background matches the button background,
// with the icon stroked in the opposite of the button's text color.
// Variants: "lime" (over dark), "bluette" (over light), "ghost" (outline on dark).

function CtaButton({
  label = "talk to an expert",
  href = "#",
  variant = "bluette",
  size = "md"
}) {
  const heights = {
    sm: 36,
    md: 52,
    lg: 60
  };
  const fontSizes = {
    sm: 13,
    md: 16,
    lg: 18
  };
  const h = heights[size] || heights.md;
  const fs = fontSizes[size] || fontSizes.md;
  const v = {
    lime: {
      bg: "var(--oe-lime-400)",
      fg: "var(--oe-bluette-700)",
      icon: "var(--oe-bluette-700)"
    },
    bluette: {
      bg: "var(--oe-bluette-700)",
      fg: "var(--oe-lime-400)",
      icon: "var(--oe-lime-400)"
    },
    ghost: {
      bg: "transparent",
      fg: "#fff",
      icon: "#fff",
      border: "1px solid #fff"
    },
    "ghost-dark": {
      bg: "transparent",
      fg: "var(--oe-bluette-700)",
      icon: "var(--oe-bluette-700)",
      border: "1px solid var(--oe-bluette-700)"
    }
  }[variant] || {};
  const tileStyle = {
    width: h,
    height: h,
    background: v.bg,
    border: v.border || "none",
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  const lblStyle = {
    background: v.bg,
    color: v.fg,
    padding: `0 ${h / 2}px`,
    display: "inline-flex",
    alignItems: "center",
    border: v.border || "none",
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "oe-cta",
    style: {
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
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tileStyle
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: h * 0.42,
    height: h * 0.42,
    fill: "none",
    stroke: v.icon,
    strokeWidth: "2.2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  }))), /*#__PURE__*/React.createElement("span", {
    style: lblStyle
  }, label));
}
Object.assign(window, {
  CtaButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaButton.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeatureCard.jsx
try { (() => {
// FeatureCard.jsx — flat card (no border, sharp corners) with icon + heading + body.
// Three typologies, picked by the background the card sits on (`surface`):
//   surface="white" → on #FFFFFF bg → card #F1F1F1, dark text
//   surface="gray"  → on #F1F1F1 bg → card #FFFFFF, dark text
//   surface="dark"  → on #270065 bg → card #4400B3, white text
// Icon square is always #270065 with an #F1F1F1 glyph.

function FeatureCard({
  icon,
  title,
  body,
  surface = "white"
}) {
  const isDark = surface === "dark";
  const isGray = surface === "gray";
  const cardBg = isDark ? "#4400B3" : isGray ? "#FFFFFF" : "#F1F1F1";
  const tileBg = "#270065";
  const iconColor = "#F1F1F1";
  const titleColor = isDark ? "#fff" : "var(--oe-black)";
  const bodyColor = isDark ? "rgba(255,255,255,0.88)" : "var(--oe-gray-700)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "none",
      borderRadius: 0,
      background: cardBg,
      padding: "32px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: tileBg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: iconColor
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.2,
      letterSpacing: "-0.005em",
      color: titleColor,
      margin: 0,
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 300,
      fontSize: 22,
      lineHeight: 1.3,
      color: bodyColor,
      letterSpacing: "0.01em",
      margin: 0,
      textWrap: "pretty"
    }
  }, body));
}
Object.assign(window, {
  FeatureCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — OpenEconomics website footer
// Bluette-900 background, white wordmark, multiple link columns,
// big serif slogan at the bottom + addresses + social icons.

function Footer() {
  const colA = ["Home", "Solutions", "Open Rep", "Externalytics", "About Us", "Contact Us"];
  const colB = ["OpenRep", "Externalytics", "Insight Wall", "FAQs"];
  const colC = ["Modello di organizzazione e di gestione (ex D.Lgs. 231/01)", "Code of ethics", "Whistleblowing", "Informativa candidati", "Politica parità di genere", "Politica per la qualità e la sicurezza delle informazioni", "Report di sostenibilità"];
  const colD = ["Politica di Responsabilità Sociale SA8000 – 2014", "ISO 9001:2015 : 39508/20/S", "ISO 14001:2015 : EMS-9855/S", "ISO 45001:2018 : OHS-5304", "ISO 27001:2022", "UniPdr 125"];
  const linkStyle = {
    fontFamily: "var(--oe-font-sans)",
    fontSize: 14,
    lineHeight: 1.45,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 400
  };
  const headStyle = {
    fontFamily: "var(--oe-font-sans)",
    fontWeight: 500,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    color: "var(--oe-lime-400)",
    marginBottom: 14,
    display: "block"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--oe-bluette-900)",
      color: "#fff",
      padding: "80px var(--oe-page-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--oe-max-width)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || "../../assets/logo-white.svg",
    alt: "OpenEconomics",
    style: {
      height: 64,
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto auto 1.4fr 1.2fr auto",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Explore"), colA.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Products"), colB.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Compliance & policy"), colC.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Quality & security"), colD.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "talk to an expert",
    variant: "lime",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #fff",
      padding: "10px 14px",
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
      fontFamily: "var(--oe-font-sans)",
      fontSize: 13
    }
  }, "Rating di legalit\xE0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 700
    }
  }, "\u2605\u2605\u2605+")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 1fr auto",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--oe-font-serif)",
      fontSize: 32,
      lineHeight: 1.05,
      margin: 0,
      textWrap: "balance",
      color: "#fff"
    }
  }, "Enabling adaptation. Empowering impact.", /*#__PURE__*/React.createElement("br", null), "With platforms, strategy, and trust."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      color: "#fff"
    }
  }, "Via J. F. Kennedy, 57/59", /*#__PURE__*/React.createElement("br", null), "87036 Rende (CS)", /*#__PURE__*/React.createElement("br", null), "+39 0984 302539"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      color: "#fff"
    }
  }, "Via Nino Bixio, 7", /*#__PURE__*/React.createElement("br", null), "20129 Milano (MI)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn",
    style: {
      width: 36,
      height: 36,
      border: "1px solid #fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.6 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H7.82V8z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube",
    style: {
      width: 36,
      height: 36,
      border: "1px solid #fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--oe-font-sans)",
      fontSize: 13,
      fontWeight: 400,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 OpenEconomics S.p.A."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Termini e Condizioni")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  }, "ENG \u25BE"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Header.jsx — OpenEconomics website header
// Props:
//   onNavigate  – callback for primary nav clicks
//   onCta       – callback for CTA click
//   subnav      – optional array of { label, anchor } for inner-page secondary nav
//                 e.g. [{ label: "Overview", anchor: "#overview" }, ...]
//                 When provided, a gray #F1F1F1 strip renders below the primary bar.
//   activeAnchor – the currently active anchor string (highlights matching subnav item)

function Header({
  onNavigate,
  onCta,
  subnav,
  activeAnchor
}) {
  const links = ["What we offer", "Who we are", "Insight wall"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: subnav ? "none" : "1px solid var(--oe-gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--oe-max-width)",
      margin: "0 auto",
      padding: "20px var(--oe-page-pad)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    },
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoBlack || "../../assets/logo-black.svg",
    alt: "OpenEconomics",
    style: {
      height: 26,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 36
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontSize: 16,
      color: "var(--oe-black)",
      textDecoration: "none",
      fontWeight: 400,
      letterSpacing: "0.005em"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "Talk to an expert",
    variant: "bluette",
    size: "sm",
    href: "#"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 500,
      fontSize: 12,
      color: "var(--oe-gray-700)",
      letterSpacing: "0.02em"
    }
  }, "ENG \u25BE")))), subnav && subnav.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F1F1F1",
      borderBottom: "1px solid var(--oe-gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--oe-max-width)",
      margin: "0 auto",
      padding: "0 var(--oe-page-pad)",
      display: "flex",
      alignItems: "center",
      gap: 0
    }
  }, subnav.map(({
    label,
    anchor
  }) => {
    const isActive = activeAnchor === anchor;
    return /*#__PURE__*/React.createElement("a", {
      key: anchor,
      href: anchor,
      style: {
        fontFamily: "var(--oe-font-sans)",
        fontSize: 14,
        fontWeight: isActive ? 500 : 400,
        color: isActive ? "var(--oe-bluette-700)" : "#2C2C2C",
        textDecoration: "none",
        padding: "12px 20px",
        borderBottom: isActive ? "2px solid var(--oe-bluette-700)" : "2px solid transparent",
        letterSpacing: "0.005em",
        transition: "color 0.15s ease, border-color 0.15s ease"
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = "var(--oe-bluette-700)";
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = "#2C2C2C";
      }
    }, label);
  }))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — OpenEconomics homepage hero
// Full-bleed photographic background. White text. Subtle bottom-edge fade so
// the strip into the next section feels seamless (matches the figma source).

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 760,
      background: `linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(255,255,255,0.95) 100%), url("${window.__resources && window.__resources.heroBg || '../../assets/hero-bg.png'}") center / cover no-repeat`,
      color: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--oe-max-width)",
      margin: "0 auto",
      padding: "140px var(--oe-page-pad) 80px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--oe-font-serif)",
      fontWeight: 400,
      fontSize: 80,
      lineHeight: 1.05,
      letterSpacing: "-0.005em",
      color: "#fff",
      textWrap: "balance"
    }
  }, "Mitigate risks,", /*#__PURE__*/React.createElement("br", null), "adapt with confidence"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.2,
      color: "#fff",
      margin: 0,
      maxWidth: 760
    }
  }, "Mitigate risks. Decide mindfully. Negotiate from a stronger position. Communicate effectively."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CtaButton, {
    label: "find the right path",
    variant: "lime",
    size: "md"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "var(--oe-page-pad)",
      top: 140,
      background: "#fff",
      border: "1px solid var(--oe-gray-200)",
      borderRadius: 0,
      padding: "18px 22px",
      width: 320,
      boxShadow: "0 4px 12px rgba(39,0,101,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oe-eyebrow",
    style: {
      marginBottom: 12,
      color: "var(--oe-bluette-700)"
    }
  }, "NEW ANALYSIS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--oe-font-sans)",
      fontSize: 18,
      fontWeight: 500,
      color: "var(--oe-black)",
      lineHeight: 1.25
    }
  }, "Nuova guida alla rendicontazione dei fondi pubblici"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-block",
      marginTop: 12,
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 500,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      color: "var(--oe-bluette-700)",
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, "See more \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
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
      letterSpacing: "0.02em"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "32",
    viewBox: "0 0 20 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "30",
    rx: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "1.5",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    values: "8;18;8",
    dur: "2s",
    repeatCount: "indefinite"
  }))), "Scroll down")));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsCard.jsx
try { (() => {
// NewsCard.jsx — Insight Wall list card
// No border, no radius.

function NewsCard({
  image,
  category,
  title,
  date,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      border: "none",
      borderRadius: 0,
      overflow: "hidden",
      background: "#fff",
      textDecoration: "none",
      color: "var(--oe-fg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10",
      backgroundImage: `linear-gradient(rgba(68,0,179,0.4) 0%, rgba(68,0,179,0) 100%), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 28px 36px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: "var(--oe-bluette-700)"
    }
  }), category), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 300,
      fontSize: 22,
      lineHeight: 1.25,
      letterSpacing: "-0.005em",
      color: "var(--oe-black)",
      textWrap: "pretty"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--oe-font-sans)",
      fontSize: 13,
      color: "var(--oe-gray-500)",
      letterSpacing: "0.01em"
    }
  }, date)));
}
Object.assign(window, {
  NewsCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectCard.jsx
try { (() => {
// ProjectCard.jsx — image-anchored case study card
// Photo background with Bluette-700-to-transparent vertical gradient overlay,
// lime category chip pinned top-left, white title pinned bottom-left,
// lime square arrow tile in bottom-left corner.

function ProjectCard({
  image,
  category,
  title,
  subtitle,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      aspectRatio: "410 / 552",
      borderRadius: 0,
      overflow: "hidden",
      textDecoration: "none",
      backgroundImage: `linear-gradient(180deg, rgba(39,0,101,0.7) 0%, rgba(39,0,101,0.2) 40%, rgba(0,0,0,0.55) 100%), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: "var(--oe-bluette-700)"
    }
  }), category), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.15,
      letterSpacing: "-0.005em",
      color: "#fff",
      textShadow: "0 1px 6px rgba(0,0,0,0.35)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--oe-font-sans)",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.35,
      color: "#fff",
      textShadow: "0 1px 4px rgba(0,0,0,0.45)"
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: "var(--oe-lime-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "var(--oe-bluette-700)",
    strokeWidth: "2.2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })))));
}
Object.assign(window, {
  ProjectCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// utils/format-number.js
try { (() => {
/**
 * format-number.js — OpenEconomics number formatting utility
 *
 * Rules:
 *   Italian (locale "it"):  thousands = "."  decimals = ","   e.g. 1.234.567,89
 *   English  (locale "en"):  thousands = ","  decimals = "."   e.g. 1,234,567.89
 *
 * Usage (browser / Node):
 *   import { formatNumber, formatCurrency, formatPercent } from './utils/format-number.js';
 *
 *   formatNumber(1234567)          // → "1.234.567"   (default: Italian)
 *   formatNumber(1234567, "en")    // → "1,234,567"
 *   formatNumber(1234567.89, "it", 2)  // → "1.234.567,89"
 *   formatCurrency(412600, "it")   // → "412.600 €"
 *   formatCurrency(412600, "en")   // → "€ 412,600"
 *   formatPercent(18.4, "it")      // → "18,4%"
 *   formatPercent(18.4, "en")      // → "18.4%"
 *
 * In HTML templates (no import needed — include as a plain script):
 *   <script src="../../utils/format-number.js"></script>
 *   formatNumber(1000000) → "1.000.000"
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const exports = factory();
    Object.assign(root, exports);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  /**
   * Core formatter.
   * @param {number} value
   * @param {"it"|"en"} locale   default "it"
   * @param {number}  decimals   decimal places; default: auto (strip trailing zeros)
   * @returns {string}
   */
  function formatNumber(value, locale, decimals) {
    if (typeof locale === "undefined") locale = "it";
    const thSep = locale === "en" ? "," : ".";
    const decSep = locale === "en" ? "." : ",";
    if (isNaN(value)) return String(value);
    let abs = Math.abs(value);
    let sign = value < 0 ? "-" : "";
    let integer, fraction;
    if (typeof decimals === "number") {
      const fixed = abs.toFixed(decimals);
      const parts = fixed.split(".");
      integer = parts[0];
      fraction = decimals > 0 ? parts[1] : "";
    } else {
      const str = abs.toString();
      const dot = str.indexOf(".");
      integer = dot === -1 ? str : str.slice(0, dot);
      fraction = dot === -1 ? "" : str.slice(dot + 1).replace(/0+$/, "");
    }

    // insert thousands separator
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thSep);
    return sign + integer + (fraction ? decSep + fraction : "");
  }

  /**
   * Format a monetary amount.
   * IT: "412.600 €"  |  EN: "€ 412,600"
   */
  function formatCurrency(value, locale, decimals) {
    locale = locale || "it";
    const n = formatNumber(value, locale, decimals);
    return locale === "en" ? "\u20AC\u00A0" + n : n + "\u00A0\u20AC";
  }

  /**
   * Format a percentage.
   * IT: "18,4%"  |  EN: "18.4%"
   */
  function formatPercent(value, locale, decimals) {
    locale = locale || "it";
    const d = typeof decimals === "number" ? decimals : 1;
    return formatNumber(value, locale, d) + "%";
  }
  return {
    formatNumber,
    formatCurrency,
    formatPercent
  };
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "utils/format-number.js", error: String((e && e.message) || e) }); }

__ds_ns.Components = __ds_scope.Components;

})();
