# Project Alphono 34: Anatomy of a Dependent State

<div align="center">
  <img src="src/assets/hero.png" alt="Project Alphono 34 Banner" width="100%" />
</div>

<br/>

> **"The prosperity of a state measured only by its throughput — while blind to its input origins — is an accounting illusion, not economic strength."**

---

## 1. Executive Summary

Project Alphono 34 is a large-scale, source-cited React application that functions as an interactive critical dependency analysis of Gujarat. Unlike standard economic portals that celebrate output metrics, this project systematically dissects the **structural vulnerabilities, external supply chain dependencies, and single points of failure** underpinning one of India's most industrialized states.

The project analyzes **13 structural pillars across 27 routes**, backed by **290+ cited sources** from CAG reports, NITI Aayog data, news organizations (Business Standard, The Print, Economic Times, Rest of World, Reuters), CPCB assessments, TRAI filings, DoT QoS reports, and academic research. Every claim carries an inline citation linked to a verifiable URL.

**Core thesis**: Gujarat's economic engine is built on supply chains that originate far beyond its borders — from imported Indonesian coal powering coastal mega-plants, to Chinese APIs sustaining its pharma sector, to migrant workers from Bihar and Odisha running its factories, to a single dam supplying water to 3 crore people, to submarine internet cables that land exclusively in Mumbai.

---

## 2. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.2 |
| Build Tool | Vite | 8.0 |
| Styling | Tailwind CSS | v4.2 (Vite plugin integration) |
| Animation | Framer Motion | 12.38 |
| Charts | Recharts | 3.8 |
| Maps | react-simple-maps + d3-geo + topojson-client | 3.0 / 3.1 / 3.1 |
| Routing | React Router DOM | 7.13 |
| Icons | Lucide React | 1.7 |
| SEO | react-helmet-async | 3.0 |

**Key architectural decisions**:
- **No state management library** — Dark-mode source-of-truth lifted to `Navbar.jsx` which mutates `document.documentElement.classList`; leaf components (`PillarChart`, `CascadeDiagram`, `SimulatorImpactBars`) read the theme via `useSyncExternalStore` + MutationObserver for React 19-correct reactivity.
- **Tailwind v4** — Uses `@theme` block in `index.css` (no `tailwind.config.js`).
- **Route-level code splitting** — Every page is loaded via `React.lazy` + `<Suspense>`; first paint ships only the Home bundle.
- **Error-safe routing** — `<ErrorBoundary>` wraps all routes; invalid paths hit a proper 404 page.
- **Custom hooks** — `useDarkMode`, `useScrollProgress`, `useSearch`, `useDebounce` factor cross-cutting behaviors out of pages.
- **All research data hardcoded** — No API calls; data is embedded in page components and `src/data/` files.

---

## 3. Project Architecture

```text
Project-Alphono_34/
|-- index.html                      # Root HTML template
|-- package.json                    # Dependencies & scripts
|-- vite.config.js                  # Vite + Tailwind + React config
|-- eslint.config.js                # ESLint rules
|-- README.md                       # This file
|-- CONTRIBUTING.md                 # How to add pillars, code style, citation rules
|
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|   |-- geo/                        # Local GeoJSON (Gujarat, India, supply-chain countries)
|
|-- src/
    |-- main.jsx                    # ReactDOM entry point
    |-- App.jsx                     # Router (27 routes), lazy-loaded, ErrorBoundary-wrapped
    |-- App.css                     # Utility overrides
    |-- index.css                   # Tailwind v4 @theme, CSS vars, scrollbars, .sr-only, reduced-motion
    |
    |-- assets/
    |   |-- hero.png                # Landing banner
    |
    |-- components/                 # 28 shared components (see §4)
    |
    |-- hooks/
    |   |-- useDarkMode.js
    |   |-- useScrollProgress.js
    |   |-- useSearch.js
    |   |-- useDebounce.js
    |
    |-- data/
    |   |-- searchIndex.js          # Searchable claims across 13 pillars
    |   |-- districtsData.js        # 33 district profiles (7 deep + 26 placeholder)
    |   |-- sourcesData.js          # 290+ inline-cited sources
    |   |-- humanStories.js         # 27 obituary-style first-person accounts
    |   |-- simulatorCoefficients.js  # 20-lever Break Simulator registry (V2 schema)
    |   |-- simulatorTypes.js       # Type-doc shapes for the simulator
    |   |-- tradeRoutesData.js      # Mercantile trade map data
    |   |-- timeSeries/             # Chart timeseries datasets
    |   |-- _fragments/             # Per-group lever data (groupA_materials, B_physical, C_human, D_frontier)
    |
    |-- pages/                      # 28 routed pages (incl. NotFound)
        |-- Home.jsx                # Landing: hero, abstract, ToC, radar, supply chain map, pillars
        |-- Infrastructure.jsx      # Pillar I: Ports, bridges, DFC, digital gap
        |-- Energy.jsx              # Pillar II: Coal, LNG, renewables, grid collapse
        |-- Water.jsx               # Pillar III: Narmada, groundwater, SAUNI, fluoride
        |-- Labor.jsx               # Pillar IV: Migrant exodus, diamond crisis, Morbi
        |-- Economics.jsx           # Pillar V: CAG audit, OTR, GIFT City, FDI
        |-- Materials.jsx           # Pillar VI: Russian crude, Chinese APIs, potash
        |-- Education.jsx           # Pillar VII: Dropouts, GER collapse, healthcare
        |-- Environment.jsx         # Pillar VIII: Pollution, Alang, mangroves, erosion
        |-- MigrantDiscrimination.jsx   # Pillar IX: 2018 pogrom, labor rights, ESI gaps
        |-- Agriculture.jsx         # Pillar X: Cotton, BT, groundwater, MSP gap
        |-- GreenTech.jsx           # Pillar XI: Solar imports, EV battery, hydrogen
        |-- ChemicalGovernance.jsx  # Pillar XII: Chemical clusters, compliance audit
        |-- DigitalSovereignty.jsx  # Pillar XIII: Submarine cables, cloud, UPI/Aadhaar deps
        |-- Summary.jsx             # Executive synthesis, risk matrix, scenarios
        |-- Timeline.jsx            # Chronological crisis timeline (2016-2026)
        |-- DistrictMap.jsx         # Interactive Gujarat map (33 districts)
        |-- DistrictAnalysis.jsx    # Individual district deep-dive (route param)
        |-- GlobalTradeIndex.jsx    # Mercantile trade dependency map
        |-- BreakSimulator.jsx      # 20-lever stress-test simulator (V2)
        |-- Stories.jsx             # 27 obituary-style first-person accounts
        |-- Brief.jsx               # Cinematic 6-section scroll-driven case file
        |-- SourceGraph.jsx         # Investigation-Board view of source clusters
        |-- Confrontation.jsx       # Graphic-novel courtroom (search-only Easter egg)
        |-- AuthorsNote.jsx         # Author's note / acknowledgements
        |-- Methodology.jsx         # Research methodology + simulator math (§8)
        |-- Sources.jsx             # Master source reference page
        |-- NotFound.jsx            # 404 catch-all
```

---

## 4. Components

28 shared components in `src/components/`:

| Component | Role |
|-----------|------|
| `Navbar.jsx` | Semantic nav, mobile hamburger, a11y, dark-mode source-of-truth |
| `Footer.jsx` | Pillar + resource links (`role="contentinfo"`) |
| `Shared.jsx` | `Section`, `DataCard`, `Ref`, `SourceList`, `StatBox`, `PendingDataBox` |
| `SEO.jsx` | react-helmet-async wrapper |
| `PillarChart.jsx` | Recharts wrapper (bar/pie), memoized, a11y-tagged |
| `ComparisonTable.jsx` | State-vs-state table, sticky header, scoped `th`, memoized |
| `CounterArgument.jsx` | Debate chat (Rajubhai vs Priya), a11y-friendly |
| `Timeline.jsx` | Vertical chronological events |
| `SupplyChainMap.jsx` | SVG world map with animated dependency flows |
| `MercantileTradeMap.jsx` | Trade-routes dependency overlay |
| `CascadeDiagram.jsx` | 2026 crisis propagation (custom SVG Sankey) |
| `SearchBar.jsx` | Ctrl+K floating search modal (`aria-live` results) |
| `ScrollSpy.jsx` | Sidebar section tracker for long pages |
| `Skeleton.jsx` | Loading placeholder (shimmer) |
| `AnimatedCounter.jsx` | In-view number counter |
| `ErrorBoundary.jsx` | Catches render errors, themed fallback |
| `SearchHighlight.jsx` | Highlights matched terms in results |
| `StorySideSheet.jsx` / `StoryMarker.jsx` | Human Stories sheet + map markers |
| `GovResponseToggle.jsx` | "Government rebuttal" inline toggle on each pillar |
| `SimulatorLever.jsx` | Single 0–N stepper lever with description + cite |
| `SimulatorImpactBars.jsx` | Pillar % bars with focus + Why? popover |
| `SimulatorImpactMap.jsx` | Gujarat district heatmap (primary + ripple) |
| `WhyThisPercent.jsx` | Per-pillar formula + factor breakdown |
| `NamedPopulationPanel.jsx` | Affected workers / migrants with ethnicity badges |
| `HistoricalPrecedentCard.jsx` | Past analogue (e.g., 2018 Iranian crude phase-out) |
| `CascadeTicker.jsx` | Animated cascade timeline (T+0h, T+24h, …) |
| `EducationCascadePanel.jsx` | Downstream Education narrative cards |

---

## 5. Design System

### Typography
- **Headings**: Playfair Display (serif) — academic, journalistic authority
- **Body**: Inter (sans-serif) — clarity on data-dense layouts

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| Background | `parchment-50` (#fdfbf7) | `dark-bg` (#121212) | Page canvas |
| Surface | `parchment-100` (#fcf8eb) | `dark-surface` (#1E1E1E) | Card backgrounds |
| Border | `parchment-200` (#f5ead0) | `dark-border` (#333333) | Dividers |
| Accent | `crimson` (#D32F2F) | `crimson` (#D32F2F) | Alerts, key metrics, scroll bar |
| Selection | white on crimson | white on crimson | Text selection |

### Component Pattern (Per Pillar Page)
```
Hero (PILLAR XX label)
  -> ScrollSpy sidebar (sticky section TOC)
    -> Section blocks with DataCards + Charts
      -> ComparisonTable (state vs. state)
        -> CounterArgument (Rajubhai vs Priya chat)
          -> GovResponseToggle (official rebuttal)
            -> SourceList (cited URLs at bottom)
```

---

## 6. Research Pillars (13 Sectors)

| # | Pillar | Route | Key Metric | Sources |
|---|--------|-------|-----------|---------|
| I | Infrastructure & Logistics | `/infrastructure` | 500.8 MMT (APSEZ FY26) | 22 |
| II | Energy Grid & Power | `/energy` | 550+ Morbi units shut | 18 |
| III | Water Security | `/water` | 132% Mehsana extraction | 18 |
| IV | Migrant Labor Ecosystem | `/labor` | 5–6 L workers fled (2026) | 22 |
| V | Governance & Fiscal | `/economics` | 4.9% OTR / Rs 11,929 Cr CAG flag | 27 |
| VI | Industrial Raw Materials | `/materials` | 36% crude from Russia | 23 |
| VII | Education & Healthcare | `/education` | 2.4 L dropouts (#1 India) | 20 |
| VIII | Environment & Climate | `/environment` | Sabarmati "cesspool" ruling | 22 |
| IX | Migrant Discrimination | `/migrant-discrimination` | 20K+ workers attacked (2018) | 33 |
| X | Agriculture | `/agriculture` | BT cotton collapse, MSP gap | 22 |
| XI | Green Tech & Transition | `/greentech` | Chinese solar cell dependency | 22 |
| XII | Chemical Governance | `/chemical-governance` | Vapi/Ankleshwar compliance gaps | 22 |
| XIII | Digital Sovereignty | `/digital-sovereignty` | 0 submarine cable landings | 23 |

Source totals are tabulated per-pillar in `src/data/sourcesData.js`.

---

## 7. Interactive Surfaces

### Break Simulator (`/simulator`)
20-lever stress-test where the user can throttle Gujarat's external supply lines (Russian crude, Chinese APIs, Indonesian coal, migrant return flows, GIFT City fiber, etc.) and watch percent-disruption land on each of the 13 pillars in real time. Each lever ships:
- a derivation formula (`asset_share × dependency_weight × propagation_factor × 100`),
- a named-population panel (with ethnicity badges where applicable),
- a historical analogue card,
- a cascade ticker (T+0h → T+72h),
- ≥3 verifiable sources.

Full math, weights, and concrete examples are inlined on the simulator page itself, and also documented at `/methodology#simulator` (§8).

### Human Stories (`/stories`)
27 obituary-style first-person accounts (workers, families, migrants) drawn from the underlying research, surfaced via map markers and a side-sheet reader.

### Brief (`/brief`)
A cinematic, scroll-driven 6-section case file with auto-play — designed for a one-screen executive walkthrough.

### Source Graph (`/source-graph`)
Investigation-Board view of how the 290+ sources cluster across pillars and themes.

### District Map (`/map` → `/district/:id`)
Geographic exploration of all 33 districts; 7 deep profiles (Morbi, Surat, Kutch, Jamnagar, Mehsana, Bharuch, Ahmedabad) with timelines, dependency summaries, and pillar tags.

### Global Trade Index (`/global-trade`)
Mercantile trade-route dependency map.

### Crisis Timeline (`/timeline`)
Chronological mapping of systemic failures from 2016 demonetization through the 2026 twin-crisis.

### Global Search (Ctrl+K / Cmd+K)
Indexed claims across 13 pillars, results grouped by pillar, `aria-live` announced to screen readers.

---

## 8. Accessibility

The application targets WCAG 2.1 AA:
- Semantic landmarks: `<header role="banner">`, `<nav aria-label="Primary">`, `<main id="main">`, `<footer role="contentinfo">`.
- Skip-to-content link as the first focusable element.
- `aria-current="page"` on active nav links; `aria-pressed` on the theme toggle.
- Mobile hamburger menu exposes all 13 pillar routes + resource pages below `md:`.
- All icon-only buttons have descriptive `aria-label`s.
- Charts (`PillarChart`), the supply-chain map, and the cascade diagram are wrapped in `<figure role="img">` with text `<figcaption>` fallbacks.
- Tables have `<caption>` and `scope="col"` on headers.
- `@media (prefers-reduced-motion: reduce)` disables non-essential animations, and Framer Motion respects `useReducedMotion()` in the cascade ticker and page transitions.

---

## 9. Mobile

- Responsive from 320 px up.
- Below `md:` (768 px), the Navbar collapses to a hamburger that slides down a full-height sheet containing the primary nav + every pillar + resources. The sheet closes on route change, Esc, or backdrop click, and returns focus to the toggle on close.

---

## 10. Research Methodology

All data points sourced from:
- **Government reports**: NITI Aayog, CAG, CEA, Finance Commission, CGWB, CPCB, TRAI, DoT, MeitY, UIDAI, NPCI
- **News organizations**: Business Standard, The Print, Economic Times, NDTV, Scroll.in, Rest of World, Reuters, Bloomberg, Hindustan Times
- **Academic / NGO research**: Down to Earth, IndiaSpend, Global Energy Monitor
- **Industry data**: APSEZ annual reports, RBI bulletins, CMIE

### Key Research Frameworks
- **Pass-Through Analysis** — separating Gujarat's own output from transit cargo statistics.
- **Base-Load vs. Installed Capacity** — exposing the gap between RE capacity numbers and actual thermal dependency.
- **Single-Point-of-Failure Mapping** — identifying supply chains where disruption equals systemic collapse.
- **Central Dependency Accounting** — tracking actual own-revenue generation vs. central transfers.

The full quantitative methodology behind the Break Simulator (lever weights, district ripple math, GDP/jobs scaling, time-to-failure) is documented at `/methodology` §8.

---

## 11. Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint check
npm run lint
```

See `CONTRIBUTING.md` for how to add a new pillar or component.
