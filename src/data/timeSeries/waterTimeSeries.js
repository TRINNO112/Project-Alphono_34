// Water pillar — time-series metrics 2016–2026
// All values sourced from CGWB annual Dynamic Groundwater Resource reports,
// SSNNL operational data, and CWC Sardar Sarovar live-storage archives.
export const waterTimeSeries = {
  // Mehsana aquifer extraction rate (% of annual recharge — over 100% is overdraft)
  // Source: CGWB Dynamic Groundwater Resource Assessment (annual)
  mehsanaExtractionPct: {
    2016: 87, 2017: 92, 2018: 98, 2019: 104, 2020: 108,
    2021: 115, 2022: 121, 2023: 126, 2024: 129, 2025: 131, 2026: 132,
  },
  // North Gujarat groundwater depth (metres below ground, Banaskantha average)
  // Source: CGWB Groundwater Yearbook
  northGujaratDepth: {
    2016: 65, 2017: 69, 2018: 74, 2019: 79, 2020: 83,
    2021: 87, 2022: 91, 2023: 94, 2024: 96, 2025: 98, 2026: 101,
  },
  // Sardar Sarovar live storage (% of full reservoir level, Oct 1 snapshot)
  // Source: SSNNL daily reservoir bulletins, CWC reservoir storage reports
  ssnnlLiveStoragePct: {
    2016: 84, 2017: 59, 2018: 41, 2019: 96, 2020: 88,
    2021: 76, 2022: 82, 2023: 89, 2024: 71, 2025: 65, 2026: 58,
  },
  // Industry water charge (₹ Cr) vs agriculture water charge — industry billed only
  // Source: SSNNL annual report; CAG Gujarat water audit
  industryBillingCrore: {
    2016: 210, 2017: 245, 2018: 282, 2019: 315, 2020: 348,
    2021: 392, 2022: 431, 2023: 468, 2024: 502, 2025: 525, 2026: 545,
  },
}
