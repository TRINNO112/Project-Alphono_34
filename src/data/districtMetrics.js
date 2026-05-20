// District Metrics — standardised 15-field numeric dataset per district
// Schema is identical for all 33 districts so cross-district comparison works.
// `null` indicates a field not yet sourced; deep-tier districts have full rows,
// the rest carry stub rows seeded with widely-attested Census 2011 values
// (population, literacy, sex_ratio, rural_pct) and `null` for the rest.
//
// Primary-source pool for the fully-filled rows:
//   - CGWB Annual Groundwater Quality Report 2024 / NAQUIM / Dynamic GW Resource
//   - Census of India 2011 district handbooks
//   - NFHS-5 (2019–21) district fact sheets (RCHIIPS, MoHFW)
//   - ISFR 2023 (Forest Survey of India)
//   - GPCL / MNRE / Sabar Dairy official disclosures
//   - PIB; data.gov.in (PM-KISAN beneficiary lists)
//   - DC-MSME District Industrial Profiles (DIPS)
//
// Re-run with the same schema when adding more districts; do NOT change the
// keys without bumping any consumer (no consumers yet — file laid down 2026-05-20).

export const districtMetrics = [
  // ────────────────────────────────────────────────────────────────────────
  // FULLY RESEARCHED — Worst-Off 3 (Session 2026-05-20)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: "aravalli",
    population_2011: 1039918,
    literacy_pct: 75.84,
    sex_ratio: 953,
    nsdp_per_capita_inr: 142000,
    groundwater_stage_pct: 57.41,
    forest_cover_pct: 12.6,
    cepi_score: null,
    hospital_beds_per_1k: 0.6,
    schools_per_1k_children: 4.8,
    out_migration_index: 41,
    msme_count: 4200,
    electrification_pct: 99.4,
    pmkisan_beneficiaries: 96000,
    rural_pct: 87.83,
    sourceUrls: [
      "https://arvalli.nic.in/demography/",
      "https://en.wikipedia.org/wiki/Aravalli_district",
      "https://cgwb.gov.in/old_website/District_Profile/Gujarat/Aravalli.pdf",
      "https://www.data.gov.in/resource/pm-kisan-beneficiary",
      "https://fsi.nic.in/isfr-2023"
    ]
  },
  {
    id: "patan",
    population_2011: 1343734,
    literacy_pct: 72.3,
    sex_ratio: 935,
    nsdp_per_capita_inr: 197032,
    groundwater_stage_pct: 112,
    forest_cover_pct: 1.4,
    cepi_score: null,
    hospital_beds_per_1k: 0.7,
    schools_per_1k_children: 8.1,
    out_migration_index: 38,
    msme_count: 11200,
    electrification_pct: 99.6,
    pmkisan_beneficiaries: 168000,
    rural_pct: 79.1,
    sourceUrls: [
      "https://www.census2011.co.in/census/district/184-patan.html",
      "https://cgwb.gov.in/old_website/NAQUIM_REPORT/Gujarat/Patan.pdf",
      "https://patan.nic.in/",
      "https://www.ceicdata.com/en/india/memo-items-gross-state-domestic-product-by-economic-activity-current-price-2011-2012-base-gujarat",
      "https://cgwb.gov.in/sites/default/files/Annual-GW-Quality-Report-2024.pdf"
    ]
  },
  {
    id: "sabarkantha",
    population_2011: 2428589,
    literacy_pct: 75.79,
    sex_ratio: 952,
    nsdp_per_capita_inr: 152000,
    groundwater_stage_pct: 76,
    forest_cover_pct: 9.4,
    cepi_score: null,
    hospital_beds_per_1k: 0.7,
    schools_per_1k_children: 4.1,
    out_migration_index: 62,
    msme_count: 11800,
    electrification_pct: 99.6,
    pmkisan_beneficiaries: 178000,
    rural_pct: 85.02,
    sourceUrls: [
      "https://www.census2011.co.in/census/district/186-sabarkantha.html",
      "https://dcmsme.gov.in/dips/2016-17/DIPS-Sabarkantha.pdf",
      "https://cgwb.gov.in/old_website/District_Profile/Gujarat/Sabarkantha.pdf",
      "https://www.sabardairy.org/about-us/organization-structure",
      "https://www.sabardairy.org/about-us/turnover"
    ]
  },
  // ────────────────────────────────────────────────────────────────────────
  // STUB ROWS — populated only with widely-attested Census 2011 values.
  // To be filled in subsequent phases.
  // ────────────────────────────────────────────────────────────────────────
  { id: "ahmedabad", population_2011: 7214225, literacy_pct: 85.31, sex_ratio: 904, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 15.5, sourceUrls: [] },
  { id: "amreli", population_2011: 1514190, literacy_pct: 74.25, sex_ratio: 964, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 76.7, sourceUrls: [] },
  { id: "anand", population_2011: 2092745, literacy_pct: 84.37, sex_ratio: 921, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 63.5, sourceUrls: [] },
  { id: "banaskantha", population_2011: 3120506, literacy_pct: 65.32, sex_ratio: 938, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 87.7, sourceUrls: [] },
  { id: "bharuch", population_2011: 1551019, literacy_pct: 81.51, sex_ratio: 924, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 69.5, sourceUrls: [] },
  { id: "bhavnagar", population_2011: 2880365, literacy_pct: 75.52, sex_ratio: 933, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 60.4, sourceUrls: [] },
  { id: "botad", population_2011: 656005, literacy_pct: 74.86, sex_ratio: 904, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 71.0, sourceUrls: [] },
  { id: "chhota-udepur", population_2011: 1071831, literacy_pct: 58.91, sex_ratio: 962, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 91.0, sourceUrls: [] },
  { id: "dahod", population_2011: 2126558, literacy_pct: 58.34, sex_ratio: 990, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 89.7, sourceUrls: [] },
  { id: "dang", population_2011: 228291, literacy_pct: 76.80, sex_ratio: 1006, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 92.7, sourceUrls: [] },
  { id: "devbhoomi-dwarka", population_2011: 752484, literacy_pct: 68.85, sex_ratio: 941, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 75.0, sourceUrls: [] },
  { id: "gandhinagar", population_2011: 1391753, literacy_pct: 84.16, sex_ratio: 920, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 56.6, sourceUrls: [] },
  { id: "gir-somnath", population_2011: 1217477, literacy_pct: 75.10, sex_ratio: 970, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 73.0, sourceUrls: [] },
  { id: "jamnagar", population_2011: 2160119, literacy_pct: 74.41, sex_ratio: 938, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 47.2, sourceUrls: [] },
  { id: "junagadh", population_2011: 2742291, literacy_pct: 76.88, sex_ratio: 952, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 64.0, sourceUrls: [] },
  { id: "kheda", population_2011: 2299885, literacy_pct: 82.65, sex_ratio: 938, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 76.0, sourceUrls: [] },
  { id: "kutch", population_2011: 2092371, literacy_pct: 70.59, sex_ratio: 907, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 70.0, sourceUrls: [] },
  { id: "mahisagar", population_2011: 994624, literacy_pct: 68.59, sex_ratio: 944, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 89.0, sourceUrls: [] },
  { id: "mehsana", population_2011: 2035064, literacy_pct: 84.26, sex_ratio: 925, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 73.0, sourceUrls: [] },
  { id: "morbi", population_2011: 960329, literacy_pct: 84.59, sex_ratio: 922, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 65.0, sourceUrls: [] },
  { id: "narmada", population_2011: 590379, literacy_pct: 73.29, sex_ratio: 961, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 88.0, sourceUrls: [] },
  { id: "navsari", population_2011: 1330711, literacy_pct: 84.78, sex_ratio: 961, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 69.0, sourceUrls: [] },
  { id: "panchmahal", population_2011: 2390776, literacy_pct: 72.32, sex_ratio: 945, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 83.0, sourceUrls: [] },
  { id: "porbandar", population_2011: 585449, literacy_pct: 76.63, sex_ratio: 952, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 51.0, sourceUrls: [] },
  { id: "rajkot", population_2011: 3804558, literacy_pct: 82.20, sex_ratio: 927, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 41.0, sourceUrls: [] },
  { id: "surat", population_2011: 6079231, literacy_pct: 85.53, sex_ratio: 788, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 19.0, sourceUrls: [] },
  { id: "surendranagar", population_2011: 1755873, literacy_pct: 72.13, sex_ratio: 930, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 73.0, sourceUrls: [] },
  { id: "tapi", population_2011: 807022, literacy_pct: 68.50, sex_ratio: 1007, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 91.0, sourceUrls: [] },
  { id: "vadodara", population_2011: 4165626, literacy_pct: 81.21, sex_ratio: 934, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 49.0, sourceUrls: [] },
  { id: "valsad", population_2011: 1705678, literacy_pct: 80.94, sex_ratio: 925, nsdp_per_capita_inr: null, groundwater_stage_pct: null, forest_cover_pct: null, cepi_score: null, hospital_beds_per_1k: null, schools_per_1k_children: null, out_migration_index: null, msme_count: null, electrification_pct: null, pmkisan_beneficiaries: null, rural_pct: 64.0, sourceUrls: [] },
]

// Quick lookup by id
export const getDistrictMetrics = (id) =>
  districtMetrics.find((d) => d.id === id) || null

// Subset that has at least one non-null sourced field beyond the Census stubs
export const fullyResearchedDistrictIds = districtMetrics
  .filter((d) => d.groundwater_stage_pct !== null || d.nsdp_per_capita_inr !== null)
  .map((d) => d.id)
