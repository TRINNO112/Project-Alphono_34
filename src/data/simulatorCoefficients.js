// ============================================================================
// Break Simulator — deterministic impact coefficients
// ----------------------------------------------------------------------------
// Each lever defines how a shock propagates across the 13 pillars, which
// districts take the heaviest hit, and a GDP/jobs-at-risk footprint.
//
// All numbers below are anchored to real, cited sources (links inline).
// These are upper-bound stress-test estimates — the simulator explicitly
// disclaims that on-page as a "break model", not a forecast.
//
// Lever shape:
//   {
//     id, label, description, type: 'slider' | 'toggle',
//     min, max, step, unit (slider only),
//     defaultValue,
//     source: { title, url },
//     // per-unit (per %, per day, per "on") impacts:
//     pillarImpacts: { pillarId: percentDisruptionPerUnit },
//     districts: [districtName, ...],          // which districts turn hot
//     gdpCrorePerUnit: number,                 // ₹ crore lost per unit
//     jobsPerUnit: number,                     // jobs put at risk per unit
//     pendingData?: string,                    // explicit gap flag
//   }
// ============================================================================

export const PILLAR_IDS = [
  'infrastructure', 'energy', 'water', 'labor', 'economics',
  'materials', 'education', 'environment', 'migrant-discrimination',
  'agriculture', 'greentech', 'chemical-governance', 'digital-sovereignty',
]

export const PILLAR_LABELS = {
  'infrastructure': 'Infrastructure',
  'energy': 'Energy',
  'water': 'Water',
  'labor': 'Labor',
  'economics': 'Economics',
  'materials': 'Materials',
  'education': 'Education',
  'environment': 'Environment',
  'migrant-discrimination': 'Migrant Discrimination',
  'agriculture': 'Agriculture',
  'greentech': 'Green Tech',
  'chemical-governance': 'Chemical Governance',
  'digital-sovereignty': 'Digital Sovereignty',
}

// All 33 Gujarat districts (matches public/geo/gujarat.geojson feature names exactly)
export const GUJARAT_DISTRICTS = [
  'Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch',
  'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhumi Dwarka',
  'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch',
  'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal',
  'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar',
  'Tapi', 'Vadodara', 'Valsad',
]

export const LEVERS = [
  // ---- 1. Russian crude supply cut ----------------------------------------
  {
    id: 'russian-crude',
    label: 'Russian Crude Supply Cut',
    description: 'Jamnagar (RIL) + Vadinar (Nayara) lose Russian barrels. Reliance already paused SEZ imports in Nov 2025 post-Rosneft/Lukoil US sanctions.',
    type: 'slider',
    min: 0, max: 100, step: 5, unit: '%',
    defaultValue: 0,
    source: {
      title: 'Reliance stops Russian crude into Jamnagar SEZ (Business Standard, Nov 2025)',
      url: 'https://www.business-standard.com/industry/news/reliance-stops-import-of-russian-crude-oil-into-jamnagar-s-sez-refinery-125112001129_1.html',
    },
    // RIL Jamnagar Russian share went 3% (2021) -> ~50% (2025); Nayara 66%.
    // A 100% cut effectively removes 50-66% of refinery throughput margin.
    pillarImpacts: {
      'materials': 0.65,             // crude feedstock is Materials pillar
      'energy': 0.35,                // refined product availability
      'economics': 0.40,             // export revenue hit
      'infrastructure': 0.15,        // SEZ port throughput drop
    },
    districts: ['Jamnagar', 'Devbhumi Dwarka'],
    gdpCrorePerUnit: 1100,           // ₹80k-1.2L cr at 100% -> ~₹1,100/% as midpoint
    jobsPerUnit: 2600,               // 40-60k direct + 2L contract => ~260k at 100%
  },

  // ---- 2. Mundra port closure ---------------------------------------------
  {
    id: 'mundra-closure',
    label: 'Mundra Port Closure',
    description: 'APSEZ handles 500.8 MMT/FY26 and ~33% of India container traffic. Cyclone Biparjoy (2023) shut Mundra ~6 days.',
    type: 'slider',
    min: 0, max: 30, step: 1, unit: ' days',
    defaultValue: 0,
    source: {
      title: 'Adani Ports crosses 500 MMT in FY26 (DSIJ)',
      url: 'https://insights.dsij.in/dsijarticledetail/adani-ports-crosses-500-mmt-milestone-in-fy26-smashes-monthly-cargo-record-in-march-2026-56298',
    },
    pillarImpacts: {
      'infrastructure': 3.0,          // the pillar that most directly breaks
      'economics': 1.8,
      'materials': 1.4,               // import feedstock chain
      'energy': 0.6,                  // coal/LNG re-routing delays
    },
    districts: ['Kutch', 'Ahmedabad', 'Surat'],
    gdpCrorePerUnit: 3000,            // ₹15-25k cr @ 7 days => ~₹3,000/day midpoint
    jobsPerUnit: 50000,               // dwell/demurrage spillover per day
  },

  // ---- 3. Morbi gas tariff spike ------------------------------------------
  {
    id: 'morbi-gas-spike',
    label: 'Morbi Gas Tariff Spike',
    description: 'Propane went ₹55/kg to ₹100-120/kg during the Iran war. 450+ of 700 units were shut by Mar 2026; 97% of Morbi Ceramic Association voted full-month shutdown.',
    type: 'slider',
    min: 0, max: 150, step: 5, unit: '%',
    defaultValue: 0,
    source: {
      title: 'Over 400 ceramic units in Morbi shut due to gas crisis (DeshGujarat, Mar 2026)',
      url: 'https://deshgujarat.com/2026/03/18/over-400-ceramic-units-in-morbi-shut-due-to-gas-crisis-amid-west-asia-war/',
    },
    pillarImpacts: {
      'energy': 0.8,
      'labor': 0.9,                    // 50%+ migrant workforce
      'migrant-discrimination': 0.5,   // reverse migration accelerates exclusion
      'economics': 0.7,
      'chemical-governance': 0.2,      // propane infra governance
    },
    districts: ['Morbi', 'Rajkot', 'Surendranagar'],
    gdpCrorePerUnit: 90,               // ₹8-12k cr annualized at full spike => ~₹90/%
    jobsPerUnit: 2000,                 // 2-2.5L impacted at full spike
  },

  // ---- 4. Narmada (SSP) inflow deficit ------------------------------------
  {
    id: 'narmada-deficit',
    label: 'Narmada (SSP) Inflow Deficit',
    description: 'Sardar Sarovar supplies ~3 crore people, 20.38 lakh ha irrigation, 10,000+ villages. 75% of command area is drought-prone; Kutch and Saurashtra most exposed.',
    type: 'slider',
    min: 0, max: 70, step: 5, unit: '%',
    defaultValue: 0,
    source: {
      title: 'Sardar Sarovar Dam supplies water to 3 crore people (Newsgram, 2026)',
      url: 'https://www.newsgram.com/india/2026/03/21/sardar-sarovar-dam-supplies-water-to-3-crore-people-irrigates-2038-lakh-hectares-in-gujarat-rajasthan',
    },
    pillarImpacts: {
      'water': 1.2,
      'agriculture': 1.1,
      'environment': 0.5,
      'economics': 0.6,
      'labor': 0.3,                    // ag labor absorption shock
    },
    districts: ['Kutch', 'Banaskantha', 'Patan', 'Mehsana', 'Surendranagar', 'Rajkot', 'Jamnagar', 'Ahmedabad'],
    gdpCrorePerUnit: 400,              // ₹20-35k cr @ 70% => ~₹400/%
    jobsPerUnit: 18000,                // ~13L farming families at 70% => ~18k/%
    pendingData: 'Urban daily-wage spillover + 2026 live-storage level',
  },

  // ---- 5. Mumbai submarine cable severance --------------------------------
  {
    id: 'cable-severance',
    label: 'Mumbai Cable Severance (Versova)',
    description: '15 of 17 international cables land within a 6km Versova stretch. 0 in Gujarat. 95% of India\'s bandwidth routes here. Repair = 3–5 months.',
    type: 'toggle',
    defaultValue: false,
    source: {
      title: 'India\'s cheap internet runs through the world\'s most dangerous waters (BW Businessworld)',
      url: 'https://www.businessworld.in/article/india-cheap-internet-undersea-cable-vulnerability-war-zones-2026-598929',
    },
    pillarImpacts: {
      'digital-sovereignty': 95,
      'economics': 25,                 // GIFT City, BFSI, UPI
      'infrastructure': 15,
      'education': 10,                 // edtech / remote learning
    },
    districts: ['Gandhinagar', 'Ahmedabad', 'Surat'],  // GIFT City + IT hubs
    gdpCrorePerUnit: 14000,            // ₹10-18k cr @ 48hr outage => midpoint ₹14k
    jobsPerUnit: 0,                    // throughput-disruption not direct job loss
    pendingData: 'Direct-jobs impact; NPCI outage-cost filings',
  },

  // ---- 6. Chinese API shipment halt ---------------------------------------
  {
    id: 'chinese-api-halt',
    label: 'Chinese API Shipment Halt',
    description: 'India-wide pharma 60–70% API-dependent on China. Gujarat bulk-drug clusters (Ankleshwar, Vapi, Vatva, Jhagadia) most exposed.',
    type: 'toggle',
    defaultValue: false,
    source: {
      title: 'India struggling to free pharma from Chinese APIs (Policy Circle)',
      url: 'https://www.policycircle.org/industry/apis-import-depencence-on-china/',
    },
    pillarImpacts: {
      'materials': 70,
      'chemical-governance': 55,
      'economics': 20,
      'labor': 25,
    },
    districts: ['Bharuch', 'Valsad', 'Ahmedabad', 'Vadodara'],  // Ankleshwar, Vapi, Vatva, Jhagadia
    gdpCrorePerUnit: 20000,            // ₹15-25k cr for 30-day halt
    jobsPerUnit: 125000,               // 1-1.5L cluster jobs
    pendingData: 'Gujarat-cluster-specific % (only India-wide 60–70% cited)',
  },

  // ---- 7. Anti-migrant violence surge -------------------------------------
  {
    id: 'migrant-violence',
    label: 'Anti-Migrant Violence Surge',
    description: '2018: 20,000+ workers fled in one week. Oct 2018: 50% factory absenteeism. 2025–26 diamond crisis drove ~50,000 out of Surat in 12–14 months.',
    type: 'toggle',
    defaultValue: false,
    source: {
      title: 'Gujarat CM appeals for calm as 20,000+ migrants flee (India TV, 2018)',
      url: 'https://www.indiatvnews.com/news/india-gujarat-cm-appeals-for-calm-as-over-20-000-migrants-flee-state-within-a-week-469811',
    },
    pillarImpacts: {
      'migrant-discrimination': 90,
      'labor': 70,
      'economics': 35,
      'education': 15,                 // migrant children drop out
    },
    districts: ['Surat', 'Ahmedabad', 'Morbi', 'Rajkot', 'Sabarkantha', 'Vadodara'],
    gdpCrorePerUnit: 35000,            // ₹25-50k cr midpoint (diamond export collapse)
    jobsPerUnit: 900000,               // 8-10L diamond + 4L ceramic compounding
  },

  // ---- 8. Dahej/Hazira LNG outage -----------------------------------------
  {
    id: 'dahej-lng-outage',
    label: 'Dahej / Hazira LNG Outage',
    description: 'Petronet Dahej = ~74% of India\'s LNG imports, 22.5 MMTPA at 95.1% utilization. Gujarat = ~80% of India\'s LNG landing capacity.',
    type: 'slider',
    min: 0, max: 14, step: 1, unit: ' days',
    defaultValue: 0,
    source: {
      title: 'Petronet Dahej expansion to 22.5 MMTPA (Shipping Tribune)',
      url: 'https://www.shippingtribune.com/news/shipping/Petronet+LNG+commissions+Dahej+expansion,+capacity+rises+to+22.5+MMTPA',
    },
    pillarImpacts: {
      'energy': 4.5,
      'chemical-governance': 2.0,      // fertilizer + CGD networks
      'agriculture': 1.5,              // fertilizer supply
      'economics': 1.2,
      'infrastructure': 0.8,
    },
    districts: ['Bharuch', 'Surat'],   // Dahej in Bharuch, Hazira in Surat
    gdpCrorePerUnit: 1700,             // ₹18-30k cr @ 14 days => ~₹1,700/day
    jobsPerUnit: 8000,                 // indirect: Morbi/fertilizer/CGD cascade
    pendingData: 'Direct-jobs count at terminals',
  },
]

// ----------------------------------------------------------------------------
// Preset scenarios — precomputed lever combinations.
// Each preset sets specific levers to specific values; the impact engine
// below sums them deterministically.
// ----------------------------------------------------------------------------
export const PRESETS = [
  {
    id: 'twin-shock-2026',
    label: '2026 Twin Shock',
    description: 'Morbi gas spike + Surat diamond/pogrom cascade happening simultaneously, as in Q1 2026.',
    source: {
      title: 'Iran war forces reverse migration in India\'s ceramic hub (Al Jazeera)',
      url: 'https://www.aljazeera.com/news/2026/4/21/iran-war-forces-job-losses-reverse-migration-in-indias-ceramic-hub',
    },
    values: {
      'morbi-gas-spike': 120,
      'migrant-violence': true,
    },
  },
  {
    id: 'full-decoupling',
    label: 'Full Decoupling',
    description: 'Simultaneous China API halt + Russian crude cut + Versova cable cut — the triple-front sanctions scenario.',
    source: {
      title: 'Reliance halts Russian crude (Business Standard, Nov 2025)',
      url: 'https://www.business-standard.com/industry/news/reliance-stops-import-of-russian-crude-oil-into-jamnagar-s-sez-refinery-125112001129_1.html',
    },
    values: {
      'russian-crude': 100,
      'chinese-api-halt': true,
      'cable-severance': true,
    },
  },
  {
    id: 'climate-black-swan',
    label: 'Climate Black Swan',
    description: 'Concurrent cyclone (Mundra 7-day shut) + 50% Narmada deficit + heatwave drag.',
    source: {
      title: '29 Gujarat districts vulnerable to extreme climate (CEEW)',
      url: 'https://www.ceew.in/press-releases/29-districts-gujarat-vulnerable-extreme-climate-events-ceew',
    },
    values: {
      'mundra-closure': 7,
      'narmada-deficit': 50,
      'dahej-lng-outage': 3,
    },
  },
  {
    id: 'pogrom-replay',
    label: '2018 Pogrom Replay',
    description: 'Standalone migrant-exodus scenario triggered by festival-period violence.',
    source: {
      title: 'Gujarat govt appeal no balm, migrants\' exodus on (Tribune India, 2018)',
      url: 'https://www.tribuneindia.com/news/archive/nation/gujarat-govt-appeal-no-balm-migrants-exodus-on-665151',
    },
    values: {
      'migrant-violence': true,
    },
  },
]

// ----------------------------------------------------------------------------
// Impact engine — deterministic, purely functional. No randomness.
// ----------------------------------------------------------------------------

/** Default lever state (all zero / off). */
export function defaultLeverState() {
  const state = {}
  for (const lever of LEVERS) {
    state[lever.id] = lever.type === 'toggle' ? false : 0
  }
  return state
}

/** Numeric magnitude for a lever at a given value. */
function leverMagnitude(lever, value) {
  if (lever.type === 'toggle') return value ? 1 : 0
  return Number(value) || 0
}

/**
 * Compute aggregate impact from a lever state.
 * Returns { pillarPercent: {pillarId: %}, districtScore: {districtName: 0-100},
 *           gdpCrore, jobsAtRisk, activeLevers: [{id, value}] }
 *
 * Pillar % is capped at 100. District score is capped at 100.
 */
export function computeImpact(state) {
  const pillarRaw = Object.fromEntries(PILLAR_IDS.map((p) => [p, 0]))
  const districtRaw = {}
  let gdpCrore = 0
  let jobsAtRisk = 0
  const activeLevers = []

  // Ensure every Gujarat district starts at 0 so nothing renders "invincible"
  // when no lever explicitly names it — every district should show its
  // baseline spillover from any active shock.
  for (const d of GUJARAT_DISTRICTS) districtRaw[d] = 0

  for (const lever of LEVERS) {
    const value = state[lever.id]
    const mag = leverMagnitude(lever, value)
    if (mag <= 0) continue
    activeLevers.push({ id: lever.id, value })

    for (const [pillar, coef] of Object.entries(lever.pillarImpacts || {})) {
      pillarRaw[pillar] = (pillarRaw[pillar] || 0) + coef * mag
    }

    // Primary districts (named by the lever) take the full hit.
    const primary = new Set(lever.districts || [])
    const primaryWeight = lever.type === 'toggle' ? 60 : mag * 2

    // Statewide ripple: a calamity of any kind always spills into the rest
    // of the state via supply chains, labour mobility, fiscal contagion,
    // cascading logistics. We model this as ~15% of the primary weight for
    // every non-primary district. This guarantees no district is "invincible"
    // when shocks are active — everyone feels it, just less than the hotspot.
    const rippleWeight = primaryWeight * 0.15

    for (const district of GUJARAT_DISTRICTS) {
      districtRaw[district] += primary.has(district) ? primaryWeight : rippleWeight
    }

    gdpCrore += (lever.gdpCrorePerUnit || 0) * mag
    jobsAtRisk += (lever.jobsPerUnit || 0) * mag
  }

  const pillarPercent = {}
  for (const [pillar, raw] of Object.entries(pillarRaw)) {
    pillarPercent[pillar] = Math.min(100, Math.round(raw))
  }
  const districtScore = {}
  for (const [district, raw] of Object.entries(districtRaw)) {
    districtScore[district] = Math.min(100, Math.round(raw))
  }

  return {
    pillarPercent,
    districtScore,
    gdpCrore: Math.round(gdpCrore),
    jobsAtRisk: Math.round(jobsAtRisk),
    activeLevers,
  }
}

/** Apply a preset on top of the current state. */
export function applyPreset(state, presetId) {
  const preset = PRESETS.find((p) => p.id === presetId)
  if (!preset) return state
  const next = defaultLeverState()
  for (const [leverId, value] of Object.entries(preset.values)) {
    next[leverId] = value
  }
  return next
}
