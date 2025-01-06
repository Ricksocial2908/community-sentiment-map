import { useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { DataPanel } from "@/components/DataPanel";
import { hotspots } from "@/data/hotspots";
import { Hotspot } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setIsPanelVisible(true);
  };

  const handleSetToken = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {!isTokenSet ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Enter Mapbox Token</h2>
            <p className="text-gray-300 mb-4">Please enter your Mapbox public token to view the map. You can find this in your Mapbox account dashboard.</p>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
              <Button 
                onClick={handleSetToken}
                className="w-full"
                disabled={!mapboxToken.trim()}
              >
                Set Token
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      
      {isTokenSet && (
        <>
          <WorldMap 
            hotspots={hotspots} 
            onHotspotClick={handleHotspotClick}
            mapboxToken={mapboxToken}
          />
          <DataPanel 
            hotspot={selectedHotspot} 
            isVisible={isPanelVisible} 
          />
        </>
      )}
    </div>
  );
};

export default Index;