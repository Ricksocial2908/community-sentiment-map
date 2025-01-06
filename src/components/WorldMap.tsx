import { useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Hotspot } from '@/lib/types';
import { useMapbox } from '@/hooks/useMapbox';
import MapOverlay from './MapOverlay';

interface WorldMapProps {
  hotspots: Hotspot[];
  onHotspotClick: (hotspot: Hotspot) => void;
  mapboxToken: string;
}

export const WorldMap = ({ hotspots, onHotspotClick, mapboxToken }: WorldMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { mapLoaded } = useMapbox({
    container: mapContainer,
    hotspots,
    onHotspotClick,
    mapboxToken
  });

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />
      <MapOverlay />
    </div>
  );
};