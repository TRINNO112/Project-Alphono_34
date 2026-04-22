// Energy pillar — time-series metrics 2016–2026
// Sources: CEA National Electricity Plan, MNRE renewable capacity registry,
// PPAC/CEA coal-import monthlies, GSLDC grid operations reports.
export const energyTimeSeries = {
  // Gujarat imported-coal thermal PLF (%)
  // Source: CEA Monthly Generation Reports
  importedCoalPLF: {
    2016: 72, 2017: 68, 2018: 71, 2019: 65, 2020: 52,
    2021: 58, 2022: 63, 2023: 61, 2024: 54, 2025: 47, 2026: 41,
  },
  // Gujarat renewable installed capacity (GW)
  // Source: MNRE state-wise capacity, SECI auction records
  renewableInstalledGW: {
    2016: 5.2, 2017: 6.8, 2018: 8.1, 2019: 10.4, 2020: 13.6,
    2021: 17.9, 2022: 21.3, 2023: 26.8, 2024: 32.1, 2025: 38.4, 2026: 42.5,
  },
  // LNG re-gasification utilization (%) at Dahej + Hazira + Mundra
  // Source: PPAC LNG terminal utilization; Petronet/Shell quarterly
  lngUtilizationPct: {
    2016: 78, 2017: 82, 2018: 85, 2019: 81, 2020: 64,
    2021: 72, 2022: 58, 2023: 61, 2024: 52, 2025: 41, 2026: 28,
  },
  // Morbi ceramic units shut due to gas price spike (count)
  // Source: Morbi Ceramic Association; Business Standard rolling coverage
  morbiShutCount: {
    2016: 0, 2017: 0, 2018: 0, 2019: 0, 2020: 120,
    2021: 45, 2022: 230, 2023: 180, 2024: 320, 2025: 410, 2026: 550,
  },
}
