// JSDoc typedefs for the V2 Break Simulator schema.
// No runtime cost; imported only as `@type {import('./simulatorTypes').Lever}`.

/**
 * @typedef {'infrastructure'|'energy'|'water'|'labor'|'economics'|'materials'|'education'|'environment'|'migrant-discrimination'|'agriculture'|'greentech'|'chemical-governance'|'digital-sovereignty'} PillarId
 */

/** @typedef {'materials'|'physical'|'human'|'frontier'} LeverGroup */
/** @typedef {'critical'|'high'|'medium'} Severity */
/** @typedef {'saurashtra-patel'|'up-bihar-migrant'|'odia-migrant'|'rajasthani'|'gujarati-general'|'tribal-mp'|'maldhari'|'national'|'other'} Ethnicity */

/**
 * @typedef {Object} DerivationFactor
 * @property {string} label
 * @property {number} value
 * @property {string} [cite]
 */

/**
 * @typedef {Object} PillarDerivation
 * @property {DerivationFactor[]} factors
 * @property {string} formula
 * @property {number} result   // % at 100% lever pull
 */

/**
 * @typedef {Object} AffectedPopulation
 * @property {string} label
 * @property {number} headcount
 * @property {string} [locality]
 * @property {Ethnicity} [ethnicity]
 * @property {string} [cite]
 */

/**
 * @typedef {Object} CascadeStep
 * @property {number} n
 * @property {string} timeBucket
 * @property {string} text
 * @property {string} [cite]
 */

/**
 * @typedef {Object} HistoricalAnalogue
 * @property {string} title
 * @property {string} date
 * @property {string} summary
 * @property {{label: string, value: string}} [metric]
 * @property {Array<{title: string, url: string}>} sources
 */

/**
 * @typedef {Object} Lever
 * @property {string} id
 * @property {LeverGroup} group
 * @property {'primary'|'secondary'} tier
 * @property {Severity} severity
 * @property {string} label
 * @property {string} description
 * @property {'slider'|'toggle'} type
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [step]
 * @property {string} [unit]
 * @property {number|boolean} defaultValue
 * @property {{title: string, url: string}} source
 * @property {Partial<Record<PillarId, PillarDerivation>>} derivation
 * @property {AffectedPopulation[]} affectedPopulations
 * @property {Array<{name: string, reason: string}>} affectedDistricts
 * @property {CascadeStep[]} cascadeSteps
 * @property {HistoricalAnalogue} historicalAnalogue
 * @property {string} [timeToFailure]
 * @property {PillarId[]} [pillarsTouched]
 * @property {Partial<Record<PillarId, number>>} pillarImpacts
 * @property {string[]} districts
 * @property {number} gdpCrorePerUnit
 * @property {number} jobsPerUnit
 * @property {string} [pendingData]
 * @property {Array<{title: string, url: string}>} sources
 */

export {}
