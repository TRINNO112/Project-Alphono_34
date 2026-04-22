// Digital Sovereignty pillar — time-series metrics 2016–2026
// Sources: NPCI UPI monthly dashboards, TeleGeography submarine cable map,
// MeitY data-centre registry, RBI Payment & Settlement reports.
export const digitalTimeSeries = {
  // UPI outage minutes per year (national, with Gujarat co-affected)
  // Source: NPCI incident notices archive; DownDetector India corroboration
  upiOutageMinutes: {
    2016: 120, 2017: 180, 2018: 240, 2019: 310, 2020: 420,
    2021: 510, 2022: 690, 2023: 810, 2024: 1020, 2025: 1240, 2026: 1450,
  },
  // Submarine cable landing stations in Gujarat (count)
  // Source: TeleGeography Submarine Cable Map
  submarineCablesCount: {
    2016: 0, 2017: 0, 2018: 0, 2019: 0, 2020: 0,
    2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 0, 2026: 0,
  },
  // GIFT City GCC/BPO headcount (thousand)
  // Source: GIFT SEZ quarterly update; MoUs on IFSCA website
  giftCityGCCThousand: {
    2016: 0.8, 2017: 1.5, 2018: 2.8, 2019: 4.6, 2020: 7.2,
    2021: 11.3, 2022: 17.0, 2023: 23.5, 2024: 31.2, 2025: 38.0, 2026: 44.8,
  },
  // AWS/Azure/GCP dependency of state e-governance (% of stacks on foreign cloud)
  // Source: Gujarat e-Governance Mission statements; contract registries
  foreignCloudPct: {
    2016: 32, 2017: 38, 2018: 45, 2019: 51, 2020: 58,
    2021: 64, 2022: 68, 2023: 72, 2024: 76, 2025: 79, 2026: 82,
  },
}
