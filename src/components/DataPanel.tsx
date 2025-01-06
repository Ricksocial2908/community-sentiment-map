import { Hotspot } from "@/lib/types";
import { Header } from "./data-panel/Header";
import { MetricsGrid } from "./data-panel/MetricsGrid";
import { InvestmentBreakdown } from "./data-panel/InvestmentBreakdown";
import { FutureInvestment } from "./data-panel/FutureInvestment";
import { RecommendationsList } from "./RecommendationsList";

interface DataPanelProps {
  hotspot: Hotspot | null;
  isVisible: boolean;
}

export const DataPanel = ({ hotspot, isVisible }: DataPanelProps) => {
  if (!hotspot) return null;

  return (
    <div className={`
      fixed right-0 top-0 h-full w-1/2 bg-gray-900/95 backdrop-blur-xl
      transform transition-transform duration-500 ease-in-out
      border-l border-white/10 overflow-y-auto
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="p-8">
        <Header hotspot={hotspot} />
        <MetricsGrid hotspot={hotspot} />
        <InvestmentBreakdown hotspot={hotspot} />
        <FutureInvestment hotspot={hotspot} />
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