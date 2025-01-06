import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Hotspot } from '@/lib/types';

interface UseMapboxProps {
  container: React.RefObject<HTMLDivElement>;
  hotspots: Hotspot[];
  onHotspotClick: (hotspot: Hotspot) => void;
  mapboxToken: string;
}

export const useMapbox = ({ container, hotspots, onHotspotClick, mapboxToken }: UseMapboxProps) => {
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!container.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: container.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [0, 20],
      pitch: 45,
      minZoom: 1,
      maxZoom: 18,
      dragRotate: true,
      touchZoomRotate: true,
      doubleClickZoom: true,
      scrollZoom: {
        around: 'center'
      }
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
      }),
      'top-right'
    );

    if (map.current.touchZoomRotate) {
      map.current.touchZoomRotate.enable();
    }

    map.current.on('style.load', () => {
      if (!map.current) return;
      
      setMapLoaded(true);
      
      map.current.setFog({
        color: 'rgb(23, 23, 23)',
        'high-color': 'rgb(32, 32, 42)',
        'horizon-blend': 0.2,
      });

      initializeHotspots();
    });

    const initializeHotspots = () => {
      if (!map.current) return;

      // Add a larger glow effect layer
      map.current.addLayer({
        id: 'hotspots-glow',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: hotspots.map(hotspot => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: hotspot.coordinates
              },
              properties: {
                id: hotspot.id,
                name: hotspot.name
              }
            }))
          }
        },
        paint: {
          'circle-radius': 20,
          'circle-color': '#F97316',
          'circle-opacity': 0.2,
          'circle-blur': 1
        }
      });

      // Main hotspot layer
      map.current.addLayer({
        id: 'hotspots',
        type: 'circle',
        source: 'hotspots-glow',
        paint: {
          'circle-radius': 12,
          'circle-color': '#F97316',
          'circle-opacity': 0.8,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#FEC6A1',
          'circle-stroke-opacity': 0.6
        }
      });

      // Hover effect layer
      map.current.addLayer({
        id: 'hotspots-hover',
        type: 'circle',
        source: 'hotspots-glow',
        paint: {
          'circle-radius': 16,
          'circle-color': '#F97316',
          'circle-opacity': 0,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#FEC6A1',
          'circle-stroke-opacity': 0
        },
        filter: ['==', 'id', '']
      });

      setupEventListeners();
    };

    const setupEventListeners = () => {
      if (!map.current) return;

      map.current.on('mousemove', 'hotspots', (e) => {
        if (!map.current || !e.features?.[0]) return;
        
        map.current.getCanvas().style.cursor = 'pointer';
        map.current.setFilter('hotspots-hover', ['==', 'id', e.features[0].properties.id]);

        const feature = e.features[0];
        const coords = (feature.geometry as any).coordinates;
        map.current.easeTo({
          center: coords,
          duration: 800,
          zoom: Math.min(map.current.getZoom() + 0.5, 8),
          easing: t => t * (2 - t)
        });
      });

      map.current.on('mouseleave', 'hotspots', () => {
        if (!map.current) return;
        
        map.current.setFilter('hotspots-hover', ['==', 'id', '']);
        map.current.getCanvas().style.cursor = '';
      });

      map.current.on('click', 'hotspots', (e) => {
        if (!e.features?.[0]) return;
        
        const id = e.features[0].properties.id;
        const hotspot = hotspots.find(h => h.id === id);
        const coords = (e.features[0].geometry as any).coordinates;
        
        if (hotspot) {
          map.current?.flyTo({
            center: coords,
            zoom: 6,
            duration: 1500,
            essential: true
          });
          
          onHotspotClick(hotspot);
        }
      });
    };

    return () => {
      map.current?.remove();
    };
  }, [hotspots, onHotspotClick, mapboxToken]);

  return { mapLoaded };
};