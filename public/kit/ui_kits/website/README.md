# OpenEconomics — Website UI Kit

The marketing-website surface of OpenEconomics (`openeconomics.eu`). One interactive prototype, eight reusable React components.

Open **`index.html`** to see the homepage prototype: header, hero, project strip, intro statement, solutions, "Built to deliver" feature wall, client logos, news grid, "Let's coinvest" block, footer. Every "talk to an expert" / CTA opens a contact modal. Modal submit fires a toast.

## Components

| File | What it is | Variants |
|---|---|---|
| `CtaButton.jsx` | The signature OpenEconomics CTA: square arrow tile + label block, side by side. Arrow tile matches button background. | `lime`, `bluette`, `ghost`, `ghost-dark` × sizes `sm` / `md` / `lg` |
| `Header.jsx` | Sticky white header with logo, 3 primary nav links, primary CTA, language toggle. | — |
| `Hero.jsx` | Full-bleed photographic hero with vertical white fade, serif display headline, body subtitle, floating "new analysis" card, scroll-down indicator. | — |
| `FeatureCard.jsx` | Flat card (no border, sharp corners) with icon square + heading + body. Card fill follows its background: on white → #F1F1F1, on #F1F1F1 → #FFFFFF, on #270065 → #4400B3. Icon square is always #270065 with an #F1F1F1 glyph. | `surface: "white"` (default), `"gray"`, or `"dark"` |
| `ProjectCard.jsx` | Image-anchored case-study card: photo background, Bluette gradient overlay, lime category chip, title + lime arrow tile pinned bottom-left. | — |
| `NewsCard.jsx` | Insight Wall card: photo, category chip, title (light weight), date. 1px black outline. | — |
| `CoinvestBlock.jsx` | The "Let's coinvest" closing CTA: Bluette-700 panel with serif headline, copy, lime CTA, photo block. | — |
| `Footer.jsx` | Bluette-900 footer: wordmark, 4 link columns, big serif slogan, addresses, social icons, bottom bar. | — |

## How to use

```html
<link rel="stylesheet" href="../../colors_and_type.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
<script type="text/babel" src="CtaButton.jsx"></script>
<script type="text/babel" src="Header.jsx"></script>
<!-- … etc. App.jsx mounts to #root -->
<script type="text/babel" src="App.jsx"></script>
```

Each component file ends with `Object.assign(window, {...})` so they share scope across separate Babel script tags.

## Limitations

These are **cosmetic recreations** — they pixel-match the Figma source but cut corners on real functionality:
- The contact modal is the only stateful flow. Form submit fires a toast; nothing leaves the page.
- All CTAs route to the modal — there are no internal product pages in this kit.
- Mobile breakpoint is not wired up. The Figma file has a separate mobile page set (`PAGINE-X-SVILUPPO`) we did not port.
- The internal product UIs for **Sonar** and **Externalytics** are only available as device-mounted hero screenshots in the marketing pages, so we don't ship UI kits for them.
