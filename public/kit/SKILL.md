---
name: openeconomics-design
description: Use this skill to generate well-branded interfaces and assets for OpenEconomics, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

OpenEconomics is an Italian economics & policy consultancy. The brand is **rigorous-but-warm**: black-and-white foundation, deep purple (Bluette `#4400B3`), electric lime (`#B9FF69`) as the single accent.

- **Tokens** → `colors_and_type.css` (every `--oe-*` variable + type roles `.oe-display`, `.oe-h1`–`.oe-h5`, `.oe-body`, `.oe-eyebrow`, `.oe-tag`, `.oe-code`)
- **Fonts** → `fonts/` (Atkinson Hyperlegible Next + Mono + Hedvig Letters Serif — all variable .ttf)
- **Logos & imagery** → `assets/` (`logo-black.svg`, `logo-white.svg`, `logo-mark-white.svg`, hero photos, brand manual PDF)
- **UI kit** → `ui_kits/website/` — drop-in JSX for Header, Hero, CtaButton, FeatureCard, ProjectCard, NewsCard, CoinvestBlock, Footer.
- **Visual specimens** → `preview/` (one HTML file per token group)

## Core rules

1. **Dominant body weight is Atkinson Light 300.** Don't default to Regular.
2. **The signature CTA shape is `arrow tile + label`** — they share a background color, with a 4px gap between them. See `CtaButton.jsx`.
3. **No emoji. No exclamation marks. No bouncy animation.** Bright lime is the only thing that shouts.
4. **Sentence case** everywhere (`talk to an expert`, `Mitigate risks, adapt with confidence`), except mono eyebrows which are `ALL CAPS`.
5. **Em dashes** are part of the voice — use them to set off proof points.
6. **Card radius vocabulary is 0 / 2 / 4 / 16** — never in between.
7. **Bluette gradient overlays on photographs**: `linear-gradient(rgba(68,0,179,0.55) 0%, rgba(68,0,179,0) 100%)`.
8. **Iconography** is monoline (Lucide or Carbon), 1.5–2px stroke, sized 42×42 inside a 62×62 tile.
