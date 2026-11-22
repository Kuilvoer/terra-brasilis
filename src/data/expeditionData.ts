import type { RegionId, RegionData } from '../types';
import { brazilData } from './brazilData';

export const EXPEDITION_ORDER: RegionId[] = [
  'north',
  'northeast',
  'center-west',
  'southeast',
  'south'
];

export const REGIONS_LIST: RegionData[] = EXPEDITION_ORDER.map(
  (id) => brazilData.regions[id]
);
