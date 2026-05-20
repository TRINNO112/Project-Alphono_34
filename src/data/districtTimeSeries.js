// District-level Time Series — one or more multi-year metric trends per district.
// Distinct from src/data/timeSeries/ (which is per-pillar, statewide). This file
// holds DISTRICT-anchored trends used on the /district/:id pages.
//
// Schema:
//   {
//     district: <id>,          // matches districtsData.js id
//     metric: <slug>,          // machine-readable key for the series
//     label: <display name>,   // chart title
//     unit: <string>,          // e.g. "%", "₹ crore", "MW"
//     series: [{ year, value }],
//     sources: [url, ...],
//     notes: <prose context>
//   }

export const districtTimeSeries = [
  // ──── ARAVALLI ─────────────────────────────────────────────────────────
  {
    district: "aravalli",
    metric: "groundwater_stage_pct",
    label: "Groundwater Stage of Extraction (%)",
    unit: "%",
    series: [
      { year: 2013, value: 51.2 },
      { year: 2017, value: 57.41 },
      { year: 2020, value: 60.8 },
      { year: 2022, value: 62.1 },
      { year: 2023, value: 63.4 },
    ],
    sources: [
      "https://cgwb.gov.in/old_website/District_Profile/Gujarat/Aravalli.pdf",
      "https://cgwb.gov.in/sites/default/files/Annual-GW-Quality-Report-2024.pdf",
      "https://jalshakti-dowr.gov.in/",
    ],
    notes:
      "Bhiloda taluka high end 62.96%, Malpur low end 50.73% — all 6 talukas classified 'Safe' but trending Semi-Critical across the decade. Source: CGWB Aravalli district booklet, CGWA NCDGWR2023, Jal Shakti uploads.",
  },

  // ──── PATAN ────────────────────────────────────────────────────────────
  {
    district: "patan",
    metric: "charanka_solar_mw",
    label: "Charanka Solar Park — MW Commissioned",
    unit: "MW",
    series: [
      { year: 2012, value: 214 },
      { year: 2014, value: 345 },
      { year: 2017, value: 600 },
      { year: 2020, value: 690 },
      { year: 2022, value: 730 },
      { year: 2025, value: 730 },
    ],
    sources: [
      "https://www.gpcl.gujarat.gov.in/charanka-solar-park",
      "https://mnre.gov.in/",
      "https://www.eqmagpro.com/",
    ],
    notes:
      "Plateaued at 730 MW since 2022 despite a 790 MW target announced earlier. The land enclosure (5,384 acres) is permanent; promised additional megawatts and local jobs never fully arrived for the Santalpur Maldhari pastoralists who lost grazing access.",
  },

  // ──── SABARKANTHA ──────────────────────────────────────────────────────
  {
    district: "sabarkantha",
    metric: "sabar_dairy_turnover_cr",
    label: "Sabar Dairy Annual Turnover (₹ crore)",
    unit: "₹ crore",
    series: [
      { year: 2018, value: 4200 },
      { year: 2020, value: 5100 },
      { year: 2022, value: 6805 },
      { year: 2023, value: 7800 },
      { year: 2024, value: 8939 },
      { year: 2025, value: 9500 },
    ],
    sources: [
      "https://www.sabardairy.org/about-us/turnover",
      "https://www.sabardairy.org/about-us/organization-structure",
    ],
    notes:
      "Turnover more than doubled FY18-FY25 while procurement prices to the 3.85 lakh member-farmers remained flat — the structural gap that triggered the July 2025 storming of the Himatnagar plant. 2018/2020 figures interpolated from the official turnover page; FY22, FY24 and 2025 are press-confirmed.",
  },
]

// Lookup helpers
export const getDistrictTimeSeries = (districtId) =>
  districtTimeSeries.filter((s) => s.district === districtId)

export const districtsWithTimeSeries = [
  ...new Set(districtTimeSeries.map((s) => s.district)),
]
