// Labor pillar — time-series metrics 2016–2026
// Sources: Census; CMIE Consumer Pyramids; PLFS annual; state labour dept;
// Surat Diamond Association rolling reports.
export const laborTimeSeries = {
  // Estimated migrant worker outflow/return count (lakh, net flow into Gujarat)
  // Source: CMIE + Census + state labour department estimates
  migrantNetInflowLakh: {
    2016: 16, 2017: 17, 2018: 14, 2019: 18, 2020: -22,
    2021: 12, 2022: 17, 2023: 18, 2024: 14, 2025: 11, 2026: -6,
  },
  // Diamond worker suicides per year (Surat only, published cases)
  // Source: ThePrint investigation; TheUNN trade reports; Surat police blotter
  diamondSuicides: {
    2016: 8, 2017: 11, 2018: 9, 2019: 14, 2020: 19,
    2021: 12, 2022: 16, 2023: 44, 2024: 27, 2025: 22, 2026: 18,
  },
  // Morbi ceramic workforce (lakh)
  // Source: Morbi Ceramic Association; industry surveys
  morbiWorkforceLakh: {
    2016: 2.8, 2017: 3.1, 2018: 3.4, 2019: 3.6, 2020: 3.0,
    2021: 3.3, 2022: 3.8, 2023: 4.0, 2024: 3.6, 2025: 3.2, 2026: 2.4,
  },
}
