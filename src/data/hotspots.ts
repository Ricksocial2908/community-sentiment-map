import { Hotspot } from '../lib/types';
import { northAmericaHotspots } from './regions/northAmerica';
import { europeHotspots } from './regions/europe';
import { asiaPacificHotspots } from './regions/asiaPacific';
import { otherHotspots } from './regions/other';

export const hotspots: Hotspot[] = [
  ...northAmericaHotspots,
  ...europeHotspots,
  ...asiaPacificHotspots,
  ...otherHotspots
];