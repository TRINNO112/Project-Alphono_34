# Project Alphono 34: Anatomy of a Dependent State

<div align="center">
  <img src="src/assets/hero.png" alt="Project Alphono 34 Banner" width="100%" />
</div>

<br/>

> **"The prosperity of a state measured only by its throughput — while blind to its input origins — is an accounting illusion, not economic strength."**

---

## 1. Executive Summary

Project Alphono 34 is a large-scale, source-cited React application that functions as an interactive critical dependency analysis of Gujarat. Unlike standard economic portals that celebrate output metrics, this project systematically dissects the **structural vulnerabilities, external supply chain dependencies, and single points of failure** underpinning one of India's most industrialized states.

The project analyzes **13 structural pillars across 20 routes**, backed by **150+ cited sources** from CAG reports, NITI Aayog data, news organizations (Business Standard, The Print, Economic Times, Rest of World, Reuters), CPCB assessments, TRAI filings, DoT QoS reports, and academic research. Every claim carries an inline citation linked to a verifiable URL.

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
- **No state management library** — Dark-mode source-of-truth lifted to `App.jsx` which mutates `document.documentElement.classList`; leaf components (`PillarChart`, `CascadeDiagram`) read the theme via `useSyncExternalStore` + MutationObserver for React 19-correct reactivity.
- **Tailwind v4** — Uses `@theme` block in `index.css` (no `tailwind.config.js`).
- **Route-level code splitting** — Every page is loaded via `React.lazy` + `<Suspense>`; first paint ships only the Home bundle.
- **Error-safe routing** — `<ErrorBoundary>` wraps all routes; invalid paths hit a proper 404 page.
- **All research data hardcoded** — No API calls; data is embedded in page components and `src/data/` files.

---

## 3. Project Architecture

```text
Project-Alphono_34/
|-- index.html                     # Root HTML template
|-- package.json                   # Dependencies & scripts
|-- vite.config.js                 # Vite + Tailwind + React config
|-- eslint.config.js               # ESLint rules
|-- README.md                      # This file
|-- CONTRIBUTING.md                # How to add pillars, code style, citation rules
|-- RESUME.md                      # Session checkpoint (mid-work recovery log)
|
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|   |-- geo/                       # Local GeoJSON (Gujarat, India, 10 supply-chain countries)
|
|-- src/
    |-- main.jsx                   # ReactDOM entry point
    |-- App.jsx                    # Router (20 routes), lazy-loaded, ErrorBoundary-wrapped
    |-- App.css                    # Utility overrides
    |-- index.css                  # Tailwind v4 @theme, CSS vars, scrollbars, .sr-only, reduced-motion
    |
    |-- assets/
    |   |-- hero.png               # Landing banner
    |
    |-- components/                # 15 shared components
    |   |-- Navbar.jsx             # Semantic nav, mobile hamburger, a11y, dark-mode source
    |   |-- Footer.jsx             # Pillar + resource links (contentinfo landmark)
    |   |-- Shared.jsx             # Section, DataCard, Ref, SourceList, StatBox, PendingDataBox
    |   |-- SEO.jsx                # react-helmet-async wrapper
    |   |-- PillarChart.jsx        # Recharts wrapper (bar/pie), memoized, a11y-tagged
    |   |-- ComparisonTable.jsx    # State-vs-state table, sticky header, scoped th, memoized
    |   |-- CounterArgument.jsx    # Debate chat (Rajubhai vs Priya), a11y-friendly
    |   |-- Timeline.jsx           # Vertical chronological events
    |   |-- SupplyChainMap.jsx     # SVG world map with animated dependency flows
    |   |-- CascadeDiagram.jsx     # 2026 crisis propagation (custom SVG Sankey)
    |   |-- SearchBar.jsx          # Ctrl+K floating search modal (aria-live results)
    |   |-- ScrollSpy.jsx          # Sidebar section tracker for long pages
    |   |-- Skeleton.jsx           # Loading placeholder (shimmer)
    |   |-- AnimatedCounter.jsx    # In-view number counter
    |   |-- ErrorBoundary.jsx      # Catches render errors, themed fallback
    |
    |-- data/
    |   |-- searchIndex.js         # ~85 searchable claims across 13 pillars
    |   |-- districtsData.js       # 33 district profiles (7 deep + 26 placeholder)
    |
    |-- pages/                     # 21 routed pages
        |-- Home.jsx               # Landing: hero, abstract, ToC, radar, supply chain map, pillars
        |-- Infrastructure.jsx     # Pillar I: Ports, bridges, DFC, digital gap
        |-- Energy.jsx             # Pillar II: Coal, LNG, renewables, grid collapse
        |-- Water.jsx              # Pillar III: Narmada, groundwater, SAUNI, fluoride
        |-- Labor.jsx              # Pillar IV: Migrant exodus, diamond crisis, Morbi
        |-- Economics.jsx          # Pillar V: CAG audit, OTR, GIFT City, FDI
        |-- Materials.jsx          # Pillar VI: Russian crude, Chinese APIs, potash
        |-- Education.jsx          # Pillar VII: Dropouts, GER collapse, healthcare
        |-- Environment.jsx        # Pillar VIII: Pollution, Alang, mangroves, erosion
        |-- MigrantDiscrimination.jsx  # Pillar IX: 2018 pogrom, labor rights, ESI gaps
        |-- Agriculture.jsx        # Pillar X: Cotton, BT, groundwater, MSP gap
        |-- GreenTech.jsx          # Pillar XI: Solar imports, EV battery, hydrogen
        |-- ChemicalGovernance.jsx # Pillar XII: Chemical clusters, compliance audit
        |-- DigitalSovereignty.jsx # Pillar XIII: Submarine cables, cloud, UPI/Aadhaar deps
        |-- Summary.jsx            # Executive synthesis, risk matrix, scenarios
        |-- Timeline.jsx           # Chronological crisis timeline (2016-2026)
        |-- DistrictMap.jsx        # Interactive Gujarat map (33 districts)
        |-- DistrictAnalysis.jsx   # Individual district deep-dive (route param)
        |-- Methodology.jsx        # Research methodology explanation
        |-- Sources.jsx            # Master source reference page
        |-- NotFound.jsx           # 404 catch-all
```

---

## 4. Design System

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
          -> SourceList (cited URLs at bottom)
```

---

## 5. Research Pillars (13 Sectors)

| # | Pillar | Route | Key Metric | Sources |
|---|--------|-------|-----------|---------|
| I | Infrastructure & Logistics | `/infrastructure` | 500.8 MMT (APSEZ FY26) | 19 |
| II | Energy Grid & Power | `/energy` | 550+ Morbi units shut | 18 |
| III | Water Security | `/water` | 132% Mehsana extraction | 14 |
| IV | Migrant Labor Ecosystem | `/labor` | 5-6L workers fled (2026) | 17 |
| V | Governance & Fiscal | `/economics` | 4.9% OTR / Rs 11,929 Cr CAG flag | 20 |
| VI | Industrial Raw Materials | `/materials` | 36% crude from Russia | 16 |
| VII | Education & Healthcare | `/education` | 2.4L dropouts (#1 India) | 14 |
| VIII | Environment & Climate | `/environment` | Sabarmati "cesspool" ruling | 14 |
| IX | Migrant Discrimination | `/migrant-discrimination` | 20K+ workers attacked (2018) | 33 |
| X | Agriculture | `/agriculture` | BT cotton collapse, MSP gap | 14 |
| XI | Green Tech & Transition | `/greentech` | Chinese solar cell dependency | 13 |
| XII | Chemical Governance | `/chemical-governance` | Vapi/Ankleshwar compliance gaps | 15 |
| XIII | Digital Sovereignty | `/digital-sovereignty` | 0 submarine cable landings | 13 |

---

## 6. Additional Features

### Interactive District Map (`/map` -> `/district/:id`)
- Geographic exploration of Gujarat's 33 districts
- 7 deeply researched profiles: Morbi, Surat, Kutch, Jamnagar, Mehsana, Bharuch, Ahmedabad
- Each profile includes: key stats, crisis timeline, dependency summary, pillar tags
- 26 additional districts in placeholder state (expansion planned)

### Crisis Timeline (`/timeline`)
- Chronological mapping of systemic failures from 2016 demonetization through 2026 twin-crisis

### Global Search (Ctrl+K / Cmd+K)
- ~85 indexed claims across 13 pillars with keyword matching
- Results grouped by pillar, aria-live announced to screen readers
- Instant navigation to relevant pillar page

---

## 7. Accessibility

The application targets WCAG 2.1 AA:

- Semantic landmarks: `<header role="banner">`, `<nav aria-label="Primary">`, `<main id="main">`, `<footer role="contentinfo">`.
- Skip-to-content link as the first focusable element.
- `aria-current="page"` on active nav links; `aria-pressed` on the theme toggle.
- Mobile hamburger menu exposes all 13 pillar routes + resource pages below the `md:` breakpoint (previously nav was hidden on mobile).
- All icon-only buttons have descriptive `aria-label`s.
- Charts (`PillarChart`), the supply-chain map, and the cascade diagram are wrapped in `<figure role="img">` with text `<figcaption>` fallbacks for screen readers.
- Tables have `<caption>` and `scope="col"` on headers.
- `@media (prefers-reduced-motion: reduce)` disables non-essential animations.

## 8. Mobile

- Responsive from 320 px up.
- Below `md:` (768 px), the Navbar collapses to a hamburger that slides down a full-height sheet containing the primary nav + every pillar + resources. The sheet closes on route change, Esc, or backdrop click, and returns focus to the toggle on close.

---

## 9. Research Methodology

All data points sourced from:
- **Government reports**: NITI Aayog, CAG, CEA, Finance Commission, CGWB, CPCB, TRAI, DoT, MeitY, UIDAI, NPCI
- **News organizations**: Business Standard, The Print, Economic Times, NDTV, Scroll.in, Rest of World, Reuters, Bloomberg, Hindustan Times
- **Academic/NGO research**: Down to Earth, IndiaSpend, Global Energy Monitor
- **Industry data**: APSEZ annual reports, RBI bulletins, CMIE

### Key Research Frameworks
- **Pass-Through Analysis**: Separating Gujarat's own output from transit cargo statistics
- **Base-Load vs. Installed Capacity**: Exposing the gap between RE capacity numbers and actual thermal dependency
- **Single-Point-of-Failure Mapping**: Identifying supply chains where disruption = systemic collapse
- **Central Dependency Accounting**: Tracking actual own-revenue generation vs. central transfers

---

## 10. Running the Project

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
