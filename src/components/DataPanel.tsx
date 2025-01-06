import { Hotspot } from "@/lib/types";
import { MetricsCard } from "./MetricsCard";
import { RecommendationsList } from "./RecommendationsList";

interface DataPanelProps {
  hotspot: Hotspot | null;
  isVisible: boolean;
}

export const DataPanel = ({ hotspot, isVisible }: DataPanelProps) => {
  if (!hotspot) return null;

  return (
    <div className={`
      fixed right-0 top-0 h-full w-[600px] bg-gray-900/95 backdrop-blur-xl
      transform transition-transform duration-500 ease-in-out
      border-l border-white/10 overflow-y-auto
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-6">{hotspot.name}</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricsCard
            label="Community Sentiment"
            value={`${hotspot.metrics.sentiment}%`}
            trend={hotspot.metrics.sentiment > 50 ? "up" : "down"}
          />
          <MetricsCard
            label="Articles Published"
            value={hotspot.metrics.articles}
          />
          <MetricsCard
            label="Students in Programs"
            value={hotspot.metrics.studentsEnrolled.toLocaleString()}
          />
          <MetricsCard
            label="Investment to Date"
            value={`$${(hotspot.metrics.investmentToDate / 1000000).toFixed(1)}M`}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Future Investment Required</h3>
          <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <span className="text-3xl font-bold text-white">
              ${(hotspot.metrics.futureRequirements / 1000000).toFixed(1)}M
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
          <RecommendationsList
            highCost={hotspot.recommendations.highCost}
            mediumCost={hotspot.recommendations.mediumCost}
            lowCost={hotspot.recommendations.lowCost}
          />
        </div>
      </div>
    </div>
  );
};