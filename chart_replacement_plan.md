# Chart Replacement Plan — Project Alphono 34

> **Status:** Draft for review
> **Author:** Claude (research + spec)
> **Date:** 2026-05-01
> **Scope:** Replace the 34 generic vertical bar charts across the 13 pillar pages with a richer vocabulary of visual encodings, each chosen to match the narrative shape of its data.

---

## 1. Executive Summary

Today, **every quantitative claim in the research paper looks identical**. We have 34 separate `<PillarChart type="bar">` instances spread across 13 pillar pages, and they all render as the same vertical bar chart in the same Recharts wrapper, in the same color family, at roughly the same height. A reader scrolling from Agriculture to Water to DigitalSovereignty sees thirty-four near-clones.

This is a problem for three reasons:

1. **Reader fatigue.** Identical visual treatment numbs the eye. After the third bar chart, the reader stops *seeing* the data and starts skimming captions.
2. **Lost signal.** A bar chart is a generalist tool. It's serviceable for everything and excellent for nothing. A "share-of-100%" chart, a "before/after" chart, and a "is this past a danger threshold" chart all *feel* the same when they are very different stories.
3. **Undersold rhetoric.** This is a polemical research paper. Charts are not just decoration — they are the visual bullet points of the argument. A waffle chart that shows "92 of 100 NdFeB magnets come from China" lands harder than another bar saying 92.

The fix is not to swap one default for another. The fix is **a small library of purpose-fit charts** (8 components) and a deliberate per-chart choice of which one to use. This document specifies that library and the migration plan.

**Headline numbers**

- 34 charts inventoried across 13 pillar pages
- 8 new chart components proposed
- 4 phases over 2 weeks of staggered work
- ~14 charts migrated in Phase B (high-impact pillars)
- ~20 charts migrated in Phase C (remainder)

---

## 2. Inventory

The 34 bar charts, grouped by pillar. **Data shape** is a short label classifying the underlying narrative pattern. **Recommended** is the proposed replacement — see Section 3 for the menu.

| # | Pillar | File | Title (truncated) | Data shape | Recommended |
|---|---|---|---|---|---|
| 1 | Agriculture | `src/pages/Agriculture.jsx:67` | DAP Import Sources by Country | share-of-100% (6 countries) | **Treemap** |
| 2 | Agriculture | `src/pages/Agriculture.jsx:188` | Groundwater Extraction vs Recharge | threshold breach (4 districts vs safe line) | **Threshold gauge** (or lollipop+threshold line) |
| 3 | Agriculture | `src/pages/Agriculture.jsx:237` | Narmada Allocation: Intended vs Actual | budget-eaten (5 segments) | **Stacked progress** |
| 4 | ChemicalGovernance | `src/pages/ChemicalGovernance.jsx:169` | CETP Inlet vs Outlet Toxicity | two-way comparison (3 cluster pairs) | **Dot plot (Cleveland)** |
| 5 | ChemicalGovernance | `src/pages/ChemicalGovernance.jsx:265` | NGT Fines Over Time | time series (6 periods) | **Lollipop** (or ranked bars; values are not strictly monotonic) |
| 6 | DigitalSovereignty | `src/pages/DigitalSovereignty.jsx:77` | Submarine Cable Landings by State | ranked comparison w/ zero (5 states, Gujarat = 0) | **Lollipop** (zero-as-absence reads cleanly) |
| 7 | DigitalSovereignty | `src/pages/DigitalSovereignty.jsx:159` | Round-Trip Latency to Singapore | ranked comparison (5 origins, ms) | **Horizontal ranked bars w/ annotation** |
| 8 | Economics | `src/pages/Economics.jsx:104` | Own Tax Revenue % of GSDP (Decline) | time series (6 years, monotonic-ish decline) | **Slope chart** (start vs end) or lollipop |
| 9 | Economics | `src/pages/Economics.jsx:142` | Revenue Receipts %GSDP (states) | ranked comparison (4 states) | **Lollipop** |
| 10 | Economics | `src/pages/Economics.jsx:156` | Central Grants %GSDP Trajectory | time series (5 years, monotonic decline) | **Slope chart** (FY21 vs FY25) |
| 11 | Economics | `src/pages/Economics.jsx:171` | Debt-to-GSDP Trajectory | time series (7 years) | Keep as time-series **lollipop**, OR Recharts LineChart (this is one of few cases where a real line is better) |
| 12 | Education | `src/pages/Education.jsx:74` | Higher Education GER (states) | ranked comparison (8 states) | **Horizontal ranked bars w/ annotation** |
| 13 | Education | `src/pages/Education.jsx:93` | School Dropouts (states) | ranked comparison (6 states) | **Lollipop** |
| 14 | Education | `src/pages/Education.jsx:173` | Specialist Doctor Vacancies % | share-of-100% per role (4 roles) | **Waffle chart** (one waffle per role, small-multiple) — or single dependency dial summarising "average 91% vacant" |
| 15 | Education | `src/pages/Education.jsx:188` | Health Expenditure %GSDP w/ NHP target | threshold breach (6 states + target) | **Lollipop with target line** |
| 16 | Education | `src/pages/Education.jsx:306` | Education Spending %GSDP w/ NEP target | threshold breach (6 states + target) | **Lollipop with target line** |
| 17 | Energy | `src/pages/Energy.jsx:166` | Energy Mix: Imported Coal vs RE Capacity vs RE Actual | three-way "claimed vs reality" | **Stacked progress** (or grouped bullet) |
| 18 | Environment | `src/pages/Environment.jsx:75` | CEPI Scores w/ Critical Threshold (70) | threshold breach (6 clusters) | **Lollipop with threshold line** |
| 19 | Environment | `src/pages/Environment.jsx:130` | Morbi SO2 Emissions Time-Series | time series (5 years, monotonic up) | **Slope chart** (2009 vs 2016) — or lollipop |
| 20 | Environment | `src/pages/Environment.jsx:187` | Coastline Erosion by State | ranked comparison (7 states, Gujarat #1) | **Lollipop** |
| 21 | Environment | `src/pages/Environment.jsx:238` | Per Capita CO2 (states) | ranked comparison (7 states + national avg) | **Horizontal ranked bars w/ annotation** |
| 22 | Environment | `src/pages/Environment.jsx:267` | PM2.5 by City + WHO Limit | threshold breach (7 cities + WHO line) | **Lollipop with threshold line** |
| 23 | GreenTech | `src/pages/GreenTech.jsx:138` | China's Share of Green Tech Supply Chain | share-of-100% per stage (6 stages) | **Waffle small-multiples** (one 10×10 per stage) — visually pulverising |
| 24 | Labor | `src/pages/Labor.jsx:184` | Migrant Worker Exodus by Crisis (lakhs) | event-by-event comparison (4 events) | **Lollipop** (event labels are long-ish; vertical bars rotate them) |
| 25 | Labor | `src/pages/Labor.jsx:252` | Daily Wages by State | ranked comparison (5 states) | **Dot plot** with band (Gujarat as a callout) |
| 26 | Infrastructure | `src/pages/Infrastructure.jsx:99` | Mundra Port Cargo (FY21–FY25) | time series (5 years, monotonic up) | **Slope chart** OR keep as bars (only chart on this page that's a clean time-series) |
| 27 | Infrastructure | `src/pages/Infrastructure.jsx:251` | Gujarat Port Cargo Distribution | share-of-total (6 ports) | **Treemap** |
| 28 | Materials | `src/pages/Materials.jsx:116` | Russia Crude Share Time-Series | time series (6 years, dramatic jump) | **Slope chart** (FY21 → FY26) — the *jump* is the story |
| 29 | Materials | `src/pages/Materials.jsx:164` | Critical Drug API Dependency | share-near-100% (4 drugs all 91–100%) | **Waffle small-multiples** (the "almost all red" effect lands hard) |
| 30 | Materials | `src/pages/Materials.jsx:178` | API Imports Time-Series ($B) | time series (6 years) | **Slope chart** (FY20 → FY25) |
| 31 | MigrantDiscrimination | `src/pages/MigrantDiscrimination.jsx:378` | Daily Wages by State | ranked comparison (6 states, Gujarat highlight) | **Dot plot** (Gujarat callout) |
| 32 | Water | `src/pages/Water.jsx:148` | North Gujarat Aquifer Balance | budget-eaten (3 segments) | **Stacked progress** (recharge bar with withdrawal eating it) |
| 33 | Water | `src/pages/Water.jsx:161` | District Groundwater Extraction (5 districts + safe limit) | threshold breach | **Lollipop with threshold line** |
| 34 | Water | `src/pages/Water.jsx:262` | SAUNI Budget vs Actual | budget-eaten / cost-overrun (5 phases) | **Stacked progress** OR slope chart (original vs revised) |

**Shape distribution (helps plan component build order):**

- Ranked comparison: 9 charts → **Lollipop / Horizontal ranked bars / Dot plot**
- Time series: 8 charts → **Slope chart / Lollipop**
- Threshold breach (value vs safe line): 7 charts → **Lollipop with threshold line / Threshold gauge**
- Share-of-100% (composition): 5 charts → **Treemap / Waffle**
- Two-way / before-after / paired: 3 charts → **Dot plot / Slope chart**
- Budget-eaten / cost-overrun: 3 charts → **Stacked progress**

The dominant unmet needs are **lollipop** (covers the largest set), **slope** (covers all simple time-series), **threshold-aware lollipop variant**, and **waffle**.

---

## 3. Visualization Menu

Each entry: when to use, sketch, props sketch, library/approach, tradeoffs.

### 3.1 Lollipop chart

**Use when:** 5–10 ranked categories, label readability matters, you want to emphasize the *value point* rather than bar mass.

```
Mehsana       ●─────────────────── 132
Banaskantha   ●──────────────── 118
Patan         ●─────────────── 105
Sabarkantha   ●──────────── 95
Safe Limit    ●────── 70
              0       50      100    150
```

- **Props sketch:** `{ data: [{name, value}], domain?, accentColor?, valueSuffix?, thresholdLine?: {value, label, color}, sortDescending? }`
- **Implementation:** Pure SVG (≤120 LOC). Framer Motion for the line-stretch entry animation.
- **Tradeoffs:** Less visual weight than bars — that's the point — but a tabloid reader scanning fast might glance over a thin line. Mitigate with a generous dot radius (8–10px) and a clear value label at the dot.

### 3.2 Dot plot (Cleveland-style)

**Use when:** comparing **two values** across the same N categories — Inlet vs Outlet, Migrant vs Local wages, Before vs After.

```
Vapi           In ● ────────── ● Out     85 → 72
Ankleshwar     In ● ── ● Out             90 → 88
Bharuch        In ●       ● Out          78 → 82  (worse)
```

- **Props sketch:** `{ data: [{name, a, b}], aLabel, bLabel, aColor?, bColor?, valueSuffix? }`
- **Implementation:** Pure SVG. Each row = a horizontal track with two dots and a connector line; color the connector by direction of change (green = improved, red = worsened) or by exceeding threshold.
- **Tradeoffs:** Reader has to internalize the legend. Solve with persistent in-row labels ("In/Out") next to dots rather than only a top legend.

### 3.3 Slope chart

**Use when:** time-series with a strong start-to-end story (especially monotonic or near-monotonic), and the *change* is what matters more than the path.

```
FY21  ●                             ● FY26
       \                           /
        \                         /
         \─────────────────────●─
        2%                        36%
        Russia share of crude imports
```

- **Props sketch:** `{ start: {label, value}, end: {label, value}, midpoints?: [{label, value}], unit, accentColor? }`
- **Implementation:** Pure SVG. Slope line + endpoint dots + value labels at endpoints. Optional faint dots for in-between years.
- **Tradeoffs:** Hides intermediate volatility. For Debt-to-GSDP (#11) where the path bumps up before declining, a slope chart actively misleads — keep that one as a true line chart or lollipop time series.

### 3.4 Waffle chart (10×10)

**Use when:** the story is "X out of 100." Maximum visual impact for share-of-whole. Especially good when X is large (≥70%) and the rhetorical message is "almost everything."

```
■■■■■■■■■■  ←  92% Chinese
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■■■■■■■■■
■■▢▢▢▢▢▢▢▢
NdFeB Magnets — China share
```

- **Props sketch:** `{ value: number /* 0–100 */, label, sublabel?, fillColor?, emptyColor?, columns?: 10, animate?: boolean }`
- **Implementation:** Pure SVG or pure CSS grid (100 divs). CSS grid is simpler and inherits dark-mode trivially. Framer Motion `staggerChildren` for fill-in entry animation.
- **Small-multiples wrapper:** `<WaffleGrid items={[{label, value}, ...]} />` for cases like the GreenTech supply chain (6 stages × 10×10) — the visual carpet of red across all six is the rhetoric.
- **Tradeoffs:** 100 squares on mobile <360px are cramped. Plan: 5×20 layout below `sm` breakpoint (CSS grid responsive variant).

### 3.5 Treemap

**Use when:** share-of-whole with **>4 categories** and dominance matters. Treemap turns "Mundra is the biggest port" into a single rectangle that physically dwarfs the others.

```
┌────────────────────────┬───────────────┐
│                        │               │
│        Mundra          │   Kandla      │
│        200             │   160         │
│                        ├───────┬───────┤
│                        │ Hazira│ Dahej │
├────────────────────────┴───────┴───────┤
│   Others (43 ports)         121.27     │
└────────────────────────────────────────┘
```

- **Props sketch:** `{ data: [{name, value, color?}], unit?, valueFormatter?: fn, showLabels?: boolean }`
- **Implementation:** Recharts `<Treemap>` (already in dep tree). Custom `<TreemapItem>` for label readability and dark-mode.
- **Tradeoffs:** Labels on small rectangles are unreadable. Solution: drop labels under a min-area threshold and render an external legend; or aggregate into "Others." Recharts default treemap label rendering is mediocre — plan to use `content` prop with a custom React component.

### 3.6 Threshold gauge / bullet chart

**Use when:** **single value** (or 2–3) compared to a safe limit, target, or danger zone. The chart's job is to encode "we are *past the line*."

```
                      ▲ safe   ▲ critical
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░██████
   0                70 ←safe   100   132 ← Mehsana
```

- **Props sketch:** `{ value, safe, danger, max, unit, label, comparisonLabel? }`
- **Implementation:** Pure SVG. Horizontal track with green/yellow/red zones; pointer + value label.
- **Tradeoffs:** Single-value gauges are awkward when you want to compare 5 districts. For multi-value cases (groundwater extraction across 5 districts vs the same safe line), prefer **lollipop with threshold line** (3.1 with `thresholdLine` prop). Keep the gauge for *single* hero stats — e.g., a Home page stat block.

### 3.7 Horizontal ranked bars (with annotation)

**Use when:** ranked comparison with **long category names** (e.g., "GIFT City (via Mumbai)") that would force vertical bars to rotate labels 45° and become unreadable. Also when there are >6 categories.

```
Tamil Nadu          ████████████████████ 46.9
Kerala              ██████████████████   43.1
Karnataka           ██████████████       32.8
Maharashtra         █████████████        32.5
National Avg        ███████████          28.4
Gujarat             ████████             20.1   ← we are here
Rajasthan           ███████              18.3
Bihar               █████                14.8
```

- **Props sketch:** `{ data: [{name, value, highlight?: boolean}], unit?, accentColor?, highlightColor?, annotations?: [{name, text}] }`
- **Implementation:** Recharts `<BarChart layout="vertical">` OR pure SVG. Pure SVG is preferable for tighter control over annotation positioning ("← we are here" callouts).
- **Tradeoffs:** This is still "a bar chart." Use sparingly — only when a lollipop would look anemic (too many tiny dots) AND labels are long. Default to lollipop otherwise.

### 3.8 Stacked horizontal progress

**Use when:** a budget, allocation, or quota is being **eaten** by competing claimants. The visual is a single horizontal bar segmented by claimant.

```
Narmada Water Allocation (intended 75% agri, actual:)
[ Agri 35% │ Industry 40% │ Urban 18% │ Loss 7% ]
            ↑ intended cutoff was 75%
```

- **Props sketch:** `{ segments: [{label, value, color}], total?, unit?, intendedMarker?: {value, label} }`
- **Implementation:** Pure SVG or flexbox with percentage widths. Framer Motion width-grow entry animation.
- **Tradeoffs:** Reader needs to compute differences ("agri lost 40 percentage points") rather than seeing them. Add an explicit "intended vs actual" marker on the track.

### 3.9 Dependency dial / radial gauge *(stretch goal)*

**Use when:** a single hero "% imported" or "% dependent" stat, often on Home or pillar landings.

```
        ╭────────╮
       ╱   92%   ╲
      │  CHINA   │
       ╲ NdFeB  ╱
        ╰────────╯
```

- **Props sketch:** `{ value, max=100, label, sublabel?, dangerThreshold?: number }`
- **Implementation:** Pure SVG arc + center label.
- **Tradeoffs:** Arguably gimmicky. Defer until Phase D and only ship if user wants it. Most "single % dependent" stats are already handled by `<StatBox>`.

---

## 4. Per-Chart Decision Matrix

For each chart, the recommended replacement plus a one-line justification.

| # | Chart | Replacement | Why |
|---|---|---|---|
| 1 | Agri DAP imports | Treemap | Country shares + a "China + Russia + Saudi" rectangle group reads "geopolitical concentration" instantly. |
| 2 | Agri groundwater | Lollipop + threshold line | 4 districts vs a safe limit — the threshold line is the rhetoric. |
| 3 | Agri Narmada allocation | Stacked progress | "Intended 75% agri, actual 35%" is a budget being eaten. |
| 4 | Chem CETP toxicity | Dot plot | Three Inlet/Outlet pairs — paired comparison is the entire story (treatment is failing). |
| 5 | Chem NGT fines | Lollipop | Time series is non-monotonic; lollipop reads ordered without implying continuity. |
| 6 | Digital cable landings | Lollipop | The "Gujarat = 0" lollipop with no dot at all (or a hollow dot) makes the absence visceral. |
| 7 | Digital latency | Horizontal ranked bars | Long labels ("GIFT City (via MH)") and 5 origins — labels need horizontal room. |
| 8 | Econ tax revenue decline | Slope chart | 7.44% → 4.9% over 15 years — the slope is the headline. |
| 9 | Econ revenue receipts (states) | Lollipop | 4 categories ranked; lollipop is cleaner than bars at this count. |
| 10 | Econ central grants | Slope chart | Monotonic crash from 1.68% to 0.53%. |
| 11 | Econ debt-to-GSDP | Recharts LineChart (true time series) | The path bumps up, then down — slope chart would mislead. |
| 12 | Edu GER (states) | Horizontal ranked bars | 8 states with state names — vertical labels rotate badly. |
| 13 | Edu dropouts | Lollipop | 6 states; Gujarat highlighted in red. |
| 14 | Edu doctor vacancies | Waffle small-multiples | Four roles, all 86–97% — the four red waffles side-by-side say it all. |
| 15 | Edu health spending vs NHP | Lollipop + threshold line | Threshold (NHP target 2.5%) is the spine of the chart. |
| 16 | Edu education spending vs NEP | Lollipop + threshold line | Same pattern — NEP target 6%. |
| 17 | Energy mix: claimed vs real | Stacked progress | "We installed 42 GW but actually generate 9 GW" is a budget-eaten story. |
| 18 | Env CEPI scores | Lollipop + threshold line | Critical threshold = 70; six clusters all over it. |
| 19 | Env Morbi SO2 | Slope chart | 100 → 300 kt/year monotonic. |
| 20 | Env coastline erosion | Lollipop | Gujarat #1 by margin; lollipop highlights the gap. |
| 21 | Env per capita CO2 | Horizontal ranked bars | 7 categories with state names. |
| 22 | Env PM2.5 | Lollipop + threshold line | WHO limit (15 µg/m³) is the moral spine. |
| 23 | GreenTech China share | Waffle small-multiples | Six 10×10 grids each ~80% red is the most powerful visual rhetoric available. |
| 24 | Labor migrant exodus | Lollipop | Event labels ("2026 Twin Crisis") are long; values are 4 ranked points. |
| 25 | Labor wages (states) | Dot plot | Single dot per state with Gujarat callout, on a wage spectrum band. |
| 26 | Infra Mundra cargo | Slope chart OR lollipop | Monotonic 5-year growth. Slope tells the headline. |
| 27 | Infra port distribution | Treemap | Mundra (200) physically dwarfing 43 small ports is the dependency story. |
| 28 | Materials Russia crude | Slope chart | The 2% → 36% jump is the *defining* visual of the Materials pillar. |
| 29 | Materials drug APIs | Waffle small-multiples | All four near 100% — the red carpet effect. |
| 30 | Materials API imports $B | Slope chart | Monotonic growth $2.4B → $3.6B. |
| 31 | Migrant wages by state | Dot plot | Same shape as #25; Gujarat callout. |
| 32 | Water aquifer balance | Stacked progress | Recharge eaten by withdrawal; tiny "remaining buffer" segment is the message. |
| 33 | Water district extraction | Lollipop + threshold line | Same pattern as Agri groundwater. |
| 34 | Water SAUNI budget overrun | Stacked progress OR slope chart | Original ₹11K Cr → revised ₹18.5K Cr — slope chart is cleaner. |

**Component usage tally** (i.e., how many times each new component will be instantiated):

- Lollipop (with optional `thresholdLine`): **15 charts** (#2, 5, 6, 9, 13, 15, 16, 18, 20, 22, 24, 26-alt, 33, plus 2 fallbacks)
- Slope chart: **8 charts** (#8, 10, 19, 26, 28, 30, 34-alt — and Mundra cargo)
- Stacked progress: **5 charts** (#3, 17, 32, 34, plus possible Energy reuse)
- Horizontal ranked bars: **3 charts** (#7, 12, 21)
- Waffle small-multiples: **3 charts** (#14, 23, 29)
- Treemap: **3 charts** (#1, 27, plus possible Materials reuse)
- Dot plot: **3 charts** (#4, 25, 31)
- Threshold gauge (single-value): **0 charts in initial migration** — keep available for Home/StatBox augmentation.
- Recharts LineChart (existing): **1 chart** (#11)

---

## 5. Component Specs

All new components live in `src/components/charts/`. Existing `src/components/PillarChart.jsx` becomes a thin facade that delegates to the right sub-component (see Section 7 — open question on author-explicit vs heuristic dispatch).

### 5.1 File layout

```
src/components/charts/
  LollipopChart.jsx        # rank or threshold; pure SVG
  DotPlot.jsx              # paired comparison; pure SVG
  SlopeChart.jsx           # time-series headline; pure SVG
  Waffle.jsx               # single 10x10 grid; CSS grid
  WaffleGrid.jsx           # small-multiples wrapper around Waffle
  Treemap.jsx              # Recharts wrapper w/ custom tile renderer
  ThresholdGauge.jsx       # single-value w/ safe/danger zones; pure SVG
  StackedProgress.jsx      # budget-eaten; pure SVG
  DependencyDial.jsx       # stretch / Phase D
  index.js                 # barrel export + types JSDoc
  _shared/
    useChartDarkMode.js    # extracted from existing PillarChart pattern
    Figure.jsx             # <figure role="img" aria-label> wrapper
    SrSummary.jsx          # screen-reader-only data summary
```

### 5.2 Prop interfaces

```jsx
// LollipopChart
{
  data: Array<{ name: string, value: number, highlight?: boolean }>,
  domain?: [number, number],            // optional x-axis bounds
  accentColor?: string,                  // default crimson
  valueSuffix?: string,                  // "%", " MMT", "₹ Cr"
  thresholdLine?: { value: number, label: string, color?: string },
  sortDescending?: boolean,              // default true
  // shared
  title: string,
  caption: string,
  height?: number,
}

// DotPlot
{
  data: Array<{ name: string, a: number, b: number }>,
  aLabel: string,
  bLabel: string,
  aColor?: string,
  bColor?: string,
  valueSuffix?: string,
  // direction-of-change colored connector? optional
  badDirection?: 'increase' | 'decrease',
}

// SlopeChart
{
  start: { label: string, value: number },
  end:   { label: string, value: number },
  midpoints?: Array<{ label: string, value: number }>,  // shown faintly
  unit?: string,
  accentColor?: string,
}

// Waffle
{
  value: number,        // 0–100
  label: string,
  sublabel?: string,
  fillColor?: string,
  emptyColor?: string,
  size?: number,        // square px
  animate?: boolean,
}

// WaffleGrid
{
  items: Array<{ label: string, value: number, sublabel?: string }>,
  fillColor?: string,
  emptyColor?: string,
  columns?: number,     // default 3 on desktop, 2 on tablet
}

// Treemap
{
  data: Array<{ name: string, value: number, color?: string }>,
  unit?: string,
  valueFormatter?: (v: number) => string,
  showLabels?: boolean, // default true; auto-hides on tiles smaller than 60×40
}

// ThresholdGauge
{
  value: number,
  safe: number,
  danger: number,
  max: number,
  unit?: string,
  label: string,
  comparisonLabel?: string,
}

// StackedProgress
{
  segments: Array<{ label: string, value: number, color: string }>,
  total?: number,                      // if omitted, sum(segments.value)
  unit?: string,
  intendedMarker?: { value: number, label: string },
}

// DependencyDial (stretch)
{
  value: number,
  max?: number,                        // default 100
  label: string,
  sublabel?: string,
  dangerThreshold?: number,
}
```

### 5.3 Rendering / library

| Component | Implementation | Animation | Notes |
|---|---|---|---|
| LollipopChart | Pure SVG | Framer: line `scaleX` 0→1 then dot fade-in | Dark mode via `useSyncExternalStore` (existing pattern from PillarChart). |
| DotPlot | Pure SVG | Framer: dots scale-in, connector draw | Color connectors by direction-of-change. |
| SlopeChart | Pure SVG | Framer: line draw (`pathLength`) + dot scale | Endpoint labels are the most important elements — large type. |
| Waffle | CSS grid (100 divs) | Framer `staggerChildren` over each cell | 10×10 desktop, 5×20 below `sm`. |
| WaffleGrid | Wraps Waffle in responsive grid | Inherits | Caption rendered once for the whole group. |
| Treemap | Recharts `<Treemap>` + custom `content` | Recharts default | Custom tile component handles dark-mode + label hide-below-threshold. |
| ThresholdGauge | Pure SVG | Framer: pointer slide-in | One-shot animation on viewport entry. |
| StackedProgress | Pure SVG / flexbox | Framer: width-grow per segment, staggered | Intended-marker rendered as a vertical dashed line above the track. |

### 5.4 Accessibility (mandatory for every new component)

Every chart MUST:

1. Be wrapped in `<figure role="img" aria-labelledby="chart-{id}-title" aria-describedby="chart-{id}-desc">`.
2. Render a `<figcaption>` that includes the title visibly AND a `<span class="sr-only">` summary built from the data (e.g., "Mehsana 132%, Banaskantha 118%, Patan 105%, Sabarkantha 95%, Safe Limit 70%").
3. NOT rely on color alone to communicate "danger" — use a label, icon, or pattern.
4. Be keyboard-focusable IF interactive (tooltips on hover need keyboard equivalents).
5. Respect `prefers-reduced-motion` — disable Framer entry animations when set.

A `_shared/SrSummary.jsx` helper standardizes the screen-reader summary so each chart isn't reinventing it.

---

## 6. Phased Rollout

### Phase A — Foundation (estimated 3–4 days)

- Build all 8 components against demo data in `src/dev/charts.jsx` mounted at a hidden `/dev/charts` route (gated by `import.meta.env.DEV` so it never ships to prod).
- Add `_shared/Figure.jsx`, `SrSummary.jsx`, `useChartDarkMode.js`.
- Extract dark-mode logic from existing `PillarChart.jsx` into the shared hook.
- Visual QA on light mode + dark mode + mobile + `prefers-reduced-motion`.
- **Deliverable:** working `/dev/charts` showcase with at least 1 sample of each chart type, plus a "show props" inspector to make iteration fast.

### Phase B — High-impact pillar migration (estimated 3 days)

Migrate the four pillars where charts carry the most narrative weight, in this order:

1. **Agriculture** (3 charts: 1, 2, 3) — Treemap, Lollipop+threshold, Stacked progress. Validates 3 of the 8 components in production.
2. **Water** (3 charts: 32, 33, 34) — Stacked progress, Lollipop+threshold, Slope or Stacked.
3. **DigitalSovereignty** (2 charts: 6, 7) — Lollipop (with the "Gujarat zero" effect) and Horizontal ranked bars.
4. **ChemicalGovernance** (2 charts: 4, 5) — Dot plot and Lollipop. Validates the dot plot.

That's 10 charts (~30% of total). After Phase B:
- We will have shipped: Lollipop, Lollipop+threshold, Treemap, Stacked progress, Dot plot, Horizontal ranked bars, Slope chart.
- We will NOT yet have shipped: Waffle, Threshold gauge, Dependency dial.

Take a checkpoint here. If the user is happy with the visual variety, continue. If not, course-correct before doing the remaining 24.

### Phase C — Remaining pillars (estimated 4 days)

Migrate in this order (cheapest first, riskiest last):

1. **Education** (5 charts) — first waffle-small-multiples deployment (#14).
2. **Environment** (5 charts).
3. **Materials** (3 charts) — second waffle deployment (#29).
4. **GreenTech** (1 chart) — third waffle deployment (#23). After this, Waffle is battle-tested.
5. **Economics** (4 charts).
6. **Energy** (1 chart).
7. **Infrastructure** (2 charts) — second Treemap deployment.
8. **Labor** (2 charts).
9. **MigrantDiscrimination** (1 chart).

### Phase D — Cleanup (estimated 1 day)

- Delete `<PillarChart type="bar">` code path. Keep `<PillarChart type="pie">` (it's used in a few places and is fine).
- Remove `BarChart, Bar, XAxis, YAxis, CartesianGrid` imports from `PillarChart.jsx` if no longer needed.
- Update `MEMORY.md` (note the new charts library).
- Update `CLAUDE.md` / `CONTRIBUTING.md` — when adding a new chart, pick from the menu in this doc rather than defaulting to bars.
- Lint, build, smoke-test all 13 pillar pages.
- Delete `/dev/charts` route OR hide behind dev-only flag (recommended: keep it, gated by `import.meta.env.DEV`).

**Total elapsed work:** ~11 working days. Real calendar time depends on review cadence.

---

## 7. Risks + Open Questions

### Risks

1. **Recharts Treemap label readability.** Default Recharts treemap labels overflow small tiles. We commit to a custom `content` renderer that hides labels below a min-area threshold and shows them in a side legend instead. If Recharts treemap proves too painful, fallback is `d3-hierarchy` + custom SVG.
2. **Waffle on mobile.** 10×10 at 360px viewport = ~30px squares with 1px gaps — fine. Below 360px (rare but possible), drop to 5×20. Validate with a real device.
3. **Visual consistency.** 8 chart types means 8 different visual idioms. Risk of inconsistency: spacing, label fonts, axis treatments. Mitigation: a shared design-tokens file in `_shared/tokens.js` (axis color, label font sizes, dot radii, threshold-line dash pattern).
4. **Performance.** Pure-SVG charts are cheap. Recharts Treemap is the heaviest. Lazy-load `charts/Treemap.jsx` separately if needed.
5. **Testing.** No existing test setup to lean on. Visual regression via the `/dev/charts` showcase is the realistic plan.

### Open Questions

These need user decisions before Phase A starts.

1. **Author-explicit vs heuristic dispatch.**
   - **Option A (explicit):** Authors import the specific component (`<LollipopChart />`) for each chart. Most flexible, most verbose.
   - **Option B (heuristic):** Keep `<PillarChart />` as a facade that picks a sub-component based on data heuristics (number of items, presence of "Safe Limit" entry, etc.). Easier to migrate (just add a prop), but the heuristics will mis-classify edge cases.
   - **Option C (compromise):** Migrate by replacing `<PillarChart type="bar" ...>` with `<PillarChart variant="lollipop" ...>` — explicit variant name, but reuse the wrapper so callers get free SEO/figure/figcaption logic. **Recommended.**

2. **How many of the 8 to ship?**
   - Minimum viable: Lollipop (with threshold variant) + Slope + Stacked progress + Treemap + Waffle = **5 components, covers 30 of 34 charts.**
   - Full set: all 8.
   - Ship the full set or stop at 5?

3. **Tooltips: uniform or per-type?**
   - Existing PillarChart relies on Recharts default tooltip. New pure-SVG charts won't have one for free.
   - **Option A:** Build one shared `<ChartTooltip>` used by all. Uniform UX.
   - **Option B:** Skip hover tooltips — values are already labeled inline (lollipop dots, slope endpoints, waffle hover-only-on-cells). Simplest.
   - **Recommendation:** Option B for Phase B; revisit in Phase D if user wants hover.

4. **Color palette governance.**
   - Today every chart hand-picks a color array. Should we centralize semantic colors (`danger`, `warning`, `safe`, `neutral`, `accent`) in a `_shared/tokens.js` and have authors pass semantic names rather than hex codes? Strongly recommended for consistency, but it's extra refactor work.

5. **Scope of dark mode.**
   - Current `PillarChart` reads `<html class="dark">` via `useSyncExternalStore`. New charts will too. Confirm: same approach, or move to a context provider while we're refactoring?

6. **Animation budget.**
   - Framer Motion entry animations on every chart are nice but add CPU during scroll. Default to "play once on viewport enter" via `useInView` and disable under `prefers-reduced-motion`. Confirm this is acceptable.

---

## 8. Approval Checklist

Before Phase A begins, the user is asked to decide on:

- [ ] **Component count:** Build all 8, or the recommended minimum 5 (lollipop, slope, stacked progress, treemap, waffle)?
- [ ] **Dispatch model:** Author-explicit imports (Option A), heuristic facade (Option B), or `<PillarChart variant="...">` compromise (Option C — recommended)?
- [ ] **Tooltips:** Build a shared hover tooltip in Phase A, or skip until Phase D?
- [ ] **Color governance:** Refactor to semantic color tokens (`danger`/`warning`/`safe`) or keep hex-code-per-chart?
- [ ] **Dark-mode mechanism:** Keep current `useSyncExternalStore` pattern, or migrate to context?
- [ ] **Animation defaults:** Auto-play on viewport entry with reduced-motion fallback — OK?
- [ ] **Scope of /dev/charts demo route:** Keep dev-only, or remove after Phase D?
- [ ] **Phase B pillar order:** Agriculture → Water → DigitalSovereignty → ChemicalGovernance — OK, or different order?
- [ ] **Stretch: ThresholdGauge / DependencyDial.** Defer to post-Phase-D, or include in Phase A?
- [ ] **Risk acceptance:** Treemap labels on small tiles will use a custom renderer; if it doesn't look good, fallback to side-legend — OK to make that call mid-build?

Once these are answered, we can proceed to Phase A with no further blocking decisions.

---

## Appendix A — Existing PillarChart usage NOT being changed

For completeness, `<PillarChart type="pie">` instances are preserved. They live at:

- (none currently inventoried in this scope — the pie variant is supported by `PillarChart.jsx` but not used in any of the 13 pillar pages today). Confirm before Phase D delete.

## Appendix B — Files touched in each phase

**Phase A (foundation):** new files only.
- `src/components/charts/*` (8 components + shared)
- `src/dev/charts.jsx` (showcase)
- `src/App.jsx` (mount `/dev/charts` route, dev-only)

**Phase B (high-impact):** edit 4 page files.
- `src/pages/Agriculture.jsx`
- `src/pages/Water.jsx`
- `src/pages/DigitalSovereignty.jsx`
- `src/pages/ChemicalGovernance.jsx`

**Phase C (remaining):** edit 9 page files.
- `src/pages/Education.jsx`
- `src/pages/Environment.jsx`
- `src/pages/Materials.jsx`
- `src/pages/GreenTech.jsx`
- `src/pages/Economics.jsx`
- `src/pages/Energy.jsx`
- `src/pages/Infrastructure.jsx`
- `src/pages/Labor.jsx`
- `src/pages/MigrantDiscrimination.jsx`

**Phase D (cleanup):** edit 3 files.
- `src/components/PillarChart.jsx` (remove bar code path)
- `MEMORY.md` (note new charts library)
- `CONTRIBUTING.md` (update authoring guide)

---

*End of plan. Awaiting approval on Section 8 checklist before proceeding.*
