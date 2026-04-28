// ============================================================================
// Break Simulator V2 — deterministic impact coefficients
// ----------------------------------------------------------------------------
// Each lever defines how a shock propagates across the 13 pillars, which
// districts take the heaviest hit, and a GDP/jobs-at-risk footprint.
//
// V2 schema additions vs V1:
//   - derivation: per-pillar { factors, formula, result } - "Why this %?"
//   - affectedPopulations: named groups + headcount + ethnicity
//   - affectedDistricts: name + reason (not just a list)
//   - cascadeSteps: 4-7 step time-bucketed chain with citations
//   - historicalAnalogue: a real past incident with date + sources
//   - timeToFailure: human-readable buffer description
//   - sources: minimum 3 per lever
//
// All numbers are anchored to real, cited sources. These are upper-bound
// stress-test estimates - the simulator explicitly disclaims that on-page
// as a "break model", not a forecast.
//
// See `simulatorTypes.js` for the JSDoc shape.
// ============================================================================

import { GROUP_A_LEVERS } from './_fragments/groupA_materials.js'
import { GROUP_B_LEVERS } from './_fragments/groupB_physical.js'
import { GROUP_C_LEVERS } from './_fragments/groupC_human.js'
import { GROUP_D_LEVERS, PRESETS_V2 } from './_fragments/groupD_frontier_and_presets.js'

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

export const LEVER_GROUPS = {
  materials: { label: 'Material Flows', short: 'MAT' },
  physical: { label: 'Physical Systems', short: 'PHY' },
  human: { label: 'Human Capital', short: 'HUM' },
  frontier: { label: 'Frontier', short: 'FRO' },
}

/** @type {import('./simulatorTypes').Lever[]} */
export const LEVERS = [
  ...GROUP_A_LEVERS,
  ...GROUP_B_LEVERS,
  ...GROUP_C_LEVERS,
  ...GROUP_D_LEVERS,
]

export const PRESETS = PRESETS_V2

// Quick lookup for engine + UI
const LEVER_BY_ID = Object.fromEntries(LEVERS.map((l) => [l.id, l]))
export function getLeverById(id) { return LEVER_BY_ID[id] }

// ----------------------------------------------------------------------------
// Education-cascade narratives (surfaced via EducationCascadePanel - NOT a lever)
// Triggered when diamond-export-collapse, saurashtra-reverse-migration, or
// migrant-violence are active.
// ----------------------------------------------------------------------------
export const EDUCATION_CASCADE_NARRATIVES = [
  {
    id: 'surat-slc-pipeline',
    title: 'Surat SLC pipeline',
    triggers: ['diamond-export-collapse', 'saurashtra-reverse-migration'],
    headline: '2,356 SLCs Nov 2024 - May 2025',
    body: 'Surat Municipal Corporation logged 2,356 School Leaving Certificates between Nov 2024 and May 2025 (SMC School Board Chair Kapadiya). Varachha alone: 817 SLCs from 46 schools. Diamond-worker income evaporates -> rent + school fees first cuts -> child pulled from English-medium private, then govt school -> family decamps to Saurashtra ancestral village. ~200 are Class 9-10 children losing the academic year mid-stream.',
    affected: { label: 'School-going children of diamond polishers at risk', headcount: 280000 },
    sources: [
      { title: 'Diamond recession hits Surat - 600 students drop out (Education Post)', url: 'https://educationpost.in/news/education/diamond-recession-hits-surat-over-600-students-drop-out-as-families-move-back-to-saurashtra' },
      { title: 'US tariffs ruin education dreams (Al Jazeera)', url: 'https://www.aljazeera.com/economy/2025/12/9/us-tariffs-ruin-education-dreams-for-children-in-indias-diamond-hub' },
    ],
  },
  {
    id: 'jagdish-babariya',
    title: 'Documented case: Jagdish Babariya (14)',
    triggers: ['diamond-export-collapse', 'saurashtra-reverse-migration'],
    headline: 'Surat 4 km -> Tulshishyam village 45 km -> dropout in a month',
    body: 'Jagdishbhai Babariya pulled his son Jagdish (14) from a Surat school 4 km away after diamond-unit closure. The Tulshishyam village school was 45 km by bus. Jagdish dropped out within a month. This pattern - Class 9-10 children losing the academic year mid-stream - is documented across Bhavnagar, Amreli, Junagadh, Gir Somnath, Rajkot.',
    affected: { label: 'Documented case', headcount: 1 },
    sources: [
      { title: 'Surat diamond hub workers return villages - dropouts (The Federal)', url: 'https://thefederal.com/category/the-eighth-column/surat-diamond-hub-workers-jobless-return-villages-school-dropouts-increase-192807' },
    ],
  },
  {
    id: 'migrant-children-panic',
    title: 'Migrant children pulled in panic',
    triggers: ['migrant-violence'],
    headline: '~25% migrant share in Surat govt schools',
    body: 'When the migrant-violence lever fires, migrant children are pulled from Surat municipal schools within a single news cycle. ~25% of Surat govt-school enrolment is migrant. The 2018 precedent: 50k families left in 12-14 months. Children re-enrol in UP/Bihar village schools where re-entry mid-session typically means losing the year.',
    affected: { label: 'Migrant children at risk in Surat schools', headcount: 250000 },
    sources: [
      { title: 'Bihars politicians silent on migrant exodus (Scroll.in)', url: 'https://scroll.in/article/898062/they-have-no-solution-why-bihars-politicians-arent-speaking-up-on-migrant-exodus-from-gujarat' },
    ],
  },
  {
    id: 'orphaned-by-suicide',
    title: '71 suicides -> ~150-200 children orphaned',
    triggers: ['diamond-export-collapse'],
    headline: 'Diamond Workers Union Gujarat (Bhavesh Tank)',
    body: 'Diamond Workers Union Gujarat (Bhavesh Tank) documented 65 suicides in 18 months and 100 across 24 months - 71 confirmed at the time of writing. Estimated 150-200 children left orphaned or half-orphaned. 1,600+ helpline calls Jun-Aug 2025 alone.',
    affected: { label: 'Children orphaned / half-orphaned', headcount: 175 },
    sources: [
      { title: 'Quiet tragedy of Surats diamond industry (Rapaport)', url: 'https://rapaport.com/magazine-article/the-quiet-tragedy-of-surats-diamond-industry/' },
    ],
  },
]

// ----------------------------------------------------------------------------
// Impact engine - deterministic, purely functional. No randomness.
// ----------------------------------------------------------------------------

/** Default lever state (all zero / off). */
export function defaultLeverState() {
  const state = {}
  for (const lever of LEVERS) {
    state[lever.id] = lever.type === 'toggle' ? false : 0
  }
  return state
}

/** Numeric magnitude for a lever at a given value (0-1 normalised for sliders, 0|1 for toggles). */
function leverMagnitude(lever, value) {
  if (lever.type === 'toggle') return value ? 1 : 0
  const v = Number(value) || 0
  const max = lever.max || 100
  // For sliders, normalise to 0-1 over the lever's own range so derivation.result
  // (which represents "% at 100% pull") can be linearly interpolated.
  return max > 0 ? Math.max(0, v / max) : 0
}

/** Raw lever magnitude in user-facing units (for gdp/jobs scaling and contribution). */
function rawMagnitude(lever, value) {
  if (lever.type === 'toggle') return value ? 1 : 0
  return Number(value) || 0
}

/**
 * Compute aggregate impact from a lever state.
 *
 * Returns:
 *   - pillarPercent: { pillarId: 0-100 } - aggregate disruption per pillar
 *   - districtScore: { districtName: 0-100 } - heat-map intensity
 *   - gdpCrore, jobsAtRisk - scalar headline numbers
 *   - activeLevers: [{ id, value, label }]
 *   - populationsAffected: AffectedPopulation[] - de-duplicated, sorted by headcount
 *   - historicalActive: HistoricalAnalogue[] - one per active lever
 *   - cascadeActive: { leverId, label, steps }[] - cascade chains for active levers
 *   - derivationByPillar: { pillarId: { result, contributors: [{ leverId, label, factors, formula, result }] } }
 *   - leverContributions: { districtName: [{ leverId, label, contribution }] } - top-3 attributable per district
 *   - educationNarratives: EDUCATION_CASCADE_NARRATIVES filtered by active triggers
 */
export function computeImpact(state) {
  const pillarRaw = Object.fromEntries(PILLAR_IDS.map((p) => [p, 0]))
  const districtRaw = {}
  const districtContrib = {}
  let gdpCrore = 0
  let jobsAtRisk = 0
  const activeLevers = []
  const populationsAffected = []
  const historicalActive = []
  const cascadeActive = []
  const derivationByPillar = Object.fromEntries(PILLAR_IDS.map((p) => [p, { result: 0, contributors: [] }]))
  const activeIds = new Set()

  for (const d of GUJARAT_DISTRICTS) {
    districtRaw[d] = 0
    districtContrib[d] = []
  }

  for (const lever of LEVERS) {
    const value = state[lever.id]
    const norm = leverMagnitude(lever, value)
    if (norm <= 0) continue
    const raw = rawMagnitude(lever, value)
    activeLevers.push({ id: lever.id, value, label: lever.label })
    activeIds.add(lever.id)

    // Pillar aggregate via legacy pillarImpacts (per-unit slope)
    for (const [pillar, coef] of Object.entries(lever.pillarImpacts || {})) {
      pillarRaw[pillar] = (pillarRaw[pillar] || 0) + coef * raw
    }

    // V2 derivation: contribute "% at 100% pull * normalised magnitude" per pillar
    if (lever.derivation) {
      for (const [pillar, der] of Object.entries(lever.derivation)) {
        if (!derivationByPillar[pillar]) continue
        const contribution = (der.result || 0) * norm
        derivationByPillar[pillar].contributors.push({
          leverId: lever.id,
          label: lever.label,
          factors: der.factors || [],
          formula: der.formula || '',
          result: der.result || 0,
          contribution: Math.round(contribution),
        })
      }
    }

    // District spread: primary districts (named by lever) take the full hit;
    // statewide ripple at ~15% of primary weight for non-primary districts.
    const primary = new Set(lever.districts || [])
    const primaryWeight = lever.type === 'toggle' ? 60 : raw * 2
    const rippleWeight = primaryWeight * 0.15
    for (const district of GUJARAT_DISTRICTS) {
      const w = primary.has(district) ? primaryWeight : rippleWeight
      districtRaw[district] += w
      if (w > 0) {
        districtContrib[district].push({
          leverId: lever.id,
          label: lever.label,
          contribution: Math.round(w),
        })
      }
    }

    gdpCrore += (lever.gdpCrorePerUnit || 0) * raw
    jobsAtRisk += (lever.jobsPerUnit || 0) * raw

    if (Array.isArray(lever.affectedPopulations)) {
      for (const pop of lever.affectedPopulations) {
        populationsAffected.push({ ...pop, leverId: lever.id, leverLabel: lever.label })
      }
    }
    if (lever.historicalAnalogue) {
      historicalActive.push({ ...lever.historicalAnalogue, leverId: lever.id, leverLabel: lever.label })
    }
    if (Array.isArray(lever.cascadeSteps) && lever.cascadeSteps.length > 0) {
      cascadeActive.push({ leverId: lever.id, label: lever.label, steps: lever.cascadeSteps })
    }
  }

  const pillarPercent = {}
  for (const [pillar, raw] of Object.entries(pillarRaw)) {
    pillarPercent[pillar] = Math.min(100, Math.round(raw))
  }
  // V2: when a pillar has derivation contributors, prefer the derivation sum
  // (capped) so the "Why this %?" math reconciles with the headline figure.
  for (const pillar of PILLAR_IDS) {
    const entry = derivationByPillar[pillar]
    if (entry.contributors.length > 0) {
      const sum = entry.contributors.reduce((acc, c) => acc + c.contribution, 0)
      entry.result = Math.min(100, Math.round(sum))
      pillarPercent[pillar] = entry.result
    } else {
      entry.result = pillarPercent[pillar] || 0
    }
  }

  const districtScore = {}
  const leverContributions = {}
  for (const [district, raw] of Object.entries(districtRaw)) {
    districtScore[district] = Math.min(100, Math.round(raw))
    const contribs = districtContrib[district]
      .sort((a, b) => b.contribution - a.contribution)
      .slice(0, 3)
    leverContributions[district] = contribs
  }

  // Sort + de-dupe populations by leverId+label so a multi-lever scenario
  // doesn't double-count the same cohort (e.g. Surat polishers).
  const popSeen = new Set()
  const populationsDedup = []
  populationsAffected
    .sort((a, b) => (b.headcount || 0) - (a.headcount || 0))
    .forEach((p) => {
      const key = `${p.label}|${p.locality || ''}`
      if (popSeen.has(key)) return
      popSeen.add(key)
      populationsDedup.push(p)
    })

  const educationNarratives = EDUCATION_CASCADE_NARRATIVES.filter((n) =>
    n.triggers.some((t) => activeIds.has(t)),
  )

  return {
    pillarPercent,
    districtScore,
    gdpCrore: Math.round(gdpCrore),
    jobsAtRisk: Math.round(jobsAtRisk),
    activeLevers,
    populationsAffected: populationsDedup,
    historicalActive,
    cascadeActive,
    derivationByPillar,
    leverContributions,
    educationNarratives,
  }
}

/** Apply a preset on top of a fresh default state. */
export function applyPreset(state, presetId) {
  const preset = PRESETS.find((p) => p.id === presetId)
  if (!preset) return state
  const next = defaultLeverState()
  for (const [leverId, value] of Object.entries(preset.values || {})) {
    const lever = LEVER_BY_ID[leverId]
    if (!lever) continue
    if (lever.type === 'toggle') {
      next[leverId] = Boolean(value)
    } else {
      const max = lever.max || 100
      next[leverId] = Math.max(0, Math.min(max, Number(value) || 0))
    }
  }
  return next
}
