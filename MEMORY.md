# Project Memory: Alphono 34

## Core Architecture
- React + Vite + Tailwind v4 + React Router
- Dark/Light mode supported natively across components

## Pages & Routes (8 Pillars)
- `/` -> `Home.jsx` (Redesigned with abstract, findings table, and dependency radar chart)
- `/summary` -> `Summary.jsx` (Executive summary synthesis)
- `/infrastructure` -> `Infrastructure.jsx` (Logistics, Ports, Submarine Cables)
- `/energy` -> `Energy.jsx` (Coal, LNG, Nucler missing baseload)
- `/water` -> `Water.jsx` (Sardar Sarovar Dam, industrial water demands)
- `/labor` -> `Labor.jsx` (Migrant exodus, Morbi ceramics, Surat diamond crisis)
- `/economics` -> `Economics.jsx` (GIFT City, FDI/Remittances vs tax collection)
- `/materials` -> `Materials.jsx` (Crude dependency, China pharma APIs)
- `/education` -> `Education.jsx` (Brain drain, higher ed, healthcare deficits)
- `/environment` -> `Environment.jsx` (Pollution clusters like Vapi, coastal erosion)

## Reusable Components
- `PillarChart.jsx` -> Recharts wrapper (Bar and Pie charts) customized for dark-mode.
- `ComparisonTable.jsx` -> Table to compare state-vs-state statistics.
- `CounterArgument.jsx` -> "What Supporters Say" vs "The Data Shows" block.
- `Timeline.jsx` -> Framer Motion powered timeline used in `Labor.jsx`.
- `SupplyChainMap.jsx` -> SVG interactive component tracing inputs to Gujarat.
- `SearchBar.jsx` -> Global modal linked to `src/data/searchIndex.js`.

## Data Strategy
- Research sources are listed at the bottom of each pillar page (`SourceList` component).
- `searchIndex.js` acts as a static searchable database for the global search bar.

## Final Checks Completed
- Tooltip visibility fixed across dark/light mode for `PillarChart.jsx` and `Home.jsx`.
- `App.css` cleaned up.
- `index.html` title aligned to branding.
- Component paths properly registered in `App.jsx`.
