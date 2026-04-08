# Project Alphono 34: Anatomy of a Dependent State

<div align="center">
  <img src="src/assets/hero.png" alt="Project Alphono 34 Banner" width="100%" />
</div>

<br/>

> **"The prosperity of a state measured only by its throughput — while blind to its input origins — is an accounting illusion, not economic strength."**

---

## 1. Executive Summary

Project Alphono 34 is a large-scale, source-cited React application that functions as an interactive critical dependency analysis of Gujarat. Unlike standard economic portals that celebrate output metrics, this project systematically dissects the **structural vulnerabilities, external supply chain dependencies, and single points of failure** underpinning one of India's most industrialized states.

The project analyzes 9 structural pillars across 16 routes, backed by **100+ cited sources** from CAG reports, NITI Aayog data, news organizations (Business Standard, The Print, Economic Times), CPCB assessments, and academic research. Every claim carries an inline citation linked to a verifiable URL.

**Core thesis**: Gujarat's economic engine is built on supply chains that originate far beyond its borders — from imported Indonesian coal powering coastal mega-plants, to Chinese APIs sustaining its pharma sector, to migrant workers from Bihar and Odisha running its factories, to a single dam supplying water to 3 crore people.

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
- **No state management library** — Global dark mode via props from App.jsx; page-level state is self-contained
- **Tailwind v4** — Uses `@theme` block in `index.css` (no `tailwind.config.js`)
- **Dark mode detection** — `useSyncExternalStore` with MutationObserver (React 19 pattern, not useState+useEffect)
- **All data hardcoded** — No API calls; data is embedded in page components and `src/data/` files

---

## 3. Project Architecture

```text
Project-Alphono_34/
|-- index.html                     # Root HTML template
|-- package.json                   # Dependencies & scripts
|-- vite.config.js                 # Vite + Tailwind + React config
|-- eslint.config.js               # ESLint rules
|
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|   |-- geo/                       # Local GeoJSON files (Gujarat, India, countries)
|
|-- src/
    |-- main.jsx                   # ReactDOM entry point
    |-- App.jsx                    # Router (16 routes), scroll bar, theme provider
    |-- App.css                    # Utility overrides
    |-- index.css                  # Tailwind v4 @theme, CSS variables, custom scrollbars
    |
    |-- assets/
    |   |-- hero.png               # Landing banner
    |
    |-- components/
    |   |-- Navbar.jsx             # Fixed nav, dark mode toggle, back button
    |   |-- Shared.jsx             # Section, DataCard, Ref, SourceList, StatBox, PendingDataBox
    |   |-- PillarChart.jsx        # Recharts wrapper (bar/pie) with dark mode
    |   |-- ComparisonTable.jsx    # State-vs-state comparison with Gujarat highlight
    |   |-- CounterArgument.jsx    # Two-column narrative vs. data rebuttal
    |   |-- Timeline.jsx           # Vertical chronological event display
    |   |-- SupplyChainMap.jsx     # SVG world map with animated dependency flows
    |   |-- SearchBar.jsx          # Ctrl+K floating search modal
    |   |-- Footer.jsx             # Navigation footer
    |
    |-- data/
    |   |-- searchIndex.js         # 75 searchable claims across 9 pillars
    |   |-- districtsData.js       # 33 district profiles (7 deep + 25 placeholder)
    |
    |-- pages/
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
        |-- Summary.jsx            # Executive synthesis across all pillars
        |-- Timeline.jsx           # Chronological crisis timeline (2016-2026)
        |-- DistrictMap.jsx        # Interactive Gujarat map (33 districts)
        |-- DistrictAnalysis.jsx   # Individual district deep-dive (route param)
        |-- Methodology.jsx        # Research methodology explanation
        |-- Sources.jsx            # Master source reference page
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
  → Section blocks with DataCards
    → PillarChart visualizations
      → ComparisonTable (state vs. state)
        → CounterArgument (narrative vs. data)
          → SourceList (cited URLs at bottom)
```

---

## 5. Research Pillars (9 Sectors)

| # | Pillar | Route | Key Metric | Charts | Sources |
|---|--------|-------|-----------|--------|---------|
| I | Infrastructure & Logistics | `/infrastructure` | 500.8 MMT (APSEZ FY26) | 2 bar charts, 1 comparison table | 19 |
| II | Energy Grid & Power | `/energy` | 550+ Morbi units shut | 3 charts (RE paradox, LNG, capacity) | 18 |
| III | Water Security | `/water` | 132% Mehsana extraction | 2 charts (allocation, aquifer) | 14 |
| IV | Migrant Labor Ecosystem | `/labor` | 5-6L workers fled (2026) | 1 pie chart, 1 timeline | 17 |
| V | Governance & Fiscal | `/economics` | 4.9% OTR / Rs 11,929 Cr CAG flag | 3 charts (OTR, revenue, MoU) | 20 |
| VI | Industrial Raw Materials | `/materials` | 36% crude from Russia | 2 charts (crude sources, APIs) | 16 |
| VII | Education & Healthcare | `/education` | 2.4L dropouts (#1 India) | **0 charts** (upgrade pending) | 14 |
| VIII | Environment & Climate | `/environment` | Sabarmati "cesspool" ruling | **0 charts** (upgrade pending) | 14 |
| IX | Migrant Discrimination | `/migrant-discrimination` | 20K+ workers attacked (2018) | Multiple sections | 33 |

**Total cited sources**: 100+ across all pillars

---

## 6. Additional Features

### Interactive District Map (`/map` → `/district/:id`)
- Geographic exploration of Gujarat's 33 districts
- 7 deeply researched profiles: Morbi, Surat, Kutch, Jamnagar, Mehsana, Bharuch, Ahmedabad
- Each profile includes: key stats, crisis timeline, dependency summary, pillar tags
- 25 additional districts in placeholder state (expansion planned)

### Crisis Timeline (`/timeline`)
- Chronological mapping of systemic failures from 2016 demonetization through 2026 twin-crisis

### Global Search (Ctrl+K)
- 75 indexed claims across 9 pillars with keyword matching
- Instant navigation to relevant pillar page

---

## 7. Research Methodology

All data points sourced from:
- **Government reports**: NITI Aayog, CAG, CEA, Finance Commission, CGWB, CPCB
- **News organizations**: Business Standard, The Print, Economic Times, NDTV, Scroll.in
- **Academic/NGO research**: Down to Earth, IndiaSpend, Global Energy Monitor
- **Industry data**: APSEZ annual reports, RBI bulletins, CMIE

### Key Research Frameworks
- **Pass-Through Analysis**: Separating Gujarat's own output from transit cargo statistics
- **Base-Load vs. Installed Capacity**: Exposing the gap between RE capacity numbers and actual thermal dependency
- **Single-Point-of-Failure Mapping**: Identifying supply chains where disruption = systemic collapse
- **Central Dependency Accounting**: Tracking actual own-revenue generation vs. central transfers

---

## 8. Running the Project

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

---

## 9. Completed Upgrades

| Phase | Description | Status |
|-------|------------|--------|
| 1 | Cascade/Sankey diagram — 2026 crisis propagation across pillars | Done |
| 2 | Charts for Education & Environment pages | Done |
| 3 | Time-series charts across all existing pages | Done |
| 4 | 10 new district profiles with researched data | Done |
| 5 | Summary page full rebuild — risk matrix, scenarios | Done |
| 6 | CounterArgument → WhatsApp-style DebateChat (Rajubhai vs Priya) | Done |
