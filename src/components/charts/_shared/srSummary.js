export function buildRankedSummary(data, valueSuffix = '') {
  if (!data?.length) return ''
  return data.map((d) => `${d.name}: ${d.value}${valueSuffix}`).join('; ') + '.'
}

export function buildSlopeSummary(start, end, unit = '') {
  return `${start.label} ${start.value}${unit} to ${end.label} ${end.value}${unit}.`
}

export function buildSegmentSummary(segments, unit = '') {
  return segments.map((s) => `${s.label} ${s.value}${unit}`).join('; ') + '.'
}

export function buildPairedSummary(data, aLabel, bLabel, unit = '') {
  return data.map((d) => `${d.name}: ${aLabel} ${d.a}${unit}, ${bLabel} ${d.b}${unit}`).join('; ') + '.'
}
