import { useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { DataPanel } from "@/components/DataPanel";
import { hotspots } from "@/data/hotspots";
import { Hotspot } from "@/lib/types";

const Index = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setIsPanelVisible(true);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <WorldMap 
        hotspots={hotspots} 
        onHotspotClick={handleHotspotClick} 
      />
      <DataPanel 
        hotspot={selectedHotspot} 
        isVisible={isPanelVisible} 
      />
    </div>
  );
};

export default Index;