import { MetricsCard } from "@/components/MetricsCard";
import { Hotspot } from "@/lib/types";

interface MetricsGridProps {
  hotspot: Hotspot;
}

export const MetricsGrid = ({ hotspot }: MetricsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <MetricsCard
        label="Community Sentiment"
        value={`${hotspot.metrics.sentiment}%`}
        trend={hotspot.metrics.sentiment > 50 ? "up" : "down"}
        location={hotspot.name}
      />
      <MetricsCard
        label="Articles Published"
        value={hotspot.metrics.articles}
        location={hotspot.name}
      />
      <MetricsCard
        label="Students in Programs"
        value={hotspot.metrics.studentsEnrolled.toLocaleString()}
        location={hotspot.name}
      />
      <MetricsCard
        label="Investment to Date"
        value={`$${(hotspot.metrics.investmentToDate / 1000000).toFixed(1)}M`}
        location={hotspot.name}
      />
    </div>
  );
};