import { waterTimeSeries } from './waterTimeSeries'
import { energyTimeSeries } from './energyTimeSeries'
import { materialsTimeSeries } from './materialsTimeSeries'
import { agricultureTimeSeries } from './agricultureTimeSeries'
import { economicsTimeSeries } from './economicsTimeSeries'
import { laborTimeSeries } from './laborTimeSeries'
import { digitalTimeSeries } from './digitalTimeSeries'

// Per-pillar registry — `useYearData(pillar, metric)` resolves through here
export const TIME_SERIES = {
  water: waterTimeSeries,
  energy: energyTimeSeries,
  materials: materialsTimeSeries,
  agriculture: agricultureTimeSeries,
  economics: economicsTimeSeries,
  labor: laborTimeSeries,
  digital: digitalTimeSeries,
}

// Key events displayed as scrubber tick labels (year → short label)
export const YEAR_KEY_EVENTS = {
  2016: 'Demonetization',
  2017: 'GST launch',
  2018: 'Sabarkantha migrant pogrom',
  2019: 'Dholera SIR delays',
  2020: 'COVID migrant exodus',
  2021: 'Post-pandemic rebound',
  2022: 'Morbi bridge collapse',
  2023: 'Russian crude surge; diamond bust',
  2024: 'Diamond suicides peak',
  2025: 'Unseasonal rain farm crisis',
  2026: 'West Asia gas shock',
}
