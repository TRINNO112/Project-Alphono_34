// Materials pillar — time-series metrics 2016–2026
// Sources: PPAC monthly oil statistics, Reuters shipment trackers,
// DGCIS export/import, Rest of World China-API investigation.
export const materialsTimeSeries = {
  // Russian crude share of Gujarat refinery throughput (%)
  // Source: Reuters tanker-tracking; PPAC state-wise refinery data
  russianCrudePct: {
    2016: 0.2, 2017: 0.3, 2018: 0.8, 2019: 1.2, 2020: 1.5,
    2021: 2.1, 2022: 14.0, 2023: 29.5, 2024: 33.8, 2025: 35.2, 2026: 36.0,
  },
  // Pharma API import dependence on China (%) — IPA estimate, Gujarat clusters
  // Source: IPA annual report; Rest of World; PHD Chamber pharma deep-dive
  chinaAPIImportPct: {
    2016: 58, 2017: 60, 2018: 62, 2019: 65, 2020: 68,
    2021: 70, 2022: 69, 2023: 67, 2024: 68, 2025: 68, 2026: 70,
  },
  // Potash import dependence (%) — India has zero domestic production
  // Source: Fertiliser Association of India annual statistics
  potashImportPct: {
    2016: 100, 2017: 100, 2018: 100, 2019: 100, 2020: 100,
    2021: 100, 2022: 100, 2023: 100, 2024: 100, 2025: 100, 2026: 100,
  },
  // APSEZ FY cargo throughput (MMT) — Mundra + all Gujarat ports
  // Source: Adani Ports quarterly results
  apsezCargoMMT: {
    2016: 180, 2017: 193, 2018: 210, 2019: 229, 2020: 223,
    2021: 247, 2022: 312, 2023: 339, 2024: 420, 2025: 460, 2026: 500,
  },
}
