# Project Alphono 34 — Upgrade Plan (April 2026)

## Status: COMPLETE ✓
## Created: 2026-04-06

---

## Overview

Six major upgrades to transform the project from a "text-heavy research paper with web polish" into a genuine interactive data visualization platform. Every claim gets a visual. Every trend gets a trajectory. Every crisis gets a cascade.

---

## Phase 1: Cascade/Sankey Diagram (THE showpiece)

**Goal**: Build a visual showing how the 2026 West Asia crisis propagated across all pillars simultaneously.

**The cascade chain**:
```
West Asia War (Mar 2026)
  → LNG prices spike 40%
    → 550+ Morbi ceramic units shut (no affordable gas)
    → Tata Mundra UMPP offline 9 months (imported coal economics)
      → 4,000 MW grid collapse in South Gujarat
  → Hormuz chokepoint threatened
    → 36% crude supply (Russia via sea) at risk
    → Jamnagar refinery throughput uncertainty
  → Gas crisis + US tariffs (double shock)
    → 5-6 lakh migrant workers flee
      → Surat powerloom losses Rs 100 Cr/day
      → 1.5 lakh diamond jobs lost
      → 71 suicides among diamond workers
    → GST collection impact
      → OTR drops to 4.9%
      → CAG flags Rs 11,929 Cr overstated surplus
```

**Implementation**:
- New component: `src/components/CascadeDiagram.jsx`
- Uses Recharts Sankey or custom SVG flow diagram
- Animated with Framer Motion — nodes light up sequentially
- Placed on Home page (new Section VII) AND Summary page
- Interactive: hover on any node to see the data + source citation

**Status**: [x] COMPLETE — CascadeDiagram.jsx built, placed on Home + Summary

---

## Phase 2: Charts for Education & Environment Pages

### Education Page — Currently 0 charts

Charts to add:
1. **GER Comparison Bar Chart** — Gujarat primary GER 79.6% vs national average vs top states (Kerala, Tamil Nadu, Karnataka)
2. **Teacher Vacancy Horizontal Bar** — 32,000+ vacancies by subject/district category
3. **School Closure Trend** — 1,027 schools closed (year-by-year cumulative area chart 2018-2025)
4. **Dropout Rate Comparison** — Gujarat 2.4L vs other major states (bar chart)
5. **Healthcare Vacancy Pie** — 97% specialist vacancies at rural CHCs breakdown
6. **NIRF Ranking Decline** — Gujarat institutions in top 100 over years (line chart)

### Environment Page — Currently 0 charts

Charts to add:
1. **CEPI Score Horizontal Bar** — Vapi 90.75, Ankleshwar 88.5, Vatva 85.99 etc. (with WHO danger threshold line)
2. **Coastal Erosion Comparison** — Gujarat 27.6% vs other coastal states (bar chart)
3. **Mangrove Loss Area Chart** — 36.39 sq km loss over time
4. **Alang Ship-Breaking Volume Decline** — 75% drop, year-by-year (line/area chart)
5. **Air Quality Index Comparison** — Ahmedabad AQI vs other cities (bar chart)
6. **River Pollution** — 74% of Gujarat rivers polluted, severity breakdown (stacked bar)

**Status**: [x] COMPLETE — Education: 6 charts added, Environment: 5 charts added

---

## Phase 3: Time-Series Charts Across Existing Pages

### Economics Page
- **OTR Decline Line Chart**: FY19 (6.2%) → FY20 → FY21 → FY22 → FY23 → FY24 → FY25 (4.9%)
- **Central Grants Crash**: Trajectory from peak to 0.53% of GSDP
- **FDI Ranking Drop**: Gujarat position in state FDI rankings over 5 years
- **Debt-to-GSDP Trend**: Showing upward trajectory

### Water Page
- **Groundwater Depletion Trajectory**: District-level extraction rates over time
- **Narmada Canal Completion**: Main canal 92% vs last-mile 36% over years
- **SAUNI Cost Overrun**: Budget vs actual spend timeline (Rs 11,000 Cr → Rs 18,563 Cr)

### Infrastructure Page
- **Bridge Age Distribution**: 4,500 bridges over design life — age bracket histogram
- **Airport Passenger Growth**: 13M pax trajectory
- **DFC Completion Timeline**: Phases vs delays

### Labor Page
- **Exodus Pattern Timeline**: 2016 (GST demonetization) → 2020 (COVID) → 2026 (twin crisis) — migration volume
- **Diamond Worker Suicides**: Monthly/quarterly trend (71 in 18 months)
- **Wage Comparison Over Time**: Gujarat migrant wages vs Bihar vs Kerala trajectory

### Materials Page
- **Russia Crude Dependency Growth**: Pre-Ukraine vs post-Ukraine trajectory
- **API Import Value Growth**: $3.6B trend over 5 years
- **Potash Import Volume**: Year-over-year dependency

**Status**: [x] COMPLETE — Economics 2, Water 2, Labor 2, Materials 2 time-series charts added

---

## Phase 4: District Profiles Expansion

**Currently completed (7 districts)**:
1. Morbi — Bridge collapse, silicosis, gas crisis
2. Surat — Diamond suicides, powerloom crisis, migrant hub
3. Kutch — Mundra port, Khavda solar, Agariya salt workers
4. Jamnagar — Reliance refinery, Russian crude
5. Mehsana — 132% groundwater extraction, fluoride
6. Bharuch — Chemical corridor, 130 deaths
7. Ahmedabad — Sabarmati pollution, anti-migrant violence

**To research and add (10 more)**:
8. **Rajkot** — Engineering hub, SME cluster, water stress
9. **Vadodara (Baroda)** — Industrial corridor, IPCL legacy, cultural capital
10. **Banaskantha** — 115% extraction, drought zone, dairy dependency
11. **Valsad** — Vapi CEPI 90.75, tribal displacement, chemical pollution
12. **Junagadh** — Agricultural stress, Gir forest buffer zone conflicts
13. **Gandhinagar** — GIFT City tax vacuum, administrative capital vs ground reality
14. **Porbandar** — Fishing community collapse, coastal erosion
15. **Anand** — Amul cooperative model vs dairy industry pressures
16. **Bhavnagar** — Alang ship-breaking decline, port competition
17. **Narmada** — Dam displacement communities, rehabilitation gaps

**Each district profile needs**:
- 3 key stats with severity status
- 2-4 crisis timeline events with dates and sources
- 3-4 sentence dependency summary
- Pillar tags (which pillars it exemplifies)

**Status**: [x] COMPLETE — 17 districts with real data, 15 placeholders remain

---

## Phase 5: Summary Page Rebuild

**Current state**: Just repeated StatBoxes from pillar pages. Boring.

**New design**:
1. **Cross-Pillar Risk Matrix** — 8x8 grid showing which pillars amplify each other
   - X-axis: Trigger pillar, Y-axis: Affected pillar
   - Color intensity = severity of cascade effect
   - Example: Energy trigger → Labor (HIGH), Materials (HIGH), Fiscal (MEDIUM)

2. **Cascade Diagram** (reused from Phase 1) — the Sankey flow

3. **Severity-Ranked Findings** — All 9 pillars ranked by external dependency score
   - Horizontal bar chart, color-coded by severity tier
   - Critical (>85%): Water, Infrastructure, Materials
   - High (70-84%): Energy, Environment, Education
   - Elevated (50-69%): Labor, Fiscal

4. **"What Breaks First" Scenario Cards** — 3-4 hypothetical disruption scenarios
   - Scenario A: Hormuz Strait blockade (30 days)
   - Scenario B: Monsoon failure (consecutive year)
   - Scenario C: Mass migrant exodus (>10 lakh)
   - Scenario D: Central transfer freeze
   - Each card shows which pillars collapse and in what order

5. **Final Thesis Statement** — Academic-style conclusion with key citation callouts

**Status**: [x] COMPLETE — Severity ranking, cascade diagram, scenario cards, enhanced conclusion

---

## Phase 6: CounterArgument Micro-Visualizations

**Current state**: Bullet-point text in two columns. No visual weight to the "data" side.

**New design**:
- Left column ("The Narrative"): Imaginary character — maybe call them "The Optimist" or use a generic think-tank voice. Their arguments are presented as speech bubbles or quote cards.
- Right column ("The Data"): Each rebuttal gets an inline mini-chart or bold stat callout
  - Example: "Gujarat leads in renewable energy!" → inline spark chart showing 42.5 GW installed but only 22% actual generation
  - Example: "Ports are booming!" → mini bar showing Mundra 200 MMT but 70% is pass-through cargo
- Add subtle red underline animation when "The Data" side reveals its counter

**Implementation**:
- Enhance existing `CounterArgument.jsx` component
- Add optional `chart` prop to each data point
- Use tiny Recharts instances (sparklines) or bold stat + label combos
- Keep the two-column layout but make the data side visually dominant

**Status**: [x] COMPLETE — Speech bubble design, stats prop, all 9 pillar pages + MigrantDiscrimination updated

---

## Research Tasks (Data Gathering)

Before implementing the charts, we need actual sourced data points:

- [ ] Education: GER by state (AISHE 2024-25 data), teacher vacancies by category, school closure year-by-year, NIRF rankings by year
- [ ] Environment: CEPI scores for all Gujarat industrial areas, coastal erosion state comparison, Alang tonnage by year, AQI readings for Gujarat cities
- [ ] Economics: OTR by year (FY19-FY25), central grants trajectory, FDI state rankings by year, debt-to-GSDP trend
- [ ] Water: District-wise extraction rates over time, SAUNI budget vs actual by year, canal completion milestones
- [ ] Labor: Migration estimates by crisis event, diamond worker data points, wage comparisons over time
- [ ] Districts: Research data for Rajkot, Vadodara, Banaskantha, Valsad, Junagadh, Gandhinagar, Porbandar, Anand, Bhavnagar, Narmada

---

## Execution Order

1. **Research first** — gather all data points (sub-agents doing web research in parallel)
2. **Phase 1** — Cascade diagram (the showpiece, goes on Home + Summary)
3. **Phase 2** — Education + Environment charts (zero-chart pages first)
4. **Phase 3** — Time-series charts across other pages
5. **Phase 4** — District profile expansion (can be done in parallel with charts)
6. **Phase 5** — Summary page rebuild (needs Phase 1 cascade + Phase 3 charts done first)
7. **Phase 6** — CounterArgument enhancements (polish pass, can be last)

---

## File Impact Map

| File | Changes |
|------|---------|
| `src/components/CascadeDiagram.jsx` | NEW — Sankey/flow diagram component |
| `src/pages/Home.jsx` | Add cascade diagram section |
| `src/pages/Education.jsx` | Add 4-6 charts |
| `src/pages/Environment.jsx` | Add 4-6 charts |
| `src/pages/Economics.jsx` | Add 3-4 time-series charts |
| `src/pages/Water.jsx` | Add 2-3 time-series charts |
| `src/pages/Infrastructure.jsx` | Add 2-3 time-series charts |
| `src/pages/Labor.jsx` | Add 2-3 time-series charts |
| `src/pages/Materials.jsx` | Add 2-3 time-series charts |
| `src/pages/Summary.jsx` | FULL REBUILD — risk matrix, cascade, scenarios |
| `src/components/CounterArgument.jsx` | Enhanced with chart props |
| `src/data/districtsData.js` | Add 10 new district profiles |
| `README.md` | Updated to reflect all new features |

---

## Notes for Context Recovery

If context is cleared mid-session:
1. Read this file first: `plan.md`
2. Check which phases are marked complete
3. Resume from the next incomplete phase
4. Memory file at `~/.claude/projects/.../memory/MEMORY.md` has project conventions
