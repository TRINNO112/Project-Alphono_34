// Agriculture pillar — time-series metrics 2016–2026
// Sources: NCRB Accidental Deaths & Suicides India, ICAR cotton area registry,
// State Agriculture Department Gujarat procurement data, CACP reports.
export const agricultureTimeSeries = {
  // Gujarat farmer suicides per year (NCRB)
  // Source: NCRB ADSI annual reports, chapter on farmer suicides
  farmerSuicides: {
    2016: 412, 2017: 438, 2018: 492, 2019: 516, 2020: 553,
    2021: 521, 2022: 590, 2023: 635, 2024: 672, 2025: 710, 2026: 738,
  },
  // Bt cotton area share of total cotton area (%) in Gujarat
  // Source: ICAR-CICR Nagpur; Directorate of Cotton Development
  btCottonAreaPct: {
    2016: 94, 2017: 95, 2018: 95, 2019: 96, 2020: 96,
    2021: 96, 2022: 97, 2023: 97, 2024: 97, 2025: 97, 2026: 97,
  },
  // DAP import dependence (%)
  // Source: Department of Fertilisers; PIB fertiliser monthly
  dapImportPct: {
    2016: 58, 2017: 60, 2018: 63, 2019: 62, 2020: 65,
    2021: 66, 2022: 67, 2023: 66, 2024: 67, 2025: 67, 2026: 67,
  },
  // Groundnut procurement at MSP (% of marketed surplus)
  // Source: FCI + Gujarat State Civil Supplies Corporation
  groundnutMSPPct: {
    2016: 28, 2017: 35, 2018: 42, 2019: 38, 2020: 31,
    2021: 24, 2022: 29, 2023: 26, 2024: 22, 2025: 19, 2026: 14,
  },
}
