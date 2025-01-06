import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Hotspot } from '@/lib/types';

interface WorldMapProps {
  hotspots: Hotspot[];
  onHotspotClick: (hotspot: Hotspot) => void;
}

export const WorldMap = ({ hotspots, onHotspotClick }: WorldMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [0, 20],
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('style.load', () => {
      if (!map.current) return;
      
      setMapLoaded(true);
      
      map.current.setFog({
        color: 'rgb(23, 23, 23)',
        'high-color': 'rgb(32, 32, 42)',
        'horizon-blend': 0.2,
      });

      map.current.addLayer({
        id: 'hotspots',
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
          'circle-radius': 8,
          'circle-color': '#fff',
          'circle-opacity': 0.8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
          'circle-stroke-opacity': 0.3
        }
      });

      // Add hover effect
      map.current.addLayer({
        id: 'hotspots-hover',
        type: 'circle',
        source: 'hotspots',
        paint: {
          'circle-radius': 12,
          'circle-color': '#fff',
          'circle-opacity': 0,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
          'circle-stroke-opacity': 0
        },
        filter: ['==', 'id', '']
      });
    });

    // Handle hover states
    map.current.on('mousemove', 'hotspots', (e) => {
      if (!map.current || !e.features?.[0]) return;
      
      map.current.setFilter('hotspots-hover', [
        '==',
        'id',
        e.features[0].properties.id
      ]);
      
      map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'hotspots', () => {
      if (!map.current) return;
      
      map.current.setFilter('hotspots-hover', ['==', 'id', '']);
      map.current.getCanvas().style.cursor = '';
    });

    // Handle click events
    map.current.on('click', 'hotspots', (e) => {
      if (!e.features?.[0]) return;
      
      const id = e.features[0].properties.id;
      const hotspot = hotspots.find(h => h.id === id);
      
      if (hotspot) {
        onHotspotClick(hotspot);
      }
    });

    // Auto-rotation
    const secondsPerRevolution = 240;
    let userInteracting = false;
    
    function spinGlobe() {
      if (!map.current || userInteracting) return;
      
      const center = map.current.getCenter();
      center.lng -= 360 / secondsPerRevolution;
      map.current.easeTo({ center, duration: 1000, easing: (n) => n });
    }

    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });
    
    const interval = setInterval(spinGlobe, 1000);

    return () => {
      clearInterval(interval);
      map.current?.remove();
    };
  }, [hotspots, onHotspotClick]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-900/20 to-gray-900/40" />
    </div>
  );
};