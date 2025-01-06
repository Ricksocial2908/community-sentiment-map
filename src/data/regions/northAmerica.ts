import { virginiaHotspot, getVirginiaDetailedInfo } from './north-america/virginia';
import { oregonHotspot, getOregonDetailedInfo } from './north-america/oregon';
import { canadaHotspot, getCanadaDetailedInfo } from './north-america/canada';

export const northAmericaHotspots = [
  virginiaHotspot,
  oregonHotspot,
  canadaHotspot
];

export { getVirginiaDetailedInfo, getOregonDetailedInfo };