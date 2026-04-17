# Contributing to Project Alphono 34

## Code style

- **Citations are mandatory.** Every factual claim in a pillar page must carry an inline `<Ref n={N}/>` superscript that resolves to a numbered entry in that page's `<SourceList>`. No uncited numbers, no "industry estimates" — if you can't source it, flag it with `<PendingDataBox />` instead.
- **Every source needs a URL.** Government report PDFs, news articles, TRAI filings — all must have a public link.
- **No emoji in source files** unless the user explicitly asks. User preference.
- **ESLint passes.** Run `npm run lint` before committing. The config ignores unused vars matching `^[A-Z_]|^motion$` — don't add more exemptions.
- **Theme tokens over literals.** Use `text-crimson`, `bg-parchment-50`, `bg-dark-surface`, etc. — not hex values. Tokens are defined in `src/index.css` under `@theme`.
- **Dark-mode reads** — leaf components that need the current theme should use `useSyncExternalStore` with a `subscribeDarkMode` listener (see `src/components/PillarChart.jsx` or `src/components/CascadeDiagram.jsx` for the pattern). Do **not** use `useState` + `useEffect` to detect dark mode.

## Running

```bash
npm install
npm run dev       # vite dev server
npm run build     # production build
npm run lint      # eslint
```

## Adding a new pillar

A pillar is registered in 8 places. Follow every step or the pillar will half-appear in search but not the ToC, or vice versa.

1. **Create the page** at `src/pages/YourPillar.jsx`. Copy the structure from `src/pages/Agriculture.jsx` (it's the cleanest recent template). Required sections:
   - Hero with `PILLAR XX` label
   - `<ScrollSpy sections={spySections} />`
   - 4–7 `<Section>` blocks containing `<DataCard>`s and charts
   - `<ComparisonTable>` at the end
   - `<CounterArgument messages={...}>` debate
   - `<SourceList sources={sources} />` footer

2. **Register the route** in `src/App.jsx`:
   ```jsx
   const YourPillar = lazy(() => import('./pages/YourPillar'))
   // ...
   <Route path="/your-pillar" element={<PageTransition><YourPillar /></PageTransition>} />
   ```

3. **Add to Home page** in `src/pages/Home.jsx`:
   - Push an entry into the `sectors` array (id, title, icon, desc, path, stat, statLabel, sources count).
   - Push an entry into `dependencyData` (for the radar chart).
   - Push an entry into `findings` (with 3 cited source links).

4. **Add to search index** in `src/data/searchIndex.js`: 6–10 entries of shape `{ pillar, path, claim, keywords }`.

5. **Add to Sources page** in `src/pages/Sources.jsx`:
   - Add to `pillarMeta` (icon, color, count).
   - Append source entries to `allSources` array, keyed by `pillar` name matching exactly.

6. **Add Footer link** in `src/components/Footer.jsx` inside the `<ul>` under "Analysis Pillars".

## Reusable components

| Component | Purpose |
|-----------|---------|
| `Section` | Titled block with icon, auto-slugged id, scroll margin |
| `DataCard` | Rounded card; set `alert` prop for red variant |
| `Ref` | Inline superscript citation link |
| `SourceList` | Numbered bibliography at page bottom |
| `StatBox` | Large single stat tile (7 colors) |
| `PendingDataBox` | Placeholder for unsourced data |
| `PillarChart` | Bar or pie chart with dark-mode awareness |
| `ComparisonTable` | State-vs-state table, Gujarat highlighted |
| `CounterArgument` | Chat debate with Rajubhai (raju) and Priya |
| `ScrollSpy` | Sidebar TOC for long pages |
| `Skeleton` | Shimmer placeholder (Suspense fallback) |
| `AnimatedCounter` | Number that counts up when scrolled into view |

See each component file for exact prop signatures.

## Pull request checklist

- [ ] `npm run lint` passes with no new warnings
- [ ] `npm run build` succeeds
- [ ] New claims have `<Ref>` + matching `SourceList` entries
- [ ] New interactive elements have `aria-label` or text label
- [ ] Tested at 375 px width (mobile) and in dark mode
